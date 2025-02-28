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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EINDYBG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIC3XQHOHb3B9bekxR%2FOqYixRtoWKfS0fMSHvX70uJ8C6AiADFHxvxSJbuBuKAKH50e6N0ixyzIj84dYsBLr1BXnQVCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSm%2FsSD8hJGEIdPL%2FKtwDvvo%2BKA1riNkquYSMJbItwPNZ0fnMwajEZFNL06dD5GDNrJsybm0C3SH6Kq2LxZ89kYwihcPu0%2FlBBFxSCddFRCXlLvbvNoreWnH2Cjyc4FBk5vQ4aRXCESLAp5m2qzyy6GyOcw2Eh5ZVrIo0AGhswD%2B5GLGjOmMjX2Bz8XrfAvI%2FPcgFJxJOyNnA%2FLqABorlB8yJwAnDFadTTFozDvs1w47tXAYG5s%2BI7NmR%2FpFFH5ZBK3hDru8UWhe9RqpsQvn8A%2BmdCN2Vf%2BXqaTX5tMpUXpsGVzMkaUy6L3eqnoh9i2BXSLnrFS076oIWJKbdbMRXu0nBaCLW%2FXwEa2PdTJKYrfYPiPKqBh7akV94KkuvTs35TJ3Mx5R82gtSQb6m%2BYVR2OWCQjfFpnuzKHSbatSgllQCjM5hV6SzJmC9oJbR3cnQ3NrjyC7yfRAgR%2BGu3a7NDNIJUDYz9KbOeewatBDdgIuRIjvMWdRN4jROCAWppJjrtNbE%2BRQ1MKQj4pILjLwNBTiOacVPXk7DYHJZEMyQ9kheVsYSBQAxalOv14i6ftnaHZSNwoaRIBpEt0uTRruxIQVGZ1QmEbq1bZK9aIB%2Bu3zRh5WYquuQ6NAzyrXwP7lNwvxXjSnKPXvEPfcwsZCFvgY6pgHqDArU1mbbDx4melsSwylDpM7D6EiQ87UepZuA%2FJQzk2bzEpnQH1S2ZHaiZmNX%2FPi0nTGApRZbrwtNpVp3hiDzqN9pDaBp7F4ibT4ccq8sK%2BAIVWR%2FY2iZTAQJNtgRoSfYLL3Ru%2FRfODqNpmYMxE%2FDvcPq6YYXV%2FFHIQ2hTXfWCYVsHkKTSzjGA88xXb%2FuZ%2FXSPKh8PK4aHmeK90p3jOhF%2F%2B%2FFUBUa&X-Amz-Signature=81b4bbe4763f1fd4144cc41987a7dc235809ee6513e88f87e33a2f30397dbf72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
