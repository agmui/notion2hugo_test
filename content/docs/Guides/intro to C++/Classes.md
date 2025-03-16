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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBIT2MQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfsH1GZVbM2LmFp%2By%2FuaVZMcgzhJgbh%2FufsL%2Fa90v0EAiEA0yMEwNML4TEdl481rlA0oBrXTgh4j0Y7y4EySjUS%2BjYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPcmuXnSOhoHVer8UyrcA%2BN2BywPJtl3snU5y8n8WOmOL2EuzpmnrQsFIKQr2BPCUR8NLl4WoYr70ZyPB99KB%2FF1y%2BKyiygiqGG5Bcc%2BCrnDOs%2Fc3NM4hPjmdlOpz6Tmy9rHO1AlUpdvUa%2F6%2BHdM05OBaDgoarjHdz5mXvKWuP7RKsubiF1zNZh%2BYMpxBxzfzX4QpP2IFhNhM9SzUuQsOGaSsk6GJTTyEdLpphR%2FBTynORb%2BB%2F7OLKYRKgCLA3oVighqBYwoyTbuBV8eGx7zQnnKDdbINsTmHuwX8cmr2gcn1YVt0UGZoJ5mMfwz6JqwuapyItfy%2Fbe%2FYb9z6EFuRvNbL9oXwO9UgJ9BWMW8W1LoXNDlWlrrLDtYDoDet4CLpQTrGoOryJmvz3ZmPLZN4aZWNrcY22Cf%2FsN%2BMsmBeRvOxMriMbRpfZPPufm%2FmRqIarVRLaMdLFst5jP6r%2Fsi23JpdLprAZB7K5uQahXPoJpwBkdRQsEqa1SE9hwdat%2BR5J5z0MbvKxOjB8gouOXscuU9HhOKCvcQ0Mgvw%2F8Cah%2FEwOxniWOs1ArjFyrHKzRs3d%2BnF1OiaMbnRHglwrhb9JGPk6cEwAxhMsxXWjQ4jXqkCcL1kto7SwTsqInlk%2FWqEFvIdviTu6PekZTXMPKT2r4GOqUBGIbbi2juPLPlLzzl8KRssqrennct%2Bt3FC1ITtzBtmpVhy1fbb2YQmHjGU4Nzn%2BdCCeRppxLIoO1xi6KfIzCEN%2FcpLxLYCtmj3fJBFpxAG00s%2BAi8mNx5Qxoa1HPvQCkNL7hFR6yqr7Js2XoSna2qy3qPCvhDB%2FXMm%2F%2BOBubE6Y5sxcHc4PjSNsnjGKmBaB081eO7gUj5XE2YVhwnS2ccuCW%2FsohY&X-Amz-Signature=01b4b668d50d186dd649a017180d6579580d730c671e5cb59fc9ce0b22dcc057&X-Amz-SignedHeaders=host&x-id=GetObject)

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
