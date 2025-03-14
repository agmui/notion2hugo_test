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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQJIRU3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy5Z0ekZSRsRpg9gQ3tmSdeCnbUwfR85cxGqFdqgBUUgIhAPaUpagNNtP7zhwCUnq0yup1TKiNRkgJAoefPCurcIlSKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrRG%2Bgxp81IQ3VKQq3AMYEEQoX%2B4w8E2o8kFER5JR2aEb6bFasipDu76D2S9tEArE%2Fnb%2Fdo6cTspuixLAyf56jIUX2RTzmx9O8qUpq8h58L8l1gBoQ0FYjfb6xr%2F2TCXxOuT1p74XsMoGCGFs4ATsGR0XP3ae7YyiBLvpKbHnpyJQamYr%2BPlzY1gBfqDATYJ5t1Y%2Bn7SwM66UhXmHzawd%2B7RTH13SSyLi%2BG2IMaJ%2FsyHGm0huqMwnBZgfST%2BRQWJXKjF5%2FzVo%2BenJxmIisyjS4wjNpK0dsg8ZxrK1PfxxmXnN5qZ8hZlrvc9%2FD067wThNcrH2SGb8VYx%2FEHUcXoMNyDduy5TwkAk%2BcwTJkQtFONjBesWhgB%2Fwkj7Ki4DHOTJnZPn0iauErgyxJjXTgyzm%2FdNEJJuQ91KuZaCXl6JQ4h0Ev4oR16ADdgHkazUe2bS80v1ToIjjVxOFQE3tW0fEz62p7zvV%2FUt%2Ftw9KBlzq6RYnuzQR0BXffcWnPbuDZZhrVTYoJ7C%2BmgeHUIihO9X7J8CV%2F7HsL4tqvg%2FIRR2SzgwnDLtgvmYVKes0fSkv8Zl8PyJHTRkL%2FrS752ZvwtsyDscyBR7KLoaaGalPsQreDFjXQTzSc4l45E44hGlhPc0iJisi5NRP9rGxCTDExs%2B%2BBjqkAToPd2Rm61TM4VbgrzVpqd6jlDXwU0mMPmMw%2FwsVQ9Sbj4rKAZ9s0q0MOCBSQlZEVNcHClEtbNsDMCB62rvUsvT2b7%2F2%2F2X8WBq8OmIhTYA4yDm%2BeDSNw8F8Ex3SK3lVIloOIkrZIthgsoHXAe%2BZcD4NTte%2BvtAgLpnLl8vRzqEo4pnuzvztozpui1%2FIB4gDpqfgsSfP7li0HmUcf2GiOLqPCXnF&X-Amz-Signature=b6c49322ffc6c8c2e61564ab66d0ccfda96d2dae5ee0aef153bec2571af7f9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
