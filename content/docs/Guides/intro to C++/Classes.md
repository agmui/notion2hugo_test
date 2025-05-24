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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJS3MJX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBz1%2BfhNz2p2ge%2BInL4Dc88h0LVOWEgNxvcKl%2BrOoGVQAiB6OISy1RuwoeW4hnMt6p%2FuleeNuHJ%2FhO5i1Izu4V7yFiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJb3vDpIrMAZy7ZnKtwDniq3kxOsezoo6rd3rqw9xybWbLTL86cWcJXMX0Jhv6XDboom8QMJ9BjoDgdl8UxPyecGP9u5N6JdWHG54C97mBCM2M1WmqOTbPBSvaCK37OU1vn6t07fOB84OuxAT%2BYO8zuaDilpoyLVifkm8x5n%2BYHwvQR9rD5ZJhWdypu5AVeP3ebCaHt5hUWEayUj1%2FG8D5iWa3iCwrUQd1MoyxvfbOo5NQrIXYIj8A7ZKgpA%2BynUQU5rokTVk1mjivBq5MW82m4t60aY7jkFVaZPtWQ1Hsa%2FQuj%2Fc3PbMDxv2HkoRgZvn%2BNOiNuwk69ujNouTJiC56g1ecAgKdytJLgg8eDagwXfXbnel1lmSYmNnHb6qJaRF%2B34ht3%2BZ9g93VFpVyYDQCx0awJ3iYK8pfe%2FnO60UyBBap3jQ477411%2FhWFytmuEpbLTxytLX0HxWcfqg%2FifT3j2%2B5CKt3XFgm5pHf%2FEI38KqIwZLLT5sxNJV2BLylw%2FDA1mbZJMWTetBTEBgSBlMWNLln2rEAYabhJ6cHIBm4QCQ%2FiPJGw3efpvfalhTS1K%2B7WsUHfupKFnMIEYFdXtMnqVYXUDFzgiQazGv%2F%2BFdjXFBXjk8CcFjUbs7HJOkRLBp1uTDTt6WKsP%2Bf8wmPnEwQY6pgH1wokKnPmAH7%2BLGeqsFuvBUgPlS3t3nPNTy2uTmR%2By3l%2Fi3080ooCGNjZTh0uH3wilFBacqdw424fsfK5nv9cn1ysaf%2FGgYf3J07XQ4zPLTgXvWtqcYIhiTVce4DGgPxvHQRxbC7d8j18Vzu17DmTWlLPShjSG4MOqm3xEDVo6uU2GHHy7GB%2FbyvdGrReNC8mMX6%2B0ZhMCsSZvk59%2BGDJuqZMdjv%2BJ&X-Amz-Signature=c25363f26c29b769ebbafaf2034ce5063ea73508d9d85de57377d2ec7c23f4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
