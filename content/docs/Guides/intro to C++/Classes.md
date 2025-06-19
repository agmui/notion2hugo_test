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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K4GCHSY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDL9NLHf9AH6VVKCmLXx2dmYLB6bIu1JniPh7BRYxDgIgd9qC%2F8RBa1UzetatvQ1PQINGSil3c2ov0RaRrXfRUWAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTlBcUX%2BZ1WyiSQHyrcAxOKfn6zhxOTx6DCw2U7%2Fz93dP8Zi%2FIUrHyxX%2BXKgWYMFy6p9G3ygAXa8%2FGysHU%2B%2BZ77xba%2BlI6DtawjRpZGDUV5axgTzHl6ZwNQAPOeB1Jnj%2FRcMB%2BxdUaGLLJb8M2hOnx7ythvmq8eXHw0CYJlQEdNmuN9S2b9qV5ceHIUN6RJh7bSOSS1r3r6q23Bgpr%2F8e%2F%2Becdl8uWfA9dQ0l7uCbHRoby0jQzbJjWNQkculUbMoLGmSokcSyAX1IT%2BrjVqntmpRZOp6GBaVDdFYIFM1K%2BiqS9okLvqBubaPUQfjw7LBfOWdzSH5LxbDeqm2dQRO8C4Fmq9fNrxgpNMRQoRYOpN41kIfO%2BHZQUzsbt%2F1yO5iYGwSHyG%2BZuIA9sRTeGnK4UpC4rNrGZi5DPwCw%2F33682aDm8%2FFD3kXmK7BAgA7ktl6jIIop6MQIiQ5SHYKrdBNR3DHq3fgUP7QPM%2BbT3XUF5AMHaceYNNDEvgyd7Yr8XjahpQSdc9HgXkLUEioGqntvDKKdv8wF%2B70tsiYu18y9E3bqJwRx6j8CXLOHgo7QaFMa2u%2FbdroZn5ZKlIH1sjv72SBzW4Kw6tWzABrJpBmTZpD%2Bcbt1icVNhjGyP2ufKSK61zaLZzo2QxD9lMLDfzsIGOqUBRpd0R70xNcxazg8Aojl%2BsncmAgwFeglXW4cJwf5mKDT%2BYDMKtKiu6mm6C0M4iJrDQ%2B8bGxf4g%2FNcu0N8BKTafXtTKaRzxT23WzwenuGmGLazGkHKl5cVlQaIRW%2FHKwpc9FSzYIkLvTs8sVw694YlwGYjT5CGhQN%2FmSeQxd368rzwVo8SHs%2BiiUjqMGdyVp8vh%2F5s9aT0ANja83Os1RYe1UVj%2FZxH&X-Amz-Signature=a70f1373414aec6800b276da8efb2bd0e6e99b8f33d920064a1f9b92969bbb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
