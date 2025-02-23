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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSFTRLP3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KmpduI4A3pmrBjlPGKFIWkJ%2Ffw710UFHIbBz0tVcRQIhALeXxVbFfn67oJh10D4IkpttxB6GARIW9Fm57T%2FCbvdQKv8DCBwQABoMNjM3NDIzMTgzODA1IgyFQhgPDekVBwiRB6Iq3AMFssCcRDDSLRZS1jJfDMf1sINWMKFQlMsQdbSAR%2FcoNQsxbGMO0xG11nJHc87gKbiQWRo7ORsl57q3C71xItnXU6pL%2BTshLRVR9Vqxi7zVuJjq6RuZR3LOQS%2BX2v4F3wyniweUO6qTbNpL82gm0mOutBSZt2dfQZ1bMbO8RWc2KWLWg1mX70adfvtYrcQdsANNah8ywLx8ZIRdoHEnJoYXcdSldnhwr6ujmppjoV5xMgia6heVmJnKbeuu9iW9T6LcP4g2pHNpaYE7fG43xQftbdzDFslHZ6kI0gpzJgaHp41ATkV6e%2FTxmsYDbQjqRdo%2BhDP3JMSmnROX468DC3sN3Xhl1U660u6YAwOSUXuaqq8umXrsioAeyoiIE3a%2Bz%2BieJsNrHd2y3IkOXsYMHSqmgajE28WH0y1CIMUqTtJviYkD7Ur7AUqqoJGaT5eGTao47zWnoi52kaFIL2M5LV7nV3BQtxB403RKvVEINRH1ehChKU1Ew2NOG1J8bFzNDiwR3PxMenpX%2BqZ7W6lgBXdonrtNqR7X%2BH0isBeEe6lgqkoi%2FwSezI8O944c5N%2F2eVqlhJAUzbE01%2BRzyVa9zLdzK5uE6A7fSrfrT0v4Nq8GOY3EzbGiEfOLLA8%2BrjCy3%2B29BjqkAbbtRKJcEn%2FzgYcy349degq60A7LT%2FU6pVsknkFZDdf%2Fbw1bKtIfrEuIgpTQjpj5hcwiHO95tL5JHgX%2BoT6pm7GYyxjzoPSDBCnxstzJoK%2FvTSwUL7GKK4RjKowMNZUz9yMG7PTGOy1kZfMEqm2OKEQ98%2Fnq7f5UuFjuVtT2gXMYWJ8Eh3fuyQByyn%2F9Etw75Y0IC9E%2FUf5R6mwUxhNrHUrBjg2F&X-Amz-Signature=8950d98377decdb6821df50e594b9e60ec9f79773939247ba76f0cec9b906dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
