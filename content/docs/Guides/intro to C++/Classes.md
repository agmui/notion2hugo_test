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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDFH7GTZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCYZFVhE5bhSvjBfk%2Bujs%2F7wfUlx%2FVctwN53yDg14%2BnewIhAInmzDzGws5YSpcsEhdJ5YFLEiElyB0gOQy7tn4w8DaWKv8DCDUQABoMNjM3NDIzMTgzODA1IgwE%2BSB1OPiudybhJlMq3ANFFcFaospB635lMTGrqXd1%2FZm4aH49FsOkLxsRVpp9RRzcYheRAD2PD8B6z8twt9y00j18EInhIzdtZkGJFmS20vSlZ3GV9U2HS6tilufFgOnUPy4QRXoDmKZ0kFFvXghCO57sqL1Y3JjXLUgFRiAkb8QOMTJXjUEMR5ApHtOFoHB0Li4DGfa3vbRuaUqdjmiwk6Z8YOHcX8OPVdE%2Fufx6Emgdo3vGqd1mCeu7fBPbzxr1iQNOkifIO8vTploAsGyx1Cot0W1C%2B6KVoqdhKj1q6f9MvpxAigUpQgtcjFLdo7DXlMqa3YBg0%2Fdz99LsDHGQLR3kOE6v8JKQoy0lNNQsnybtWlCl%2BafStU8mEwl%2Bxi8d%2Fy4HSX1d8vh77XZ0Xwkf%2BdGcOSY7TS%2FKLjwhIyenEpJQNGu%2B0%2B9Ly%2FP2kzaBwaclsTbOC8dFlxt8Q26ITMd%2Fpi5Nlyso0IWiNhISMfsT%2BBz0Cgm04pEa8F6Z2rAEsW%2Blv1U%2BTVEIqzIxJZWRaktgHZk9s%2BBmbT9xnyH4hzDwimVAqLbV6Ibdq1kKpUxs0Yyd%2F8QQst8tz88fH9gPKSfENqUYRk3GwUnFwsCuJd6Tk44o%2FlccVLsyeiy3cesKKtlNxA4rOu95rUS%2BbzDLi%2BzCBjqkAfNZCFISWCJeLqaVJU2HvbPUpZ5hMW2pX8H37Zz2jYrE4g1xPExvoaBTq%2Bq%2BvvCgZ4JZzec4mjQFzgcHuR6jPF07EukGlkmlFa3jUDJM08gyg98rYlamflN5WVFax1QsPZmRKYhtruyYCOGGjxoUdns76gI8jmMUzhAzjZqvPGACHA1H%2F124rqk2cVI5kkSom0795%2FS%2FPvG6TDlFoAcOtbNDBc1O&X-Amz-Signature=d95560a0882110d51adcf0ba52c5d841f5a5d4ce9a9660a39ee4fe2d2c9d7d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
