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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DWN6V7S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLkpYzh5P8n045d9Ep19tJevHlNHELIo3MON6a3tvE%2FAiBPAsUqLU8vSgcSrWQ9aZgo4zrhJtjiFUJcd6hHhmCipiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbN0gH1lOaAnjh6IWKtwD%2FVfuWm4mf4wEt8yEtI5t9nB1%2BNTi3PWHSo1tf%2BfLDO68mUbdNTbDJge0zIU1Zjr9acz9xFzyWX9ygm3ZSVRis0P%2FmrVoy9zSMLhvd6ROBB01zSowMdwNpDZ6zvGQyO9aCxrWwZjFuioscpoEJPK662VUgQlNgSG%2F5fyr7p6fO7e%2FJueENxCJzvB3hCXBsxmrKd8ZZ3WGz8vRZW9d%2BRNTp79sCNxka0%2Fz8lD3uC%2FpaZsK5W8PhGr10O7S0HZZr0pyeF12hYTsikpMVd7TZu3vUS8wNUgmSPVwZ%2FZOcXTTazj9RVyu6hVZJ%2BxtPvmz0wyBnk40ENC9BxaM9vQpJdxnrWYkzrdD6R2RlniGq6uP7f70DmBbjGjCt6HwgH0BOHTR3nWaKsuukDybNtvGCnIdoe5BQcGKoPMjFGpuQgN0Mp%2FEkqRiuTosAQpGwh21JZbMDUcEUehNiRNXEE%2BLOIU2QCg342%2By0vxGdXmBMp32Db5wqqyK6JeSV1ObH5rsr7LC5v0j2hkk7jGWnscJCWOx6ryMAZ6sZG37i4RWA21cW%2F13RtZRJFswU6nbOcP%2FAS11clwKyxNruRASDKSgC7RRLnyZmUBhHXeeZlcNoi3KC%2BWMon9xCmdYspWu5sMwl%2BmbvgY6pgE7OuZAgsMVz56X5zsfpXBaQEUiS%2Ff4b6O7OngDtWa9w5Qc8PgKZa%2FmwxHVMMmYkv8Layam4fxgxHLPysWmrB8jSaFd71BLezYhIt8f9Wt0Lx0WzZJrzVlXdf4QX4da1sJpMMDPp7pQOE0%2FC7%2BuBcXhgvMIvtUddUvMKBnVGnvWUEsoico9QMlf0TukdKNLVpNeiBOf52SO6R2mfk%2Fpjtuz0KBc9WXr&X-Amz-Signature=0d99f9b0435f4ab7af0d3f4682e2646ad3a6df27c5eb569ef2297e48fa58a757&X-Amz-SignedHeaders=host&x-id=GetObject)

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
