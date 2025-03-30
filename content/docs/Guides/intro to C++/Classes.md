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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QAZALZD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHRMbf50aYqly43jJ%2FtUY5NwHq4RqEGu0EOnmDFzqcBJAiAfLgnIz5lAS0ts%2FVM2tFfFGEg9T3VpF3J2HUgDs%2FsiZiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOhghxdJbpXSkt%2BfBKtwDD0hwUa%2BNwhdio78Q%2FEXPjMFsDVU%2FWYqEXYF%2Fks7n%2BbL1owojXUS%2FGzmaa21WNkwbUMjSU2AIME8XB6jjT7o2%2FbjtRjceerGFQq7ZdIrONCfaZn3hx%2Fvimrg8HQjACdPCmTlgPLmiRtKoeXaMQ%2F%2FkB5KsB2UDzjgnO9j1EQ%2Ff51jjVrvypaqKXQCmik3lJFSE3m%2BwhM5F31sL98LHCMzc3HwImDHDDpexnh56VkSjRgpxQ8Mc3Pnv9CJIZE%2BlsuZBYky3uG3OXowtL6I36xnNdmVw1inF4VQb8tmvxRQoKuZq4ezgvmvmgI%2FpvAeQUphmedtFK3PRw9EIkWGVD6SCFro%2BaserE1gxzJK4S7XPsJQlcSEVTwhhd%2Bqx1f1zjDDlgRDBcxw4kHR09CkTqQ1EJQ97C1zcS1HxssSW8mvK7YuRXYozIR23hEiQxx222MwAE8uB9daaUUuyTLtVVkBdjxsiKc7CtmbUF0lsDLC%2BfLWtfs0kcwCbTB5aXfJ%2FFggSBxQfpaiFa451xgVCxw03YkR5P7vsYYCtyLgCxXgWEKSqupJcBNxeDVMHrNiIQhEgR6h2T6KVhj7ig%2BE4Dz1lUvHDbSQq5eV3fHvXWcxAaOIN7Qt5O37XOMjlqM8wwv6hvwY6pgFvFoE%2Fw9WJEN2XlVu2QuI20NCWB1P9SXKqtjWOwm2bShEK5KK5IZuE9MWGMoMAjJlLF5lFUKl9ROweb2GtRxIh7amMQuCUF85gwIGyatTreLPSwtMUtyCXhgOVDZXoozzOrkG4p2uw1VcQcq8MUAg9HoQd%2F3fHspMoNoDFpfUbNbB6zf%2BPKwl%2BCKEH4AiXTqlmiplfxZ1yNDcvO7IafyvV1C8qGSAt&X-Amz-Signature=4ce261465da28c489f94469039038e1b78c11adbdcf8e913766ed772cbd42851&X-Amz-SignedHeaders=host&x-id=GetObject)

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
