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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLJNI6R%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAW%2F%2Fc4BHIoydKmTY7Tb%2FP5C3RfPm%2Fhx0uPj78%2Bv0ldXAiANJtcIdNhuZ7Gw3RPwECVdpAVJBawceTfoFNCF8E6DoCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrpbUHTtaL6JLzlC%2FKtwDatdL2N%2B5c%2FPZAKLi0lPSRDlZrK628nTan5v2oY1XOcE7xkWmFZMCUzCNm1EdphL13hEZ55vS3ndPkn%2F5twZzKw1EJdn%2FOUT7VwCJ3%2BkePUYoA2XElF%2B2gLG46CGLQk8oflaWbleM2VIrmPl4t1jbmVHgVOVgKBrvjTIYkZn0Piwn8HkDIn7w6dApRE4aWeuXTxlRsMhzgp0WB113O%2BF%2F7rhZN64kNV8ZYqhcQq%2BNiE1uGkragER9wBFcJFWbeMSgetjb9cGwj0urER5bYbROv%2F3k861%2FfKo0MkuM6ngtTpJJtiSlfrD8tIWSDE0RUIq4VFRi67E8ZX58xFh8DphAewD9t7ZFKZj5TTud%2FZFq4diYA5Oy4EnHeBJTtaGL6DbBSTZqTFLs8F7g8x6I9ctc%2F63sdJuzeHpfcs9oU095y2mfVHmdJ0SZ4VbA0AF0sjOeh6WVyyxGESZLK8sL5UD2zxTqKMv8GGhsrqE02vjMldR82O25s4q2buycYBLPuMNarjPgSNKtMrvjGGUCc%2FnhCmeMLsOQ0MKegmMBBD5q801hGZ26FGyv1NiAKCTB%2FUCq%2Fik1o9LlQ1pWNj3aRc%2FhfovF0BTdJk4R1khgvyXoBjS0h%2BKgyjyVZQHM7j4w9uCevQY6pgFlb5eqcjKXMzrZY2mEIM4LuPPbEQyLvkGEW0MLP1vWWdpxX2f9sIifNWJJtkIYOh549pQVYHMmAosLilNzJlpqLd6og9e5M01B%2BPOq9Sm6m2%2BE2Gxj20qwU1LovXF%2FDfvcP2B1c%2BMiMD4uce0o6KpcupgcUQkt5%2Bam7yqXIiwSTuWnwWMa4dmrM8Ve3vW%2ByNcZN%2BPDNwfe%2F6S%2BnENg2Z0dVknLGrLS&X-Amz-Signature=7a9da788a6fe4a04b2113922324ef76503aa3359a4becd7468660575348e4976&X-Amz-SignedHeaders=host&x-id=GetObject)

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
