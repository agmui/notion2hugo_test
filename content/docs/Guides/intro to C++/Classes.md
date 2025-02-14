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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3OY22L%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDws3jjk39mvd6KGFuCvA9PD%2B9Vb9qan9L2fZk18oJ5sgIgLAi8yFR9DFQidvXXEk6LIOL%2F2THsIFxK%2FHIWt8L%2FaWUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE0a3Z0O9iHnFqirBircAy7DxxeFQptGkC7jAZb5d%2B11EQi7YBuMBRZanW9jXsKX9V1lHP7UiINqJ%2FrIH4i8neFovnJf0di%2FDfrVHj9bcYiaxuKYOu7BXC%2FsJpfu916GKyn4pBpUI2jLVsn4zX16Zgp8whc5Ab6z5cGEAn0sk2ndhMhw4a8akDJofuhDSZYx%2BIErquHQLEhKZbeGipy8oLQCISCG0tcQ0YQ8s8e5KTP8rkUCVIRiqHMPmW4Bo4NLL3rx2h6%2B7LSwnvDzv%2BQO00EjVFiXifJuvH81vRSHXNeuqNIyqFoZ0nyv0kWH16EN97yKXK0xYRD%2FSDrqtjuAJPs4hO7TpPya%2B6n18Oi%2BZOmY3dF5579KzH%2Fh4DgnMJ0KxPTuLeZx0CmE2W4gtrow42c6Juofq2sqNoJLWsyzQWuL7aSkDdW81jaD5ZP1i30uu4LlyfuwI1yZTbdGARmeSmI1Lz6KJCw5OoWRJaqie0oGX3bIBxmKCvoofjotMyCj3BSYNUD%2FXNd6a8Ny5eOC7MwEGZtkE62CQo2W9KaOVjeZ1qK80vDoEe7WkhmbGMcf%2Fht8GGgC3YDHbcIIZ4A5bEEAnPyYkrE1sCzZmt9ae%2FTYwcV%2BA6q%2FOYROuQSD7dFw7EB8g3oLOYYEBnYKMMjRvr0GOqUBJkmHXcpyU3P89lrXRPQIVCWA%2F9AHVxoY24Os4DZFeW4WDa%2ByTAGi0fPubp2T49ZlAlUidPk%2BVhY4X26%2F05Rvzi99qgYtRK73AiyGpl79YIlOpIQ7%2F236cw3bPnmEH%2B8XJ49no3tfRSLSIeiIplre%2BvsRsOndFdXajlDt%2BR00Bkfb4iDhhmH5L4zdpk5YCuePpsqrx%2FM3vL0RKqvX8cRFsqtOYAMx&X-Amz-Signature=501403c3068013e4787bb5d57e76dd5bc0af75d79c8790deee7f71b9aada5cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
