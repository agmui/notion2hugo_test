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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZC2CBEP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz04ZjRuPiYuuwqj2Rbf8ToTszAQ4Wt1eB4wsvxLHOPAiEAsPfaurZT%2BfRUDjo28Klfwa%2FZMJIAGfv2nIXSdx9AEgkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLbTOlap8ViTr92L6ircAwuMchWp3l7PcahgguTEOIm7ynWHthkqQY0WfZYRVzSTlfXvXwZ8VQKQBlZzDv%2Fn%2FqW2s6NzbZGB5xQHh0gE8C35C31YeIW4vF%2FcQiRiex1VM6wdH3nf0rAZ5dAeuXWWU3IMYmiXd%2FKp0XArVfyV47mHCFqAS6o6XPFsBChbC8YgpEGEyYn2aiPttUmb%2Bsa95fGmYoKVVcWxne%2BeyI247ynCUfAUYj403UM%2BoU4SVMTixAiUQEGw0M2urjHKfOX9MgfF2uVLKRdCn6GfRFOwWPOeerihTVXt1sjco8gyS9LXOSAT4LUDu%2FnmfUZRiYuDc7bk5xo36WpTVDn%2BOZNGSt1lFPzHuhQhaBIHHlHh%2Fyuh3bPJmcj4qiU53iBqlz8rj8yif1zhzK6VzQKUAy5YkBGFoGcQEXN0Hnz9QxLOcKJv15XpG0fzOFy2M2aLgu1HPYGelAeo0OjZIDVTOf7cu8yCyckaGTaxopEoydEWyLxHn5wZ7v%2Fv9l%2FnZ5pB3ufXgDJvJ8sp9v8vaIYeYKhktdPrDwPtEQdlZqycdaf%2B6CyETvOxA1VZMRepLVlSWK4xl4lvh%2Fxt3nLOk6hHp%2BCE%2B4fwC%2Bln0IF8QJnGs%2BfEBONmzA0%2BafQqx6YBqUCGMLDl4sAGOqUBIp53Gy07sx45d2kZWij6O6GunTxTZprb2fh5ACpqDgoMuH9Y1kUqKP2UF%2FlNFvgkKnWOcnUcsnZ1XdwkAV50eIIt59JFlUVyOtxm2%2BCxMPw6TNHQqaQiNJGrrVe%2BDUiM7zz%2Boqq6u3yYEoVPyIBnUhDW8CgXcCAYikOECLvCcjp3WEvHE3M61naG8OEw%2FjTbMdGxqWcPVbKea2PtcCLRL9Php4lp&X-Amz-Signature=5829a427088da7113b98baf7b357ebcb797e0884e6850b41f15775ef6ec23437&X-Amz-SignedHeaders=host&x-id=GetObject)

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
