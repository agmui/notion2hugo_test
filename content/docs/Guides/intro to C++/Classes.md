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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUFHG4C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCj3ayC0yd7iVwLW38ggSHzfM6eLtvmCGDdkQfl9VP6dQIhAJrNn09%2Fwco8JyWgt%2FLyRcYd1dRxS7JPeWEAphqe6UzaKv8DCDEQABoMNjM3NDIzMTgzODA1IgwNo9%2B2SiRFHrgV6igq3ANDvTiuCBNakihZQkWE0kcu09d2GWZBn7%2BKs2V5h7MXSLj8BDqjMbLz0xzPKzSVuKGgGoTdbrgqP9%2BoK%2FfItgK5bGeKlpg3CoAn7I2Q4uTMGdo1XyiviO4%2B0jL70t%2Bjde6kOTWTpZ0yI%2FX6K4tJRvjcxSpH6RsnBCQiZ%2FtJc5fXaQH3Rx8G5R0NVStSevLPi5pVzd8u92Me3AXk8Gu%2FtRfQU62WuugfN%2F2wccNL16KKE7356Jz9nIiVaXAq2%2BYtMgGD35zmF9jVUGZvL7LphrMwosWcddAqqIrYgdzSujSAA2xMtVYOYwri1CQbhq%2BBYzbKBjEqcpo1%2FRfrsWWAVk4Ri5qHJbTfvjrUcVPutp6TN5xXTDnpbzlTdQwf7ENnaZ07ADj2wyWrcBfMkQ%2B2E3tZNz%2B8UW3jaZs%2BfvrFFHUtTfE3fkaFn62BUbP%2F1nFQHd2tc43FH510RYKogcLTubVvmzsNUxSZaY6Tit3BhYySaoVEF1VqI3etJogOWDuqzwbk4PlZk9GkzNkbQAjQOt2EFElOtFZ79%2B6uUv%2F5Q5pBNmacPwCYydD1xbXJe9EgrGDpAqIyCJaR65HN5ANycqG3xP5HVoTiQhIfhyrd6M%2FCkzoecSws%2FXkjgTtGxjDK%2F8zBBjqkAUqfH8gM30JVaIWl9YLwRMaFfpGa7N1Uh5P%2B1i%2F6v0g6UhJ3DDiq4g%2ByY5zSWujjtv%2FabE8SZCD4ZGwAiAkeFEk8Uzm6dRUT21xnqJZOw8pYwQyDM6cazJvD%2Fu0ahqKwZ%2F2rCY6897jv7UH60A08oSf7M5Bv6J7HG1T0M9tC7JQIwAmUDO6vXOVNLEB%2BUPGOZ8LdfcV7LPDLmz%2BNiE8WYqrko26O&X-Amz-Signature=8d072c76c6208cb842ec69a55b40f986449a78a412190805ae3f736f93682b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
