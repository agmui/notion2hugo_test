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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5SKH2UN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBM%2FvW7JS%2BygtAx%2BCpQXiaS9BMTjK5gnUdJu6vmeSaAlAiEAkuPGa8b%2FcYxLzUxIDQYmeK1akWm8l0H6w%2FpYJ%2Bchy2wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGGgcYVLnv1Nx%2BEcOircA5Rtb%2Bx0iQTrAp2HBpdkgwxsAh%2FBpxuSyZuSkma2RHAP8sIKoNZLDPFvAIOBx0DkECV91tDWyvWyBY%2Fkv2xKUlaCNbcrL6C7LvSRr43bch6%2B%2BhJFi3fq9WoRKXQeiub9GdGbhU%2FR21%2FZXCI5v7E8DlSXy7Ed%2FwU4Zs5kYvG9Q8DeFXjRWYLtiSrbcPjAtkVfPyCqTJr8qQNIzF9w75rQQg3j1NZpNVj8MyuSeKD6YR%2FtPR5rzY3UUp%2B%2BfmzYNVdiBiJgJCfhD1nQ9obizjxs6XOg6%2Bqy4Tpkmj6EbmY4NSvlBFLg7wqRIwv4ciYMQPnbeoOax0QRE%2BEgDmdG3wJmKP6rB5J09mNb%2FuIn4wXa7BKkMvmtE5Wcw4n1V5V4AxaJox1acHvA3cQ1kd8sN1xaMaHhjSVFt5NTOt%2FdU1XccAcU4tG8IdqMNWF2kSGYkUkf4ahmDicfBSgBJYKbAbaKhoGq0vqpzF4DCT3pTNBAf0l9sFqcQuC4TRS8hLiMQ3b0UYFXN0cVY4QEhc7sah3b14bxeHGAh%2Bo8GWn3A%2BLe3jQPeMqfWiBE6%2BD8P%2BqSGezT5ke3XtQC8jPPAFadqEGF6IfWd2pjIlFo%2FYk1MSIg7If9RNdbuYtpA%2FYxboK9MLyP9b0GOqUBEPjb1XQjPkbmM4QzSY5qyVaH7yO6MgtvIENH29NJJC1z7epDPiFUzZ2%2BQY1U02escZP8wIGO9bn0NPd3BV2KqorMSLtq0z10kMngUohpDmItGeeFkDKwfIVFod6yZi3cD6205pYfPHg6qHjjub%2FVjTFbsZvWdWRLi6hyAa%2FsOJIrvo1wSO3d8XRHX%2BMv2U78Lhe7DH9QaQI2BUxP0Omyl5olfa3j&X-Amz-Signature=b103383bd5e6dc56ec26409c76ae1dc68acb11f31e2853317b3cf6b0cace84dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
