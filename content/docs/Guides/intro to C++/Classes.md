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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATAVLZM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FmusgipEWAbC3n1YyQE4o2nyAUIIFX%2B%2FRqvGSKl5LMgIgAUAbNvCytEhx0u0SodyUUukh9C5D0bTfzdKGA6JrdxkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf0gwVthQybm7d9YSrcA5PNtc5j3%2BqWrpqMCRAl9sXkthd4RBph%2Bswwsbh20Ve6MNbleYLW%2BcmSrEXBsePyi4pzD0I2S2Z4sQ5Z734N7hA78zpDCk3yZPKsfB5jOatVizCF6YbmRQvvVNdQO4n3KWOuTroKZzJIbBFVS3AVk1wDyXBB0sonuM4rLm%2Bhs4JDsnHaO%2F1jiMaKHG4By7WR0QFjWpBP8d6ufFJpldEp1SuHSp2Czzf8I9qFnGLjVzaqZSCw21OqMYmwBqSu6KoIno%2FTpDNDznr%2BvghhPDkRYXLxORCuxIEhRrZG6e2gb7rfurlr59shETSFc9E7nkwW%2BeeRiRmp%2Ft55BUR%2BlfmHjg64Q2VrAXPchCO5WOi1GcNwj7cUJl3WjYjZXjmBFPbe9JQDAwWfz7%2BJohxSOeHOrSfMFAek50QvS3vxJXUUv6aeBEEOJwjUOBW9Z6hHSQOc%2F3UFJb0GWLqftBQIaxQw5%2FOwxkMSKIXLNUWSp%2BZJnO4q13iQ4V4U08K1VkKTM7KRstOyMwovChkVD7oqXEYTrvmJNSWQHS6fqdR2OGKfqWIj1NK829PSqEGoR70wrLR8ESP9hjAF%2BgQICDJ2m5UT7QXW462M5RKD8v4pwmIWc3g55Rsx4U64wi6uPAGwMMHFm74GOqUBA8CKM60wafpd1ve3txSTuU1wm2w4sMcjSYYu0hABgozVkCu%2FAO%2B8ERgxf4VtefQNhv9vzyYKzDgUMD%2BEBXZZ6L1NMW1gTI1CgihIZYTsVy0FjWMwlQGmF0qpE8OiIH7HyNTfPyj%2F4JYlnBs85%2B0Gg9S2snNHz4dH0CUSUrcltFgJKM9wQBgeMjC%2FECBz6YyHzcrS3GznjQ7qh5j6%2BnczORRigFyc&X-Amz-Signature=f720fa0cda8afe9fb2b05d3e5ad3c5b0d76b526fa14235ab6856693227f67661&X-Amz-SignedHeaders=host&x-id=GetObject)

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
