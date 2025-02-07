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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BTVGXRA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDC2C6XInHhG5%2FBl8iPqgkcBsCqqndMXT7oQwUJTBK0hQIgKkHxjI5JhjMnJqCAj2UdmibTTI%2BEa43AKJZHgP4IBvMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFLaQl%2BgY5Si1Cw00ircA%2FyssCCPbMwF0snOF%2F5bDyoMA1%2BCFEuag5ji611NavFmfZTrv7kZQ7QYDX2jwfmA2qTQtAfWlawIdnzFWarK54uc9FyoIPkoHxaH4OJiF6gZfrpzfIqW%2BKO1eBy1WcemYEiPOPsMA4EV2pW33NEJRHS1kqAfadQZaUVBoh23JF3s8MCYwWd8AUjfsfg3nEQak5kphDKoCGmZHl3O9btJag7lG4QMhMGwo%2BaieaCumuM1qEFZZIeSnCfW3CrD7%2BGTfNMRF3h9ijshtn7nD4eokuwlprc%2BLDJ9oN6A1dLLZKvHYGBqxl77pjjFJx%2FqWwcmiOcswIX42wX%2F5LZU%2Blz%2BDZRc9XP06Y3t9QqKqt3jjeYL2IjBLZN2dqm%2FQnDab3zjM%2BipHLL5zDzPZcQnPntV%2BQtJr9WCTwx2XflXCOOngzdRKPPjA11LU8PSRJcthIpNSw4kjoikuDo5ZItz0JrB6VbceI%2Bx5dnm63zPCM04IYOXK36KOOAKwne%2FCBblwBt4KsFlvq7SwkuuDiDnDA%2BYgMv64wbyQQVpBzWcUoJrrxGXpJPd2KmwJiwc4Zd2487ac7USxWRmYL0d%2FBpDat8ltt1yP23G%2FofhecBXH8yWXfkvArZs5cLNset7Ba1AMKKilr0GOqUB7eeWbBfDx5ryO%2Fe%2FvJFXsqrM0ygIEnPpckPL6pTkRPC7mz65g%2BOFxaUKOqOWkYbiPwdDfe8JK6JL0grY4qGrZsy3O8P%2Fjsm5TuWN6SVyTvB3HIsCbg%2Fbbr%2B%2BFNBfF9c8MnF89LuCTEgU8vAIVTz2NjAnkEQPzpWZMRCNb53KEsxTcURkaVFKpKGWzaRGgAoqLjWAb7F9%2FgP92X4cSfwMiqZcmu3d&X-Amz-Signature=9b82b1e124f6e0352b06799ce495960b8be7f3bfb3cb0bd6f455832726ea2261&X-Amz-SignedHeaders=host&x-id=GetObject)

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
