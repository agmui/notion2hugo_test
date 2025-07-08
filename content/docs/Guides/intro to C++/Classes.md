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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRXBGA3O%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz2ovFWKX2HY5oXTI9UkJK03DLC3j8ljXJ%2FyrmMyVtgAiEAuNDb%2F0WHXUqrHG%2Ff4ckKr%2Bn6e%2BUiht6LpwxDgBNvmcQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGw09RMiMbxzFLj5SrcAxp29D7%2FO%2ByeJCIC4gvhbUKj70eUpF1K8xH%2FuJJF%2BG9tRam9NzNjbYJs4sqrzdAkqYpcm65vpjqg2oWMkUYh5i0XJ6XUpHsv39zxTGgRUrfpzdwWNz9jycFgEWWUNIdoAwojoqJKjPmB9uT1jHkz5bI%2FjsT5LYmG4led0Nab7L6MxrNqxJbpg4ce5LyLgGZsCbBtnofM%2BLtXcDRtSo0SG8APS1OalJl2xm13irINagjaUAi1XkErWQg5%2B9NkOyCot1B58ZXYEMGu%2B7gFJXpAg6rSGCPIxWf0llEtWv9kzrR3iXHFpMnbqsNknitrUEW7EThZOGbaUQoC42fzE58GNrxfxbp9cPUXxbmbNgHApZqqTvKa7J0h5w7maxRpEQi40nEYP07I3hi0z%2BwUfCdVemnU33B3LKgTTZJ3LUgjXl%2B9hIYhMNMpwgkGVfLusowilvcODHmFTbiElV05EkmrmHdN9YMc8pe81jvskD4oIZ%2BKBeGMQuf0pwtCd9S1FPkYa4TNvbdcfrp4bLyhYIzzlfGepIuOF%2FUqSn4ECAjvb%2FScf9LSXBLgSoOWNXXreuaE8ua4q%2F1V7fjGZj9I%2FQFbXGpG97KHrID95cPxzl4aPYTWk1Aqp5LslxooZ69IMLGEtsMGOqUBncZHLMYjhcgwoCJDq225Nrd%2FGMmUhCvDekFWcmKDOxtisaYqwMd31JdjS91%2BosqizgHjGI%2BD%2FIwX1%2Bgrb2kIoYIXS2jaIefp0ch85LtrqmSQpXwSez%2BcMl0UqHIhiZ9vVPTE%2FIMrsHylpuFc%2FuWFZa2P1EriGgk0DwgQNwilaZ2QrrpFlbcdaCfd9dM3ZpoVx9nlUQFibQ0eqJ6S8M8WZytZYoZ2&X-Amz-Signature=8d9857a03d696858f28a5ab5e55d012e0f618790507041c8964ece54008480b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
