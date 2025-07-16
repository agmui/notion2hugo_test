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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPJFCKI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD2I1AAN3EEOwRh1uCF5QSqh99ApF4zZw6yEn6g7ticOwIhAPUKqHuVQBi%2BWN4vpup3Qoip9Fvyn10is%2FYLn1aoNJzNKv8DCFYQABoMNjM3NDIzMTgzODA1Igw%2BEAH8cY%2BZydrbbnIq3AMMYQRHX1Y4sDLYDVkKKdQfKn7uqvLaXjJ6LJmpoPQqvOi6wiWxiNN39Xqf%2FYUIn05%2F4zP83e7UmVXydcL2u7UyZFfk8InJNnDzeiGkRqo5fNWC5NkXwuLER8aq5vJZesGDEQken5Ccr3z6R%2FMEMY2Jx6FQcAsgy5kiwMkyr4OIum3BnUEgezYWPQYcnjflM%2F5joOxET7TNaXiawWBxfSuJk4ETgo%2FKBIWNpkigyReWpuGk1rxDyCESIkolA44FV%2BVfA2qeNZJPuydTWtKK5oJa8AHmLoDiAV%2FVAKtfID89JTkEJI4ldwBbb8V3zPx2rhvFcoRvkyjoxlJhHzfO9R7Wax1RR6QdG9fHyeiJe1dUFPE2aNVxINeYDGzJah%2FHF%2Fp%2BUMUCFcah4XAen1sSltKrFgEnNghs7bXgXWNrpfG3f2%2Frtd56oHsl%2Bi8c4jkTzY3UHelaO6yS3fZ9X5TjYvp6jU21cRXSSw5sL5spqQkY6XUlu%2Fya8C6oNqOOMl0o7cmT8th4BSHDYUKRu6txmAo64CGjC%2FIZeWpRT%2FFlVeasXh9gf7kHBmH7Ps5qxrO5MZvPxFClP91bQTK8DT8T8rPBPRLdyFanDtrEWJjr8psqIxLO8dCoNtHoHuxqKDC23dzDBjqkAU521nXsNh3CK8yA440KNBrPT13Yb5WESyJSQX93cKA2tmbKX88l4AAZS%2BMGD0qOd8YWyBx%2B5OVshL7g6pUSILLqj23laNLGRXL8ljCAVBezRSNQUaclcXJ2P8toXZafniSb6VqJPIHGOIGwF%2B0X50X0s7dPnrO6dX1OJMMGTux5fGyUogAB83uv41Y4fF5fre5krM9C178X9Cq585hKFHVkPNyl&X-Amz-Signature=85eff4d37380cd173373377b8cdef09a45060bac3bffe41d701385502b3226d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
