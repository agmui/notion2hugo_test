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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOMWSYE%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTidOoQvqdclulQYV53sUiEvb7%2BQGg9DOsXX3nXUJaHAIgDrpTGWzAszh9BAHSR5NoH%2BDdlrESkNff2OnWtBx8Booq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDDDpzOH8FUvbX2vvSrcA9TZKFH7vwpWZ5JeEkG7BcDpdcAYpoFCgIzG96bH%2FBQzXbTrr2i4D3BTbrzDyIPcN3hMDT1cLAqtm9yAEv6LVOpcOcTze7p3Qw0U%2Fu6CZEe8yQhS6EKPpYk2A%2BSKWEp95f8eKthYaX28ArzEd5%2Fo8HeY%2FuGYJ9bEgTLqptnhJ5XFzSRTd%2FBugMjxq7ucm3VguYv5NjY%2Ff%2BzpGzfL%2Bs8hha9vMT%2BqfLloKckRi6UNwhe32b03HaeEnDC6EE4QE9JMLRagP%2F5dQODY2dXzJY3v3bQrh8uO%2FLLIT1wi8EzqW0o4XRsrZVwiBflL92GQrqKUekIxCzb106rY0OgAqI7gDm%2Fz5wEpkaDBYPrXR7CqIiUR74FDEHtSED39s6goD%2BayN%2Bhw5H890cGnSKV6q5S%2Fj7W6MFqE4dgjWTNzKUFsoY2hCW%2F77azlr5HTy1a1sdf8EWzSB6laPmC6uUXxYiwSzpk7yngXJesJQQMvJpl2A9sW73lJGWjhkhVUP3QtErBy6HcUzXjns6CxpgdUgMUlB1QYrINEtzrSmyKYTx6Oj6DUY6%2BHrUUFSDER9ZYA%2BSz0OABIRFRRnBCkUxK7KCkB77lnPo56jSBwtOsUWCaAKWZJoQ3%2BS9qUrwhGw5cvMJ3NrsAGOqUBj%2FlPaSbihOSCYyzgkYW8AGgPR0Lbyhq8GQHrEF0elvNJxAuAf06wzjBnHqB4rhOeVm0s3h%2FNsFm%2FZ5GcfdFD2IYZA2X6qIR%2FMKENM8CfzR%2FE4p12pgXAWkNlqVwaGn%2BQXepMPlaGbew14er8geI7CTSwhT2clQK35XWmalC514DI8Rd4D0q%2FxS96jQ1M3fOKKKRi%2B00YMOK%2Bidv3KHqzvZCYUvBh&X-Amz-Signature=2fcd24bc574923d3d9384b5bdb12a1635e28cb809a63cb5087bd2a3240c16c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
