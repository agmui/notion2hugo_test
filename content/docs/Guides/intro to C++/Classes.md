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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VACATX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCNsEgf4ekHxkW3t6jlLdm4186gPLZkPDWsA7V%2F%2FuOEcQIhALz6%2BXsb%2FVQfYY0BC8d8BhjwodHFCZWm7zqc%2BpiKYNaRKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ0y7bajZE4tn9JgIq3AP6TiagQJdLcDRXUowundBNrhGif1WkAxtAhZitX%2ByAWi3t7rUyUWoiFWfKaCB3gWfYvnpa%2BRH%2FttdsvbhxEW7eDe%2BuIK7510udqm4BKdMMFjUhjVZFS5UzpJ4Cxo3S86jenJWmG47jTN7hMvLh9Gdc%2FLQHDCnfxJaF0rOtyB1tZbUxFe7O57iL6%2B%2FzPC2kyNxdNmIxIA236DvXK2ejT7J9jtejvVySGJEIakkl%2BA9l96Fl2VpduAkzpM5M1G0ZXYEEoReiJBkOLN1CzZDoB6mmWuoUuSKzTUg%2B3VcBPszzd%2FDFP5FUBFSvbgUyJTSWVQC05PodVZwj3%2Be%2FcKc78yiIAnHIejl5tGqsyZCJRopb3CTqRLY6FZjD7O3BY8w0efXrZcF28LvrCOYdPNqvex8A0AiCcH7fJv6Co0usj3UFEOD3nKHRL6Dj0w8vJHbcvxtsvPLzG9N6IO6dnu8xgrvM8DY37o2Eirx3heANBvYJ3fxPItnEokZ8TBRDbplh22Livqa956bTB%2B7rCU%2F0j7%2FmmsbIZ%2BE%2B6oA33GD8KLDIciStnSjlCBdsXgRbpePRYWAPZrPoMkyUXIQzEasHNHmxcjXyos7UzJLiL2u3IHV2s31VMwbjozWNMcgFxjDUn5%2FABjqkAVYhx2UZy%2FNt99KrbSgiq2SBZKlNxqSukQd5IankSWYdkTKIL26Qe8KgmEy%2F1VeA%2BeB4Sc5nYqcDZp8XbJgstCzkirSQGLnkmosj1%2B0LbcSQCDCmj%2B9TDEhoOPHWlTiJIJ2XSDchD9tmlrCgyTTOLcFQCVRGi6wK7ZLTo%2BxSA4f1AR%2BLQjZp%2F71KCduqA9csrB8AHokckxC%2FUmomtT0gP%2FWJ%2Fu%2Fh&X-Amz-Signature=46b3eceba7c81117f09c86d9f18a6a7f716a14688f29a83a3a3cb7a68c25c2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
