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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOR7BK5O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCb%2BYr%2Bc0wOSJScDv5PGbLgusw6CR0QEppt28%2Ff3%2Fo0zAIhAMuc78RaQme90onVRxfHCDbxY8xN7%2BB0yAj3u6RpWRmMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5TQBmwfHjG4Hu7Iq3ANRwa45Zdewr19YhpVg25qQ%2BH8S7jtTtSrE7UL3uD8zepVSNIvYJp5S2CPcKA%2FyIIAyH7lLCMKK5KIbOtrjDqM7EoJW0%2F8k1g5tF8yBHVouTD%2BYbY3R84SALFAYESfYJkB32C%2FYB5xAa9e1ZzIcfOwjDJgdEY%2FjM2wssrjwZkVLnZVDpbQxwcuVbnqLxFKw%2BFwOV3MadCitVbIx9mDgleDicG3IwTMrMSZ%2BMd8344cQMvPto1kU4yL1xQbI7Pfb2FsCkPFYUYvPX%2B0VkC48bgIn0t4%2Bzc3jinUEdV7XCzQe1X%2FhgPoD0ZUPPv3tK6W19hVWa2TJiVZDTU4VeBpAvO1tpldN9Az%2BzdN%2FUZj398ZJwzcXOyYETV%2FLxWfNicO8rs4rtryl%2FJaRqIX83fihbtSwIiEH0yQTkyLbm57swFAvJwdqs70S%2FVhbz%2BIzNmYvWq4vJeCnxq73JsPyLuGOFxe4VwSeQx2o07ONV4jxskOaYHlYBNOU1f5sz3cauOISO5BdRsLQbtEt%2FvrYdelsnuYFoGwyGKCQJppZH7CJYBlMVbP4KVG4SSJzkKbM%2FHceW21JQGVYowEJpqpaVgMwunsc0oK%2FhPEqF2VZ%2FV5Oh2nlUIz7Rwx3yrptV5%2Fw1zCvssfABjqkAQYtuumpNtWoiLsS1Wy6XyEV05vUYH8nPdtDIZ9dmFgKywvNHs%2BWJgGEQyUK898z87Zqkxeb98nrphNyxckqFLxcGYInub5264NZCj2z8yE4ongvzUEf8rqIBPAPfLDRz3TaLkDZs5KtdcYDcMVTVRcjOXhK2QkFUOMVeeZHsp%2Bv7H2O6MspBw2VJC4%2FtT5Eb7KBlH0aSb4GJEMbhg7FmRszHcoH&X-Amz-Signature=25da7913af608100fa2ab61be7b76de83e815fb03cb3b09f93b1191335d6776f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
