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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF224AZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICpr1%2FzQzGr0LezrX54Vh1b9EKEgveNTHZ5ij9Cnc7z8AiAtc4DWcRxs7KfKYhhdJ15i2%2BCRc8zozN1opz5jfV%2BpvCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb7r3jVNJnDmsSZGLKtwDrz9GmDlooIhcqe%2FkJsD7jDxZyRnt8V7ReQu4Y1GYdqJ%2FkZ2Lgbb70ftQo1Fo3v8yYZLOsKn7MD4zQiz67FThYbZCzWQXHniJnaLsiY2LuvKmEaeiSGP6QnDtsGHibeyMph7UN1QSCERMvaCNL1Fh7HveLQDD%2BwdHAxh01uJNR9DLcheezRLVMaRGMNUb0O91Rae549dML1qYapQml3dTy4JyQVfjSUzSVNDS6JynM%2Fhe7hjUSs1mlTKPE9yhfdGrTV2Sy9Xqagw0m8IfO5YQ23h4gEP3JO727xB4AzjqU4UJDukHe4una9pMJmllLgI3RiDSX9FeIJ0zVkPDx%2B0PTS3b5wsENsXVqlkw9UcffzM%2BD3QTI9W7O8pN3eg1Os69OUenu34Y5Xr69GdX1lHvUwEyOqVlGIJWsHn%2FhRgkR0Hne90g2uwExzHqwecVDZ6i%2Bntd4z6NCPjdeXlOr5kn10vRvVIwJLlsjDUCKGYd9qdHtWY3zvqOEcZQe949WUjrVXTwUQ6BzepLt2xoaNgyGyx86DLMcfXxgUTWoiR4y%2BEzZNi25SxPqV6jyH6vVA5BQmreGQANxCDWx2XFuP9FfoCxk6mTAVgVvJRRAT5AY5pFEd%2FYa4Fdh5U%2FCJYw%2FfHSwAY6pgGFdh%2FKVq%2BZD90ATDKXr%2FxxaHfpxpVJavfwXkpEkfYMUf5FJQfoxyBSFxxEWPvD19YQdJ%2F61xQULEBkxWZk97cWhmudyLup%2FoqCFKO1V2fRq1pZVpKdWjURItIc3gGuMXoXRVUEiGAZYQCithG7L3JV%2BEutrQufrzQaScZZNoR0pQthmMLemDb2aZTHTMxyru%2FMhBM3WYJAh%2FkQmk1JvMm1TXg%2F9s5o&X-Amz-Signature=c4c32782e6597aa8670d19e6482c9255c3cc1f20e234ed229018274f1faa5633&X-Amz-SignedHeaders=host&x-id=GetObject)

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
