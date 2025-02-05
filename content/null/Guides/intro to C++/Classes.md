---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6PFK2N%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIC%2FFFao2T0WUkWFc2DBDvS5jJTDaijcxnZFnPnPYb3xqAiApuzdv7CQWHs6p8uJqCK4ak66pA13Zf%2Fg2foQHQoYXqSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMNAUY8uFLpdT0E%2BbJKtwDSmOQCshyvmtdqOUS0fi7UsFYibJ3NFjgbFy%2FrOhruom9m2%2FQhnVCcF8JO9zNkGt5cbjZNx4v6H60ttvSPtEHSofLgEPQJMBG0M9vC%2Bn9f0jUS1BBj9CK1E%2FyIVE0wGqjbvGEZUxL9EALezb1DHntEfG%2BkGbHEdbQAaHF7mxC4I%2FZoDTV2LNzi4zRThnIi1vyDcoLHVnEza6J%2BD%2FwAgOWNcW2yVln2lWNKmwZqcMEVoO5uSD%2FRclUt7Pz7jEtmDzUBFddLE%2BhTX%2B8fko7%2FeTem2BpLYnYBKz%2FFtbkYBkoJSYbe8JBpVhQPes41HWsoRgliSwzWYFyNAPvJUO6pLEz8m3wvdHYNNm4PbF5DKugWoeUsDJ0JEyEKFa1brHnjGCOirDZWrs%2B7kq8fhXRRFTt1K%2FNvJzEaveEHWyvz2p9uR2shbpGKLeo2tjXFK0cf72r3XYy6%2Fe5xcLfGZL%2FDlIB2wsP3JbUhJBiYWAXv2bhfXBW6qc5w1FFWdNzGIyaJmrZStr3Nqcb3E1tghqDm1tdAf%2Bw2pbePXSq%2BDRX3Td8urA0sYKMp5%2BfMlxdtGFPzG9dM%2FyuZgw7dEpVOrAa3tJ42ytjWkwOoi0UGB7c6xycoyJ21l9GIkUWKe9JHJMw%2Fc6KvQY6pgGcGTu0Ggt01z2p3%2BrbH7EjbmndsuRgLY3MmSfQzwdBWpOPxU7sXwZw04jrBld4cN3eYIfgKwJlJw4LEHS0NPXpsqrD93e1Rnzatd%2B4w6TdiCAsLOaIrgM9RfQ6KOqxh2ai8EQ%2B4D2pqqtWZGCicwi6XtKHNlgSy7Pplr4NWoqPcZ2BHo1EWZIxU2LjNTfBnEnbUuUnA%2FQv9IicejoPl3sFAgygcifJ&X-Amz-Signature=1ab9d766d137e627f2123dffc1165a1ef699d66e4383a97a40e4e14868dbc8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
