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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6NBLNV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDrwY9P0Z9u1gzF%2FPvepg%2BbHzsogpPk1ls5y4oHjLq%2BLwIgW%2F%2FA8GulQJiPIGS89fmcFQTKPrTGqHXfLZIiVUAIMywq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEyhkkNLRvBjXVEDQircA80Bax6QOrjcmQcLO%2BB4fM0Cnib2qlP02NL5DuHKRs%2BGH5GGAtk3HIwZKnitpiUOyvrJKH1x5Ts2kBzrgVS0w%2FMcflWJuBl8P%2B5vRIKzT7Gi0DsfyGiHEqbt5bfPC7HrK1Ua7qNbKZie65NNQAxbxK0ZeEwMZ4R6yRq5xpoEKkFLnJOyWlgogtpLv8ab%2F3i6SRsDHxwuZLavrvh4Me3Icd6TcNfxDp6dMgUWX4qSVv9OpmoUHm8akdvlDgPV2rweB4TYaQifZTC6R4AuNoUa2sPgnZRnpZ6%2FD%2BIw%2FLQVnSn2G48h18Jytc8s%2BFp3s04wWBpeFxNnXxc8Fl3b10Uhj308w0h1%2BI4NHteDkxI1Mox6AvhohGsvy%2BLg3GYf7aCCBR3ypfizD9pYUft8pvhLM1WfY%2F7qzYhCIeNzKDWv5S2VgdMV6nwHFlQZyJ2r3xywsmGxCanuBjS9AukjgFBCr1Hp1Cq2fAPSEylimwQjj794cGVkN7VyqRCY0xtDB5wN4jNqO6NwgaA%2BSah4IpNfS7LGdgXVMjiK0Kj8DPGkYaC8rg1mkJFfuv3QZ3AGau5%2B77Ta083HWzjybEOy35l0VHw4HxGE3TqrEZuacGHY1ZiZ7WdvblReRcb%2FNIlIMJqup8MGOqUBppeG3gTTTnB3nlNvpKBWPNpmH1dqyEXnWuf9dVKb2Wx2Ad1y%2Fv4lFK8zay9g67OYOlDaiiEeTUFgFd2LC5t6v5dXK06Yj%2Bk7sNgn6Z2hkWNFa6bAR1ZvAO5zHARYhrOkhZ46b307wuN%2FOwyRNKeC7BLeRi%2FvaOKWrwox68ph%2FyLc9i98OfLy4ZCQ3JHqgYmF4Md88X55qZgmsHy6vH850fKol3r1&X-Amz-Signature=0f31f51bfaac03236aa8b84a2ce152cfaddec63c88d1004c3a87fb1897897caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
