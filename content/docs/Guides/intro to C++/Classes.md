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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL5PE4WX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC1LK97q8qNst%2FDBv%2FJYmA70WVa02neGrDTLNvjoWOm0wIhALC5Oo98pDjTlKMuJsa6JNEzXbU%2Bvr1fbg75gSYL4AVMKv8DCDUQABoMNjM3NDIzMTgzODA1Igwg28rxuGQ6vy%2FN03sq3APwoEh5iXHFR%2F4EJR5wczYLTetevrnVu0CIJ4%2FmhgxSKcZj1t0FVqF7neqS0PAd%2BnZ7ok3t9aEXJeJv%2B%2FdT3n732k819DZZE7ZuJGOC3ob1r8R3fUa1GxMt6wfhC6kfyneUW31jq%2BlMj%2BOoF4sMd68rUU9einR0LgiPsDqviZJEt23e3yBCihK1F2bTQP8n0wFjNBAYlbGaAcfbHvi%2Bo4W%2Bg1WvxdHUmhI4h7mTc9pM5FlHWmb%2FEo3uUiii8ngG0VO6EFf8w5bK4aEcTB1J%2Bp%2B7nF2HVwa3XYUGJazcf7exkftjDVRtF%2Fs0lGosjTR6pwrbQPe3wtwwRtJ122iXZOE7gmkoVrOHtCoIYNszRfp9rpXD5e%2BO6HGOW3t8ppwBqzFZNVPkNEjw4JAbIeDM3GGeAyJTgm3Lip1YvsRG8%2Bmuw6WozpJBDvIJ%2FLxMYXuBU73Z6sZoL5qQZ1Ao3j1tx8iuOvszeRokyPM0v4BZ8CKgzgvnbShS54UwOznoOsfXjXn%2B7%2BNb2WxPJeB5Dc30gwPg47D%2FAAyTcuqulcDvh90zWbWNKt6kT9LvxD7ogKZq9WUac8Xdez4iL1cYRRJmdM0t3k61L5epb5HAMezZtQrQOeLqa8t2LR%2FKn9xiZjCs1YLCBjqkAWG9yzIhlLt%2FSx27Aat4kTOurATMGgG9FcKUs1u2Ih1iWKsE7AY%2FV%2Bfa5DLbpNlSQ2cwxGSlugPUNuFP3dQI4d0BHT5AyDyTCIFQgmyCEk3%2BbJjEelZfBMV59n3iBsioxqmntJDlC2zSaEydQJIBJ0i%2B8E5Abrs1Opjxjp3b42bz1zm4zxP912NPXBXG3zFHeIJePFR6jE9218XtyK3N7B1jTlqC&X-Amz-Signature=acd66a64745012a65223e1b6e70f5cdc52eadb8130047e6c1a806d138824bcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
