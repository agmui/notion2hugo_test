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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRYAQTN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4tYsHKKbw1lKDxz%2FcV8eqrESOFmrxuKNqyG%2BnGqmqaAiAfTo7r5bZhguFoI7tm6gRvEcQi3uYmp3Ny0At3Zoa2ISr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM7kJTBRsUIaXqdonpKtwDRyMc%2BHN0jq6XWDn32YBjxjHP4Dp%2FSyBjRVHrX%2B5E9%2F1EwVOpVbYyrEEkZFK7yWNl4tNwDeltNQ8nW7JT50t%2BNmD%2FkMRR6XXrOeKYoNy5oLyhYj%2F%2BWpC6c4b2vJk4skAYiqin%2BN3BkAbzlwMvvHdTlkdBnNeXusfpJoVS8iy7rVYJm2gjIIPIHdrYXCokxpRdcVFeFFRBzhYvUpmOpfI%2B3ZnIQNBZCYrHZGHuT6bMUokGeXQAicsU4%2FDOUpb271QESTSKwoAbFEyVWL1PwcGxE9YrwZDaRXJLJpklEshV9puLiZ7yapr16whq4U%2F3nDnRlGxJzwplWgrd2mMns7EsDLGIytYmilZpDuw7Y%2F6KLqCoBbGBsKaJawV%2BiSgVyHQEUjC3PDZXkEMtrn%2FmJZWN9tIAsFE%2FF75Cg2XFVox6I9gL4rbqZsDYnyvruHddwChpXy9QDpq2vRFMy1AGmSoZqTEJDHylQtyYwWPxWZeJHXFbg94LoXr9KpTZ8TJqYRU%2BM2W%2FqXegrXonwadeuR1dGI6uWWVz8a2dCTUL5mFuGhwTPvXeDJ0UQDFTjgNveUVpuhMo%2F5%2Fs5fN1uRf1olr3z6BSaopJgU6qjFqyxZ3Ex2%2FwGtqFpBRoToyu3zow7rDmwAY6pgGLdri0Ke9%2FhZbQvpRvNcwr9a%2FzEBsMmhFIkLl2ORc3CpSDrXwKEjD1HU%2BI47iJbxwTuQV2M%2F4%2FeaYdgWkHhAFwevjoVLda3x2rl6cAB92Ikhe9FhT9W8RtNQCiDYs2AHCZSby9cumJSyOsQjOMB7NmgcqPt2ZTHqL0v1bOJKsbQq%2BdKiqKQk2o05Ab9nmSuIBV0trZJI4pgEVIcNwk1aZyr2s7IZyN&X-Amz-Signature=6825a86a8f24f7d6ee87872b53e7ac8c9f0bcd2a5ade266fb45ffa7a92cd73c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
