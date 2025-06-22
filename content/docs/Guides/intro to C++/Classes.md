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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FE5QHY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6QszuGt4%2FT4cNPe%2Fm7beX9YRCP0r3O5hNAMk8iMNq5AiAjk1sJHFB1wq5nnYieT4rRLxAVOrVZdQLRlWIozOVU7yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBSaJRWJ%2FaXF0asIsKtwD53eErLglLRizFZSSRd8vbOmhlIftRBmaKc1BiDs0w%2BMUjMAmMocUFgD525K4CY9TuhUXRQamBHHIAH2Xi4lWekvwZqIJ%2BVPeRI04TG7rzXDwZzK3vYDo8tvFKChsd5fEMNpkdZYtwH4uXVjxx61%2B58uVio1GVTziT8bVLu3ODDdcPK4CZ6KtjKrX22sdSFSdSkeS7Lj%2BmFxCpP2ffsGIRalWZZhWD8wCnuvgFlY0Gu0nWbnUj7%2FQ%2FPmAWzbuV3luhk%2B%2Bw76we90OcTwVjsucbtOl%2Ban3TB4ujRbNdP6xjHHQhTjgIfLkOwTNNw6WFJR1J0kACRpnGu1k0Q9u6baG%2B6Yso4fC7NdxbcMO28XNnNwOYVwkmvOYrJWx97pnrhsBFN3VJwO%2Bmu0zfGaaBTOILgQKaxl60j4uJ8QKbP%2F2MPoDgSxWUL9L8Ud3TNnnCm3Vw6JDXnEFg%2BHkCe%2Fs2rG0eTDNpv7KvQuu21lK7uwhVd0d94W%2F5Fzsr2BQM9sf6BNb1vRgiLjwQ9yF48ZcHA0k9Ufog4f%2FlvHO1QcN%2FFu%2FeR6NoxGQo8z155hagsMs9%2Fjaeors6qnAgH%2BtdDiIR49W7c0Gtsy7%2BnsfP08UkFe9R%2Fq9vIZhTZ3jYlatzVIwyerdwgY6pgHGIRcSeZ7faNWnHWG%2Fton%2FhzYwTILOCMZ9Bf0HtQ5zM1vOWw3PjD%2FOY1XBmqkjRHq3KpObJIdJlbxJcoEdVwVEOtaukcgYA6eCtkDcDxVL%2BmuHupKyIL8CnQ602N4iQ3wUzpHrP7o%2FdNXfJY6hQhlK3PnBPSF%2BGs%2FrIGTiU6ng1VmlncKxsMS6abARq0POqiMBu7ykuZuHLDnJCCt%2FEkXtTpHHFzjs&X-Amz-Signature=25b58608f16f5c9464e3c71bdf07b57d9dccc86604b1ef59606a4e1da45aef5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
