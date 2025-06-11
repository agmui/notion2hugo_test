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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZRLXKZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAcf5DIuH3b5G0lVgWWgx5CeOyBdg2YQ376whFux%2BFzQIgJacnyjP9%2BTMUMnuKKC495L0GzYY3LC3v9R0NUrl27KcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEz%2BZ1Ax5GFFcbwQCrcA9Z4wM4mk%2Frssnv6XrbQCT683dFNs3jQMB%2FRgxXJSUkyX0%2B55zRgtM%2F%2BHWe1NmF4GTPjj%2FY32dbbd2KY1FGf57lSl3Ses8hKaXJ0rtQVfpIm%2BZU3rJrFymXgk7XmAgttOUxwDbqbm9RI8Lz8rZfeTxO%2Fbb6HSLLClOkdHa2%2BMw3TOO9tntoKGI7fXougxepXDeFzKWYtfHO1ZFGxEpyw8hOFKdLtPqcMYbRce7AhkeMIzNE5PRP30Xc7iE%2BEY1LiW1J0%2BGYtVzzWPIw0l5s6uhr3tnkYDSl7bdjGFC9oqVeCPqX%2FsG%2F9F7CZhxFskHrrgc4A7MHyjYmjw7IHz%2BdDYnWZ2cD5xL0Aui76V70jywwmkPCQOXvXAe%2B3VLrc0d3g0lb1xA%2B1DZOhIZ6FTfCYu4QKTB0yQEzwLoKvLiM3aWaoBPHdzFCnlgkW3U50GHAbMwDqqB3wYtquKjAO7FwlswXynaS%2FhV3NEBhopRk1Wxw2w%2FMol2%2BB1AC57G%2BRXTZg3f9yqN6h2YBeKXBC%2BZFUbPB4tWBxqQ3ce6Tf0mJk9AfNbWJml3xRHmughFC%2BO0atqdbQtXmskpxd1MF06rhvkH9uzW%2FKxhzTG6xzy8ocTDcDF%2ByPiGg%2B7NnTcUn2MKe6psIGOqUBAGgom728p6PSbqoR%2BrFKSFlyxMFIrg5lSkJ25NKBaE%2BAYkRVOC0839PL39jTWSYp4uihp3bCH%2BTa1MtD%2BR2VzolbeiZTkSGLaZ0GGDRd0rZlagV82pbs%2BNxkPu3PsRRO2ktd2PX22uxocg2MTRqmawG6rVrQGni55igVun7r0d26eYjNND9tVqY%2FUqEn1WMvLdFFeWqa3zt3H9ayQtkr7IQMQHgQ&X-Amz-Signature=875e24ae0c3379c36c6b76708ae435852245a5bdc6ff4c52d74efe1880bf6e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
