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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GM5NZNE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCULy4crvBLP2Ebvky1rkrJhjjkzPz8Dz6wDi4GsihCyAIgCkUTBxe1Kr7Ola2G376ZSC1%2BzHiZxqSuNnD4YBa9dzYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE1PFCur0wyi9jgVEircAzdm7PxIqgiwgaHlWeNFSTkWZ72t6T%2Buao9B0HcSbisu9V1dGqc54G1tqCo9MtsNwzdU111RG9ILPSSFKBoAwLeBz3iYpk06PqdJslSgtEMpFrFOWOAqtBJcucx1JAvP7rJEzS1fCCd7wl1xtDUKHdiFSL1OfPWVHPylpYj0NH7e55lRZQ1bnyAni24%2Fi3FYFchvwjFyTafsQdwUuOP7YakYwETf2iTXV8Pdj%2B5MWQ6GZFz0srfiVvxalMy5RtDfigUJAP8ywC6ZVckrRm7X%2BGJ64e%2F2O4d5j9oXm4%2B1rbRGeflSMjsUGAFIA5XhO%2BZ6QIvwIcFR32Cz1Y9l8y62tqWvVn%2BgN8Fh1G3cJAJI4Zhy5Sjps5lZC5npUM0deUu%2BGZ%2BT3o%2FBFQwQEH4g9Ve4cimXCJUiwb%2FggHXedSd6MKnvCIBJsHOFCAdtCgYL%2FmhS7VY6Dp9AmRAD1Yt8V5eHlbMV1mFsSz9qhgP5jcSGwdcYhYW8NzvMCqJCUuibopyHbxDQSskJxkDpIKxN0Nr6E4OrPdxLS3NC0wFAra4%2B%2F1RvOL9HRFfD2TO7GC6HbPz9W7FMEtZsoucb1USj3psFoTvhmAiDTu83BuV8FFtnH0q95gzxg1Uo7L88nbogMPjAvMQGOqUB%2BmE2PSEX7jfWCHVfQQN8k8kGdNcsraP8UgGZ2Ku6mx%2FE3rbpRvBrWDtl1C5ULzMd%2FUXsQekWWYaWPcwxlcYvEByj9w3zAum%2BG7j0jEoLaMwkDc9pFRbANXEgw87ycebYHa%2F0yJywWkY%2BzQ3xs1Eyc1SMhuS1N%2BMtId1AHiUvOgw79SS2UEEVeSJBZt18%2BTAYWl7RZgGg%2BytI%2BLNC7ZHP3d53M%2BiV&X-Amz-Signature=b7f6b52862976d4120c1219cf09a662cb8ea10a06339cf0c19d85f46d4ea2e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
