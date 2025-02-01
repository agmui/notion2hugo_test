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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YYFCV4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIZw8yz%2BNUuSZjHY2lu7iLauW2fP5CBoo3sjjRikZHWAiEAoTGs3eEkly%2FIZ8cO%2F2AODHWTZwXJMns6FUiugJyspaIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJADP060nN5uezH6VCrcA%2FV86iB2gTbmtOWeLC79QR6CQHHR1Vql3dN%2FHaoHx%2FnUW8qPhQip1oXK6kBIcVyYFwzgT2y%2FTmdRJR%2Fb0GlkmAMcCUCEBaYgAde2IBZHRprF0cAQ9hGEiEXHYfOaUk%2FGPhZfC2%2B2vgYCPTaaPuyC3YJIdMy025azZbKCkZ0cGTvVrm%2BGWwAeONO3pMTy0Z%2FaYF0vPO7NPDwfwP90hIzyYhJCstPQMwt%2FxXz4MlZwsQK6dPWVkabZ6jKubs%2BLznCVwa%2BFhIZ4VLqx2ZQNkMNZZs1iMX0yHdOixRNlgyPSgBs8tc4JdAEKgQMbmuhtcv6ACiJwEvlpYBthR6Wi7awmJvVZeNxnx3WvskrkCYRsD4ZcEsGTpIH2q4s7B9dy%2Bkm0hzb7tfDexxPQ4tZqJGqr2ud7KgIZ%2BQ92YzpNUpPDSTJirouVXT0LDcWawMsHKe6EyhLT4wE3%2F4fjvovCmz6fbMh1Oo0AeIfQ2LEioIrpWbqCbxEO%2Br%2B%2BgQnwyHcfnaeFVAIqgP%2FbYrUZmnC%2FU8X4%2BTO6Ak3XwfYtBTuCO4tbrxzEsTjf%2Bmcq02WqW%2FjkHssvMnb3SdiN7UpqkUbNQwsjAyifWDP23MEbpN3yeRujK303rmMRB4YqDqTGSPNdMJnD9rwGOqUBBfp5jlqP7k4i8dyIFqUwiMNw5Iv612EwOKNPDGGpYYhrJRlN7%2F4tFEmqbnmPynB9DeHYMRjP11JWzwSjBwOQ4BifD5hYdcNZSoLdPZEw5y7RyrPtreZGmv2I9V33aF36yFBhCzO4eusqxegbNGthpKjiHhxW6Nj2ViWdu7pU44UQV1Uqq30O4CZ2FqKKGHTQCiSGZY%2Bc8QCQa3q2YshCz7W3cWYs&X-Amz-Signature=88f875a568f2b5cf3351d07e8953597c06520f1ebf64e28a0e703c608b36b4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
