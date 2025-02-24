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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROUG2PJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbfbFGTOI9qg2rUcK4cekGfZdqcvMQpAONfsacaXOKwIhAL%2Bd%2FwhS%2FMi94bgasxH9qgp6cEDaWoEg5YAiITMbboPLKv8DCDIQABoMNjM3NDIzMTgzODA1IgyCmXmVgDIQT4jR%2Bvgq3AM0aLTUlMgGf8gnIo%2FX0bIVon2E515DCL6RJUyNOTHupECLOfvs9aG00x1rGy3RQ0v%2BSfADiDfaCr8X1qNSb3tbfYohpT%2FaFAbENHrm7XjiByehlPbvT75Xhhnt920Fn8aBWHY2Zofn3Rrh3fz3DytNDcwCMRL2N1pyilBtMzZb6Z02c6bEzz7PqDBZ%2Bscmq%2BvVmtcF%2Brgen4NxXx25YNmGggrlrxm6fVOCdZ9nJO4ylTGH7y16ckvfYXX9IT38vhLsJiXZCkWAELo3wl4msU5g%2F1mX%2BjIWCK4MULrZlSI2wb%2BNWAmZfWDx2hywlU0lVpZJJCCWFxkmKycqk3jCfoB0SlhUm0utOY%2F7GWkELzM05hbncqDwjpnScfMVgphCb6BNB9AW2BLPRiX%2BJq%2Fh0s9NGz8S0ZQDbny1S2BuR1Fqkp80WOi1YAjY0ukcY73ukAk8j5K8VRkT0X1%2FDqWtGdsiekFItLIVivDHeloqR0AHXikwZfrR10uMowZEqgGeHlU262KI5GtUFSx96W0oEpCJcSmn0c%2F2xdbMYJtI%2FJmO8LfdGnqR%2BEosogJaNz2s%2Br8H1DOd%2F86WDdXYdvr1ciqydBeqb47oNr%2F4XESwYc93Xy4aU5rwsswvyUv6TzCnvPK9BjqkAR84zifSMFzkLJHRnmpFGHkXy7CleMwCNM7c3HXGaCbzRTx8En4%2Fk4bCT4dzB3FlbLbItTGrlOQASM3YBFPC2P0EVSVSMVCbnP7IQQiZzVmYevVMED6KC19Jt%2FyDPtsArowtvkYmMEGXTVaU683OUvd4ugQMp4CQJ%2FXEkLtos%2FY5lQBDJljbgwv2GVzWkOyBSEQdYW49grLttZnNTp0J2%2Bl6yoRd&X-Amz-Signature=17a3399da341d29dfd5f666bdd171c1019bae307394caf83b6b9d2fd395f521c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
