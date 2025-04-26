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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADZDWS7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICj84CIQe5dfCssLpHODNCUG2FtHsFz1HA8lUO7z4hJjAiEAihJZ865AOcIOUkTooOsus5fIwIdQD6LH5MvtcVA79xgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOfMhVnPmOxJZrhIkSrcA9uPjUptCj4oYGvWZlS%2B2PdhRqW5Ak1N5EM1wH740uM2sMl6W7qviUCvCiBq3tAYgztniz2fimbxnYo%2Bb2GgZVdq3Yp%2F9LN96UQxJQn0b45a6NAyiIGt9rd4MubSMyVyB24oAqc9F86v45j%2B6hHItQBrPYQ5cqQ8%2BFU6SOa1tchGq6XQ9Lk%2BR2E3ZhsTR68RQrOhNqqyBRaowfeTd6S2M3ltzn6c7ed0Ol8cRKiYsMDD%2FU%2Ffccpqcw4ucJxP%2Bv76RP3Y%2Bq%2Fg25zvmkQIK%2F2onwEWfxLihyU%2BtMVY9ZYqOuI5fEzsk0VNSGEWtkRdGNenbiDqREtZM3Zu%2Bos7NKP%2FE6BzEpV9NUoL94Mylq%2B%2BhFZfSbzvdkNx7vNewPvA5q0om3eNo3WuH16GIw0t%2BDCCdiE1V1G9Cd45MB%2BpzJ1ytrvdX284nYjYW0cYQA4lbfEQsmeSVUuZ6YGiD3Fcmw9FvAMESs%2FBVINLdppHGk0PZd5909d6a3q4ghznlP%2B1D4uPonanWBfSmWktiA0Wj2akOZuFbaby8BeOXKwvfh7BS%2FQz%2FrVqlN5%2By%2Bpw%2BaQZXxK0xCHBpTSUDJ2NXgforFv2y%2BgsSHM3gld1Jn4NKnE%2BkICumr5oEO66ZQ4BRm7XMPWDssAGOqUBcxg%2BWlY3Q9xUZuoskLqZqOjr5ztQ5uB6dhODh6ycxufgh6IjXRlFpA1EWbxTM%2FMGvfG4nuelOCL9gmVgsanTWc8IH0MXOjPx9rL%2Bma7v3tLXSvTPbi39YeGH5m0n2xJSeshh3jvNaJB5kItffxwHdysU%2BsWbvqhFGyMOCt481OQqminfDl0nnvjwbZkx097Vb8epDQwf8blo9PkyHJtYh6Qa1lSN&X-Amz-Signature=49e5c13bc51ca81565f3c706fb317d0adae9aaf07c356c866a1acb043f63dff9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
