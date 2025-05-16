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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWNQUH7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbJWfKpUhxwfPy5Qc33%2FjmWTAuDU260wPrL%2FbukwVCUAiBWOJqjniLNmc%2FbgHR3mQS3q4V1Lpnh2B1N5AHux%2BMPNSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMWimzODk%2B%2F0mfCzY1KtwDnnu5i6eYLLOuhdFJ7O6nNQg4ErUihO%2B4Acq0BTkj65mv%2Fz83iEDzulEAlhnWwhyIHw5ow%2Bc4Kk8IqAkziM6TlBCNppeqboG0E24Y7dOJwnQEnDaTgeBpE%2Bxl1f4KDwy7L0vKxnE%2Bj%2BtUm8s%2F1PzAWmzF20BxX66DDFZvAAyVl1I0ohT86Hlv41WmMBbP4KickMUuciqO56z6607p1QomwaAIC%2FfLnXfUaYeE80u7zmVOrsOIEGfquZABVhiN0NAdF2dBjTTDK0Q9K5rri9ud4JC1Fyei1OygKsmZqhB49oMi%2B%2BaaMjBvuuYhtmyJgbmebCZ0zugepn25MGUhfg0e8JnVxsKTFocdvrk6L04u98z40IlAzvAND%2FvzLM3Tmrnm3bjRbi34oEf2XkE7kZ7LAaoIGpE5yHXSce4SOIxo%2BqcH39BcHJ4Aicva6InLfhiIKX%2FruaW6f2hIgiCJbY7Vo7wOar9SXB4IBjN5i3xX%2BW4IfnVWdv20u5ePX4x630zplbA5StH4sDxGTEYXX%2BXmDIPACX4vvRoIhzV7yst8FDU8fJCr3dhsRLSWPMlm1LBxFUYSsT%2Bue6s8mh96l2CkdfyPp2McW6TEK0DZ9D0HHi6vLX2JvQh%2BVNyQjakwrO%2BbwQY6pgE1LJHahJUifpiGgt1nR0ZrfFXkwQ9G5abOEgvE28qYGwJSdaZvZr1hkSYkMsbgzrHq65cdpLr8LhK6c02ZdgG2AgnVA0DNonSmuvPYjkCbPmOT7FoHl4NVNOc%2BT8MwdkalQliceqVgzbc4LeJIQi3Qx%2FuBfKu0kiLYxH4BP7b%2F1%2FrftnRrXp8aFCjzszagS4llkuo3s558JUkwUmp%2F%2BrCtmSGy2NMS&X-Amz-Signature=ec50d4d64ffa75a623fb7db4f04080b63548aed3f591393d7ae85270d75d49af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
