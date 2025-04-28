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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCXSIUVI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5liuwvt5IsXAdXBxVbkcLm9FzK%2F%2Brr9UWiUf0YWhh2wIhAIpk5Dth8TlM59u%2Ft4mwViP8sEZE7cdX9CCK8nhPwdcLKv8DCHkQABoMNjM3NDIzMTgzODA1IgxbnobgrzAWS0Vl1Vkq3AOaPVEMkLwzMmIyY3Z9rqwntcJdKlqBRqnZVU9jBbvjL%2BpEGQ3zhcB3FWNb4zUjQ7KB%2FNXvM%2Bwj3rjXU6rKQe8yiem4TO7qWxi85aFvxhSpv4AAh3NDJkmzR7LN4hibUPJUJpyZ4YrUf4LFYEGAIACgijv9H1o7HJFS6UmkzS5%2FpZgFimrZ1NuKkkp86XCCnxedsjQSTkKL63SbLcWiSY3N9JQReZ3P5oQ%2BaXWNrlIMcxSmWmDPnMg4FFExIQKgo%2FfmKlm8NXdeh9yM7Evkqy%2Bg1AUQfWDVOcmwS2Qp4TE5LtOBTKrfBzBvVDNK2RtJosF4nF%2Bt2RuZkwTQ23Mw0ex%2B0zgepGkD7WUOvWoGJXkonwDm4Ka2taH1R86zSRowkUyIlskrkD07fn%2FciryGdbd5Qs%2Fpt5lMfgmAjqmSepr6cBcqFmHww5t7tuwQwrf%2B8oAEZYJYaFgj7BiCu2AXHOcTf9x9aMijDFIm94yRb0Dxwrhl7RwUrRjColjcDqpY7T4P%2B8KQk%2FsLUktjtYimNQbWdmq%2FhgOjnJzuOoChf8mt5TLJfnAFl5AuMCHyraae3FS%2BWQHRxXTKyZi4XMq2rxkulkP4laGuybrwMS77eMODmb19%2BM3SQiMjt%2BFHIjCyvL7ABjqkAfbrNUHcwjF%2BWigZIjq%2Blc1HP8C0mlmv6lS8WM7XNOdDCw8SAbm5945Px2F0dn4qdiYBbZr9BBnHbH9svrGRxZlLwb30IPIsGCWnaYAMkvL%2B8L3PcC1D9BtR1fuWSzyktmisJGzp1z2hIWLAhzceIUF%2FAKu%2BOSQeLO5q%2F1r6m8zxcR7m6RpcbRHr693788ptAnZEAdeM35tksKRt29tz97yuIYUp&X-Amz-Signature=1e08790e57f558578dbb84f20aeb33eccac1c835ff796c557a1e2456dec994ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
