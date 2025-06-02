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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUTNAXO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEqXv7aYSg9d1o%2BI6Tuy5kuc%2BnnRtVpqhyGeF6ed6b4VAiEAhwjrgQvAwmgfsn5ZLtXw1Qm06Ms8SN%2Few0tDczgwh7QqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxCAZK90%2B4dUXPwmSrcA9eokoHprBZ8qz44fdAkV%2Fa5JLSlejfaxokvs8SUXLPuTBd%2FlAM0jYuunGdhkVN6jFZZOy3HVCR9N3bJyOC2bpvw2hXRBsoG7GGa7Xe%2BS18CU0%2FDKQPtsL7QRCV9SLCh0F2L%2Fo8zqlrb22RLWBv0GJREkpzE67ICpEOhmvJ1kj%2B8g3%2Bmq1I%2BRprNnxN3tqSvqdJNijINhHyHdgvARKCTPIpquwhS%2FGehbzUG8%2F2Cefvw3z%2FgMofJqH4ZX2n0AfADU4CIMFdOXUqwqJme4h8xTmwLN9wY7dwEPVbDagmXsDvM%2BDCjZYU9471f4BpG7OLq811RPCMDm11myC0VSxHLsOEO1G8EvEdgQFOtdbueH%2B72wHdZdLyCo7FUH39hfqKYfjIlO9aViLPkMALZU2CIDnoqYw%2BhofU8H%2FcpPS2CP2U2e6neYznelfk80K9MxaRDbXVgUxAuchp%2BmdUHTJC%2FosFLvuBSffAk%2BdxZBnvNbHbWdZROdhl%2Brr%2FjTGkaEhsm%2BJYajHoXzKxM1h1EXieOiY06lXDlQ%2BkzaUEAOg9n4il7gMP1a5Qfp2YnAt58Y7FLublBPD7Fre6hr9VnxJTLKhAYLs40nA02d5%2FadieORaUwKskn0XYtY77OLMhqMMzC9cEGOqUB4IKkq8TmjRv6F5m2j9kMknguYEbcWP0fSsGNpLC8wMRs%2BBOhsB7gPy0%2BtKQOZrjVMCDsTEOBc26PljM0CkNhJLTwJkWp3A1UnU36fZGtNCa7BNDw%2BXXiBd0Baa3W27dTqqxwdGBxq9jaFr8SsUDr%2B7h5TAsToqaGWS4FCxZ42lOERwL27px%2B4%2FFvS1QLiUyYLTsTCCQsHkgUVEMT2pWErnS%2BV%2FR7&X-Amz-Signature=a04dfef2a7c195c46a0caf3273460d2ff6d597c4ea6f8f70b233bc9ae53a4ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
