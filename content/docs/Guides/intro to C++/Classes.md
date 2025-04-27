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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXQBZJQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuz4p1F88ee2mba%2FBur%2BY0yznvw9ohSm1ESknG%2BIY2TAiB9PkvijAuV6MofiwHRFoYSNxV%2FOTz%2F7WYqg%2Fa7lIMa8Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8G3MpVpmzdeXFjCNKtwDQ3YpA9Y5gv2TpsK%2BCx0iWcEG4iCY7crWDsnaT7%2FdmBPBbK%2FJOcbf67mndFLlu3%2B1uRJzBLNVYgeNxOih91Pe7L21pMvcGHczDMqLl95BMv3KPDmutS9pXuMhQNx0ewsLrc4iCMnL3PWGBKxd365TIcxj%2F0AXYYOVZB%2BVPRbITXk7TjTccKdvSjAwJ45%2FJuu0kNxCSkMhYfYwAUf1pZPSZ2rvdfnuZN4K55rb7OI7J6v0szQVEiUSUZzSokGfjrFZuxyb%2BcxKTqMVAxE9b4sTJPayhsHiUburyhJUutWjoxXTEdeHS87FGq0kVgAgTWXsTHTwiVa%2BWsUR4SyDy6Lx7KUQMv0fU%2BSz%2F%2F7qMzyAuzQaOgUX6T%2BTy90exr3xvOw4HeYfen1694CUlHcv8Qf0%2FmsQePotaldO%2FxjHDsGI7EJSqapJwP%2B9lqydTD65I4syuuO0j%2BJ%2BFMtJLlAWJ2bo4spI8gIfXqJzKv%2FpBVgOwY6ArvkxG2DQPMsLzuxQmI8%2BoaFpIzn9V6D6FVcbjSj%2Bz7Zj281nXLs2OjpKEN5y8xyIYgKI%2FQeyMzfmV%2BTKVZJLQiyfyNGOD7qtbNcHfHGoeQD644fjwqkxiyMTtTMCuoWjg5PB8Lvjoq0a%2FgUwrIy4wAY6pgFnZG7n3yY%2FX8DwGGEPDc%2FoS8FWvFudxocrLcldhM1TYZ5vtVd3xeuBpIpLWHczSPNWFNW8pMrfHwgAlEh%2Fbder0IwNu8um57ez1XYlw2bzAn9DyDnk7MuvvKtp4FRkRQzcnVARZDNRP2M%2Bk6nbK1wWt1C6Xl%2BTrqpmuNFgpcnoDrXCWb9hkQQFj4zKNVams2OAfu22EwPmUvbZD3bwdWzr5Ji7LdbD&X-Amz-Signature=3788cc4c793c58b518c2735e411c938a325bfaadc90b7e7151b9c82052a45048&X-Amz-SignedHeaders=host&x-id=GetObject)

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
