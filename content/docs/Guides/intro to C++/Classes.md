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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJLWDHM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYXHsaOvucuwR%2FBNKkmfqLnmepc09lCD5Tk3Wl5TTQzAiB2bGGHyfvP4294Uon5dtYg%2B11i8R18sbTtCgpucBwr3iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BFKSawi7VPB7T%2BXKtwDT4qvb%2FDEePPWdFuHLaETsCZ%2Bj8XG1HmMNyTPcjYa8aNgTChzaYxnoFuByRwHOn79ZOKeTRqGns%2FZ8oSvhlA525wplKl4wrpa5Iu60YhJ%2BLtsVl%2BXmzt8STicdR%2FiGwquC1PiqIdobMtvhQsOHBAsVZkagwh1P1zU6%2FKObZpmKUeXsly3AIVq%2FaBgJGRr1QOG4w0WtUStwOkjOzKyfA0G811aOEUcw4QeSoV%2Fepr%2Fl5apb%2BCeBViDgBd5g8k4Xu9CNa%2FnMOOSpUrXv3Gdl%2BoFvbHXuhxopSL4c4Ki9%2BUEWC%2B7zw2KZjoXbDwdG0wi6hQlf20akSscn7d8c%2FLkarNaBO3XuQYFIWSm%2BB6Ko64JtJDioA%2BdvtKbzqQ%2FDnw6gjw29kENMfoFGchRG44YpHSt5dN%2Foo7DpUo51kTfBhhrash91F5uOhfqDDK6YlqOYyDV%2FamvOGCcyQh1n4PfcQnceKNcfNaNfqTEKOP6yk2MAZJwOWlcagdw8J32cKKzNGAGlnxIB5FDC%2BKe%2FR7IBqB4rjVIWEPBsTgsEtRjjrtcl%2F%2FARull0%2FJPO2gBIEHI2H%2FzorLKW%2F1VM98TNZw%2F80NZnMVbD9zMnywIWVgEhN0Ozn6B%2BykfonsXkR%2FLsgow0fLmwQY6pgGeoOIA1AR5uG4lk1u6f1FEP0cSTGw87WlgXLRqCDenp3I64RatyQk5rJ79MUzK7xXBr0yeW9vlxduLCiibmQa%2BViG3O%2F%2BxVyJhexJQZn6nczmt5W7pn5vGSXAi1wpz2kE%2FUrt0iQb%2Bn0AHUkS%2F%2BHI%2BHCWrcYcDViYSZNJpmM3fiSalwqF5x0r3%2Bfg6%2Fz9OYEW8LEio7etT0aGoKFmB29VByMiC3%2BRX&X-Amz-Signature=d7f69a01156781d6d6f00d31ba78f6cd75112abd746264ebe592f23269acad73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
