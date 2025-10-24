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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPWWZ6Y%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC9Am66M4u00%2F8VbtiO5Ie%2FrexlDffUNDDKGFylKEiGwIgJa0ukgQuYF52rZDPJemKw5E6bK%2FA3p5KDtAjdJHHKCgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIQtQQMucnH20VmkiSrcA6IOAzxLphZURN23TFhBpTS0WUPzrAUIz3LcqdXcBRSCPQl%2BqQvIj8RAdtUlaYeOH2jbwWosDkIbufTCMhzLpHWj6pd3rhGSu8RsPoj4PkQ%2BrsYTHOLQrcXA61svZeUG7hlnyBSRDMRKwvJkuhCpXhldv4IjcGo%2F%2BHvnxxvGc2r2YIPldihOTRPhAZhntpm0C7w%2B7CFW%2BuXBzDo%2BEq3xKGKF73s8cfXxhQzlmGYlN%2BVam2CMWugNYT%2BB6K2L8fxsNrszIGlxhJKy0rgfgqEXGNvhgA8J10krdjJA%2B%2FjIQ9hNzkJvYvGgVo5fTrJGHhHy4KlwGyoGrBIxAYvAQmZVPsgez%2BIiMtbSTkg6uhP%2FkkIKm%2BISg99npCp8IHJvyZRS7gS8ZoK5hiNegjh4XfUpSKh5opFVNbbvNQsYEY%2BjVTqde2AlQu871JMC%2FgtI%2F3GWb6RTsXAyfgP8uCDWPZqdj2mRUJGMFZA2STBrGsAT36bVsZKu3jkcMr7trHIySvzPuUF2ExV8wmpWF%2BxvtQYjycCzKAZfCIvNrdPINjKIcFo%2F0cv7aLFIxMJPSDrF02eeQhv%2FXTs5k5IlRTFQuMW4cvWI%2BWOXhR37GWqEcfi9743LzK7ROPq%2FdctBBIq1MMGh68cGOqUButuo26vnYFsLL6BazQMmg8xy%2Fx%2BHd3HSZn3ZSI%2B%2FIYKq7ktMEBYXBx%2FvqXesZXwhElXEJZS6FWqh%2F20eJisrCu5X3N03apZiJmyTsLyhHNEZ0El3mh13OiJo%2FjBv1H0EXb1S0UQV2QM70crtuFV1%2BF%2B4yzn6Q17ml%2BOaY3vm%2BeDyR2%2BjmIrmsLEQdcoTFwCtSqLTY2UweUhDDTYQQZIfCTi7vmxg&X-Amz-Signature=825c667d64b66bab5441c721f893346f3eef46c7171c038fbbf17bdcc7b550c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
