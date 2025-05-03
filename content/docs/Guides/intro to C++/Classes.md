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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHSL55V%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCafl%2BX0bpexBKzzI0qal6OMYtrJ8YsxEqhMPO7b6mbewIhAJVGNHwGvROLwCVPJz1zzQHIQoNTFQEt1%2B5Cm9IPxwslKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa8HIpIpngjf8J%2FLwq3AO1UZD77ktCqWkUID3j15L9kVcgPZ6mVOUod7UYY6Jqc6LxnupoliP6BzPzSG6AKFRQXz9KuquVzW0mbBIzby8gTsn97kyT8LrJQvSOJVdMlDBkTIhRqJZamsOFovvWe6Joi2K5eFO82%2B%2B1m7t6UmbHMZs1JeN4HoqsBf3Q3mWlz32qBt9iYnb7DhVBDq352T4pYokAT7QqiKdzaV%2FwGLwdzyOWZka3QBr8COjzJWNRSJ83YSEq6f49iuR3HkYWvNIXi9af0wZVFxrwTuiXrxBdFPKY2IOYk0SCSQDmmj6T2FHaMys1zzBH1CoR3jYS9aA0pEOlpU%2BmvlCiFiWqIFR%2BVf0zcp0LETCH8dvaxLUIqAPiTORNXlhD98FERnEFBHXA4oUsaCVm47jYZrxKincF%2BlS4Eem5bCo8aatRgYocVQ91NQnr68uMt1x1VRJ5k3HdYfPmVkU42X6O98csWbCfCi9trRxDJDTIIf0ro0jlmkuOugEaQ2pnPJLSnLjf8LXpW4rPq4iVu5gqAGE4M%2BNdp97RyQTt%2BRQNXPo8XqrgkEmaXC%2BVejUS866d%2FGwHKoit8nIT1lvMrKsQwGJYZ%2Bsxk%2BW66OVDZiv31BirKXSFmqqCgs2TVdFSgrYFXTCH59jABjqkAWFji2w0gnx1%2F2rwR7t3VzTSP7PqcwRRlWq5SicFLdKMhP0E9BcVg5R0CiTi0fdURHp%2Fg447mXkpNl1erOFfNIpo7tQQ%2BPcOHyaSIl3MpDl7ic2MXC9C9nxisO5gO%2F8ljgEEtFq74nLJb%2FmuCl9tNVClNWNLvO5XfGn9HCptj%2BoOmVtNSBtHRc0G5SI4wrdPz%2FrG85147oGqGt0qtv6wrA1gGx7W&X-Amz-Signature=e0f97b47a219331d34ecd4f42606bc2f5c6e3fb9137c14e45ea5a6fefc83fe84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
