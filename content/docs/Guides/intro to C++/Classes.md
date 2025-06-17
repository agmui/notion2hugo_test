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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWDTQI2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPRgZCXibnFqqttryvxZIoSIFa8LtmMfJawftEGU9AzwIhAOSwxAsg1hOe%2FBmeeEAhiAdJj4YpSHaPAqxuT%2B4ydYOvKv8DCG0QABoMNjM3NDIzMTgzODA1IgzJmAWCLri6V%2BSl3h4q3APruu3L4w31riXUdTa0nyKid92%2BtrxsZ2BzZ7OLwAi3x9TYG5LkBHflR76leWJFPQYkPPnuNXdA7qJtjY%2F4Yo5COB1HJYES7wPa4AYJ8j8cpAc8gD%2B8wgHZRPVhf1fPwDHNXWHGVEKjH1Q2ntVddKpVsMFYOWauMWyDh3qYJIJdpPxEnG5gSXHkAMYV3I9n7tb3RrdUMm1OiDaLemNqGULkcNcx6BMPhKpTcccoFqS%2Fo5YVzQls2dS%2FLGzYqqI48RksJQEh0QnxzGwEExOBfXAYjfjJkh1R3QzrBiYLwzDFLzSScRSl%2Fk5ZZmJHs6FzwUcNGyGBs8vo0lzk10y%2BSc4d2xqCebvYUJtlYvi1jyvBVO1XEGjNhVOvmMWT6f%2Fu8g3FVTVJ82umaWoBEkTYlQ6JtE4kZPErSO84OnJ3TufneFrHiksNGy4ECtdJ9heJ2pdYRO0wt6IlvYLjMBtPp%2BauTbODcObPpX8JbRcXtFXIlNOkXLGSo4C4FbsrxUAOX2UsPSG3yyCMrlbPS8mVUKAOw23qZnSoIm3M1X9%2BV%2BKV6n0C72%2BffGUqmXOJrjcXvBIsxoghklxgc0r0oehdYuxgNfmKhH%2FI7Qb%2FSdAATStPTAwI5rJ97sxDSDdIwTDPwcPCBjqkAeux8LlclPVDwDnmcQ6lOcgpq7ISYb17Ca0XD1oaUn3pGGYYqU0ZSrnUtGuznwZLtsqz4068ftQIOJ4QExDkXVmfWMaKJgbMigwsq0P2Ze5xxvgL6eQym4RjycFefhARw2e80GPk2XdAjjWD8FVpmo%2FIqQIqIrom7djdRH2YVcDzCZLShSIEdVWBNcngYX8eBquvsczSpQIqNsi7uIYC%2Bohoz36E&X-Amz-Signature=da1bf95b23364c347c8be975c3dc676299e600830abe932fa4b3506fb5be3992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
