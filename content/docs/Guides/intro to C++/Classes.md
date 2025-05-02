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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOCJ3XYV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfznZcqa2RzUReFw7GIZhbg%2BPC3ojqbh3NMR8Pmsfk0QIhALDeiME2J9LOPMZpLO1Z5XwUruT8GrIktepaBacsHW3pKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtnN5rJCxfEwGLyksq3APti8IegVElCELEmR%2FcqXnsjoRS1Q33YAY%2BA7TKbLaoPE9z8PdH4%2FrGWrkEPfASoLKQtBW2N4fB2NlbOUjunTqg0vpGidpXDwV99hWXQSaoILh15Eji024dLu%2B1XFxAHvmIet9wBPrLK3Yz5kRQqGzF7BS9BkUVmYSY7lIcqahx0rsYeMYYo9VVkJveTQjk8HmYGyC8P6cKCgieogf3MpZL%2FJ5mJsV0lvE7B1%2BTbUwEZ8jy2QSu4nG2kL57zXWYK3truLuOhdDFbCq3MQ9aoAozbgqau75NKVN8rpwTUg3ufqIbdxH6W0zWSOt9wpRYkmlFgKNcrO3UUZJyXb4raJURFzVWMLnDaNFKUuUZXxh4gNNLyak%2BaVMRuVkzjbcKSWpsCwDH0bGXITgds0zXSgxa5cTmvRl09htPLu2gtGSnMY87Zg9DzCW1LdvqdQqyiq65bESHn%2BeLRZLJ5gSn0hMTLRuLtaHQEZ6yopjCWLpc4WE%2BwpuUlCklxRTlueMYERZuNECmS8gDCM9B76a8eIB%2BAupnHGdCO%2F6W04n4pkaIzwF3rlnNs56Qv8ThuCs9cttYx1NhnTDRDK0vNFB4FiDS6y9uxFi3Yyp3XYrrh%2FbjpwfmAzIAzDimwBgpyjCf5NPABjqkASydepQAHL3HXZgecUcJQVDPjaym7im%2BowsHosYMT43ykaFRZS68YDDv1Xa3vNc3oEw1HlDPfUaqJu8pVmXBA6dqQHh8MH8ATR8fGTifFBYVMd7vU3UPLNK25xGcLG6sN60SB6N82qOEC0KtB55kGeKvOxa%2Bd9Nqn8KTwhbk2TqNMN37bG%2F7H1OlacVDBGthsqGv5ICJlqp%2FcOHrrIvQ8qPuFuiw&X-Amz-Signature=4bb17d50b4103a588f0a101ce09e369a5b6f3d963e2018d7e62695ab0da10c50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
