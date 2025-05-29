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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MC235KX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4jjQaMglLkLZMU%2FKFKu44jBTg0f%2FxqZoscHbB7CzP%2FQIhAPCB2kWK%2BrKi7KRs7LS5gfCN3BXz%2B4xPiAjUtIcS9rpJKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvrmPNUzSFPjNj8Xkq3AMd1fEqjJe%2Fg%2BQQidCJY4ligHBCpfq7ip5GGXEa1oYQI9hWF0bLde7eC5TRg%2B6%2FUvplFkWJ5t0TelSKLpw0iq3sjTaBNSL5gj%2B4ATagddHx71AjI7qtgOfeqB5018CunzMdyvUVLjrAyvprIKMB67Ni33Y2htqt8SOK1u4B5CJLKGSbHT1C6vAese8hnFDwNPK7416KWddw1hYi4RO1kOp9PKkzpwSxq%2Fb%2Bw2uM6iJqqklV1l9r%2BH5pX0QSLsBm8%2FHROPv0ruepAPTYkADt7NABX1BGpDsJ1AvBBkAiTaVyl3GIfflRFXn8TcfPgTsmG2jDrenWsimVomuyDdVzw80SIjHbRd%2F%2BSxw10bd5XzmIL9%2FY8ySfEMWcBIJdSh8ykzy0HV2uzZtbplwPoPqetSyV3AJRlD1ubAZ0oHVSlUsgwK1hG1tTnQ5Jvb1f3ZoA7pJqqRVv5s%2BfSuPcSIW3JrpinXdeXXtYTlp9oVD0P8LrWJF8ITuXXvEfX7xdNbZkgIWwezGk%2FBKF89A38WxEQmF0gpdKqGJFbwm9J9mzrqMDPRwN90K7PciNyhrA2wX453cRkO3PHcMkhuXjElmxD9embXqQ950wsCfxUqJUDuJod27iVRfkZoMRk%2FVLzDDS3ODBBjqkAScyr9n0gy%2FURS1dkiOU8Y8%2BsMZOZau5JBPsVKQ%2FW1KxjhXOfUJwwJV8r51pmUudVMYNLHSqrTVt1Kke5NtcPsJp%2FNZRo7JO%2BFrcDVRIIM9dK0vCN40IXSmvtmapbDlz96TAHlablZYNII%2FEer7Nvwlmz6Mw4xJ1qPKTyGh8aT8kBRvpQc9uFCbvKKotyu5yp71w%2BS%2BF%2B1Wx8E3WsilS1JWnw5LL&X-Amz-Signature=d4673f91a9c2ef944489b1e0a7c3f6405cc6a0e1505109cc3fdcb652c009eabc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
