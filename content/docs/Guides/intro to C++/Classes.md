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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJHFGX3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCml5gdPAZcWW71BX%2B8zQCTMwxuKxVOXrvHPkT1bFZ1NAIhAIrJWmzIXY0ISQQLCEG1H7Eplyv9JRK91xwmhUX4cyRCKv8DCDEQABoMNjM3NDIzMTgzODA1IgyrydXyIlmk7LZzFkEq3AOchHNKlpMa%2BDiynNTA2CtsZj%2B%2FkO22igNLvhaS1r755ZlHa8bAk%2FxCm4WHVumCDuI8N5ETf6M2%2Fx9AofM7WqKUshPY3PWAKTx3e8W4GXTSqolbi45PUSXnDQOevPTRo4%2Br63HBRdmOrmygaAzNPj7g3kDuUwSJS8pEwuRzykiwW4lVWoBYNveHevlpcEEqbpZ4CLOyPrPQTjI%2BVVJrkMLHjuY5pH3lROsmxF8Zxfi4tATm1O3ZmpcdT2P7iIpgoDIb7Srs9vGypWFlo%2Faok9X%2Ba8l04Ox5HS%2Bw5%2FJ0n6rrkWhAsRUtrSkaykJ4%2FS%2FxkZgWwlSu6dRp9VAncPSjh8M7FWmtpPq6L%2BuBTYxuzHxo1yDN2hWrz4BXC43ECOjXnqKTAKX4xpMY1XYZC%2Fbkj5s%2F%2F%2Bbr7CcH9s%2BbVu8vqEGx9WofzYTPrhOfOw%2F%2BMpUBxD9NqKrAvP3jjGe1QZf3Bf44CwNpEjQwztTdnYroj9HI7YU2rdH7VfpuIAnjlCeLLvRpwmnatfpwz%2F3q%2F6rXTiGLwdrI4FXNfKaJi37B5GzQrDNee7gQ9Uzo5PSXLlsXPPqCeI46z0oWACjfzKfVFT%2BCXML6iy2eC2GqbEt79xgPtx1Eqkvz5ugkjWffqDC67J%2FDBjqkAV0QEQ6rWsQDykZlUXo661EQpeR%2Fjl4qRd6N4qXkBCm1iTB26fS1VBDO1RSRKD6RQ4Ny6SAkPLNhOLB6sVQzKCxlfwvOb7VLN18i4WN32fhP9lYGSGEx90rr8ABFXSWQ8abEAZBswAL0UwSR45rUVC6KO25%2FNq%2FQn6CycY1%2B%2BBEBwu1ItSutIWlUI%2BfmJnsPqxzTbofQb1sOIQycds2FYg0arUdk&X-Amz-Signature=f3432d9c1fb21631f9e2c16d22083b2436396efc53365532e822a5257e24eb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
