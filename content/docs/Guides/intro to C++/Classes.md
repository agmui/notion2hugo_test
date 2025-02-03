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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNKE7YDR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIAUF7vrESHP6RLvhhWz83sBxzH76kDZ%2BHeZq45yIZbPXAiEAtU3HCIi%2BtZxsLyr%2FOEzzSdGHrHdC3Z6ngkEPc4kDSxYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcMCGdeN7ybBt%2BV9CrcAyVtkheYv1fbffqktehE%2BoOrMsXl%2FCgCmjggEN2ZDrXbHxIHp0g6TffT1LfDhxoM90L9fUOc7Lced9l5QQNDY17OBZOgLxZrEDJ13YtQ%2BNaC4p7Wzo9I1sQ5I5XeMHP%2BlWmBkGWBfJNkpcsK%2FIk3ZNve30BNFX56E1TImwdSmfPkOjq4VP9KFtLrilknBV%2Bg2VEVlxRvqCaM13mSvDgOy3eeRciVkNr%2FAuOQjjXfsT2txuwlax6MaKwyTkOkC4QcP67QEDokbQqCaZDcicTz5YkshaPPgYw47RcvyWoeYHJrkww1pM%2FqjS%2B3OEE5L%2FE3tCpRPfY9x0MJZPYX2x5OLgBg2XRLNpMhQFodGucyCW5M8zJQuUIlmPeUW7gEBJ2a4oSRZB%2F9yFmpSqlbQHJidGSj1ggIQ%2BB%2FBbR5DiOg93MTCGdHk%2F38S61dYhk07gQlmsngTouDH1Pk6BrfIPZxvLm%2FvuZa%2BJktFnEUElCdwW8L2lKWOtodwpFMx3N6LfXQQLqkEmTNSpBBmCByNKhbyk2fhveKIcBcvzrgr9NhEYmEIcLWMb5rDjFc6ga75x1EKimd4EwMHOU10IYT4Ebx75iEMEwyc%2Bc%2FW3AuBNy3OU4b2rvpZBoChoNbtwdhMJWVhb0GOqUBBFbEqzLxmaLPhnJv67jNxDMn8nBK2apdSCCi6e9aloXkoxH4%2F7%2BFdFM5o3ab677FuHW6xNWNN6cXNXoPDy4Z8Yo1UeKhAK3xXtomgtsnL4DBcotNVTqMlgBaFQ7sUL3lSel3ndFSlIo7wtRWrtkmqK1WcYEXyKRm1bqR0zM4hDT%2BqlH%2BdJZZnz0%2BoMKf5g6fJNqBH9NV1O5FrpGT5kJJWgB9xKsl&X-Amz-Signature=2115fe9a1b0f3b91257ea0fa7a8111cba684c7f169f1476738ea573182a6a626&X-Amz-SignedHeaders=host&x-id=GetObject)

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
