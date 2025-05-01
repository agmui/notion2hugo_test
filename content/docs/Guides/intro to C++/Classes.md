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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INH5XV7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAUFKpzwEkbrKx11G3W4MJa0VRIcGr7FzgGbjYDzy%2B%2BXAiAsA%2F%2BV4qP7hMg5VdkeA6XaR9UFC%2FqHyN3I8Q072yu%2FxSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfeblXz0z8%2FiCRaMKtwDayqSNz9kjQSyEMZki8%2BRbzKWTF%2B7GnPzx4HK07AHJRaht36DZhF9YGFgfHqty80QB5Ih6Y4cWq%2B69ypGtD7dhzXxrFHr0ZXHPHkhqDnTeUo1rDWCD%2FZVKZMQk%2FEe6Do6%2Fdar8vDk2%2F19FNafZMM2%2FSIFpI%2Fveirq0IhBJW3hgCy81uUYN0isy4X6CNrcPAQIVumGU7N9HQl2mcomRrFsCiBAave4T4rev9O%2BlMYo2jtSmBRdkswXnX%2Bo%2BC1KiGy%2Bql9pOywNs75n93mBj7HEoa0JJgst66EJr3NYesaGqQxeu5IVgQ%2B6h18T490ybxMqg4ctXFGVdFAI1BXnFkAfNK5oWL6wRhJUgzgmJS%2FmkGJRepAJlC22QwxJVFwjDvi%2BMlTF3MtQyXwGNN5dS0kHXH87FkkZSdrttdQSDm9v7VwG2Iay3kcu7N2gTjHAH0eBDvNzrWZkpc5sqJ0Cj%2FqPGdGimKrR3NmySyudXjJ7gdp9Z7pxhB4xBmFtp0c6Qpn%2Bcf%2FDOXCP2AKTtJ389Fn3FOhV8%2Fdg1jwfhssLDgfjW6V60Z34gpsHvSrcEBVWHZmT8VsilKM62hT25zwudN6rjp8s5GYsasmLO8Wl11886e7orFDwenWglJgtCs8wsOPPwAY6pgEJNStpKbv3A81l8%2BTnnioMGHGnjcDS%2BgluVD1BUdnbYbg3tGXcFHWvJCbmq8y%2BdjPlpqOUia%2FobntUWNB882qYzE3tulbmwKrUZWngLg3ccmYVECC1KW1A1MPQ%2FijlRRDltBtyFS%2B2M%2B2sLsNMdcyutgfptUHIro1mR5YwaKbUUI81g76CpuO72734k7jYAUwvxkaj05mn3QVMMETbpqp%2FW7RCFID3&X-Amz-Signature=7b86bf606e559a79454d25cd400815ab1c76cc3c6f5658d5c480c598cc07fea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
