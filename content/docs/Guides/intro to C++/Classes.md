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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S7ZJMUJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6lUYei2KurtyCQ7FTicooZ7X7W2TefnfEUasb8XApAiEA7Zo9Kbulqt5CCul%2FTtQ32X%2BavSdxLp63D08AyQDYAZYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFQhW%2FLkuwQWcGUOWircA6cW87Ia7gYqSPABb98MjkGunPElJyi%2BANfc%2FBPE9j%2BwzYz6Iq6bBbZNZxl0jVpdqh7zyAiHwTa%2FRO%2BOo5RKaxi7Uvb5s1bFPjl9z5r6aQaZfjXMtQm0%2FxFYYiztoTgVEhyHX%2FbgNA14%2BlCyiAEX2poRxfpjzuRvGat5rC7uppfNDMXGOh4%2BcDSvuk%2FXzReTHT%2F9mDv3tsFE1DofSV3KfVXmeKT2nuDboHVQW9HgSjlL%2B5w8gvUxGFuskisVQLnvWcNzaiAT1hEvY5Pv%2F5SaWnBNBnqbVQQqgyx8SP7BhrNYaxIoQUq9ZQgs5RPhpQGGMiQ23WOf%2FguAA332DycSZtSY503%2FliOx7EwL%2BI3D69EiAbpEhUB2DRf3q97uwFxDAlCK8dqFfLLfOTenb7kDO39QLiolcStoHyog5XM3Vc0oEdTjXfrX%2FKIS0%2FjuYHebl%2BVqKQHrT2%2FZP13OmjLC7VTyfk7Nsz5ghNUGjs%2FICrvMvSukvpbg%2FwHun6F%2BXvygSYYjae5%2BLyAtTyIhu30DWdstwlfUTvq9YEZWOkELc4TZ%2BWUsmI68oVmBhifC8Sv%2F0plh3QBXK7zGmjUGh3mXORzhDDTjHfyF51YGoqrA7QrgtA2iTWoIfQn4qWVSMOWYrsAGOqUBUfESK4MaIT%2Bj9tphky5%2Fm7THZxNmAfQ4hiNyAEf%2Bt73okMDeD%2FT2Vn3heW3swKE6tw8H8N8Wp2U1pduWGW9kaG3d6jkzYi9hOEQkFD73128JFWaxwC7hv7cUpjjBpCpFEZ1PpB6LeLka%2FmURTneBF2EQxKoqv7vaoSvqCngSZwrQ6gqH%2FhJ4shNZK7nAOQa78AMI09aZit4KphWDbKjP%2BCDhdO0Y&X-Amz-Signature=69a36539c489b6437255d3e8b2ca825b0fa2c117df41ed0c2761946674af78ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
