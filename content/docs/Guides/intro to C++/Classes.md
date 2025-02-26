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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKN2VYI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDZx4kOePJiRGNejt7xOk1uTsuEzAfjQ6W3C2ZD%2BX4B1AIganWxwgCJOUNZzwjZ1rNpr9l1zBtmmZ8HCIqExMFjEMQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLLh1S2iFfqRy%2FJcMyrcA6FuBL6pyYllKAwIyw3wtYPos%2B2N1RK9WpVHOAIKa9fs0O%2BoqLbfVg3HSvleIb5izb0TMq4BUH%2B97Q3GotwuKt%2F4LLYIiPIGMY%2FineoqKiiJwvJW8ENM7WvpKBE8Fhaevf535gP0Fn1l4k%2BFeAcQvh%2BgtX7dcYcQUia8Cqid1QVHEeWcZ5nCPh2vE0MdKfwb8apjlmcmTTF7k8jqNkTQttU4U4z6NkdGBBtmdJ1FHZkl800AjSqyeryijofEecWJ5HBaBhZMH4%2BahjY7gYg83wJxzuLxWh2rIJmAg1W%2BI1XiFktmXKyQdZm3L%2BI8si6NIiwMpm2RV%2B06aaJhWOe%2BJt1IgEHe3oX%2FAKiiUw9pKpVScYgYOoLB94CcuD0MaQuZCOOjsnbpKs66yHypGSV0jNUAeuj6Fmt8ubJpcHxuPWUi%2FCYPkU2%2Fk0P5JLsB0HgI8kgpo3FcXJdXiGJJkGv8T5NMD3ouS4qqnWcxf1LyyF4qUw%2FXep3YOIBzbsXxBurwKNTw1Zp%2FohK%2F40lC6pziIpYfF2GAFqkrmhMRJLLI06iccbL6rwgfMd9wtyTtjdWaNixV7sLCrsSiGnh5MfSHyCujWm3EcQpaxEICdLxpl0MjHp1l2uLgrzYv%2FDGfMIGB%2B70GOqUBePAFBRJvwtx5gAD3cSQPZdw%2BKyyOxdjzGaFO7xgo0A%2FhJ5nEi2UTde2YpOQnT1IrVraGyJY3WFU0mmtrWIg%2FXvRU6fHX8npWjFb4FjdVRI4WN8kKkft7I2kzXcZocPgEWZwLmHbaicbnd9kZG9KnLhN3whTC78iBDdrBXm4As1eZeyWLZKWrZrBbg%2FThACGOEzDeXVBkwgzNGHRifZeuHf%2FM%2BJSH&X-Amz-Signature=bc3ac792c5d7a5b8c19cfed9cd86dab10e78fed0578764d359b72755cf0e2b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
