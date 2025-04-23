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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCSNHFI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICUk1uJuangqqxJpH9bf%2FqsIv1tq%2Fv%2FT%2FbWI91WBewFZAiA036orQj2TVHssmtkyyZUr8juZCxw0jiunIuvoeaiS8yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9jTPuv%2BwtyNq%2FGk1KtwD3xz6TFIvSugrFOOqAZ8JyVrPVqKxNN553Z6vgDr5SGrinPY5k1zSolLMWWbaliSeyqqPtqs3sbbjz9V4IFfgOkrillX1kTiqQYQDUdwr8vM3StL0QDhjAvRyTNjT9WCndL9v0c0Y0pNg8xHZYlu7G9vBFGie7TMnGDmsRMyF%2B9IKXzxH63oIrRIsT5BnbxDDacr2f%2FktqfObKYO4GmXUTLoCTpvduM9DRdVBPPF13MZWmg8p0WrTapIK4JbtkbvENjx90%2Bv6AXQAqh7EQwyZqZFKzGN314XwU9xMgDe%2BsDBrdLuSaGVoQ6VubrQlxoKSifrltYPvdnqBlvuIOCLgLsnsR17uGt4vCR7KXEBj2DpjMcijfug4OvO8v2Biv%2Fkb4LCiE4C9N0Yejfs07Qc8FgdgHNxyPUhBT0nkDN8qNYZOpMog4YW0sjiXdmb2e4lvJ8mrJK6Xq5%2F9YVBy6W9Ux52e64c5DH54yEOcvnz9pZr1zIHbw0z47yO%2BOLgON30xWowBNFQK9WiH9ThA7plCikvkSYsy4TPWUXbFiRBgnUMH6GRyZwX9iJBC1uDTDW7GrPpY5e7iD26Kr4g0Z1lTB9RtvTwAC0mO6o9s%2BAbsaGEQhj1t6bwMfiG3UkUw%2FPKgwAY6pgHyZ7oCUDTKbiTFjUsSJ9E6b8irmKvA0c8%2FsJ0%2B3oS%2B5hoDYOCyNdpoT6ZYAWQuff1ecP9OEbQFdpAWvOfx7JMHMJobskzAKfFiDNUG5FrsNTG27A4zeuGtL1Z%2FpV%2Bd4yn8ZBq07c4nNxivcgmBslfJHYSlit00U70Q0fPXr7ExyblayD%2BL2p84aNhnVstE34u1VoCAweLf9Kw0y2P01aHoQ9hT0ljl&X-Amz-Signature=688f92bfbe123792fdbdfbf21a4e06c8eaf9beaf9f929e6a731eda58e3877673&X-Amz-SignedHeaders=host&x-id=GetObject)

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
