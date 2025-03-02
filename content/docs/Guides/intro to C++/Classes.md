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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXWRQYT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCveZdKwb9p0nMhqZKncj%2B7oZo1iYllpOKDAUQnRYAucgIhAPp%2FG3h7iY95YHvJBdRVMkOtsnedm5RQXq6fq0yZjkbhKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FVg7EZ1BbgR57JRIq3AO9vUATRv71dHsu9zrXKEqzsiUPl8DOohRzib746TA4aOdW2XljXAWtIVYNkIrfXV7OgQf17RNZJUp%2Bc1snWp3VPYgSOORGVu1B%2F9eC30npsnSESSG79Hw9%2BnQREhmY5ljkm5ShkyR2%2BAM70lv6Qb2f53nRvEoOfcFIU9nspaJXMDJJMNhKF82TTKEnij%2FlPVJWE94MG3bhiC0IvVEZRqyVEM0%2BG5spnvBv6iENdWigefwMWpSdxFYrUxnb1aFRiFnMz4IEvgvGesA6M%2Bo695hxdJvjJMkO%2BoMdeOTGiEl%2BE269A2%2FEpmrXbvzkE9iryvtpdiwge4ZpbaD34vUh%2BhuA3PzPY4GrYOfaZxX4O9lV%2FLgIqoNrmNf1ePml2rpOaM3eFQkB026dJsJ0zMmnK5KLdAlvyFQbLKoX6hlYqktRHlkIWGo6WEHHeH9qilT%2FsVLQEqCbRwP24RIZtHYsKgcqz1NgCxjxgEPtKJRe1uPgdtAbICYAM1BZZ6jsjaIDOPZjyDHhYX3s7gXYRWUTU65ZyNihOPUTWz96YmX6YGISdu2ycO7NNSH6dWM%2BazW980DEIWc1DwnfJuWLoZBTfYnTFOWu7yt6Crbff2LRxydW%2F%2FtHjQlSMZ1Cyevk8DCnpZO%2BBjqkAV9VV%2BdgDaH63rzjbAJjSz8D7XkJosDDx85S9wfCLpzIS0Y48s4Gv9K71%2BxGIpOTORoEWOaoyD6Fg9Mf2m8hnjqYH%2FHJyh5KWLhuGceFFmrWBFqAG8IaeZ3Z2kRL3hX454ZWhV5FpVIPeZ%2Fo7mcY4zJBbyrZN2gmJTMUq2%2FC7NhO9aV7Aa5rC7QPd78NjXICfz3fWeK0%2BKswBPJVtdtUOTWu%2BG0q&X-Amz-Signature=7296ed4ce6bf649a1e7ff476f41ed1a3567bfc6157d172340d0090479945f090&X-Amz-SignedHeaders=host&x-id=GetObject)

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
