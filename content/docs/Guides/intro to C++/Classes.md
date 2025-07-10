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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MYAU5GB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2eX0ORCVcxKyx%2FlXZofFj%2Fn5xO2LIhIh%2FKzLDCGX1uAiAeUHNmc2ukkZ32Jq4gJDp22r4OBNBTE3PIhj67gvKYeiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaXWqWMbWshLSUjN7KtwD8dhNXBfoWysBwoBg5W1nlEcixS%2FxMcrOQqqDLEaSIvjMQfcX48IrAFW0LkMyc%2FxmS47GIPSsFHq4JMMNDv3SZdMLKR2mBj0O6b7dGjVgpca9ms%2BiS6YQG71DrTE66Pc2pHZf0alroTdDdNOY%2B500czLBXtt12vQ0iXMQTuwHZfsCyj8YLN%2Bp3hZkglfOfbmQPDUg0XXG%2F6hRK9TykgftYSb1Ql13cfPgy5L0YhXzL1t3ZLefzpjgqOtK7tlCewsqFVQPGA4ZRtD1UrnsgbElXzVYyf9ctWKBHKVvldHMPzMLg65v0IFdpaLpwtjfu5D5jcrBobXIMZFnQ0NSjamQpWibo52bB1KECDkYBEPF0zHnDB3n6SYSDe9j80SSNwKqxK%2B78sChnPlwiJCgqCdiarG%2B%2B3w8F75zuE3%2Bq3COJrVlUCcrgidpLVX9z%2B85FuBLofkAWpjYFitCMhXGBsp96wZS9jB6hwNuQ4zgyE8WzwQGZgOKgp4Wisux27wkVBiESKz0PdRl9oeHSPkFntMJuR8t61R%2BRE8wDtw4SNgD4riDJMlHr%2Fpsco%2BUyUaeGuWi6LZuWb6KJNY%2F7L5Lz7A7TSFFRByeXca6T4%2F%2Bvti0lw4uIASwQBirJu5%2Bkswwyc3AwwY6pgGCXIPIh%2BnKDXllBE5N74iPlfKEhS1ugnyO%2FvLKvgmloz%2F10JnVw%2FKO2OAAiMHmwAiLcWHTT8MsAn7Fzjj%2BcItTwOGnHV9xLg%2BQmk7MBn1GAzKeVJ8ihwWXodbOA7I656O7k2kLwiI6UbHl78mZDhc7%2BStwCC5eiVSuBvbq9ubjLnyhbge%2BKDVNW67Rfcxh5wus%2BqgD0Ixpkdxkz2fn1AVQnlX8tIyM&X-Amz-Signature=0036185594c903e106d2f7014d31d9c349abfb9e75fb243428b6ee86b081de7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
