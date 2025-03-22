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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6H3JSU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBFp2Erq5CI38r2TgHGuTCEbljqY3OnLJgfRJb9vuoypAiAgYuQcdm2XtJq9oOALytmHgNvSNUsZ6xGPA2h7VzlzxSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTthg2cCkKHBjC2hKtwDkTMh8cDcJybbXJm69IApv5SH0Jm6OQbAGw8LqzjrsuH38T1OjUBG02AGoGXwVNl5wR5vjQSJa1ZZ%2BMDq7Ueesh%2B95mpb9bK9jxfXz3HxN3y8iCxHurSxSov%2BDGF3j9CnG%2B3jTKOuQBQJCLHOGHr8zEy3CeGnAFmYrL5NTqVjn%2B1DPajPjqthzrQz%2FR%2BNpvc%2FopudLG3Y2BrgyZVJl7rcOVLLPFF%2FPqPXve56sNmxtslkR0QGn0vS6PaefzyTGKv34%2FyKRK%2Bc3pVTr4ZIkdV4ODhqUaoeRzadBR9Li539TXU2YiyY2atfpCUQlU6dmqP2os8%2B2j64DoryYW6LDvCezawNX8fDwUs0q%2FNOu06KH5O1NySOClvH%2FVTEK1y2c%2FliP4jh%2BlLI%2B5JiwYSmE5WmfBY34pXc9JCtGF7oi6CU4YEpJssP0ZpPyHI46%2F215LKlTNfu1ip4bukd4jchTB1bSpZhwPGQG72jLPZVMLfd2cJb%2F%2FGI48LIsr4jNNDUIlReZV%2BlKx6uab8wde3eSm8ejGidcliVJvc756Q7OafvnkGBO0ncxaKh0HbD058mssm4bLxCbWBQC7OkzA8PRm9lwgW1VpgL0zRfrVohhrslr5V2SA%2BJLE8LlvmTeWEwxLb8vgY6pgGReipW9U7Ivv4eAddOCy%2Fc8rPkTgR1dO9%2B07Fbn9rtoXYzKwQUfY6kyWonjy8IG36jAK8OYN4jtmUQ2YOFJtSGSWf00QdfPn0Oqi3JK1mbFX01zX%2F7VRQYmPvQsbVUbynfhN%2Beh0BMQpTOzKhPxN%2BeO8HxfQRl%2BLAe3QVrAoheIHBBeGwWbAoxk8xjrg9Ia0AhXpB%2FqzpN51zBg7wTJUxqtrhYT5pb&X-Amz-Signature=817ea3c6b3bae3a7d3ff8d7951d212b5123ee52fd576dd1d6061671c2e64d128&X-Amz-SignedHeaders=host&x-id=GetObject)

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
