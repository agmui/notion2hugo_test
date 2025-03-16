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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JRDANDC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvn2Sw3n%2F1fw36vjnM%2BOMuIkHae24VSE4tTQHMpFQdtAiEA%2BLc5LshxRhV64yKdQeQVR8PicQK6QulCUjl1WHGMmlkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLCdCmGoA%2FWwzdtJYircA12HN93MTdxdfWIjIDRcNNzIEBj7jk2IuytuWdZmGXdc311IBtXQDPLC2j8j8n%2FnlMx1aAVs3BjYUYvbI6cKBBbbWnLo5cdDGwvaZwlT4o%2FGPqZ1u3Lhv1nKrXAnH8d4BZKkoYV5lvxLb%2BD1QG1PBRkpnShtB1B9bpxYQXIWK2odmnf3XIyJdVTaZzar9ZL4jESvv020eSXAP2XguQGMmlDPtlRchMqSkR8A7xMTrxZ3MYbtopubB69iTbqgr7iHBRv8JOTzqXzYSE0d77bcl1VF09gOrOG8oouF4CmzeGl2S08taDhash0HQM8SCeQdXZ%2F7lRygKqPDw92UFvYwioAPqHVyas5c5PrGfyEXszrJePlX5%2BYY2NEeBFOboYKzTevkBjZoUI3x3Ujsw7N8abbieH8wQBpw0kDyPl0ist61fk7KYkLm317phgPYkfBt0d6%2BCc02nwWL8HInczEmZROCySt6RWxy8z7sYHadoOgQI9RuMTwpNGdO%2FX7JpJqPkr4Ob%2BYXe8nEz628iUPHexaZJkSNPzW4SAoVZudYzgTtuBIudgyWYvkECrl0x9N7IDexHphnZUNE5KptmznE8%2FgY5h3apnXUfMest0CbIRSD6BcUka14a0bStzWVMIzc3L4GOqUBbI8abFcgBOkcFzfz5Q7aLr1LpA6DmWSJqTWImnGtWk42XdcNhkHV2pp%2BlmTDrzio35GM8bfffdQJK9xcXHzvdHisROz7Ec2OfJOW9X88cOr61yr5fuJ7cf5uvJf9apuOvCCA8InKTJXMDE8IdBKl35MxNmB7fbanakeGWdtcGgE6ZkcL3pMRGV8kk127WoPG9VW2Kxq8v4%2FeH6PdSHhFiWLu%2FjNa&X-Amz-Signature=c29148ea35fa2d98d2f654593cd233222ba9e692d0c5980e0fd98e2bdad2d3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
