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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEQREXQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIE7kAy%2F43F11fOCLvRbXW9NN8myqSI2Jbeu0iZ7ScQxSAiEAtgkghBW7bOeQt%2FJykW7%2Bp5f07pn85KNn0OJ%2FGq1Zdekq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOFX9k9KSCrEHveAMircA35LJ%2F6O8kHyVroEkPqdp5%2FIKbJp2qqADG2G7aKZc5rnYYdALPhexoYfDNWjbLELiJTDyCZoJgyKO76mzp8tdGsfhoedguGpWtTkGUnmcirpYiz4IulS3I6NOZmEXOP%2BL%2FKlfwK5xrhLUJokf5P0kMcM570tmqCSMvv5U6ZSA%2BU33r8uJ5QLtKWPKc5NektYGGP9vyNYSPjKouCrcfA9Wm%2F%2BsiUHVerrLGK2ry3LjLWYVBWx4Fz9Ca%2F%2BJKoaKTqobgmlfA4WzdaES3WtwAO1M6tJQs7ztcMaGckHImD9Zyb4MdgYRrrhLdExgQFVZvgSoUQ%2F9PHx0ZDq66hCfI5RrogBpyHjtBViaUplDDSc72TrDZFxR5FW9p6I6RJN%2BX8nRddioQnK2d5SKKZQ2BB4acB9RXABWKfD8YRc7%2Bi2WzDr3i34FAwhuS1y%2Fzq0voySWaBC%2BAH8S81pPc1mBazUqzS7piGgsMuC7p5cts6ej2q6uZYKf8W0nRvAZJIUt%2FhJp3J9OPB9OqnF7wFM%2Fo9FgZ0Tsfg28Kyi7bOkP2mdr69YdeLav7058O4AdHkSmhZDuRHEEdtdZqR0zJiBIOGG5%2BZrbocDhGmsjsHyge7MdKEjxR%2B3EUfnbBu5H0%2BoMKeegMIGOqUBOrSnDEJVkpXjMZDh%2B%2BQCNoQpmTAuuwtFIOzT5hbq4TVtT3YQw639c8QXfpbN6Me7O%2FjDtsX4LdeSH9rnhwR09pkpTbsqRxXuwKIZ9DjCwE6fOvqSU8DwrbHLGGOeWzVRBzSyEnw8ULrss7EZ2KLa73oeRcFN8RCkjoyR1zmT7iHNMD8PnN9utWvfDfTMLt%2B9ZxIN1WdJxIkQF6CoEss0dGcKfV7c&X-Amz-Signature=4963d00cbc42497561490939ca86a373d53a7f068eed80ae82bd23d6ab7efdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
