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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6ZTPPG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHQ%2FQvxiTztGO9QuDjg2oJWkgZiU0cA%2BetW0SdgafGuwIhAJtchs%2F%2F%2FrB3okS%2BtGCkqNhK015QUvSpHTJmuPipz608KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkaY1EIkYOlDw7jqcq3AM3CYKt%2FGQGoG97Um4aKYQRda76fB6lCe3htObRH4jjYj%2Fwq2D6zGh2syrSnK9uuogmPoZVua25Tt4bJZkgiycvgqIWkeUeLKbnyGo9Edz2W%2F4DvvnG8Gwfc1bwxNhPathM48%2FrXiRMD1PSyJ36f3Uyv5URjODjGv1%2Bd7jCAccnuN46umSVPwivV0b5W6S2ASnOZpYrmCUy%2FJ%2BGJ3t10NlQyXPUNQizvAQjJHOFcKUgaA4Zqvb6wbODJUs4k6zTwsOmI8L2%2FimrwiwwzDZLO3JU13phgnBZOzCt42VEAx%2Fek5PtaOwgIKP0JJQ5NHWL5nSFhwMl1o5GUbbSbV%2FPsr%2Ftn%2Bn9zhLUUSY%2FWlkOuccUC9wbFZbrIHJ5UUd3PJ9h8pucITVUSpYN1f%2B5LqhhQZl51JBlrsM3pEqRSabs6bbuhhfVJuJ8Xg1awa1VQjmBa1rAAiy5%2FH0F044QeoqezFnqhYyeUn%2B9FF%2B73FI5f5%2B6N5InGywHqnk2C0D9XAI2VMmf724QlYXAPPUTnNE9DX3x7210gKG6ujdfHs%2FtelRqWte%2FDNdQ0wC1C4dbvS%2BFfs2Xi9RX5H%2BX%2B3zO9f8jHBVeAQZIOZM9MJMCLGTcuAbnWWJX8BXEQhQBf09GDTDH4%2FTABjqkAWc%2FUfC9oLwJDbfLfmw5t4CQtFrKxggvmH9zIGs67yjiUn42an5FFSZOwRqYhmrA13wpn%2BkgEoUbn9d9qe80olfzm2oMlLwQu8SbgSMgoLf58HPxEAR7FkeiATmSnilH05peJptdt1tQyiM6SyvVwwVMxgPIJwdYB1Pm5ZxZaPotkIeq4TofQsdYM4vOPfjFYDv5Pc3nGzaVd5XXlyQXVdSxUOEw&X-Amz-Signature=747987acb41cabba497c6401c323b0a9a662a15546cc1d79e914b88fa93b012d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
