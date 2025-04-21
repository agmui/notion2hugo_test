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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGLUZLN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC%2Fbej5iZoOC%2FJc6wlC7zNqCo70WWEvlnVkcLUxU550jQIgW25lP6yHZDbmrf%2F5tNW8KqtV27KtQ2gcrL9MfOYWqCsqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP9wzJXu9gk8lRmyircA8O8nw8uqkSrDYrFUAvR29CNWR%2BcfOvyB6mP2R9fPe1F3ADf538KRj%2BG2R2xkeIqAJyeInGWPOc%2FLKRtjgqAIcMWJ%2BwrD5%2BKDFaH2u4fimAxe8agsL8Lxuu8AERnYD5l0EOboY3RGeo3ouaQYMG4JKlcKpr1uAC1DvAA2Tcvu%2F6%2FybNxe8ZRE%2B2N%2Fsj9mqRu6JQV5LmhAejZCC2%2Bj4g8Q1ApRR35%2BY92yLGX%2FIeYgsgc98CD9iFAwDhFjM01bxO8KZ%2BsBcKp%2FjOUcMtv7G%2FAhdjMkDEUuDwR1xUvWE%2Bu%2Be%2FHFb06eOr5MEul6Y22B37fQWR5cp8eQF5wUmfiWAUHdvdZP8fCle5Vw7vVnPCmNIyHST8ckW%2F2ZQ%2BpbGEy1i3plWCn9NFDLdRs4j%2FhePKW%2B0tQDJRazgPow1jVlmzOZqpF%2FvovpqQOvnlXKaa22UC%2Ffc0HUkU86SFws2QI%2Fc5Iv8e6pbYFhmrpCC7RyoJfvdySw7Ys1y88TfK6eIg%2B%2BJZ51NhGn163yprt1QAFb3RaISb8swi3iAohGIqDZJDLPaY%2FMIFnUahDdUWC5wLUX%2FIXApMwvH4jIkYmDib7T4vqE%2B8xUfA%2FfkDSF6kQlrdumqAI9QgbtHfVrdC6EmpUMPmGmcAGOqUBA3%2BaGaCnS3h3rnQkZsbWr4kKQuFXGjuod9stBTtIVYh3ymzaagh7O7qps3Vfo52lkAMOyZ1dk9dE3UuEomX6QMN90%2FOlsmo7SOfwMCkuS1yaV5%2Bw8SFJu6dd895fXM%2FwOgUMvuqPD%2Fbj6iP1C4XQSWD%2B51c1UnoLLmwbGkmOxWKg46WGQ2VAIQBZu7pjjxP7uuIoeszWcx2%2Fi%2BrGd2TEKu58GHqp&X-Amz-Signature=4b9d4d20dbba0637651136e64bde33900265417871f54c8bbd6ad6d2c08165e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
