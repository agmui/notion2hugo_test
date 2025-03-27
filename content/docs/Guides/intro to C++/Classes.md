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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55YDY76%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6dYh3ZNTEj%2Fc%2FuN%2BF31jquHeWE20ILLv6WKdVjykmAAiBFutbdiE%2B9Wo4T5Pn%2F8YtOR3qzoZEA5jjqGuREqMnZkir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMnkvel3ASJrIdDJNDKtwDMBSwKwmAqCTnPyp7G9edKxKOAQmeuUEKSOn0pz5dxJdnuf6jl%2BtmzVcrL0sObsVwyegOtnayzP8SY4Y1p%2BHwTnCSDRwGmnoNXkD%2FiXEQ6plvi9kpLHiEApJXquOh8whD4qXG5Brzghuri4kcJYV%2FaYmJHdFB%2BT3WRbrendg5uxprRf9wUfyEbSivIsBb8PdNzkASzNmrHAChOhTusVDUxhNDky%2BuWa9Zkd4%2Fv1qFIFFlrJlz%2Bt0X8nogrtORJcik1ASJvXoEEOnKGFOTapxdg%2BD8LFuqRZIqL1Dkf67z1A0fcU1uRKjq%2BtV6KisHrfqgBNuMZktxOa0VkjLhBWq0%2ByNWsMGaikSCl%2FoXERUdkt9b9SU%2BVlbWS7eD0HpN%2BZMwwuM88mGT5QHtCULmX39zZWzbQ3WxM9K0vmBAgJIClqm5Z6sK5Y4IuLjwyv5X2EWb70JQU8SPVhqEY%2BQRTTQB4ZfiMOWkF3XO0dRtryz3J1htcO5BlzDv%2BEgP5foDWVf3gc07Or4DbG2349OAQunrmU2j3mLH%2Bo%2FRBV9s2zbA%2FaBEe0OK7YkNB3s5KhkjpkL7GRoG7n2aiPBndw0X3ZQPtIK%2FJJAFeBMLtP61ZrEJu5bq4RQ%2BFTIt%2Bu2A%2BiowhaKXvwY6pgFIQelX0h9APemxg2B4TKtEiQRve%2F78DzYYFJD4MFG8hVc2mSGdJS5295f2XLv2VXjA60Avaxhp4RUlEQ2k319YIvXkswfSIUiAGDhAS23aS6FhZEn5lkB66jnC%2BanLTDV3Y7dZv%2FpTNJYj6dychtgBaxLVoS3vf41j3F2Qzgia8GqFBJa3lAaWKtj9%2Fl0lMNYBW03HrESAfc3bb0Jo7y7XO6fp%2FXqg&X-Amz-Signature=ac4505a13d5d6c66562d1d0185d49a11755230c3d021fcdb487b685c59c76b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
