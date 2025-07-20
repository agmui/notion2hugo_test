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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJYVEV6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIcu%2FGweU41XFJVCUhP6yEJpcueH4hbqPXAMVwyk%2F6hAIgTywEu369nkhDbTexYb%2BzZQUeI9Zfy%2FpQHznq6hQAyrQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLqhto3ZWj45WzmuyrcA%2FnDIJbA%2BrfQwTrnbcbRel36wbQGal7BpRWphRi3dM71RngFGCMjMgnxICkXuQt564BSMAy%2FtKmGMPDExzx6lq3FYbEh%2BUcNGI7pgcE5GCNjBvhv1p6wMdeCziLDv03BKGwRH3yj4i7lM2TABeaqxTKFR3HwPOBR2%2B%2FIAjmR1pOOa%2FKRzl1f9Y%2B8fsaHAiSOURqcSrIelWH5oiOX6K4Bi8RMPGz1I6yw39ZjfVJyI5P0zyc48NVQXm9R7Xf5t91Fppx7J%2BJBZczoXOV8ItYaELBQi6Ahdalp7LrnfQ8hidqLVocZaT5WBkiBD9is7oDZ%2BjCNLDEUqzItMOuZwhUX5MKx8RlLN9j3o6dddbIoeLpVZA6DmMe2a159a8ArMhu0BOZ6DcDtKOw77NyWTGFToruU1%2Bh%2FTQcu7EN8zjIO3MPI1WX4l4HfDjBK1AxUmfrVKiOuuvi07p7ZzFWoirE5QJ3JCfNy2Vw%2BEcn%2BSYdkQ6HCyh%2BZ23L4Ip7YDLms%2FEXE5hRrOArWhqDiapahiox4sIFWCq928BbYsGZDzPcT2CtmKnGMZ%2FVzk0YpNNMqxUA5v9Pah8fDTpsaXPFvw9KXbpUBbpDzZVPVp6jdFO7c5NMQs5LRelayZwz2hkxnMPqR8cMGOqUBMsQmMw7%2FCcW6H%2FrxaDocFNFp34ZUVudY7MYAF8%2FvgmCwzomQ%2F5chBMvP%2FdUPm%2F4Tn3M0i9%2Fq1LSHwQ2eJX4qsjee528D99LBdA1AleKhAXcHLGBOpkFAluWlwebVb9d%2FgbJHfyy30ao6uOk9EhILOsufOrc5zttfT8GTugtJ3KUrnuvWYQlu9yL6fGievDoX%2BCv%2BFLDE63qvsNOhc9hRQ5nRmJY7&X-Amz-Signature=d807fcdc0bb86e2e783b3befe4b307306c74b38e7c5df9c16031a007063c2c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
