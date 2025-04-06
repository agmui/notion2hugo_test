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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKBUOLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfLuJDajng1guEFrl2y5prlCEVuNJCt1VNV4%2Bo0t6UtwIhAMtFBK5%2BfQPH5Y%2FMDLCvXhqDLvi64QAKBx6dVvr7AtxOKv8DCDcQABoMNjM3NDIzMTgzODA1Igz%2FJ0J30g2OEzNe%2BCoq3AMIyfhD7FfUyXztkxy%2BEMsWFSVi2cfp61dh2oCvH8GBteY2cMaTFuzqSMWfQQy3eSF6xI2VGfE9hv8qVNVbfY2Z8CL%2BlOshPISnPB8hnd31pAJVRT%2FQT%2BOy%2B3bKYfU48v%2F6basvclLKFOc4mi%2BHDSsSfVg7XO8DA8SXirN0R5vNF498h6FzAjx%2BCnptmTapJmxs0nyzP%2FBeWli%2BRsazJIb7pkvni7YohFwQP29rl0rXn1bXJO9%2FeDuwUxtyuZoD%2BFs0pBsPfylRQZhSOH9wCULkC3toTQzz0%2FElZkeoCWyruBthqfBDIcsTILr0q4de3Vldz9%2BVFpYYRl64AhF3cjAI1NX12lxeG6JG%2FjoodY9zw9aJhBw%2Fj8%2BzzxtSuJSNPsxfXuzq2qeeRmmOZyYZ79zVJehvC8tqv9oMepQ%2F%2FLrrCGgJkx7YBdJ%2FRg%2Bm%2FXyFCYZeO0Wf41%2BNqeFo44qCPswqbsSC9dzN1ore3QpPD8YqWTX%2FqF%2By8B8PzJvZlKSDUY1CkiwqRXNH7GoaMBSh81dWo9SNSIvFxMcmX8afNpL5O9ZVmhN3saPHcQ8jtaY%2BgCUbK9hXR6rON%2FwCZhkj1e0Rh3Xjp2k7f4U5E2j21PZ1GrVly6Vsaf4GRa7BPTC7wsa%2FBjqkAQNADrnJJIufSe62zwtG1f1OLUjgr24QTGptI2LAI24s%2Ffic52dy6laTlhvBnxslUbv2ZJnm4XJ1%2BWXavlKERS4Uyk5WKjMgF9kjSLRQ0AVZrqeod6krMLM4Be5S38FJxyGrXYU3FyIxMrVferuX28NBtBvEid3knvDTpKohmVZbuXlnGG2ebRwC4Io4Pb%2FfX%2FeyYexCp6QTwk53XnSgAYrSxY9l&X-Amz-Signature=e6625fef08f98292cfbdc26614c67284245d0aa2947f7a92f559db15d982ad4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
