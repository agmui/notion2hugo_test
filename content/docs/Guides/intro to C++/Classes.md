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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5TVSFB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2Fyuakmuk4pJ6LkM9uSveJWtVfQEMqi7wXRh1jhEYXQIhAKtWVK%2B3oEai1Ih6kzAi8BKANYNzBTR9%2BSbHUKyu4nbtKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ7ngTwb76OFj9qnQq3ANK8myIz0uXOYgE6N6qiJeJMRTXhsJB6PjRsVBwyZf5e8Fn5XB9TzrpqfD%2BrNwsZm27OooXrUq0OUmB8H3CtD40MmatRvNE0YaEhZJ%2B95IFJb3rFRjnnZ29XM0NFJ2qTZOqzxzAok7%2BWqJIGhrdwEKHe%2F1536ociUKHATAXAFqByYztwlLZnIO1hBjVAIkbHa6l1%2BB8gT8ncPC3UUaeDQN9RiI6YKvvTXAACFVtkN65ATMXDb6da0TIf5i1SXC%2Fp0ihdQX0w%2BPzFw542%2FeXsScLjhSipxkOOXszKCnA3Xu6oSriyR1NxrHWVm6ORGWcVHF69s%2F%2FhVOXl3s5Yk2yQv2KR%2Fx%2BUF2sF9kjOb%2F9CZxaPW%2Fd96sADs4G%2FUnq%2Bjqf%2Fx9wEX11V5bJRd9viKyAzB78nGMoWNxLhm6%2BfpIjusWUcWDDoFvLnkskkVTciSGlzL4nyXp06yq0fvCvjzvH5iJUwFEhwbsGhAZh1GGHgMVvBbodLVMqau1d78DSP%2BuXzaDTtTCGa1Vwja3qYlQ2H7FUfelYa3OvkzwHgqlIP1KzwX69b3T%2BF9Zbt8XNDb4t4ndGdNFRVtyVAsUp0yaxSPpioSzQtSGCImFWpa2e35TuzXKkvRMnFeZeP0PjZDCQ2YTDBjqkAQ2ySsk2rVdKkNbOcOBKQ%2FfTZZRtkxLOQU2ZuMUXhDkOhm4yv4ADypiG4Z8mUJ56RW0u2UKc7zq3%2BLrTn3tmJy3D7HrdDFx9WAUbWqqGd0RfHeH2qpJB1jxiEbnUony1N95oG3L4GO3Yt7ORc%2B%2FU9EfltxpZ3Sa3zhUEwTQF6j2IhOx1piqNR9S%2FqcI5ZceAWEsrlicT6SPyOmexj8GdMtM6lqs8&X-Amz-Signature=81509f6b876018afa7cb3b308ae4d45b10e2776ebc2f16809a352ab30c5b5053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
