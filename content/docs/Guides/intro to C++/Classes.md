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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUVZ2UMF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCqMV3DsnVaXYeMhnxIy1X7IPn1ipb73JJgL9BN4AJjiAIhAKqF3VifOXQa%2BCSI3V8jVnVQZmCQHBqhbbiJeVb2Y%2FutKv8DCBQQABoMNjM3NDIzMTgzODA1Igz2ymC42E2m1W7ydNkq3AMUa0OccGfbMLZpmwPlm%2F1rHzTD02MwKDVjDCJ3Xmp6QOBWga503RWtwihxxbv0VEtrq2M4KjIaWg7lU8LrhrHSZE0K9XF80oBSIcx8VzL9gQJBjirjWucjiNt98TQGkOciDWKNDtGBt8uJcmVKI6Jj%2BiKT%2FAS2yOa3%2FPodjGp6MbdeTraak6MDfJxlAxd%2FeC0gbQlBgLE5k3MMFQdwzabKYugPh0L24QHPsOMqkX%2FsiLHttJKSEriUls6HFaAsI1mgSZcYhyx8v5CIhcYXsfQzUzrR%2FIZXk08PJCMJ3ZSBVS%2B6CAQhSxnM0gCYapAIkKKZHa3opFzdt9tRy6%2FeAyDARANdns39enQQDc0m%2F0Pz%2BcasUo7f8mZ746BjHg3%2FZvERsZ0AUGEJot9ZSwF0lr191ARIWRR%2BBKAf3OH5JXeQqYsm6cFUeeVY66hHw9GrHHf7kRKRouw3j3b76ia8gQ4J0mzz9ovxEiaqocCJ0mN5%2FZR9wlC%2FtvDbW6Bh5OEsE%2Byl%2Buh79c2hkt93kpEPEcXncUxUhsl6%2FP6d1mqyiGTWadPSZQhjL3mwcX5GM5l0fxWKwmnAkkmnUFSD0VEExLrUxdpP487zZC6JxKuj2EwvXShKyPDV22jkjXkaFDDK5eTCBjqkAZcTQFo8MFi7xFxO7gUGnwWcfTqAtZ9tyWR5XBcJBob%2Ft1P2bO%2BRyJ%2FIuBbtkHCYsf1jlmOVjc0XrvLaJXYktbfx2VUep7H0wNjTseh2vSulq5HKoqI5BFcOEKZpqoJQ%2FaqYkk9d%2BayEwYz8BeJsbES8KWWqQ5CnYL1dMrQomhScm2mC%2Ba7OCHdjfkwMYSAuFAKcGQDMtmp56XuFnxNAtkc88WOy&X-Amz-Signature=822fea07cf26e4cc35c22b2322e5f6bd732a89bd261344a3d24217433c344090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
