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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSEBAV7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC309xn3R0gAQmVizwVr1Amx0AjIL00FNoVeKPHaejIYQIgMPuB4O7t2Ka2812kkws0n%2BDOTzoQEKGyhTuYMLjyfe4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEQVjZQt4qycs2ol%2FCrcA6bDE2J2D5AIn9v4%2BLUwN32KUv1e7hi22MPIXxK0%2FZy%2BroJwN1vKvNCk126auxRCR72jD%2BpsBADQ42Zhlf%2FbWlE43Ney3UZ%2BF4z%2FpII%2BVsRtHXUQNSJ0bGoFlmuaTHwnsIyYmV4LRTAsgpOfK3vEk3%2FJlX9e4stUCTE5%2B4J5w21bzpX9BDlXaEUxrX4oZZIwM4nqdZnHjZ0Nzjs%2FVT1U2lkCyANYIOs9w9TkYp9gko7jktDhCjPneY9bO1%2Fh2nhunCbQCPs1aEgA7GiAODno6IH7oc3CBLntla%2BpxMvBZxkQhX1k3zsOBYa%2B3egKdIHc2pkV9%2Bscqr71DM1ixr8MoskIx108lCqNP34i96k%2BK%2BsikHeHB47EnQ6ILmAuFcd%2FitKFMyctHaxOE59GaWSCchNYC7epR1t49IK0IQwtYlq2oR4v%2BHPJkXxquz3G%2F1go%2B4M4HDr70ZTxw%2BUvoCqTzzMhEV0Fj5HnRQ58ATXb3rPV1rSkavz9MUdxbBgr9NHza33BtAiBdS6lEJ1YKaebN0Mpz0CuYD3%2FBstYxgULe9sqEz56%2BVB9RBdhwxyHbarWECQfrPeQHIXoUBoQ8FVCgRNKVTI5r1bvlgMQvv9Ur7SNvtLQUi66Vp2BWpw4MIrMmL8GOqUBqmPnRvB8IWjKFOMlFd%2BnvcLikcltZjzIE69bHHNIQEZPqZv8itI79yIXRKKHh7vGDV9xm1QM3uJt6fgb6K2RyGxKSMzZLttkauX00uUh%2BwpD5qJsYeRwyL0rKEuZ3oIzEqMFEkWgOK9t69OKH6MTREnx71QMVZG3NR6nZkpYOVxUMBJCn93U979LISVGKodPdimfBt0HlPMGO25OT7UpFGl3WS9%2B&X-Amz-Signature=f5985b9441284024e1d9242a95a5171f02264964380e6b56266a64de38fef630&X-Amz-SignedHeaders=host&x-id=GetObject)

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
