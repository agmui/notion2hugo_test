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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWBF6RK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD%2B1O1XNOh1735Sy7bQdMx2GyHYImKOUK8RiIXRsUhlXwIhAKq2MIPl7PenK4tazmZsABSBQuwGXj9gizZK8mH0TACLKv8DCH0QABoMNjM3NDIzMTgzODA1Igzu982LMfxsUeyVuz8q3ANcj9PamCykevU5yH7kpMObylIJBtS73dLbJF7NYBg1rAjb2JnclZkB8X6nsPdPS%2F4bBSmzeCsfsh48N2i9sDvQSjsNdD93oePlGpOM3x3DkQgesuzBv%2BKwVr1kH5xPvscejTPEZN8hb%2B02PqDG0lrUwI1xh%2FQYhad2j97qx80Tqfk30Tb6Eq5Qc2KEs6ug31CCWyWM8tXBNvuCvThMig5%2FRGYq8%2FzJjNSqmFtoJW7wIWTxyYDp0fVH9uTSD7Ow3w0kuEOYReFxFuCPA9A4J2US5rrDAUSyxwCWvE0YPhA23a6tNnkOJPK%2Bo%2BlyrVa9kOIt8w570Lqtm0G55%2F%2BLN3mBGoZH61yQUB6qSamsaR4Iz8JCUAIb0eYIn5%2F2rv2lxOxXjGar8yKpEOEMdOGIGlbYu%2FwBgHp2secVZjNSyrwySZ2pq840V514nHHEnhwCtx26c1czIaYqFlscGcubslnodIwZx1%2Btjt%2BbACMB%2F9re5C55aYXYrMK0Jfvxu21lT865FPTVRYfDFSEFKhI4IwVxVv%2Ff2gFnOw4rbmLqA1%2F1mi807a92fXZ%2Bujf%2FINhAbB9FMDHDbYyRKn3LKPVPw5GPU5y9RLEzo2lfX8LGHTuvJWm97ir22hjoLmhbtzC%2B1Jm9BjqkAT5BdA3vX%2BDeMs%2F5mwXQX%2BIgpU0WRPWJf3Xk5KOqc1qIKgBL0YeU7l79WKKv5u7c6rPBNXWilzlEZlbhkDpg3hxC8ZyGQkHXEeCaq7hqO2n8HC25lQTn7yCGA2ODn29Gmn2yplyzNdGKPtYo140x0Jvin5qP9CD564aSS828VBnqIEU8L6LqV7%2B8qeDLRb%2FR6JAAeCwyWzzr%2BQFPD1mFwsTardel&X-Amz-Signature=6616cedb39fdd2f8bcdc87d16e8aaa1e15d4126d64694152a65557b59024e2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
