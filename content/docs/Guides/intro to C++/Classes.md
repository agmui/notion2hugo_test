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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKL32FF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIClW8TmCp6jmUcTyG6Rkz%2FkJ5RgfNhU823rm%2FhYUt8klAiAaHNgkyKdivlI0a59LJVWQ6Zq7fEsi0pB1T7xNeTsfFCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXD7%2F%2FBS9M2%2FPJRn0KtwDjb4k8%2FH3Ak9eG8d%2F5huSWbzB30dhJ%2FHqNOb3qa%2FG%2B6Kovh5%2B1RlQjbLIqazvWzV%2BUrLdMDdtHhWVHKaQcFrQHbNbg9nVOhw08aiiEhfI%2BtY9uvHM1aJKn7wQgeaiHMGOyJLJ81qt0JmmG%2F6VgJd3wUelB%2FN4pQ484K%2FTaPntj9wVyEfByebK27qsrpHgW5s7MN9Tdj%2BipZfX586%2BWYrY3X79A880dqyyBWfMCapKM9LZBRzRCMqRFVpr7Q0VeyvL3%2FKnFD3upB89ttvk%2Bc1PVCiqwMPMImQTQXlfgG8YPJCO7qLN0SANjv3m%2Bart1DKZQlrPMG%2F61DMNqdpiEdgxhX6lK3ibrOq6PYfFxTqrvf4OJfLsLGY8K04EvaxSTPGH0%2BTXvv1fUpEwpDPFt%2FoJ6cYtPxm4ew7KfOR6Som6QF%2BrhyGxbJuqtxqFCTLc7uxtiZMH0n8MArX0iJovaJuxA8kXCk9wMPVEJbno6vcn5RJcnXaKXgBi%2BcIoxGQMBZD%2FEtxMuwjMczoglNPRYGPwZjcWSJ7ieY9wsqZjGYnsWOVBRGiVUDu9D6jClvdYEmSoihmvDkCAkBMJR0uvdniJiqy26%2Fk7EtTrCRidAFTFbN%2F4ionkVmf3iA1RBxgwvKPXvwY6pgHbv3WrTJtVnSiK25mzWul7EACs2gwdcP2bbSKBa4ruuPCVbtG0s1YLHUQHN5vTqzqeDJ9WqBQn9j4Cbigy%2BcNyS23Bt%2BpeiDBV7lmPF%2Fi4qncFRiCaQfh5Fw3H6v46EQ4lTUoTOABiaPdtMkcNUg5OcfWp6hNYxKAzxG7JgIikTCp9KNNRDQBGjG%2BaAjJnY7YYXfEDOPVIMmnWXdJBA2LvuWbU0aTV&X-Amz-Signature=9777f7a82a1c7f8b179252d44a5f8528ea8efde26f22cca670bcb8638535c209&X-Amz-SignedHeaders=host&x-id=GetObject)

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
