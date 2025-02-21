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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ4UTXZC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4j8QW0kNDULRSBhDgdARzw4GBDLlOASsvWun6w7OneAIhAMuFyCNr4F9%2BZCRDbJ8vnSbC3rKH%2BH9r6ZBshQaPkVxoKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAju4n65FdLWhyidgq3AP4fc98ggJzwbD3JkqThYTdY%2BWOaZ0SfeX71IZCqwyb%2BcjVsHFzEeVwC8N28nzosn0rnaooaGdUcbLwfz4k7Ia1r3DjrZn1dgNgSRoA2XYnWKmf63ZKjj08V%2BdEZ%2FhgAolmBGhm%2Fe1JRJYtpTQGToh88vZ%2FIvZQly2UYNCPEDNHTQbHpphY4peA2do3SvuLHBGwBEpMyheww%2FfnSbqHibWAQjFpq%2BadIuNR8bmmSdH9XN1hFNcMh2t7bBAL%2Fro26s%2BZBNGJnZh4KoLQtS7iBy4TTQq1sNixv613SqyGQaWAKv2nE0XQzlpYMNBKimS37LizlC3aGd%2FHGgsCUwxAIVW8%2FiJUWKkUb6E36pBZFamH2A%2B6tE6xTiqBoHMyhRVZRHcMPR3Y3knVnaO6hkeDJ3OUSLaaLvrkF6E7azj6WGaaTzN9xX7E7UYWi5EQqUUKt1dAlxBAYHj31E1exYVylYXbpfeDZQNWiiIabqOF9uZJB5GmJdX8ZXR18MuokX5FGadWPECKdOyLUxe%2BNB3fRecIuNH7FoU5j0gPLDLncJIiZ5zmETi%2BWVANAPUiQhjoMuOkkBt88qgbDfQlST%2FH2mRA4ne%2Bw62ZUSbwrSFMPlf9m6J0wsi6XxnDi7WheTDwmOG9BjqkAbWb0a3XEa7gqpTIjHO5quBwW3BaXud2QheQ6JNT1JXiKkLaYKmHckluLvvq0McMEBetqOoec0LS8%2FZARChalh7jfGOQOWRj%2BdZwBU4YFfKTI8LdhEo5mrw5kOS8nQgpghc1kpFX0uO6jLFc%2Be960uuQzRLVCgRbedgku%2BW2ogUeftq6AG0MR4ef183RDL8WY2wUcktAALV%2FjVNRa%2BcfTXjP%2Fj5S&X-Amz-Signature=324e1cbd974a95e8dc0e150b526ccd27166742b5433c15c47753f44754a62a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
