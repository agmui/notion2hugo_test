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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV2DYXAP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDkBSVgpVzEPcafy7zEwBhjfnW9KHHlY7Xbzr%2BXM%2BGxRgIhAKgTrcK%2BOXtDCMYzNAZBNp5A%2F95zhfYvDwMCSuQR0iDKKv8DCCYQABoMNjM3NDIzMTgzODA1IgyrDgYR6S%2BNnSPs1jMq3APweIvOgX0gEwN3iXQxU3QEg%2F%2BZwR5WGwAXLp1L3vac4o3lSSuexcFyxim82irEmRX0lC9sWIoxeJQ%2B0EvpUsAA8Fmro11xoiFsT8OerE1YAn5DubDLUnFX1K59eEtzkQqr5go8YUlfedYjAzs%2FLbZ3D3oxIx1mKGDuFMH0rtHdhmi%2FQIP3imObyClNCt68SZuzwmXPBaANYY1IkWl%2F%2BGEx5a3OJpxOKaRSQjw5tkvDiLaSGBegRjhStETpFGoaNDKMv3otob4lRopj%2FEDzmFams2%2BYOo7VnBDctMnSAMWHuvSfPLHs5PTM%2BFqoFRQQRivX%2BFX3sF%2FGhkYpXt6GzlhS2fCOfCvPtp0TA5aLQ1dERaIPxV1dj%2F%2F2Q%2F7XqFqjEzf8Y6E3hk3ti%2BtqrK2ZO6llLwTeWToRNckLgGDytrHn9I09RLGHL60IGNUX%2BNOUoSLhRzLXhwN7q1AoBKv3UlSOay%2BpQDIDSQHJj%2FS8dS4366e3mIfqS%2FDbsQTbozf2LiKBKCOfo9pK%2FkimwWHE5ldEGlRY6Eg%2Fqrde4khxf8s9nU9QiYLfHgMD%2BtDE9bsnVZVpJRpZtch%2BU0FOapfQEL%2B%2FoeZ3FiUt1YZBWptqrCLOf099DPlohcNqiJFLHjDGucrBBjqkAa1yZ3Wu3ivkOfl1HfAvNCGIPSacqRyWF9DdOBbGOi9UEZfXDgi8GR%2BwvYuB3QVLCCjScmoI2aUuM0%2Bi384ELNXORAYljRSJkIePDXd1AUffLKVVNnhRmDCgn77Ot7vLAKT8rRKCECj8PxPlz7wESF0%2BQOUWIiix6e5YpyQtEvcJrW2Ek2kLA%2F0mX9rCDwNt0quMgXJNi6b3nMF4Eua44Af9ahqm&X-Amz-Signature=2d90fc761ac5503081591e572f00ef4631cf926d04fdf6ef37a0f50b8397430e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
