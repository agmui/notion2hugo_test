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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXI4YG6D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHBo9czSo%2BHsW0ySAj4VDkRAgC2b1ymfRIT4dcTLjWLqAiEAyxWbvu%2BXAn47sotDpeg7Y581ZMqbluDRkjuyLru6OdkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZON46wh04laknzWyrcA6TNSw%2BNbIhqeSL%2BV7Xyy%2BEQg%2FX%2FDQSLswkiltMuyw1J0pYhYqx9YjAXDckmoEvxJ4iCftH2LoT0TSV%2BDXRQasY1nQ08WXvnT6jbIYjisxdJMHMQIEjakUogkTsyoiDM14bV6T%2FcTmqOUdg16UgmIIJh7MpMs9sOfjC%2BP2V%2BI92c7OETjwlc8fEfDtzhMJnfYdC1A0L9gzlT7YgqR7HHoR4Rv4lgXkHaAFbQyx0reqEgYz9WFsf5Nge2IFR9l%2B2sTJnU8lQqaG29vPvHuTGslzVAhdiIYJY0%2Fvr3csg72HV2We7KOYcShgJf9X32oxgzmbPoQmw86yLmJvAMz3jfoGtL7KqDCR5pue1MtGqvyOz2Mlfq3aW5xyXEiHfFQv4Dm7z1seC8j%2FR2wexhiRrkxhyO30UvtgqCYhMAGBbvDUiIgDf3wtvpUwl7zoY0%2F3vDKLmtOhihCWX3mbNp%2B1OYeecRndkufv1CZyOBSpo5Qio8xWX8%2FIoh8aron9E58F3GgFS4W5zxCpYWl9h6aMygOutHXtkuI74EfZAcQkF4kRzJ7g5f8j1Fcyf1oEaAGik2dQpjJnKG%2Bt313GOgdMviP%2FtK69T7HUgDHIO8ypfoN0dH%2B0grFh6%2Fx3Ae%2BjbHMIPX0sAGOqUB8WJeSOjAHcnblBiNkin6Ypaj6HqpeAFEHYZHmAsfBI02pHrlRIFt3IjJe0tNst90LAg5y43RFP%2F%2FPs7sl0VImx866BAFv0UnrpUiQzc4Tj4byRvHc4a7UgaxiERegdHr%2BPpJQ5pIC1sFmsN6Zs%2BrnetrFl%2Bt%2BG%2BXNHkht76vp6LwM91zDiPHjT9xJbJUNH7Cn0j9mor1eMFi6ML%2F0gb0lWgQtHv3&X-Amz-Signature=e75ee47789f90c24ebca47495d6a14367817e26cbe0c8e797a79d2a460b75716&X-Amz-SignedHeaders=host&x-id=GetObject)

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
