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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZLG44F%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDmRmTbOzkpdcx87bPozuQ9tnQCUXTbg2JdgM8s1ErLowIhAI4NJmMcYnXEvG6MgsJpbRAlc%2FIvJHAVJXEuuoFIagPBKv8DCEEQABoMNjM3NDIzMTgzODA1IgwrACKwvpuqB%2FuDH0gq3APtSFkRI77dRF%2BCzwQ7ycymwvs2FRXHB9uxmWhJCH3x2gxXBpmFLPvbovguK%2Fo7w3nn1scxlwKcX3CNCQTXINPSYE3q599zujUMxvMI%2B27NWncKJb65YROi%2BxRD9Y4YpTTB%2FQmYMBIxnLfEG9NdnUrBSqKFFrVg6thM9PlcDduNHSwsqB%2BQ5NnYkhitchTTtHvZ4Jg4ivgDdfaTI%2BRAJoTRo5GM6pzhT33maP7KPoGubPkwck%2BVRO9mj%2FxNivMfTHmuNEmODR0mbToYBHbkf8SG2FC0YYbYPuMZAnCoabzk34n7kAB6%2BHNmDJ%2F9j07%2BoQaHfRxaxn8%2BcgPof53biBXUMf7Lf6bVIcopptuN6XEH6DZu%2BKqYPK2IcnI5lCca36olYsd9lYAIAOYR%2Bt5uDhOlzAc8JSX24uq2g1%2FGlDHeLfaStXFTQ3w27jr0U8Ox7RVP%2BGI2aqSQQpz9v4ltsKmbPka9JCPkYx38zL%2FmRL5N2t3ZeczInLEEK%2B3a21bXh17pByuL6snVkng438Y8NOf70trCsG1vUxjOiP3Q%2F4w9BAb4X%2B%2Bf%2B9wYhrGMaKO6vCf0qhIQCYHcceSs6qA5Y5eRhn8E%2Bmy15KWVMFWv3YfqrfvstKPPZ%2BkHUgHARDC36PW9BjqkAeKzNytGbs3XA2aF%2FhDhgocDgLhx7nGtJzW3q46Lru6UZXkBoeUTsrf%2FYipkIQeMDrQYe%2F9JY4972bFFGm%2BBeUKJyXRpuX1h7q3D8h2G%2Bsy0Ti1H85G8YklN1KIli1t%2FGTngaw8M5DrrdcEtanqYm9veOjpd21H%2B%2FBBDeqeip%2BlGO9egqqgNG4KbwEZ%2BT6oN0H8ehaW%2F015zzVaoD2u%2BdyZ4%2Fl%2Fi&X-Amz-Signature=bf33d92edbaedde1675b7249677c4f69d5d32eff6b8ec72b529964a7aa45e7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
