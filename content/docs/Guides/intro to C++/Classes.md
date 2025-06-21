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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P65EYUT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJuIw3QorfS0Qv9hFpiH8vInaGNqzdBKHGREfUI3iXiwIgMNjUpSaWUD7GhI%2B9P6SoquFeTlfchMGvn2VknVQrc%2FcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnZcvs1VR4ufRVYhircA9o4pK%2BOTPCqU08u3J7tp5f9skUWjEEJzPaDOpQcp4fBUQPlR0MSIz9rASBaOZBgUgXbLyM4f6FCBeVnKp1hWKY%2BO7f2neRthHDk3gqk4LWWzygzxfQ%2FptfOhPKJ14qsmOe%2FUNTVZQd7M9VNbbB2QvlUkxrPSTJG1hIKW%2Fr9eD0gA%2BDBnFouvSVm2mC9jyoNySt6DZTaXm0gxV91WK0WhF2u3dCLseRkpgQX9MygD7FPJo6gt8eSSfv1ub23BZRLdl5lS0M5D3y%2BcsEMci9bQrPZDPzZhmfyFlP6Qnzd4%2FF11EhPuJOd84VjdkfIYrZCwu0s4QtsVW3rf4rjKb6OU9r3RzcEOxv7fmnwzBb3nV%2BXOwCMuC89mB8S3U9yRBg2p4vu%2F74PFAGthuM4NUw%2BqVHNvyXgn0I%2F5XRpILS7O7ufqFPRkBqtwaQyd2oOUJtud%2Bw49K5d8IVP3Wd632w5DeLEXMk8jLsMzn8QExucpjs169eIZm36VGGSp6pW7TCmwXaNinCuS3IbYAGwRcbnVZuHL5oZ7MPqoQRFDCYMhasgfaE0T%2FRs%2F0fplTLBDa203MfVwI19%2FTm3IbLPmYp4fpfAx4HnmbVcd4%2BTFMun7VQurs9CLCcYumEcHQOaMLbV2cIGOqUB%2FQtQl%2Bsg3Z7icELmOm7Svb8aOQ6o9jTGFUs%2F50tWo%2FWk2FKUgXMji1fd72ifBqEnuHoSTRyce%2BMUXHmXYtZY1x9Ex3Hvh%2F8rz8dkJz1olRAPHYqTvrHF1hu9nhgCyKPKvMhmWKOAsTd4vI%2FA59hioGA2xndg78AwtGMgAwWYyO8996ApSZ6i50JnzQVxOq%2B9EnWFQfltNLlo0bcz7JyYGecjjF6G&X-Amz-Signature=4ee8ed44b5aef119fe8e05d575f05be65be9d62a6487b1d3bb27ab9b19554a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
