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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6LYPHM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCBbDqjb8C65nS48yctfNduFJO4DtHKGpUgPlDYWai%2BkwIgF9qULf2rWWRPRgq3UDe3QAwDBWX9NZ35ZM2aIH1Vj24qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO8NHRqZ%2FZex30lwircA398BST%2F5XuhzG%2BR%2FmIUeGeQ%2FNkhijrhCjOmcX%2FkJ5MWiZGzVBP88NtirTXrFrfrQBG1mZXceaceJGULfWc2oFA56L%2BOQ7DJHKPLJJZa3v6R1BhIEusuEdSGboCV3rmmNiOWO%2B%2BBVWH9nVUozBrpQbDzzw9JCoPLoJaRcX%2FFpgPptU7639pLzbLRR3XSjJbC0vWT45GupBImjp8CZOs9N%2B3L8ONwk7tUQR%2B%2F%2BMnPxHOwnZyR2bbyzpc5vZRc0JEG7ifWZv2q9ViaXSlugfAbJQVe%2FpeTU73uRZzvGrQSUiMtP59Jaz55%2BibnJHU7hHIodh2rFkj7QOvm8vNFTa8DwmgpLmkfUgXmRQRN6vWguThtOHD2vNUcgK7eplcn4%2FcxyOzE75nBUnIxawepuDED1%2BZLbN1d56pTBU4pv4dTJOtLStkBEvfmtgQ9%2FAGmTItrvqulBdV7A5prATIWulogrv1R3TPEtr9GIj9bhVn3Cf%2Fa%2BuOIx0nh3HGAsPoG0Yc8FiOIOk00hz2%2FOWeAglwMDLt0ydXD2dyyY%2BBVNFQIZkkLPjDy6ThT8FA%2BAaxxbkkGDUqIjBaPCVOpHje3463mIBD1TQ64smqbdBnFBpLkcxwdMgWMy8bqqa8N2U5KMPnqwL4GOqUBztciIzREqYKi3BLjQkT7UfiMEOXqnVBr%2BBBdX1j984WfMAGc63Vp9aActMMN%2BqDuBHsmKcntfZA5BZS9UEAJSS8bXJSAmwMIJncqFmwxQ3kkzAUtUX2Hqz%2B6RgPaRhlMU8ygvp8j5T2Y1cWOJQnxSu%2Fds%2FVD1IU%2F%2B4RdStQ1ERwApjd5qW2VIZ2DISBdAYdbf3qDZZZXorxvCucmivajL8floetU&X-Amz-Signature=ff709e50548ec66e96ee797137df578825ffc37823c5ecc826492f6806e0b6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
