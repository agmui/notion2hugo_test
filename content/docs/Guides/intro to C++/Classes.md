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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAKYSKQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19rUGR9hfU9TV8rlxB9bUVyTazsJ3OAfmijvZGyUU0gIhAOcE04jpGF%2FV7zlDpWPcp4XvnR3FE3ZqOc6XDZFeOu8SKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoejiDd4gbYqPnLB4q3AM5m2pDkauPhB2bF6i8egpV2Xm3d1mt7gRp6SDAgkmjAGEPcz%2BSFhvTETRQanGnK8uEcn2kOEFmI5m8h%2FFASf9haXa0p9SDDltHfTfKZxibyyy8p3yyU72B2nQIq71%2FXM%2Fw9WdELihb8q%2BqBIClm3FKIOl1wExAMV3kIjnhYLBclFEaKkulbODbrWY0vM%2FyuIKZV8vbM435Xdty5V1Z8fdO%2BTyBnALxDtKRq2sUOLnFeDKJ9rX94ySRGqHQR1Lo%2Bd6i7xSkDMD2wXw4Qwn%2F%2B%2B9P4PYPPOQif%2FBi6IG7qG%2FvXNUTqPshBh5xggJhe2EbqEw6X3z1m0p6GbuMtd0tO7wxO75g9I8oOQVmyPmju%2FCy86V3jRJjQDDPLMCqjMdhLmUou9INCDGaBBFb1R1dXuUwSAEboQQrq70B1IWSDpVpwUd2PGUMx%2BMEj0cruyP4bXZ3Xp9V5IWft3PPGIuGa69O1X9kJZI2xy4MxfqkOebjwHEYBjJ9sPA8hCs5GONGUPfDcEQxa%2BRyFIL8oAU%2BtgvdJ40sfS2C4CJqKYyHpzPSuByE1c1cyx0Y1sv38d%2F30H%2FAo7S0t8w6pBNueZuhVs1MCgvXe6DIzzguRTK0sp6CnIhR3yP%2Bb824IwDVPDCbvuDBBjqkARAOIcWeAiIdX8ALkIQQmQJ1Cp8vqSc84BZ56zA1ygt6gbO%2FTvFd2iOE5NlPeiN8VUzuII5xCgAce2dYZtA8xYLkyEZhOW2YrzdcX7tUTR24pm7RyupmidNRoHkGZ19s0y33auGRMCwpQPCwS8XWFge3jM8k5zxlUtUOebnzBvBj3EIIcvgQMHYA5%2FlCbGys%2B5zbCfMp3CWRXwNFnB32XFKfla5K&X-Amz-Signature=617c8444e2a09687e4ef72f62e910fe11a0d1e173810985c14dc1f0a68749dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
