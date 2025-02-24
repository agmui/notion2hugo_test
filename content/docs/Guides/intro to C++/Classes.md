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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55NTMRM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADTPbqcNpcJtPwWWJdIVb94illRzTCiri2K3ttgrm%2BaAiEA%2BTn9lH2BxuaysXy4AeDMJRiUApwQCkNAG0DOwBMAMJ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEXSudSHI%2BFtj%2F2FYCrcA31fVmuxrrXD6pOB3%2FYFEygoeosuN%2F89M%2Bqg3sToeLEm9J9HkkAOJXf%2FEUoFNPoYnGOICyczSLc0lezmhU2hApTaSep%2FqQU%2F6AFbbdK6wKIKiVMHR2it67%2FQDn%2BqJU32qEN95e9LqBfflrJ4lf6g8ZffAvp478fc3Gin0oGTUQgAlMMrjgHUdFGhU6j4wSbX%2BLuC8SXUUWlBlTjOJX6FRQ9JLvE7tB7wmlhcX2x%2BlEUdTJ8vlHbWAaz4aXFCcXEYyTQs5TFR1P%2BOxa0GhC1%2BoBXFKrMPt2Y0VNEzf2a75WxPlOZF%2Faikq9p1wnkcwKhiTG66Igq51sRqOrDwrcClqk8GGtAJrOA6tFgZvCveGVV8DcgaC4Ra0B1eyPeyqg5Q%2FjL2kUTcvZi8Wpva2TkFQblU7w%2Fqg3B0YZO4yp64SpG8o9YrIRb9z4RyIBerFsgQkGlJUrij%2BNERTasEMl7noePQgWBU7SO%2FztM6ioA3PppXKKUzokMoevii1aiGEk71ftyXxpqGseXe590r7KQnVSZdpqGlPVMrGx%2Fz2Y9XeCbmY3R5qbNTRQEkzdTJPhH%2BLzEqJ8qlA9VJyMJhMPN4SSYRNQdZi2Zw6uEKrhXY6wMvywcYkD0CjFatJwV%2FMIzX8b0GOqUB9dxIFv%2BbnGD6C27GGLHZA97akmPq5wVQcOaKd2qEtyI5zl%2Fo788WDSsH1l%2BjFvShDlJui%2Bkoa8hHW%2FZMB2JUxk2WtPzjetsOEBlqyG2tYIVfgBmPvRLYA1qon0HM%2BUeW3pnouVgMY3rXHT6MBipS0gnAwFHdq7JwGklis4HzOYYj7gVkLHRRf9i6oDNqecpmlpBqMxLXlY9ptCZjGSEZh5JgqyOI&X-Amz-Signature=18b0460c2c9b522d4784a83a698c5097fdbe6aec0b1752f75274bd2fed07859b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
