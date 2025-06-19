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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJVASOUS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVjnZPOvs6vjGfS8zDEibNVF304Am%2BVZ08UgnnhlNC5gIhAMlf8iOZrxNubL0vZt%2FqEm3d1UNqingEm16KLIIjIFQGKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD%2BShT%2FYTIjDs695Eq3AMObu28V0CLORJFch45wiaDCVoqYUuFoZEdEz5wtvWwvCUWi5MFwl9rjEfEX0D9Pq3g8A%2FlqRPXz3XwyFu0I4kEB46%2FA40pZNNaliSVmrySWHlpCqtaka7U48aS8HC0exHRXcRT5wMiFi5fCTBkoFrWA6PGPqCoGhusOjn23L2U9nPuy804Qj32SALfCediv2QgJ0mSloit8kuAHiQG9l31hib00J5UKoREk21vUcb9Lo3LeVFYx4i9CE1rWqAKhR0ltWAbJSvnXWIGQ90KProotLSD2xSNUf34o3D9ZG%2Bc4BG%2BcDk6Qe9yG%2BbvAoG4ALB50uJ%2BqCsFeWLdqHlk7hzOoZecyhqvAp72%2FCvbNR0INbw9IQMcDse2XcTreqc8yAUoXaofrtjPdOgSdFQahP0XWHkbSft0k0zAKcWa6zijM0usqCy%2BKM74TITbgcad%2FBlc66arS5O%2B1Ok%2BjrMEv%2FfyZcjhLIA19AljZ%2F9o61mUSeELkPgUCWN1nWrRrPmTgazo3bdB6omjsGA9GORRvr5DS8lwKYnVOt%2B%2FTEDqgF%2FCifTuuFYZtSAYvinClTtOf7z27ffTWpWNuiMnAy4z9YEEpimjg2LeRpqr7sI3Rabd3udvZf%2Bo76aeYnJ%2FSjDAidDCBjqkAQaImBTYXMbkZjxuHXbxODY72X61cvBIU7HeAiDUpTwl64JF%2BMNiPHiZ15renNRR8mDDM5%2Fv9T%2FHm%2FZugG5EflWViJIUQSuyPb%2Bkznzk46VujyduPdBgiBlUQggcUU4XPwO5epCvLtC3Qcji4THfa0Pj0A%2BGSE3%2FPNLl6wzBJY2q%2BBM5NbwjPA7MY9dHWKE1Zix2Iwgbs0gqna%2BZncihkdBAG9at&X-Amz-Signature=c341c46ca37eb55911b531bd0e26176fc7923e7036cbf5e1d0581d03f5c725ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
