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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P72RXG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDc6bosShte0zeMcEQ3PbfJ%2FeYw8nsWEdVeeFiaCOsJjAIgdrm8Bgo9Hsm7EEOVMCbpoIJc0L%2F6y%2FgL58AqNAKfgdYqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpkHRiCE5UN5eA1QCrcA5%2BNJaYNGPlNvjXKvW8DLu1l3nY12I28m0hYjZ6Qb7YswkvKninaiep3KCbkeKB6YTMqK9jHaBwPK1ky6fEgErVSylquEKJ69TapbvrLwkDO1oyAAHoz6FHC%2B33KHW6KpQ5FSlY7sUszA23qdG12Vx5tyijuN6qqUleWz3%2F4VEDpbyQUwtKWUgDkCxFF%2F%2BuJdoWX%2BjwKkmgwVNyAGH0aKx%2B3y5gMg0xOcSslRaR1p%2F%2FVWNKngKAO9ICZ4ba1jzzDqiLig1NnrtFzaSs5s1CVPiDmRdFTZbLszEIyfAd0vlVxWPIVXiGuIOxTr3aY1wrCBs%2BJo9lmFLjqd%2FBRwXpQDmMFLvFwe3%2FN3z6FMHhYrDUW5PEf%2FTa58874NJOBBKgsAIpQEk3ZL%2FDdZpdkLUv3NCwwVkn4SDxXluZVaDeAjcXUW4vmrJnUTBzNKTNsg22xUto9P3t53UIUYo7HA3%2Bw9WcjEbodBp31lGfk4x3X%2Bq30ILxp8AIGH4VCginxe0DPpE5w7LvuQeaZijPoaZl%2FkPYyVRuYcZ%2BC%2Ba775j36mABZr1HYerXUWXyn2jOAAg5oSqhdT1XgNbZzTCgBgh620K%2FzQzmzHPwXvX5%2FPag8ggUA1xXwdd%2Fi855JH0qyMPnkqL8GOqUBDlWiWTQVG5v27cfLcvY18aXeIc7KCxiN2aJ5x%2FVLYFE4zy%2BYi%2Fyoao6qbCGaTGiZL%2BkSs4y3fN8eF9xP0PuRciwBD0%2BGdR3BASGRqyYPXpy3%2BoJFBiAqoCX8BLpjsCaUjEpwxijA%2BbY0%2FHSj4YJHDi3NpFtrMyiwz%2BVf7IXnH8%2BQkipbWG%2BSmfngHLLJyWZ8rFQJ%2F%2BkdNZb6IRZqSQ6XFxqqhfL0&X-Amz-Signature=d4b12b548b9af804999f5060565fa2ec6004028518715b6e215ac5b3d3da71db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
