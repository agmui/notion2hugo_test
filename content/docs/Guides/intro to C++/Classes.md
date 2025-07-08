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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHEGGVW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxdOEa3%2FVEcz49urO1GCj8GZXOdGqDcQJGXnPjWFT%2BPAIgB%2FDnZn6sC%2ByBMinKI0Slvkep4B6Seg9m%2FpdAU2YXRH4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCshgaC4AxyKF7Yy4ircA%2BThTpgpdgvXTHL9q13xO9wFXpr92fW%2BCno99R6vwJbedzInbtebeSWp2O8U7StQ5ker4kgZ%2B6kWkXEqrbcHqhcSluvFS5%2FZmJc5ZtJxbxQAd5UMOHnRVTA4rZFSgwNrXr9zW7N%2BzxO7Bez9GrwoE1BR7hJYwkVhKpyykOSK%2BoUGPGglirQ%2FVPsQGOmIf%2FvVOxmphh%2BkRj%2BfaFn1A4cj3lDSKnk2f%2FnKAiVpTK9k3XxnSqcvsY%2BmI21dSPtmF4YTr%2FCDjoNZNtvrU8Zb3LKSIgvq83bVJdKciEsmj0K0uIiRKf%2B6Kjgka6CHUbwIQ%2B5dBwISK7LbNXck0%2BR12EZ3uYQ2ZY8B%2BLlBtVaUr06d2%2BORDmpMufVnmwyxj7RuAIiYN1p8F1vg69kjrgxyuton2jlL%2B3I%2FWkdmBP35NgUyF%2BjBVz%2BJBjo3KjDpYcLjjaIzaNgvwZ0k5tGIqauJDun5SxIEB3NaUgxTnl1lvjOytMXsTantdpTBwK4esshzxcJ2Oy%2FneFLbV%2Fo547vYqyYKxnorBPvAOFbnp105JtScJD7Y6k3s2%2FW6CozRRmmL3JQMS0nN1FnFU%2Fu4FIzKZ4Go5%2BHz6tt26Fb9cLniQyhtnElXNskmgvTNqBHbw9SMMI3VtMMGOqUBDpyiICAyX94IS6fY6K1wB88QWZ7J%2BcW17wPaRVcQN%2F%2BaqLKkiDsXxrlKhZVgcxIlurQthXFXDQ17uy0gdHMwOoUefFWAJ7Z2lDloAMStHevXuti%2BjPbJYLyVBx0wsZjgxgWetwc9wfRvnyvwtt2kZim0yBqhqBBx8qsUxOqxHgI4ponKOdKYAVrnJraWp%2BDM0iz5gquP4XDr9CSoVlkbvNjoW6Av&X-Amz-Signature=5fd62604b7b1f7c133d68786316571b5cbcbaf02cb1ac54789840ec25f3f6079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
