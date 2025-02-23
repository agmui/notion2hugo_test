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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJYNPL6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESQ5pIFXHNE4CeR7IC86YvLM%2BnbwPIm6Sj3GTyWHHXxAiB1dRZ0hz5n7MD%2Fn7F%2F6DwUVqv9vJUMb2X1vxbpnVfeYir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMr7qbJe87trjnxnFSKtwDQMasR3rA9b9oeizk9VZu%2B7%2B0I4MtD64Zo4s%2FcursBOGZKYFRhiWpC8JnXzbYyvev3qN%2FpM0Paq5egGcL96MAGnh975xj1II34ShXSnMjtrDCSgdqsZr49wmL1ihYhnKh6oF%2FrMYE4%2FF76xFSwifI1nVu9YWA611XLbV2YYwtzi%2BvOsRu%2F0eJiXtOVGgr5%2BGwmqQawN9RwsI4N2AYkpQZdHA0e%2FIx31%2Bw038msMD3Z1yjJ6C8bqVGIpxEYHVqL5FdLD%2BTwCJLfVs5deieH6Wj82CMDMt5dpzH9Xr2cwjNmhyKqgjIMgHWWeoMyW4EFAY3BULbJeY9%2Bf3t%2BtXoOpSN36NVvxrZNT652xpYiNh44EldSEtCghhdZqCw1rpgeUps5RZpuLwsnGTNSh3yhi5xcR3JrhBmN0kGO%2B5Pw%2FdMeIAMfr7URr9iyTbZvmrQkdeEF82Ti0us5bz2q1Ld4CzzyXr9Wb2g0xrNnSIUbTPdBgy0vMY0xhN%2Fw54LvEecx71b793ozzWG02qktwQ9TTHq8JTqKb808q4QrDYRJYbQWq5nIf%2FJluzElaQpK39vipOV8TEJ%2FpKwe7xR3OFbwjNp1dv8lTbFw9Ml57i0uX6vs35ECvn6dXZu3axUVswwnujrvQY6pgFBpPG71aRj9ylvT%2FJfI71HmKm1YxGxuSHLQ3qf7DK17l4prRWgFRni4olqVwzH5qZ6IogV%2F%2Ffr3aErZTPD53JnOaK9vWIFiQNXcIYZTew8M%2BUzwwonmf8zTz5EcER6OZiCQLS%2F%2Fk3DmP%2BUoUNEk3KFxTFeNwVR0Ly3N6YgooV06ga8fEJQpeqYsoNqL7K%2FHDUfrVFv61RVYbdt%2FU05R61TmpTu3Qg9&X-Amz-Signature=700f9a3d5f59d9f5766830992031453f72ad6950384c128f80f903a5ddf491a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
