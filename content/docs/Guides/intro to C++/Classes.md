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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ62IT3E%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkp9B4uLmGUhJawC1g6qGFXsjM4cmXwaN7GZj4jxvQLgIhAIKa%2FbQjgJX8jLB6VvjvmXFp0aH8iYFteGyeQzvnQdJUKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1fftN3PftyOkDJmIq3AN0MBE3OZeGjEhMGsbVWYMkjG9Et5LcGaHFPnyuW134mUt46MprNSveeccBZYgp9zgyejDOe%2BIDEnrpZXkXItdsmO9cdGkDEhKo0uHZo%2F%2FeUOiBvy6BylME5ecmt%2FEe%2BJDA7MbRYBVkxlEzITAyPE49Q%2F8YkHcAMolQwYj9W9UED1JSiqSREF0xMYbnCZ4tT07ySZIjtei2qhQTpLNksDCBdLCe1YSrzlC8nzrqC5eRCh3ZfZ4kRLqPVmwjanidvcf64REtFNPXDCMv7nwRM707dEiCSFEy2XWAJb298GdfNwoxXw%2FxC9lWjYzdLIBPtfQqs64MpgKTnLybX4uI5e%2FyndaEf6%2Fw9gR2V9IaJakokltBj%2FzUna5qIofEVjDMjbfb6K7TMwGjsU5MGZF18%2FDcJ55MDcmKsyiSGFZ0tpFDqshNlTSjEbazn2qmPqWJz5fcguj1EadACjm%2BzG7XwQ%2F7%2FBUcihMVY12U7OReptCWecY27Qwro1cszQgdf5XJ0DJxIRWlvkWF8jzgTA26VN5q02djvIXpxw%2FcWQiTDla4qteXs%2BH40C%2Bjx2fFV47%2By%2BFeoGtA55CHrZ6XSxIFUZBNpTreU6mF1iCxdhFHIqp1lSrpN50vwAHQwyoZqDC3lpzCBjqkAd05W%2BjEVoVGVtM5r3QH%2Fzs%2FNytiJ%2Fk2OdW0fnZL%2FDU1Andxuq7o%2FbzpFJuyw90s%2FtXwmNNgCUE865i1tUt3XHegfL2LL9k5KIvnpUEN8TfYOTwy8UuxowKigB05e%2B%2FQIWlapvIDMkxlZEdLgD5wCY8qYeEovsMlZ5NndkWJw9qFs8X4%2BpcBsEo5aXH3v0rR%2FjM1PNuDAF4beB01wVAf5kiGDCbK&X-Amz-Signature=40f342237b1c5e0460ab00006596f80e85fa98472ab013a40d636731ece02be7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
