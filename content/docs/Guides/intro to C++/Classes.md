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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q57LLAKU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCtrBZzbue5AuZTA4Ts9CgrAisorEaW0%2BBr6vti3tQMzwIhAMT0AnskM0hEQYcPjYJFC1Z84qM9ATkoYpaTONe6sFJQKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BFHuXU8v9kDEqHAQq3AOEYcsf2XaJAH6cHexcSLRbiGZluxRiQZi5DxVeMc1GsyE12qx%2F8IYGehoagDQ1L0ohYaFY8f4g6rb%2FHix7R2ax8zKEAHr965MY0vYHyKWzjC%2FuZ2FmVVXkE9skdCcRWG%2FIc2%2B1K570RQKZNaMvvz5eHwV6PB7rFfNm%2FtMta2clPMUYOHuE6CZ%2FBniHAt5fPIFCAF%2FuojC2qMKz%2FJKZA%2Bry77TdNJuhlmME1NpO7zDrSvObMNw7YUVWCgCFNyirczoQoo9Q9Uu%2BsiSqF%2Bxi6MCt%2FtNHKd1sp7IH%2B2son3vsKwuKcIrcgvUSO1nQBZsWSHKTA%2F2J2j2J1Lf5zEEcjEo6Kj2%2Bw6G3GhftB665ZH%2BQPuFMKtJ3nuZbN7FrKruInMwP%2FHcWVFiBBYjfiYY94bfNNXQeRzjpkWge2g8yTujwrQs%2BrOd%2BX6Vq%2BISBsBr%2Bx%2FtqHtu1p5NOvGqLEEhkuKDRM0Q25lOz2qsm2rUzsZcJeAc26Ra2dMobFIVGWcWSbLtJhxzLUMKP2dWyMCvGEG5nsESSi%2BWzHZ%2B9HTPNVxtXftZ2F2Ey%2FCp2E6WzGsxiODu%2Bt40baCDD3pqJCdcDZkZZOMVzuDPQsuk91UwKgvkMQmINoffRR1iZFdgzJTCihprABjqkAUssrdiQTGOUht0E4fZPrLiOon7cPH8m5dXivyPbWxSdD0PqTD0a5KIsdF3egCOXuuz32ZUSch9%2FmiKDI%2BhHkEjT4PJ6nvybrhTPp5T9e3RVfbDDFoMDxQcHtDQ1qvMNF3whSVq8nSyfDAZ4lvdJGIAwBjTcrPdmtempjpU2553KD%2BlDJ443yaaQ4g88NNy%2BClHCKJR0G2%2FBw49GA1Og0RbdCMI1&X-Amz-Signature=151837c2d66188be295067c6f05d4944591efb6003e5aa0222be4994d3b3fb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
