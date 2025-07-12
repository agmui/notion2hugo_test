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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655N7KFNW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehmaNT7x9yU4GgnS6vOV8FO0MDHybPhEs1gYs8xqoegIgG6RrVb541cqwgmX%2Bz8zzlI9rt%2BXOULQ%2BMc9LFi0b%2B5kqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG48uL78FxHmgbVm%2FSrcA8wJtnCoO%2FTFpKfeaw5rMID%2Bv8Ue26o52u6%2FiALR00uM%2BcvLrsz8uAybAVZPaiqcQ9qi50Kq39DHskG8eyuQA5x6GQ5jluIwho2CB%2BG0H7wS8CrvgoVHDEZxMg5NmoRpE4poie6vOoOH9bQt5y9lfpUPILA299br4gs01FUlQYqLe3F%2BxB5%2FsgQ5nNeNsQbQQH61%2FvH4fwZYUvRxEYlLXr6PEG%2BeXkUaISmz4wKSBWvg1wlVQqVj6q82%2FrDg45Oc6j13YxitmCYOTaJXJSmz%2Fjdqb7J499n1G01N4%2F43439%2FPjz1dzZuOUqhgzToux97E9mlZ5puYixT1u1qeLC8p%2FP5iokzVafxC02W%2BnkRm%2FHHjwotSBulTzkfX72%2BKrw9y4FcJdCBDXkDx9OyEl%2FWHjig9hQ5nYVHAKtfBfcqvyl1FTb1nBTrKaGq%2Bc2tCRbscJjN%2FY6JmUHqSPZ1KUbyUJ7hyDYep1GiiWnkHOWzGxBHzcThoCw1z%2BZVYDyg37ey7qj0wfHZHJYijxOGW5%2FcwYLONF9rTnjUyePTV8M%2FXH2bqG5O%2BlaFvrxkTcK%2FFJjCP%2BsKWY3vyXYaOciTXn153q%2BbsDm6KEThYjJ4cZ9%2BQDJMMPGJ5r0LvwUY6T3aMJW1xsMGOqUBrTYg3WwN4X8r3PGobq6XBFrelCZz7lHNdizJSZU9ILFwasKMijMdFQnWS2HhT1owQSEPRakllkIMHgPbGGlmPtdWc12wkrOSpz143AEK%2FStu4UgUnTp8ksONxAEzFJa1O%2Ft%2BPng2w9dHqtkj64KvEwJoH2E%2F%2FywQsXRmFs96Ep5O9TXQQI6yTNf55UHuO91FvpvI5FRML4UuwVUaPsyr3k1zQfUs&X-Amz-Signature=0a8f43af9b84cef7fe0e85486cc381f68857f3e7452e7af73dbcee18ad3290c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
