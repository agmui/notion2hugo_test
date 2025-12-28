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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHTE356%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bmir2KY8uLCQZ1yVVGpz6Kaf%2Bz3uXAvtUmN8Qny8YggIhAMes%2FENuLblcBOgRYjDgPVFu4A3iQT%2BlW3Y8eCbCB07qKv8DCHsQABoMNjM3NDIzMTgzODA1IgyzK8KqGSHME0RIT70q3ANzYi7clOH1V5C86I35Df%2B7LemVzAC2tePaTdG4Kos4PS51Jtx05yvLZBWUTXRby2PDcpGLvjIq2zxHJkN3nlaY47WAOqaod9ikpmrAMSVAgeKrqTT4yjaHsAZG6gfWnmx2vWBdeCFtKWIvkN%2FFIm85c%2FLOroyamK4DHKNDH9sdIDJUh5%2B%2B9JnmcltIcG1jeGHidaGPZ%2BQqJHr%2FECjNE4bvW5aeAIeQYpokw9SFlyLpsJsrZCybhFaGfRyWjDgQN4ML4iR2mkfzwirmqwP1ifWP2egCSiQux1WQHNoyJUsJTiottESocrq3f0O7FKc2f8EfZramv8Z7WFepmIpZMNsV4q3m6eKEx27j81LU%2FVQDQKgDMuqF%2BItFOSMRZJArq0NqtzTzAkZgOs2cbBYBCs1vXKNJTJAewjPauICE%2BQHpgHDLlJ4mEzDVVVlt8d%2BYPMA25%2FZOnyOd99dWlw9pl1qfIapkhf6pGEiqY1vpMGaGWE6xGbRAxTAaKLV1DUm3XLg4%2F0BAwodHaVjdT90gB2N%2FGQ1LANph%2FK%2F9DvOQCEWrNxjLpouT%2FWhYzvDpd92FIWFx6wkAsFqKrrbSDbmFjSi446bzXPfBM6jJ2nqJhVBTMmPncUOQ%2Bhrc2T2%2BUjC8j8LKBjqkAW2%2BiDBNY2K%2FgJBLTYfOq8ArRhJVZ%2B%2BhrSK4lMZYFBdBmCpBJ1%2BkHSYaO48MhZ8b5PvT2dEVr6aRu7rdO52OroPR9CoahJDlflrhV2r1onn%2BK3Z7G1FoWIue8JT4jBYaHIy1SiMcriy4glzGM65iD1kDQkBe1OEVqqA7XXAB%2FMoo4wNmtOBQg98xG1QRABmfqAnsEl2uWepxRwIyX7b07NXucbln&X-Amz-Signature=a2f0777905fe5236845a62dc6f90140b7c8c1333c73c124dc47afc5d2603b583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
