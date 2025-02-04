---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655TFOBCQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDpPTJUC2atmSNX6Bsj5mrdmPEBms68MVvsnfjTmj7JdwIhAMWpz1zcGUv2Ojfm5arb%2BcEUg2e7RcYOC6oxWW%2FtAxL9Kv8DCDcQABoMNjM3NDIzMTgzODA1Igxjg24iP389QiLr3Qoq3AOVXmxnKsS9cPMZ%2FpkhiD%2B%2Ffemso2cnQUsE5qKCPoeRHaBT012cpaOkUeHizFhJYF6hlNSg0fBXjYx50xyHAvk6SX%2FqRke7LAFB89UccSpS%2BdMFh%2FmAx6MG8WBeeJeZd6sAMYiY5D7X%2Fljm28yx6DCv%2BciKK76S5P2XP%2BrSZqgc4UCoYrxPuWgT2bD9AzZmjN68AfRkQ8HoBm2IEuI7CTjZTtK2Hv2ZOD5O1HSp2ACVU7Jutuwgy06kY3SPmCirwPOcY7IWo5eRLsNZFkQVDt%2FY1kIi4zj2IseGcrlecSsQt0%2FL%2FPx7v6XmxK9iWabeJDc9x%2F7dMQH6WKYz8V2FDmZJOriOXpLWYVD0ZcvqgZV0uVTB6Y1Uy8g6YYaZNUOOtNkKl%2B1ty%2Bt7PZaDqo%2B92jJBSpkMySRN7ctk%2B2QLm2Xy57cMp6KToiBpXK23f3yKMXc9uqlbr3Y9%2Fhei4U%2Bz1G5nCijSV%2F2RERq%2B8S6%2BY6BpKYQsrkCN0SqHOdYqyXkCo7AphOdaJGbG%2Fgxm95FFiwqX%2B%2Bm733O%2FK5XOczixKLg0mpuCUV%2B87uJba5CfgL0wjL9Cg0%2FzZsKpioZsJ7tzR4Tc3m8oMbOnpzZTH7FJhVmLV5eIW1tTI2FZy1%2B%2BdzCGloq9BjqkAdT0VQvIwmVjn9vsAsomdRzFeW%2FGukg2xCx0DqjB0tDaT1Jhu9x%2BLNNStp66LzVFP0nLSSj9jPo%2BR7peQ8nmXac46AGozgoMMVRjYrm1Ibg38RhTkzKL1U6p09Xq105MxNHoF%2FxfWNELTlHSCF1ZMogCqCRY3oBpabRlf65p69eGrN0Y%2F2St1xk%2B7MfZOGs2VAOui4NKpsx97B0TSNajDjNocMx6&X-Amz-Signature=7bd986dd9c300897ad584e34fff765430751b6347706425b89f78208c79defa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
