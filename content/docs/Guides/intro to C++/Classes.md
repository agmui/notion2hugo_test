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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K3YZYXP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQFHkXKyk5BimyQLnul7W%2B7cQ7R0D3iJz1W6LH4geP4AiBHvRzuYOHNtFIQUDH%2FJr1o21tPqph9IVnET%2FRsqDIIIyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM444vPRYxJ%2BCA6Q5dKtwD0%2BSLFs9dyIzfaVanARvZbaUdIV3OWi2SfLg33pGJZ1CctWErtN7tdmtwj3yHVi2i%2BtuHw%2BoQ2QEgoIsxSzR2Hq0yVHUzUwlFTx9S4gwIDrTauC6iik2xZBIChU5tZWu%2FpzRKZm4HiHwpSgyxm1rvfzOlOLLy7AFfWChU9HLHJjFPdgeOLl%2F8jS%2B%2BX6sBIXdcfNjkigj89oPKuO5JNrqto9QQhSQQrK5uFu9JE%2F4uAKwEPMf2VVMXOA06rpLmlTRksb4Je0qKKbsMTcXj1bJjgUM19NKYo13aPsvry8mwhgh516%2Bme9KJ2FwDBgmKVX4cdeSzcevkCm1WYv4F4AlXT6fS4nc8a6bMATMzZxNxM6gbRQSfKWFsl34azrQtpe3sJABVGyyYmydgZxbjJY39PXN76tZ6eKs8Wy6uDdQrxRnicB10ek01%2FGHGbC21zhy9%2BMD4%2FfCzkq8ZL%2BxoGi91ldkde0OJtzxqTPLlLDG0yhExhcLEGhPUtp5K0OnyiYdeI4pSi5rCrY3Fmc0vEEd3oo%2FnwV7SqYQqQpAi6KrnnpJ5aZd5Fbv8vhrbql6gmGSAwrySUu9fcQLLVZQyaFZEOykm4pmTY1zAIQmHZa1V%2BeiDwugYahsetGOkPLQw35XiwAY6pgEzdb0PzUExWojc0iyHEirZLa%2BMDgANYMGWwwuFzuKwHu1JPPtJC%2BgVlNNJbWstqSSGsx8kAlur8dxVIEQwS6YQSzy0Rmw4GRjcpobiJMEn4ovHKYhoSdje3YMbrfPgNfg84Cv%2FF4k8DwHEq%2BMkCiRY85wSX%2FCph7bL2o3wTTwNUepZtZXbN0z78xrmS8Gr5jJxnOgQKJtN58QpKxjxk%2BARX7eI3ik1&X-Amz-Signature=2ed1d8036948ce682fa2797a8771cf03c4cbb537a06978e616078cac8b551d39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
