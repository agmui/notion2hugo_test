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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHKMW2O%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiauxg0ZOhF%2FoygS2ukCA8puzT%2FtLXh9H6xEJhKIWdwQIhAI1wJEtIFrLH6ETaacnJUJAfQaZTawTyUwCVujph77G1KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUEeFNpK9mMB8BDswq3AN550edw3JS%2BYKx5JZ%2FGGIqnbW2thVbpvccAS2M0y8uSrtdFYYO7%2BOUqVu3d%2F8DJCIekfQQqxb4DJG2prISdA8QciIKRiFA91bg8pHtrPvp1Bym%2BiyzBZjmej1zOtBdaLrP3pqEu87Uu2wUGA6es19Hht6GCLkjH5FWcwYwjwj3nvg9wDaLFGLnpPOmXU37aOXAmUsZpwMpuja%2F%2FO2zyOeoDDyI27dfY9PnOwnQOB8vL7D%2Bk%2BFQDzRuXuy0J%2BMHkJcehA01Mppg4zBiB1KreHHrUcAC95GhoSf8ePFwDePDyinIqGrNEDTcf6BtQdZxE9quNfSPF6BC7sas43DsFMO6JAvN2wTw2Le2rtlYu3tGKyGrhnMyvX6F06JIdju2kJ67BGWUTHe4F1HhRIbOblplIy3HWG1J5AdtxDg2jJc8jMXJgMqFz217MUFG9Yzk1BAoeTpspzYMbDlOEc7XaU4imyRDdEWlSIdm9tP0PA3WMDs4PFmWLFKwMQikx4SMjFeSENdqMzRkmRZ%2BLZlgFGEeNJHRFA0xXpIcFHmSd5t9Qur17kkyETp6SrwxmRtLIaQtVQ5Dyz8iwogyKmMU28Z%2FpDApIInIsyeOK5NMVML8NhYHVsXdErEYR%2BY5ozCPieHBBjqkAUnfCgzsHv54AI2HtvwIDiHF7%2BDZqXX6QhqdYYP%2B%2F9bPeUCo%2BlGcLVB2iVmtkgjiUl%2FjSZH5abhW4x5UsZyc7Yt62XNjtBI1C0wWIGpljf5gqevfyLqqgnj8karmXURCXl4GwSQMtw8rGsBYGIJsR9OCd4nv7Vy1X9yKvtjqKfYkYrjz9n9QNj7h1idn1fn4XwDYV24TADA9oGsr34Eo%2BiTQKGhs&X-Amz-Signature=6c4ec91ea6112128ef818e6c52b4b5a9bde0c434e88501ada78d93a051be76b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
