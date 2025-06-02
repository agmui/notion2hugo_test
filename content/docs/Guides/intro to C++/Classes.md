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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=abc925e784be8d78c70de1b9bb9f1baa87692ded2a8a1e626b88cb5d38908748&X-Amz-SignedHeaders=host&x-id=GetObject)

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
