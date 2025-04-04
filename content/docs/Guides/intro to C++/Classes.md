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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJUISIKJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKtDbgMC%2B9YAvdLyazNCUmf%2FQzsCR5Vzky8SIDeTpUlAiEA%2BCgMBSWdxrp8oSpvZFixIVcHP%2F1GScJsdFKGlMxPG0IqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSV7SbZ8361vTB78yrcA%2BJYdtrEZNEDIhyHWngvte4FkRDhrDZ%2BI5ob8%2FTRkgS8L3wSLe3gMpZGiSPZAZDfSGBleV3YylMQWKQ39%2Fh5QNoRiHrkGcU4lH3Zz088G4eF3AnSM8Buj3lFrX6Ea4iiHKFYQB%2FHy7vMBhqrhIjrv1McYNL%2BpgMMuHPlbOoOLe%2FyZcUiGeVYZG71kqpHfRApQBUbqVS8%2BZ%2BCz33r6vQ8cUSS3qCM2xUhQKZJ31btpRsq2DgClZSNMc335eRdEEPCNDLCvqrSekILibdIfdQ5gIbWEu8MG3xxHGxzzY4JMq%2BKpembRy53kp9BMqH3UIqZur1zWy6vpgZPSQgF02oHehPkjz4gn%2B8QAKI3TVh0UBEGihGSrLpqyX4AmUtMW%2BjaA%2B%2Fr3rubezlUG2klgD0Bo6pJC4KhNyLXJmz09PQXQDdkHZOfXEhAHe46fZ6iItJb%2BxTjN0wM4CDB0009wQameDklCqKNwOdPvH27NJZakIa5UNYRv5w7r6sO4fk91TCTMZF2NUwRcyR6zZLmgEMQY1vCFPhR%2BCxBEo0LcKVwPe859Fy%2BJSLoPrW7mKfMf6iXkz4D8JtweSJ474U%2BfgZME%2Bdo1GrViSYmmaT2qIFeEi2pEy1qWBm1e9OivXMHMOyrvb8GOqUBlRctGHGl3JZaIRYaFMqFuNpA0IIhh6X6rHornVBybzalfwXp%2FM3XeIuXwt1EKwWlVFCf0%2FBYDz8PIxUZL1dMkPoR%2FueLH0EmY1g3SEuaVV2JdRhhclGVlw5h5VDYkr%2FtYZYeDFFswkCDYinmDyqLsha0qp8da6eKN7kzajflv%2FdUm7h5626pjy%2BKLUvUOaLAFl5%2F%2FfXcJRcSyvEfTPrUcMTiObbh&X-Amz-Signature=c86eed73bbc3d21c5939090b045a037dd9f92922f602879a7164055af71d0d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
