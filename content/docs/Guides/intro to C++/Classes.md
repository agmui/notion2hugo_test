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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ23PTEB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBSD3aLjoNQeuwuWQ22JUuqcvXQdhfW7KNH%2B4QZ4nD2PAiAytJ2lyS1qJZ1bAQfLrCOyg5nj1Q7TU50MiLLthM31QSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpUn78y2svCv3fjGlKtwDpYbeqoathYK0chpU360MZwjqI7znnQnoLZHsX%2BgxbubPEB5gyO7vRkP%2B5rVYg7hIcFTekWJxOdTLsA6jSFlXlSHVor96tJ51OGGTX8R9pb%2Fs4o5zrr3etcEy0JCF9enzhphS8g4TeFpQut41YwBUrcAnHwPgQafufOXPnS5ASK2DBK7ISdaLNqMDv7%2BEmHGmgpcSJwDYjTEddPRUT6%2FdAScf1T6673IWLtO2gXY1fbUxsy5%2Bri%2BX41ZBQ41ctngUMPzWFc%2BmfX7NkAYdmN6ELBPe0rjuKHcTaqnQOceH8PHPBlIbLeKTE05rcOlW%2FZI5woUuCG%2Br6BnaFfcNsMtlbO5PV4sPzJfKmWHbiawoydIkwNQsJtqwynhYcuz2TuwECbXGQ1HgtTcNbDN3X%2BiGpcU4Kt9enj%2FofwuhkbRyUp0V5HMFkUHZq4MKhfw%2Fl4SQPuQcNUWnyuSkCGq8dJTpP5uUylJHaduTbtbQfaul84xlJhN%2FiAuwIo304ZrKjcB4MhqCaQKn%2BiV39a2VQsGZeQcfXoSDoP0vQTMSIYiksgKUSD8TKcZHsroRjs%2FlO44MXCSHPNa8XEtrD4Y%2F5HtaT9Z2wohyrM1FQISYZg9HrLq4ip%2F6GwfAbUhgSwow4%2B3TxAY6pgFTlDOKme%2BPqhQyQeGVEdXd2tmFv5AishZdI9v1jZtt%2FojEya6P0gtgcpBDIxpc558jT9T0U8DJd1Hi6CM9dQF9CMpNncklbQ%2FCAci8Y%2Fmr8cpEsyCJUBnpfKFOM%2BSI1g9x%2Fq61jThamttiEU1KpiDsAirDjCCbZDnh0Ms%2B%2FHfg%2F9%2BlfH1JgC%2FH2cEDpIs6Kx0CergmC3fKFZXQlrZ6TWdLHx1mNxzQ&X-Amz-Signature=5c45bf214fd9fcce2d91c2d7f9820b05e869fb213ba016ba771d7ea0bdf07b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
