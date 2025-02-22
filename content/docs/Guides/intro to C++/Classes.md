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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDF3G3AP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH41o9XuoiI6BbM49fjBIRa9eaFn%2F5ZY2c1Zhgs6XphEAiBdQ1mr%2BnClrqax75fXeeo1NdjF0SU7IQ0MWJhnwZhY7SqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTNw%2FkrjyGhOv3xAKtwDEsQIthXyjP8%2BvajnbubyIc8seP%2BsaINT88VwBPgp5zATVSh9sBBUtYeoOK%2FbjwPsC4wdl5jTFm42BzYpb%2F9BMijmvPo84jcoLHIVim4aBObdu12qKVzFfemMhITVcP5D80y1DNC2OI9Sv605O0Caouch8bdatvVKebf%2F2P7r90rGwh6a15Rq%2F46Z9i3oM%2Fxf6y1rW%2B1tBIxzPezPeAhB4r%2BsTbQZ5U1x%2Fd6%2FFe7oqj0um%2FAhbf%2FKwMCDu9k6H0ExVHaQwHv%2FX98AWu0IDTqIkhB3UrLM2sIDkm08lu35AYelODb7pabiWSxK%2BjT9Rn7CCIgrAPQvyGNOZoS%2BuWNRQLIfgfvTakoDk50MRrhKZKKblNfLnQpsbHc8%2Fih6BNltzBL%2FuPNgWEukRR6PHhx4RY4gej5sdHU1TSR%2FVYDPwbmrRwZgxM5Jlp0dPWFc5S%2FbrgSVzthQoTYjFGRHahcSnWF33Iuu2TOeX4RV3GATvMOvKTJlcqQK6lcFZetQIXD2Yp9fHmYk2a%2F47F94n1s8ePwFmNI3Kt1bs7wyk%2BPOo0QYBxK3SpIi%2FRDSn7biUxarB50EfZmfAf9GbTxOv8T4lVQZT8UOGDVL8ssyicljY6BVQQ7Wp0Oz3rqvFxIw8M%2FkvQY6pgH3VhyKscO3IWNzEyv%2FtxigwInkt61afIzJrcEySF00qzqng5A9yEv6G4oKRW%2FzPFDxRYA09ZmrdJKGnO9x8qSjFofLpLlQYPHhuYV3Z6Cd5783yjnxTnEE1BytaNg%2BIdr49vwzBnqYx4BK%2BZuNWV7yI8h3u29L%2FTKrpaCS%2FK%2BQiYZX1WJQit3lz6a1lBcpVrosrEj%2FfHVPxrp6ydWcRR9doIpYTvOz&X-Amz-Signature=09558f3a16abe95123833d8618ef14eceda0fb5056f0a86d7cf1ad2a33230219&X-Amz-SignedHeaders=host&x-id=GetObject)

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
