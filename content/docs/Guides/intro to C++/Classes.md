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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT7B4VZG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOfVPy8FmiUN2YozGRV%2B8%2FpQ1DtCVowi6uLHkGAib26AiEAt1%2F0WGAZfBpK3zA1XkdE3LM47oBY33QPD%2BNGcMitey0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDEMMyIYGKXo67q7HrCrcA64fDHeDNKELsew%2FE713MvJL35VFLaV9av9FiWY%2F9pyXon1cS32wayJZpJcwZYPQQKr2jO%2ByCpDtH0yKWPXt5m35dTj%2Bm%2BdULNNWqoa6Mi8RXhL%2F88XYN47DwAJ7qk3WiQMEqVpQP5gUHvjSej3NM64I2CJHAi58U8mvLsR7u%2BGqJP9UtMLlSGMA3JV9caEjvLvl7CeEAU9uBPaQnGzimxoVmfAsLqdWpRLmQ0Faj04Uar0qFsDaiKvqK2LILgK68Dh%2F%2FfwQOcgg9Bj6BaIAqpoSE8koou%2FKl2yocDJ8G1Vh4OP60V8Isj3SXzHWROWh3UKPkxylm81aG0bpKdCtRyrGR8RSAfjsuadZfv4KceP9O1SeSFFT2fgq0hSuoCyzS2eV8Y6Pdpu1GCyEUsuo565zrQ01iHJVdEBoYj%2Fy4rJXW5cOCl6FX8UTiP7BwaeUI82Gl7jjbQ%2FzUhneJMmn%2FFUc3nUmmKhJ3p%2BR6OTZIBrrVGG42p%2BK5DgLHmyX43ghZO38kCALegaNnh3XpGG1Iis2IGSlaspqnJ9JF4%2BIDHeagxJ3vdWM%2BY%2FZvRsLtJcZ8G3XlrSAMpZ4oQitJAR5oQTd1wo01lAIkdb7Ff1wcYC8zEase4fuNLlTcI2QMMaSxr8GOqUBjL%2F0IOgLj9vD8qBzJm3mQNqGz%2Br%2BeZ0cVfRL2fNiXaWJGMyjyO71qR3ShPPRQrkiSze3uCloqgSUWLflo5IkLhK2YHJ%2Fxz2e%2FqTWigrezG6PgjQ1pLWcgZLpZ8AvAYapNbF4FAG9pA8TWtMi2kDH7QLz%2FBU3kXLuJMpkn2s6pazj1VOMQBH%2BcCRqn8GlJ%2F3rDqnBVBkNxeo1dOUCjl4P34U%2BsfDS&X-Amz-Signature=4feb3ff887fe84d9acc17bff04cb51a3570744b8bb10be9d9f9fc00b491fc03b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
