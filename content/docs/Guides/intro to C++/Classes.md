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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJJUWQ4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDmHlNcsLU9Ex5pv2qv8%2Bb4qrwXvlHds8SFDj3id%2BvzhwIgH%2BX9yHUbEgA7edvlvoXWDf2aVav5GU4vnCIah7NbPXQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLWKY61Rg68r3TIrMircA3Emc1PqqE7AGhMz9NZuNGp3G%2FRBBIIA9VdlBwjpgemW54Mup3htPmFwPmuALd0j24g6wLDQL3EpifBCkzFUhA%2BFXthnmL18TGrKtQyAsTQwtTww1NGuYRRrRMcR0klbg99Dg91Dxnx9DG5Kp2wyHq3mzEbL1bkf7WfLwVGMG%2FVfyftlUDoEKPLj40pil5vEiV2dzlO1fmTMZORGPGU3QZF2rJl8ECOmRbbUX0Hg%2Fi87YzyPJx0rq7cce4RTVpRoLEROPPT2mkdHkZ8ubVhZA%2BHPG9KW1IU7MBzSyizuYMP14FW7nUONKAHIf3MpEb5QEyq99EuJB157hMkhBn%2BzO620C4MrGuCT66lPVhi6vNZqk1hcGTryL6Szdb0b0i6Rf6x0ybxJnoJjQHC8kAj9SID9YLFwBAi7ECMu3d3QodTzu7hY4N4AUDOu7tzauj%2FYP7bjjykYWXPmzWPsml%2FwpAN5ynExWKU3dn%2F6mhDU6uyLa%2FbNah354Hb432HxEsVi0%2FrOqrf1%2F%2Bck0knW4uEW%2FttES0NmGpmdn9jqxY6HIlN4czfXf5X8a0ZcLE3r9w0PkWn7l8CoT3Dkmc%2Boxsfaa%2FAWtQAyMFetOKhf5bhUPh9y12OyASENErcGO%2FqqMOjqhb0GOqUBB2DpVulTUFIUmNRyv7qQVwHD%2BYOROWEyVIMXTHWLcIRgsBSmdOu2%2BNNDGrbOaqFutvS2SOe%2F4Gs3mw3s%2BMx5MuSbFXzESzcmob5r9Tsfl9NCIfMTITMksm5KLwZahFbltSbEfJwtb9TGQszT8WyQKRFADPyW8XCF73qoN73Quqaj4QzW18C%2Bu9a5EutYHLYyJ7nLtNdmwMsJhARqSSeXYkrnaobv&X-Amz-Signature=0e802ca2c2d89a855981d936c0eadca43c89a160ad8533a03b58751474ab455b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
