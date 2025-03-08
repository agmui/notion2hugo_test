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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2FYHRRK%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQChSU7syp4zgsg4LH7%2B4eC2CT4%2BgBdF4%2F02yaQun%2FxXVgIgXTL6VHVqGDoKa3sUB%2FDxkYHlGzrnWeGPK84uJzs41Mkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMZrb%2FkPDoqGBF7%2FWCrcA6tRTbpkIcaIzt2l3JIiWd2%2BaX9cpRCWIPhSScC8nHzeDuwPdGV2YXVNcIX%2BAEbK14gUmLA5Md0bG3AqltUpH5uq7DDEHNLQ6tl7IOvrjwej%2BuGEYoHWK8%2Fv%2Byapw2BtIM8EejbnjChCmMaxrN2sbED5QRKPdGNZXEG0haPTqdQQRxP6cVSA2bbjxUETkADt7T3ZYDlfU6PejBDuOk6ynDEs4DtBBC81RRZkVUfEZaXMa91gP0H3H5%2BBTxXhkaQGOjCACkYhBA%2B2pf4XPrFy9UKv5%2F%2FSAonMbUZLZDBby6WEIm2w7sOYms1VKwzE7l7saSYdF68rUiSdwfv8MVr7cehramYQsltK67o7g6YfHk96LTQA5YsxSHlQJyWDKHMu5dEced1FMKDSiyzx4n6M5xSTWptoexaDnvFmkvIBSF3kYRlBD3aachQZ37aeP8KCx1lKV3qrmOc2G%2F4FrjsJxg2kiTaefwJdwnrjNvV5y93paOyRaz5IUhB9Uj3tqs5CEGEGXdzgERvthOLKQ5vee7WzqFnCfbth%2FHMO8JDCxZem%2FbwcXZxDFouVM2L5z%2Fc5seUBx5pCl5SPmJ067fva0UdxpSuNwJUvCD7keBCqeuplO5zQWTwcBg3Yk2K0MKbzsr4GOqUBd2SA7hX6pPYIioNHXUoMHEIsr5DxdvM%2FEj9vMNDInWzpKhJv%2BB9OI4mhZ60iYhmNB8YQ5FDe%2FKy8bMy68kLS5n5ECvLNz0B%2FcuMwn9vyrvelwz8dzu2IeXxbkT17%2Fd2JbqL5yTzKtgMkYelhyHFvyABlzlMBU6rCkU%2FvhEL7OlRI1bM3eJEi0pDKY%2FEt5PBhN8o5UTajMpGA7c4DKn8F9hfGm9M4&X-Amz-Signature=2e696bd2fe239928ea06d3d03ca199954d697341185f96a4826c0b3c4f016830&X-Amz-SignedHeaders=host&x-id=GetObject)

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
