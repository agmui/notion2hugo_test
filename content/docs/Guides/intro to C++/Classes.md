---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKXXXACC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD%2BASbWtlavw2Tn03WTsXi7POO2S8FykFhZE7Z7XTn0EAIgK0BLZO%2Bn%2Brxv2RzhlNy4E96yw5yMpViZSZ5UbnAuGmwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJ78DqgxzQHCeqZ0fyrcAyMJ0pF9%2B4PabBuzOMg5vgrdxTP9X8J%2FQttJfiFqvXsQ9y4dPqtkKPIZHXOXEEw22gzDtY3aBOcQfFsIx%2BRBBTv0YidGAsx7gGodKBssZhxCgwyBsGZteTOmvNDsdKP1uNliwvRSvVa7ZDmvY3vg71%2BxtIAp79r91OjqEI0H1vBPq%2B7Zzop7TXVfuG65WNVCRLctDuBdsg2J12EfEMtPum1ZbJkJWOeuVG2ag9LStkdkUoaY6Azdo%2FZCXUlgOEZ4ueb8R269D3rH04gtCDqlfEx1ezWskBgruxLhJ9n%2Fs%2BUYWDsU2zs%2B1BHM7F%2F0Az9ow1fJ0x7%2BUyfEX%2FBg74rOks0oUzxFThltAwwh61GFiG2b3lObiZ9LtWfq%2FJGPdOIL1kBMFer7Iv5sto95rdTCkysod7bzAfU1e1QxTKG%2BVIAlUQpbe5vRHZu8FF6faNqrVH3ZI6FEW%2BECxhCOoopGIYYqJhMALf0yPz7pzhtbB%2B360GDFzbzk2oH6fKrGe%2B8Jico53OFmiWWRmeVGU8Z1FBA0Zx4TDcqyIicY80u%2Be0vCah9jZems5hX5IKnKtFglRupooJyI4n5frcTyErrpHPg%2BPKu1LxPsjsuhqs0%2B2l4hwvqPspN%2FtvrxjDJUMOr9xb0GOqUBTI0R0vIkbrtK2jZ6oFICCREY5e8VCZNkkBkw8PC9bGXbJqv7VJym0DgJlz1srA5Jr6MrMJ9%2FIx7D9R%2BGH47c5hvrmfFOtTuOXMj4YsjevkgDHpmNekj5kWi63xPtpoJVMWDS1GHa9Zz1PyiBEzzYlBrGF9gwpo3p9Oo%2Bx8C8H33EdUhR5u7vvqSnhJ9BcNT3i8ss2Efj%2B7w5omXDiGKrHGR7LHyq&X-Amz-Signature=8237a353925a1bf8f88583557ac6504b855e57aca384a16f614bcf9c2eeb7d99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
