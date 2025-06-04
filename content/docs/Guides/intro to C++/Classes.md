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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BFMJ7J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBWXvj6ARrOoaKjDit7Ehqpmhng8cgy1GoaWlVkOz6n%2BAiBoUk0Fy%2Bbu8T%2FlCUKWekBoJ4%2FtTLOo8UN%2BuTPUrw3VnSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMSBnsOWqs0R8PaaozKtwDOajiTKWrLcSTlOzO0ZyNmZpC1afNXeXVX1Z7WyeEuhC2my76s2pugd9UDdgRJhA43KVwk9cHYwPfCmYV5dgQt9OuSxeVike2K6cBlEfnqzT288vj7tWgRFtSG9bKCrzSnpffwvvc%2F3ZBMqdksWrQN2mGT62wbTxqdi%2FnKEFTx16F8CKupoMqyZAezhWnoBurS7Mq8PKGWuTKTvusv%2FjojvyHdqWi%2FGVOpdebhUHhucABLALAMd798kgNxDXnwd4bcaqzqqtjL88wvdw8V1slMxu2kqVsTYIv6xdoyGB0JcrW0byO1e9fOj49iMOW4X2bGJtc3y4K%2Fgcd0csJQcG8EO1rQR%2Ffx6sX%2FSuRDB%2BTeG1um4OhYuQhR6EELTspsd79GTwG6VhvUaLmX7Of7R0otCTh%2FdbmLJvG7WjkfKPeqa4DAxqmR9Y4J5vCxS0bRiFyZac0RCT8NPxQ0Gz7FN%2FaZ9MW6pp2q6HqfYWGYX6DJtxjFvLJt6Ktg34DaL54mAITC5MABpJQYCn9vRLTKeYumdUc9oPe9YrE2ryIgK2AgNz7jcr0baVhd%2BvefU3%2BMYxLGtTuZlIrjEnJP7suuL3o6qToU2R7Ljq%2BIhVJ1uTxspCjz3m5BSFFgXyl2Kgw2Pr%2FwQY6pgEu2BYErUyl%2BKJvBH7UEqMUStSS4CmVAE4NbUPUMrffEdKEcDgLsI8jVoJ96CtBCGnIwySyhA5mmEkO4fAjqaKvWZLTG3%2BOxBBhH9EaSGaOF4hl%2FehURARq%2BTi6Xr8lUa8vAtrrcStJ5nIE9ROqCt%2FuObW6qFOsuRvgoTX4xTW%2FEhhAz38TqAlIeaPGiwhTC9Xe7E8lDRuMcxRRSJg%2FfszK%2ByYGJxCZ&X-Amz-Signature=dd14b9a0b7a652393922336028ee8ab03f375290b4782f448cc7da695d2e9a63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
