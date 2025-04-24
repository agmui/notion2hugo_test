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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QBBAW4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKngdwzesrkjLxyypbWql2G9KeZm4eHU3uZi4EJwDF0AiEAxc011ph9jTcUehw0tHrvv79AEYmxEBFLnWfQyAHRRU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDN4zYNLfqQgiI8OUKSrcA8orbD5YOZBZHpjTQdB0G3JDhBc1qkDprVYkJ5Ggzb3Yd34WdyoQ%2FCMds1BZ5Qp%2Byo8AGCVPtBuGsPwNTFNl6p%2F6eHvxKv0sEfgvMaswVYuySCgEbo4ChkkTrRQ5jEj95pY98%2F3V1YVuHqawNAQaPHfpoERRIrGCWXC1ImwQggmUa3JR6agybeMw0PoP%2FQV482bQESzqFPwsDQZVSDGl35928OT%2FQyK78C3l8Lod6bUbpBmFVMldaiuQ%2FrQvdZDfDTGYgT9A9uuj2bSTSqDVHq9SoHxABSWFJ%2FhO9pElnRP7f%2BfcLeXzr6g53hyokuKZCnDHLxlNp9DJphtUtFIkx%2BgHst3ehT%2FTloI10%2BMbWlmrZxK6utfQCe9c2FoJu3ygq5YPa4kfVmDBzgKvmmZZTYhwfAyWY9OXdafKzA7%2Ftd51Eb8%2FFCo9sUQZqcKjtFT%2BOl%2BYQdV%2B%2BAWiuRUjREfA7d78Z3LNFHH%2Foj9XukU2EJ0SmlHI0rTh4ghz3iZnLEi%2Bnm7HnR6pFEffbW6AhBuZfC5Nkr83JSpVwepXBgCLpk5aXbUnUhr10r7xEVdEpl1gZNC0iovzo8uhSM8ZZEdAW%2FZD8Y0k%2BMjvZa3AqF%2BHq6vpv%2FkajPwuzzLgoqrrMJHVqcAGOqUBOtb4EFAFonlxKkj%2FF9IpTWVEnWQKkPO5NcUu5J%2BwHObL7nzadL7Ja%2FD1rVKplXtFymV7ghBJDQT01xi%2FKlFooWCl02RiogiQBgi2Emyvom%2BpVe6t7a0PthEMGv%2FqYIzLYFUpluFJ8U%2Bk6gFlo%2B71JMqNVGf0L1lHHu%2B1v1V0SpLlP0rzioXstIoTdLttm%2FQuD5xPHoax0Vw7wwDOI%2FaSqOukoD7C&X-Amz-Signature=142e10f04882fe4dd77ff441c19c72924304d7e46b92901d76470bf9973e7bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
