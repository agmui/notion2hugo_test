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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFNRD3G%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQAX%2BO7s4m4x%2Ff9Fzhtj7CAYsDD7Ulj4vF9lfE7qWqMAiEAj3IV%2FqQwV6ZiiJ27X70yEYbjLcmD%2FhwYT5bLSYMY%2BGcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoqzmWQSz96jcFExSrcA%2FDx6cZwXAlQYCcyoYiqEZM5vjCtfo9yoPD7AP3ekAFORMy3LA18ebwWB%2FZpWgs9Lx%2F6gPSPqfA508Egsx8%2FRy7zl41zYQEsbyPgYk2pgGU7mPDoMHKx9wQdtb5NhvpwU%2FMmggKQpLjlXqDqY2iMFa0LmDDFNqXVBFnKBhtQqTf%2FqrqDCzsNJAX58nwISy%2BvFoggdQL%2FbwH%2BioyYTOJ89gI549dhSzWsAbFwS%2F4W4kPC1PqyNRKkDyT8BT24n4U9Kae%2FVJZB8EIauVuVPnI1jWSQEjIK8ajaBrHmtF153Qfv1sbwm0cd%2BYGTka4Y1NliMmdA5Pz7mJWsKO5XB9JGwNwA8C%2BUQ%2BucvF2NkuJvA%2BkJjocldD9Nk2Gkqp1r3Mu9y6mK%2F9N3ceM8DW9EWSIG6IPVvbBGw5IcrXWx9u4HTTS%2FN%2Fh7Q%2BJVSJLAbNPnJmyTQXprdpJ5fOf1cnjywXxMlZJQE485p66Ch0q8TNvqvblCnLzwSnXe2Zn4NBBBl%2B%2BZBUmF0Bc%2BpYZJa5zhGX5XwhY2C2fnviOUP%2Fy70jdLUS9sp11a5oIhJfOWjX80VDHS6eWTKhzV6axbBvuFsF1k0iGf11E%2BTr0tvo1EZftAyo70QsfP0Yvyl%2BtGUSjVMPWq77wGOqUBmgMfbsy1l4n7B1COJZb%2BIlJfF26s7CEUpc7xgQ0jb5qLK46LXW1x1Y%2BrGkz0Dp1d8uprUUpJPJeZqztH2p2IrQXB%2BpYTYDI5434Zl9QnYqV%2BkgZUYXsNQ8rM7izB0bYvGio%2BIhL6ZcxJiXAjUcf%2FUYbu7eG2JMv2%2B1EdKSw6bmp0AllzArC1AiSI%2BITvZS5QBiu7uK5K8MEvXUJ97orQRnRR9xxS&X-Amz-Signature=c388d42661659883962239d0d34bc9ab5fee88e0cc6d3a33e0f6b11a3db4fae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
