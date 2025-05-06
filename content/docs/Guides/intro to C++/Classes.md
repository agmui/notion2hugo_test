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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYH4G43%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2N%2Finlir%2BMpZL9a9pd69FCPx8A6uv5UsnzEsFsl4aOAIhAOslaDmF%2FfLm4tRw%2BMwwxX6BSaxm5NjOcqTAMERPFZ%2B7Kv8DCEMQABoMNjM3NDIzMTgzODA1Igw7HC9G%2B5pB%2BTcq6PYq3ANTpS1ovBddOGDtwS89Ho7q1i6lV9L5DwEZBilCgEF%2FS%2BnWoTLA2ZjlMErD6qVEpxAVvmxYV3Iz3FE1fbge1lJ%2Fcz00f%2Fiugifp0tEcBBu7rQ1ZxrkNrMZxHDzKqU1KPbXQOGi1TNA8EM5I%2BbYudr02bogkiagapwwlJ5rvFeT40EhmLV%2B5VbMS0aCRVik%2FEMj85pevpOW%2F1dOE8LrFw%2F0OEGylBCgCJ0FOtCWJHm8WEISBehaxLm2QrloPGVnBs%2FCqng1fWDNEBE5%2BpDTaCnfPrqlSD%2Bf54snwEj8gWFFZsJk0Dpx%2B7XIi%2FBoNRF91REAU8jv0IhXvWNthlczTLr2z1JiYpZBlUtzJNRUqKJCxvNhSYdKd4UljSjom%2Be%2F9%2B5oeCTmNZeD9RcOMPEDRkmDT%2BXB9W98z5lwnF644OqUag4jENWftWW261qizZvQgptHMPnm1SuaeUM0MqqrQ3sgtlydBT6a3bZIc8YCdh9%2F2gKX%2F1LwVhv6JKiU8Vw7k6aYPKx2qcG8XN37AZcWvpiN%2Bkpjcd%2FpMT0bxXj4h3w4aEtS2qkEnJ6RrreSGsIwnW5mXr1bxbz7abfXx2zVxn0LkxAdp%2Fp%2FD%2BIZHk%2Bey5iSTlPJdO%2FELCe4vjX0i4zDLwefABjqkAcp3LNMZjE6PhllX6XApCvUYLr47B3sT%2FtxU%2B5PGLV5OBbFCyFRRZU1l30%2FjNAyblcFvMjJgXxKylaVqP3FHJlgp2WwFTBv%2B0a6ChjbH4AdgDrGp3y1FgWcR6DTYMS5H2UVs2e0gmEbbGivshXPzfu9yg%2BGV9nin9oUv78ZHa3z1afb5FvuKgcEqvCSV0sc27E1VtJRVgI0DwVxvb6utqKhZmRTT&X-Amz-Signature=ef1816863a0273e2c4ca0c06582ac566badc7fc3e623821cad179d7e90b5962c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
