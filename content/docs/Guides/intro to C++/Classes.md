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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3IPTCV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHX4VQWfbmmUpyGbgYVLHVM7oCcjvWA%2FEcH2WqFVlV1ZAiARJNjXmsfnyt0WQolTb%2BsnrcKQC6%2Fngr2pjo%2BZqVo%2F5SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaURsdVCzQ6cfMqGKtwD%2FHTKyN8T%2FMw%2FxFWWgduY5aA0Yb5v083IpVEK9TsuDi7uH2dIUx%2F9pbEFow6ah6vj6%2BAEreGzjozjg4lE3RsvcYYguw4ncMuV8RHjofaQoHLr1GRufPz3rLCz%2Bc61%2FIc4UpO7BYWAzbeytARZQys%2BMsfHbKRPFApwgOx4WIUgbucwIJhIyUsNuVdLjrdHiUQ%2FbU0nV1YrFlnKOYiXTI8wly%2F28qRNAqJq%2BqjY2zKyl6r77XlHFcyghpqlXUySYUCcq3NUS96eH0Ekl1VibYwLF7kH5XQ3vGgrRHFq%2BBTxKUAVlfoMqEgzeavUcdB7Sqxkt67tSZ9lH9ptOvmHi%2Bcgm75dZx0MQ%2FJWDQU0w%2FHnX6wTgPVcf6ZQIa4Y3LkhMMYMePOby1j15Lk0LTVnV4PkLhdrQ9Tuh4K3V49yvc%2Fm3NnMLg5jxD3SmWHfGmTzJ9d4ZhuYPdQcZstNo4HwBmdanTLwSfQRospi5dGA44aZh9CJW3gra6%2BjKL5xLrg%2FpQS0G2vn7uTiMt3DqyGYSdR9JPHh4tAQu%2Fb2NYDm%2BB4j%2Ba9e2R987%2FZVDn2WWL6mOECccCWW630ir%2FXunssROXRycnAe7WYY%2Fdg1fEqynJrO504yBNsr5foX%2BTd%2FYe8wxsjTwAY6pgFfnHSPQDUptvikIpApbLHheDVAEuDoz6mzp22UeoLBfdCZKuOaJhlm0aZHjHxRXu7UM0q6ZPFTbwfvrbMid5hFQvUQBd5SWgf9utkkfvvs9F%2BJHNMCIsI6sK5ZreoHBEcDEeCsAoownxDHMy6MjMcmUBQXaYjXKOSs580l9%2FNzH%2BhPm6FiW%2F1gxhxDm91bSYy6%2BEnrnP5EP0sfZXRTiUxx8FM204FY&X-Amz-Signature=0d3305bd7e61762161cb4b3b93b45a2e911d08a8e472e05f00a81a665dc9b616&X-Amz-SignedHeaders=host&x-id=GetObject)

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
