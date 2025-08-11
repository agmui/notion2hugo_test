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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2GU3RG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVWINDqe7BcTWyVSo2iJIacwqFJHP20AhjfJqfqHT7bAiBJcvj1zqcNWxazQHVwD3vGrQwxfH4GEjHLWRzOXL2pnyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGbiuYGtZT5Yx8NGLKtwDTZtioSM17ouaK4RJDSLzixg6X1Ida9D4KeCEUvxeFN0WxiEsPCe7Sowi1ZkrwiKAadvonjhreWtoubXonxES%2BHxybt886Zd7gjLu0lHIaRzsaXuO1lH9LU89x5k3De2wvLgYCXrm%2F%2BfBuqauO3q%2BUtvekOUQf7IKv4ewFJcN%2F1HUATgqcov4cEoun6e5g4Qn1JxjdgzgwM5b0fC5ZY02YT6n2Fwhn5hpk7oKMfv4m0Yaf4wS6yF0OcyJxG3DJnCokTxNYArMbe4URdv6Rq1reZEPnZdCNASi3OsvT2QcQ0JWhPL7XpwXt4cyX2sBG1t8G4ycEYARBAopMvnWpbxlDvHFLYIZIs%2BGdM7mZ3vOsxTCD2YTVrr1pYX8dtovOM3jXPO3OHzoAdZRzR0ZEZEon2NdUlR0nmoW%2BbGcVA%2FroCQE6z091C2rX2pe5pT7GwV%2Ffa0c01KlcdKHsc2lJs1otMMZh0lowAQRQEUBxCN2zuF3GtJgHtUQpBkl3g7ufd%2BeMQctFcpZuuCsblzVSLmoQoWfgsd4FyDEh9vdTg8kBwZ0APHJdD6XtJt35XDBoLJaUs9ALy8W4bqgTclPPboCHE0YG%2B2NKBcLOV8i0zBXae2dIaQ87rJ4lIplVY8wztfkxAY6pgEwuoQGWZJs7sWwStTElverrN2BG6ymbYH5%2FafA5uOmXFm%2BLIY1lcdiC%2Bt4v%2BaUFmZDsoLpIBZlP5U7I5lPb6YxuTwsvhrZTBEdY0t60rQfnh%2BA1CnEa6ZDupOpXwN7xbIFIFuY%2B0GNEmA8DeFRNeISG2DWr2e%2BB379q%2BAk3jI%2BsMFGTwiU9RHXsbT9YqID%2FLQuxU0%2BqhPj%2BD4BQsnDx6bhFp%2BiL76L&X-Amz-Signature=d0600401db07d583fb9fee8de17c0f88b865427278578fbf71dcf4f02ddbed88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
