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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZJIKIE7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIImnxf7RhgAFIUBkWI5riYAiVhu5II08C8vv0DO4DngIhAKXnwTV9%2BlcHu7fGqrwQ91QPKD7cUUp%2B4dmj%2BPK2PKhqKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8%2B7ku26GJZd55DAQq3AO83Cn%2Fi4cPLw1v0IcDjU4sdAG3lgonpYPOTtgTVNTrNR1AgBLRshj4X81HRz906Id%2BIUk%2BhXhPePLDlbu5FW9W8P6tJeMjCDLhXn%2B9fNgqWLAkadEPL9Ke9GYaMmPbqEG6dVSm6GPokyfb0JcgI2czH7CR3WtrmpWy1sws45SE1PmjWSAWFuSylRhK8ttTuKxgzafQVXbaSCbgFqcLQHoNZwza09b2evH8gv56g%2FKJojnUaDm07gwrIAZ%2BJ2KtcRuwvO%2Bn%2Fa8eeLNpH%2Fs74mFbbX7Amyo9VhFwBafQam%2B8tRS4ccNt0LkBAvpS%2Bzs6DompoOoLdM%2BNdiGIzNypItFoKiqbIxr8BCtTukUw%2FCEx1QBAlpkubd7yYRkfPa%2F9SLcsT3hkYFo7M9%2FncpHSNvZVzJJ%2BXKTsyTIy6e%2BdkaxKOWcYp5QzRQZRnPt%2B50WnqBP1NMmUHLIYunlaFz2oTBCc8e5EJuAqBOLyAAxvmjhVIzXC6%2B7wnOkD6%2Fv2R8KNAW7LpKMfu82ziR%2F%2BlimP1kzzim8959Zc15Rusb9B7G0OQ%2Fz0bVIi3iwQU01CVK47vwaYMENPHKeVB32JxltvKPTzNpnV5XS6oe8GBiUaMFNE7xWU4Ae95Wqde08%2FUDDFy%2BO%2FBjqkAVCR24xpH%2BBztJEX1k0IlcaIGnAz%2FJjcIRIthxQgPNkyt0eDjjf2XE3XU%2BYxXJYL9FT4Vu7CLecz%2B%2BPohUBadvqJeO%2FFv1thmVGi56A9b9GmSoH4t%2ByukyKZ14JXS6vO9%2BSGCohPWOvkzWF6sGmURTEyoxduCN%2FC%2F8T%2BxTROOaN8a1jZs4lbzN66FFHV3fInMjlQDWqpNHV2%2Bo3Hazv%2B9FZ6PA2P&X-Amz-Signature=cf63dec7bf935136518f0917d6bd3e774ec3f2a786385ff9e1f5fec419012b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
