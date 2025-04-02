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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJHUIGD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4r8VISLCbiZ1lEntw4HJjc5Nzec6p3a9W%2FN151UlDzgIgLcRa4347%2FgNXcX9kdmooGXzhP1JVO1yMjUr%2FTL0aBxkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Hxs%2BHmDymKKTF5CrcA9yKeYMHcL72duq1%2BC80BwATqUNzvGT0efiFIx6l2yZOoEoSyUp%2Bx0kOQ%2BJFjr9wmodL3z6Wyig9KSEhZyXdUdT43NlACNhGQvIdmtpqg2n%2Bfw3nU0Q0DKjNMZHl%2BYpN4HHc9b8JThfGdHPIg%2FIyxj39HTyhrnbfCQUn4n%2Bi3Mwc%2BvSqHCogYRGJ4qsEuaDHm1r7yGE7uYP3E7lDdG%2FZxVDWVjPKeLDn2QHIkv1jMfyF2R%2Fb5bDUpyDOwcFHaEWO2R67XBdepVi1GR4gX99LGmMAEYppRgG9c%2BT1m6wfDpCz2iTee9ThpqdL81jrWUmkAYT%2BavqSkCAQHk%2B4XFLdQY0KJnth2PSVoe%2BaPza0GormaK6eRjYohN1CpNWgPSvj1hQ1Y0J3yqZ5O%2FyUSzWWp%2BSpC6EHRbao6yyZe%2BR0gJOHD%2F1FrcDNLV7f5zmnFwm8otu0ewAVwWXHHde%2FR0JByV%2BxYOw6EPwlIMaSQIFvs6vxaZNd%2BX3WDomPtLYp7hjP8o9VeVIc1PZC5TJmgTlEI3wU4CsOPAMjM4iPAlvKPZs%2BjB5vRnGW8Tlu2TelcYEccx9SHzAfpP8ZiHvZQYQa9oUXKlPnd7LUJ25BIcZgke2zffMkVtu9k%2FpCCdDzMPCKs78GOqUBjR982rxQ7nF%2BJQkwtg3ePDyh6fMMT%2BBOnoSbn1X2FZi6O4%2FmWCF8OZBDDqUyCB5qCVbXy%2F%2B14NQaVXab%2BSliGQZvAyYArOvl05nVNHpZjscSRUREusUEw%2BfzrC5cgJbXOeECCXAmyM%2Fq9g5c9W5fdq%2F9oZlYNhsDar9UxsZ9r0jNqqroWm6sqIRUgQaZAsH92TXeHR163GIuao8Ip5oofY0jjanm&X-Amz-Signature=edbfc14af7b8e904d0117896259aee241ac324fdcf147b00968203f1c4f05092&X-Amz-SignedHeaders=host&x-id=GetObject)

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
