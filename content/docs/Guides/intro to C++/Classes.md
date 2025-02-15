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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTNPUNF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDGegRI34xL004eMRpuZbj%2BCDzU1V8Ji21VgB0WqMukqwIhAJ9y5Ku3b6%2BNjhLXn19PKmjpyIrcVhWPqJtvhCLo9hmFKv8DCDkQABoMNjM3NDIzMTgzODA1Igym36drkJcRk4zDm34q3ANbACbcoX%2F19ihHWpdzWNGdZiqg3ajCbyp0EVdpEPZ7UFZUM9S5VW8dBiOBTF40tUjIuYc%2BRMC6sET3%2FGBDG4Fve7F0gwF3dUZxSDEp3170g1fux8wCk0o0PM0g8etw9Vl%2B04gJj%2B88WAoYO%2Bt9Ag6gPNE0j2r%2Fq4MLjLYxt5BW0pv%2BXipdeqyyRBH7pV7vNu2CdGjdhXzB3etPTeUvO%2B8KDVXOxQRrCZlesfYdoE6jyWj3rQugj2F8jafVetJecK4bwTqtlUhy15ZfspTFafr5LB%2B4Ccwy6yDEpUQbRE3PrFYV%2FJOvA8F%2Fm0FBfstCp3Sj9xyjDw2MgCEqLeW6L5JIvb%2BtE64gpZLIkw07SK1n0rdXpPlBf2p7YfLPGTMqmVHiKhs%2BXPlv1Vju4P%2FQ4kYjcxq29O%2BQrGYLO5Cg9mEv7PAfE1tYJ9dn8tmt9BfJRkKsiCnxrWMNx%2F%2BXPMbxUIT%2F%2FosbO1W1eDuPIL6WtC%2FBV02Xqb1XrAP2b9y3gcH1U3ufl8qapg0Tf1%2BHE%2Fu1jWy2NMEWc7se62ab0VxV2aP21iW139hRI5a6fnn6%2Fxair2YpNX2625pF4y5alRyJ9y%2BcR6xZ086paus1hTbVaxQYm3cubXI%2B%2BNpdIqevGDDws7%2B9BjqkARr2OYzuNFT6tEQwaKhg1%2FHlg1gYG7P3LxSJC1yC3Y6cai3Rw6zR6LAu7F9a%2FEQq8RBrudtzvNLbeAmWD90wdISFb7BnstkvV9UWYqejEYNJ8r75J52juXXQehRcaB5vlAGZ%2Fji1LwoU5I6T%2BVVvXG4bP2iu5ADBsERlsPq8UrtYGd8ubUawjkaRYX%2F6GAzSsHTa%2FDGJxoHfyzoGzVDUbv3iYp6P&X-Amz-Signature=2e4749c57f43b43ba6745fe7f47936e84589101add73cda52a9f864475261d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
