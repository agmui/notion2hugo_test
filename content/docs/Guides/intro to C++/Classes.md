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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKZLGHA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICdHjlH%2FeV1v%2BERT%2FnUgLv%2FIkgJICigRXsko0EE2%2FOxtAiAr0aYisyFwwc4KIIiY2FzeJoIuCXg1iBBtjA6VVG7q9Cr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMo4typDheKoHEps0LKtwDRs7mRYcMJkwIV5s5dHSCPs%2F8F%2BOdL1qraNjc14bgOsMODEmjSUyySSdKoHjiyyC%2Fz99L9vZO56VEtucoFBs7avk2U8aACj6waduOae1EVmgWuAgzp%2FnA%2BJCDdLnLifJq8rrnDbxtYJkgHGBMSRCpLh2K5shcvCGfpazBiiTKvO2EKOlZhgpgIZjWY4s%2FoWfA%2FhnNM02D3EgWYD6wkZq6BurlYwKus5hav3QOt2kbj4CyUThBdnagSTHwPk3Lo5t2gvR73DlHOiv0Zf%2Bo9EihvsosZ5paElcsGPD%2F8QgBTlRV%2BOBjaz89NMg4SARCCgWI2lnAqpF%2FFaHu8P3vagruaLFnEQbQ3zVD8ZK6VW%2BE1XcnbEfx57Do1JMhDPYfbvml5D95zyTvZ0Nm47OVs9CaSyyAFuTKMSPUxPzg9iytYGuGyuS476PaGmZuc5fRiBi97NqmReHRQjkbX7Gj2nXhKQJ3lSmCM%2FpFQ4Ii8GNMRy5HIycd8izJioZ6PkpDsj1vF2y8aRPm6UJawPGTzjbTdofw3amdqhdARW5R4BGyylFy9JwKGVVFmTNmPeOGHVqfpk0Ic41ukdDlHHvH06Qw79iOXtPjUCkMXomMSoCU5SWFAHLU5xhyWOsfaOYwkry0wgY6pgGSuYjXm46q%2BOJ565lsq4FOwJGkC%2BwjLiKjunLuy87FRD1s46dyz4QxRETNgfL7pQ4tOnwXeu0%2BKTqlmwmNUhjQPoyGQkogJK5M6mefgTtZyEO1UNxIKkgcHgsfXD6YDmoSP90Dza7gAMn8TOSkq0CFBjLqQydhpj2eoftXsN2ze1vY7ZnCUAFULZM1YNob9eCmumxqfUhe28scZlCyJYeOsVJiKO%2F7&X-Amz-Signature=65f652d049acc1929811bd77492ae4915dc50af45c02a86baa24a65939392f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
