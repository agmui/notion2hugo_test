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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRYNDFD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbyuaiqOrDVBxUZQegoQmRA9ccU1EwXxCf6Gp30Ncf2AiB40Hr877GQ5c4hw%2FAv5dXg9sFeDa1YzUGRrrzbH3g9SSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYbE7O1CAcTZOajEKtwDgzPrw6UD%2BY2xrc3msS1sQyYSa2uaj0MKQTrl15ACblHspKR819r48gbUgxLL2hgYooHL2KkFYA85mH8YwAbeG3%2BdTztNoF8De3XxepJVB9WWOki6RI7LEgxbp92KGC2No%2FslsZsMe0QbFCdv0j2GC%2BNskWs80YhwMVUnOY5iw0lM%2FKlMWHOQVRoTS%2B%2BsP4qePgDfQ%2FHpCmmNijRicr%2F5vU7XxiBHthqWbm7PF1w4vibpQ7GARyIBfAHBB1vcwsMkCgg5RDBYMcy1m%2B%2FFYTCs0ywikmmro20fKxnGyhpzBrrol94VkqJVWtn7FGOn8LPf%2FGRg0xa5LWhAOHyQSuURNnIIxOcDP8rsgg4arN%2FDxw8%2BzRUDuJQ%2BRQ21IMxmv3UZd%2BgxXOl06Dmsl9yAMI7MvvPOJi%2FlvelALqEzOz945nsnDV9uRVV0pEpgvcIzV4fGBVtaHr1xYYA5PpYYpVGOH6sc6AHcvPpf1Qg2VjWzXx%2FwK6zsDhnUCcl0yTbmL7jVspdKgF9inHExpH1RqroRQ9%2BItKAcMGJuFvcqV4wg%2FE91QWqByKKkcA%2BfwyiwaXLR3%2BFlQMNQVvXIKMB%2FbHRN2McYmGSpLpYCYqM551IV3TNLdKD%2F6p6IOUdVkaYwlcmrvQY6pgGCD1anZaWAA6pNOf2tYTfI7sI8ZyO4hUYoHMSV3mMl6p1pEsmmVtaTUlCeNgyjdq4uQFkwveeEYYQAG0SoaMhXllX1IfPF4BiWuLWfvvoCm82WKS6ZKow3aaf5gkxPX0vjz0yE3frO1YbA1MZnuM1oxl7CwBgIBbRrARfk9W26tQy1FV34jG5Fkt52W6AI73l%2BVc%2FrEu72x8gDnr3MPWkkGwndtliC&X-Amz-Signature=56386999a1dea7b029db805f29fc114d6034a2d6ea76f23e4618dc8818a1f3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
