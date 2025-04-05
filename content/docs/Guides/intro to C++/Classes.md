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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZ6OBI5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDJwQBPnbhi0FQKKme9PIY6EnYxNDVLcGzePqnWoj4wIgNAHwOieHGGig9SdDnag9nIrA8G5Jo3%2FgDNfyqEVODrEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP6TMlVXXWQKaagY0SrcA2PgrGM%2F1wI5UhownWMQZnYKMeKP1CygzlvXUHg9he6xnFvBW30yXvIAOWCe9dIUS16829b772U9XD0zjBThHYLYSj%2Fu9BPpggGjBfArduMTVmSQYDrxZ0DE13HTyuGLWTdEvTEN%2B08PCEL6xGSDNBWC9zlL%2F41OMlp1DHcnUOgJWZ%2FdIVivMYOJLHGfOYy5kZ7jTieCSLfsvQz61DirvXRUh1HEJP0dUMrYi9HAIfgVqHgrwwlL%2BuqF6XVq%2B%2FQFCvYBSUXq81evXn9bK06vIMLH%2Bb5O%2Fqk7LcEHJ3DJ5nVhSoRehbDuYBU0nFECvQq%2BjXMulbgUI%2BOQWhlf8QaSaGEW3HcuemCecI5m%2Bzxss8X4HfpIfg1z4cGZGgBLrT9VM0al2Yb9jB1A2nsHdipbSyhin4f8z1fwAtuBij0Ygr5FjQwfUQ%2FLpFluoGICn23b6ta1Ki8Z40jrFK1KjhVHNeaED1XdSX9RGjl5c4Z9Z1oXulQ8nsahEMAAizdr6%2BEoJqUsYBXO5pVPm%2FAws9djPU39CyhC%2B5uNhoKlDMM%2BsStwq6Uo%2B4gsP7fKmJb4sshp9IKMtpnBRmSQGXg7eHt20J9A0SDE8VjCstpK%2FKUiZa9hUdXbkuOQmbhdSEgVMMa8w78GOqUBI8X6MVFtOyRjpUKyQpkmZ5JnXrTDAU%2FWt3HrRptquH2uZ9ORTPnfkDmNdeHqa856QxG4FMRn9BAsuSB8paCzcI939dcYj5lBUh2sPMBCJ8J2e%2BxxJNzWFIYj1ImeSFNyp2nVhwbo4Mq8ehbRgmHSjeKynWhVZbRChizFPsvdh%2BS%2B07DtDOVXVW9iXI%2BVGxOmXB%2Fp3STYzD2UNQtECMZPWMc3LxDO&X-Amz-Signature=7e5f038ac6b468f0819c4cd43d881691a7e3ed5d14cfbaebc87fef7d527f0bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
