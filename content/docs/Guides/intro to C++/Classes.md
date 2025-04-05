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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVQNARPV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJwSMdScxw43Pj6XYAuRIrk%2Bf1wfzIcJVdxTYfyZKKPAiEAnuy7Iwoj7PToa9o%2FSaIx2HvlTGlQJZ4qicmfQaVhkU8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDH49i2%2F83f8KM9fztCrcAxDbqtarVZXVbDQdf6MVJ7vK0JGXulSlN4OULQK2US5GnQfx1wMiKGaDsWNwV6mKDliebq6YgGcK4vqA%2BzGenCed2pmF6bUHmUfsEV%2FcUhUJrOK1QZpQT6O3ZGqmRQuHXe0dtv5HMvqTfov1hFMXJGXk42zbRwuLhWA0ZcvmX69R5nvpBvnBqXF%2FYr%2FVDUPPqdojHVQ%2Bz5lIZxw8usoKN7s%2FujbfEjCSLfd549wpzOh4dd%2Bs4xE%2BBuBFqc%2FeZMBDjf%2BjFDzlJVlw9Xq%2F4tvxAmlaO2gDyIDUHFD8NfAYUMfvCWoyGLe3IURafN%2BHWRYQrCCN5MzssZ2eHIyZj8fxYHryKurxeTwqTeg%2B3ENGnUYLGisF6Y0N%2FBfTiDsWTF4Uxpzh%2F1SR1X6GSe5vqJwHXO9iuHJDtoCEGeRhOR1P2GHFvFQjtExRHsBs%2FYRw%2BDdUWT6MEnXK4rPRwapb8UCpkp1DmRKHsT3qKtExMMh7VQpo1OGvy8zOT8h3C662yKEZ1Nz6SewKtZBEutiboMxuYD1egjIjH3u97TxH7S5VvbqtrtnkwIl1isxlEhZKZd3R%2FXTbHrghl7SRVddRehuLml0X0Uh1R35m5bnLpFnI65T8ArCA8ET26k1MSiQ7MKaRxL8GOqUBUUukvCJKOTwnbUf1szt8aqJ69VY4RBP6mIwnjgKu9awsQvWbfoUlCHJnGAfIUa1qOQG9wUVXuIXhCErNjslJEmNNxSJ9LCC4Va%2FS%2B42%2F%2Bgt8aom%2FpNZGm23rI%2FOL3uvGrVk6esHVWSSXtq2rSl%2BvcVa%2BseYAEXe3hiYQGl5KE2SxN6FhzLMrWzicTZaJ4Cw4nprb8wf6jMLHl5SdsS%2BBHGRjcaCW&X-Amz-Signature=015a593b18a79ced240628c457aa57b92e62e8970b4ad3a76663051ccfdfb0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
