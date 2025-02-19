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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BMKELS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYAvVPRgkeQdLNiwAFdWdro2cPIlfs0fy2iqDreaVnnAiAmNyPjTy944UtvxfuLmpI94dIDw%2Bk3c5n7KMWElyrEqCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeeGRTE2KHaVQCbP8KtwDe99U%2Bb3YfsOVo3xYXgi6dbREhRI8VnSKCt8gPKq7aduFWgvBmCrZv%2B1dIygaDj7tGYo41OITI2CeCZfOu4t2h0l6pgxIwI4fJ3Z3VEJWOCaukNqYI04saRMU7eAyUWe%2BL0kSmLsUS6yik6d755ddXcvJgmqX1%2Fu1hj%2FtDRdnG743lg%2FrWzvG4nztM7PjylV4BoTvLn5yI73WRSywAOHDRl%2FpcDPucZpS9yAjk6B1Z3pe2C0F5%2Bvb%2FeOw0qZfmlSXz14YaZ91KBYheI%2F35FYTyXCZnl%2B2HztdIMQIohgKYd7hr9AnnbPb23hHDkFN2pZcE1a4NAr2ExMVGCVIs2ytaecg6aWijJvmoas4VqellKckKu24hOpqL3eq9JFmEBcU1nWoVH9smTxZY1pIsf8utCmbuSEYMn0ENaF3KZbOHPZyN1IEXDoJSmDY%2B0OS7AClHd11QL7ZWoitOOL6i9RSTHawNqIiFljymUyDodDAsdlOvPxX%2BlkkTd9Jb4tSvYAgEsvtaE0PQFyM7jLm7cwNYVPoMNCWWpGdqu9dVPPwJagJxIIFuJstJaJjDmkEvxCu1Q2YBxTDszTFzt9hf801RDnb3j6UBqAqkQ7S8OG88nTRjvHZvS%2BcCDf8W6Uw4dPYvQY6pgFdvtJqrIjKVRzWe0hn56PsjMgzRIOPqqZsPN9NsIkXdNs9sCJqDy1kUVL%2Bux95EbG1hRcLRVrT9irdJ%2B2vL%2FtjhlP7VuMWdnRWadiT62z1OY52v0ifVLF2rH%2FOEsVgfgoPkzX2U9mdTRyj%2B4vZD6znXE5hXWrkBVZE3eBltHEAAuh0x9eSQGhnOry%2Bb2Dxi%2BbGFd5i%2FXzEFppA6QBcAgO19Q77ywYk&X-Amz-Signature=06be51769cd7b669747dccb41b7db26d6bf4f7811f68694abea3d66ad18dff81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
