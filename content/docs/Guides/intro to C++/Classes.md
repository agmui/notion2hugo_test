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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4EVDAD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRYVxesMGgSl9uQCCm0AtwBlm9RSUOnGtLBd6kI0H4EgIgVXW6wU6J%2FwVJXoYOdTuytDPQ3CBQa4Gje7o7h09BYxsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe0zTvN2M9t%2BteRbSrcA%2F%2FiHoVeR32NcRUCM7G%2Bl3lz0LzdQDmg9S3FIo%2Bok8QU8F9vNNMNREKRHHD2fKJ3kq9kBPrjmyLYrYpvBCkc727oxVhn9B7CRYAFIErVWZTLRQzbmRSvvVYW7GW0WlgyU4Ct4GcivYM11lh5tQBwNz6Us9GATbxmCig3tIaoW6ET6AqIZuhR4JYJQoLU3XtesQavTUlBOsrCw5oCmMWmhNLFIsrbSPixxePvj97Jt%2FKko4Jfdb9fghFFa%2BbdXC0LSfvW3tJKfFGVrxq%2BiptfJGb%2FwVq34zl0eKNlrD47r76QeYsoCgj8x%2BX63AtTDh%2FkCbtulG02Affvj24A1lSy1fKQ%2FOVBwGAviofPACQnMlHI8rPxrHK8VoXgAAywJUcbHZYOJK27FDBULmP%2FZsgEy0HJ6Um%2B4QqPm815bODzUqKfDO048Z2cI%2BKKFEbIhEC0d0XT2uw6Mky%2BbgzekCNzYxgBNSlsgKdgaLsWpDuHlTrYr0CEwhRFEe8YFBTrPYrfkVuFgelV9A7kYXiWhw%2FY4WJdrRM%2B5p%2FZIMRH8jYDUct0ySwAI%2Fn7fiZZn%2FJ5I4ZbYQ4aIpS6OI0nE9qJT086cgqul0LSAx39gZW8c76uQuH5DG2h68zfpld8tUGDMITByL4GOqUBGXFIIIAZG6%2Fq%2Ff5vIa%2FoBpaO6kPI0P4szg7q65pNdtRa0kRvxCvTD7QxkoZYZ%2BBBqL%2BD57qfNONGbes%2BNeM5gGdc6JY0NkJo41R7kzED4%2F5j3WK6Nk763P5PRpsGxEGPRvGR9DVDNDo0fWqS6n%2FBuXxgGgQoJLtE9ludZXS0AjZp6LQjcpnr9%2B8nxl1M6akk3jBLrahE5IeJ%2BAPH0nP87oHq%2B6Ii&X-Amz-Signature=1a9705a492129d83ed873ec813ca7c89f1bee13d62be0b69ef5f5ad2388961e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
