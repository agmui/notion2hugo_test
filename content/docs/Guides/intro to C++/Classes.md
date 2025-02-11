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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2QCWNJ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKEAAFVQh8SOaMyKuo0ECUlgrGnsvmjA2ytTrB3h8MIAIhALSlZ9QkK4PUVdC%2FVF40MysqTQKVj8KM%2B2Tw0UBMAIJLKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCBedPV%2FhgBNHOvSUq3AMp5D1u1jj1det1FwGqlAp4DkYdHco1%2BIPfPFFuWi6eE5ZS1nwcH1gHB97mMsHLB6DjrdGeBN693G0zQafHWzRp1opl13uf2NNkk8wonEH%2FPzV5hyOdQ%2BCVmh0ZIg8jlZiw6lhyuCw%2F%2BYkHykN1ThQJX6NN5Xmve%2BX%2F5sSkHXoqc6IRxmG52U92nRCBDC%2Bf90mk57TaKnAQ4o%2FnST1hRW1dwflIijwZlylaa%2FNJQ1ghj2tjz0mHMxYVtdDw%2FbngTnqNDLIT%2FOWhnoHwMdr%2FH16hh7cBguodvkWNTbS4uXQrxFy5W1jXNXr6d2cw0WE5mHMTWoAyrp64AqTK1%2FUlePf1Ha20xjeG7o0%2FGeWa%2Bse5Nidj1MCplNh0UEjSEd0ElOoYhjjPEIT7lUEJxPIhdiCeVXcWcvCAvCw%2B3GeOJ4ffH13OG6MJZ%2FDefdn62YQ%2BBMirnhUp1oVbQ2BTw3%2FXAB2H9iL70wMXoreIRXCoL8XP6xTIMN0vbu94j97PboK5%2BbgihE%2BoGY2PR8PXDx663ugy55CUbhXQ2xJXvwT6eLrxk3GZGIQxHB9zJrWFoZa%2B2Zi0E3TULN8PDJ5IKNECTc8zxt8a2SqX7Ma45gG4%2FY1rbS1EcmD%2FXZGauD6pmTDigay9BjqkAXICPruWDS8SzOrNFqJhHuzZ2aM9hOAhxBRCrTklC89iJHaJ0N1ZuTr7n7vqxu3LRqXH9Mo6z7YjQSCJcPvzQOkTXqeEcLPYgb3RnfcTaYMBX3xXXtqAY8ltMZndsurJ46JPGIJWHQ1LxzmNjcUo%2FFBhUZKXWK3FCjOgc6aWP6MSSWI%2FdCbiATcYB20IrA0Ar5VGaexkpIlg6YCoc540D8z3W6Hl&X-Amz-Signature=b7811ac115a05fe0fff9f5d0276903b2e4eb8f5915438f533339ab0dc6a5ea3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
