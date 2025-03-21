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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOWBPIZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCHPlwCrDwrIaXaQVl6oGmXJuit6XeU4ip6wciHmQYXqwIhANd5lSyc96xBKOfHY2EU8XECx7uLmnTs5Sg0mkkKJGwhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUgfGsKV%2FJMjaK4bUq3AO6h3bkC3smDKyVvCO1fmbL4LKM1AT2UtMIdWM6bpTca1ZPz8C6yqFpbDtItbR%2Bg9ADNE9x6elfZN3wKlTcnqPiywjdiP70iF8q0d0ZOGf%2FMVZt64ZHWt3COnY7OmIG1RkCQQKQN67fnFYol%2BSOiYl7nhXR8P%2Bj3sZ6TM%2FGZJGoQzQXMUgPz5JR2VgwTpco%2B7VapCws8sKcr1fRES44hXrK1SnwDjAiUMSbOCd%2Fcmiq%2BJkNQNN1Hzw5H0kyIwaRZBjaj%2FFuNK60Z%2BOWt5qfX5DkkMsefC%2FKo7NO5%2B51vJqluBroaYsZfA%2BmOEyPChAsWZ%2B6IPsD9y1w3KtfV9Q7prtgQroSphC%2Bn9MD7ejeroixUVgNUVricilr%2BPG11FE5taTwlh6GzUkdUdJgtDxoYaXnXoP2VL0n2ErhT5p5DzY6Dsa2u2NQ%2BN17JkumqKLaYYaLssTmDu%2FtNax2ThNlPidhJsxmstoBaJi3bs4psBwHXzwZ5Do2KB%2BMGxqYoKEhezQsFIa%2BgHdzqjy7bDpTI18P9HiPhms2szJAG6nAQim0ozOC%2BQLGSI8pORAyQow542N2lOJOf4Yu3tbCcywajbKpSx65H5z3umkNZSiKp5eEMU062vMxIrV%2B%2BGZytDC33Pa%2BBjqkAWIZnG7HnB%2FrS0D3HESKUyijZkl78SC%2FwFJlVzyzy2mhUlwM2SfdSFiq%2FhJHo1INCfStiTkS9QaoUgntqNhJ0H3w3M27e0ZHHirlhMQISwBmMemn%2FtRUXYJ4xl3RK9HctgT%2F%2Fo982bFyk%2F%2Fv9iHScj1gARmC8Kt5CXmLi%2FbH%2F5U9WlMaz9RXy0f9DZa9YRmrOtBaXySjpq6eCL8G%2FauBVevqc0oS&X-Amz-Signature=d0a72d3b9527fc84b9a406ead190f88f5ad8ab1fbf062352ecc9ec1530aec580&X-Amz-SignedHeaders=host&x-id=GetObject)

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
