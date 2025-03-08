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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKGU2DJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDAZwgPW7PQSgaScnV%2FEQy784Bc5UG0Ox12f29p1RzkbwIgLQm2umtJqXrQ%2BxmUCs7I5r5xWR7qk86bCNrZpvQ3%2Fbgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCqe4zfsuTOX00%2BFnCrcA5W1S6E70lbzZYw61mhnwoof7mADwxcCbOK3glsBFMAUBqnQ60Vy4ybkVA3yvYi%2B2e78QxwueQHTC0%2BxqCcwZihtuKhcbQr5TpbetF3AjusRTlmcKRRVAFKvu%2BVTk78gM7QswEtFWh7GSCY6FYGsIuKbpLQCmnu3bStqC6yMTMguP4DdZaExgLcqM%2F2wDYZ1F%2FfPP%2F2cYXRWxOSSelg9pOddbCuNcRMXA4woS5i6v5DOY6UEg1ntnyvYy7keWCwysnsyyOTh%2FIE05kAHF%2Fpm1jBqV%2BoG25T3M5%2Bn3iZjc0lORlLF38SXgvuALxAZFEK56A7P2OOjDT%2FvZ4BGxZ2ctc%2FDUrGEY61GV9JNaRbE4vaT6goOFFkHcGyWaIwkXLMJlNN85EIiznDMMwXb%2BUu7dXC7%2B3eZQS6mEiD98wg2FkYhPt%2BOad8uNz5rG2dWqMoPXMsOPkAzMEr9IILRfhvzoS3iLDhkyr6i8B%2FMfjL5niToBj%2BsqeUQyoE5bK1NpgXNzEybIxQv4ApFVZtpGPZZOyj17tU3k1463fAJZhulSDHLk484B7QUmxE%2FU3RJnzO%2Bl0mbd%2BY%2FQznP3ktvD1fIYkWdSHQMCpg%2FxIP9NDns73A9gwevFnhXGfP1k5LzMMfgr74GOqUBg2rRqCMa%2FL9SJ6Y5Wtd9zyUahZx7WecKTYY0vJiyVE%2Bi9qfzwJYMh3fiB5PLxuoIvNcHO%2FzEUskSQGCRCrGoYd6vt%2B%2BNJewjSWztCSb9lwMGDz2hoQkyq6BNYAki4G4s8Rsf421DDmOvwy%2BGgEp6f4kXCkdTyJjYONWtPVQiZbN%2FIp6CwFpUGldnHJzfri7CMd6inGUsU45ULhYDNK0l9aSy9trA&X-Amz-Signature=d35f3b9cbaaa925b8e973002ae5559d748e5e21f384f0e20989ca34b4d372530&X-Amz-SignedHeaders=host&x-id=GetObject)

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
