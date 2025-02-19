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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5CJYDE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICfTeOuSrd9aev%2FlsA5aL6tOFnDmIClupFBj6jnzmNuqAiEAww6mSYLWOsKPgjUTjsMmXWv9UQ%2FYV6O29I4I2eX6bfkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9MFCPLNg5ojO9OTyrcAw7eaILb4qbSlinDzTXak5mRGEekkbnpFIOthZi9kw0dj6KmBzTgAUCAEbpZGCvzcz7EPdthJvK13jnKI4xbPXVnISckdzvfeTt5eEgYaikCRVZXTSfswnFtjJF2Od2f77U7B7WC0x5zgVw1izRbRhx82VrkcfX6OxgFJ70mjecx7VBtrfvciADQYbnDqMD%2B8ZW4zs60avUymQTt3Pt80Pny%2B%2FEFcNb084e1oMVrj8AcWqSNMBmwVNSYInAdwRoe2FOfc3in8phSZIWZT8PmmoN0uo6mEsj%2B%2Fef3P24xhRv28hIT0sW8ugbPvT3wwWjmoKxnWFj%2Bso29zT7DAZTixomUHL%2FSeYwwoR7utPG8pUyx3hxFK5wHR420J6r3NeBl%2BaYbw8D94yShUCcthuqgCuqgapo9btpHT%2F%2FAN8YbSqId9gSyVrzXVl0CSYlkRBkhM%2FPXMA9XgeQ2PExrf%2Bvb%2FARBY1z1kK2kQZNK%2BUJAHjEOuN%2BxIlfl3rV5COxz%2BY0phhPLBJIkNolVs3bbiXn4flVIufEs0ZKJxNTarQ59CwntuUOwiNhDid4%2FxAzaOx0OnEgtoLrtZfVcu6FzyQnfuATaGhCes3KtdsTuQje05F62uzVOtTE7Nwjwdp9LMKjb1r0GOqUBKGrjS7SSOV8lvhF1D6666DlZIQmLSmDwFPVb7hCttZGLvj9UXGX%2FnDXNtb09wWR2Dr%2BgQc4oacbjYf4t5JLgnF5bRliZZv8KD46dB0iPoMCi6TpG2VwkB6oto4wGZ2o48qpXkOFsMCpNQP41iS%2FO3lRDhFBYltkBYVIeHmariKe5uqE3NFN3kKlNVotYzZ%2BMDsNiVyBZzS9Mm9UKRSz5mJ7olXZu&X-Amz-Signature=0529c91dbcf57d1d6c02a7065d85655fee31e9b98f511973a90ef6a912117b75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
