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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPOU2R7I%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY0JCjxZMwEVCWp9Ej9sBusm5UKeagrS0FEdpHQvHQ8QIgL7ttGFn3iUBPS%2F5%2Frcj9EgzWJDLaRoeV%2FIBO4unBvuYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMOxei2fXXOoF9BgircA3ESmwVtceBml2OEsi%2FG1D99EUscdmJJ44Ma%2BPwk0BFu5JorI%2BwxLF%2BkVYGcWaL%2BWcX11cnLTQwOp1Y6%2BNo1cJQPS8U5MYyE0w2Lj9qYYeEmacOCqVJsJ46gQke6xS%2Fq%2Bv85opFRMxDCQujMrK2jG4tjyTzr2IrSFReVA2z%2BTxbgVbDJAFit2e35No5K7O9qgVEOwhbMlggNr7ygx5C11sjQFng8oT93xg10D2VlIunCA2bhKplEZsfyInfGgcxYaq3kwE8mQMWOayP4CyMYyKeBCAkXNbs0T7XrajQsnUdnE6s6Ru9WhOrj80BCvI%2Bzv374fMy%2F2l2t5BefhY3roR6MJ42SKNJeE8461%2B41JwPWt6xZgeGVZTBRPRh46kZAwrPKNQfaq94d4O8GMncmHUckq0c4YhiLmAPsKtFsYAFaZlS1nTaXp15TtcyQ7%2FYXJNF6Cb2Xer92V3CIjOTPQKKCE2hVf%2BOfNI5S55bq%2F8hwas%2BSA5oE9%2BEdupNn7CwtR4ngWvwHs59QpECJSu1NiZPkU1NKVHHQGMQS0SRasTqkhiD3%2F5jxwgUxPXu3N3hp7YEtECqoOHGBhz%2FOU7s1y4WWs0HUPKJNf3GizYRIiN66Pn66roflOtRrtjawMP3alL8GOqUBnz2m9XvEuc0LOj3ppaFlOKgfidcL1texr4HoitdL13IOGfI%2BUdECon6HE3WhCu5jmn7%2BewGrhAs3MKFbAPt5uT3zYudaVMA5AH8W%2BNkcAR4IuORiWEgyQuhcxl0rmn%2FfbI8pnW1U808FlLk8AZIaelerQqC6Bz%2FTwO4ih4OGy7Qd9ZjFQE4DrSKiSpy%2FCoJ7cY5CE6kNJCNmKRis1QR43iusgJm7&X-Amz-Signature=fae6e9b2373916ec68ddec09f8f9935407c9c4c33d69239c112750dbbcb4e0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
