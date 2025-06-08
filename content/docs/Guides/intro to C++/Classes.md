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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJDZB5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7%2Fn5k9BHmxrLZ6zxm%2FIY9qcDn2xYj0iKDGyvKZCFTDAiEA430xSADGLWpcsaSZXEbF6sXXW4w4U2oGHrcVWQj05YEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUsAl2WZjhnqzo1dircA9Yc7lGZW%2FpVgvIWhYuJrOJAgR3bce%2FYYaG4dp%2Fe0ZncBkx1PzxEGTPhptxzrr0biX0vQC3VPGmebBOaLUzm1eTMRCSPFgs%2BIOOYija5qcKHYKrjXd1DPswTp%2BDSmymTTmyZ5uxJl9Ya5nqIj28RqbQxzsgrt19NUmOs4QCVCFvrwKUqy7Tlugb5tdkBu2zDmDYfybedmd50Wh3NE9MXrK9GLlR1%2Frn3rPD6sV86hqpyNXhV3%2BVdm%2Fdy49QTX2t8872gsjkLrNfDQvaUON9Hl7UHgW2ZToBbir0%2F8%2B8A2hCCqIHpVYtaZFfjViyJ1PXWoEpimHSvcMqXNB6lx8tkO%2FdQo01OwW2uk35rLaNLOlulchMds0KAo6gRx%2B8uiE1eM95HI6Cpxf%2Foe91%2Fnjz7rd%2BWhZV3wjI6Ggp5JX15KMtVh%2BkryCXvLTW4pm0gZh7OcWNGWip2okzNgls2OK6nSrukAxkkPlQ5GD8LDJnF2y0IDf8HMueZ2MckHq49LRhfhTd%2Fhx6FA%2F0jaYzBR8qhL4gow1WgD10v4d3B51zXXfIwdf53OacRJe4kcjQvt%2FVpqVrjwIHybhJJaHQN4hynVYjJnrtt9DC%2BW9M3%2FQDnbfjJqLXukC5Wr2UuiwrfMInil8IGOqUBWorvt4GtpYHyRFBa1OVBK825DY8kX7jaYrAyudToDNfsax7QB6gKi11Sj8z1zrvBdXuqDpRaZ%2F%2BRJDspymnWLALabGNnstqyI8BfykNhtWAW6sOZXtGBGsUNH4KQMW3aNSaj0lWByIy50Gj%2BN1DslBeEAl8xmDVrDOsBG7ytss0KaTn2TH5g1stCQl8zBpQGOfHI%2FUoTFfWDap8bNl9yjLCYD20x&X-Amz-Signature=cec7fbde50a050ecc05e46c78f2cd57de96873a275c06efe4498c88ae91afb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
