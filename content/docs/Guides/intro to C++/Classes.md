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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTQ235T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD70vEBRSQATHssmplmk6HAYs4qJVw%2FpeHKYn3PNwDpeAIgREaSuje8bg6hHdPDXW5QqIPCn%2B%2FSwkRPsJoORnZFFMkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNbE3OLSZGiXTuLbpSrcAy1ExLQe%2F%2BOnBmZm2teDyys0uHlW30qud5%2F6ghv7LZ9Gj8RC7INKDA4bVnOP946UjJiHF%2FqLxMBXeBlCPZ2%2BzEg6iJVYWYqCVLPyZsfg3Y8wutJhqwzguqxQXBZeAJq%2FbLg6vo86U2zMdr8zmW1cORNIVA48mT3E4rd1cgvnmWMAdSWKnvabaqkCr2fBTWwppOXsHc47r%2FXSPOPYDnNalr3Sv0cj17nZcm5MYu4B84jRKO5BXkGmmx5QwAwIRca28iqrg5SBaRjXraZBBntEz6PKvX%2BkELtDfccv%2F3YabwnvWhz4S3hii7Un7bzJdB9awoP1Odgj9zmJPljckvXAf8bWx1VAyn6l9My8kkruDjSsSBaxEEF48GTT2uzDQHi06E%2B4YZT41mkdhsLv9Y92GPGBqdp%2BfaDTbZcL4AcXIK9tIByMvX2fzPi51dBo4qf4LTbLswoJsECp4kmCQaTKTQp%2BY52bwc3iOnPwxYMmLQ8SkJWSgt73mnwmqP7d3PLxYc%2F1m%2FhYBA4sBDT66ql%2BA1YRGg6WZXENuglekgxobddsAKHpQQWXojKwURsk3YfOWliuU5rgoiMp%2FYTt2UzmN33hmCmTibKGUlSMLZG5gFHhlyZKMrLG1Yn5%2FHLcMKbFzcEGOqUBtQgnP%2BWyqbCvVmnuJgKeN6qPosYIlzm5D1JYPChQ3bYGVmL%2Fm3Pn7Aue8kJ68186ssSPvjL9goQSFWmJM2CQalw7q9hqLaOG4B9d04y0ds%2Fw3hCB8GPyojmFMl4YuLyV2dgI35%2BSjDRhW6mQIQ0A2NnOmomLC4SyAxvU7Uye1DwtRe5eZDblYzjq0dsX4lvhCKTzlzB0ttYvIm0ZJtLPQ7xru22F&X-Amz-Signature=f58ad3eab3e3cd14d34e1760bfd8460f1421780ef1c78625ff3c6a3fbb64fdd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
