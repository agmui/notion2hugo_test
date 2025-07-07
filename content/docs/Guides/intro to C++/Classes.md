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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA6PR7Q%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIB3ewjquX24Ht6EK0kxHY1BpOS%2FhoKUj0KldLY9SRdlpAiEAsy6delJTsHN8TBNWMhvVjnTRbT7c8qfl0CgoRaB6dqAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBuqrk9bUI7JY6rvZSrcA%2BWhJWPFcRTF63WBgpsIzynpiLSvBI17GY9mwP6mG6OnKWzW%2FJsPGKxTfofCYMP6ECItba3Rxw%2FgHERiNjBxJ%2BMMNEC0mwlai%2BWXtbfuIpQo8cDxfJxxu9TigsQn2xdiUkYZ6fdDqjMlPGoMkJDDHOhuFa5e%2BkwnO9uNsInsRLrAcN6Y5r7%2BYHBmdcxb9RLeffRypuVBSlNrYxEXOpR7LWiK6b4Kw1R%2B1wjta4d4Rl6bssfAgmN0MASSPW4Cj1rbfSm11ooCXtW4MEfYiXv93CiO8bRsNvNCYKpGO9ld8nD2sd980%2FEe6L4aeHRIzDX6Tv81JeQRYH%2BrOA046%2B4pgnzxdkiAFJjRjcc56DKJt9GGq9SMjS0BbIWJ9Z7FRFJ3Ibib7MQK6djMq5nqm8ftGmqp%2FFI2Ipqr8JUtB9ji5o0PCr3h3ZLzhhiM6BZvWJRkB5OBZix0gJ2y8iv1VJIVFvV9vNPSzV%2B7xyf5U7BGxwmsTVT6zYWF7KAwrOxdwocwSKtyMThNcLt9gS8FdJ18yD1gM2c1ruIYU8De8d3ohqGYwQdXKP2I7rLBJsoHlU3Fzz1wv2Kt5MPh82UxlCTZ1wU7tRqUDywDf2I2VwyUGnu5A6YU0gIhkjsE7kOsMObpr8MGOqUBaeFFvrneyc6pVpuPuagOFK1C1IUp5%2Fkv9gMKj9WFG2kMBkcNTmUCJ%2FJHDWgxpcfDh1ZURE0SgLJHMyHuAd1k%2BTln4kNia1zp9iqwn8Ub%2FkjTpXSWs34zxuzHx6Wm9QgwJQQ8ItrUVs7ocEU4m8%2BO%2Bky%2BAl5oZGIHr5HH4ysRAml0OsyJvX4QqH%2BFYAGS4gbrL8dgdovdA%2B%2B0Ts1Tp1Anz1gBx%2Bab&X-Amz-Signature=10eb0bff0c55985c570983dea6bf16f12be4b93e70305efb4c152cbd48b45b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
