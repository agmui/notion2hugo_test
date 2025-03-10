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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NH7COB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCID9KC749LyCXIz3OmyUMRDi8TIxXwyN0WzGlAx25npdjAiA71g2slN%2ByNKSc3%2B5pAYWWYBBnJY%2BT07RlDCTCxpC0oyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAmqbeOY0Rx6BicGCKtwDLehk5DlaKLayfjlE036sWxd0T6LpiKoZxuHK5zySDMhrtH3Mv9nY9OnARvtKCZN%2BLEkYCOiV8otkTlSabAizkPPsDiUCp9fLbbnebwYc4HAu9cnZU80Qoob5gbXytbhqclkBmRYfjq0ZsX8pzkdfNnWjgvULji7msP9rp%2BZ0c4zQuvrIB7jQyf2QRH7IAxEcEuKp0xMXsCBfV3x0FChU4rSmyuXRPdUK8%2Bji7BdLRUooKL%2B6eD7hS%2Bdhl6H4snsMG%2BaDBwFPA4WEou0DARc4FyVn5zLgj4m5nbzt65Rp1cq72lBMWbscX5AVYHZMa73dE7eQXTAooli0Varz2Ax6hUVonS5k9TEmevrOoq3hEh8vHrWmMeybSjEQaVDWRT1GuqFRElioCG21mH%2BTtMqLwlnWlcAwIgYViXP0iKH9eYqvY08J%2F2BxJrXUy6d7GnccOFYjYVrEJ5wc6LU51B3jfRtFXS%2B9H1LIVxoV7M%2FubaUVQ7ILtKcpJsvBIKrY517%2BUsG6BC4JoWwsXK%2FmppbDPyDecCI8W2nbxOP8V2uKha1ZUYB%2Bj4LU5HubvIQmf14RxLrwJjf2N9qR%2BCCUVVbQMXL8O%2Fv5V5rDpkqV9RiTRDcruMJubc3Jzzxn0YMwssu8vgY6pgHEUpVDR8ztthfPiZjzDXc58ieDEcyND%2FeMZ%2B0cfJO5fTf7MRmGcj37CjibDWoZe2iIq6nHOZ98cW81zRMMwFtiSQwDPQZlk7UPxkyYafQYWzTWGOh1hfvyOVfxvSbxCvKcrIxlq7pgaXNdw8H8EeVON4sBhDq8L6gnk0MGdssbzPKvpAvtFesTFiLo8fWjbgpV4etaSgh1lxyLxX8uFVLz0wkib0Rv&X-Amz-Signature=9fa08c39835599fb4f814eff912dade465646af90b779c0a7acd4b219fc2173f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
