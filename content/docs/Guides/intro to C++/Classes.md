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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZJNQUQ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDokE0Zj3W%2BftTeQn8VlgDi%2BPBZAP8md9fbrP7XVKnrBQIhAM2xWqusH2dRZLB37fu8K7vKJhXtMfA5fg%2BfR5UyRGJuKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIZbD%2Fg7svWGylYiEq3APbf5ue3su7yYdoXf%2B3uk%2FI713m12jhV3l78z4So%2B13Uwwlh%2BBHsdK%2FkMqJ%2Fh%2BJlbA%2BLcXwd%2B1MMROwGehKVh52RD7F0NvbPQS%2BwyVqx01ugkXdK07hcT0e0FE9PHhj4qywo9ixtUCEop07%2FFq8KPNNzfMexv%2Bv5J3Q7sklI8g%2BgZLGnU%2FuuPENqN3WOpI2vIcdfBIMyl5khBgnyuIq8I9TDQLAj2w4MAr%2FwJka6IwwoEcqz43rR%2FFDNWeRT72GNzvhAHq9iCjaymPgnHUKrk%2BUJAyt1zpalNDHgHnpkjcxLEPqo9UXkcUUUlvL6H%2FJKa850QD6RsphTL3AXcx2eqMXlySFvvW1Am%2FFzK4FTKqXcuoasL896rOoAnRimsnHSgNwo3VDQJ7zzObyynpL5GfaDz%2B9P%2F3L02324T%2FW3QJsKA4FLD7LTXSD1ZRdovFCoRf7v2%2Bpi1jsYp5Kqsjq6nFYHbCACy8k%2B6vcmSScC9cKzHka%2FWOk5ONdPwQtEZVeBlfxYTr36LG4X3UFMOK%2Btiytu3fB10QzlpiXYMLV8yIRaYsKu7JpUSZeachz7UIer5IYrso5Pp1sDOwEqMa96yS%2BE2tx9DTKH%2BYljporyhRQmAp5agLRINeR39pjYTC6msHABjqkAXpFy8ni3h9ZZkRHRLg9rYB1Fbo8cWiSTSLgI%2FunzeF%2BrK%2F9l7FeroHfAAihFA9ZYdZJ6ea%2F%2FGSR1xO8PH%2FeFJEmiSJMLGzoafiVcF47z6%2BEw%2FYvUBF6ge6aYj5QoP7dVRlCH5%2F90ChWMygq8nYTdpqgWfNQSZPfANteYYE4Q28PcLeGocuzpH8GiBZ60ummuvkJRZeeXbrEeDLAGNUejZ1JXT0c&X-Amz-Signature=9bd78ddec4921bd7d265c349f4c91e535b572ea560c2d9228eac81ed030c5bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
