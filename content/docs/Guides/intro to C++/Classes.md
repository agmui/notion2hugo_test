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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AX373B%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUxoWCz4xP3qbbUlmsca1xzPojT08MUAEMPgn5AJd37wIhAOeTWeF7voF1OXJIDHbb8c%2B4MBaNQ4J1nWrAtDqH6lumKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziTb64UHgjfy78xlgq3AOEMlRophtuPiHYynLhbVGrBw7CzjlP%2FGlIkaXF3znMzRoHhCjklmpGwMWUYLwniuRc4p784Qx1sF41fsfklQTbJk9ravzuokS%2FfuqKNPgVyrHzSRQLWFhNZXPO3Ny4EotAPEXhTVEQVwHdSnP15HS%2F0JWcQ12DOv7aWeM%2Fdki20hdUjvDITQfghxAlfFA0cj7itkWEw%2FbD77e%2B6HpXnmPgNGyQLwXybnVne%2FN9uivOpQRAb8FFv4j2R4UJ9fr%2BfW7V2QH%2B7xdwwBErxZkqEnt3ZkaCKBblbGcyVj5EBgPJuO2SYe%2FXsTYXNg8yc%2FRSC%2BbIFBkjmWl%2Fmoc0si%2F7i6oGMHORD5pVRJwIxFpZd1cexLruZGwYgWQVfpdxX50dZcjEJkUKy4YqCPSMTf6ObsWkpQ%2FGJhd9ZRoUKrMs1nEeJ4zS6MlpEkzIPQ5n9BjnDPDbtrx4cT29CeM%2FjFjw9mgUhXSM2iFLBR3%2Fc%2BxOmVl20yQXBP%2F%2FihnYRIBzzrpx0Uz2MHBN1wqrHV1J0Atc3PACY7%2FfQKErlVNN1NVLTnPbJv8k00XtYjM%2B%2FW2n5ndA%2Bb5pUWZkFRkl1usQQ4TmdAfgHfspHJDv3dhzY7K3CuXtic4SDfB%2BJGFen5fXeDDZ%2B7i%2FBjqkAQbRL%2F%2BRi7dMttrkey9eew%2BN5L78yfnmoBVWrDOidLDMHV25LZ8Fihy%2Fuh9oqDFeP7D3UK%2F1xS0jhTaTdOGCOccobqJ4D8HrZ3Q2JdU7%2Bc0lawJY5V%2BSmAlWHhIxc9hL3cvQQNsf0FJyu3RlUQVIfDee%2BKhDwHWepH9kImEUrwyJUtEqzTRz8ciM%2FIYP1966I%2BX8zXFjUxyC5yK3gs%2B4EMyDjGQo&X-Amz-Signature=48feea707aa3b0a59d77c9b352d45a654de7c922d2c99864a679b486fc9bf28d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
