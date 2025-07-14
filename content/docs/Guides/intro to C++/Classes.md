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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4YAMP5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCkqLLmAVLVb0DmBV4iw4weLa4ojzDyzIdkolhS8sFh0wIgebgbvxT8h4M7AwRS2MpIalG16Al2bwm1usmBWEhrVYUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGrVxD%2Fx3G3XtY2cdCrcA1jYzbX7kUiqIfAZQ5cZLh52pPJCuI5DFyaHW%2Bb4lSJQLou6WpfMeQiXrmeBgFroZ9lCnNbILBmttlt%2FXUPKPpseQt8X5%2FfGUcZKCjKCLiMDiT6nHoIKlLaDY2ZyfxYqwoDLBxnRrzAwNh2M7HPiTYRg0GcXvuCQpSvJ9QSo9it5J0OB00DS54KmJkhF4MsvCN6%2BRemgNeM%2Fmzx4xanX6hV7wV5rbaFO6PZfMcv71IJ%2FdMwPJYwQQDq9O64Ie4PjxLgjSBW8r3jFbm1IbHlOlwc%2BYf4Mp7wsRwspDKRJYuK42qJ727BhAU8krOw1XCArwZ8uZFNwBJF55JFVR1Aon6BTZmj1C%2FxHjt9fIgo%2FGkgLO3AX7qtqMMTV86D6wZDeFOfPqrsJiR6ZxhUSyu%2BMfdvWx4dLLteVV%2FU%2Ba6Oqz2TzQgRREvmc%2Fz62xYg2TibsnxVkhWJ3edaA9Jkj72ynLgVzbz3s3%2B9Cx2CR7vv0j6tZQOXht7zQr%2BA0NG0moFnR7fsoLaOnoCyhr9zyBFipJqClygZLdQK0XSAEx9cZby6MIA6lxBV%2Finrj%2BabZ9L5T9R0%2BUBgW%2FYAstEDUuax4OvRbBvwPLOqJP2kY%2BYvnCXsic%2FBObp9pEDpqpakaMO6E1MMGOqUBFoFtNA86m7%2FseWNzTM6LjK7axfPgI785XyFnJFLCCcm3rRSLv88xXutO44WYIEJPyo3FfQx1%2FE5X0NIaVs%2FhOmioNYdKh5A9scBxMr4%2F9JrqIjhdJb6dUOWnN9sOcq754Sp0RVK0d%2F6CGx3qEU0FOLgKSxBB2Lv1wQdtAis5WC4hpfxs%2B%2BeyQcpLCMJQLaB1FSiDBlrXSBYSwHyKbg9Ish2dZvtD&X-Amz-Signature=7e6af5eefd56520e2466a6c97b25fcc1b8526e085e2bf3ee473e2ee862af5269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
