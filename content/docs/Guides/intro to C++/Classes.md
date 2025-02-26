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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT63H4AW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICEknszauAHe28ajKniT7KC54IGyyDAjHzpqRhmn1HYIAiAMCxFM%2BjFhxITFCT8QAJ5DIQO%2FVwdy7q0BYziuG1MuwSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMGJJ0IWX4fFxJ6LBnKtwDZiMqsYOmI7h3hKlFfAKbNwHScoeKuR6LX1zEU19PxUT6%2BiM8sl5aW4pD0Hp0T7zh446iAyWQHyfwrj3xhLb%2FkknEM17a2AeEU2krT%2B3VFER03IIxz0abaZUHkFQN9UtwZHz%2BqZaIcmq8bgZjMeQyYhNPiUK%2BYd72v8ZqP%2BatviNQX9%2F0w40Q0462G6aIFuvFb0pg16wWpR3Ps4%2FBJcsCwOPwnralAjtEWorD3uIlxvXyy2kK27%2Fg27LuaUomfQE0rERrLKYuCXaA9XsyvzFl5t6dVlQWL9Um9qBAfJwPt%2Bf3XwNYKRoFijDiob6EcTFYpooZY0RXwkmyqCfc4hYNzbPiGtMC0%2BaoJxdEjRaOL%2B0XCztsyNIzPxs0G5ROmLb3aCS5lvm3E%2BF661TlakUGYHGa8M4%2B5z%2B5TyS2r%2FJlN1R4ulI2grMPCeRhDjNHiFuWXt8EAXgMxgNuLe7t9SV2gS7D63%2BgoIFYhgrPKPYO7W0a1GpMkJf2a9v%2FvILdKD9drGdLS4Ef59qm0XcwRmWmZ77sipKo7cdCU3AmNj%2B%2BFheDuFZycsOxXebPlYSzDTvBHjGzhQMJD827Pw4Eru4QyRtSFfDiB%2Fr3tpjMacNfi1UcyGqxZkQSGqJwYzIwwOP9vQY6pgEHOqEP%2BCdBgHCr0ORK6OlAJQujSX3q08HFzi9gPRb2PzRW2qBqU%2B5kz5OGtYvTmpHkAId6w%2FyDtMRnSC1IsTOgsY%2FGDIgQRA0fHkpUS%2FTPicXJ23JyOMxDlNc9NqiHvOL1svAkgq3I%2Brfe7o9NodnrCpOXjP6rd79jERdQGPe1c8MzNnUFp5FjSaniuOkCweP%2FFq%2FXEnxpsnJAMqG035%2BC2L6KAZeF&X-Amz-Signature=7ff2f105576d247877a0e59b63fe3c9d4730ef5f791891c2dba59dd1fbc5443b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
