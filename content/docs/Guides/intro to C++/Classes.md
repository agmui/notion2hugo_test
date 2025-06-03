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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXLFN6X%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGvKrDFBhNmcyRmXEARC7V6h6f39cks8pX%2B%2B3A9NpXf7AiB%2FiubAOylPoKhOqONe15h1%2BTakAgRfK1aKaXBBXsXWCyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMxv%2BkQ%2BCyB2ZLaTSKtwDPrA4jXy726GegOHuXA3mnTkrjJmKYRF2PSlOZ9%2F%2FKB57e0jNmcXkrlmmg61jQeT%2BSc64mbRojwi%2B5LbQ2YVBFWMoItU10jGNBqFs9Yitw4F4vh5O577MYD%2BI2I1%2BREgHiaA94C6IS80mnv2LUMwFaj6oT3VwfBMsHO%2FdLamLn3%2BlvJZsOlETLn60MY3N9oJ0Nop1iaovHcJnhBUBv7i3qj2DvUy%2BcDaDrjyjBM%2BaMjAeZAIC9%2F1RXA2L4y3c%2FRPWGDK520RqHb7%2B3bK0y%2BPJHLLbf5BrsSeifjbRTbm3U2RvyLAu0ywpI%2Bmz1lhhSqg0IOpT5ho62pLlQOmTO1xLtYs3v%2BqQcTj1kdwciTOXYDnaOy6havr%2FpwzpdKZxiDJ8WtAlfMCVVB9Y77xmgIQXYWntqubCbNoDpcPOwtaku1%2FbfYFr4QKYBaKLCDQBnVlnvTdXe%2BNJ6fcVKZo%2BIlY%2FxVWzAYyrPMVb7zg8IDfV9cxW9awplXjAuFS8X4rzDpIyDPD5H9a2sfBP5DukmFDdQXlimXej7E%2BFdorEHBIoZR8CWmRgBQrZYIQg4TvLEIa7J9rQolG5SWoo9A0Q9qtkk3VmhP68OLMbd3wrlBNfl7nasStTKJUAdYV0dxQw2Yz5wQY6pgHH41Cz9uOesZre%2Blq5wPKc1HdM6Nk5B87f1gl3TCn%2BwigDlfP%2FB029fooclxEEoAhU3gWJxrLAerioa88mGOT5KfBky3Fak172h2rPf75EnywEzZ9hqaqcX3cqAWuStER2f97sOZGccE1Aon4RCZZPfpPihgjta7vQAiz6Roy3vqUvJ45fckUTFf6FQdulpo8WnkTqjE5arkPenDCMg4PgH2uiIrww&X-Amz-Signature=55286968067b7ae70e6e183a208162168f3019b9abf5ed81ffadc64bc89d95a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
