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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z6E52MS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGasqkItmhmd%2BHw0pGFGFT%2Fcg%2FNRk5JYuwoGrwnR17tuAiAsQ7w6vc14ibzqnvsRvGMDW18q8E8zKuUoVXH2McdkeSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWAlkPAuFHXpUQI2FKtwDSHya0Ef%2B6Z90ZqUhPEOmR%2FRxIcIcXPfQHT9ZlooYCLfqepkBGipUzDlASsEQA5KPfbS62qvtSrkhoks6LEO2qzc2VEiO5gmkQMhmcyrHEpHRYCehYoKiRnVYaUjYSVuvD3qhC71ZmrX8p1nCA%2BsQMadmDXWfe0epAlkqycKsa8g8r8WKAeel12e7Y0HfI1SuEw8rWPL5IzrZdYlvAQNgAaMjuyuSeerAb2z0E7oDXuXE9wYQwAKk6TyT0TZolOQywoV2jmuVW5vWd4FXZb6c5ImXk1QpEZUixojSmWctGeHfLUc%2FKpWr%2FtIG3GAc2F1HHVNDZRzWrQQCZi%2FvR0e%2BrLIqwcOouSsHbRtbJpKVw2jmqZP3FgavVOI8TlvanW8SAgUrKsedFAwpnh6asjPS3WhzfLgU6qQQAoXNChb7yusoCUfLbDUAWmvvMzx41584%2Bos5hXOoK3q8mfZRn1Qj8%2F1zboE6y5IIl4bs5bOsmhkN%2F52wj7AaywZp58dqO7ydzJxSd%2BpbKEUsIuUQ2Cb7MVPfziJsE7xmq6Ca3ipwnHZAceRKVBbiUresjsZcp30eM5Ryc%2BdwGnh%2F%2FAjan4Ft6YsPOC4rnNe0YmeYqsJDuJzizFFEG4teQrdp6LowjqHNwgY6pgHZWmkZ22O9c%2F2ClGqLYG3UWGK79PqX9Sp89i8AfVOKHEMrCnyB%2FHhbjXktLFo%2FfPYvg5S3IOmgsbne%2F7min6WXEFivQNZqKp%2Fa%2B72vjaOoI5R%2BnZqa%2FpWW0V9%2FTDa0ICqhuQA%2BCwsXxpFLfD7SwxjybGb1aalshtyoNrcsv8e9w8Ibqo4m0wSpVvY1x8qunensvDTvR5KH7bcREoD9u5vAqCQxE2wQ&X-Amz-Signature=fb18a8851f41674899dc77b6b68c80a5cce6e75a39694a3e081941628f49ac8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
