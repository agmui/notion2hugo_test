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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZARE257%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL9q4JvzOXIS0jCPjEBabRiH6DjbfAG7kFN4rVhDKIxAiEAoFDZUBWBeDuDoCYEPE0giCCJ6v2NkockCw3mkPHzm9wqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0icGMVetj6Izkx7SrcAx7BlhQDTS4eRS9egRdUz87XXPu%2FfdrJP7H2Z8%2FIoskaDbH3gP5HtP2OvOAeszp24N4WDmlIipiaPv2jMLIQ%2BwMIFEO%2Fzz7J%2Fd3k5lZj8S3wazMWiEJMPdXrRMhPG4N33KB8WJEAwl1c5%2BLfM6RG3CeS1lug4jpmFXnUQYk3yxS960Qq4L6%2BeNLK1ujucqGVEpkpOJ6%2BnnNWdhJBiF4YBHzOjc921olyb%2FzflFdbBysGBashAV4%2FaMgkM4%2Fc64fnOtF1%2Fs3gleliIeGLgyUGjEv8IgrtW4mPZu4JIu15jadPI6%2FeciHVjKa%2FAl%2BMArOgDJb3ApX5QArBwNFldbz1jm70fuVWWg%2BSlVSl7ydZtrFtbTgoSVNYaFpMNN3Rq%2FUa7nEgayLLSGJl%2BE3g6tRTX4jZ%2BvJ2o4iJF7mglZNxmvj9TARtMJp%2BnEvcNSOs43KI89i6Hut9x9P99x4Lpzk0OU58y2l8ThzRFG7ek%2BJBUcSArN0woMRyFOb68dl%2Fsom2%2B%2FjrMZ2moYMAqJWwZZeAqxclWxddSMYe%2F4Oofq7z1yOumPVqtfHMJjLo1PFFierO48Bx6Ep9VRf7bkdGYNFel37uo1mxDtahN%2BlqWUToOuXpCcR3EQy3VlwhA4MyMKuB%2BsAGOqUBJKnPMaZJVPWHLWR%2F2utS8bClH4tSugUV7n4r2caFmZme4Vh2whrrWn62niuvFr79gE2n13nfa5bGD2FTmIy6l6zWz1NSvURz%2BtZwCDgJzYjpXJNhTD%2BpusKy4cw6EEaREHF4yqQzAUxcUdUac%2FGxOHho2Q%2BwXuZ9i9jmWHrHJPvwt%2BHGLeldrQ%2BYWeWZHTtDcAWb2rb%2BF%2FHGWpVd%2BysNq%2FoBgS52&X-Amz-Signature=9fccd67563014da73e4f8584b74b57cbb307741931441f0fc30fca3f96020857&X-Amz-SignedHeaders=host&x-id=GetObject)

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
