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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UR3A7EF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWwFlg5MQZ3r9harLniMB28p0ZW7uJTciZouEi6zShHQIhALteiS1eAru%2BIUQpaeXA8HqygdL11q1zcvnhccEi%2F0LBKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJlMIzUM3LTfIR1r0q3APoIoiZPaVp8MxFXg3QYEuVW3hDhJcvaQWa9%2BgJkzHCdp84iE7Vi2iF8YT7nzzZmc%2F2SmrQsHXlKLxbrocVjZXMG7tL5tVsZjc6ZG6b9JT7%2F%2Fp%2FeoTmBr%2B16h84RkeLuAtPyCDgLkREQi6JHQLWTkmWT86I6eKXXE8yqQzgOWXHB56wqo1kpjDz6qGSE%2BP7FSQXB6A3n7XxEXexFeOJA2fo9%2F0gLvoTg65DKNQYyXjwIB7OUBLsmuxzzU43j2a9X2EmvZnZIonzfbe9r5qsSoeG5HwhwRjKYOwsseA9M84eqcETST6Xoc7VNp3dj%2BPuabeIONFMCm1Dk3A7MGDutkQyI2cAjDa7wDwpMVhs8HNfEhqC%2F9zgNICwQRMIdLHbbhAm0H2VYLZRdhqmuMY1GNSaeLM17FKmsP5tBE2vZY%2FWOd83ZE7j1khgVSCuJTUP6Adx0GOP9GAlRZI0r5IK9IFrMkDo%2BMKuCgYARkLbBCWrJsa%2FPxCT4CaqoqHmo8lhctdsglH7NaFk59Bh8sOmRhCOeOZbtALhEjC0gVZqUB%2BMndZbeTUad0srpqZlqIsOTOwPJsKTyOLJKL9LwM%2BMmO2ZOFtYN6JWOg%2B61k5xuDPpp8oON1Y8gdi2DOyYqTDNmLW9BjqkAQ4cQqf9%2F5mE0KZsaUe%2BqXSApqiy6CR83umpzqeYwbRwkokb7kvSjuKPhqgdwKSQLqTUzlUYsxRy%2BGMGuu6X6%2Bkaj4OQrjEtwG%2F3f%2FkANYKJdVqc2NVSlGgS4V32R%2FwWS6SdMWpMKKq%2BVdOoSMYgzMeK4audf2vuCOK%2BBPMTQK0OXnLTX0ljxNikjfOVsPuKIa5PTr3%2BFRed7HPD0DKNPHw4IIt2&X-Amz-Signature=a5bea04a1a3d17f78eac144befd64ae84b5dfb4d46fc8219e9d0d0ba663cc412&X-Amz-SignedHeaders=host&x-id=GetObject)

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
