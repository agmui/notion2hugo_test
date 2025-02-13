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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4OD5CP7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFmmt%2BaJECg8Bfus0qwPs5u5MoOqiCdyc4ab7BTyNBNQIgO5OuG5vWk8FJFx9wbCcyvQ7gN6s%2BAsIwEiYmTMBcLccq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKO%2B%2F6qdKD926IUCrSrcA9LbtjpypXUqQju51x0cqsGVp76CrNTwMfdHkSm8pIusWhHK4J8o2PUvcD7234YTePdVEywOHmiXcxMp3Lv2yIonOoA3sZyrjWfVtnpVkA6v10uq%2FidVit1XzyoTizqFZFUjdqGzd9fjlUMUNzJSpXGuU5f%2F2B76xpRsM00stHAHeWmo9fNjH%2FjSWpPytNeT40ej5q1E5hkoSe11RXEmV9unDAJHd5FrYXsQAqvCQWkYX%2BgOGa6gr9lCsLUwd3WAa0dinTo67fnKb0z2AzjHAppI7fmiGyZrenIi5ewrhuGxXRe9cyFEStofXo7gUnNh3SRFUhYYVKwMx4iZy970pxqUNFtfCi%2FjBTuj0FAF14TQe8Ra0dCm96u0y4u7X6OIjdvHaOxezd68%2BVs9mtM5MsKGsKYOS9YzgTDPx8XJaF%2F1OEHIe5akIk6ST0Uz6EcWYXTeKN2JPnZgN6q%2FrMMAeXBsyUuvFAffSzvM6SyaxsnAwGD4bzBrIHIUnvHwUYxgUsnhZM31%2B5Ou%2FURxcenCZOQUqdWr2SaypeW3k3BwrJB%2Bb0%2Bv%2BskjOwJnmjM8B9xfbePpqafYl2nyhgvWCQjn0ZpZ%2FYdaA9xaRwtVHcDnGrR0qeiNO2lBKTN9RTJhMICqtr0GOqUByP70jB7Qhdx4ZlPT5erpSQwGfN96ZeLhLB6Rn62FSTHZR4Mwo%2BUwg5Q8Pk3aPSpavzx%2B3TCI0Hznq4wFUg%2Bti3WgF7%2BOYPMe%2BM8lnTsxGD5UwC7UbFVzDtI3BA2FKLL6jKvHDurjRgXV4CJ8qoMjXREBbhM144x5aikrjtJYAZLuOEmw64Ks2wGkbzruLd%2B4P8oRViSgnv9SRT%2ByDbM%2Ffg0xDlpe&X-Amz-Signature=02401e41412bbe423915eb7b5eea4c922d7e40952f3573015d4f862d1ff7f070&X-Amz-SignedHeaders=host&x-id=GetObject)

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
