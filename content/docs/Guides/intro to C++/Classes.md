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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQ3Y2KO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGBceOr3U8A54ZfTlIXJC4RMGh5CT07%2FEbiTe7plSUFmAiEA21vRsb4O2DoRz%2BNR4ZEIX7e7MPYMjFPYs5t2mlZePrMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZv9e%2F2eDO9H0wx3SrcAzuQQ4gKhB9Ued8Y2bXfl5GRxrCVVFIAn59mJhGnGHzDfF1pBYtGiQ53Rx3YMNFU%2BPVbe8myLAN8pcrEJ2C%2BNM80yBqzgdOqOkIxUsYw3H2mTvNr7obb8NYqJu9a1bZWjWTz38AyKRYd6sXkO3Ihu2UEMOlbwxgPVUXOLreNmR16bB4QbYeHwF%2BvSDtLN%2F3fvdnQdY%2B3hxFKTQZ4FG5J4vmrXhHgu3NRMPEvtWSxE9NVUB2oaE%2B%2FxbUC4FDevsypSOjWJ3KOHrCuWwNnrXNEA9DzJGx%2F7PKD0%2FjXEWWJmVafOCnd5RqmTcIQeU15PSf1GTMsDRpJvcx%2B%2FxOr%2Bbdc6rLM6JCUBIhSCuGNmzSmlDirHryop6c2%2BSMBb%2Bte%2FXh99GprE0LFCq%2Fzisq7A3kUI2uEK3lCqLEb8qztWSGdxjWVhl9NagV1aKNWWrvrF371dF28VUcSeOEHMFGlPzMziOdUKChBEKdeJ%2BKF0UHFtrDt8RC62Z21IPeSZjXLzs%2Fc4vPOKPQ6mlnqA%2B40tRND0z1vgTqy78oS9ERmv5iZk9wLSckvrxamrcp2yC9hRYJgDal47nrEh7EE8iZxsIexilExdfLIEjKsm2DnxLtMnxYGSKwPNKnKcvrlGL%2FTMPXi%2Fb4GOqUBb%2Buts2NG%2BDIQv6z9kBXORP81yld2HSmcIYnU6x0Xw1VGYr7mHme484w3Z%2FXSUIAmbZEFXlA9fvMgzT79yVm9EtDzjMOOdznUo1vIdbKEQ3LOUIqPW7BzNrESEMEuyoVzOhtwIvYLehCXc1uFpkLtfhAHgEv4Q3XPIkcrFru%2B51MK3oCcgYrXB2Bynif6mag4BPtEMZl2eQy0OHtUgghCgi1vsdsd&X-Amz-Signature=8011b95a3d6b1f6672816573073d366109ddaf2a394e2751c9e7d222524a229e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
