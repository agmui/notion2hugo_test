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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQDNPNP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCwS%2B8tNwo2H4NJEsJbyWjeEUOzp9AbWgzuvWK1lmp1bgIhAI9WCVfMo%2FKPaKFOE%2Foc9aHQGHaxJlh4iGFPy5P8aendKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5lEbspU%2Bx4JdxlvUq3ANm2YstnWZ3MkxPqqMpovG1zwKuiExFchJY%2FyFtSvj35VwWibgBJe32HkwiwubUUrsmaw6ireeRBQjmRHDhwIB639UEu9m9FDdljw3ooHp0TaEWuxCR6yIIsGS2D7i8FVGZhvIlZR552GAXLqjYaz9Y3o6MDfEqSJPZWw7W0cDQkUWBzXpU6Xfv79%2FbXZKyj1k5T6jFu28hvLs91fw8NcGctnI4PNuBAd%2Fe8gCNa7hutR5mr3TLPoBxnZ%2BOH23DbcEOCs7rdzkssKJzepccUC38Ta6JTjttBc8nw08KYqHUUswu4W2ke%2B2EGJqxH0Vwavk5OgQQFv4O7Nxzoj4HbKmncVWiGo%2FwD4VuRdmNmRg2IY5BYSRLaNaje1lZI%2BFjFUJDdJsbU96HMJ24by58pOpq0B3t9mdEGoIq6G%2F9bGWuRc8K1R4x8DE%2FPoAh4Etmp0ElWoJXd4qWjh6lwO35XpN3ZdB78WthrHI8EpwLENBTCBPRVaTFCbTd1BCiXAMArDCjUj%2FVkYEwo3zBzy6yL%2FyNLtS3ixhBE6y1SWyreBSv8eeaT6gltzoovQkQlJeAOn6ANPTz2zbnzQWtY%2FY2h%2BZdOlTfLjrYm5QoaHVBPDamJDlhc4hFtaaAWuGgeTCBkeG%2FBjqkAdzqwM7PeDMKu0susYuD%2FEAKvAqf4qHrEniKboZeqf%2FyFovZ3Nli57cx22ZL1%2Be9T0eMt2g2sT21U6Nb9okEWEaXfMggb7VYEPhGllx3HsbhnGKDRMjAmYIlABjNaF9UrOk%2FLJW4qY8eLMP4wgv6KHC62tJvV5dtLsvS9%2BiLvemURq3Jfqf21sGnaayN%2BV5hJphYIyor0TcYkU2SDPATBvO%2FEeVW&X-Amz-Signature=604c08cb3344aebb492fd4dc60b2e3c537cb572eb07a06d146a8eb756f1bb9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
