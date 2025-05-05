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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633V5TIQM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbM3LosbxkiY2q1mV4a7Omp2w61FezpBfR4XpwKrfA8AIhAI7NqZkzCJN6ognY5KydN3tRD4mp%2B912E6Ejh9LDtcyZKv8DCDQQABoMNjM3NDIzMTgzODA1Igzou%2FOueLrsxeorPWAq3AOU%2FK%2FyfD4EjUrNLxUH%2Bw130ICnxxJ9DT4Kz7PQBDLaaLROcz07lfGewddKDHzb4xQISr7vyPuwbK9SKe%2B3XenXFQuDHQT%2BW2hzl1NKQdbCjiVSqpQmCc%2BH0YcYSLicovve%2FJq8T9c7Q63Z9uygI46zNQGzsZBCZ8X2b%2FgePNv7Q6klZAiGsEjw8SKJRoAT9jsr0kI%2FYws1gt%2B1FTZxeTRKX4zxQ9iV4WTjxsTSoCOQZOoWqksH43Qd%2Fo4DWFhvMmjoM1ozeYVCNJzHzP5Ri79tWU441trG3QsSv2R%2Fq%2F2ptKpCSwUTlj9J6ceNIZpQ%2BKJQWQ3Zhd%2B%2FqwWS9yV79YStIteX3EJwYfEipLAAwsyTe3ajtKJSdn3oCYqbbYBCbluqneJG%2FNBrZXSscS2a5%2FvoTKPg5hUHcLgutdh6Mnh66PtE81OSuIZA7rvrwlSBfN1gO04g%2BGZBUwdPzYg6AATq6V1D3NbKEJeuigNo8P%2BfRoKkYlp7%2BS5QdnZKtX6uspT8vHj7tOHWdlWVrLpwjidC%2F7zlHaBGfZKp4S4MG0kW0KVnkT3h%2BPEmU4m022cZmDSvrp3vaNcqqT36owGcFktC7DJd5Xrgf55huudfoYwwytDg18yo2kidFdztfzCLluTABjqkAeja%2FFlspo3M%2Fv451hWSI4wVx1eSJGz%2BlmFi%2Bf1ZgaNfV4FpEgNqqF8QcwwlUExpk9J1smLk65VlplI0n9fr%2FoOGRzPIbs6gyu%2FKzpIsvbthUEVXGPS%2BRA1%2F0q9M%2FbnIuGHa27Z8AFBduRcxE7uogrGHi0DNX7Oj5dmn3gdndpkGzdZONghO%2F0aR8dzrD23tY3r5%2FtXybuDECUH%2B%2BLKCTBOjJMyT&X-Amz-Signature=401d1cb411d1246f8b5a9e44cd4d48db95ecb43620b1f0d73c98650fcce4f395&X-Amz-SignedHeaders=host&x-id=GetObject)

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
