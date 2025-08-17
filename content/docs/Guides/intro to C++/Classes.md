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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LDDRL4N%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICvmWu18rSxbuOSyoeZWXThAi6jt8PBW24VMS%2BsWKY1kAiA92j6Y9q0I%2BRiyvdYOJQSn6gTu5Wp%2Fjo0wMOHbLhaDHCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtzowMsaFlW6BGezmKtwD4UE4Le0uFFVa3nH61OQ019iY03vSSf6Jm2n17oUnuP8XLcOE475Ue1PivDA8Isvqp%2FA2tS%2FEkSIfuGd5H8SY%2BKYBhNX2fj4PVF%2B7sON7a7y85Dv0oopWQBIpV9wac3Wynnlp8Q3gXMYGDTwrDLuKgL8%2F81qi3c5fjgn4priaDt1aWS%2FKDjPbRDyXMcGL2yiedm6LKs7ZkwrJihkgAJxMyn6EBDPKGvsG0Xq3KspSIS5hyaZtdc7UiXOAqPeM%2B2aJepE8DnllpPcHvptx777HKOV60Mm1nZExrPJUPx3BN5db7LHCwXXH3UALqxywP2q0rUKGk%2FMj8uEJ%2BehXrFDi6iNsVunVWC1GnlS6cYktVTFfCbKhRbnnMxN3LnaLcD0PObB7jPJ%2FVjNq1uloN5x0ggoyUkJDfNFXTo44xmVTTpLNWhnSvDXGsWs%2BqhRRQO38UtAXF3q36lyhvLLZc6I7t0ICqGEy6Kp9L6mbDcbZzpsNITQlmID2RDbgO7KPcu%2BEsrhfIxot9vpyRdQa6SflvGp2XbPkDF2YstWaquicxptlZa%2FfZcBYvfIFAUmrr48CJRsMFTbYJgn9TQqpgI%2B3ESkbC%2B3Nlbu64Rv9FX9qyleSUeQab1PJuwsbZVkwo82ExQY6pgHK9OJkqWzSTv4wg%2FYgQSYAOizkSsNMNO5yyFAeqcgyd73LBOdbcqOq9CcEgW0jOER1PnG2hzzOHGH2h%2BJtJxqrVnTUCapDGgkmouD1wjNtpyuwke7TAN%2F4k5FJ4gAMwFy8aYrcAF9q4Nx3C%2BZSyLCUPaX6acqLVc%2F0yukkCsiMTcQPT51MrI9L88oRyMUNdi8Kev7f6Vqy7kzgxcenXr7oSgYdR6IQ&X-Amz-Signature=c56b9c55017f1b1fbad131bb2553996893f6f7ef866773df5b14e0f5e8e13e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
