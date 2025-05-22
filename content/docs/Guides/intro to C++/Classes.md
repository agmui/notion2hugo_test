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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHJU2XY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDi0ozwcgdwkf6VdieLaLHyy%2Fo9CcRqNwwieUyI1bSXewIgZyPq%2FkwfWC6Q%2B6vplbHJvM%2FwwKm%2FV4AvxVmyjMhesDMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyMm9j4%2FVkItsKd0SrcA7%2BIvbEuX%2BxajEHDowyWCCLxQhzXd4ZNcMXLSejNMWbYj8YYFlfyYLAQrjaj9FTjuK7AREE4Ei%2Fuzn8JqFElwd58Hx%2FXLOlBO5EWRMGCGrUm117YPMiPEKGctv8K%2BttX9TwVjiqYNmYPqC0rLCYzf5%2FeJ2H2Cc2TS8hJ7oDgIZCQo9ZfjRxXhODewYgjCpV%2F0NGrbrjTI3kECiLjqc4KF0E0lElj8NJWYsYE7Dc8wv5suNYI2cPWxcNxTuUuFRkTreUXCiWWtyauFnctP7AC9VKXOl%2FppX%2Bu7kdF55kFT0OkawGeoZNjXrlpeQ0Yn4dXQv3ZAXZ4B4usCtbS3t51v411rtYrpiwtEBaEclqevrqhaux%2BCkkxPP7xwYRQqempWLnl4EC90BDT1jCdMQ8zqj4t8b%2BQQTXaUNbqOsJyGa8iivkB%2BT4KMmr%2BNoHUsj%2BfBeKsczYeymfYQPuyHv0iKhFQGseLRgsmfPvo9Y0eCo5sI9rIATNWEIIs9FyNuk0m3nd%2BZpncHoSA6B1uLaHhq3OQrzdRqY9CNaVD%2B8IGEx8upUGWWqdShM%2BxBuo%2FbHlltZYBKxM0EoKQLeLykV%2BCHqbWubkYVI85HtviM82NvlskvICnwX9UB18hMy2YMJr3usEGOqUBdmKmCzoqxCw6%2BSWSyLT8DnTVFADuL9en%2BMAjZRHK3PYluIymVtyX4wollURD9aUiSul7zuQ2hHhPEM11VcG7jFNvzGlS9ximllgNAGV%2BX5nbPBLUFbITEhJ7x1EvTnd29%2F4HVsz0%2BbSj82MgwV%2BjOjABtR4vjKc%2FqqNL5I5uFJX6%2FZBlgXrbvkYdPTTDhqg0v5JshTin9QkOYkGXlTBGmGnqdHzR&X-Amz-Signature=af2c352a5656d7a8e40af89df739de68ef9624e8cf7ca3f0d5049e679aa4aad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
