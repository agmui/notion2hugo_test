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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T7D5WI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLn9YtvuY58Pzxl%2FPMB4DR1O6HXBHrPVc%2FAbYN%2BUj10wIgGvTkFg%2FUuLCS6NNFalG8EOM75D3ZWkpjZGjzW6bmJwIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJGzv%2BcvdxqGwpaSrcA%2B5PlzSL6LPFqperFG4TPr5Jek9xTUC4xYrz23OTHcw0pfeACNJr351%2F3k0rqoeyOlu%2FkW1hm2XwNiPtYKyR4qKdaLAzEpWlul64K4qccp3GecHr7pd33Gh3yuoXXyrTFjiLa9ricmhIsqEKrFNLTLS82wP8K6%2FxHuMxnJRpT6LfTaYj7SyOhxWfuwBHs57FUpkLWXh3oMWqjj%2Bq11JMywkig8HDzHKsqnCWP2Anl%2Fj3hJ00fj3WCWZK%2FBSohhv%2BnkzwcSoatpJXCB80gNcZoy0i7%2FmAfPneXHycJVXX6hiEZCQiMUy%2FWMca3rtvqIUxshND%2BLI2OtH236%2Bip9jBzwJLI7Rfqp9CVTlgjKvsNMFwWFBvUjQWpeofM7fgbzjXvrnY12K0H6HhgQ7MEdSE%2BoIA9aHpkqixpGmBgEAx7LTuAvq7g64PDQlzUVtqLv%2Biv1o%2B%2FD6v0OuTRgaNCY41nEDajIgwgSGv1neVrGYjQfX%2B53WDiQbAqggHNkojhN3m8hlqKQ2vQ6tFbX1V%2BSoo8YJQB6jelwq7kPJEb96PlozDyJegrWCCKEVmar0ywbhapw2ifKHSqj4t4%2Bm%2BS2ul%2BeVVresQDRjx155OOYPLHzLtQl5kgw%2F7UI%2F1dREHMJvQtcEGOqUB0%2BDuy3Vq%2BLS3z%2FZDCq7iDwl%2FI3Foqkex8Yv9JZ%2FYj029aWUlsjtRndwrrswX5y2zO24i3MaBqP6qq%2FRwvgcxshixEwBGV7BD6ucgf20vN22aazCjCjrCsoBj6dl2soSUW2kZ1%2F3XWe9cnksQUechDoA7gDDikH9H9vLeqoRFq9i5YqK0d5oNx4gIcUf8fOJfIKdqaryO%2BxBqGqQHRdG7oUWl%2FEoc&X-Amz-Signature=5dab960be92efe8e71599c7d86940d70e19f5d8268f9a33e2409534bfa43aa43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
