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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5U2KZX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDRsnx8QAuK%2B6l8006Gkh0P4GFPhrmVPClVwjJIu3ekSAIgRumM7Yy0MrwBKJ%2FzMslmPbVSJ7Sg5PHACH4YNwWID24qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIOF%2BNdz5GaDsF2mCrcA6ddnxKRyZedXw4k%2BOS4pZLc7evDZBtI0O4QmlReHHHm1UYrEnzdwp23sU0d%2FmhVdBUPa%2BNiuhHDgzzzhB2fKeFIOMvLCHbBzVmyXr4whyc3vdK3D%2BBtUEwJZ7%2FR7KKputoSh69f5EPoaKPweqGsznt7UFpT73%2F6Q6YM7kQTDdKtwDQ3n4GZEaOf5CsH1Vr5g7jo4QFTYBrGfDTRKR39VMoYOJfF0svPP2kmBAcowoMTEe2%2FOEEe5Z%2BSL2HLVfozj4OMvONcCK475QztKhL7gCa7klHnbEvAV5FM0jGBdlc%2FXsUj05cia%2B41tUVezab17UUVAZfyaw5BVv4AhM4j90BnE3WYzCdNp3WfRmBKNbH%2BKL1gvlSY86cEGdfzULp8QfpS6hG6%2Fk3sVI3FSEdpE%2BqAtz%2BigO4yfGWqa65%2B8bAKKcHPYgS6HAvTXxUp12ZaPi7O8lA1ipcBgFkVydtpkkS9EPb1my5cmmm%2BQ%2FBx%2F4uHrP0AF6aR43R1Bahg%2BucL5zBpVAoV5C4ZrsJHdUeMbq033m%2BT3ijFTHRcb2JfKmSQitSTc4jXqPR8Mir%2BMTXEOrUyCutk0IkbbFhkbZdNwbUX3OOxQ6pXnJk%2B64z%2B%2FEZfWNubFi7%2BDkhMDSIjMIuw8L8GOqUB%2BmZ%2BjQ3pHuov%2BW%2BwTz28%2Bu7kmPgjIMSRRTmuStGOEK%2BZ1HPe3YskjXBdMkna3J2yyMIexmf7N6jenbSGoyvovjF0sYkcWx7R3y73CAdJn5DysJhR3RNG14KW7C%2BIOitGZM2EFsI45UgrxtQ8pU0ISlIEYlM4TAtHadYNJ1jol74WJIo2FgLNsJxzvQGxFrcOpCvhb3S9BeXVJPyMMVUphBfMELM1&X-Amz-Signature=7ddfbd984a190e4564659cb3110611cd5a17ee5317c9324654440ded5dc02ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
