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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPLEF4R%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOe611poiVwv6xnBXZAWSGCEUskDlfbg2FTdADi5QVVgIgc%2ByjdV2IElH8anS8UUdld7na%2Bpdkv5AW8t7f6%2F73Keoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJPLa78hGWgps9yOvircA5Hi9N%2FZegkL9XYw4x2SDo4iHbDr%2BUS%2F1IqSrVcLM4PBORUj5%2BPvlFdLev%2FXdMN0KQGM85H64TowuYHuFN6ckaOt6oENasYoJpBv3yAxuxekXG8lyEMZEbPbTIh0kPHyhfPK%2Bcja4DaJ09RrKp1aJd1uOXHm54lmNfWFPhCnUCmDYwbdifXFuwEmm8wMLvcSliIqW6WQIrobdpWIK8KQY%2FiBdayuOmspsE3r6oXD5q1wxyryGebLRXVCf20rJq7K4NS6jn9tYy0dwnstrQTWEmRjyjgeV8jW4SPtANZ7A3ZUKGnAMUdqY9HE0W05rdbo1S7x1kahTuSvF%2FzCUJ8thCiNa%2FeDgAU2tGNtI%2FI%2Fj9J4gdiPwYG5D05BjktxGLo85FKmannu38OFexxSGtlVkRHdR0E2qL0fHNoJTCxZwpksdY2R%2BMpvt8AsLadXh8AJft21SyDeLJT0CwEBinY4zLMu3JUfpFPlrtOOn2Bu3ruvvb%2FfDrQHXywmZX%2F7vPeZJWPsi%2F%2BQhFRVP98kjsALViPiPKVLTpGMDqweip%2BANG32AgV0EyQl3ETFzBL43sqhA86lhTCUFNJMHZUBzSpoYvj%2FAPyDEWbDfyD81q73HHKL8KsAwftRUXmqrkLXMPnA878GOqUBHjnjFwY1aoK98SSI2qK1azjl21kvV8XCVfGiLGlG4CsLyQTriJqc99mnSrPfvoZ2ihM52f%2B9a3s7AMmirgMEiElyoY50W8Y3FFnZJoE5FsHgvtQIJiTqZdDbCKfBJrdaXQAECSKmSJInh3IzMLiFyPNxxAyQTn6bgTfBnDx0yErMJ8I6U5HvVRhqt9gPTUp7Mp8QUE3JbbwaTPpYn0eCPn%2BW1Aa7&X-Amz-Signature=3c428f10d594879dec6543055ad2ee148d9628eba0456f2626cd03ed8266f3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
