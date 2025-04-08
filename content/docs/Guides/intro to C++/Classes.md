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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEB7V37%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOLpai%2FXLLQOtRzkA2MrckHcCLVlm3kdxyPEdONeQcAiA%2BdGJQnI3gMHlXXQfGUe9jGeTloJaX3w0dLz4%2BYv5ZZir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMNkkkVlXFJ474wXxWKtwDTK9zu3YOpPndeWG9qjBsZACNNwAimPC21v2Wv7TqQY5zqdy1oJc6S1YKv%2Blr9dKS8dZBWMBti93TZFImHRhdkFz5X1w8zmvjgSGzxtOc1oI2tEhi%2Ba33vK5ec8NedW26PNd4gNB2HfpkHFOrqbz41RT9uPYThIfP0fz1WgCtZEwzrlinNGHjTd9g%2FF4xX1%2Bo8%2FsN%2BUtg13s7Ww0c6sVbZ7lsPmbdm8aebkC2A%2Bno2RKGbH9VU6gqcrFcYVJ9cOg3aN%2BeiZoKHt4TjmF5HgUfi6U1A7P1A7SBJAjaA%2BNAHsGQnCxsU5ycU%2BxE7jqyu0ry9eGd%2Bwn%2B1bqhOcqJ0f0o2efapo5uOkxB%2FWbHdiyTxiBXoe%2FB7kgaMENnaOBn2GcZIlbH9zJ%2FdTAQzJf40kjj3ITF4cMsx7c2dBlgE76T%2F40K9wkf7eU8EMocyuhLH5KWaRpyN885tQlAQI8Y43AtxHrGeYGYSE39REklr1O6Tj5Lkaqjr4y9YTXQy04vlS3ZtWWpP4Vxhna6qvKqaelJ9EgsSclTLXEOVrYXvkXEDKczxv6lS5g%2B5VHMSws9IxK%2B09rrkCNPmOpN4oAqnaqPqt2393hHJWTTTUs6WEG2TSQOZuyApiImfTgno%2Bcw5tPSvwY6pgGqwD7wJ1OeMNF7obswVnDcULkziItcPvCDLdcxaEj5aEM5LwgfqzSAdb8Epmk6A5J5kXG9AjsSCBNtreWwq9PMvVwz%2FNWadJiuZ5ZpMj1GKiaRg%2FH0fC1LPHIJ98eq5wyfUkV7rWIhdYnPKaqbBEnU0sQJhiyONH7kFOaveBiqxEMCi2Z4pIhN%2BH1agaqTz%2F%2BepQK4KMrSanwPGGE%2FgF8oXyRjqpK%2B&X-Amz-Signature=a2d7a9e0b805d65551bb7b27cbb1633bae0cef1366bfd335ca70b534945cf1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
