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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPLJE46%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBqXwYC75ZVIXUPrfJX%2FgAiFTBsEa1RtxaUC5%2FPxq6jwIhANHUub0Ym1BQ5fVZOL51plCblaCUGgpASiDgfMo%2Ftji5KogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVS7taoUtt%2BOs%2BO4q3ANbt9bT6GmIPxBWpAhP9v9B%2FO1nBnvm24bjDaT7MceAEmCZZYzPs%2BpjWPEhj%2BnyypKqCfm6tZL0uwUBlsrKtyfUoK3LlCNPPlO6Bq5l3FeENbJxUF0d69meIwhMdJIDfKtOrwYrnLZAvrsc9xLF8I4AC%2BqrMsR3p70V80d3pCvKbq%2BRV5nX7ezLXPOOdwMds5NJ3pUvh1YDAFjAruw8FsMR7B1MU%2FGVDqRwIHePMq600RuUIs0y8nYNxw83uO7FpGJ0K5LF1lSDfkomVXWF5MG02t3gaVVxObJWw1f2GlPKJiOg3aI5rRpDk87yi9UV38JING1CVifxP4MwM1Kk64%2BiwMWJcDF1Qw2AidTJFnbUeh1S7mipFGK875rSjWxUkASqXHQdEKC0h%2Bae8V%2F0rwtypye9apD28%2FXXeJtMp3yPnFOqbQnCGsvwP95OMoZvKTD%2B0rlq8dVUNKWrfqqno7idzjIe0SQvffviDYjiUp4Zx%2FsT2MPuR2fRMVGpHEGGAuUPCDc1PeoNhL1ts%2FSRt2rqtEIRRsqhn%2FDDg17tfNB%2FgV2EDJtHbqqvO5nghsnZzSITrjQsEA2dnDXYKT3N1qOFuAk3UHZ8tVxQc7Q4kKKoETI%2FYbZpN%2FzlJAhZVTCaopzABjqkATqX3eEN12R21Dy98trfgwqGWx8zMlFgRggfO%2FbpQ8ttzAfNkuuOHai3xJyEDv7JcH%2FiqpMF5stTzFlDSNE64gxtKqHYIb0dsSHY%2FeBSSw4llRokHz1BUxGL%2FZ6XmbDeP4efScNk8MK%2FMTNjrwjFyq%2FDBnUtxeauNrdzBMyizNU16ovpU1QGXBsG%2FbiPHQoiB28idTZA2oF3K6L4AxNdmnPKmLN3&X-Amz-Signature=8bbde20a2acce632bdc27af811ae35dd3dff3bcae55892eeb0010c43e0b8cde1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
