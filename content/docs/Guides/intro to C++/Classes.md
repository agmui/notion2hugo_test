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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3DL2KU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDhmhR9L%2FkFkJcINVH6%2F3IRPspPg2hZXN7oAjIOAXmE4AIhAPUEutdUs8tiY66g%2BpxwbFpYLJd765rJga1ggF7tM1qAKv8DCFoQABoMNjM3NDIzMTgzODA1IgzcTVL5eiTW8ghK1foq3AM0Wsedx75QPrnaylQBgXb1YJ2sZsefpSUC53cWmRHYIhqVDqV3sd9dexMOBOV9SmiUAF9KQXJUAlKGAa7uiA1M9zekeEUpLDb0lhemfZzncHxkdNDb2Xo0ZS4jWg9U8Df1BInHwfzOir80zpqBa0kRMD26W59CQnK4VKt%2FP3UhKGM45uIuGPCO3LgpgcDeIJsxC8PsIxZyFpjQRWNH%2FRD9ppy4BqMD4kBlkLE37h492N0xmIwkD8iYImghL2f9rWmogsBPooaZEkQeV3sRwDzedTNJRRNs3MXm5AL3CEJptgKDGSerk9TLMtBDcgr%2Bz3m%2F5PmVCbkrpvsgij1VSC%2FUgqewQZXURh0bWTS9fV6gaDhKlx6snZ0tneEWIttuf8rlz7jqF21%2B9ds%2B3Q%2FphJHeQKmhu8%2B5GhOMuf9FCY%2Fvvc6Jb9ZJKOp%2Bi%2F658ZiyeGnUHTbiOhvZs01AcxjT5fturadTNoye5BtWAn7Z3IlmzsGSpPV3L6W%2Fvvprj3mZ8dXZP4G1c%2BKE1EQQAMWAp7e6od5ZjtjEWQtdbPhhogTTA7Il4dBeUUqyDUWgiK37LlyNcXLoavJDM4WtAYOKTKIk5u3q12lwtdwFujOg%2BRkC3orWXTmJ65G766xw0DDa7ZG9BjqkAXEaUXa1tbOVLZ5oocwO9dSkh3R2HPs2bluI0r5U80cbX6ClMtfVcasB2H1kF8h2oPIUMWN800sCD2l3Ai4ZjzmdQ4Q2vL6i1ziqdeq1USahA3TNBvgl429VCFNu6PP3EHrUZ6iJFRND5j%2FrxJJEpNDF108dntq%2B8Muf%2BaVRIMNXUzxxdOcD6yWssYDo5zYrrNIh5kWFKP8clsKiQ0VNHByUa5Yk&X-Amz-Signature=263b411717e01edf1486cf3b569445418a70abdb063538cb47d12aa6823bb470&X-Amz-SignedHeaders=host&x-id=GetObject)

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
