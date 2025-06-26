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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQDJ4DIH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFndx%2B4wSqtx%2BKORzxcIEdwyxD%2Bix7aVNqEv6xgMYZpfAiEAyzvRVLUn56vgOYEpa3%2F4TrPNtfnkxsP0e23CujDpQdIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2BiQSPAzZmAoQfkByrcA5JU6dSHvG3l4cnqsM4fjQJplyRtsbcx0WsOQVVW7NVj36QyryR4fIDoSkokanMssMvZZ0yxU9hBHJD0tEMdVzcvK7uJ0mlHTqYVsY4iq3iYHWjdxZpvLeqCDQe7xxSi3XM3L465IFGeLLyi7hTz5YayhYYOlSMki8zzArB1npLRWlJ2GfM3elHK5CSnux8wwEfJXwRR2nPotyCeMVEV22w5caFzXD7Z2IPrNLZK5GDzuPb4m0ilacNiQ8uGERCsR6CeMsftJLpe8qFClPA9Uol74TBwmAKnsOv8BtyRaV0lGwllh%2FhHiCUAk27sN8v8cKmsaI5Ftvy6aV2a3hG9P5u%2B1d42rAr%2FW0WQ1XJXe5IVuyrG3KiFAzoSWMg5OuyIf96carX0WH%2FYjHE%2BcIzB93Mb4WJmff4D1hJezsY4rXLu3DIxBh%2BcZpPwqASTTdQo6Z8JjHiya4xzH%2BDWLQHJzCGUAFZfJTV80C%2B4l45fV%2FRhcWizcyZAFlNFBpoSVpjc4%2FHL7n3%2B0ZR6Vtx0WUnPBet7%2Fh4FhDxlp5X7RKOmYR4q1eNnI%2FoyWRYXpHqHKGeY%2Bjy%2B%2F%2FrIVtXGIMQa5nBpc%2Fltzoal7KLHqzVjq2IHeNraOjblH6GoQ%2BBgYzlsMIn19sIGOqUBbUEN6QVi4hYMW7aIJfh8hMmpdxABEPVRhUuri%2FfeByKBTKZ3cInekTx0a83JyT4KBI%2FCjJdUl8IcM0QeZk%2B2IhoqRkm8FsWrZk4%2BubOAGMpjlsy1EFON4gzgZ7RqTWiKuFJqJERDJsmzY%2F8GwWa%2F0AUyaxbqIIwH0UakUIWip2EQA%2F8Zz0ihUCQZk0Ubq5VbL6ysvrvByNILJDCuRda7M7woHWC2&X-Amz-Signature=0c772973657b15def7662475804555d65f8c5c120213833104653025a76d3d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
