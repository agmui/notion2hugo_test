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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXPRIGY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBTok0AUBcQhBSPy%2BSFeTxYuyIIzzLfFfCSNVIEZeyJLAiAoVqGYu6U0htEaWEjOF9XeNcXmJ67DzAAva9qw%2BEhBOCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMl8AXLRVqk76ToeL5KtwDBB5MXT2II0IHhFln5MaSp5z0lgqjUXgLdzezEB85Yyraqu68P7IBmOgmJaTy78cz2LbBOYAMS9K3iLSdZMfA8NK6514xpb3OS7f6aCY%2BrMISRy91c6fqXRBPepkXdBMila9K3le5cIc3OUuz79wDu48Lzosxy0fzX%2Bi5lTlRSxk2h4z15wt6niC98bEN6OywMgOp%2FakgYdlHFEehV6jnqqci7jdz3%2FxcdDM57DoxKSEioT6NnGYfwfJ2jXQQKiXRBsu%2BIZYI2%2BwZgjAyraLoyb7auHTyEfQ4Uop8I92dV8EYBuS4eIzBCy9H4zL22aI64RIsxALym1kPekHi4qUCiZBTIQ1Y%2F3em36Sx35UoalMRnRxiNytNCTEP6yGZA1u51EgbiYAkl0u%2BKUSRW%2BHo%2B7jYnxqjRqU%2BkIUQESllAqcNAoQMoZb%2FsLLX1Ned5g9jB6pciSiXuh4VqUX87j4NlQIqaW4V%2FTEanEeHTJwlRCRHOXJo8sD8%2F7TVQ11vvND9LEo%2FfdwOGF60MgGje54aAsl0bIVU8u59h5%2FLiF%2FT3s%2BrvUgwPya7uMKyL4VttBkcL1V0UqdXsr3C6cqSd8n390AFUxpvMg6A062RiROW9BI6lQPS5bUkZLaZ1i0wjbWfvwY6pgEgeYnY%2FUeeb0i9H68qeb4L4vcGV3BvtEFXSCG3tt9FK5R3eCWDp50yZaDnAMXovVFGt29lYL1f4AyXNabloMj%2B2tdtv8FnBP7S86xF8IE2FKWM93ZAvzY2dW47Ro%2FvvsXbhF3RzT4E3IdGkRMvazYA1LNMvALj0BXMjt8luXS17XhChwDm%2FzXU8lhBnrXG0aDRSWpcaAqpFihtlvQTni%2Fxm5bYRMF%2F&X-Amz-Signature=79402fe85c593fca80d301666f4424eb304f9d6bc1658f7203378625444ec8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
