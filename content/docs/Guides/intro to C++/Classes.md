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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOBUAPQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICPQCqhNeUGiMl5d%2BFSzrz5QoYIgXqzcTLvZ9WyLTnA7AiBAreIy1PyNk5P%2BztH5cNIR1Lb1rf4t4TYbvmqXRngllSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYvKfDTmwGeogMpZWKtwDGi3IkaVjS6HCxPw7OkPquUL8HCAhGaUDDTbqDkRppMEfXmdcGlzsdNYn%2Bl2nNaRSMOwHktwqReSpxeQEYyt9v5MkaoNWLKIajOIEihMAh4l76Jcc5nJuS2dwZgY33WXthp%2FPJdB3p7l0cO9sCC%2B%2F5FsFYUKPGdzkEptiFOem%2B4BHpx%2BPHFVv2mylIN7jyCUgeaTuzDcg%2BohnyHaPadv6%2BFNk%2BmGNFYbszHrFcXAZZzDa3WHwBeNMbkcxdfgZJu40qmFlyRc0d88vhw18%2BuBHwioEJLjm%2BvtuNguifeZwsjoTYbB9UBzPvLDYccwsrBF6zSk3GKK6OE7JLBr7FVwlZMM3%2Bo%2FdSFTM0Ve6jBpe1Xu6W31W6DNtlrsO7PkX3BVcglf8G3K6ajm0leflo%2F8KJpmmbQmuARfQHFq52LSedUrBmf5XOpkEFsTW9E%2FvxPlTomoQXVGFWopiBPPGto5N7iyBCahlnU694hO1fWAa8Uf3h1BtOjDw2fg1jP6%2BQvqDQS3CeXHIoe2M437HpaqakyuPDkqYKt7wYuSlFU9tWfREd16FxH1jjQos1jmBLxoET3ucBHRAyg1wc3veetY5ZiM4zVDnV%2F1F5sOi7EjGCUIh8qdY%2F48%2FzlIdiNowwtmuwgY6pgFt62BlXwNydf6fZUQCskxj1CYkbN%2BbCHwvldq4LG%2B%2F5VImHKkL%2FShwMnAsrqHcT6yNQEdMTeXd%2BhpaU2wWM%2BGF63n66SEJUTRsaQS%2BN6VJ%2FXmd157ho6eLUCbTYUAW5ZkBnT5n2XztKsKN9nHo2Pm6jyWXjKTjPQ48BTlxZWojJdheiT8AOdy%2FwRk3OxruL9SLYh0BrgJTuOrBqjWHmNY8vTYn47zl&X-Amz-Signature=564fd7597350ad96c7760cc692bfe0998709f11b1357a8c1f143c29807921406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
