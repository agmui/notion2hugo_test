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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XP43VVQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA3geCeDnaCRys6HOazLCfAiWfnU%2FI7lVEIwXWl6ajOzAiEAvG1q6l7lClDR30FcU5CnN24qQs%2BLkjSRBdZ13qYXInMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFwrJjQkE6VjD0zTircAwjeCHfZaBjz00KEdhvGz%2BTfv2SyrqrMiECC8gGGBa5At31e%2FZj8aQM1Z3ut2dwSdcOSxX1xcD1WZ%2BMGqURZEF%2BTJmFJ7aUm46HHA5Gh7srbypJ0IMrsHIk9WZvHX1FrxPJTVJ91trTF40cT3qPwKLCn94yCWk3JLxO%2BbOpOo2dMFm9mF7A7Y%2BvPZoHFwyk8ao%2BhVlcvlpuJdpBViuUbz%2BauupeoOlI8S8XXPmdK0h7XJzJNUSTkY3CXFON237cR7R%2FQFER%2FvCM6BiqOvSa%2FoYTcqp2MejldvUjazmw%2BuDlcAEC68Isy31DEC10dpEcWOvH%2BTm97eG4r5dgvqc27uwlX4EWPZxzUQwvnH73FVf5qRE6fWH13rjA6hD4MXhc3VkHzm2dfWgaurAnLMXoocCeEkRnaiFMlA1N%2Bbgg2EjIN4J56S%2FaHV7dpwjltupg4DGMrJrOsalJFzxbTrPFP4Co2RG4wsf3bhlnn7%2F45x9%2FFEXifo9Cgh92pOXXjOBQCP9dfRQ42PnmyUQKToEO70aKab3syab%2Bp%2BE414zSo%2FHo1EFqAilJt6ogQ8Fq4su0hx8W0enbJ8xgc4LvPS84%2Brz4HjtDTDttILzN0GqK4U9Z%2F0UQ3%2Bl7UHv2q3n9zMJnCqcIGOqUBCD%2Fu3mGJO992qRj%2B9wPImY%2FRVGzZM5ujlypi%2BSu65PL5ji0Kj%2FQCinFJ2cgWdCd1yui9avwdcy6Knru3D%2BLw12nz%2F35ip6RoLwt6ja0n6V%2Fd3Zud%2BcRhgIiaP%2BG3pNQDOqAtu3aFtovVQz7VidkSUrbaRAuLABX%2FvPErU8pkdL7Ygs%2BQ9Q5wx41oF9SZ5JaLB%2FzwRRul26BICj%2FwSn2s4ppAMDHo&X-Amz-Signature=650456986bf90aca59abc1c92d80d9a5a807ab2bb014a75ab30c38a55dac2916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
