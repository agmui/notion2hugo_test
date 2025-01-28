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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWX32QZB%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBeBhwYKATTtcUFNlZmPzAOJGLQvBfLIQasPMwXjBrS5AiEA7fhdTInfRWcoK1O%2FO45VokH5c2njc6%2BcA2UjoJgpAbUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL63irrgCk4JBeqfsCrcA70uvd6A3wTS1jwcSduhU2lmrTLP%2FZDMPoHb6DjT%2F4Tqr4XKUZsdmvme%2B21MU5hf6Maw3NStiwMjYdhQ8A%2Fg26rddOWVqxuIpenm67vq4071SS2BMGc2qlFbsNYb%2FEPz2E0okc46%2Fw%2Br5z0MLXLplEEpIX0JkpmR8%2FWH0zNvYYmkXABAjekhFgkU%2FqM6lU6mOLVnS3JW4IcpNbMss6Z6hklZ9pJtl5eoHDpKHXmFRfLAWuBxGqIxS7M1XVxNqD3qEBA5D1H7Fd3aaFuEEpwCuVwMNjtTx%2FTMEhY%2BOUCFIJk7lLH9HwM2Wr0S3l0g3OQ7ugfJvOkc3HpWTOWori0WNdYoLraoceL%2FF7X9%2F2J7mwEf0%2Fs2k%2BRSOd0h0biArQbHqb5lLzAQneLRPTUMqpvOJ1FQy7H2az7NACYYa9qhG9Zq7kyvR9T3E%2Fs0v2Dwrevk1%2BeZHFBKITp4WfQlXN1kyxrq9Od50LLyOIjQ1y7%2BBIs8FEBVgYg01F%2BHVrVEztQNY5c6AfiJVbzMZYEWowpGEWB3l2iF7rJzbs6PdO2diIhE9E%2FkBI3dTdEgOtB%2F%2BixNtCz8uB5%2BaPE7i4Lu1nYu2ZY%2BkiAubiF9LQSyaNntZ5jSBHoWcc1pRg2BIv3wMInf5LwGOqUBuO6w340gH0krknWFjkq4aKdSBO%2BRVaHEtjVBZCi4%2BRLfmn8ZNGkgUcQi3YwWSgUk5YnmCBsfXnS6FVB27HumIVYgydNNJ3TLuPsfyNEucn36XN9pr2P4XBPhSiwXI5j68kTmkATwPSMvp2F3ERwJB%2B3cGoD0gVOWd0P23s3cODdsYuYZx9ZRl%2BNdtPMSC2MxkTGkxvXxv6WRB8epYV9v6IWNBuwU&X-Amz-Signature=e5822aaf6b7eb95f4a307a07eeb1d78a18b9f63c6bdc27801205b9fce2306d14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
