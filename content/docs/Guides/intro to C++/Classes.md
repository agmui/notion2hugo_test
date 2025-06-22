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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHQFAQP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3x1f1Vy4B%2F3GCIWP6I9N9%2B5UpKFQPsGW70ZiuoR%2B3VAiAM%2BjNpIhdLdvuSDoBYk2BMfi0KpXQtaTGTHlh8pilDJyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg0ukPPeuF1MFpXLtKtwDjKKTdB9dLEUHvi9SwfPsuxbIxxCZn88aPUXLcJUWQ2giXvp6iy1IwbTnQa2O%2BJ1w2ki6NiknI5%2Biv6BqtPyZ2P%2BzAzq9Jy5Jo5aHs%2BDtp0RO27FQtpNq6HFl2sktcCupF44qzU%2BTWnUQ%2FZ4cDr4OpxglAeopF2vAmVGhz7W2NtGotp%2BTtHbq5ucfE754mHPDLEpzLQi6dVbnGLgMiTwlIOClJZQ6cXD0jK49bgJOycw16nux8ZWXXnncOPosZyLftWUXJe34pg31QhpiKE%2FiJoh4Cqd3GjomL2IEAzRc1A9o%2FRXaPhORTwqTRjNA4Jx7NmvuyomarmLUSd%2FBD6OABHPEfcMnYUEXJ5suzMo8%2B8Hvy9ULLl2%2F93%2BkhtzbKXZ3pKRJNDp%2FWPPdIHcw45MCl1GeOdNrLgd1QswZSzs3UMgRE9xoyNcnoz2PRoAwIlAhZ3IAJ5DAcCViyAv3ORRbV2CnzdjEuN%2BXX2pOien3%2B9xcO5Sn4rvD3HZM4DdYVe7%2FTj2AV8YuhqIFz6%2Bk%2FC5tdyfBrmM5P%2B7Rc0aUjGec7zgwtLfoOsHomSk9GZBNCrvwK7Cns35MqUW7cqKK4ufCjTyK%2BOxdgaCZnceW3ZHSxuZbk2DLZ%2BowLiacrLsw0pndwgY6pgEzEHmBSa83JMFze%2BVmGRjLODS%2BJdpwsGsFHRp%2Fw3HDH4pnGdHiu9NASMbUI1IKkBYEl%2FXkHxgSS3Y1FdYerhuQfqdHD49rgSR99xiENd2CiT6UpNRR1pG0k0Pj5pGRHxjzPany4GIuCwjmFzQGzmOBw5I4rl%2BWrOPGbOQz7R0sCden3lPWOlSwH9cuht4KZLFir4keg3rjuHjyw71%2BPqyy16%2BC8BYr&X-Amz-Signature=ba1bcfa2745fb24e404737a28606137acc0f523964edea58f374c64ff58417b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
