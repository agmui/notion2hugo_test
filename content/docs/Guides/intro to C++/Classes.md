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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYE3GGT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk6r5as1EpQvvcZGaDSYL29g9seNznMDKD0xmsdBb%2F2AiANG2s24o8pWFiqMYDsN%2BZvuRRX47ntzS8D3oP3fyQQ4yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FepSjkz9DqJU8gcKtwDhIZmaM9NuKib61AlRIn3q8CgygBC45Ft2Zq8IowItjxLT5HZJq2bUXIgaitUNeAwdjDxQeWc9tvjJ%2FeW7HXv2ej78rFpzJhYSfzUEbhbpgTeDeLC6JyKUfkyRihBWdlhKnMyofKxxUH9Byk8w4Z2WPEds2quk4%2Bf4hHoNLr%2Bu5NN6XEq4CBojmyzGQ%2BGRwsXEaf7GgBkH%2FTEgt1CQzm3cV4zbgLy%2BPPSxkFwjj4D9Ra54zuejlF51EhhOgSbRww%2FQIpN%2B7UNzHU5QwjYS2QIodcn9OAg5XGtO9idEiX%2BzxvpKzOR9p%2By8Y4Dnr4NcFMg65cs%2BCjwjORX3rpezyfFjFat%2BluFnYv4Ex5AGWdHztgs1PUdsXVPphD97f6pGGyIswopiT7RdT%2FItIQPvPCC1k0zyP3WrvvX0zafwjw1AeOQo6w2hDtmMz05%2BJ5rsjeBcKFRAmmk%2Bq88yBXDE8%2BSOqf1aqBBJHKHSUjmjuFLs5RERjg49MQgHUbPUza6Sj1GnAHcQI2b%2FLsylkPb1aoi3HaOIOGSgxn1deSGVOJd1hJk8ydqF15g3rEoOn3oicwDGEfAsRklw9dDnOXW8jOI1UCTdFYPkZuFn5L4cQWZlUtLMJh9TGjnYnqAFA4wuN2ZwgY6pgFQmwww0pKORjDK2k5zi6cTrn%2Ba89rlmcjtSLDIxYED28O2QKF0Csn33aycFYIk9HDQBeLdWTyMlOt4EJ3pwL6Uh6109bdlEvdFjfY%2FJZAAqV5KWCtZhLrhtfuWjW3%2FY8yA0vztokC%2BQKTjp2hlcDZl67hWY81aIn%2F%2Fw1eOaU4lE%2BfCI%2B654ZHSBfMy2VMO9pZKeaHgQor1dpM5e%2B4mnu0NVIB1as1e&X-Amz-Signature=40e9cea91170c75c79d1b1c89cc6a54f52214c1b8ed21eb60649ddda3bf2f511&X-Amz-SignedHeaders=host&x-id=GetObject)

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
