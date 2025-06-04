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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6BX6AP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGTCG%2Bl3a8mbGMAz2pTijLee6ISysW1CVYCACRSPQ5wyAiEA9vMKxSjtG9n1y7W2Jr0dGXEPpTAZGOozmZpdtfR%2Fujgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDE5zCFjObPmucAAVKSrcA6xIitbe05zRCXTRhwAm0wq1n99IWve5sidu2EA0fpyXwT9ccE1CnTVpOSBj7uoli7i1vrG7BfvtmfPwCneCa9muySCWWvwmwKK3oihnKdlxs4RM08z%2BuGulgd9shD%2BeydDJA%2B58qBByIZ2lV71Oaj4Rbo3TcC79SddimHoe0H9FLRHcHiqT6T9oZcEMWk00GsBnpJcGo8WJQGWE%2BSx3FjIJUnfbQCCflqHEuAOkOpZ%2FiSZ9CvLQeclDpdy39g2ocpeoHRNEhed0WmxG5oBcmfkhvOpqbmZ4SyigH8RJNIBwVxQtrK4J7fOK6HQwwMbtqNqFRyWmgz%2Bhe5%2FvJNVKk6bJgTTjhc6hlHT6wYwDprra345buyeknx5YTdIorjWihy%2BlBFQPNFIF43Cqccohx0vT3WGBKn%2F0Hy4fVgxXocVbj%2BMk4Q0svBDN9kDixD4HKI7dGGEwfyw%2FlHQfyJEmJcq7UwmHz53NPemsYSAeLeVtGs%2Bko41kBgoZEZuZKtTK%2FlmvaFmQGEGeViz5rALQvypjMha1U%2Bcwe8RJGuVdMxMGvNIKLH3GR%2BlYq1%2F%2BJ%2F6LnKEEdGfSUyF8R40q64Igr5CZpTVp%2F3NWFjdOOvGdAMktED8%2BDDiEovowqyDIMPuAgcIGOqUBzu98Hhp9NwvkwKraIhqi0eoYHRY%2BM2FoPHvbrK2YaKfo1it2ZBizUu1Y2OBV8AQ8BTQg9wOfY4oF2Fpxm2k7sqNIAC5%2F4mDeoSWWOrOMlgnLlX9hofpSMF9DVwqYHQlx910dHZbha9swsjhYefFqQoBxQxtigXSyCSw%2BZlLTK7b81iScxbyElY4xW1ZouyM6d8C0BCTJ9L1FnuCKXP5qECrUaQEZ&X-Amz-Signature=069f75d6c5b7c71cc8c7a02384b621a8208ef807e8cbab2ebbb40b12a2980034&X-Amz-SignedHeaders=host&x-id=GetObject)

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
