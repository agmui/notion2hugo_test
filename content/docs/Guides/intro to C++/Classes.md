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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVK22T6S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcQvkySjiyR%2F%2F9cYxo3zPZo4CaZY3PnL37ehmUplqStwIhAPIlNTxLMGfD4NYpit9osZHc844BKSiI9THWazuLxH5DKv8DCCQQABoMNjM3NDIzMTgzODA1IgygsAi4cnvU%2F0hP3wYq3AMVY5QkKgwfmUouQlkNgjy1npfd5zVcCw%2ByCYpo5FcBHjXdObVTdKlnjIJGnIwYPVxpXtK4om2qSfXG34WdYIhRABdzBASTKXtuOwXMf5Hm62xO0%2FmS4AIqi9ppysFXN1XVlHp9kHEzDM%2FQxykYIWbdxnoWxQGruHCpb5XlsqKxARukHNtQ%2Fi8s%2FTBy9uVgADHFGgvusuQIB0ILp26C8RWnEwFIvZdsjZZ5ffyjcz40bs6LS71NRZm5aL7UkLph%2FZcSuERooZvlUOKr7paktQ0boSUXEJbs0uc0V7SvivfjvE9dvokpGosvGsC6NAYbnKOhQ9jU%2F1%2BKG%2F5Ux5U%2FPa5aj%2BzUYvnmMtxHbr70j9x%2FB2OcMhZQUsm2JMwqEOk4fO4N2ZBPhbX6ruOCTTkREOF64neS7LtYEc6PLaS5rrlGzxC4Gh6tibJu6lDNffgv73Q%2BUeSALYVPBDl3hfQCm7GEdjZqdRB1Vx88pRv0edm1LDbvsMphE5QPftQVg7hPkjmNP7nWKL%2FhV5jiJ9vHHGRMR5U5NlMhImj7Bj6rP5Z4i8eIm1afBehJ2skD03WgyJvv9kusotoNhnbv5etOOZjWDIeRGc8EjwwJRe4VGFlzVXHDYXR7T7kCGfY5ATDZlaS%2BBjqkAadaYG0%2B6buw5Lr%2B0FMdwCoRwOkt4fY2Xcc6AvZp6cpr1%2F1lUmGfPRU1IZxGoi56LxV7SZwDZegVPufgLUtGtocdJ2nSV8J6U8b0a40N%2FsmGdoMQsKUqnVZ994xJYiD%2B5TuzVZFD%2Bltc10I3%2BNx5kw9snhmX%2BmA0iTNnvIivBE9B7%2BuzFhu2hkCcl1efR%2BOhXL0hpt7VnwltNPUM7U%2BG2BCyC7iT&X-Amz-Signature=acfa51df5628f7c88d56c2c799ad0153d81b74f9c23c1df8f3f1da0c03fa8d46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
