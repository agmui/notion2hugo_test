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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZSRALU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBEABismVxH5ZAaHXGuXHpRqqH3d2moNrYEFI52V%2F4xnAiEAhOSzdnp1Y10GUeR3rm2fGQgR0GyXOggnxUskKbzR2Vwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJkIjkLm9MPQXa3z4yrcA716Z%2BeSKTlPi57UwY6QHTJL6cdkPmN2qg5caSAIKlyWncrJ%2ByKAhfOcSE9Exzy%2BMLwRFrbqVdRw6b4Wz6dcLaNT9WgwAj5%2BIzL0ElwkkO57vWFkKSM31kk5mCWUgXbZ0kHCqJZ58W7UqRGCy8kYF%2Faw6wIQVseaWrjvC18BtCTiSXeyqai7tgnByB5gA1HfvXx1VtZAXhoFT1JlrLc35vrBriVOgSxOYllCbamLLxAHqOj5ZXqznDCiDn10QKGwdqXVAlsSdTw7zg5M56bdFEFDQqnza90tNANKn%2FwfNnabW599aFqSLBjFmOMz77M%2Fs07NICpu2YCn6CblDdB8HhJhU%2B8FbG%2Br%2F3ahdo2j1I22n4pIFDHM0D3es%2BPxNZK6l2iG3zigDAcvF96QAgVpT8IkcK5k8q40WFlPDMiw%2FUUvfKPlhS9VX3PPKcdmK3UKW3Cd5FSz%2F2mo0ekOBaJLFIs3rHS2l18jP9o9PSGF7AWvqnRWfcXoFOMIf%2F%2B9baP1Q%2BQMKWabhtapqQpYLCqN72kuKpBCR68dB%2Fu2uomBMB%2FUTi3nHyA0kM6Ab%2BRZYGmdqGdrOSZUPp7EluaShcUm7%2FLIPyulely32d333%2BIVBSa9HMgieVu7KZbboG%2FLMMT3gMUGOqUB7To9SuIvHdr8HO7WwOqZzj3kqldTQpnsLxoo9fI4HD97SjH2iRAoKXH4DIcybb9Sx5OY%2FX4NiYSsfYK9XvRHSU0yAkb3wpss%2FBIkFqpCLcYvk4%2Fqkh6dFmEai8gn3NCSbhW2GG6BgQKRZi87ZXXdaHM7Tg%2FKueTLqLL7gKd2SCaaLKQ64eNk7jhmWax0LkLakOt1S%2F692F%2BA2CHlf%2Buxk3O12EO%2B&X-Amz-Signature=c8ef12fdc9f8ab51fd5302ed37da857e19041a9a6156ab3e00f627edc35e5a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
