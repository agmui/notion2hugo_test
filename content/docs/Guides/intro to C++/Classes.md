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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHXUPTO2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAh78TNlDtzYfoeiGYeJmORTlFn7NsO2kgX4l2h%2FnW72AiEA0HGSWwSGBsttFtgvRGSIGQ5UJfqNyTI30oqreshnl6Qq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJ6%2BskQ7cP9k0nTJpCrcA1AsEXTxIB9sWAa1MB2Ozgk7y7C5ki%2BWM8jBWbm8Ku6rVacvXar%2F7WoVNAXGTiZSEVggM1Uco9agx4GaqWC1gXE3n%2B8IVx5CtpZraGwzt3sG%2Bp7TQ35PLSkPKQlpK4hX8hKkJyaoFh9U85XrRYH8hhHChz1FIsmcF2kb8ogyvjfy2niom684vEF3Hb7u%2BVjjcyY4TWe%2Fn3%2FF7lK9f%2F1KO%2FVyADoGcfhTDSjlNmuEr3KNwT9ry4wz0VlPn%2F9LQrCV1XHZpKXu%2B5KJ9Q5QDg2%2FLCifaI2GGZkIm3H3SQH3rYrxFb8qdwua%2BQ6cvalaDtbMsKwqqo3o3dHg7FuRn3ezodjLVSamBjiQBuMWRDhS8gjBPmwt%2Fs3w0nifqAmN%2BtWA6lg2zqh1qGkvFpxR3XsbLoZin%2F5pCxPCIEjWvFIReZ6OgkpIgY%2BVpB1z0jWoKIA0CWq%2FAMvq0V0AYEFPD99rVjMpJc7ub6VD8dUdiRLjQxU%2B7puuwcVh0Jx%2FtZF4tVeTRp86uKPTgpUn3Dd10bFjV1WMI0eboFWyZABEbhkI9ZRrqdis6oQNaluSmdKEu3%2BhRqKmlzQT58VOPPzl90qeLw8ZNCfrzyqaHucCrq4fiNu7JMaNCHaPiOhbeMiUMMevwcIGOqUBWyTu6YwWawgCX%2FnC8Jn4SrP7Q1YAyRwsr3JqpqiOET8W5KzBLbfJ%2F9Dh%2FPMnrNpyMWrOr8t6L0%2B0iG41BNSFRJoTN4mbl2zXd%2Bm4aOHpB%2F1aZojJ0qiK8OLYUu1It8PXeiNZeuMGEYLvLwMz2IePCPBVEVZQQrK%2BcrVwEE%2FXfjpX12Q0Z3brWtNBNZrcIGOu2oilcRlstoA2AmQeaSdxQfx6KjWl&X-Amz-Signature=d9816258a9eab543bb4d08ab11d23528e5842179b5247bde78fa17ccc2c563d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
