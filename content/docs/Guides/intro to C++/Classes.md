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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4BT52YM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd1hBR0crD1p5%2F9cgC4jmyQVUUrSgLe%2FJVcTHGB%2Fy%2BfAiBWkU6DzpeZQ%2Bv0wVwYWamw6Azj8%2B2UmizO8Tg0nx9i0iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4sJAsJuFA8qNG9ynKtwDFCugf38%2F6w%2FqtYwZLtxs2TfiWTYcrV1qRjWiX4TwW1MRyOWNLLOhNJFNYsZq%2BIMGRm5O5lWorv2g%2B15VjYiM3asqKyR5rtTByfdWWnFCE37ZIlE2ZlWXeG8AxcWMNviHa4oI62d3Ed2SuiURGbRW4xx6XgkMZYfRF2uhK27D3zBE0qpiLs4a0%2FAKZpN2HuF7MO7SL3WxOdnsJhpEojSC4TT4b7E5GF30FCQhegCnNBn8VBMo%2FIN4H8zk99ZnFFYvo8lIj3oYcg0On57lgA2JI29BBsaInMp45%2FujYHMHrWgONiwilHhrgksI9ovmPM%2B1E5pK1eiDJ0cFRviI85o2dGaB8wcA4bZ9mvUShrvjWRWawqGrYqzuSRboMpOroLYDq4%2FKP%2B9b%2FuCeHutY8Yczofbr8exXIzsxyPFuKGDPAd9EUf1PROgE88dsYzh6x3Gc%2FScLsbgoa0oqoycu4xgYt0dNDFWWonM5Cp6njTKxVAp6b85Z0JAr2%2FWQOAHMU4xYVVn0BTDb%2FfNQsEV5TilxfoceD7qUOt%2BWGmY95oEjxIfaNzl7vCl7%2FykUbuLeNNJ84kHDlw9FTH%2B1%2BR7RSMazCCfoCVPOJc27kp0g998JGnIHfP0ptP%2BoNQ2W4%2B8wiv%2FkwQY6pgGeM2JGaHK7%2FKCjEDBTVdA%2FBn%2F8Nul2sxoGverTWBhRpMFIUcAAbj%2BikQxi4j72pMnHk4AfJnNGqb0D7ljKFr6lL2gWheJcDWJ1doP5OCpO3WNocFdBVShGcKcVGl1KmtFHSB0f4RR57VYz19wctNOHx6PXKk6q%2BSxxYPNBwx17qJZd2dRpsmV5RCnR%2BWWbhKnRZ7zWtw0IU6kbc26ERkMKjKLarmiN&X-Amz-Signature=a4f704a199abf3a0d296c0ba6b925b4285ea5352602cecef3e21db4dfc87f213&X-Amz-SignedHeaders=host&x-id=GetObject)

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
