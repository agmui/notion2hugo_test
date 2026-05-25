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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665X2HMW7%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICweMMrsBY7ksRq3BiM3piKVI0IpISk6szAkVaesx6fJAiEAuTAX2tqX9XAo0HyjFI108Lxq7NCCvJE1wt8OPygyxIoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIx3X2dSu5xpgK0zNircA%2F4EfzrBJLf6z24g9cIU44QIRYJJlvYFKSz9BQxfD0CPUEo674IyJGHiTh8BJu6E9pZ9%2FoaZOZ8UHexbMNdUUi8hmo2B3fj0%2BDOJQs2Ai5u3gqN3UbZVIUaJTdn8Z86EuPj61GqegNE2zHaHD9%2F%2F91KEZ8oohf9sfPppWcVJOZuUSLK8K9ne28c3x7VR0%2F%2BeA44LxvrskpzG2%2Bsli2D%2F0afykNlKLuZRGJE0%2FAWSKOkflyl6Jdd%2FrqI86Cu6KlyQDPKb5U5UpPWDioUm4opZcBUXO2el0jHqzPPgXLng%2F0oCLeLstiSvNGjZP3w5Y8gF0SUFmuYtKkUPEnVpCvb%2F6ygi9q8MqZeH777bDy0ua7l4nBJfUYM7S1TXTivpxE%2BppP6IHum%2BR80F0KpsHsWnwLYjZPiEx%2FtRad%2FYSmS5mNlUTQqQ%2Br9EPLVzNGM1Gys%2Ffw7LVtfhWJx2%2Bx2keOIKnwPiJ9I6i0BsOYlL6Pnn50yJMFBkvww7WRBrTZGNTDtaYhHo0u38vl5UPv9nhQjGNRqJs%2ByWodpo1FRfRrEIP9AqBxFfXQHVi5%2B8IJ12tHbSFpvYT0FaAHfbl%2BDODMLESIA6gm172S%2FV9VRnLKOxsm3S429Ahq1YIqNGHELfMNK0ztAGOqUB6hWxzY87QSVxtC1qIx9UeTk1Fvlx2JXQ34MNFrFXW4s3H2l5gyUXWNeg5x5Kk3Yc6B2fpnYOefyRjkVrQhF1eLADD2uE32F6ubbO55EkyDwOJps0ToWrbcd9AMQTJZqw3d2OTvUyc9SljJBoR%2BjQnQ1qwIwFhrDpP7l5BeHV3xbi9jQM0Qo8x4Wo4Pn4DBKMCFZhpti5u93gtwCWjIiXdDzUMLEM&X-Amz-Signature=f412888b94bbe27b0c2b87111bd01ee18b979a14e2878db7502f69f0468a75b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
