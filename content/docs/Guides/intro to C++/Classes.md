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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZJ3VZ5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFvi5tDYe2k7AsC0yyG4WWI9lkzQWkq8tpOUYu4s4pHjAiEA0JKGw6CHlEkrz3VDoyKdEXmuaOoGxkTw5tw73%2BgLb5Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEgqJscdMfdwRO1NeSrcA763w26v6gBn4E9Zk8Kv0YT6j8DUk4gNv7hJWMiWlKUg%2Fq4lP3RaIAiEPrWtyjERjpofxj3A1kFiP%2BcSc%2F%2BvnV5rf8XO59BHuLXI0UtiJ%2FReflzp2vPNht68NN510Lk%2BlJ10x80Yn2bF3UwylKGiBai8KWL5gjR4O0%2Fxe06If4BWWjq2r9GX%2F%2FEjO7WMZKUHN5qsIyOO7CHCZos6kc0eXH4Z5a9KnlegT%2F8HdyYQN%2FeOTHkv4tadr5%2Fh9RAc2ebsmJczCCTKRJ63Rxkhpbk9bJL5%2FomrGzzKG1nYDEYU73OnKIXw8f1OdRQ5blldP7bg9LFzuUFqkShIdTw8uQ2ln%2FJYOreThFKiVoyGH49wEh5z%2BDwIapLksQsh%2FwT%2FP9EghPHd8QViXd%2F7XT%2FeHl4dENI6SVfznEoSHuHAoufUMz8ChESjF85b8iqae0enbgxNzBa9qa8OO5eD5j%2FfusFOdAGF41sWQPabzOPPCmZ94FQ7cquv2uI2js67v%2BEmbSaI9yw1%2FcznDZ94nGYQ6VP71YjYe9HgScSKuqMw%2B5tFPb86Rp8GczDO%2FCgzplMV7E3TTNl2222KlFW34lGUmAq5u4acXWwCmD4zdjceIJkBuuDOdEBHy12fQoEUHKCbMOS3%2FMQGOqUB60yseEGQNmfZ1qCDoebIrOLtS3Ssr7NN55P3QXbxFnCgBm5X%2FJPbXQkelRSpoI6xuDctvzz27Mzw0N%2Bym77Kx2JYXBb4nJjoyQ%2BOx%2FpWs8nMtwiQpJqI7RjDDZrXusGWhcNVDuPI2SwiiGy7b17%2BXHujVWWIEJKX4jCktUvniWhngiw21%2FOcWETXH0Mz%2BHPv6rwfqS3y9HACUp5fvvRICxPhDAdR&X-Amz-Signature=21c81e23763cf9143df68d7f5c9a8b464621cb9186055a65d442cb7bbdf7a8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
