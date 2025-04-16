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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5J442U%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdkk8A0cOwmycGmonZzrAcfeKo23rsDdRrkDCdf2c0EAiAVysjWx5IRP4IsZhsHAodcznuM0lKP14o6zVEweTdBhir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMNv2P0ahOOerhJEGoKtwDoB%2BTvsUvKNpe4ZLbt9nW96j8P2e69tYVhM09KSNAB0UMIcIyHOYhDpgSStmaUoXdqvYiL56h5rLXMm%2BZmj0PJYv%2FOtEyc%2FQ5Mup5nsX3Tt7%2Fg6FjPhvQ5VuGLt4m2q064Hi213mNjmd96JHvQKHmKeKJ30LsmpJ6AScMGIfY50MAIgzRnXGQbu9fbCzS5LV1QquBLPMGt2eIVZY8Rvrx9TLmR%2BNTzV4VC6fv0Tzh3X%2BBrbtpFV%2B40XcJzgVyDcByQojOUBL90fH2SU1n2kNIGruJLeCQ%2F1nJ8CZRIFJYGAMb2BkpyFCKouRuB6OCLp%2BZUROg%2BUyPjz9Pb6uv%2Bv8BWFvttYrI5NTMw2ECljDJTxkE3m4UdL2VipuUDytaCyN%2FVb4n0ZZpTsMQz3%2BdDMrJSk4XHQkF9bj018pQEhgd%2FilUjRJLIH%2BlHKifDp5BJxSBLlZTP2niPdmrJAVESMJ4aarf3X5u9fBGSGsvMVxYnSDQWkyk54iWXWHeRAXhf0pOoUXFxCy4sZfu79ue9gPyqi%2Boa9np7Ec0w3keJ8gkW1ArvWBbmeXUBUXEDUMDIac5rENWNSNghYtS%2F5FxHc13vFgUAvpRnut4pCxUXhFt2NJmn0g8XuaCXbkxGggw9sX%2BvwY6pgHItenANEx4U5x8%2Beu3dx8MEAkmZti1zFRnH7SUvgvI7%2BYDHFixfvEcBBbOa97clP4fGMvfz6zzhhjHwveAUNprzFjJUK3GuwmwrNCDO5RtjYmdu7%2FvB%2F4EB7Q%2FslIoCBh1tE6XnnJ0r0rDblPK8bG324waOclRmRmkbCUpDZHDBIHKSWJoSoyOs6sdQLAw86o3MDB569B8ylLfL9k0NxDL73XNWUTR&X-Amz-Signature=195e78e4baf67a2a4d4a38db30b42de65716d1225252292acfee2423c2b35c31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
