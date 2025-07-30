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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIHXXQF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ5n9vYnAxEi4fzwurMgCuj%2Bjl25JrDvIy1vw0vcKI4AIgexvkJnWX%2FA9JfqbJxytyOip2LjPeqN%2BhuPhwtdRZlsYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWSx05%2FxITKTmVBsircA3jd7GiI%2BK2gYydYrZJ6226BZIWgkjGgOfJOeaKWenmZ6PRCyZCZPFa%2B4oPwKYNdYQsqRF4pzLzMc6nRnIDE6hEp8Bt%2BvBTHeN4xMAHifyt2A2SH8Zs4ihQ5U6BoQaSVrrGDs3ycn2kky7Y9c%2BEw3f0HHTL87yJthaTFaHujwsnH02%2FT3xp2cBM1oUsNIc2uiEvxCxiqw6ep1KP6DdieFAqZFmaUDqYLqaeMLpalxXiIinz4mLaCyZEJnJfKjYwGFK%2BuJerb%2BmK6Pn2AaAXCCZJiiCmRQy0sx4kjdh2mq0lGg1SUqAydUSMNJ21%2FhCj7yvMP1PAW8mF%2Fc2ydwCQcjp0a6f1EGTEGDiZXAZcMB7QycfvV0o3A9BbZfRS6hbnwNn0bs7lmCIzgoseq9QwELbpheKii6GKjPgJb4YCIvvHzDP3ONjV1dqeQcbtABSfpK2uEpiOZ7iF3kPe7mvZiT1WSPJEbTMkHz4Djnrx0f7nndrC1Mcwf5HuIJzO0n0bDFztLfBlmXRytCTAvW2NWH3LfIHWy0r8tRVGcZJJACXATrI%2FX7n6QhlVpC9TUMpsnz%2FMuxTsvFmKrpsJofgZktOu9CLJFQI07fAHVH83VtTZVLSBgLKV8zGB1UytOMOnypcQGOqUBa3ziHeEZqbeyZbRXBcekjdJJ7ttJuKxoEEzSA4dFanyzTnF3D2Q1CiuhncWOzP7f3%2FyZ6BNkEFzSL2%2BD%2BXgwqsOUbBYi0W44HGtcdwYB%2BPwQpyKdr31YU8PazC2HjFlYXWhCl%2FgBbvr28x5jiPpxs0CmS8AUpNVjslG1IodrxVjX%2FWtJdQFTXQXPE%2FpDWcIKRKvlP5ufTeo%2F%2FesSZ%2FbB7ykCDD5p&X-Amz-Signature=4bdaf49d3b31cf46db1107b4ff076b2e2d47d3e89c068a1904eb9b767b28f4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
