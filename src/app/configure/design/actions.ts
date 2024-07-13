'use server'

import { db } from '@/db'
import { ClothColor, ClothMaterial, ClothModel } from '@prisma/client'

export type SaveConfigArgs = {
  color: ClothColor
  material: ClothMaterial
  model: ClothModel
  configId: string
}

export async function saveConfig({
  color,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, material, model },
  })
}