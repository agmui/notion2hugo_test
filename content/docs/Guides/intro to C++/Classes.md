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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TP3KVM5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyt97teHiNPjAtlpRXlcjfiZ8b4JvjmpXRqwoQkgGgSAiAd4nGHaChpfWdieqPuZTY23y2HwaDTond0GfeuhDszPCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdkl0zY0ljU8fpScsKtwD9hI2RKU9iffVVCQCeZVZJou7uV1M8Bpn5PPBs3tsSl6YsvB1esRQ11c%2FyZeozCe%2BxFKmY07kPhLqVO9RL3R80VVRfD18atRHcc%2Fg%2BbpaugH%2Fdp6FQ30mSroMGkeZfCBZua8kwj4yjEydtLDaYyXO9Mr1OVQrwLRw4QmKrURzsDuS5NBlQ27tbytQrzwg9sDDjytnFyV5Ir1jvSOI2YQ7gBegDSVJHkLzjp%2B9xkJ1c4LjrS9BJOAT7gN6VieRtcfXNx%2BM%2BipHbahXui3bTVcXhucqa8z8w8CuHGJ4%2FRykgIAd41VMwoLX%2BqMU1R74E2GABkdx8PjIYg%2FT8czBpUqTEaTzEkqZh0RJ1qzqv19ch1vem4L9HJLcD5ZvKo%2BliatocTL3L3bihIINoZVMyaKUJwQlpOilmQgdPg%2FHpYc2ID4UExGsD%2Fur3Id4LYVffvGv9r3MgvOPmptBVdeglMmjyK%2B2J1ITFB0Kr5xFXHUJY1Tov2RUjCLw9pS9y9%2FYsP7HgB5BwS4E%2B9hsdIHfcxI4Z38MEQIIkdE%2FEyHiXA2JU2LkEiqQGJsyCCL58D8HnuJxIa7ZK%2B%2FKyMiKdtCMpGjMuXp0P0QPR9pFpVypwEjW0RKt8t%2FtaV33iq%2Bn7igwuabFwgY6pgHI8uWTB2XOOioMOBzVcZi7%2BpS0vp%2Fn50Ex%2B0gZdU2fN7moeXQNLB04vs%2BPqKSYbhAdRZU1w5oO1f0qbtfHu7l5OC3qXXAX5JGWuIk1DYTiRXIBo9E7Zj0rqbI42wmUcdmVygfGNxWpocMvaevEmsiMM1bArev1yfXHe0Q85AyzVUrNKx3ozmWNEku74ZBzm2tnhNTb6VKV42ywja32tAsW6cd73xmG&X-Amz-Signature=f43645d6e1da1199ead0336db78b3a35a81d8dd95c993ea9b66e33db03c10ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
