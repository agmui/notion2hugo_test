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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFNAYSW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC7Hu9CsM2tS4N21khgAK6jeGnnl5bFbaPxe5cp21ZLdAIgQTbHL42N4MeoLE1sm7GTqsdWMJXOs%2FfJQ0XksxhjAd8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHpIy7oK07PzkgIaCrcA0Wki8ixKdS3Az185myEHEZDsIpv793Fd3CxuQudgaN8R8ZAXaGI602AMCHZysor4ti0MaGQXLEA1H53e07vNdyWhhwIkLCwhYyeI%2FCCB7aFV2ppVBFDiXVCWZWnDwhHM03q6uipgT%2Bqz7XNI%2FkBKR9XuBgBFqTO0gPsFRQEmvQW9bhUQST0wuAmeJc2FP7fu%2BepkWiytNH3IE4h8ZMExq4b6u8GzLsedXRXjQ31TAp5COyVJ774pMZ8GHiht7SiS%2FiwbOQGc%2BpQYFp5mw3gfqVr%2BDiTkjnESs%2B9W8KmCHw6v21KH88gNPzRE%2Fgcu%2F3EMaYcCYGUFwH%2FkdxIrfT9HSRX5cRTR48sXxTkuap5eYp%2F4qru8Ha10VKuyoANizK7Tn6WsA2JRBdZbv4KbItUy2XidnJ1zTj4MyxguXljFKR6jZmZmml1DfYHubGtZ%2FpsEJnCMXhKNWPY7EhLvtQKFkafR1KssAF96B%2BRJM07Ah2XgnAmkoZMBXlKo78djt322RhC2uYDZJ0GiwPuCfgqY04i2qYnRCrhPt0iFUivLbrvar9cvPhYJOcLRLi0AC0Ge6BtQO4nT9WowMdTMlU1P504ZGUJ97ptG8WAx9WsIFV18rp6cmJoNLHCvL31MNP3isEGOqUBVB8phMKW13t%2BI9sDZUc4ektOyMsSttphuk1AnLQQLKPc5VGsnlLHqvyBzLTQVWMZIVGa1rq08YbHW2Rx8V4mL3Yw%2B16s62HbyIYB1IAA0VaBWEl0b8n%2BOfKV6TE3eppl7EIrPDeYyXo2BoF91KQLGzHbELOJ7Oj8bzCbCwohvWhMRvnZ%2B%2FHRr%2Bqy3Ndd8xJ9u7RBNT8VYFYDIYbHX%2BxN162Fg1du&X-Amz-Signature=885321aa6dd470d1987cf0cbe19e5fc301a3a68d539173d19498658c428152be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
