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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX2N65GO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzEWejuksHsaf%2FH%2F4gJf3%2Bi0muJMrAYgu3YBA8BVpDVAiEAul4ime%2BFVaRyaJMR7cxkdiP%2BnM8Br4i3sgSr%2FcqArpIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9LVGpo%2Fb85k6zy%2BSrcA3iWIM9YIMgrvRU2kAOQpKLBvmBBcWCUyHAPJAFTsdTTelYxAb5yEAj9pDCHaSugUB0QKfY6hmohe2P%2FGnQy3fzTKiNc71XO2Lk9x4rtnbgI54AYShbXZJbVg6I0LBXHaUORxDNum4SDBqfRMMn1W%2Bk84nab%2FMx16b5BKzmqPIlArluGuEKanvMjdB01VzjllINW3qiHWwSaXv1mnt%2FcVAwAer7LOYhMb3MU2ibHTRrSg9UcerHxCnp5LQAynfzw40%2BQwTJpkxHCaLEG%2Fn517xDtDqACFRq7sVJcfS9tvFQvGUY%2FZNnH2eWpGExCtzbG8WkAwoepXE2WmsojvPZCi8Ztgk20FwkidUXMPL829XGyeSzh2ZeXjC8x5HvNDjmaEJskXhylMJds5kXhCdPP%2B53frzxHDITwdTn5EDNYYH3AkGu0zgti3zZma2CrTt%2FKzWb6%2Frn9Alvf8h9hS1z%2FASNnBTzWTF%2B%2BYNWCPQQO5eLK8x0gIqT1SGxoN1XB9yyrg2FmWbDo7xQFs%2FRNp8ut9Hr5t%2BNOLS1gZsTRcdKj05rC1JPTQPcEilHjTj4YPVaL2g%2FgcXU4pDQTbZao9eu7XPtIYM90dUtzYfuriYuz0TiRv8wAUQWxUN%2FCqBsiMKbmnr4GOqUBHCrdfugglzfFKB6WVmCe%2BY18HDlYd5B6Fo5SCTKt3%2Fi2pVjtCFGar2OGcxbwS4KYBzWnDHCoYGiejgHKYo%2BGD6MpOIJJ4922a5v%2BD4mM2xGxyqJ5qsSyRBYXBmoE%2FWf9jwOFindR69VwT93lmdyZmIc1DTuZYecevzkLOt54IXPY3ezAH9CF7KyPxTTjDX%2FVM2MOC5P1igek3rtGPpqMc%2FUQs771&X-Amz-Signature=b614ece860defb28b4dca6cf01698ce918a8626874d446c7c4c91c84da4f6410&X-Amz-SignedHeaders=host&x-id=GetObject)

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
