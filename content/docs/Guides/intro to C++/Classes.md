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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q37YNGPI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuc5VymXEwoap6S9QobW1pIk%2FnfI%2FzYGi8KmmZMn%2FFPAiEA3cHL1%2BLSlr1XbY5WjOJojCcz9NZldjNW3cJq5AYVOf4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLcK%2FoenzOtdtrbA1CrcA2%2FtxqEgdX62%2BXsjL9VeUSn0%2BAKFtcmvj7xfEgA7WJRiwSCEzQmf1Hs8m1%2BHUcRrpxvNPQ6AQMHUqmyXtnfqgStATJ5XFAT1gnsiOxS6eqyOA4aKZuUGRFs8m1gVXOXbZDO4Khz4cAfJvIpXk5OKrKZBgCTUD8g3wnP0%2FQL4GnjTyOWvAHjfiajybOX0vDlCVz5R3CCCb3HJnlyogtorC12oiX1lHaEBC9saDFVOKdfPaDGXFJemyTgXiRvmPou0M%2Fg35nkaCClY1Tq4nD%2FjCrNH6iaxVFD7o8Iy2PzF8yp8DV68Q5omSio2mRDsrDSAHKs3RuMpvYaD0Uldc9pguPoozw7D42rvIe%2FNavK9vOvJETIYWfIZm83DyHmhhm0cC7alrfK3pEGxzb72FrhM6XK739nJAu2erQSsqEjn%2FCxjlOVQWKCJPIbXZ0alpMIyZwnmRPdZPoIP9M3TMN7qHsyRsa3zYE5GzIeLf3LltrN3y1z2w7mrOp0Yus4yeRn%2F4gTjaLG%2Bi319HeSTdr%2B1XXKS7MCCRJ%2BaLKsd8wQlpIUcxUmYbym0OtA%2Fj6E2D75Cnt3Pxa2Nk2P%2FlZaQ%2Fq0L%2Bxy%2BKNTZOYQxV88kuAM3gPpxpIdbt8xU%2BlDrkb%2BVMNPG78AGOqUBEuWChOpX7z%2Fb2AFIgJBbJ59uFVrz6EcbrMqvIVN%2F2NvB3HGoz3Cys49aRC1Q8YP14OEv4CaTGAtkQ59mI976g%2B5pukcaZf6aSZc2a2ZduVZJ%2BQtOFBnhdxNpphQ0WsXZjTfJwpe5TA5RKNOlQ2bJ89vpnijsCz%2ByScIMIpQnMEiTV%2F9u4WE6bIwaRKdAnv8uTGRnBUARgCsTzPz5YQvTaHszWK5r&X-Amz-Signature=0e20afe94cf84da48752dead7519b2eb201efb665a4a4296b81603e696ec0340&X-Amz-SignedHeaders=host&x-id=GetObject)

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
