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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7LCMQ4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCkUdEkrDh501QHNFpjo35yGa6VepJLdRJ9MzCCovDYtQIgWEcdfolC4hAB0tS%2FKkyaTgPxitntvlx%2BiNlyLY5WxXAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIDnFQyaucAhqTVE%2BSrcA%2BMCz2XWfM6LJ3nfiJcKoNC0PKkLToSS0kFR7xgKI1QP328VDQ3BY2yAino65f7iS6%2F8tN5q5BWLnjd9q%2FtBd0abSobI8YYaR4ek9A1WmmZD%2F9Vr6fN7PLKdKlNWMpp45QDDq96lBD6jvkvWnjpErNYeEQ5nfFE9ONz2gdz%2BdWeWrK6OK0v%2BAvAWWWIYFJVEk%2FeaiYp4RlQQ%2FQZdXrMnB3fZdWVSIXiYOidsIz4ewlG%2FMOGMwqG7p82nbYw8%2BpyOiqhk4Ve6uwW%2B27GsX9XihpGgQ%2BJKUCf%2FGTD6CFfWKGLp667oKUo66EW0taXfQ5AqQx8YBc3L%2FzgTJutGce9cwMaBIwky9OQT8KlTFQn62YX26nuUEWMqhrqrTcPetVXzZRSyJhjYQY3uFK9nwhAfayD33pFI7hyM2ws0A8fOanL%2FNitrTwN%2BCbmeW%2FfU4U4PnNiRJDl9cVQMI%2Fr5cnfm%2BAY7b1cEuuUq2ZkpQaj02Nh%2BITnFnYe%2BElaAlxpT8JJbPm45x7rdNnMhBOki2JOJnhPhB6xzhJhW1MxCyg0j7g6GU8zNLxY9ePF7lMx6cXxIEpivUpKaATPdNV6XF6aCaDTc1NG3Scirk4U7lfxwej7llyCP%2FRmjL6q%2FxG6AMLXqzsQGOqUBvMO1tyLeKUlz7fe3Qy7K%2F4n8VcdRUlf4%2BoovOUe5nQSIiyL3ryrdWYqo83mSDGg4P%2B8MxDDKtYFdWpPB71LN%2FI12T9eXXZqBYi6c4GYB%2BStkxQp%2BejFOqsuZuXDhCPcG4%2Bri7kcTyxr%2B%2F0Od5cTUmQR4Zj3YlXn%2BmrLEqPNcL3aNXVc3qaaMtsYCspAXPA0%2FSt%2B%2FVbMYutp8DzD5FPARo4pmjiP6&X-Amz-Signature=a9b2d98fb15dd351e04e0b303af6e8c0e5a18b6115e964629c3418e5e63bdc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
