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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MWPMLO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAyIZ221BA1HKTTOXtXRLRw9rTUlDxu4YO4fUQSjejxDAiEA6f98bTJqXao0cbrxxvXeHwRehrN0x%2BtqgyARImlOwuYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO3AIoL%2ByTDRodHKyrcA3PvMVakbWlprtHsIBEh4lCN8lJR3Z4oZ2%2FWMjuwWNFIC%2Ft6TUX8iK1fEpdvwujTjTkTBPqI2nmMAUE5yCBs%2F7Uj3zzAltHTUVNHOJwybE0QIkQcOQhonG%2FadH4jCRcr9XBwUnKg5klR9ogUCb7lGbupt2dtHL%2BBo3woA7A00BPMX7Vbhxh5dok4QZegs3lZUFgRrBahD6k6mPVFh1TdUsyQxt9Y%2BrqwsgCvgPlWuxJCJP4%2Bcmdrxz%2FUZfwnnmvV1%2BcHaqocxxIoV5s6YxrqH8K3JawNv68PFrlH87gSQhHInx3E2iDT425tM8ny5fFIiN8BsZA2ak0lDYAzMZxG9E9XaQ0WEiX9aOTeWmCSFwoItso%2BLHqa2gYiX%2F4wznmpl5rjiyLWEcP4%2BuArGcEPs7YyVmYmCT8MBfU5mFboGZKPAbWysM7n6Z5wWQ5bJXIPvIpGWiY0AkX03iY4ivzQjHLqBFhkdNKweu26HxyLH5G8MrO4YfnCWlDlQrj%2FKoh1OCoueLb3vmWRVn9u0aCvbKfrDja19tCQ%2BRZburh5Mq3rYYDaJcgfaJ54j3txS2ElvnjykkaXFH78SXMmcp%2BKaVXN%2BOb80AAjq0zf0eT%2F%2F37A2o1XXZrqqz2c3IYmMI6xosQGOqUB9E5vhOoVO2gULHpEVi26GHwuovUAp%2FcSU81S%2FGQFmBB5AlKAXghPLw4K4iBd0xsu1HW2PAaN7Y8jOCAIb6x6TeC8NeSeZZjSE0d24AhCgq08nJw2p64A%2BSbn37h7g6sehpc1QikJBQz%2FigjyuLzKHVCSYqRXT7hJBB9vIOD9znu9AHV3AX6T1y0TcKAMuhZTdMLrv0nUx8O2m%2F9uA3NDqWBWtFoN&X-Amz-Signature=d8bdfcb3bad0c085940927a26c80043ead21fbae8f75ef6e9c3fe825bca2b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
