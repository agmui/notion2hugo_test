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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665472CFTZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCUk8RV9tFcPaLt4yvTJLjN5dbKzTUod06N71zaZ7DQTwIgGgVmhZCn5W9EMwThngQF74kp3wmytSh7hOgfZG7FumMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMGg57aGwMDvdhK4TCrcA4uHOFRkYIKC9xsvuZxgdP7bxpMw5%2FKW%2BrOQgWRL72HCpjwGZapjUKMGMvy7HZN%2FHTU%2FJQ5f9uLyEqNx9Eo0IbGFOTqgLpyfqRkz2Ubd6nceWW%2B4Lpui5D%2Bl5gkTb3zPnX2dh8mpSJCiHeTLdsFjn7RDbfvpTDJn5JgsaUkNnM9h%2FqERvQ10jw23haop%2FLkLr1OgaZ0BJ%2B94YUahhMuI%2BNimoNB6qSRY15UVTsROhqWhgUTh357FuSAuD7udYZVoAX8JaOyfmDDzr3VfWofI49tnM6kpRqG2eaCgjAM%2BuZJ8R9x8WtMDeFLFwUFF643GFZjf1KCYkv7ZVatnfHWeoqe5fVEqs6jJoZ81TppNZ1N%2BvDyhL7sCEivB%2F32pdtoMLD0%2F%2BUhR88Pj7OM8kpUmMAZcN0cn8RFfIDbrhq2ht2yfDrG8KySpJ9EGMXI15L%2FYP2vjCmz5ax2EJ9TvfOxz3DiDsWqgwfE7kTnsarjEqkcwTHdsf6Ai7HOBrLCahGK7kAvGHaw%2Fk20R%2BpV6WcpHCfuNjuwhFcrgfR51wrJLA1jNVPAuZcHZSgEKFRhEqTeCI2D%2BQrlEvodfuZDRSSgkd0T8CxKU2V%2B6HffP3ym%2BVpjUMkx8htWBU1B73MdOMKGy2b8GOqUBu9pAd%2BVaUFCbHAr%2F638RWagm7IZb1DyQvCLjlCoJnoDTySSxC5IN3kNDBrpqoEscm%2BAHY%2F%2BGTs7TTrMoCMYhcWv6S9%2F43nygRtKtqJCqEe5LtQKMCgc24AxPdQQw7dNXml%2B%2BQtJGgAWtEEhN7HtsL004RFSvNTGHrA7l2NiXbU8AyIBBefMA1OTh8OmHg6ek9FL5Y%2F7nGk5cRlYich07Qj8VSifQ&X-Amz-Signature=8fb73e06aaef96c5014e424f07a483720af72752a6365a2179a053f114fcbd12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
