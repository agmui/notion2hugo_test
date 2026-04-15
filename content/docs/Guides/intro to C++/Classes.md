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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJV7MD5F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQWCPl9yA9UyR6FAsseGZO%2FP9LMD4dIBDJCiH0RIB8cAiEAu1AZOnryX7ayJONsLv8IukOYNGx16L0vGl3Ushxx8XoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwhGAgtAGFdt0AEgSrcAy9QgDfgfQWLnJrHo0LhieM2U4jZy4jSDr4jt9kGnfxPMzPml9VE0qoSa%2Fi8nmESUhI3iy0nuQQcyNOZyPKM%2FHPaqkbJ4MM%2F93Pfvyp0lXSEddlGV2F9%2FdzMaiTCiK6bI%2FkNAPT0%2BHSdWoWvH3Bl0Vr7AV7GcmE%2FVy8okGP3ikjcFBWlgWetreAP2Ud0a%2B60XpyZpsEpgVGKHRgpCENdUKp%2FKFEzHSOwBAd6J3laYLgfJRoVz4Tlq6iqndFq0E4mp69LWZ%2B0vL%2BMmWE0wlNvzKI7q1trufjzHSLwHzUGiCI4kLgIoyUq0znrOlfO5mZU9k3WNr4hkeLd05%2FdOVvcpTfv9FNvN%2FUDbvZcfDpZ9OEs6zCp%2BI%2F6kvA8wj6LiGt6quYJCt4f%2FOFpf2wX9ACMBJXt7%2By8CLwE7iBswdKFqNogWhy80BgBuoDpaJV1Xe%2FQCqoXmafcuHlOrcWszY6wLUwrEgO%2B59GYQV7tjAKNU0y0j3If36kfokneS0nEhpo6NUOmc37Dw9wSxTwQ6mdhScf%2FG7%2FZEEH0SYYik8%2Fz2hxhcAvXXYMn91JR2btvIkMNnCbqDPHm5gltR3wXtPovHofSjiLlM1pbzufDEjp2yJIEM4vV%2FEL%2Flo77v%2BJRMJHj%2B84GOqUB%2B2htlvLdz9wfeAAYSLLmdfE%2BRL56orKd08F1MqB4hTwyABUpjV8KjKCAlGOyqTMZOKM1xxDQz%2FhjgQ3I8CT9GBGiwtU3ngMHhEW0AdkDZ2LvTSqq6MoiC5EBul7kHdlkpWIfkgHJilAbYq0%2BeRZEUVREtEiQTLpcvxmRcr7t90fmiAWeMn32uaJKs2FCHxJxSN%2B%2BSrJSooCRAolxpmyNbqqKy36M&X-Amz-Signature=2c7e20d0842f8c2b5a06b33dc7b57b8c1a2fe2a032d45aa2cc188c7e86fdd173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
