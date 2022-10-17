import { Categories } from '../categories/product-categories.model';

export class Products {
  public Id!: number;
  public Name!: string;
  public ShortDescription!: string;
  public MainImageUrl!: string;
  public CoverImages!: string;
  public ProductCategory!: Categories;
}
