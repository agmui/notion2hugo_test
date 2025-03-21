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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HMPIX3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClsPWVw%2FylJ90dfD2Hf1nQG5%2B%2Fnkni44dY%2FhL4aLYsCAIgPAG9b0JvywU93M%2BZSmht85jxse7xrx5RaCfHHek%2FP%2B8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmc6%2BPH5Rp919NtfCrcA1plT%2FiNU3Kgpb9B1QDN%2FIVQMlAckOtCiuXm0mDaZLNy7pR0UOYcCFM7t3EJD%2BUyWZRYojj3Y8gXT%2BS%2BKaxeAk9HgcCDfAfa%2FWh5WhfxqWwQScnB5l1y%2FZYndt0tTQtPN6hfmjZZWLZGi6%2BJ8bJVRt6Lc%2BkyOfeNZ%2F25uLnqYjyrlcvzcIoNFh8gv%2FVb63ouFzaWXvGq%2BdB%2BJkUVeXgka5E0ZKyMKpeBsFX4Qj%2FlWrnN2uxh2tjYXY3UnABlXtVaIoGjZHlN3ihvbQ9FTZhGYEoZcPm%2FC3EOOEeNqgiC1EH5ddKeACX8XQfzMUshzT5rE8nUG5wovLBsEzVYKO2W9sC5f5Y0uL6Uep2j2Bdhd7xl1Md84oFgLkr86LnIPvGD6WpT6Q8Xpr1V9AJqskADKz7mLEj1%2BzSEhNbUKdzn1zIhinn8Gm0obNArEVJNiJvrprlwbrVOWC42y0Q2E7MMLESWRGeugUwQD3%2Fz9yXFB50CdTvNPrrxz0CzERuu0X8qtPGY4IhlxOngTrK%2Fy4e09nrdmw4TUkcqH9nELaWlsBMNq6PP3EGnNDkoGwGCrQ7OdB%2BQUZiMfcgnMD2YdkAZhHgqL1NkVXspyt3HrOI8M6AI9z2BSIn%2B%2Fg8cnAZWML2a9b4GOqUB8uLgn7XpYz%2FyzuG8gjwrm5X5Ckg932Y24r3xmulg7OpzFgGuSU54ushgot4vqxNyX0seY%2BVLreNC6WOeSnj8FWtjmhkeqqOlT6iMr9FDrPRpIwcvezNizEg6fu8jz382BwV%2B0vceN9dDxwBS1gUjmMtdyQPs%2FpKWB2iFlku2OCW3hF5kul5D3HlGxJOmf%2FjbCoM8ssSnd1NT3KH2GfapQmjeud%2BU&X-Amz-Signature=167d9adbbeecb53056606904038d667637948cad2d44d9c3283b90e59461dfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
