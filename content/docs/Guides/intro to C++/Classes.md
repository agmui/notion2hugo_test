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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657DLSZJZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQVSlGfkT%2Fbsn5cgJ1wzUQDavq7G8%2BaoQs9TmIOjMr%2BAIgLRxvAarjl0f0DFX8AtDAjhe1CkyG3%2Bi2okWLlTO5tL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9XAm0iBI6cUUC6ySrcAySFiGbANI5MdTXDIhbJiCABxs6t%2BSXxhszeF2YLwSZ3q8BD8qLdczH7WwfN0pAJuJQW5p1iYFcqTaxY1Lfz%2BPtbKqdJSJ4M8U%2FjSQBbRoELDUAy5lc6Ko0rc3bZkidaX62Q1LAFRQLI2cKpW48qD6CUSNm%2BzcdisodoYOuDQmhC1%2Fr8nU43r7RwfAfCtwnHSe9u04b1PBSbIJM2D3BCw4%2BZck8UDFqoUPz7qwt7p1g1%2BdygSL8ZWHmSvVj3GCon5lmtLEZ%2F9O5wW8JNSld%2FAY6tHAo7jogYdDO0Gh7WRpsrPNtd%2F5iLPoU9SU7TdOBXFeU8A%2FKs9ScAXM3xBKKMPt5%2FCgyOY2vWOnfCs3t6WiJaVAGRWwWl22EZqkLflfdl2VuvMWM9e5dSzqfJiNWR4HK2BfIPCii79iCUJIKhfDCmgIMtdt5KywnAzmuH%2BRTxNgmd7hN59dsfbcYFfzGl5YRlVQDX9bxFQBdox9%2BH%2FK851HFels1I5F0itc2fs%2BEZ89%2F0blfcrCRdgVws2Ugnv9sgc3EJO5%2BTO6IGfAferrUooIXe2yQaEmZXwQnnW%2BdS1lPbFsmZ6UdaTSTGIcNhdVfbi%2B9vDxHr3UYwuRqoOClg%2FKyCOzSERLyCKSbJMIH9yMMGOqUBnf2i%2FyreNfIZCwVHnDPoKzcVkoQDVPT9w%2BaD4TYzcUOsZ%2BpgH651bQcHub4eSggaqNAj0aI6xJQnLkC3QqpwLCj6zeF9oekzR1nLbM2bVlBUuiljnt1JBFgP9CYhl54WtIC49oDb75oORbUK6xWw5YvnJ6Gf%2FTUNJkdiYiwf1oatXTeMIjmmwpkWdv%2FY%2Ff0ixWwJDf3K68CVkUBLfcHobvlE%2FfOd&X-Amz-Signature=f391e29743a70fce04fe1e2ce6e81eb3b8c07666b2af2af661c2e50823d9fc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
