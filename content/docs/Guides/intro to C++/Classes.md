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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FE5RX4Y%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp5mIuqHEd0ZuD4KNAMOBGJe5iX4TAxGiK9DTaQEvuoQIhAJ5te8Z1iGzs5h4X9swN5g47MohaZongIns4BkhMlkTHKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKBWn%2F5bI7VD135aAq3ANbsTTMKKtLW%2BVet%2BU%2FJfd3x7x%2FwppZG%2Bg2nnlqxhXbu4GJv%2BUW1Hl4uTfnY%2B5O23qRXr3h9Uk7F4o88%2BgsvSWP%2Ff9broPMFxyi6eZlOFbvy1UpG8f%2BIRfLOP9Nfvwtc28PoLC7o0Ozk7REhFF%2Fp1v955RXg1pOlF1qEm0aymV85TJdpZkZJUFaNaO2BgcY4GVgHN%2BEZmLFxrGgDRiHqGsBNNMFAycu%2FvTIee40NugxL00IMC2a3fCus%2F7fYXVVka6LVDUFC4xu1UOlZ%2FSrUhTWVFHHwiCUw1oXBze5rRzcHnnfhaqZveMCYnD9wWuRKH3I6fuwCt7lAY7cJEbPk1f7A%2BNNMAKJQZPxXrnNvlOelE0YyWI2twyLdNMiUB8GhrzCh%2BSxDzaJVyG8M9zdxqMrb2PTrVta29csigxfX6QsfgyPvaRWqntrWSw%2BXXQS0hLW1oQ4x9MpDDFn4F9%2Fieusc5szCQTcpixOrVR%2BEjec91q61KUZHBwqo4mrEjTb1BI7mzBkmcuMW7ZjPzOksYpcFDrRqvIwu05Zy%2FlB1UXoU%2BeDrEVc2jlS%2Fu13SPIoZgv%2FM2tF0%2BmSsjJqpVNX3i4InIvpUTsNuYuajBR35MbfGd76GzSSFQHBbPeyxjDgq%2B28BjqkATUBszgTveMqhizoMcFQtIkGALnTptOzwjABuedDzkC6Mm6659VlShZ1WgbiwpuNcbP1X8Vgk0KADWDtPyIjoMFeDQfzvNFkqCk7a343NjCKfp2cZsCRkzCmEoTJaxgqJi%2FxH99DS91JGOmvbc%2FyBVD9ycvUt4QbaQmieA762xFqRkAxeV6PSdXaaD6htcd8%2BCVrjvfAz0l%2FQCs7IiadlUMRK6Xp&X-Amz-Signature=27d512cbced7353c145aadd3c1bf6c27b6fe5bd78f8c11c11f48bdf8e51963d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
