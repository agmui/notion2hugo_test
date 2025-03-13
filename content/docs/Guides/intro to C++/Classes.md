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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKPI2K7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtREfbW8smdyAXAlRj%2BwzOP77VFvkJ%2FCbiOolOcPYfXAiATj081alp4zJv574AF7l2rQ9xUKNRkOgZ%2BoJDYpuzp5CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvN%2F6yq3Z8%2FdEkqnKtwDMoEQ71NJkQp9vylEk1Q032o3uPBgfZBUF9NonCD6giHnacYFCCwjsaBoaib61NfXOwwpB7DT9EvvD0nxXM7SzMT24wd2ZfWdVI%2BLizVKLUcec0PHzSs8YigEKxBbSJ3Xqx6q7BFIMbPzImCo0csxkBWE1%2Bz1YIzWbkpFAbFKHwnoVVorWbplXO8QrQPqhqGD9CJFOFNPh5EUnMnf2pda6hmyXIlfN%2B%2BOiUM1BUGADlw%2BvUZ8r2IYkOrByEdiDe%2BICcnvlaxZKhodyC2%2BrAWBnsz%2FIJ5U4%2BrlILG3oSUIJhpZzraQ3YKR48aL5ETLmjdKa5AwPbF4RkgvMHlsMMJgv%2FgOHPm6CRZNnbsCCDx6yqWd%2FEv1%2FwEGTwqAEzZ5mnahT6vNAED4EqzdSirOLYYKf4%2BeWBzzZBvtxcDFp7otrVylvvET958byuCvFwt6SPOnDIzxh%2BaHc%2FWWCoCCsFo5tdGFFCw9qC7aA6KUCXxgZtE1oZpbUlfOtQladVKrzyBmRLh%2FJcZENcT0ZObO%2BzSs4FhHSpDhvEOnMKNrZTxKVDya8HnE6WBNu%2FDIOZ7TGICQOnSIrU4KSqwhBR%2FYxfxbDN4O%2FZZwpwxijrrm4qzftkPRQiUUBp7jwPss75Mw%2BtTMvgY6pgEw04FESgxjlbpQ4jLiW50rxx15u5lL5JGXRG8V%2BDT0UzJkPSoZZymeNcrhIFSsryCe9%2BOlpKaZhAEXV0ak%2BX%2FGVgaExg%2BH7qtM53ElirUB6jGTuPUecY0%2BHZdXsHAt1dclbshEucdSDTPIeq2T%2Bx%2BpicM8QzIKkYpJJF2L2P9BWEj%2BRCzTsDkIoNFPSEWT4RDWMsJLFfjliBVLRf5U%2FxYd5%2BO%2FB1o2&X-Amz-Signature=7084c2751cdfeb0ef1138cfd8ebd3fdbfa373ade041c489e568fb6a894ff96c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
