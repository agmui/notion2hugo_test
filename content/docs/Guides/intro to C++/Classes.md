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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWANC6L%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGbg%2BusREN9vdUyyAtV80qGmPKL8MechTZqC58Ap0V9QAiBuqz8YazoM6ZIBsT0QbbQ2OJuxsq8RC7dpeQsnXFJ29ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMtC5%2BrC7dMPNMBC4FKtwDEWrN%2B1zZnRsP49pLqxj7k02F8%2BRd6DGKxp2qNXcDCHO5b5Wokovdg6XxiRW1ZjtKLwqdb9KnS6FSecTJsgJP8QaJHTFsRdXJbT%2Bmfe5diKMylNkRvDbWr7UWOgSvY6VnrnnTbPNL%2FPhYAlRRYmgrCTYaFggMSNO8rQ%2Fu%2F3VH1r9Ps3P9pgcAcBmyJFTPWYpZVuqNOLWwBEzIkC0c71x5Rio5RJilY0sIFFE1Sk2xGx2i7WXMt7rV%2BLOF%2FgDE8CUEIKxVjdZ6%2BKAUt2XbwB4%2BEPpU4ATomf%2FN6WVjnQsDI5DGlFgOEZTn4UOuguGHKzCgTbR2lbfUVCNt4jWbm6E6UYRcgy8HXBGUW53%2BaJ5GrjWWXNScmQpBGaLbllfhkG7pLEIKZNb71osTsJ6yWfP7hr0zoF7p%2FQvzReHbvr6ei2G5oKLCtsUkIsTF5jfRg%2FquqhtPOT4eJpNgreMTN8Mn6QEfcT183IbncP3ROB2ohLCbYnPfYKsf1Z7qw8MlFgwr8KjInYYPmNcyy6O1UDdoPeF%2FmkKCQ2gKMRbNEyeXWidxxm2JBF2X0H%2FXN%2FOForipYjy29jZd3a3uFS6Mie1r5KPuWFnmTuapprzYNJYDtgpwKrXbDmWaaL2%2BGf4wyvzkvAY6pgFGH5cofs7ENtqfcMPEKj64Cq83oIOwGVvfLLice3xkCVLETjEok3sLpbSqrYIRIbeEyeeugaCu%2BBsBRJM2%2FffNJtm4dXRKCEo1eHs4wRPvzTFeJQ2xajJ9kduJhW4JnFoEoQFY3I6%2B3XDrR0hDo9KLLXv2RrTlJDvib%2FJ5mBjXjT%2FD%2BMRnAtJurc%2B5CXn0iRXzoDmzEdk8mZBWKD72VZpkOXambO%2B5&X-Amz-Signature=3fbee20fb0d522b187cc16fb609fef4495d1701cba1aa5c9c46f9beea8a968a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
