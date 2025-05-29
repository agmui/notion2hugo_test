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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQA4RDFD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiDGC1aRLlEoWgzDnBEPfTDGQUXEtxhbmUaTOTbkGAbgIhALvnRO0JT7woDRq7bFts1Xp7FkWIFwi3YSa7h75BJtegKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGX2juigXLXKYqemcq3AOI4qAY59TfRgCo0FPJRbLAyH1mdJMFXH14sA59pB6zQVFZf23cIargu6ER4iChvcWixKQFLpniHfHirZxUJjMXc2S18VbWMta9%2FVAYYgk0zJn9xWg002XGwQ7TrL%2Fq8z1MaydXRvultX001yBYiAWftDDXiSSjleOVnjjcZzA2KpgwA7%2BWwAQjmDEkmp4P4t679Lnoado4OFspXP7LywpjN0Y2T6FOTHCcJA3Gj63IqjBH%2BOcmLg5BKhb4qVCB50M5d9VMQDPMfLWWHYcstyYDMAe4FTWUw5s7mLT1bgM4TOid51BK96bS5s4nbG8VvJYgJZT%2BudaOol1iuraUJzAhhRJfOvV3ilP9qckzjdqNy1E%2BFLLkGuQ88HCSg6iB81MQ1cqMLH9ExHUWV4menREyKDNPEktSg8kYphclkHbt14kSCh1%2Fs0q0x4P1IAhtYdWKIkY5Vs4E1Kic6PxZ4HvsBs5OgNg2ftP7KgGrLeKhTKt%2B%2FuWrY0KuC7mnwlO2fJ%2FmvwuqDO%2BwEOla9MDvmSCh7u8vW0cpjCjZJzj9gBE%2Fvvd3f2FibZLC43K0eBlQ6f%2FoFiKVYI8Db%2BwBnb8NJdOE0Z4LLsPVHxCrhrcghdGox5cLik%2F03QAMhIz1STCes%2BLBBjqkARvSYt7%2BYr44TZBP4sFmpbd2HrZcoVBsqrNsClUR5UUcvZ%2Fx%2FHrFgaBzqoT3Lyb6U4IgBIDnG1z923pS2WjpEC45rT10YdsnytYuWtIQ%2BIJ9y6XU1eNip4lP190bwwfvkKNmL0mGp%2FAZ4XRWBjFFBpl6ZdBJCZr9QToPp48lM31lOlZmUn6wyWQvX4ojkk0bZ%2B00DBdPW6pVojF8GbU8ssW%2FOMBs&X-Amz-Signature=82cc25fe27e68ba9cda0028834db9d2a4c9018f1ab3931639f4f0fd128fa54c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
