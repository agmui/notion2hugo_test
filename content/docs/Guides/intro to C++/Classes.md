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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCCBBSY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmMdBUU6RN7EU16UejjDrJrVFZcFhXZ9eHavvZLS0SBAIhAM7P6NzqT5GCUJLXHtW1ApBPGxjDPeRz1gIvpDFzHP0YKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx65GQYQ3r7gT%2BJw9Eq3APNTG5kC0%2BuvHUP6gmnPfgR%2FRG4rl7OxzLSlnmMELbw%2FHFeIIHagDBPw8TD3onpqdGHdNFpCKF5q9KVGKglIBcLazJRzZPG1mpx760nGvUNzZMbpNpZCYj0UJN1X48mzpAOVJeR1CYnmKgaRWenfY1jEqWRuaYJZlanjtrxF4%2Bq0f4HKvCVLQ4tJ3OeOPkYNohW10W%2FlZciCd%2Fatu60ZS1JOEseC7F6D4LGR%2BGibZQnoES7ufn2%2BrDCjQLvg7S2eWsan0kF5hsceySsxBlaOskDSKIKeTrcN2Al%2BbRobdxwIZUAszs5eEEpN30m7%2FWf61Lwbipxj8Tyf9efQNAHoPrzzjF1%2FHCsUmyO7yHHSoC9gH9Of1oJOyU%2Bne9QK%2FfRMGFPLMI%2BynkR%2Bh5BfXgPUP2VzD4wJAKNHUYSN105t0axshMD0vrDRpTDOqjJ3963SPZjrIUAAscGm5kpMAn6vJP82K9DJNj9c5oBFD1wJY%2BC0jpm9cKRsKEXOu2MBrOBprpDJNanS0U2M3m9FD9fwYfdZvS%2FFDcFYJR%2FbEFp3j4b0NKfV8izhtzlwQg42hBDkBqCr3OLqzmhprvDUmbIfP04cqQ7rABd1DpCDHOzTkYJ5x9XfIJKJWoMXEvZCTDKq%2FnABjqkAVuE%2BpfHqlX2INfdhwif51B0RiaODpJz1lebzaL%2FP1JccA2V9PNPHujBZONcKDSe6cW%2BGgk5ZtdfE7psJsWCmgoYeLxe03MKStMJPyIFhpmDVMOjbY5wbfGYHvsxhYBVLbZQSTR0Q25c4SkZ%2BJ6su0bwapxpROVeR2yeNPHc01Btpsorp5otkUoJCnAGMOoMphZcZwqdhUF21WWQE1rX%2FsuldfLa&X-Amz-Signature=62694a8cc0b967d5dd2cacf98637d30688d46dcad1d05e95e1dcb61f811beef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
