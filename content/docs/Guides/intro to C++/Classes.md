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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YETSKLYT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn%2BgjRm%2F996iID5D%2Bg6iZLNE5R4GLZEu7xeOICAJV2AAiEAw2vF3%2Fspm1e0mSHqUa0wqhvK4xIx7yeWVIWcOssNE9MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFOCu6HkmC0HR0wyircA7Jr4KmoXECJgPsMjqF8AV4Qy6hnIup2R2DZszdHohnBaPsV1P4ELt7Y4Icqy3ICOE1j1l6W%2FjPa0rwJgNLmmLPwWs932ekWybVnWCxYBV3PbXykWfBk%2FwAMe4%2FiJW93079qm%2BjddsVFOlrnnTqARPT5NYLWkirPu%2BX%2Btg%2Bp2yoCkyWrXz73d8d8XZovI5gauTF9xqo561t%2FFlQx%2BLySd5IgojnzBl1hjSlNmeXTdT1V3tNaHt%2BMPEgjnS%2FGGjYD%2FSW3E%2BhSWU%2FazC9MrYZjNiE4R5vqftUTn4VuNP6k67yy1Ie3RMVd6qDCUSq5y8XP%2BYJXMP75WDTEgpFEjZMt3ZaPlo9jhVkIK4F8t1SPLi51cLkdSy6qFLe6ht9EIsNjd34xXX0HaLWJUwmXhY2pkIpGSN67F1M2Q7Mpisk0H9MPs3XKcM80v5DiaF555W02P%2BDHHlCCBW7UW7GKbBvL087TKmofIhAwfgCdPZFiUMeevj8gtZg%2FQK3j07mTZW2kSr9ufVg3hsknXcU3%2Bf1V8dBph7ClVLh5Wh8pxe%2FP2RyVrKZ%2FK2596SnBHzwzC9kg6XkfTA6CWdqsO73ja0CeE4zeM8R%2B5RYKSHI9R%2FAAa5dQyQ%2FE1Jg6M%2BaUH%2BMtMOq6%2B8AGOqUBaTvt2SsSsNLaSUSsg2WG3lZ2ZMt%2Fpfcu75gJlgzHj%2BxtRP1pLcn%2BwyUEhKBcjDA%2BJ4fhCTpEzLbYdZZXxEswKKJPF59saBbjc%2Bnw38dB39WETEtanXbNTqk2UTZ4Y8OhYmfm36WQlhL1D9xG1O31fdHkczPFpsJhcyQ0y5wXHKAR6FmczXjvS6WP1wQfExUDMx2U6soslGka5X3fx42ti23UGhFw&X-Amz-Signature=57f6bde77702c76c49c41f5e518ce6a90911ca8cd0d0cadebea4959629d18582&X-Amz-SignedHeaders=host&x-id=GetObject)

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
