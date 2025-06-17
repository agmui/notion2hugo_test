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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3AZLRG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BsKyz2o0BcGxiGV7RupF48%2B9Lndw%2FumWJkAgIGc8JXAiEAzJ46j89XIVLl2PC%2F%2FvK2Na4Fo7%2FthfN2goA5enge5Egq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOF8YR%2BU5lgdi%2FwOoSrcAxws6WkIuztvTz9C4Y7NRQaLtGhBIaj06d3Fg4eu8gccDzhjJlJ92iuRFkjHS8Ze1Yx87fwKmeV0bNzUx9qX%2B3yAHk2GN29zdejFEbwdn%2F9fNfFyAYctbT6gBADTGQvPsEmPE4yESszk%2FhbiXGQSb4Wsw3r2p6a4lviNhNt17uBeh9f9d%2F5ocCSd9t5zx2sqKackC6TV4Nut%2BhMeqJ0uXupltKr4K9zYnzVKghW87RMLBvGg9omHuOIbB6oF%2BZOorFixVwrG8uMm1YhNeI35ErU3RyDBi38xwppTjZcB9vsVSbv%2FhpRScQgvaT1zI5RhMf0DStnIXzM%2B6u%2FEpshmW6QKZYu7n0d5P9IDFpgRC4RkKqB7RBIh7XNv2XpOShpClsMR7wlRgLJYjsmB5KES22%2BP4JPSzxkkwFHZTnMCcSExTqrGoubHXs2cUUI14U5GqPJgChla0Woi9YfEpvh8d1w3q1ogha5UhXcCe9pUP0kSfxP6rCaT%2F1gdijDUASRDyRxhyDvSoUQxzGn0H5r83oClpO2XaATxiYjDtVXSlo1CVC3A6je16jtVNkb4%2BCF%2F3HkLIzlxnoxHlJmLaedYRAGPRCXrF5oe86fm2Bwc2iHJecb%2FLzVyaMJtXVLqMLmTxMIGOqUB9Woy3CWNBPHnEu75yV8fd0zAKzCBuUoAMo9WNLKUBFnZafpKsmeq7Tl9XmxmVcS4lPLRst3cnRMKAQ2ntlv%2FWQNCauZ6Zu4I%2BXvy%2FlxfVAUzETljdze71leqeuYO3gT85vsz6YrKpUEFLO8UjoMRT4FhgKeYRcYEIzew8bmbiMc5X8%2F6VfiqkpEYWxOkw7gPoVL8kyBvI%2FI55lYKnPk8i4cQ9eA3&X-Amz-Signature=ddb163dc1317422ab7f6764b604179976c95885cfe038040176bd3ce30d25ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
