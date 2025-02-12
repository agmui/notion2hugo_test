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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4NVCCU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAan6KFbPTMa%2BAj9vkOV2jdgihNwgfyxreOKj0KR59j5AiEAio9yni%2BU%2Bgpzoajy7kdS5TC%2BX3kY3y34B4n4G9C54h8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8cuuU7yWCmc6dJnCrcA2l6BjJ7MPWVkkoTv4YcIvKtFZ6DT8GVVc1iRkgOsB9xmNHXKO8undfNRRdGVANCFnkbncuNJg56MXvPOL63fuE0B4J3BSCrFGdIvB2lTTM7eQQUoL%2BGtw44niUYqxC%2BonT%2FNCz%2BNKkIR8yClqB9kRcBwvNXWciTON1tlA8sj6m5iLUaHFMA7Z0DPpbz0MzgopKYig8ABvMwHyFTVzHSXktjtpYyoXx39umrgCyBMCAj6eFnN8xCaik%2Fzy6oDwAS9njAKiZz7WkOFhfuu7UqIQL6R40P1sphk%2BtQZpD9hwjaz6Z3a6DQpjKUPfvV5LLqpiVa4Saa7AnPp%2BZjU6sLR4yMn8ArRFKSYOMpCfcu%2FRyMkSkU3jd%2FqwqiO4Hhm6R%2Fh182%2FxwF4kKGt0RQS9hnC7lfVxt6kxudJFCDZIjkH1p3eKFpSmn1hJXMU3FeLzbCYgml1RUMqgTp3BBtwXqC4NT3mKB8ja4KGj%2FX8FsE%2B9slZoVfIL6sj0Fc4ZiZH6yaoeBSobzr8N78HkzoYGiVDeLD1avOr1E2ufGJ4uuSgN7vI7T6yqO3nUxN6aBKLu6%2BjEuCfJJHC660hEhlrAJfcHQjk2OC5bc50cNtNoICvsKuHO3trc0CegBkhwyFMNftr70GOqUBYBEsWD%2FEsP3LLa96dQ87AMhdV23gV8x63Pzy9xFpmi5COG4NBUzGYyKeasMJzjomyIiV%2BmsDq38T2O0zM%2F2Npml6fvM7iHV8VyzVVtAehTqXIA%2B2En42%2Fmmz2PSWTl8I71Z7fnY%2B85WHPAIb6miKkfXHoM4hngu5tOskkfrw4r0Tfgee1FarN0YTMuK3vBLDvkL5deoIMUW%2FhKPGd0UdTUpB2yew&X-Amz-Signature=02e7d62fd7f0f2d7729c5338f1b82d100c2d52dd23a75d47b8c1647f0d1e3ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
