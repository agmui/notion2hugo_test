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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y554BID%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIZnpR3VJJdceeYqiky5AI05XLMgRzEWEIbVY4F5nHrAiBmeK3NNcvCDsVv0sOqn%2ByQ1qGsjHTSeWaRMUU%2BEc2xJCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01ZrYm4MFZIM%2BDVnKtwDvgcSJ9jw7Jyf7I01TbH2wlugybqU7sC36oW%2BWw7zyK8qkhh%2BOW4lztVNpaTL0YBc89KYn5DOf%2BsPm2yJEidVyf6cwgZfu%2B%2BmtBaVNXvLgWcnA4PTuL9Ooa43XBTAS%2B12wihVlmnic1LRMGOgO8rEFrtjWN%2FRGmXpMHVhZVgXKebHMSZhtsOSaSDo2saLGbpNlZWXtKSdwI%2FO1CYVRgo0sUAZKz2%2FaK7oVIgXeVz0MSYVqx65AXA6PQ3BfNU1qEZ7XMsNYneMT%2Bk5iesw8BD%2BBxPkT6G09pQT0AnuR7cyzEymau9wAA7vDp%2BDU0tVM6Ez9Y9RbMj%2BF1YEd5XV2Dp54ijIyJnz3T4PeZxwFY6W0ZxAKl%2BxayQS57MJQdktHNJVqRqUOanPVMUnnQgOJHg7%2FgRlYNSEB2LOlNzIqohpSxPOrm2k85diEX7%2FyttjYImZk845k7yOupD2C4rB%2BNZLeuOKuPS0Jm7k8dYPa4DmREL%2BwAY3rr4z8vYQXJfyJ%2FVeWWyrFrQC5RwwL9LELATEPHuLYRFQNyN1GhePKDV7sLSlkIGWv1erNP2Dr6tpVahRS6F%2Fg8bxgP1QeHqRgFBS8ttM0cv0I17Mlic04I5Pw1MVRq1PUZieGmeGbPgwla6nvQY6pgHGx6lrCgUWu73xmRLlpHWKt4yrQw%2FdWwravoiwbfUCEGbHO%2BgRtAQTuCF5KvQsOaQHsDykuWtB3n%2F7J1XP%2FnqgvXpA9ZdHUmo55yjRIgTFPOyt0sk%2Bo6M3lnMmP7t%2FWWf8XiVFv9K4vX5TkfYgcZ4MYUuCeaCxGih3mwBJfopjD1RtHKhLVhMUDMkayhsh%2FUHISXlAo0TDXYlsmRNstekvxwu%2F8dUP&X-Amz-Signature=5b6d8214e4b0c01a72b9d85799797ff23dd75a80f8d4bc7888ec0166c61bdf96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
