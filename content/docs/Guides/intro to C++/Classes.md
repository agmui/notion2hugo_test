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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFQWNBJL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAQECsiV0WL9EO4EsoUIHpLP9V1Wu3zFAJ75uXgCnyk1AiAEH7pbhc0rVZ4UzRquq7Qmby3jZk5BcfRv9XMZ9%2FuxpyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuTAZmkeEzD0yLRFKtwDG7d%2BiZlO2XDH%2BXFM%2FOltw9lF86OUkcIZ%2F8dOx%2BEdZV85sYoxxbPwdC%2FUh1KO2bSsdua6q5qGo8emnqUeId5QEIiV7pPMStr5lMPwXRNrFed8c4HP33%2FOe%2FmooCywx8UH%2FmiQBgyZmeOZMkWsRX5FTP5Eu9C6WHpkP5o4zfv01BZ3CDE5N0DQ7hsmzcJGomQfRsadnN1gG9coswvhqkijp9FFqyDXoaoK99R7XDBfXZLLkOfv4nxXS%2FPSB5V%2FzLnugOesW7nO0vX40%2Buh2XDxp19wf%2Bv8qdHoqMLL5OClCOC9qIPsuEUnCsRiudOtaR5uORS6bOWDFVgqzOY7qHJtR3iNPyBMKOZHZ97V7X%2BIiguaWgKwBfTSGblQ9D38Cnr3EgN85xB79EXh7NPOAyI5YZEkGu0wfAGougtqksAloEhtFooX0iPy3ztrskCu96QCi747x1GzVqOU6P%2FaRZ1Gs%2Bpw4iVkXJUg2%2BIbdUa%2BuDGEmAMRq6Lhea1EmJ9bDFcF%2Bb0ykgQ72fN7IcaLkyz7D6ZzhH0UV5atbVaVhD%2BWv35lmt4WTfXvhzIskpGn3XIB74uOYzo%2FIenotaOhMqPGavhzGArLp23%2Fp%2F8WJkzskYBLPxrXOg8wMVq1R9cwofnSxAY6pgEyNsK2BsomZ%2B4hcB8HqNGTeYphUcV5cT8qWj7EOs1xi5z7xjoGtcAQF0V3qUt0cI%2FKk%2BYOWyxPkeK0YrTxoX0cbMqrki6N29yaDImp4mwwXA3uM77efBN4NVpHG5bJwPcnm7%2BM38nAK%2BPrxT0QSxzY3MUlDAXtM7sn8oktFuQWsNZnGR5ZBzyq49k3YfDSOrJDwVegg2SVCSLRHeZ53lRX532au8zc&X-Amz-Signature=08cce4666d05d54291f80d14100fa58d462d1eadab509b84b7b6add331f21e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
