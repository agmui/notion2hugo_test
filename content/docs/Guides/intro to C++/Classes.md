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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYSRSFZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgKm3%2FHrv3If6FZ2tRqZPSTbeuSUMFEftYNwdryHYJ7gIhALkC8JA%2FrD0U67fh%2FwQHYI1TgwJThUena7fMwNFkpqLRKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsdsLrAIWXfPkROx4q3AO%2BghAbnAtnI7IiRt5RiBqr4hwrn0G4oKXAknYY86%2BxhDB8MMfpoCg8zyBv%2FewM88vlpdZ4zKhZk55k8tfzNlH81eObU3OnnkBBAe7XAvkQxY1vkhN7BDk7e2qdwy8athnY4BZnF%2BA6U5hj%2BR2Cla2RrQVtNysw64HeTvpVSnWNxW5lZI76WWn%2Bl7fqzI%2B%2BImnRB6l9%2FUAjwyUpSXEd%2FwcIuXRk0XxNR6pRTxOFZGIwrcdB64sXhAGrEbHkD5Mk%2BElBbkodGTqqnMZn8t5GjjgR1XSFHm33sDaDcQFcUvQ3WGUXU30VooBMIAj0hlCZRCfxZ6FAg3Lk7IO2zgr2u6FAYtWUijuvFsTc23%2BV%2F%2BjbjjTc97zhrDX7xWNYgF2OTSmbrRGkHI%2FC2n0FW7KdlWDQ%2Bh99T5sk4ts3t0Eb%2BJs3GoM%2FHLANr%2BfxLZXGuV6KgxeTXDdKSODWXsEHYSTLKYib0RUbsRefiEJ6GyAeZHzZdsY8K6KfPVgvUPqaqq6Tla%2BK3moWb77AuTpS9vB1s4JevD5r5snsGGrd4MJDGyuUsao49f9LpBRC3f5us%2BJWZ7nlGKeCzOAPXTCgjswLOO5jikNX7LgezK9mUUvuCqlfh9CJfWXSlgdBKmXlhzDBya69BjqkARIaVBAF5Q%2BlXBeZuUKFQ%2FtNPYlK3lTQPv5k7BpOhmjRrZqY%2FosBHSjunqMKb6tB2d7PfCd8pl9RyvQV48R9da6mrTiSjh%2FVafgD%2B8%2BHTdiwbCBco4h1aedurP2viyv%2BdV8OZp4QZe4fRltrv6zLt7nFbZAKnCngSXDPNurPzFNBu7987a2G55lSaPQNwFgLfXgzSfvwWBEDQwdqZEXbDCcxPSDK&X-Amz-Signature=b1bf34d78b021dc20ebc770b1d0e023f59a184dced27e4b88e5b8e8bf98132fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
