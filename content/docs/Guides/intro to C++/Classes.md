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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5OGYOQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2BGX%2BOhplXt9oJ6QO6putbrYk0eCJCqkxCE0iJnklAwIgHqzA8JlXP%2FdfCbPawgH%2B7VS%2FjNcuB5tvKj%2BPKxoJOogq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLYpElClG%2BlRLh3isircA%2BhKlYLsuQVfQk4ZCAcHiXLR%2Fo4TRBm0%2B6RDrojLq6xbrmG2985N%2B9JDzAEVXltrqGVxm9wIX123qD7PeSuLf5pic2M3fg9NlOGXZVfpZED94ZLtacAnoGTIyfNdsHIB86WZciIbJNAiolO024sZ0R6D8VOO7%2FEdCQpgnWrJcUGhWJaxfv2lbowymCVN6wV7jYDA%2BdadcqtxYzhJ%2BU7OC9XvBmLMnbDrDPA2uLLVlDZLqbVNr%2FayCOUr%2FPI5iUOAX5SA8tbA3mzUwR3ZK%2BFwPcA8q%2BFPjNkoAEngxLDLbgcId8EL7t5s8NwZZ3oD0FaCykCP0lvSrIrJMfnP6EFO82IOuE7Yw2wG759WbDaptW7ahDrObp0TGON4z%2FQk9zbbs9Q0E0aHX0uuVhIisutWT9R0ITHyU7IO4ctFYaOGnSWWk4kAHNaKltdwTt99lMNo2RgiclJyhi%2BtpUJZbg0zRp4T1Q8jxpWexMGdtRtTQYpufVksk%2F%2BVHPkw5EYe7%2BTs756BhG8CreuOU86cizIxQn3sv5RWpFW5B4R9zWPVtO1R6WRevD94adAlFDtYd3CWHnLnB71qkzce2TKvC0OxZiPgDmSWJ8z0an45XAoq5vr8%2FHAEYwDnMP%2B8RIRSMKOwmL8GOqUBtwbCTv3rbGlEvpdC%2BeS2HiJPo74jwR4X0PrgAPWwOmzMsXA%2BYzTgajCNNsu8x%2FIHTiBDk%2BFuCN7g3CDLWRxrVLyAokCNhYl%2BQYGsnWZQiuPtRIuxGj4%2BYRlac8MKfZkcPK%2BOb%2Br2fQQZ5onqEd5vFxNZ2Jd%2BIOUbAMdB4tEpNEiXPMOP9ASf37xGe7O3Ea4fPO5pIc6m5U8hV1QT%2FuUK3VARbzvP&X-Amz-Signature=a8d30ccabc2e94cd1d875075999591beebfc5152fdc57e379d4edfba7d11b4be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
