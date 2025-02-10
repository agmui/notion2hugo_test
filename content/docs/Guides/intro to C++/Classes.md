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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZ2LBVR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV4oIPBaNj9DBxH6qQsNcDVTi%2BL6aGWCKY6oaVv4jheAIhAN%2FIQKwjZIm1Nb8OBGH82dwK5VHfQ3HSkP1QHus4OC7mKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNHRto%2FqytpUl3vRUq3AMcvbW479IVxR4sJ%2ByjVh6w4oEC0Uxg34OUv5%2B0KBqg%2BArMZ2cPHVnH6eFZl8Tp5fSDVx4BWsNaY7M%2BvM84mZMO0clz8lHE2j0McssAwwWpQLTUWY%2Fyal361Q9su9lW%2FRhXekLWzARfO8bf%2BoIKK3TgaoQCbpTZmkL%2FECsIOFHQRlgGCqOSK4WRLLtfaHHNkosaDTT9SgdGK%2BCg4HCd67Ua6pNnLY8R7%2Fubbj8jEC5YFumuQDhtltu%2Be1HS1e2NqRVVvVrFLwxyB1Wihd%2FBFodu3G76RzCgEa6gNpOK84CcDY2Pu2KSBMhUJFzhndny5X0zE0D1lBHiHsJjcqUW7MeNYNMc4AQsUNDQ9xZBFAnrZDCwbqjyLudoFNRdFBbjFGv2AixFP%2BhpMRd8A2gyn7%2FdlvqeFw2cFXs7FNkk3cVsCSATHof%2BxEwVSO6MkNSyWgrnBDZudtmEZiXssoVIRs0r8QJV4n9lUZdsA7DrFX46e83BF8uDBdwm33S9I40TrZ8x7eHFpd83J1v03z0OtiLyeWlrpRhYeY0izrlcfGpeGqwbVUzozoJDvvnviu8r3uhGLwW98dJeGGD5ik8d0CuTqb2fxrwOMkuPNqnovBQWGH112senA6fTmQOMcDDnm6W9BjqkAWJkF%2BpQINDLqZD11zxf6%2BhL7W20x0RWn3s4O0jFkF%2Fk3btzam2Yx81zUxfQZRClQrgjDBZltWKMRLhk%2FSozOn7fIG8CWKntmS9MUel7ftJS254%2FC4Cp2jkjtpx1PQ6wAa9rWMDkf795Aaa81UiwBowRCXFBFhQUiiOJkzpTjxDFr5S1OP3e2H4lho2vUw%2BBA%2FRDS%2BheQl3zS%2BCacahgDNhaiBV4&X-Amz-Signature=e76ea62eb9b4abd96c68f928496b69bbfba5bb21d933b3de79ca5b7e8350764d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
