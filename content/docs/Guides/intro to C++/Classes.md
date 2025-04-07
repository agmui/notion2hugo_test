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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPMV3KJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVXDamTRbXga7nAUAPcdhOqh1rkeEkjpDSUOawaP7IfAIgJ%2Ba8f%2FmHJlAtpH5SfXtnGJwIvVgekpCkYCl2XzwcmaUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJyvEPdEGMwWOSFChyrcA7ea%2BH4szwOkz6Vtf%2BWjVpiZHV%2BxQOuWWiF2GeAu5A3ex7HXHuF2JjvSsE83Rvno%2BeuXzIJTT2LwTzUCmZaw1UMWy3o1tiqsc85UpHgRIIj%2FUqCbAaVsp6q36mIF74X9r8aSChAaSADFpimBdwmHTW2%2F%2Fvny%2BVqxyJyENfmkzMBJo1hHo2nFIr%2FFxJu0Tyw4I0KPbP1yQHbbvTgzbNOTkSi9MZ3tDk%2FYWWQObfy%2B97fy3tHt0%2FnIvvcOFPrGVZTiGeNl6XHXtTOmePyn6di7cuq7w%2F%2BbAzWXzsLjVdZjx2LwgUoRWfTOfmoE1p7Saxas2L1e2Q01KqVyk23DVt0ATRtldlJ79JMgKVNH38bmg5ro3l1dYMnXCOIzPL5FZ7Qxv6KwzB%2FtdXenE8%2BweDLVhCI5XPzJW9luDiBoKIXrADvFgQnXV52yn5feOhdF2qjSQpTWU7kFuSkaUXDzz01p6eSHkb6U1EzIunxE8NeD%2FAdm8b1mj1tz44smLJaNEpB37eDDOtLKUKta5JVag%2BS8ho15z%2FUGbwfnqWI70SgmllRffbELF59JhGwttGm8M8AYknjZjCRcFga2CV7R8lKXTTHYBNz5%2FFML6OHXm1Ol%2FgDmaQLmZqY4soR8B9%2B6MPTrz78GOqUBQSRV9NR0By7Gm9UNe2VqCEJg0c2GqolGblZEVrCAuvvlQwVUA9b%2F0eLbFCBvrMUsAnN7HJtUuR6etIkU4h9Tt6HW41CmUPnOcXCIGuDxwEDRpAaT0dcYnuXOaTW1S%2BDJET8OrJV2cwJp3xOGmtmUBqGd6oKro5IQgvhodat8d2Y6SmP0Uk4U1dL4NcWj%2F9qcuGViHEgmkG4roLWJJjhOVNKjE%2FpK&X-Amz-Signature=ac7fdb0fd989fd7e1023bba360430f2c1f86bd1b65e2fa779e5dada9ca808a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
