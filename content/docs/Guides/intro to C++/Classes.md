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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXR7Z3NJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCz17pzt0biMcL756S5E9SWa%2F03M%2BD7edtCh9rCm1PdqgIhAI0gx98C5fOoxvi%2BGwiDtSs0w%2BLxAWN5IsmIfGziIWOtKv8DCBMQABoMNjM3NDIzMTgzODA1IgyzYKQHMBrmF2Y2ZLUq3AN%2BQrmbVRODEqqBBDJ%2FsMcHYYhgimTPqTZICuTega4umkeQU4sRlNGucSQDk5Lx1MwTHnJpNDKm5sGfM%2FOoYQn%2BA0tnGWb0IxqM3VGIgJQHUhuDIKT2C48ugvZv2IkO2DYdTc6lkPiwTiYS92c2ObAr5Mwzo2AS1UF7zu0g33v1Y%2BCwkkVEW2QZ7hgPFbom737JcOfVm5XxYs3jXVeVl5IL7WKEAUKuXBNb%2F1gMuMmcP1XDcWSBvyVSLvLpvrzQzPAprZk%2FuQQR2H1x%2FdPJyN%2FGYysDb%2FfTj7SXtJYC6GO2kuncKNlzs96muF5KWKYm8Rm0mlayCbW8qrGnr%2FuHcUiKtRve8WSNEPkd9dVUw2rRJtZCQUmgR0fYROPqJsKV%2Fg9qaEiN5h0wMe4uijno%2FyJDoD%2Fml7Hcec%2BaHK8JwL3gJrz6i8PXaO9UNTLF%2FVPuzPksaYxJqeHMHV%2F3o6y%2BBAgVmdUdSHmDF%2BcDbxRelMkDA8FF9OdfjxOCD4LIVW7oJK4agsAwt9SBo16cSoe819jY6Kg1Qqqb1IaI5nRk0FJ00YHpSPUrQB%2FFsx2EXIlRKOi50yz%2FfNFT%2FZRoAYMuXbDxgq9RW0uG7i6aa4Y8JtltSkdffbjUVpNZDwoKoTDk05HBBjqkAXY0axCJuLBm1IDnzW5kk5Df964NL87xM05Sz0lS7gibjvmJG7v05BogJDhczVcfSV%2FCqLjxJorNnq27Ckkz9tVwFqDHoeV8OgYRLE3XqfsdW1QMsR%2Bv04KLAnNa7sMRar%2FJ5rayiT75EeOnamBne0Ypm7yZWfayUGQlyZ8Ca8%2F34S4VzRghGaSlIaGsjlENz1fmnoWzH3g0026R%2BOdtPXGJYpQi&X-Amz-Signature=670e07e51be03bf81a1f9a2e86d682df3db8d62878970ae92fc0bf17d2da0aab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
