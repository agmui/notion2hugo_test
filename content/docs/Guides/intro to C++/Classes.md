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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOOGTIX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFMYcbZKICgoyAE%2FoBHxpfiIbnJh2QDBQYBCuT0WUHAwAiAfCy0NrXZtMhDw7EbyrUTBNZ8Cr0UPnod1edHey9MqhCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8T%2BMQwsBsr63eTUpKtwDQ1Hy5hs2giSZIBg9rlugmFCjUkNydBYPknIWuJQH0VMBFxBJIinJtmQ6ZVpCkaQk1iIlu5jIEsHe4Ulsq3q8rd1IAT9z0%2Fxta4BBr%2FNc%2F7CdGcZE7SipiB4TUoKdmI5F7M4TKRlIALJcSrvDWKouP5%2FNdtutEcS%2F76cO3W8w7NC6bSMP77auk2Lb9RjmfrXPDxHX4zdYkwBTTjvkpGD1Qt%2BFCe2HYHHXr4bL5vxU2hKuZrMNhV5xH6bPKwcEoU9WTqtMouIjqKzhX1OohjvKPCyuP6QVmPcfWNEe3HRHzkOIFnRsPEU7CkHWWB%2FasPKkjFCEvSDGgEkdnU%2B8XgpUf1fdWpHKqXtwNHyJrLU4S4WkBIcZ%2Favik3xhrgYPsknAcXUR3wSTWMft5%2BUypwJU5WZmKr2ybWqpIn%2F4PQUweaRKLtQgO29hmtiQw7fcImNhLXfgQSddfPTml8%2FhEPPMQj5F91%2Fu0Li21rsNNDpQt%2F%2FO4hBOQmbvvO%2FiENP8epUwIkbZYipuSngLSbIdh%2FMKoHRvMsTvrkbE6OrjuC43PrG%2B%2BVrnE17LNcAhuRFtqPmVNWJL%2BHQ%2BRljteZ1N0yO%2BsK9T1V9Rd8dR5V5pd48PrBA1OI1i4M1Vf4mrF%2Fcw3La2wQY6pgHKqPkYzV4RbxyWWMyfYoDyDKe0Wj%2FHLQQRM6MV9690PzgQ7c%2FR%2BC5uoju83tsJ81PBt3OqnOvcKiCdzc2OZakuxAfzTNmt8TOoxLzq9XTwwODLEEQmySM0WqzsJO1%2BS8H9wrjOb1F9pyCyHkCds9JM1Yo8Ifl%2Behpx0UbKQ5oa9SLMq0CagJuQyy%2FGG5Y62WKzyjUvwoe7Np%2BuKF4JtwcEucXFUY7w&X-Amz-Signature=4b45d21d5311ef6d799227c60ea827b8ce7c974913ed27e0e187ca2b8b218465&X-Amz-SignedHeaders=host&x-id=GetObject)

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
