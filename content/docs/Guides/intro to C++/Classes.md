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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PNV5DZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIuHMHHaJwe6vgR8Fww2CMZBNvtxrsuNwqUH9KG%2FF00AiEAj%2ByOjmgWrvwunnbXyWS6fWtzFvJAmcD2%2FBYvE4B%2FNs8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDI3mX22J0s%2F62VgEaircA90fuq7LR535zInW9%2BIGZpEzMC5E7%2BCM%2B2P1QY3m%2BHbZGFI80yIMQr0hiR6MdYk%2F9h1%2FhUJouSZL2hnNFSUYks%2FRp1d1%2B9RKifktmQq7UmvO4vvieakcKZJZZUCxdDIC4CeaZGYSoyXTM67%2BbccnKSF%2FtJWKxPYW9f4nMUlpQOQuI8G4qX85Z76UN6MIy2H0NgWl1QNgxw8eJaeV%2FxW2PID5ZCNKAKUmHpgafy6uGY9N%2F7Qtn2d2OIEmg93Gp4SZU8zjbkYktm6wmslVB9kwxSJYNsHQxFmM1zpTJwRLhnZzokFqvyeSx82d7OCnomwA58%2BUHt%2FPGTF4AHL3cYS01q5YQORjbUKPLxw35LaYIcL4tFRiHlQPl6KlB5qWy24wDN7s%2FV09O965wJVV9eSY%2FBXkAAno3hhuSfh7TP%2BKbTVpbWWer5QXUtbFGFWWxCvU0MY8v0nU49C11x05Ht4o0OGuyVurGZny0SAlPIWDAJvl6ckmSGLYVzP12TIfFbCTHpotXNCwxVVpC8sdnfGsuq%2FeG11EmZOlUc3mVtPjBYaqgx74JCVZcr9iYLsRzAKlePHJkKyaA1Va0srfkPAZzEyoyckGYZP5NHreblKkaf806LUOpDioO1i2VrUlMPGT2r4GOqUBcQDWEHnK%2BCW7LcAEhVjIe%2BWX91ud9%2FY2XuecSuVZxbUSxgZEUB3OITsQeGKuoirFO6eobDQEAyyCM9mFfxp14KrEM%2FKEZPkyeJ75a1KaY8A%2BLZ4ioKSiHttCR7i097%2FIhYOJWydarW%2FmMTj2Qp0neGonRAH9gNFGKoKD1elVzeVDGaTEf%2BY0WUNHkQ4EGqv%2BbYtn2tUsMZDxhX8JyjMuuT8qBCcn&X-Amz-Signature=c920ac619e0609ebd272a142ae55a65f6660f56fe488c54215c74e931cff4020&X-Amz-SignedHeaders=host&x-id=GetObject)

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
