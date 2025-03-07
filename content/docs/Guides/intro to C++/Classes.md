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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6S6X2OI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm%2FirMUH3vUY0SOuVJWo4S5kcqCicD1tIombYJlMYh1AIgH8NZoyuoBrXpp8ITQ8CyfvNYKjQqrQCZePyyhXbZVj4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM4X0E%2BPniPruzp8bCrcA9M9ri6JcTtAfLZaD7AOdxcgV6WDjl5BEirXXcJTirm0Kyms42r%2FTsf%2BnL9f2xbqY5Ie%2FreL37SGHBu9eGtssnO77%2B3ia6Ji9WyztC29lAVvgGGseTk1w03hfWJeYyhAceOK%2Flf4BcCmpoIKBbe486eGz3vInJvnJuqjaeh6XjQjIjfGWprX5eGyJrPSSmOG6EGcffdId5wHNEeVGUljHR8u9hfycFzW6Hop0xaKRPCo49Aj2WpgyTZgakG5koio70A%2FmWeZ2Cjj6PvIqODex%2Bc%2FZei4UhUjQtKK5F5s8tVc%2Fsxn3WbikN69JYTWgKf8kp4z3WFnhgezqHT80tjNo0WC0T7XAEeBVPabvoxUCghUol%2FJQ8iCIjEOib8bvfzw7uprpZ%2BcHE0njFu03jykWdYI92LYKtS%2BqdH3R%2Bz8GuQ3fkNT%2F8VuzaPU72mi4oblgT2562vWhPinMV3JfVNaUcCg9jgQ%2FFRWNCmghmQeOENw1lGq9ALJYO6GuDixZ5tKzOaiRuYzKVr%2FO3igZJ4IxIz9QMAY3ezfwZQiF026pq134Dtp%2BrXl5CyHbjFJHmyimatupqqYBpVSD8l00WM7gaG0IEbfuyLuV3W%2BMTGfDz2P5nGpCeOZ6cI%2FmtUxMJHmqr4GOqUBzHe4wJJKNC5XIvfg8X10W4jxOblDYIipTs4CrusD%2BWYfg8TTXeRXkrISs9aMmq96%2FA6RX7IO%2BghL9lpeIrXNovnYw3XZLUkh4AuPu7YPZegppN34cIeQ1fH%2FxyMXpj%2Bqji3FtDqViEW6boge39eaG8UgwUH%2BSUTsLkqa7UBo76ODOzMpYQFSA%2BgN06xuTSj0lwttZamMqZbtv8fCLiROjbDcSlON&X-Amz-Signature=f7d93db9784274660b8aa6439d5871a371e1a822102f49889812fc3790b31711&X-Amz-SignedHeaders=host&x-id=GetObject)

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
