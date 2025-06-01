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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X527AKF3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQD5AFO5zx17thTeZQoCu%2FsJQ9Sjce%2BBxUuPfn%2Fh8Ld2mAIgPQoSTxoa6dd5E80Mp%2Fl7ImVfWUAirz290oQNuax8icwqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrdYlwSl0yGBtdqvircA2%2B1thDXl%2FZUOm0QMh%2FioFp0BPCDW4Nqum3AGvzxgEgMNNb%2FhUz8zNgPa%2FAB3vqFeS%2Fl%2Fj88R%2Bww%2FoIYaVrLmJMRym5PizmLhzaxKO8nH4MYiBDj5f9tdCuSFQaps7SQ17uaE%2FTsMvQoDMShrXsoVYID%2BnsY3hw97GAwC0xio%2BE5nRRMfVNv90sJxhom1%2BXmfEqJWzhyFpRimSHcNYZY2SXrXr7%2BsYOA5mEqzmtKEcw2mSX5HVEJEsIEi1qljUPPCzvzHu8t1kkVJNx5bWYiSjb24hTbCqncIE4k9i9kGkSNh4%2B%2BmJifSRovzm0abJE2dfJfYt54B%2B1z7vcHobf%2BkUFA7Zv6UYINP3xHWTeC%2BI8DBmnAJfNN2aHsqHbfAOhKNZgeCiwdipgD3RF4A1Ym%2BbMluE%2FwLtjsuy3b8%2FHCJJWkxmtDccbOJQAQcmEdI3C8kV0fVrcwJ6NRIB4Cl46O%2B1KHEzr2NiXmDq29JlO%2Fta9PzslnPe7AgEjSeZVbr4u6hopEX4aEyIU0H%2BYSowKdYZD%2ByvRryi3sqyYN28cQKGVbhQAmytqQBW6cqpEkFCNgLK0YiFFO9%2BW6f3bYu3%2FtFs2bXZ2ebY98NLfQIthKTUhtxulr9BwQD9CdxIXUMJrQ7sEGOqUBk2SZy%2BdAJ1aIgBtHv66PTJevL1JBBJL9Dr38ncuygH5DJCfRyq8Uiy5WwG0roHJyAKzDjH9%2BKggMVVhuEfzNxK%2BTRgFZip5J2hEL6w23TSB2Vah6zlZY2tgmiLDCQk5E4LyZkcG%2FplK2aDkSJEXxELkpcN0T3zYXRucdlTofa419Ra%2FYjA%2B6rm784MPLCyHH7tqXGq9j03oeXAxR8K9HppvRTheh&X-Amz-Signature=15d63eade328215e83303b7eeecbba8ad7a302b61f8e0b2344d2093559fd259a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
