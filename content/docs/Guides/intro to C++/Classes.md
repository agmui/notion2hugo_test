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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WXMTEIC%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwp1XCVBlOkImM4pIEM%2FT2ZUVqJ6wNvJ%2BUuLrJmchFMAiBmEH0SIUr82r8HntDg0pOrWJSuZq%2BMMulv6a1A6YwqfyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrKRxVF3uVjGJpTSKtwDpwcU3yMXrz2ltk57qd%2BP%2BEyEEs7myL7Slhp%2FU1C139%2FTsp5pTutPa38yVIvH8Kwe4MQReU%2FC7cTXJ8tUzpYa1utc5J8xwXVFdgXTv8dM3VvUeb%2BqIh%2FPv3UPvPjxKR3vl%2BSpXAyjzFH2yXbhvzn6BEWCEaPBIWYW48T4d1uRzD2uuvFqIF5jvm4L67Bfkb9a%2Fe5tnlPFiDaXuuQBRlRr6xFBo1pOvjWP3rVEPyNwLvKYQy0BScj4Dd%2Fvd%2BJTWpo8FNkE4K52ekSu%2BbYMsPm%2FRGPTtVGc1AUHuLQRknCk3c%2FiZ8CqW9jp%2FDCCJ2Pu45bcmgV5wjnLPtAXdi7%2F31IqXL%2Bd6NBs%2F48E3XuUiCxsQEshSBPvjQotZOGzngaWclsQFJUU0AIbcNpEmUFHIHu3yk%2F1amSlTu%2Fvw7icDu3KZewDue0jyZaPv%2BFQYPApuzkVl4ZkCPb96TBCgAf5X6Jpsc1ycaLZ1IXMX4rZYFjBolMZEQdlZ8WbFqAY4gXaohzhwNw2Opiq7vUyp95hEfHSOBMyyl%2Bhq3boExZWUw7OqLAX0q8%2FI4cyDKHCLL86On%2BnZN%2FNwU%2Bt5%2F%2BWpAKB3p1uUfnGgiMKJEYpwoZ6JvfHJ7mLJac8Rz8t09efE10w%2BuvHwgY6pgFbUGy8%2FYhekcfJZeyTnx%2FJUtmdXtfJAkpmgyrjAY3c4zfNFEAR8QhUGCtYUGk7w%2B8%2Fl%2FmgxqHDbL%2Bw1aWoLNhmDisbp5KGGoBwRwyIfAL2PxiAWzr5Rp9AF75vqwUfrKbTJk%2B55kNpjDDH9gOALkO%2BcmvnYi2I9GWgClwzo2%2F8o8qENisSePtLyx7VOkiohx%2BonSTGp5pbiMagUvB0sdW2JcxCohmF&X-Amz-Signature=d579cfca8e2a2f6649915138448883c3f0e5d98fbbd8adbdff9f727ec05ce51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
