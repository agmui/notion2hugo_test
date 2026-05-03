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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVGM54K%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F63%2Fu%2Ba0g4JJh%2FeAP7QVQ8dl7bsqJaPYtgy%2FtyOcgoAiEAshL4tYaH8YL3nZz8jSFiKYD34dw9YPC4wi4HQlZMAoUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG43Q1texSK5fZ4EWCrcAxpjgcfjj4PSB3d8bXv7bNS1qO11GNLvm9UZWgY0xltfe1iBC1r0kpV8c9gA47Tu5RZ3jzCqByYSqFzro5gy5XPhBaQNwrgE773UuhF2MUZbZ12tqfkgSJdLcSRnDR6c5fgEIl%2FeH1pYHnGBmdJFfrA5UPkhMeWjGl4poqKv9RYi9otEt6CDOi2jV%2F%2F505AHtlZf55LxoTgR1m59bCbgjBTxrAI2SPF1Vl%2FqMHH2kY9zd29kr00ePNA2YiPpdh%2BIOldoxLbxj0NZ87EDa3Ra%2BD4N96XAqVW%2Fq2TL2OpYXaAYTuRGXXma1MOJ9lqdDKkrb82JywYV8TloH%2FPESewG4zUM6hSU%2Bs8NsqSRb1nix21p7q2%2Bif6zch1b6fzqdhZA2aGtY9Uy1RDWRy1DB3Tak0lKJsNb0%2FV9sWGP0bMfAj1R59cX0G3cAO1YMQJ8M5DDzL%2BY4nlz2CGbFtGVO6%2BkeFuY6tU64qXh7p6FuqBWdJJ7y2zjSLOn6m5YdoZ2rJP5koY53mKWlJfqRyklhpIyd6V2kNxLYNcAqqDgdQfcXZLuh1o15zYz9EWtrAhDzuqjx1LtUq9HhMxXOwa%2FulmEA7n%2B%2BiQpftfU7ESfAWEgLwK9QAeebkcKRE5F%2BzEtMKfW2s8GOqUBAYoRS6gDLjrEnUO%2BBR4kTi6t1mdn51whiPiOl1tn9GqtFOQBvYn1S1FvjIetDwlpNrGTLmN7rgHCfnJ0MsJ6kh3qtwGx7D77MtfoNWLZl82AepjsiX%2FBd7%2B2TjzkXe5hPPJvrnL2vcspfxUMe4%2BYPoCEAIph0aDl0Y192%2FuMX99Ub7AZVVnW2iUou01jXkZHCATuCBSZ0Hq%2F%2Bi1M3auY5x2VC%2BaP&X-Amz-Signature=ff9cc4bfbc8fd56b6be741e36f9ab867c0b60eccb699b07a2a4ac136288a802f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
