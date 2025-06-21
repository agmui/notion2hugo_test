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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRBY42A%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSCS3zK6ii6JpGelahyy0qTMWcuMQ0VlsAt3Oum4TaPAiAOHl%2FKNdskEgatVjpTu6YXfO07FCAaCZbnKzcNiiZF4SqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk37KTCTY7ehgfYOkKtwDtqUd3XPwoVnt9Igt1gxP1utLHtzr4yqo%2FH7Mz1Rvm0RM0xMiYcK6ACt2GFmsGWz5en7thrtwL5Gb7iz0WTj06uqWQTNx%2BO63vp%2BYGF4WvtOy7fOGQysQk%2BaNCghTfl9z%2FrRB2JHCnSPHPadNaEkxaviYlwjPo0Aspzw6Lp7r3eGl2aT6G8QuMx%2Bl703ljiwapyKkjKcK0tVpcUWVL%2FSOPMHdFA8z%2BPy4CssD1dcuHC0Ia8G4iLBtVS4by0XayJCqvHCK%2BIiu%2BvLmv9kmOC2Gc9WEYn7BK73KccOMbmdIr6Oju8jtURZN8ZU61daHCC4iw2M108QQf5vmgeASq5GukVNcd%2BUcavPH%2FNwjgWBGqG5AnkDFtdNouvqKeijAyHKbx3JiY8zXrhJIiS%2FX9DlSl08JZ85wRdXhOhl0g2C8c9JgIkYy7ofLa9eaj99mWrKWxIgl7cdsrGga%2F9xAt2vmDlVlB72MSd5On%2FoZSM5SkHGAM39z1bo4pmOZpeObCtBUsXmRUe2TmQfAwS%2B34lUUFP5ozRQLQx%2BdMtgDCeyt7IzwKPrrUWlP23jEXOBLu8zJmJbXU691IlD%2FBsRMQ8Gq%2FMcFeIdl5FbPQhtsvDROpjvC56qK4Ez6cgh2SNcw66vcwgY6pgF8i7w7Nlm92w%2F4Sr8Vnc5vMPFE5tUxaYBv%2FlYqWzGQQUOcZHSxXkTkGrDBnVPSatZpaiD475VuovHVM%2FHO0%2FpUiCc%2B%2B7GcovmoKDAlxO8gn9o3mg2qctGGvWsgXwEPo4IrO6yDqjt%2FVLczNg0opIH%2BqTmSKGbV5Z3tF6Wr9xkxbX%2Boc%2BMePzE2E2Fw7Ca5c6SaZtBta8W16j%2FrnqaZjRADCM3be9Nc&X-Amz-Signature=3ebf74ac7bb0b3b5af37d17f22aca204697b3fa3a0c50fbfc9177aa248ad9648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
