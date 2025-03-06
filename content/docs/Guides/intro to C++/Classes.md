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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAZ4H6EP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9oobkGyzAlxcs5wKNNKAtgYRmVh%2BbeUGlIgc7GFfUwIhAMjw1uALPXg5u%2BjMnErmZXotWBzeZGvaf0hYtcQkoy%2FSKv8DCDgQABoMNjM3NDIzMTgzODA1Igyihde3xhCGnDc0uk4q3AMiNG%2BeJo%2BzCTnE5so5PidtAHR%2BtTEyc1zNI%2BVpgSsLaqoz4Q30KOEfNcuQOVx2WLGQ4CNFd4XsN5bFJf8w4P7%2BEnhiuv3oClv0Dpca65cbcjbrrFW%2BcgAMRBsnYa91NmvW2LVAFV%2FK8RJfHgmY0tPgs2vUUrd6cW4QurH%2B1rwZ0XiRSZwDyYn3Vhj4DvYh6xZkuy%2Bi6SIK%2BA8DYB4ZIEIxX8hXpjbI0h9zerWAQfM2z1szSowJUlX584Hrog67BAJbar3tqBUZnB%2FnoNOPKFSLLxpcGh9x1mBqeF5w6fnhXw2nlZ65t2KQVK3hVXqxXGMLqUHUEYkFsH%2BeBFXEY0kLsi6kTBdD%2BDlC6a4LVzKoCE0ROLyWNZEYUlvWUNWAFqvURCLsInjPjskZUnyK%2Fy3lBx8p1pEr0sjnXX6AFkCBRkMPMMHpLT0rFglD6yjQhkWbYCpsXb6u3hEdw9PafZDoGJZhXVJUL0yM2ePLje7yuC4gGDBxeue6cctcvQK6Aoy6%2FC274t3ETIvyn%2BLNqZI4BcOTt46YVLiOvCAHhKwngyki3%2FXiW6YQ%2Fjt%2BRNjvK1tf021LyGz5RWRRBUn3uUnUTjT%2F8oIaOHpUVHjAH9X9n3qlqJto6TgR8xtuUzCmyai%2BBjqkAVozFQf11zAkUEZvmb23gnv%2BnOjzcLb8fMSoQZULdKiXZyrvrvlifaPqVe9GY6JJhMZmOoVIS2p0gBmBojQDzZxi%2FSspoJOGIHJYDeZzy3incOPjbPDBSc5JgOIbOk8Djvf7wBzrXLtK%2Ffr839bGJthFHFMqrPdPrQ6JasCcTKDCJhLe3feo5wPz1uJP%2Bo3%2FcS7LQkJO5Sq2AuWBh8BuMsHvTErF&X-Amz-Signature=181b3870e378e70594d77af6351f19e2647c53e283cc725c2b6539bef771d798&X-Amz-SignedHeaders=host&x-id=GetObject)

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
