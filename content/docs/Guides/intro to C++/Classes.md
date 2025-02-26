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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWJTMCY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDR0rRp2kpOJijMrToQCQDcXKvh%2FW3Q2QEOsYY79Cq4ewIgJIbOflYL3HqBcFKcZ9dLCe8%2FOx8ANimPqKexC%2FO%2BcDwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIiu%2FCb4Zk3zz7l3yyrcA%2BwaWMZhOL0RqBAHDX9%2BUWWhcgiKy7qR0hrNZVm3C%2B2e4%2Fc8mzKkU8Dk409HXVjet9eFB8hbwLRtWaTrJPVWzhVde8uD68cETjl2YVtBT7ZPvusIi%2BgUVcBlJ%2BrKtX9wMs9%2B3yI0Rf8hBCz7fROx1ltnYE3UrGpdYSSzn6GvkffSZaT72VXlBDTnMA1iGZPASIQdNqF%2F4SLtEyDMwaJV9EKDhWhlJIEr7cFFpRnxxQGsp9QJT2Z86LpuU31yI%2Bz3agh7lezIulXAOyj5eunDl83OGVCWP7%2BmnC0BhrqPpswim3zUB3sL8vKnwN2Npy8gmHWsDv30enlXeM66qXZFbh1uToJR9dGtB0F373riDuaCvLL3lRWyjpajpStECHKKD9vjM95w7h7Klb51I19RpHpTsZ4SwmbdALOUeECpFCaqRJdSum3kwtaa4Mv8Mu%2F%2BTTogVKOxUlrWaiKiuWfm7HYBnC98Nfdxl6i9dQY3H03tPy1YmQa2YR4nJAuMMccPZSrmJhIW%2FedVbWGejtO2VbwUxVS3wVOebblZZKixN6sbG6LRehqou5FZoO8rGtCG%2FVhnF2vEROoiY3KnXN6d4tsnVLPxq5Ursu0jPD09pmzX7GYL%2BHHMe9gn2nJjMJWn%2Fb0GOqUBVZfyt2zpAGjBcLGgkxu2MiXbVlqZDy6EdK0nKp1FoagcwZC5fIJFCr5WwVG95lXVsZ68fRZ%2FatccwQ%2BpE7mh%2FisFEvBYfkx9b9q5HztdkC0Xj4i88gmbjDwKFEnn%2BB0DYILAZlLvkIkgPg7oh1Iy0EJGZec29kVSmhNuNQxmLfFwmjduEGl9lBO1KXSyUpANTAeEZW2SIqQliISeOpRw4TLE7Fjz&X-Amz-Signature=fa411a38717c29c2d9a70ade4801f24859f554884ef49c48b8b5a9d809af6fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
