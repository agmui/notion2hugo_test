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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36JJUDT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCEbqN3IYZYDbtQF2v7Jdyn%2BB%2FO9dm3RaIjRtvd29LgpgIgS8H0xri0uSqvKwLBDOdQdAJXAbg0yNtTv21c%2FfxAGVMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARpjPQuJseTOCrUayrcA9x%2FlJnzaQFBiIK7CBRM2cf%2FFfaHKzyxKWrw1SIbJrxDmGGB0RMHjBjoKd1IxUAQVO0eYR6lAM1SGN4aTPK7%2Focikd2glmW6yLl2SvGeYTiN2RO0%2FSTzgIZ%2FF6raWxJWCu2HjXeEusJS3yDDdRmHmR6j2p3dHeAu6sFhMgD2NA7ehUVYYINdYF0Cs2Ek%2FHwMziYviScDXJtnvTqMSi7EetwdJ0krerEeDNBegYx4qHBIMVbY9sTUFxwYR6YNz2vVLSCNbVKvX%2FYzPaVW8lXka5L7AsU07E1cAgSd4vbDOpEkPWCVylfK5BFHcFozQkrbTcPMZglFmqSz5S6Om0CCZRDBfKmMMtIunND7i6g1eVuKQZkAtvGfh9hG5WNhg8rVGsyRxHRzKoMqgrtrmIGmUBqoJPsKa6eRUvUZJjMnP7nuwrbjxmNv8gI8BylFCuUUMuCIUeitu%2FwiQLDOKOAc0AnehdkFCG1YzbkfqQgtb9PAmnkOxiEfeox4EN7SSpVo3zGCWLfRrFw9R8UBmLWNQoix3kBG6tmtKt0IsoclFprcGtSUThPmaQVvB7B3DwVRRpxbwHm5Y96F9u9%2FQZbWzhcXTcU%2BItTp4LyEDNPgprNGdXXj3Nh7AUwfSs8%2BMInYj74GOqUBnnfozW8EkfkUU4BHv5MFpy6RQGpZ9PEA%2Fd6Ns1StTFikjbfhnrNkxao2HXLiEWYimfr7yY4aPJ%2BOaTLbYZKDgokmXavN%2FvSv%2BoXa8GYg4%2FkyAEgXdViQr2OGxpUckuyoiKpfKZEQJlMX29zifEDZU8tVaYFdymUqqhxvsqgF9OJWQpKER15CfggOQHrUpOVCFDf0W%2BnSWVvuTClFIe%2FPewFnT1K8&X-Amz-Signature=c1d7cd2020a21edfabedd3f6d421a6d5ac042e4d3c276d56a26184f46eba1b11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
