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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRFHRBL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpUnRekgzLKA1m0xHh4GZL%2BOYn9fh%2BeOfZnRJ1p7EytAiEAg3xawwrbigeJXcq%2FJaPftER8VW4ApeJt8WTibudbJs4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMOcNQPx7T8BZd8okircA3HyzKC7ES2tbNaFcrpzjN7WROggMfGZ91mtSR0VpAKS5tXrGM9U7grDStx%2FSf3ySG3yVdpEBrAGqbNz4N%2BVy498lDBq76rqHJ3NMzfXF%2B2Ya0jNSmHrXs7pj5Egl6EgfGSrQybgCYLUUuzmG6nLumuEr%2Fl8OtS7pjB1%2BmypUihkH92k1luy00AMMkRcEiFHX5Oi6zQBs4BGWsU99O5fvURysZJ57VEWw3p5%2Fhvco2XBeQZm%2FVaKQDoRNh6JH1KRvX1LrlC8PzNCc7GbMB1KezJpfON9th94HbtTqm9%2FF5QBJ0Ru8U%2BA4Jf797iMmZpp8esT7VDz8xw%2BWwD1dIveIeg%2FfKBgRIl9YMW5BirLV78sU8KvLkeUOczatXyV71KnbGZiOQq70RJTNvH%2FNCYqLPV8VKJKFf4EBhiBzm%2F3ifSKyt93Ciivpr05U%2BLqwbDnekoRM3iopwfBmlkvHdA%2FKhjsK0j9E%2B1b4MOVF9qc5tB9xE%2BRJNSuQSYtPG53HjeYu%2B7R7xZBZqASQquDJJSHcCrzS55NAl%2BxdoK3l18EeEjuQs0EEgDG3O2Rzq%2F5%2FYr%2FnBMBiMpIGCeE7oIUff%2BfIPE3m8yHbrajWZyiPXKg7AlncwKjZx7ozHFDcY%2FFMKOey78GOqUBp3DbljbdE2sDhvzLicW95Wm9inq5LuuGazi6QItU6tArieiv%2F9P%2BDSMFzVpC4fJ0jDRPIMKyAjAjZcFeW4EK2F0gqKyUKLf5P0Kp9YAssabXYDo5SkocRiLOBy1n8P%2BuaWzoh0Nk6uBdzj1G5%2FtfWCFULbfKFkCbZI5W253%2Fc0TsHGUfX55FWEkr6ICUGX2zuDJSaZI0K4JIj0uwi9g7bBHawNhr&X-Amz-Signature=7506d6f06b7b5f995e7b058c8d9821ff592327971b9e23bf3669a4f8b1e6582c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
