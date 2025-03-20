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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FPDMXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGOcs7j%2FeItS6yORkeH3OKEwhiOXfp9ClX2oLgZNe%2FU0AiEApmlgshu2%2Boym0aozYepTt7qjygK0d4kmDGxMbf8CVvQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtBh6hS4hCIIqV%2BuCrcAxwNUiBX0xD9Ki0cighO5LHXwl5UBWHM2sD3hE3XAKaWBEyUbAw9cN5sShvD2WvRbM4CXtjco5WFcieOnEJXR2MtlhchByjddZtkTCUSXqcM65R%2FVEP5%2FQS09XJAEKQblPUVvaXoTHUCwkpAP6A8nn67pjjhFHvhmlFgCH2TEuT6dS9BmFjDM01tPNegiY%2FVY1VmfK6M0o505LSoes9ysJFG6oFj%2FIAEQl9gximff0Gw7lyG1XG25ow2JJww4oJYVFUSEEt0h%2F1uh4WpiCjmgeXfT2OHd8CQwZruHKvnQbYbizYsyCxIRKqdVryptY0EQuzAir97irvg1%2BLfeNhbt4s7VOljlVk%2BcKeAlOW9zRau%2FQagA2o1YfblnuhWxmDjhfBz87ctgzxfiQ7CqWiKMWdbb2l8T93fYNhghzfF%2Brxymoyj4sCTJcnQiaGJ72EG%2B69TNue6cQxteFtMbwEr8L4RzJFltNemm5a%2FhzPFN6Iel5bjJRntmskcenDvBRIDYbW1eVl1FPQ2Ao%2F6TJSmlOL8hQdvNkBFj9Hd64VkTf0dca9cRG%2FyNpwWjvmyLJLkUVu3rFjWVNCDdB4JS0cRluClu9ia%2BGhHBIgqBTuOLqOodKKuor%2Bfw4qyMifJML3F8L4GOqUBv6bcbytWD8TJutpWa5v%2BuNBIXOO2QgVCcgp8CIz5Y%2BTi3dnY5QLNoO8XBOH9AK6rLbxjo6rLuPyJtEJJSGCxLyxP1y75FzyjyRRpPSL9Vs0eiPhN4nDZsFj%2BjrIqnkB1ilKpzhKLzZjSYKrg4w6HUqwYo5r740kwOSXQPWnpjGLiXQAbMPznEk7wVz2PgJdQbe5oGVLtib%2ByBp2%2BVfaJyMAGxA%2BA&X-Amz-Signature=8f9ed8d30ce6871b38e2f8fafa8746189f15bea173a38fd89a2f5012c03e860a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
