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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW3VKEQS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx6UF9xITGRUfDM1EeVHYLu%2FY1cikD63hsY5px%2B5x5hQIgGL1fV7OenhbEadE%2ByFKSaXF1fqFB35oZNUh1N4ICsOUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKL7lYQvo6sy8Gsd7CrcA7j6cc%2F9OzNHj0IyDdRW9Jp7oxrk0sHPrdIuk4cTD%2FVMUbBtDajktm3P6Bzn6bV%2Fe1bV9vTa3TeME7X4JGytWVQt5vukfueRQxVc88DoCraFfg1aZAMDjtNJrQvzMyFoHbcHjeYmN1uIAvRnH4ow5V%2BO2woEgbFRdPQJWpXGloXyebw8Tjv6kRN3u4Cny5Ue7gAfz0euDVZIt9HzKA6gGbgwkH9q1a%2B0bxIVR6iD0gr0zyTv3ycEKrP6sdbE0CNY%2B1FSEKJiN6KA4%2FJHH6ooMU%2B4wt6j%2F%2Fc2T%2Flgr2iIMVgmHM8EI02nN4N7qriH0gGztBALBjm0To5DyoH7kvV00xEGCTE5ShU1sn7ndS0uzyL%2FCPoJxLemleHaRuZdLa20X70qoo15gTG2QRfZI1b2wndrl1l8AAYUf2KM4ytyxIsdDrw9zFP3nvtXsZVtSgO0VH0IamMRgAwrYWbaXBtOU3wH%2BeHVNUp2GEqr%2FjGvBAypxLRO98ne1FMwvyIMgdqZzL2IsOGXA%2BJqymVYNOLcP6wkexMxtZYZbarC7QD3T%2B4u%2F5z4DlV1CXiq0%2BjZ8S3dc0CanuebklilwZ%2Bwl8ypZ7J5Czr3AE%2BSIeUgX3qYKT2lS5g5cYyn0DlANoUlMPi%2Fmb8GOqUBkdK20Y8bAU2QRdJ8EtyVik9z7S%2Fk8RYt%2FmjQie3Rh03r%2FRWBBKgk4wrSPlsFiYLGaJ7I4FwCdVSbMBIHilfW2ysZIoie2nPelBnsT5pd5yZw2lijDvIC7u7NtmVlLrzOeIosoxcveaXKwZHyNI0GYz4wAkK3%2B2jqG9Gd2bhxk2q43x5orQ8aUvIV%2B%2FSAkTQj5fXLyD7c2dLcd9nkKq6w62zAEbie&X-Amz-Signature=4897f5a34f91349d908c6cd0e27c9cac472a86fa391b7e870c7aa5e70b673d89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
