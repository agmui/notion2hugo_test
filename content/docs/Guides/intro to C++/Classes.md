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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBYKMYG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmUbnO0xVH9FbVRqP3b4ruiqhwsKXqQQXSuJZTFTltcAIgYOlZCIbfL02vivyzwRL948td9VCPP4fbcwiQjGx%2FMxwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKcjRj8S9vWgez5TiSrcAzEad0nINc%2BdOLMTWoqYfYSfY4eiekyNgIcI5MG1J0F9r9eOvMrcKDjAxS6nk1evhEa33qf4m9%2FQoX9sEmtSPSK3uV3bftgQ5zbV2Gm0W8ZaohZsBinYzzT0w1W%2Bjh9DwBQ3wpJiv2m3Ov8wHYDWDh9Yp8wZabpFAULO73uMQWVEYQV%2BMWu%2FHbCEDVtwL0NOnyqo1Gz5qVwMAPrt6NpTzo1rHCn6ynEq3Gh0hAwPzLL9CBEa0JUj9SOyy5XEqVf0gU4RF4r2Ih0JX5lVPNBKL2QANM1RROPWehn42e7Qroj8wcewbWgRKW5BNx5V9dZwtkKH167VpDpJsAqa3coorJopqE7W5rupHTZrJnyNrucwEttmXMlgJe7BSE55G2Q308qGEn7rfgcOEqmkAG%2FLrp47gJLun7yPgN%2FNSY4zrp0tuzUZBfixH4VodQKJw2QvhIsi4LYb%2Bb6quFOguYiZhR%2BtrJHgbk%2FmCvbZi%2BSelGxRiXKx%2Bt5gYdGy5bUIfC9LlXP9RvHwxOuHHhkAeB9aeavr03qsxZU3m0dxR4PHjeoP8oKlvoFoq915nw9vQfool%2BxJHqaIeDrod8q3yg75pRk9tPk7vOb%2FLwyYtRThSOMOktK4CkjHSb3wPifAMPGj%2BsQGOqUB2yoAV9KvUzBqQXbb4jtk394%2FMP0Gn4TVDVq6N%2Fu2VqRAmEQI9DQXt9WMYQGZQdjBMBF%2FIRLdA356hxb6WNEx1LZG%2B1rfP2fi2UFfeI%2BrZKTD0Xz1AtOm9irohB6L1oQdMqgmfhgpcTggUtz1qYp1lgIrSEOayvTCJIkueyG5loZ3hpd7%2FjZ9cF44ti6p6A73mPBXYAYv7HNzUS%2BfEz43SY4Tlwb%2B&X-Amz-Signature=f07217bf2e4c1fd0d8adc45199b41018d381635386daba0707d863cfcd05529b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
