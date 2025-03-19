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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3CU3JY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD%2FmQODmM2iaKe1LwBCwQumEeC1MQcIhhEJtytKVU2yegIgIzjdfm3DEUJmvuQdZ%2F3HdjPHLFZrhGG5H1ignY1aQGMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCNrqv46hM2pczNkuSrcAwQ%2FroMOY3S4RTXYkbrlSW461r0x8y2iMj6K0wonQj8FvcWTz%2BH2ZfztGOjsf60eMKgBDCNnlhQVgVVl5iZzuMw5O3LwHza8WpiQCXGNTlRQCaYvwI5CMBeB7xriPErqVKVPIcl63vRt%2Bp3Ve4zsoleCpk4QuhNVW23P%2FiRF5PecBHdBRhSwX7o7wfUrvR4YPHjVxaoOLQRfmzuRicFlEVSwobyINHK5GcTbgz74W0bTWeL21Tsav7OVBdhVVDZ4b0kuAKSThrY%2FqE5oZ%2Fvx%2FtE%2FJ0PC%2Bn7OGtM9iwZCDdQd0RG0cda86UCkqpWLSQQqR5HtkR4LqRArAU349wdXdqJUmNnDFMBlTc2hxak8flPwOFVXsYK50O1Nm4NAj%2B602bEPy9ifdsjr9nX40%2Fsv0Ec7WSxyVy4sRMjG2O9b7hAVhtT78mrDyfOt7u7onGC8Cj1fwyW9QNzFsYlL0gpiMnmp%2B%2BTZE7a4eqTixJqA0mNXQd9fwofX9vgXNULwenXCpB6hGEHNdBJ3%2BRbFlkhZoSaodRV0GMUkS5ZBcCfQvSAX3BemeWUlf1s77YXf8bBk6msb%2BM6FFl5FxZmqr%2FrTxAuEtSv2c2RsZ6bFCJZPYleoXPoateYzNh4Gyha0MIrZ7L4GOqUBqy6XJDo8nU29%2BccqdP7GRPmtcYR81moO5APOMD0I%2Fky2t%2FEjpoioDYEWz%2FqIOLmlBOkfKJxu9DK5%2BjbFQthVryn5ZqabXeC2KqVaC5o2s%2BnrIGwadcZq9pQWTA5YYiKFq%2BUyVRC12Ed0lhRV90LKinymjfG9lgIqiyyOwqQY6pc6ys1%2F99ygsTaWD9h2oPHI%2FAC%2FAq894J1Jgryr8MV0wvOp2Erg&X-Amz-Signature=4fe371928c04e615aa71a25328d15afae7ba8ff80675057d47c1571180cba771&X-Amz-SignedHeaders=host&x-id=GetObject)

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
