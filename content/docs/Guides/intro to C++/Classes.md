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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GUAWXP4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIAhL4Ftz7RZyCr3pOvf29Z7uNF%2Fy1saYeTdVnzVY%2FVB1AiBX6cjoYLzWUP1MOVOIN2AKcqjtYjNFYF36tIa0OYcPnSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs8N2lfG28y3aRMTgKtwD4P%2Be8%2FJ9i7X6fY5f3tKALEyVys3l9Ffz0Zt8%2FAHdxzidWAf8GqZLi3EsQSeS5FEgI6dJm9ZUyLP1ah5V09X%2B8fJkYQ%2FImRmfh%2FR0tvana5a1tZXVYn1eUsckkViOgM4BNZJXNU9wULtt6m5xOxBVhaqpXVihd%2BqOfgGn6uL9lAppGaDSwNfBTBxmnieubmVUQ9eYssvzufDC668OrWmXPopN3ac32Au1f8ZQU%2FjBJ07wz5LiXNrm1nFZDApeBwNvfv6FyDt7%2FndnKik7e1Vtlp%2FnDbQzlMQglaLKsayNwAFGH2p03wl0uX%2FEHnen5M3QE2LfeDLCs4sls5KOHK9riGd1OOVtc%2F1KH6i6Bdy02e7DmZ%2FAcgjcGiJB%2B6j%2Bi%2FfHw6PFRvu%2B89JOsajL4Umq%2BknWTnOJIg37aSdeTPbEf9xwPPCLPshEZo7X54H9j%2F5jkreYV6%2Bbuc%2F%2BmSu1bliVX8uVOxk4PWLI9xnUMuv8SZrj%2B0tz0KI19F400HtENK0cgLDED61DoCPcTr%2BCenbopo65q65U8yWPVPbhfI7y%2Fbi4YufTGETNqidG8u35xUxPykV%2F4tNjLlyl8OV37NGE8zlsruSucf5aCSKen1SDUHnR3NXN6gmfy3TjwTgwmMu8vgY6pgFDgqlKul3DZhQNxBXKWf%2FAwiMA4YbB%2BmQAHtvjNP8PFXF7Md4LWaj2WogenPTWF67BCKTJ%2BLpPRCyP2Uvlpg88SjoFrWhPtr5WtyWZ1mISh7Z0ARwoabhRcevE37O%2BaTg5xL4r7Vj%2FTzj1LrNKMlwjRWus2QLUKvUxx325BebDaNrMIzzsfvO7MPxGi5Oa%2BH3V4LbVHZ9G7cNVAjtMvaR3k1Hu0epm&X-Amz-Signature=85a828201a0a10d5c0842eb96701644bad5ea9bda9e6de8deaed6b6c3e2a4208&X-Amz-SignedHeaders=host&x-id=GetObject)

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
