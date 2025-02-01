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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOE4JJU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGaitqwjsyjQ2TZPHn%2BnfT4BoQUSS5pd8QFXgWUQdE2AiEA8g279VB9liU2%2FEndjZ8AQPpZuEgSMdW0r0Sl4HmbCe4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBkprWQMiQ1ewF1lSrcA18ukHJk8mr0txFKfaaQMacZfu7imY1mIcZCfIZu9m0uTKME5KvdImbF1u6D%2FnTO%2FoT%2FuU4qFPyy48RXWhHX4I9rUAhzURW5NpHzt5oH379RENyXKfc6qnv2RRTqHufHsz6pAiJESvsbhNmUd8S9i8sAA%2FeGK45xTU9kb9%2FYOLc4YDh2%2FVWiUjWlCYB6iEe0HnYERrWSuW0HgeOoNgOAeiG5hyiXzzXlluQ%2Fm0RSgpwkArQvosPPkOpni9ujA1Mu1IoqyGWvzs0gwQ2ZP6D%2BMeeyVEFPft8lUK%2BqQp5j2IcPFHe3RxNJWtHowVDeiX7xewmw92F3t1OGXVU5j5cL3vOFLAswwpM11KvW7Fjjn85KORyTvHAWvfxumwdJkK0UjNuaDtL%2B633OUjUVO7vpbTEG%2FEbZ192Z8EF%2BHItWQSotyigBifaJTNsx1KAqTlpvf8AbKoVoQBoZXWcb96hSiHrQ%2BtdnY8ZW24dImRnJdstWRvxnacqkdYEkNA%2BU7sNgOoF8Bv4wqZSFhXHIidNXBtz5aC%2FFU%2BnP03p8J4gpPQQKDT9NF0E3iQTnYb0uIUA4%2FxHwAavN4CQikTwTXX9i4ZxtATWZI%2FNR3Gm4k2rptli1thA3bkt2WpRog2OgMNjE%2BLwGOqUBzuWoOlNW4TEKt7PuezJn4TgEpe%2BbxhcRYzcmZMLVaD37xzujXmFkHzkqFYM9vtn8X%2B%2BLJvOb1824KEVGQqVdnoeofSh2aFQUvTc2UV1uyTAHNEGGDtrXW5qQuzdoTRTetIjNMVn8lkLRm%2BxcCoXY5RImATTwbWIALPfxGo07r614aGXlqyyTnogY5F0dflcrur4Dz1BIIh8M7MAIFoa%2Bt3yW8WjS&X-Amz-Signature=e7a689df3a4f39c8c8aba19709da44d30e8d66c2f7e5774c386adf66a3fa372a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
