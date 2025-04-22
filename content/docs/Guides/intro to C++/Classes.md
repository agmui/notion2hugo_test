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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264SYKET%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIBKXzG004m6T8QRuhDKUgGpt3ILMGlhuBILaojb2KgxYAiAwRVf8SI%2FEk5Hfx%2BNU4%2Bgep7Pdtpa1%2BIEusI2lHDv9eSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJ05Sc1CMYrM%2FQB9KtwDHcMHPHKWaEESc3744VUT7EPXBG5UPmvWeYe0RFw73iqIMbiLVJFvWlbpdTJl0Sx7%2BwxEu%2F3wnA9l8ohZooz9Qud%2B9J4m3a5Gk%2B%2Br0ts0ezc17sYJZ%2F5by1gyvg1Ln147UfzsPIMIdKOqPgMVAnnSgXGaODH4SD4YPA3Ykn8L%2BG%2Flget%2BwCzrQrQ8iX8UJvpzqdz4as0zRPNVKRFde8Ft28ANWIYJIE6XAM10tmg0815Db8pnUv9hChYdbOXXTH4jY3xYYYAtQsrZr%2Fq012llXGK4ss97o7aWvFQ%2Fy4D1XmSgFkSTcZqCsVfcqwV%2F9oNoD6ks07AyolyBM75dKh%2F8pY9%2BGaBwI%2F%2FflfYq%2FbcEH2YWOMDasG0sGpZYlCsFWHz%2FAUaugqSNFwKID5zFKvW88luvYjEzdWZ31GKsInzdRKrafRU28P3ApwwsJSNJnb8m%2ByrtH8oo3LVXHYq37ckE0tj8SHZ5wlvPTeSp3%2FjJUB14gGv5d6si%2FgS0a%2BjSyGwgq1sT8sjSjFDuaD8OH%2FM%2BONQDHmpNF6qEl7vbTe1pCH4xUPTMVkYTo9VPHLtoaMEvQbipZ6F%2FvV2KSQ6Za6oocj9%2Fw4QpX33XsyB%2BTuOAbQTkeols2oLQYztbtqgwtNWcwAY6pgH8XxsFQ6ISHS1vO2lAH9xyjOcRc0gHaqOQ9lUbnhYHermITfiVwlfn8iLDsPn1ORyvc3XDQoGZdPJrmV4AT8fkrBnfWz9klzaZ64c0tzQvtGDxPSN5dVJEKdvqCfE79qz8NBff88qWPJhERZKsNHiNZsICbbyRSaiiYy3nWpID8KOSJO%2FDIZTScojYbM9OTIPhfSEzYIfIdgNEQz1pzVVNW2t39PJJ&X-Amz-Signature=124d835baf8c331ac624e7b8a4539f5acbc751b13b9fceac06f611a9d573fc56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
