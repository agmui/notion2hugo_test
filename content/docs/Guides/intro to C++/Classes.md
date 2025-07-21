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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTHFNH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtmpIqk4HfYKUDx%2BbevOcw7obAptWBTtdvNHbfD3cQqQIgdKF8lLozQU5%2BBXfaZQRa%2B%2Bgm9YLWB6O26IoqAWuAM5EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5zbg5XolbwSmn4NCrcA%2FRpJdTfP1qp1mlBY3OK%2FW66JGBKaYvyVu5BUMHUqWs5XcXlOyDTHXHBtDZI77QjkrTciptZMCCJkPS%2BYt74AM2gMV3yGyJ8Dijb%2FWTfAwziJxlQLAXFmnJtRbflxxk%2FkyL31kCOqHXROJNoCspFzNR3vaLibXq1FBxXtlQN3kO1NUUzTqAEyIRF3w1ajeAo6Lhwf71Vqvdfk1exRq4QEuBDD0KzV6EaW8q0dwMzRBq8z6tTf2N%2F6IpO3lIe1O9bpPKnEVTCsnDLE9FBld%2B4De4BrKS6lUCI3LHb6YAgfskMS4Uw17mM7l8lGv9In9b5%2BvZLdb%2Bt2KATD0W2bDfk990O%2F8J0uh3v1R7o4fjZTssJSX0UFSlnJ2Le3zcKzCNrKJatsnCVVcDIrr9y6o3NYz0%2Fq681wgCeM4cKuIcleaJaLBwZv9U0h0y1vWyM9ATJojiGfzGDslt74z7Pyi2%2B4Jznfc43mgJH77VlIqLob2PitYfyZ74T6ajL4Fj%2B2sK99PPTRnerDvYbfwfvsefRmX%2FFB5Pheaw%2BeGYZgwIxGv2vcOEr4mWD3UEfsg7iSsyqwagFT5nr8aC7RvFno%2FsFmOALzqXLqyWpAsh4Evve%2F5t7zV9KDihcQOKZP1zlMMeT98MGOqUB7EukN1mG1u7UaYyWf2%2FAQVoAipEUetYOPl7ys%2B152Ri6N9fKnOXgtjwzdnFAkUxU93EDs2MsAGge0iTsOGgl7RpzUbRMcCcUVua5icwANdhROGFRarXRun%2FOIi6GkkHS2dFToyVJdi%2B1wldLBYByLayUhMaSi9%2BKtbY1uWqvHUaU%2Bu5fZAKf0E8%2BtNB5EL9IobHbXQxTvzGCI74OXvrWPRi%2FMIpH&X-Amz-Signature=c014170ae30e58d732e4efe44c86cf68e04bdba77170ab80cd1d6a7027c0773e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
