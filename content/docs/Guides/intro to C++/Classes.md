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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2TGQEQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAySfezS%2F45rJWMS7qNEyuavfBOEJBGjsirrK400sw%2FyAiBzE3J6QA1sWCZue1sYXLuuLO1eaGMb%2FtwvyxQOw2Ob5yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqgjiqD9KDjmTNDqoKtwDmTiE10Ba5pMW%2BOJazG%2BWJYkpiMv1VgErfZOrtmzjfOQ26Kbek6xrFoS3qmLiwevTxDffjQvL6VGoaXg4WTv40TijMjAAkGz1YoC8PEBSyBGsOIxIQA5QKvi3Eli%2FDFB2RGaDU%2BXWlVFdoLdermYiMkW2l1GaAo1IuiJ5MGf1c4rMpfm3aCHA98ha5AVFDdEaU9YilC1kwxdZx0GPBe8w%2FRwQ3IHIFITRGi17kSSO3Z6VF5Pa%2FbY3%2F%2BthSHhVElt1hj7X9%2FX%2FjEFFaoeRd6LDMy1k1cGpheWeFZBjeKl6u2MYw2dbifpahlU6LNXBrnAel15Rr3FIIcpneDtQb2cvsInnRrGh7MU51%2B9sPPDBEGwATykHvNAoypY%2BOLvF96XmJZjxvluHkrWXj4dN4P8YQi5TGHbHSN5CZF1TZZ6VNBGfJUMw5K6IHnjrS4lUjRcgtgGJjB2apTmwAxN3FAyUXGg7LcCAzH7nt9DiopLarJPaJQ1hViFmUI3k7NkvN7LKhI%2F%2FsSUJF61YnuB29zQ9I7Cg%2F6JkuBOQlko5Xt3qOKjkN6bd69IZfJzaaygiIyYpurwMnNonHJZS85LuO6rTYOrK9HhQgQaJov4vxMo3uZxYOqR3DGg%2BoEGzt7YwlJqsxAY6pgFwSrwGwftXjSUvdw0XekZ171X9K7ntVTj%2FHIyK567x532Er3rmqXMIfJAzJ1YsrCf%2FYoC%2BUSWCGWfYRSYkvuueCMf9%2B0Jr%2FhLLggcpe3HVs0qeMGyNlgFrfJHlmarpoXH15XNA9dMPfcQbPK0qOBIyaIph%2BUyfv6Q5PW8fvStl%2F0HSzK%2BUpcEp8iRmI228qF62KVJX4mJ%2F9ipBw9XJokSDJH0CGiiY&X-Amz-Signature=d44abd0a8c39a13a7af5516485baa9c2aa55972ed7010596671dabeb9e91ee09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
