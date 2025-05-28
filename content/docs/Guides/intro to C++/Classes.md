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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCGCAKGC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0OLoKh5%2FHlKGxG6M%2B9vExo1OllzXHrOgIUGaErrsAOAiAw%2BYpD24q6FMWHim2pTGsH8erb05Ap%2FrUWoJAvx7b1yyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMp6jxRjSkdv17bsgpKtwDuoA2ZJ2wUKHmwHBkuoszuXzPyLziOviUh0%2B%2B8mcls%2FkEs7bIilAt1bRSkuq30onzi%2BF%2B1%2FSiAm0VvqTZPyCtwwdK2%2F2wKPqW2Lrw1VHOHM65tJ0Oelq4yQQjX%2FW8t9kKlQp75X7hDBHUwH1Pae%2BesL%2BUxYgFQsZcGgSvzukJ3LjAlfRoMBsKRcam9ST6kKFBzJ%2FAB4VyasJPqx0LW61rqpStZf%2F9c6QvM85s3ETH5JPW1pk8o%2FDBj7hdQbHs9Tkzs2oLNu1tUNitgMH%2FKo270cuXhEoes3l8rhNKto10piPbEiW2%2BHiX0WvXKZ8SP0oiHyVybMEHBMsdzJGuIDIft2XkBWPqkPkpZ7ODRq0fokIJPKB37IeWjUXx3fy9ks355jpDsNrea%2F%2Fn2bRGgQaUwN9uEbEq2qJ94%2BBAnQGytGwIaCK7PhlEwbtsvaP1l7f9pEjE6u%2F0lLI05Y0H4I0kowYlRUuz92Q%2BIqcPKxQeCRKD0mqLboj8MmVKz4GTDe1vNiIuNQ2GKTvLUoRFnagOazuWy58lyR0nI253RtJvtNdHAge0jxpIuX17EGw1lDbDrowJTGwY8Tv0NoCqKMOX2ZZiWkjjqh2pwe0OHvJg6Js9IkVr6uFZtJ3ezh0wg%2BvZwQY6pgHyDcc0TKyW8XC79F5iC3DbaQcSSkEtaElmThNbAmY%2BJPWKeDvZiZ9WmaMykST6Pw77whgDm6SP9aJHHBveZak%2FYQP%2FD3DAbBQD1NGIf1KE0tLzjufTjmo9amKKtmqQQ5BnkdSoYEbUH2YZMATSceD9sArjIE4%2Bo%2FuGVIy35%2FFStQcp6oyz6Uym8L9lCCUJ82S444tS%2BfbvDKwpdKs%2FaYfnwVo7vt%2B2&X-Amz-Signature=bd75976d508a1d128ad617085e2c47729c9f4c54fd21a935b889db7cd8d0a1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
