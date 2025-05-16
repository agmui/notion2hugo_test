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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TVXZFP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbb7JyhtLHqotUCv63RCpZ7%2BgZDqWc9lsnAwPdCFoA6wIgF6qAakcAJLGJCDiJbzNxHiLOL8o1sq%2B0EZB8VcZNOWIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAzfqaZ2Ens6g3jkkyrcA%2FXtVzYk0eRWSe5subhb2BQp0yHryQpIv9omSwQP5EXbhH3%2F46F7rm6V%2F8lOMgkdSPn8WRtnkkCBt%2FkV4rwGIYFo5nStaj%2BD5wmZCxFbIqaz%2BuLjCeIY3E3NN4AmqLraCAp8jk8zKSe23wYcPQnwteTv6FhnmDpcxAoqcSE314IN%2B8HwJjrm8xrMv4F%2FwTturBePZZFUbey5zHej%2FU0%2BdR3mahjj9bQqkECQw1MR5RpIWb3zj0vgBHcOdFNIlDIpyk8s%2BzJOYEuMzWW4DJtCUgIH7aW8vzMvuHVluGMYf%2BG5Qf0tMN1kt6ossW8BFsYTeo4W0u7VLlcOgJX04kF3c4Xq43RvAuP7edRieytaLCwFbO%2F7aamwvKNJRdv7lBv6Et1pzKfvUolD5iApO1sEZ77JLENyHEZHTFBPkWBRk8jXcvvkrd1pw4Ac4snio%2FaQyZJPzmcc%2FwQfYteTbeluxjQIdq4sR1qscAwtXClagDXNY4GccwHvTuD2PjkKo%2BarMz9%2BQBdJGT9mGK2X71b0PbkJrUgtXjmRNjxxLm%2Bz%2FR%2F1PLbL7BO1ejD1GGmsjvHgOTanrxYr9rhKpme2A8%2BQiDMev%2FzCaKR%2BtjNwc%2FQLG62KkmxwLBvVQTPttxHfMP7bnMEGOqUBhoNb5SKmv8mxjo5pBXkf79TEcFGbxoxtm1Q1NbRS2z%2F3s2aCUcSabbsn%2BQouxT7VwEOxTJsx%2BjdHAQ6RuXqPzkyPCwx5J1EiD3hZ%2B4PzaakmE3prfmIm%2FXfWJfApUUKownPwPzrPIsoe4WMnPRzWGPiWSaWPABg17O5SplutGwaGFB18a1zAfaghagIfFuwyFeHUyhi1ZU4mwIMP9o%2B40vjakDe6&X-Amz-Signature=8ecc0fae9b629f42e6f5d7ead00d91c4a8162c7463c4cd6d3d2573f027799d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
