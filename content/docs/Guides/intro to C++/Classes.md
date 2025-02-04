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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUT2ZVI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDCCXkziFvzTtXulbbi0b27OeuQJAFhwcjcYpO7XJB6UAIhAOa0BwcV4ohmqwxBRxpd5LzAaEYQRpGnsset4AXkLSIpKv8DCCQQABoMNjM3NDIzMTgzODA1IgzSWArUyvXriF0%2FPLgq3AOzC1txGA6IC%2F288IzYkI%2FSMgBWHEaqvG4u9wt0Jk%2B2s6JNH7T2QAIRpAsSg%2B5NXhbVIyx1l%2F8URSPK998CzAe17eBIlBEXC6gU3i33xPykPlbuiwkTBenxgWpmyVEQ4lKzMTNHacI8okvq2RYHtSkpZvzg%2FrSoEPn%2FUj4gkUB5BJuyJt3vBm1S4mjSwA4g8PbdivwixZ1Q3lmJqRE36PMOHJMLud4oqZCn09%2Bh5oPFOsZSC03eEp%2Fg4W7UVB3QphYMmEb10v2U5SUhARfsFepmTAiMAZGmphooRhgNa1yYToirdSUnN7wcXv0EfdaoD0O3OKr%2BJ5KK%2FCVK%2FViGb3oLM3eZ0RM%2B9RIDnUC7sJqNFDyx%2BULQey%2BMj5AOZutouz1UeSWK3jXFzTKwZ47YEkou39QjBC4leaCfyk9R%2FPSZZ6QCglVhuNKbEQISXwSTFmAIHj%2B%2Fy7Bh6XPhVPrXabvdibOVjdWDBOa0XpFwrCsQDU9evVlgycpv6Ye0A69MiYajLpmSotFCaj2E4EAJDKa3w5ubJUphX0wW56gzCSZaRoVHLXvaXDRLFDcA0D7YL0wbLLkPlFydS1hd1Qf7Z70EusAXrNqpQTORxMes2A3TqP4%2B3hJP405Rd0CLKTCxhoa9BjqkAfoSRNQtubJ4WMvV5I3fPAsLbd5tiLGgpS7QYiLF62%2BY8A0LnF8XuopVnEqTh5sWcWoqGwPHA3uG%2BPWRKWpcZNc2hcu%2B9ZnwU3F30J8%2BcEmzCrtdv%2FFXoW1ZK2X964KkHe3k%2F5Gfyi7Jj7GUKAUPiO79GVLsOF3GXFVMZFP6QZvZp2QuJ25YzXgvWW3NQUXDKNewPGO5afHIzeaaSV8Dt4K9SnL0&X-Amz-Signature=fd086f73bff80308d25491a8d2cc03361131f202068c60ec3e6d12760b265895&X-Amz-SignedHeaders=host&x-id=GetObject)

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
