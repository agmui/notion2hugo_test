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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6UMSRVY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjR6FXmNHK%2FBxeBlAHdRtfNxZsyLmfczxvDErhiOk5DwIgczt67eDNQLspTdzovFqbOXCfefayJDU5TSn1D0ptP6EqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUG238ZeYmXXOS%2FhCrcA81BUYhtOcnGUsn8csyCzbii0ovBjfNBc9Q4yF%2BCpwZZd9joBuKk7r6L8Cr6%2BPWJuNm2g8Nlsd5xQPOxgQH7oFBVJXTwkjwScKgn42WzxsqU7hoVWNdQ1sc4Ah9FRBqMUgR0nrtSgvHMNsZaeLGh9v7qNrgZZyPaYkJAWdDbzqwzPS8df7e8VCd%2BKXW617HScCtH1Ge%2B4Eij9C8xr%2Fawp8xCA53V5IFYhQ%2B6tcK%2B0vgUR6%2FZrBxGAyU2IaLoP0xfsMtfKjeLzLBkoSaZ6SPrNMf6hYG5oLw3wx%2FopC1nXW8Km0EpUsk0WdX2dNrz%2F2z1zgsYs%2Frm7wdjhjuGC%2B5MQx4XAwL3z1xcHc8vsPMpTOJOMuwMok5Wp8IOfeyhODyjEFZfKodHtQZ3QkS6CiRQwd0j8TkbwgF0I53xOq9yXW7fsNOzhxGHU44I8aqBPPMdxCgsUj%2BDAIIX%2BGpGgrvL8BkaOlnS4pE%2BaI4YkZwlWNQhdL7%2Fxn3XN%2FQ7uClI54hctFmZaQLznCsNrZIVDEQ87gvsLy%2BME3j4m7GBSc4Vaxhumka4wU3BRzYErKsnwIjh5aLMaBqzQU5zFAWvcuQx6rLfQb4pJ9oOult0GiBCao1Ae6DSyuxHkyaLa4p7MJiEssMGOqUBaPytzi4EVnZglOqoZEzSxipOyBL5UaL9IYBExH%2BfXCInqb00SY3GLIwCwIwAtxZ9gIQxIlZG8NiOoFanHDvxuywWbHfn2JnbzC5GycKyOGZ3t9NxibBSmd46NJL496JkQQDr6TSyxRMD7FTEFAkf4SbOFmxPBGyBr9LSGUPg9Zlp9KnHTvwqybIcsIVVZxk0%2FmhUBNix17FmF9RsGeByjzIpcDn9&X-Amz-Signature=224aa65c82c986be35cfb6130d8e3ed8aafa1d682236bdfd0982c5615e43b3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
