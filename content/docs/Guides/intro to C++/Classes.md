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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBBXE3Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQRGqdx7svZMVrR3E3wB0yqj28daWyPFhRJSqd%2F4QetwIhAKr01BZbI7%2FVaU%2BtaB4lfymKOY8L7mx26EbaD4pf2rKuKv8DCFYQABoMNjM3NDIzMTgzODA1IgzQMk09U7cB6gAAVIUq3APZRzdiO9qYQ6cMPJYLHI2E5g2pOSpVXbTL2m7JKyzn98MIrFhPa0CWIUAzBQ0nnbsQ6zjxJ2TO33VNoBKChZ1MsVqyJRWZqXZ7U3P4y8GHw8%2Bjn0PbP%2BKgF8nGdIIP7dCkHk2u8znjImf%2FnkAXO%2B2RiYTk65mHukheYCv4rGzL7JtqrLtF9JlXGrR33Zfg6cOc5oT40w5z0Tt0y5jkardWikfBfgs0sxpv6ddbzO7L3RN7IoIyR53hzq6BGVcJ26HrigU0xBGJy4ZHb2i%2FOKZyJOYw7NneR2nw7PDgAkO6Gjsr9zdx6En7n5uW23bZ4k1e4DnKGA7mcyA3vVAgNCkq13Q3qRiqzXmClcVhZIAnC8ZTmp3DlMjmCN2%2Ba0B%2F6OU%2Bwe%2BOXzDghO2LZXgGDhxcjm1x75oOtEJY2uQ58hZqokz3MltiDx2LjYGuYYG2A7b6VER%2Fn%2BW3gZ6pM7aypzcrpc3IlSjT45X3nL%2BW%2F9ugzVtdOujqACmBKxkV58gH4tHPERLCRIV%2FeWHOv2kTNNRi1yeQzfH2ka4izayokXHdyEtGtHEwojCuVZNedrgtaajMNb5%2FZ%2BrwvgkfmHd7W47mRYQJQ4Sn9UgWv2MYGKv5fnjWXDSH63L%2BADKQOTDq7LbABjqkAXhW84eC4eNs4pihqr5ud9MeaK9ETBF1TCqBR67flRmZr26uISg2L46Rqn82d9MxiuzdLzmiaIJO4V36GOts%2FCFBG5vvYbz7F0nDoWGLzdV7syFRCiYtg3OLFgSyydn5t4P724jbbH6cxThc8BEv7mhwR2YsmsbEcivV%2Fqqzd8S0qbtbRwj5rU9ZgOOnQ3NaCBxYEfcL2GopJ4bIbbKjcjSx1H17&X-Amz-Signature=21b9e32018088d334df2bafe779e725221d46c4e39545d4cd18a3f5643e2c08b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
