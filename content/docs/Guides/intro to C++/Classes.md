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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOURMXUA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIB9DyKWssFH%2FR5HT2%2BZIN%2Fhvk%2FHqlMDJmAnIrd%2Br8F6fAiBdQnFwOVXSCIOHwmgOWOB%2BKE%2FcPytCslUAABXdc3v%2BYyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMhIk64cJ6hXm3GFJ4KtwDPrJ4ih6OtjBuRgqLV9zu3nmIbuJSd%2F%2FyywuoErL22QOxxLFjgCzD2LPv8%2Bi1CHeV8hL%2BD8moYokPVlNqpjCKDcbQhzwy1Bs%2BC1o2Us1uTqkUXubzGrvJ%2BMMUUV6d3uoQj8VU5vVXGhs60ypgM0AWkfF2evTJFZQKJrqIiX1Lcs998mHny8aA8H2FVu0l09WH1pi3G9uHsS%2FwELApEj1X6I8AzUg5FH0Db9l24WYmmGxq0J8gWSOS30ibFKfzZzJyBX0qGozj1KsxgOhpfy62aGCR2G7xEqhUE5nUAd7VuTK7AWxedSV%2FYJBLtPagfOihaW9h%2FJwNgDAVOERV7TXf1NN9rzY7%2FpC6p1cCgyDkzHbYpvhENIOK2KqJYoqOTDmZ3pdbgyZy6OmIYD5D94HPO7fHgaYtTNcMQCkRJqQxDsIbfnOfJTRuzGE9AV9mHL297uDiFFXkJDCpgyv4npVU%2Fsv%2FcLVe6827i23%2FAzkQI9du8OBx80m9zRBoAiDkdJ5fZ0dBi1RbG51Z0dv5oBJFp6JIR%2FX%2B4FHL6DSzTUE89iEtfzmKHWZtW8GumLDSkGcRfBfwMFR%2ByLgnFrbIXpKv%2Ff2uuBEnA%2BIAfZ4qSplpKQKIaZmwRZfseCQue58wjczRwwY6pgGsP4qKIis%2BQ7EA%2BjTSEE9DATinYMABNCL9UcaQ2gFVaiD4%2Bw9k%2BvYEo464OgZr0D2M70inCL0RZv9bVcTzE1rRJ0sBvgK9dAdtsm10%2BF%2Fk5%2Bm2LlmNxtladYpIJYznmNDNc87SRn2%2F8durKjL2DrXN7iasVZdh1jWSLamdPKWjR2Te88kotwBVmZb3hKE05k0am2AcUxoX7CVmAM88uf7yy%2Flkbd7K&X-Amz-Signature=aeb81752f7843157b1a98eec9885b5efd48df42f8e4c813f1ba5de625fcbdd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
