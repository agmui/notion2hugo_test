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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHY7M7OO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8ukg%2B9bmvNTZZhLFyZPj%2FygaPQH%2FqcqGrh2awxXonIAiEApN3uF3EN2GYxYr4bOrWohuJXnNj9MCsLp%2Fl%2FgwsoMIIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOjUy19Ov9x1JMRqsSrcA4gmr7zcUQLmPXeYhQGnKuvI7U66VhIhBNiOfvCmETFCYB8XSyK40VSfpYsgJBHkN9gKOQxgfBtRBoUfs8izh9%2FZVfbIWxIsmCX%2BNPhzJ0nUqacwk7mjnryvEvzZM8tA7aGZtidkwwoyiNSymoNnpqulNZTqH4R7n%2FNetPW68IBiOTuToLJiLxgogdc3953id0ryd5Ejv4RpymNhOHQgwq15jcNBHfMUTR0LDDg25bxQ9YTCE0gf9ESZYdufiLl3QkoaMbzcq2J6SNEp5FctCRya4CStuhs%2BPItoJkRA2iokjLCmH3AwUGQEtn4daYvKYnhP6Xu6pq%2ByoHFxwSgRcI1h6%2F2CzPzAcfMXKrqYYyk2oz8PGGML7U%2FrmIMAZa2FCfS%2F2PpeQ0cvhzAjL%2BgwaKAs7cFwa5ooUvqZuufhOZlJunFpRSKdZB3Nm07Q4rjluLI%2BSKvrcbuFq9jT16vbP%2B4O676RTWKWJ6WteavLstMS6BgYQysFH62PXOc2BTZ%2F8s8VzF4YZBbEGDhBx6baEfO%2FmmhCgGbNHdNhPZN656qWsiHtgQW3pdnyUmsq8XD3m%2BrlwtHZyhCiZBeXUa7Rhp8HLFgCkF4e8T4HASiV42S7fhlh5wrYkFheUFFZMN%2BO9L8GOqUBZdOmvAqRKqfj9nfOjwhdKFeD2mapLSVhmTU7yhj%2FofMH0i8p2fYNBCBBq3JxPI1e%2FEHJlZCTzPYRh8CtPLakjG%2FLl7yG%2FVL6eGS1JW0hNZmBWNrXWOrlG2lWyQUtlt7YyniGYhK2fEwX1K6XII5fQzxU9ao8YjmgCTRtEttKtupSZsY8o4BermgVrwauC5BojgnZz3cL2PZvYXzSi6WEeZXgyU65&X-Amz-Signature=8cce7fe632a87df8263dbe711c082a4bf9ccb1fb197a06099be2e358f8e3c2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
