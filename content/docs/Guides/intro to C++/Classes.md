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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVF5VDQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVQwiwN8ggm2g4VD03cKJNjpZ8RqW5Kvvsk6Ut9hzQmgIhALkaAPxXeaSx3PEsdL0zjLeiewBgSr2AsUqZ8EEUi7%2FGKv8DCHQQABoMNjM3NDIzMTgzODA1IgxJtMMohB5Cdnhudxcq3ANAZqa%2FR00X9QKcvy8YJbgexli82C%2F%2Fl1bm5MS34rA7Rnnsq4tvLyutxhoZ3j9l5pZJzkx3IjvFA84jCllB0ZmEft3smNWzCg49%2FC%2FCkWgeEZUGLew%2F8eLFYmSKBqlxALURZccBA3e%2F9jNt2LAL1wbZDYcqde2679vu4A2yrMMznhWDuVHx5oP1e%2BsGJWP6WWy6ELirp%2Fn2jiTGwVCMwf9fWEWea5wjCTn%2F%2BkvXGYRNxDG247wTIhdWmUuFPxIkA1vIUKmh6ISrWjs%2FEAtcL7Xft%2FZQXjZItnx1UdKLEysWOVmLZup5m8yVycqPQREavfyn6HfMkdzH04b2WKsQ%2BN8r1618chnWOKSUDxCjeIjwAjxWH6inRKseP1GVOW3M582dEDIwRDvmXJBscSotKAxQvyMoaioYMWqqy2ZlZd0fAiYOZyZxaaCXTXnamh%2BNwmykJdb9cIlI2GIZpvc%2FGjT%2B%2Bd1xjIfaa%2FOYUUTAlR3xSlmJ7%2BG1DEvg%2BAJhgHGdTLfysyvlx%2BqbcHjRrpF2wbUi8jTP8LR32etYoiAZF88U7KvtpuT2TUkIv%2BhSW4gH%2B5gJOcMxjNc2KD%2FUc8kHUs1TYTXfbqzVkJ8zvUYWJ3CQqtWJHtz3lZpcSw0RlTCgitS%2FBjqkAVj2n8s5dq8Yoqus0x0P%2FO7M3XOh8QErHNYHBsY1pdXry6OU4TwGb6AmrNH81zVXW0siaKcmTokxSEb8jcMIoeuxm%2FvsAqnqW%2BfpuxLFAE%2BP08rd2oTpnu2rn5Z32s8wQq7P9YiLu6m0HURhC1%2BpMTW1vQV1GmObfU4%2B1iqVOwTpPFNdhU%2BIEEiW%2BNuqTH9PM0AHQhQWD9GtmlUTq2bU2ojERjiC&X-Amz-Signature=751f19781cf1723111fa8563bb6a948c5e3725f7a669071897b8e874e3b9e1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
