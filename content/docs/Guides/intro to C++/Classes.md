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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUA4Q2R%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqp1%2Fz3lxhMJvgDHkQ%2F%2B3p%2Bdxv9irnGQ07%2Bj1kuFkh9AiEAp2CzxcffsxD7lMkEJ%2BZrvKGi1kAya%2Bu%2FCoOJ%2BKc3FZ8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAtHNXc%2BMgaegMMFircAzzTQT4KV0JwJ9%2B7VHwi%2BR5aMNfLe2vTU3%2BIJGXEmE2QGngJCFp%2BRgnZlQmkL3BLgloR7qJ34081koVjbEOU81fxw6Xpc1xlEQ1KoDCcdr2RBlIZeAlPPxdjQZRkp8JWTopTNe%2Bz05JrsgdFNMFZJ%2BaBZShKWvQRpmcsxPSeMkOSEqaJp6h%2BZ6UcdmR2wqsFPewXDY%2BgFoZqZFZjB6MnRbqJuiHA3xOs5%2BBFiB1sqEW1LJe1mw4j9rxBlmjIJohf1cWUgwy%2FQ%2B8f0gn7sRuO5zK%2BAcwcNskbbHLiyQ4wY30tuSRfXqgbC2kLcY%2BoQjRCxaC2YUHMLgKtGMMIO8toOfN7wPdYNLkqxsJV0wFRu28IrvjV1TGDzSzzQwj%2BGR1PkSdTPqyG0o2N6qj5Bv7D1SSZcLnsX8EtHUUgG%2FvYN0iFVcN4ySv6KAlbdXulLEfVsImJORloA10Gw%2FBtkT84qNE4ZpxGQYe47Hi84FjnNcDMu3spqDvtEdHGxeJl1X4aWD%2Fu17lnCPK65sqSOGhsHbk2LuRBw0nIIL%2Ft6avmECdtqAhooHn3S42UEXIaN7A3LJEo8ztXgbuPwf4WFsH9nfCyJRzSCG299lRK8i4dqbkMSfAOa4h7u12lWXQ%2BMMig7MMGOqUBb6vQxxrzOIFxw4W2EuhLdsQJSXIc%2BplDxCQy9PBkCN%2Bf4haEV3xFk7Kf1LxGrnQNoUSsi5Vuo0npay6tfoY4DaAQ%2FFaSChSYKsaVTlnV1yS4CEy3lLbzE1vgxkj9arYTvstxKlCoXd02EA3VsCpaf81yycQeLk1I0Lxl8%2FZy4%2FCQaZAXhROT3AYzFCrT7zyvTk1cF0CnhKAbwea%2B59mZLoJHlCAN&X-Amz-Signature=202d571a600d7ca64815d98c5e5a001254721317898105eec98f3e14814e64a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
