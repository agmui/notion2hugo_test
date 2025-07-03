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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGHWAKND%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIAGSllQznlOqWm8VClA1E4%2BoU2axlcXZf5rF2gIoPe2wAiBablEbkbNV10DnUrHuTIJF05eYTRCDz2Trq1kd8%2FK5DiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk94YoStuDfkB4Db1KtwDfeulwUvLCVUS3MX9h%2FFljN6okUYyUJVgAvcKOfEcI2UHxTNk4os3leuAn4Px35zMGNToKd6isXEifW6CnqQJsZknedXdhysf2K4da2zAbZkN3LoCvXvy1wDrAKnPqFHGhmBaZPsulPAvcBVQmzaZtz3K0s%2BYR2kgsMFhHtaKUe%2FX%2FoWtzg7YoUn%2BmwVkonrYXuj17WXZvSlhINBhTgMibL%2BuF0CqqqAvl8JNK%2FAtH5hY91MsqY94Kt87zFKoTMX1M5M%2BXPz9b0gfQ8kS4uuyOnY4LA9GSLibhMuAufmO505YQwZLD9TyXL6Df44xmueEvbv0US73pa2BQnD3%2FeMRd1swiNmS36Xe2lvcieA1OnIjB1%2BvZPHwddjfMYC%2FRZLWwBkPFTnY6gzCJaChCJddnj3BB9AnOpEJWX%2B1scsbN%2Bv2SZ3Ud2WyWZUg6dPPX46KvKUXtgA%2BQS%2FpsxWWShSQLQBZ4auVGtZfgrAeKovI4I3fQomSruraCJrTzpOD7xQ9btbU4E35x8lacc%2B%2BTUilAQTpMQJQHEgYzU%2F3WW3Uu%2Fe%2B%2FUC0l2Xhi8YYBANFxiTclnNPoO22C9Np5A7BEfAtVgReGyKH9pvaZzHtLx4Wg40M%2BYvtjxqqWfB%2FoeEw5IeYwwY6pgGWPVzx7HO39KYk8%2BCt0SiFkZ1FMeDu7Jg1%2BqxjuhgiIIMefd3U3ABERzLnYT5kkAX8Z0T8mzyr4v8IFr7TAg66yvkGhRcAHY%2F95kaXcFNk550kyUABgMWyl%2BgLoWmr2lGYQinngSeLIa7SQAGFKuVM%2BZPJqYQ1NnsMK7HnoRm9kjWujius67prPZGlW%2FnYSui6hcnZ0Kh5dUnZP5p5P1Bq3bWjNzL6&X-Amz-Signature=abf9b560aeea2c6296fd0c892af07e58865856f9203362e56d1bd7ddc1052179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
