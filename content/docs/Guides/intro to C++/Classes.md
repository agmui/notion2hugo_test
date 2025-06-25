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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4IFS3J%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIH0LpVKHqbiw4FdB9ybI2bkjFRjVpzm2sfvGDD%2Fc1EdMAiEAgIGQ1PP6A%2Fks0%2BlXhlCTBW9ZG66u1gyXgXde3dgOpqkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDD68fv9A4tV6kLYu%2BCrcA5udKHv8qj0zhcdZNPIGWHthF%2BdyvxPPnn64pFr3VMfbVhwTBF2odW0rUMxdAlYd2laqlP0Pq5c5LrvHre46anYNotpCY%2BV9%2Flc2gqGPX2ayL5CQTSryRYhuq8fzaE4MLC%2B4SaKvo1Slnq46JuSNxb%2Fm7z4O8HbQyuuh5AraF8oyX5nnj7ZM4cO7ADNYp%2BGY9MF8UY8KqJ4nQ33FWOd1LAPOJ2cIxrxYUSDPP1k1Jkk34nt62EwY3%2FTgRBeCveIwu1xBHnD7J8XwGlnV3oyY8ruwWU83l7%2FbDo6slO4LgCcexHmYFE7%2BaqNxQNEtZY4tvq7rOy4Efwug%2FZ76l56D6bsC45ENTcOuLtm%2Fq%2FKk2XcYNcMtOhtDalflBcHg0LND6lPqx1e2YG0bz4BjE2RIS%2FuYViXa%2BcUJK0rho6b7KmQrS0nDkUBVbPBsEQqb0NPxPJ3EI7BPBCOq2SSJmfn1Osl0d3IdmT6PQoMsA%2BgyTIvmQka%2Byc9bpckldrW2qM7Qf7exWbaHbWQrQ3qKP9asgqptIbGtDKSqxjiJRX%2F2k0GYZCtkTIwxVL0avpTecJoxYxVYbvj7YVBfmQ%2B2rziWnKGr4IcUUB6H3gbAO6R%2FiGoGnNksoEL8fsobyGh7MIXv78IGOqUB699IIzKSEBLGbbnQYzi1Q6wFOCxI6HCksdVVH9tm362NCO4f0aQ5c3RLKMQiVJCspi6%2BhONYwOdHQdKMZmoKtZWbOr%2B8LJDQ0vKGUEzW9MZtuHQuudpsDIgX%2BJ%2FgNECBZGP76F40tSgHrZmnLVXMtLBosSkocP5QB5NAYPWq8cfVEh%2BChLWBgfSKmxvZ1KhhsdNIdrmNhikKfkNDBKiUweRSbsAU&X-Amz-Signature=40af01a9fc8c97acd70bf3ecb95419d424d8a218639a2b2e1d55c2dc85567c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
