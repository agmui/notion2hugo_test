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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKUVEZ5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRLl4EPNVKzA%2FV8Z4g5XQ3FrfOcRTDNWq0wkF0G7xkyAiEA3zq5FyUlejmejPReO%2FCzk2Lc67dH%2FlajSyA4i3z2%2BDEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLW11pfTLWi1ScTpSrcA9MYGsXUt5vXqGecTfGGKevhdCK4mW48y9NNFhd3Kbdp0%2BdypwStdGzyYRA8%2BF5syF6zEavfRrU4L493Js9JS%2BQ35TJYABg1aUDFMLaUF0SsP2NSUahl83bXZ7loSYAqjNICbiR6GjAhzRxdLYge%2FvbdxbyMuNeq9MniCrelHLGMQAOrVgmwc%2BWN%2FUUNCFzCEe6th5iq%2FnUps%2Ftf48F8C13Nh801TrQEqqYkaOvEZ8%2FaQK5MXSaGYru2dxlApHU5PXu94iF7QlqVbjMs8AqGr9bNqG3OD9W1TfmTG99RgJe%2F28FMWxj7Q7Ag1Q5IP9lYvX%2BtpWKha2uTkd3zkYz6aSMTWWDCPJQDrO82mfEXgFXZ0Lbr25ZkvgPgqgtHeK7%2F78GqroIhnDw6dl1617TXVDkgo6mDF4N3nmJ%2BLRcOukm3GGG%2FJ1uX4%2F%2BLmBFqVSPr1qBdK1tJL41f%2Bf5rymiLTPmQrIn7nQgNfAqHGeKDk6787bUmEQ252Du7XYzkfq%2BgR0%2Bcd%2BJM0EJfc9HP8qgWybqZwjSY9FDrjzFurrcgn%2FocM9OiVFPL41he50GCA6QW%2BECrMsSxMp26cE0RYUAWSKo7kTjxZQ%2BHpxAplkYUAJlRqOXmPXqWP0iKjHMoMOys3L0GOqUB2YPfLxwf0pmGv4VEZALJR01DUQk49z6w2GL%2B%2FupDlWEQTb1GyCjr7CUvk5q5ESbIgDOgpe%2BvatCgfIGM7iExCAUQ56y1BfBYcNpMQHn2mAJbnfJg4colU%2F%2F%2Bo%2FVFTUIjNKd8h49WS0C6Jbsa9Gur9oWs2u3%2FkH1GldJTfh6IGCDysvU03pJ5uopCI1MeiRgbjxaFuKaVzEbAQvAwlB9x35UiANzE&X-Amz-Signature=a60b55dd89724082c13f4048bb9e4670d6060ed4b5a7131838bd7559da3a67e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
