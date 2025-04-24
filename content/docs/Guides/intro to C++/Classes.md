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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYMW65R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZiKlbGMZFIytfdcIlOBOgDTzG%2Fa%2F0jv2EsyfbkspoBAiEAqrQMgh3nr7ST8cc9UvvXUSmcN0qSJb3nxc%2F%2F0032LL4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDGYXQljNXWYscbiHoyrcA3XsAGVcFcZPz4PMVLlxML3JnzMujpE4%2FcwHyt%2FyenkzfNLMv%2BrDXcafBVd%2FdkR6JsgXqknnDg7XF7rqcUsrrr6z33z6siTPjz%2Bs1aFP%2F55KkLyW2ZlxLOBuhqF4X%2BuatCbVsR7xScFecMiPHe6s2Tcn%2Bd3%2BMaAESjcXmDy2waz41DirYM62eX2MEjaDj2eKs4xMb8ivB3om9t0%2BXjr8p6j9jepEwDw%2Bx7n7wIs1mDAR84HJxejUNytll5bSLTLJSCW%2BZKCMsV4%2FkKyKhNw8R6i8m80z2KKEYvj0fZRDYG%2B8evHnzdvgGSwbyxONdbelktZJmly%2Ff1OV80xKZM%2BD26ABi330RX6znWzVAAdALDKOq8cOEE9hjjrhHNHN2O5oNxpXbEUfaJ4DRRFYCByTJ7A%2BR%2FDAPgmppk2l1Ce4ZNnv29Rp%2FX%2B6D%2BltwIGwsxlf5NmWH1IFGgeO%2BkHZI9QWxtd4PU4s5mA8tHnURjGugp1kPann2tZPzb%2BY8y6Cfja7xi68Eq5BeI7w5HaWy%2B33HQktwqopNQnWXGJuJAPBwpKTaESlEQ74krBXzQBPD8qosaSTjV9zHArrQw46nZkQg4FBweixBR%2FAOhoGEHFjO1m3QZGQvNmeRQgiNXcJMPzaqsAGOqUB4Yyx2dd%2FiaxyLPTYdZpDFkZelLMaHeIHxeMJosjGRTm4iv3GLLGW4QYH8RkkOkF5HpT8W09AgmlQ6wcyxBzhdnAtxL9l6BKTHKFqsybq96nmIxn4q%2BdSAEl3ubuS4eJqBRHix3zHmUJ9r1xhUMExtICIJgzA6VCVYhtH4ir9TaG97BWJfCHyLCIYg7lNmRQVky8bsESlHePS37HvgLsjoJyQE58V&X-Amz-Signature=e4cba195624f463da81a08620c5bd37ef2108ff3b86de1b1eb8b36e62f8e6a34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
