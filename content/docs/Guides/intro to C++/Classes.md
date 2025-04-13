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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTJUMEVO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBq37uuWQOag2KCM2S9ed%2B96T1%2BM0cEGPMWxB00%2FoP%2FQAiEA%2FvsQI67PRgVrFXdj6jEP6GJYSKeUGCVgmtXT9RUuuIYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7kSVTqLp5%2FGKHJAyrcAxcqbPwne3WfPPGOiMNc1ZgrDDBbjJuVnXhK3uUbIv0gpy0kv7Udl8DOoBb87DGfawj4%2BfysUjO2%2F82AVPCM%2BSPY3PVyaVgQx3kuUv1H8R5Kx1x47mCNzpzLtgj%2FhSU3vQ2%2BZJnkBV2EaNw6W%2FOHtH5bg6ZGGuwdirJlg3GXqMDn%2FwzTrsP5LC0wdC%2FYv%2BrZcAnUN0%2BWJ0cSRa87hlqnP8TawOMhM3TSBAtBTuE%2FgwzeUIGP6RbMl%2B2i3YoqPJHbcS5vpnsoV%2FSC3QFiOdJuHA9g%2FQ1KokDzI8pWZj6hqg8edh5uGb6hw8VqNzsYNNN7LjVTp30pUL3ZW08yn01JsQWS%2FRX2ij%2Bs03sVjhe3PmwRCW%2BNbPhgFqi7WX3VB%2FUwCys%2B2JjnRy4M%2BFKajpG8%2Bq%2BoTrKrram39osyDbHvwjap%2FlRs7I7dDj1sLeB7CcW7EdOGPcCbecrY%2B4Vja9jKgq1bBOBSmWY1MzyCHD%2BBcmo02VUDwHzsPs%2F%2FnkeCbTlgkoSvmNyNUZEZtdY%2BwpkMX8%2FMkMv7kzSTSGLfiurzEa8RUUzdwAP63s0IKsLb93Fg8ypx6%2BMG0376ZqEACU7hjVT7mIXCxMsGgDXqjc2jg1w4pyEPaNXROPBhfvNuMMvh778GOqUBZcWjG5%2Bz1Ha0zZMliDyUc5QcI28PG6jX8xURX%2BLea3GwDUuz4TYRw%2BDa9Nz3jbooPdEtSJM4YX6roBU0i4vYFx1URVl7CoZi3aKYw8oDRxt3iz6mLQc7eD2gsbVcf89sf64OK4GCwLETKqDdheq8XiJ4yPKND8PHd56uDdVE9P4gnNGPa%2FEvfLLS7FTTNoMMCHNBIG2rIpx0OYQY3HvNnXMvx53E&X-Amz-Signature=28e00c641c6eec88f5ec991c1ad538d29651d0860a4f7148c3a4012bb1f17896&X-Amz-SignedHeaders=host&x-id=GetObject)

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
