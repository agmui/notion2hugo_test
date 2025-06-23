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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUNYOHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDsf6%2F%2FpeNPHetFzivpfaxkA3NnZjvnT%2FkKTiW5awZO1QIgNS%2BEIW247CDPTtX0BDq4oZ4vS4z7tBSsI3JQ46niXIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKy%2FbZGTL%2FZvz9LZCrcA5dabekfw8GYJstzRXkizevKFzb9Mc9ZvlQuCE77TzYRqn2mEHGvOsXteH3ynqqP3v2At2uukNg3t4khHW%2F6QJZBurQgWJjh8FcZe0ycPf4Gm0sBayJC2HRrIrz%2Bn6OxjTJTSsu0mK3G2qqtaoSRbr0PAsjcwJOvZEHotZd2AX9Lq5%2BTU0w2nKJMD0sp6ViKdMr5XeAlT%2BoW5OBV0jo3cwbSG416da5hhNB4fti%2Fb2nmMZyqbXpX9pFG%2BWWRWwSvlxsa0PzTX1KeBpaxne%2BNZZOUBkrgu5tGdUldplHlw2TFssAqmb3Lp8OaSTvv6UgU3iKhDg1xwhrWNafCl4WNxXVPBEDLVZOVT3MXcyvvN5wnc6WFsuJMpBH6%2FHRRuhv27NKGnMQypI9ZNmremCg4mHZ%2BzlLqIZIfVfAU6qX8y6vJ1oIo2I7hG13DxMdvtr%2BFwOCovMLm6TgJJRaYAIeNjYIcBwSeRF6pKqhxL5e21ljbNoo4%2BBqG3bD65zOkTbNUjLCZzWjD2tKvalOZwFuDCPp4sFj0IpmRSAg3l%2FhOw4swjawhrIOPQCtpfmZVkRe1Vy96drffZSHI%2FkZupaEOB9EJ4PIXd21o4JfxUuq1YM6KsAwyHzHWhm6GRvjvMN%2Bn4sIGOqUB7Bt7Mz5WZr4d1eE2TLnc%2B62tuXREuYAFsUSAHcuxftc4OZhk%2Blc2aCuhjNXC0B2DJoVsrsgnvLHp9QDRRpY9R8sE3NJoiRzzoSkTTy5nmJxqcC0Ypd9JxYusk3HSWGn5IrXPY07xTnp3nKOekjR6znqECH%2FPctvOI%2F2uZBctKOCEJNl5rSL%2BKhtIDY7lf39vzoJTwwd6T6wDRoR9GJQDzAIlDI8r&X-Amz-Signature=29155905e1a1f5af1be49ab3fcdb6e6b7d7dfa988d8bbb6983c8a55e107cf1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
