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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN37TOYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZaKz7jfuMn%2FYNRfeInLZV1xcxSSsfUabCg5gGcgdOeAiEAnmVm6HA1MiyC8dyQzS3RwrvUsufX2ZKrSW87Wb02L6EqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe5jf%2BzPCxA52GVkyrcA4neOkcZsmv93HUGZGXNzcNiuVqPKTOY8K0z28ejFGSBL2LGNy4z6rxPjUeD43lhEVAAax28eKVt%2FNQxNgjQHpoTZJnFAyiQtOLC4cB7%2BZhWR7nanyjdLyfmQQpxX56NOsSHPp%2F7iQi22wwpyWfQtds0SBUTdu2T07ibxa5%2FaY0bRDi1Qiocpsc5FN%2BZ%2FA%2B%2F4UFklSOzRKh1c%2FW%2FvSxImL4SoJJbvddYOmGph27tdNv9yni1k5W4VysdV8zz04em6SeZqW9OUviIcaEPh5xbMOZ5mBBGP329iNdihXxGvcT81fT8Xl4hMBCIdudD7BxATQP0pRG4NiIGTNaNPzrD01QWqevREZNJjqshE7yrwIDpERE3OQHHpTRoJ47ev2ue9%2BDEkvo%2BZYhfPmZhKIhNgPlr5jj9dcnRLAU%2F8Kf2Q0bJlMqMjvkYs4xTh3%2BOrdwuJBcqnDn0tscIldrIOZoVz%2BXMTMyVftup81rwUydZeX4%2BhXA%2FKPFs27Efhdx77hmUM%2BXiwKwAROohRT1jnqWkbvyUKs6myGSjAeQO478NdLLdMijlnYuE%2BVcxOqoAM%2BY2VwCDVjyIIXvs6txJ0UL0IaUFzWP05jbh19xvzuSjpBifihAFIa7RHPjaaDJ0MI7vr8QGOqUBHQG7ZrVTrCVcAaEw5S3WBKz59tUQOsoNNCvHW0aVl%2BEI0eyl2QsydG%2Fr29cMz9c2q97%2FupYzrpgx7ijdwgIOBwlOpBbuyrFqMMSJVIC5%2BJ%2BbH%2FUnE245gUDV8uPTKwV%2FkWj0Q20N3rh8YQulYCLhKCt%2FbS0ESoRvx7t7FlGPpMlAkcgvm36pq2arD0UuCK%2BYYuKKJDHQJiS6xKzEbp4LTMZcOvyM&X-Amz-Signature=6c84764324f4a7469918e09ab21587c1c29d099bf97b60b764aea30ed26c2472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
