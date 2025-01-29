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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3BF6CC%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8lnB5M4NLSw66FGnwOq6vEUuoj9kfXiMAFD6ibg4klAiAAw0axYsAJp03FhP%2FYDh7US5IWsqfNpuP3fxmetIfvgCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7z0k39Bt2DSXVyrKtwDRiYps%2BzzivfOP%2BfKZvPtJtTQcgKiT%2F%2Bl%2F9tj49Q23HVL5cg8XVI%2BlsfVpwRqiK2VEq%2F0QCb4pONByVcacCCLyexHd0W0nReDioQbmK2Y9BBC%2FJhW5ZcK%2B5GTDhdsP2Oi2mQctmXi2Yuzf9DseWQ%2FjS4H0tdDTXMot5TiaQ3Zkveok0CdpoRqk%2BT1N2Ie27grAO0kW921EMPPHoNWBWoie5eJP3f9juFmCqo6tL980GOrDma19hw822f5LmB4VwZHVDGtnv7wGrwdLrBg0LpVmDDFx1QVNNVXRNL7rP8ZK5rtOVmRJI9%2BD3RlgBtjAd4lra2oARgdMqyZAMsTTYY9snokRcxzdfkrxiYMXUv4qNrhzGk85dbh9vCB7WQhS2EQ5gDoirIia06PMPnJj9w8NfROeORJTMCN7MGVk%2FzO1ti562LpvaSg7GSePuYun71%2B%2BFpdeUH8zaVrcqmf1HQDETGFY1WKoDXdRFg%2BdhnOFz9BVI4ChbGGmpY8nD9%2FsM47C%2BS%2FT0spqPeeEKcj58aQwWbpZalQs5%2B%2BN35wNjJ%2BTjAmH%2FKpv%2Fut2IvBwRbqN9mLcFc6FPqOLmKbuYWASURY9ibn%2FWvqEtFJSq8rjL%2BVqL%2BMp8vaNj5%2BGb7muscwgrzmvAY6pgEdWZ6%2BTuW0kY4SevnYhBicV8Ea3LFcbXGbWp846G91wrZhfndWGCRAj61MrzMa0bb%2B2rnWvRzPmPbnkjcSzX5dDvFrtpQutg6IVBDo4HsS5VRN5GOmZqKSDdP2p6O3DOgT%2FVd%2Fhdlsh2HU4cEYrSTPbRjzLXC8aQ8jq8mJsIjaMeT%2BO6VwCqPRADR6NO5k4cbmF4IzKYeS0GP65JuMkqpBc%2BpgBiA1&X-Amz-Signature=e5a8963c7ea6f8ea22bd334433ecfb333059e9ed1b1a8b1592bafa1ca18cb019&X-Amz-SignedHeaders=host&x-id=GetObject)

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
