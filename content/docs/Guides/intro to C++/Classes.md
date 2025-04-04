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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6DID2C%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDWNQ65rDtkXptuWVRGi%2FfsuLjxjAEnBS2IgODPmiSpAIhAOrlyUNr3FJ2vaMuoEoeir%2BRvWUkOuza96tWbF94GrCBKv8DCBEQABoMNjM3NDIzMTgzODA1Igzx5mrGAo%2BR%2FjbPCZIq3AOpgG6LKrCmmlbmMAUcHQeudcH%2BsUd1xDT3FRbCTBqe7%2FBp3zGaaz1ejv4Baq6UFQrWQMZIjPDSunmqMetR42Fru7Os%2FOSVTtuxpHxZBny%2BJl4kUr1kgK9%2BRHmUKZ%2B3fAgiouOU16NifhFundKXwrSqw3Ut6N8dLlNXj3r7rmYQClvhUZexO5Ndsrb1fv8h1v3Bu1mthbJzpHkpxEQUJgeIbRCtmjtnaL0oqEqSlQOl5a85OWfK0ZimHzb58RfIl2S74L5SvhgslhuaZOf3QSMSAug65TMJuLpP1YzOw7TcCshglprCm98Ce58HczyK6zX4bcAA%2BoBNV6iA3LxzgBquYRxs9tyLnnJNgHYyulrxtIMYGhj1zXYOCE1hWuLt%2BPJsc2VOrjq4K5s9cz%2Fm%2F8wBp%2FRIRtL42c%2FVBJKZZEmamsnaWP2DXRAfKeI7Ow%2BwZOZVdxv6lIiANkB6PXdGBaVfUaomgnfdfEnkTveRD1Foz8YkPctxlXWmbVvFUkua7TMMRb%2FYRA%2F%2FJtg3n7uv7ACIheottd8KSpWwdTuXFW64Z6b7NfDj3Dl0dZ82kHjXbIC0SmLP3%2FPSwKlJiHO3Q83yz%2BHwdKXMogZdIvVsDxqShh%2BrP3%2B5UyqU0krA5jCfrb6%2FBjqkAZ%2BgX5xr2RkGLxEu%2Bo4hEIEErAjkcAD6Xw48px2arxVYfMSa0YH%2BNL2QtuNZACNC%2FOHs2%2F1pDrxb4LOc1TsASDx5Mh1%2BeQuVHTwNDlRmabM5UIAD5w31acp1jwr1hYce03dBMfCIEukYBTt5A95zZAcsmAksI5jRnest1wHQFffyxIopmwSsq%2FCx0wykulkbfFL6a4yPTzJ2WYxvC8fQ7SzxIdCn&X-Amz-Signature=395b0712d20118cd2dd9f00302e49b76f5beb9798ae9fb00cca7ecacc767af49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
