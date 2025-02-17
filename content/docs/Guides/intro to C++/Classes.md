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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663H7NSEM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCkIamebduxAwoF43PFLE57VgRXPGjbByuFMlbZxLO15wIgWwQ2uromot3zkJ8dNoQ9pcdeVaBSsYFFmkLJHkekI3gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHY%2F6shBY8VqbAu6WyrcA%2Bqf8lOp56ZRRnefKdWsnrwsL3BzhCqcWKq%2Fe83dWAOgGVs1UyiHMloUWCvLkhOkXrFqDfzi7LPmi1J0sr%2BqQQCIFQfVz9gFaLV9zJqyKErO4CEfZI3VWS1tdT8UZHXguc8u45tMtUdHhvF4E1coa84E8kLnZqegH5qZasbpodl%2Fq4lTtP3U5iCylcB%2B9bcsKqXw9sG3Sed5mUrPbtjRRx3iWTBONJvOpTEg5tVgQvSZ6%2Bk28DteZdZzw%2B2KTZxF%2BkcNvTETOogrsd4HMYgqyE7o5FPTB0GYmLxyfBv8SAqw61rK3u2qNckT79Ib18oDWybisUX0HmOqBLYuUZCB%2BFMm%2F30QDgiFIfu0LVhyKI0bZfwKzPFEhQTQ71aCyTTF%2Fi15qAAQgA2a%2FufLITjpmkJylUO9Vq4fyqBLpX8AzwN9S1aDeb%2FgLyKJaO%2ByQnQGDqY%2BOB4Utbg6QrRC2UFOeHY5OoJMdt7EBoFmsgHuOOrpAoX3cnQYL3cq8IVnes8qM%2FVJbPiTutZnZWLWBLATZLrjHsIi%2BLH0UlxSnudBHO2zpMPRfWOmMhTXeF2SgUoCBfrdOpZUt6hHZbD3cT88gPopFrrLPYP8I8cvq77fhIqaO%2BrxH0PfXCO9aDwAMLrCzb0GOqUB7fTYAyhKsGAhL7%2BDg%2BV1gquqz9THmq%2FtBC3C5e%2B23E0nZV2E6LG2QYT4WUD85%2Fyp2Hl2GrYBSLt6ovuExYa%2Fwpd87Uj4Xaywv8SoxsRrJw4FH%2BZENrPau5gErQwZvNdrxOlqrzyp8XKEE0jTX%2FvP2Jd31w94FgjZq3hFUOtwnVWYcS5Haj2nwr%2FyA9cx5nurM7NNQJcTPpJsAjqJqYgJEsrUydbv&X-Amz-Signature=db1000ce2820e5b89916a90ac9e0440807a897ebe74bbf73303b9e7f12eaa7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
