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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBQQDGQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCag%2Fju%2BvQPDSi0zQbRcaN3YJ4o1QdgmsXzUbZoL7FLLQIhAPGloVQ5BJWh1vg3EFGRuHw8jjRCWuzn%2Bnf63x2ntA0oKv8DCC0QABoMNjM3NDIzMTgzODA1IgyqqFUJvXmPNi%2Bl8RQq3AMHrk71%2Bi3K5SqxFyuj4ECtaFvoFEog8dRJMyouUWfKMeipk0Z2975mjgv7QjIGwit%2BrUJb3T5QYmgXYT8Ys02BfLI32ZXIf4XExw2HUqFrjDkcjTk5GIygRzYlOXrgBoVmzjsQCYqPsBE7PLF5CjZLXR55diQofmLivReW2fwLh07DhES7bR%2BU8oORfmX9VApFcjdP9avKZ804lusQh1O8wJF%2FXk1X16WLVjFjyoGIsQJEvaFBEB1AHCeXFyix7pmEsaWlwaLO3taJoVNe%2BxUh0g9d%2FIEPrUWVZiLZc5mEYpY6ruYVPKOy5SLF4nX2Wb24UJXIJCVo9TMQ5kf1N9W8YQ9nA1I0PWYhLyIPTMVUMqijKWKIVT%2FODUh1e7sSMSNJuaV1%2FTUwimj%2BM34gzHJkYSzSWqplvXsaB0xFwAhwHrt1TFJvAYuCl0b2%2FnUGMc6VXW0bV955y8kySrmgUIPUu9xMiRyKgtiPPZXrM%2FvVs0MVQY4CkV7wxg2crsFRgeEU28EibBX6o0nKfeEeLGVjXqnWfT53G7r0RLYVRMEO%2F3%2FLrXs2A2WScddAcJxtwPBrfTM6fO9qEvCFeMTpKJeOp3mBD67xu2cX0mj%2Fl%2BoVge1UIUwUC71BRMt%2BOzCki%2Fm%2FBjqkAbQuv9kNO7cHyEs%2FTXEGq8H3IKEFJmbhuHlBkdNfORsF9bNOM2WoIA9N%2FghUrc3TmG5Br5w%2FhIHIBetaCb7sGwQUA2%2FzNkze1Hwtl62hGiL7S06xw%2BHfsn6Kaxvz85LhpgEUPOs639USBJnlXVjcBqcdp8kI5W1XLvx3GZiW1Y1YfN6rbMKhPAbA63uT%2BFBgtuZu7ZE6%2BUjIqk9goFccDN%2BxQ7Wx&X-Amz-Signature=a1c2e71507126588ddc68c3b016f697dc01ab20013814b0b85951219199470a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
