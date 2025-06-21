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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXOZGEU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHzrmv4c1yiHTcT1BAPDSMqGa1RhQzO2ERR6WGGuksHAiEAvL1cn%2BBKSaaGBocmRUBZsmfwApV9l5mfh66SRVWHj8gqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPToXvyVBW%2Fl5GlW%2BCrcA%2BJTmXTZZ5CDgQSFs1QQpu94ZqtijqAYxr%2BUGT9WdfqbqrYhwirOQDZ95NwFB1QCgoBmb%2F5MytVaOjgPyR7ovBzxMwxre7YqruQ9cE9I4AHhbtWf%2Be%2Bl%2FHCpjKUCNzZ3lvrzxH8gEs%2BYDfvuNRcnGyxEEyN9FXZOzgdcaMM4J%2BktWQYszQASMFn9bVXiyQnXST09LhtqPOE2OOtw9rZq30gGnS8a%2B%2BfRXFVezs2P8%2Bcqmeo67ErJC1DDGUW%2BBL06t3qcmH0ErA%2BdBVSYueqJQl2HbsFagDIgKMUhKYmKq%2FPzmVnNrPNsy3WhoXOmuDSpN4GownmgxiG99Y0DDBtuLYaReM0exXpL9YqpN0SVjCUriIiaM0CKNbNF3H%2FPHuVhbQSybPZiq1p8oR4t9PGqKQyNPFxRSb51lcxLgcQ%2FW5HlhMQj2IoZy4amqaLBtLRey7ULTdmvOrIB9m%2FMkdqm7XboY7pkU4wzEPzDN8W8BtDqE7JGACKhEcA5fQBsYkwlGvp12QOePkVcpU%2BzARgkBq1PFkwCKa9Lrfed69EH6L5J4VjXYAr9M9feTHNshvrCybFK9uYmBLkTj2gmYXc%2BsCucnoc5AgNURVunpNMbFaQYR3r1iQNFI1pqBh5UMOyv2MIGOqUBD1CMURd9cA27Uxq3wC%2FjpxGmg4gX8vOGZoGnjYpZzqym2qE5R2smODZ9qf8VP1sZo6A0FIuFx6Lsj8d%2FduWiwt65G5x7LoHjOHfHLbQiblxfc5sco77ouJ5Cez8mepSVO%2FkorOaIeRBBRYbuZmAWz39ghKKTaFNEe3v9UcMrDf66ZIiJPBcfZattVn3b40nkzKP1e2tRmcQUCP9KxPAhfSRiA3Az&X-Amz-Signature=af9d5e01d76c4b110e0d72186a8e93d34539a55ae57e207a9adc2bb3e2afacd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
