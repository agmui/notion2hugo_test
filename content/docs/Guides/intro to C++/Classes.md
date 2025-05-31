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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROF3RYK5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw4UdcZyGa%2FBFxF9JtY3OgxnqQl8uyLm8Dv1E81Pv89AiEA0XVpQEgU4HkdJYxliyD%2BR8gsnXPbYuYxUmXvmD%2FA1NkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7YEvWsHLaxewcJ5SrcA%2Bz30y5NNygJXuJv9MIqxS37aewPFuhM77dt4GErepDuG2%2B%2B67jxerGKmOB8H6I%2FPPaK80hgfjO%2B1Oe6aEGACjbrZoAG7bhUMx91Uz3eVNfWbDcBqKRpm4X2NVV2H1spYbRf7%2B5FwKUgWEmloyFSNHD3g351qYJiBXNBC0atCCbpZgwsvQyJNs2ORGQkJRxb1vl%2FdVPyFV3S7b6W3i1%2BC0wBhYyYTjfPPIj2EAndiqh7piqyudLGacLFlT09hV7TVSOk2Karw%2BA05TJozT3AdXTpkKS70HfivsAa7Tv6tkhnm2PIijbTwkwA%2FmePVZ8gdc5yHGVONOcog5Grl1yFFipIs01de6U4HByTueAVY7Xm6SDg6V84GhbBbh4yq1rdXH1DYIqbIZ7c4lPMxsLU%2BolIy9PdfWgn%2F7%2BM13jrMzBdi6ZCwAyEIW7mVbyS5TfzhKvcL4nWdcIa5Vpfc2DWPyZquFlxIJ%2BvcC2lEs8JoSSAkoaWP%2FlMd88S8jCM7fd5QqONXPATUf2Vn%2Bti%2BiX0EB4yN6gPm4JgXou28khmUUSqGwJdpi93aT3LHsRXXWFTvNbeXVgkVwVQGsg1Hy1a%2FIG8b%2Bzamb0lSE%2BFQJmjvUP7nurlUVsX5FV4rsbLMOOD7cEGOqUBqHqHGkxmT7tPZn0zbulOx53Y2HYL9yGfvNgb1KSRV3P3zXFPNl4L94VFYEXnxYRYKsnE1m3fe7WiOxzbBmOGimAQ5%2FfuljXUVDi06ZD3D5nfY%2Fvrq%2BNMgTNVuaslE7aM595QEzTbaMh%2FyllzlIw0dWcvsq4NnWfQKm6%2B158Xu6u2vedrjjt2aH7HSL4N5HmDORWhoBNZvxLfGWyFWp2niVQf8tlO&X-Amz-Signature=99f5187307bcedb863349942266c16dc9c4265894b76ff1b0bda04e4041390fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
