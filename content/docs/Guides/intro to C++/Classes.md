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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7G2OZL5%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIADNcNhMEIQCfGDuPqhxdtAbuvSggeV%2FrE3%2Fu3Iq%2F13sAiBwh6vrWHiEWjG8SSaLJNn9eiMwESqTpMAHZmqgz22Q4CqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIIFSRKBo%2B3hxNerKtwD5Q7ADbrK%2B9gobut0flmc1E%2BenOebEv7QTSpB%2B40C7P69AGwyZjfWfds3UphYiJaXNShmP1RFAYjyxAVVxNBF2u96bNtsfYs3xj7fYmVSXOmI3jHKExx6PyQHRqJQ1zh0HFlRbOfK4VcLdM69IWCjtepH60BiQhupjqTINTMNZWywjkrJO74gCSVN3rPtYxqmpEJkAmpi5JE7CdWaT8DdwcOqk4RZB%2F6ciUMejCDPV0mAgrqnGpwHIxk6ZHyZ9tmWbdRQ4woEw%2BwU6g9io7BIqO5xrA1x9RXGt3qrYtP2%2B22HxeNWYyH9Dm9H09aYjG7bQK7wBtusge7U7ygoRkHOIrmDxa75vh13zML4Xelg%2BPM%2FwIbW2M9rwsL2zMOIWkGBbU14AfFz%2FnBfjzI%2FGH1L%2BKvgFP379UB%2FZAdB1GeEIMuEOPobmL29yeUe1scz6SY1zSWgtiapuv2s5NWSibhu5jmg%2FX0%2BqP3Ct2D9AiGOr%2BS1QbaslFI%2FH7kP%2BxQgA86jn3lj2cqMrUULbRbQL2EdoQ3A8FhjFW%2FCW%2F0GuRpfTKneHGT4f0g9yq6Pwfh%2F34TtkKYh3P3EnaLDQ8x0J8dIK6pPy2fJJctTl9j801NeS4G5Q0XwdCL7Y%2FK2UcMw0Mz%2FvgY6pgGtl7N3bPOkmgPq6iKumf1ikax%2B7%2BpQv7SzSo%2BcDz7nYCrydB46nTYVwN1CEBaZA51A5EqRkMcPQBI2tRMoIUE8kY5SzV9mcVP6z3rfeUM0RrY3fjRQt9KEyYRSN6gf%2FRGoUTueEVMZdHWpf61u%2FMEJw7TQgN%2BseQ48G%2BkzYRpI%2B2vHYLz7Pnpqj%2BeQQhdoC90oyECh8ud4iZaP6kCDSu6TKAbXYYdD&X-Amz-Signature=e675021c48b9ae0fe9d04f8f03d4320d8c7ce4d6f83c479687cb52e7c15852f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
