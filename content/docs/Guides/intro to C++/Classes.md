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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6JQ6U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAmBGqLIySrMy%2B0pfS%2BvfjlO529DLCmWedMX9pMTMe39AiBajxD4Qot2CaN8f%2BGLvBlc9gRdXTxT7sHBzgailRVMWyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4X5LXPwFztWFjNFkKtwDPEW5XnICYC6%2BrtcHAKvG3BK4GT5sI5ATz06qHlK2izZQf9cnOyxrzU5kyQreru8mTcjza0N99wSqw1Tarmjzq65jT%2FVktDgmJTbjmkU3rZU9HpemfQ7lB8j8kpNdoWYrK1g7%2FPeiwSn7%2FxGI6tyu8kX%2BSkMikCf1i%2BgDviWMrw3Yg%2F1qVXggHK%2BCy8j2fdNlQZeR8Sx7aI5DBVlnyp1QhxoCzBufPMvVaKSnxhA6jo965Bho9OTPdBCdL8d6jDGHU4hJT3%2Boaj2kRKelzMupPo8dv8jLhjszbdaBt1MTkmXhr7Ku72qlhohqPmYNSYXvVf4q1XW9aquAEE%2BOIGRgcWdA8Wxud%2BP0%2FH9xx6DhwC%2F9frM28bfqX2j5qqT6PHA26CA0BLyOwMLepy31w3M9Y1ZWKMFFLwOYnziiMzNk7vH8lukc1EpwUQ%2BG2WkCUL9xOUOvDY%2B9WTqp9YdB9rHm41JpkYV1o%2BARNgtGa5orvHkSAdN0cysCkmlH3HD3smdlxLRERq%2FJikrnZfj2ZoRaj1wCBrhP6WlfdCqQSlzVKDC2ztngeI9yHUBL%2BLsM%2BtUcSxqdrKXnLllJCm5SLgbqgDMARthNwQTYR6GoRmcho8JKJW9MoQEeJW4iDwswvPCjvwY6pgE2EkCrbMhPTBNCxT9%2BQ%2FcF4VB97koUEYPiMRilhZNxmK1RIV8XX4I7Iu18MvGiFT8JtaxU38gMCZmsigS8Z0Agrb3VdtJQ8TxJ6yKyhhR0oX%2BlKo9STBE7%2BMkvNMQw3uuhQzMcNbDaQGJCYw%2Fqh5TCaEpY%2BjwU9Xzbgiyum2%2ByIXlnuID2yZ1aUdEscamcWpWQOY%2FvyT%2FdRRSdBVtNVuzPGn95Qzhy&X-Amz-Signature=bd4143052d1d65432c627e2709e81e2ff07fe8fd63afeec04d7aead699a7365f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
