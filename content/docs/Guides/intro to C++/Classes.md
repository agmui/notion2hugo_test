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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4R77S2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD78rJMokzD3potFqCc4YLAp7XAcDSGt3rnLb8aaWZChAIgIALQyWrp5oR9RPTFOentHJh4ZYNE26Mw5rsi2PzIM38qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1EYV6%2BCOlKZFfUvSrcA90FtPaQjbPj6p94Fc01z6XVd7hOIkmHPGphMnfde83nWYNTQwDLkhs4pud4Cjk02T1RjOB%2BQLClMon3HdyN9jFDlMV9dfD2IMi51AiwYTpCTiUwDejb%2FpvIN7kq%2FDnU%2FlslR0b6cYx0O%2FlPeQYyBYu1DIx%2BM1%2BdDj6WWuB5WhZ84R6HoWLYhO9HxHA64yEv5VtZ18S4Aw64CaV37l%2FIWl5KdVbSkpJMlFN1k0N%2BGV%2FhXP41pDVU1RPfGg1a5DUXUAicnCX0i1agCe6HX4zjWwPYltDIDSqmael8ON5jFtwZ0WwglmGFCnHp%2F8unth2%2F%2FSTtg4q4HFwWkbJE5nGDP21x0OYPRGUU%2Fb%2FxFavka7luQz81KFhb9h%2FWmsepYluIdgUW4TSI5H6dgLXYVjlWVEfw5ll7zKEdlptd5pyFM3lXEMw1qN7Nl8sBLtpDaiMkgIQIXr1SvL2Sx%2F6GIuu3CGXQhE%2FI2ink476zoRczRMMXBrPB9YMxFbQwd52O8HXgWvRZJImA31sXka4MK%2FiqoSEBNfKSaK0aGtkW%2BF8s1PbjI3yBzZnJyIqfIR186JARYA17QalkhhAU4pmzA2SYST8X7EBHhFNj6rWFS0Osr694px587IDrS5ExZsTNMMThtL0GOqUB%2FIEr%2FZz7g6yWTtIapKRJeQUe3ROSaTpzwDjk%2FkhtazBJkacf1p5FYRdK8hLcSJCp4f5IWw01jIe4v2%2BQYVyEAsRwpalgHrLDQL65Emyie0M4e%2Bs9bi1v5dPETxEdpmypPERfaSL7iLAxrAkfJzVhYguyWCtUoNzUOYb2ScLMohP0ggWp%2F3ZDD56Tu6DC4XKlV53gj7fcwjv5rY%2FREpFSKDUsuvsG&X-Amz-Signature=e12cc34d1ff606ff3e845de73820c9bbecbbd2a702b195c5fdd3d47f8cb051dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
