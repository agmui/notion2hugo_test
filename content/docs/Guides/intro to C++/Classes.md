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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXKWD5G%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQC0iQalTtMNvSINULNfmGtxzvc2AY%2BdICDNk1D8EgUVZgIhAJiJXayH9p7CKDFdze4LL89BGHrZ8aro30EG3m5dMvkaKv8DCBUQABoMNjM3NDIzMTgzODA1IgyquLwuQ7QgJXjuaSkq3AOQdfzoh%2FkztQOtDdUhkPbZqcjmvzKdMmV1ZZDcDDbnMj3p%2Fw7SkkWGR4HBGmPOJrsWUEbHdQPhiXZpxwNnDyhSo2FOXkB4g4w8CyYMfsE5%2BR5c0M%2FfqeznsLY7gBAZRDQ0WK44rIyP%2Fyh6%2F2y7IdmtKbi04KVsN0iXkFWeWI5HhbkBAe%2FEF%2BJPcm5AKUPgJDcCCNCmYGX5uS3C3IYzLPStBaBepX5qYHBT%2FNM7An5PKpDaNUO2AnafCVrBRGNrfl1Fy9wz8%2BbXjPsarfaevqVYaCaXxJzLt0e%2B8YbRoe85JvIhtWbRN0Mt8eOe%2FjQBClCD8dyta%2B6FZ3RUv%2FoLVUjOLmJBbmW1KEilzope5T6o8hvGHJuO36VOv9Cs3RRC2lLzO6Tj%2BcBolmhLe7K081K%2BOQfdJtr5%2FO4jXlINCO3BWNq4xCxj8Wzt77qF5LCIeIO%2BTR0JtwQGCgoN5TKnt8lhgMDOrwrtxRD74Yy00GjDBUORAbymV77w977fU%2F4yoGTVlXEm%2F80ACzlzui4TH847zLB45C1oT0z80zmS7jf%2FRChssc%2F1HseDtiADdJE1TJ7RlAfB%2Bfscj7NkYRfFZ6ig7Y9t65AqVsrA3iePyLWzeDglmml0in5h3rwKMzCr9OTCBjqkAfDnLpv5oUoXoamRojst6BUcYVMvHb9E%2Bdb%2F8ABzIH9Trj16P2xlnw5bSLXVynKGSi71AURWCPCtBn9Z8lY7o6lRGayo5WRWuf1TNzbNx1j9lSkm4ThQRFx9v3cjirHB98PKkUa7RSTbAuN1LfmKaw4DVjxe%2FY07h8DQidFTn7Cp23aKw%2B9jmIr%2B%2BKHax7i3TpaJwT5y2b5tij9w2b3BXoUQh%2Fg9&X-Amz-Signature=b978a1b06323370ad16aab3418a10f60c115b355c9c5a2a08e176edcdd308593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
