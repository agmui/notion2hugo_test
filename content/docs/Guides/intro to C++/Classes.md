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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QWMLOZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIArPDX%2BzXtVtEjtJbpfopdXMRqNRSiBb2xzHhFb%2FT49PAiAQfozRVNPi6fdTDKAJ3Gb0Ni%2BXERkePZWK%2Bzc02di0WSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9Tmhn6QYV%2FscqFKKtwDuHPFIVwj7BDcEcTknpJJVhI2kjr7pEUo9ZbZI%2BdpobCxjOoNPWt4o2IjdEYALuhtx%2B5u%2BYdDpOM4JQBO5brCh8XtMLFXoj1PQOffNAtj4mpNTBFdGd%2BNSI2DT5ZLpboEa6X6gMujeXNRNZzFyjM3js9dVXR%2F1MA1WQH6nt44rDDgf8c4Xp4SBA2ZuUqx%2BQp3nwIFCJiN3nRFYPlpkvBBNKxFlkp7lOBxr3o2BvgvlPRUKT4BvEj2u1cHIzBajj3rnYSDB4FHz0hAW3sFP21vkb3jl4dssjy799mCkX9tRWozMGpPkheA3yB8s5K5NGWDDiJbkbPoVxh0S9soQ%2BBIIj%2F5zVEhcCxbY31BFnClzKqRGTscD6Kz66EgdwOQOrLDaV8zmsmNYa5lFOgZUvZXuF9g9zhyfNLVA1bruibxLjeUGkwzO3SHwj6XY2fuxXKxAkVvkr0IWofvGwxFSo5YiifOZTISnA2pPXne8Og4DuBakdgvGB83SwoD2H8lD%2B6v5KrDHyBwylqOS5PVjdPxftogOPGi%2BymDaKJBGXwu2HlqQ19JkrCmi18LjlDg3qP1KEd53l7ecebXM%2FMt0gqOm%2BaNq5zUfM3gklZKksStCF6NZG1qiuc3rAwduj0w5MugxAY6pgEoNA1g46UA%2Bx4oEQ%2F8%2Fp0zUBckwBEYtSjrEfcKL%2FisZYrPHwSIubB5137Rg1PzA11B208JgK1oQZTl8j8Orj2ZFbg6dph3n0AbW6sYejYw7eBFGv0059P0lWyLfxrPB%2FOKSTZGz7AwPw1YG2EC3EomT4mjnEpX4zXmFU%2B9Yk6GYZOn6aRv0fReu%2FjoO2%2F1a%2Btxq%2BR3nKOAnL0PiElNeXm8Icv7siNN&X-Amz-Signature=3f1183432282cdbf575c0639cbc054adbc95ad8da632937afc2a41c6753e23f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
