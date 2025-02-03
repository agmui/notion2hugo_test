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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCNFVH7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9EW5RAovpqdKqLAbpGeryWCDMByov%2F5v2aV1egCSyfAiEAzXcxihdijWdEAUOtj3APQpDOK4YSaK1IP%2FCx%2Bc652Ycq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHsgOe2VFdUFJxLIFyrcA4OmNaJ7ujA0rJ7e9jdwOB10bFX8Gpv3YGnaXeuGctidmW4%2FB0KzmHNpTDI2VIe4qYbT85c5im8gEnoQ5B18xBybsazoBUwhgnX3mkGyRXRy58A%2F8E%2B39DMTlIAHpobsjEG9hM2%2FZdSXMULgWslfLAbgFUVS%2FfVLthmGzBai9P9hK%2FxdMOWOl%2FYNAf63a0y6qXklEAmWmDm%2FCZJhuDh9ovXLOUGgxk2xMNznWnTtCtMIzqpPFTJdJCZzdZTgAdL1pZorai%2FNgqN0FtHr%2F7SE8fm61AwgOh3dHb1FQP0UBEqHL7WN4v1q3Qy%2B%2FHx1zobOLwLaM8n3FVd6asR3NX3ZVHtQ9mLnQfz2NER8k3cCj8FHu13yYlfroxqcNY2nuN4Nkxn1MIi4loso7XPEUsRqsF%2BpwUhXmn0YbTKdPX15Sk0wyCeo5E7i4NEFbsbALSskN53fQwt%2FiH8eib0KGBbAPzimtVzXZL8EVlkp%2FQln419nnNSVLA15gFIa4IZeGEfOQO4lELcdJCRqgno0ZPHCUAM1%2BCZ6ghnQ6nDx4Jmk%2BcVUH8nW3La5OAV9m2gpkDi9c%2FGMkUa2Gc1RjB%2BOBa8Qy2p3GT7Ly1A3%2Ff8uD1Yly655Hig%2F7BVlYH3o6sUNMI%2F0gb0GOqUB61pI7h68QJuE7oDEvWhTzf7T8%2FAcioD7HhZAx4gzJxIulNRtq6izK8UdDAmmlsZZgi6nXqhu3%2BO84CN4t6GKkWmEt1p3d4KXOG63QVZJSgm7LqHwCU6D9q0chyJocYnmO8OZEnjbLklidsGFGJKYxaWs3Kyxg3HqrMtJjayrOoKY7zIc8txRzQqRXqBf2Bff5s7PF3hcosTtidMJKvxD3wRVVcUh&X-Amz-Signature=5781217fad75a9baff49175901b252f382921fa36b4c18d98fe0e671ea1d360b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
