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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOWRCJ4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIG%2BGCd7fh4TlcnsfjdTws%2Fd0biH8%2BUMpsiOkiT%2Bsbd7SAiEAjLct%2FQW6%2F86NBOcDdNVnb%2BLLzeN%2BC7S6RUJKK%2B%2BX9JwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU5%2F3MOHJ2MWdQKCCrcAzPlcRzgTTJTq7IBScYBBDKpyOoIp3%2FLTWEHmAhbaCAbZu5l%2B6jvtbUbWY0XEZuzjhIuSIOcrSYVesXQenNMvN4lLrn5QVpOv5CW1ZBG7yo%2BtBBb6lqO80heDFy%2B3%2BFrvVPvFxWx0IQBCWMapNNPmphQFAU4SDPfUnMHfZumeNxnmVL1bfV%2FdZo4B2XzP%2FH%2Bu7%2FFqKujHuhfsL%2FQdwSBmWGb4XIgXJc3%2FOTozE7JhmzWf99lSf95%2B8wfPubts1GfGeXFFZSBTMQdeaNXnBDw%2FtqR2JihJAc5IoKC9YQ7%2FZz4Pgca7Ssc6tLpDe%2FdvkVhoWcdLU4NEg9J1KJG4nNiMFGphLit9mzTT6Oa%2Fh6jNLVY8zKJu0xGbuc9YF%2BCZyK4d3XiXmaMC9z1xl9LiLjA2ZmOtqoBi7qeL315%2Bch1HjQPYbjDrbSG0povDJdXohDPYCUz4J1cZJPlFctOz3iabMQiihzUVxTdQ923r7UIpsIHNVnUB5rkKZTSSqsmqK9b9WeVLFQDKZz0Fj8BfuRqq3%2FfhZWhLqrI5BvFMT1w95dZyI30Zzg2XUFdPVd8qATuffvAbjkbSWzWoDGS5C49XQZdQl2goAjP53TSybwpHyJYgN63kZzsxXdNKqnpMJTgtL8GOqUBsL5lEWL9gNSvKYfvGh8Xfv0JcNqi8CWQZxwYwJClBGXddfJEdYosO17YidyYZvTquITsBXRPkylJb5JpQ1%2BehM8eZ6WrLzlHFHDVVHtEJM8I93h2q96JHK41nJp5KzOvhJv7ETX94UaYxWZ8JXmZxqEl0FQ02p7ssGXLxGslGSytma%2FuugGkM5phV9nxP7DApaby2%2FY37VzuQFcZPbGGRtHN6w38&X-Amz-Signature=214df9f69713966258350a6f681c944bf554b8c3242869c9a69546af183008e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
