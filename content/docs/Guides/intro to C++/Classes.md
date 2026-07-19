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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNKWEEBL%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDjXa79QOj2N%2BtPN5u8T0cyi%2BZSC0G4HYD04EWWYGfgIhAIdYy5JeG6rYicihCg12TJ9UzN9esbnl0ragGGXO%2BTbIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5VZ1N5O9O9mVsOQq3ANiXD4n7CbXLCJZG90Bmbqa2dhwDZhzcvV2fMhbem%2BzzdYV46Gz5rrnrkPW9GeluN8p7RXVVF1VDk5HNli2hE8sw6AgbDXKd42bYGqtz2FMNH0L9ADKvMiKRHCcaFCzb2YMqSdGrXWRGTMFnsE56R6KvTXg%2Fb5HAwioKY%2FUHbKVhhTohQ1fcuSqPP5pjh%2BCqoHx7fS%2F30AirZ%2BUtgfvabGX51HbdqxKJYnKHsIP%2BaC6HqMFzxHxNDGitmOl8IySrP4Ng4f0HaDWPiwh9NSDr3tqUWfjAaqUQV8kkt9Yd4gP7KEcdFZog76Ta9nANxzuf%2FB2e3PUbjMdqtjWy%2FFhwv3EvFbb96YULFkW%2BArvG04PSsN3b%2BvFIf9SND2eqoxyDtKhYwcR5RBsGUPB%2BGlfadhU3e7OyVXomgKPPlH%2FUi7mxEcL4mD1J9w4iVKcREugJrEPNNRfgRnMfPcPfuI%2B3jUzz3SRCCxiOvkxIeALj2biyYUyj%2Fhtc29hFIrSXbLlhXeaN6YmwqIruZw8egOk%2FdLIdrWJRvPTirM7UpbgOS3y2ra0qr0zAnFYoyqxffwGO3ypP6vZDlQMIpZgZgR8XCfvbOZvovjpZeQfcBOBIWGKsANQkuO7leVEaako5DCq1%2FDSBjqkAVtnFI0ysFuUIy9jV%2BXD%2BEib2WbuMeeyhGY1zvthUapLkP44VF92JG1Gq%2BGYf%2B5gBU3udBcmobsbXm0ILzzsIihQRzFtzpP%2FPoOJDt9ckS%2BzY6kxBbEdulBcjpKzMC62toK7JSmitimZsLMdsrkQBf%2BZp0vPsUaKfRxZdqW%2B5dFdsNgLtkNA51vTC%2F6PNAPVg5L%2FKt5HH20OBzpTygTNKIYxhtyz&X-Amz-Signature=92a9f9b1390f0b2d08b489ebf927690974895050b50d12f1793ca9075880ddd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
