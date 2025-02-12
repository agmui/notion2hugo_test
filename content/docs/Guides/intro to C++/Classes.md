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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGEIYYR4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOKHibNrX8J2lpOMmwojd5dCm0HXT4r9t75IUggUr3VwIhAI9WHA8qT7uVxO19wjTKo9MciyTadwOHQmgTLl5Wnyx6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhxRLZywVSUYq7jUMq3AOo1sW9PyvTqF3%2Fv%2Fr96zxrpeogYQfcmppgmXZAtr9Wy1ViTn7wwI6MKC2GEm6aG0i3MRgUR15VknINBaWsc3pAvdnXDI8peWkfiYjdQYDonBCl65MtC2h232mUT1XbsAXI14fNYktxosbJquvF6SZEaJ7BTYY9QbsOBOuRJtL3jBk%2B1hMDY%2BnRzVbmR8vNhspBKf9sjikhrhlt9uRyLsCas2%2FtZWuh28eqpbORmMLqs6%2BNc78bIbIrKb0sELNumDzgCC%2FjFBzowQhS5%2FF4NB%2FxkmHR%2BMbkyI4bSAMEV7oJRj2YLEhATvCeTYIaPOR16y3gV5rbzdAPqR4YWTji56mwGocvDP3ATxLZqaOJCKWexAIji%2F755Qpfjh%2FvvsQVHhgafHiA2pSqyiqwt8d9nLholQAsFWR4n7y%2FHoS%2FyGkh5qRGMW%2FYhnOJxQg6O6RrA6siMlRDRO1WkAA7dT3ItA4YdV8OqIQtsvPeglts5LK5zI9hzW8qk4HWO5GlPxnp1MWKty6RFYz7A5Dme5wxFS7TSwPsbCmHofqYEziviKpo4SYfDNJ85xaxrGxpbd4AXy4LYpAM9n%2Blf1V3V0U1mx93I%2BLQs5QbEnsP%2FP6q94DSd5CZtUU6EyP6bVNBezCQ6q%2B9BjqkAa%2FrrTBDr44bPCx0zAIywCts%2B9CANE5aYeajIgJk5RNCAQyEaqrFlh5V2lWPG6H5PLB3RsuFLmIow4IDC6c4ZYfAoY9DX15TCb3HAzcKnPpL95LjeCGBgKYrFTePMdv%2BTBQp8gkrcvMKAxBZun90jGp52PpMHor%2FjaFC8js%2FJ7laglF8VX%2FUt8WI9a6yF0z4w7VhP2tisuY3xlySxaBnlvwlQzrD&X-Amz-Signature=d581131755f2c4a0503329ad47462d31cf7f2f61fe52d4633788a882d9a5496f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
