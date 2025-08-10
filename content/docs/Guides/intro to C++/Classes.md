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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNM5VC3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbrDri2ejYkBcbJdQ8XfEmAxjZr7geNmGXd7zLvmI8wIgfEKNbKd0LY9Igkw8nSy0j5tKUd3yP7PxOF2y%2FwaLluQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCE8tDl5E5mwXzSpyrcAxrDvrpyoO%2B3l8wMEHN%2F2FilyANxDFzYCVyxwVLXVegoZIlkVEn3ZU4qOMUODzzc7sX8%2B7uRwUC9FkJUyD2w%2BYcbHaufqjHzfCqHHljx6CJ9gywI9tnjnT%2B59vBjDKt%2B5JxNZEbVqU7bwOHHsWkO54gmjLd1tfY1pTOCwZqRFxpT1cOSymKfeuGNSF6XATXibbAz5f%2FxEn5FiBaR9QEWZL52%2FjN7ZMTXZl%2FJ5jhFptuFHLk91JZhI9Hyqy%2B0yWu8n%2Bp4Q0cYsBoOa4TJIoLj0LCzmWs5KVZOVguwtQ3FyahtijaV5esl66TIR0NhdXZW7j4WkFZ19f%2B%2B4Bj37NsIhiOWWH9FNE1M1y%2BqxYQp4eLZpBr8fFsxTPSwK7p3OImJBR1cIRyi9CRXONWlzyc%2B7ADOjUCi%2FShu2dDQyqoAtms75DdgPR%2BU7ewxHuWmSc7vSXiYXoCc%2F2WRkTktcZWWdZWzuV5%2BS%2Bza0qOkTjuwpbwsDPQy8aM2JwYk5Vx98HcmEC8l2Vu%2B3K0YPscJBu7DLXnCfjlPiHBv%2FC4BAXfOpBrpYskxNwvZbL1c8CyNfLi7o9b5thwHmGm1yuM84HWRk3DCxM40BN1i8o5zhr9cG3wtN8r8O72RLv5PcTE4MOO%2F4sQGOqUB11Ap6oxcUOP0l1LGNhmjJOxKnsVrkLgesp6sDeOmRyYtPPIMx76YTK%2BJDJYzK1u%2BnMquG7%2FjO6Ft0aOqlPKoacf6yDzKdzvTWq4AA6eoBZXI0fkAu%2BfASaMRSnSiL9mG%2BaoTFKh7EilTf1o4W%2FfJTAvOiKixgULcQA86Igtosm4Iknpeq%2B99xVzQF%2BNHZ8pGoSc%2BftOv%2BT%2B8kBXN6FQC%2BWuE1MQw&X-Amz-Signature=3d73dd888475df42480eec34f06f293e75acc3cad20d31fd7825e2edc9e448ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
