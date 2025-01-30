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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHEAE72%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0amwOE5LbMgGrbU9BcpKIPmxoHHiF9zmoyzm58vQ4iAIgSc8PyCl55LDoQydOH%2FHbfK1VwX2JNBZnbZ%2Fqm3XM1qUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu8C1rCw%2FTi0dWiMCrcA7G%2BxSd9LoA352W8gpx2dJCtsJakL4%2FNol553sGgP3ZUtZFaLUXnqc1YipmVuso2C0XmbqeAca0xbTzX97%2FjcmO43Z%2F54uZUxMv86Zo1tues%2BsNWPS6tZ%2Bh2%2FxIK3isa6kOmxFZZpqhq%2BFbq4Ijv%2FMFIoK68kVb5KFaeP53Z%2BNKXn1TL5EIjHA5TsJcFqBc5iyJy4PBZixn3u5Q3FTWqDO8lZUnjflpGiEEwHGyfal9JM43qrt73lqYcF22OBEJyDbvTXMdoDLcN5XkEoXdFXzs2PDY59C%2Fh5KRyXWayebGFg1DDAvY8me9o5BVRLfSmWfrflaqCNPFZ01uPQKhzYOvYcSNR4cFo%2F3c9%2B0BYzplT1hrFXqqyDc%2Fx7%2B7zJBe544rUPEddjwCo7vtoCClZmuQLZXITyG3V6MchseXOr48h5XBntC3f5VxdM1oJgyGlcOVRkt0pGuzWLF7G9RISmkoL8TZf7FTIs9%2B6dnYC9pwJz%2FO%2Fu0%2BWFTjpzn4vLqAwKMpitAZA7BQilMyvhGppyD50WlHY2mVeFBS%2BXxR%2BCjZLmtSoW821%2BD0Hln65MG1E1xxyaDX1LTBn0CG1AOM%2F8I0JltPvd%2B4volj%2F4CaUeGkDKKGjvgu%2FXpf5Pz6BMNWj7LwGOqUBDCqt9931cWV0rmIyOqk1xHRuWwXTkTQs50PNbd%2BQ1M95WKbwVvz%2F8z%2Fs9iT9Yqh09BKOMs8DpoexGJnhuiobB2GoCSGq4dXZ%2FGjWqB0CQ5cW%2B2cSheBNO3EaqdVgwD%2BP1hkyGSKtKaCU1sE3lgx4zP6%2BhIc8P6BgE7wOIauMQpg8sdm200tV%2FLDeHtm5Ndw1ywI%2FmWJMTIg9gr3leQAtak7si2V6&X-Amz-Signature=0d1172b3561db607fd99c5a49341aab7655708d7cbc08a92c6cf911546261710&X-Amz-SignedHeaders=host&x-id=GetObject)

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
