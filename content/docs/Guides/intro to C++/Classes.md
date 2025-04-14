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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS4Q7PIB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCCLHjcxMUzxiu4MYJ2u6PB97Vdr3GciI1QZb9AQlqfdwIhALWINRQ%2FppjifuDxivb5EaNdJG93aT20CfjdKjVHrcfyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj3r%2Fi%2Finc27syFzcq3ANi0VSIpiBNYJATKZzDsfGQn521YUXvExzlC4fsoPopZ2L1jP6I9ErNsOkSeDtTItRm0%2FLbzkn3MrBMTHK9%2FNi%2FfVtJAdpVW5bC7W2nlhUy%2B%2Fsiikw3DN%2BIYAH%2FktDPTQYX4wcCWzxkXVgLpnc5hwCZr0qFkjqFtiS3l8SgKfH9C1N0ooSMpOm6FdCQ6jjwsgJdbGfRnHmoqu5mwPK1AqlPB2yry9ETKM7mjhE3bvEBgshBxbTnYuZvJNDWM7yg4cScOX6x%2BdzKWC%2BMVmw6HBBpn7iviUMrnEcHO3THvWs8OLAAYqYLTfTO6ikLS4hNxbVNSbp23viSiS1CnHrXjhoQtopZdjrHn0p40s2Oq0BDfLmRBLgGGemmZCP9nqPvdPpP4PV%2FXFDlDsWU8Kup1oD9AXLsBTVzIFwLqQ826jitc6G8bTXGwsgBBCGkws0uaB0Gl6XF2FNtUiiVBeUTZDzNQK2iam%2FMaIyvcxtCqSLFRT420A2k50rzljP%2BL7eFms6wJbkEQpc%2Fs%2FYcnHp6jPzQ3dYvuQoc%2FFdc%2FhiyGLXY%2FCdjldeh2w2Wyj9XcNNRVCZIRWqBI54ci1Oieeeb%2B3RyEeqpJdDRu1v2HHqbhdKK%2B3ygqAHarVfniDW%2FTDCggvG%2FBjqkAQcEy7%2BT%2FLoDZ1dD5RXv6s%2F%2B44q5YkCC12daH%2F4U%2BSNmPAdxa%2FbkiiNy4sM5oO8Y1trmeUT6wTI7SHV5i%2FCiMTNepGBaVVF9YCtmhAlAJ10OLXm6DqIOArmiHjC%2FJZTGCO505TREa5RkGPA%2BI3%2FIu4n9NFhHPztzVZwtvhVzRCFvAH9trYXYaej0x5N17XJOF0Fbpm0lkUlml1MdK9ABTp7JNhGX&X-Amz-Signature=196e9a100ca2ba7524a0ed4120b56d73f6aefbb6ea0ece59d34b2491c3786d77&X-Amz-SignedHeaders=host&x-id=GetObject)

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
