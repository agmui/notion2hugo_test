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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZE4YQZY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjIOefz4avjN%2BNsHZYBF1ERHkT80qDQY8oXZunDZOhpQIgMTrFn%2FyTbw52lyEIkIcv%2BOzEo544gP9w70hvPqnEo54q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBHva5EFEwVkZcUBmircAxflx4p8QYzB3XddnLAxHWYkXKY%2FVe7gal29ham7evSexpmnZ2TEtruUSzWMz2R%2BdJX%2Bpk4vZn77UfuwyAVSUipKg9mw6Ymrav98MRxYSgC5SqtQdcDNDoWVlrTa%2B9AOytZxIR4KiOWR%2B9BBZkS8CneGQ0ozvHr5dhP3b3czrAEQCadiLj4QmsYyPajyeXFHX4rKaaHj5QEE1oRy0jWqWiY%2Fq0tX8%2FhPQNKUEpygdZIaJkacYZc0tLx5uxCx%2FNUwMu%2F03AR5KdgX5LRLzDa4N0W%2FZ%2FABXypku%2B5u9fLQ72tJxyeegceZsL9nadBrho2yAuwhNtoos6ULXBuGYLU%2BRkpp6aopcdbEeweHJd17rdn%2BWwxOyE9t0JmaD9ffwlkoN3imJib1gTP7LVuwMfvLqkBjFGGDWrVLikN6H7ptbHpPWTLuDuSK9hatjZsRKkp13YDhRUWguGwHtQWVhvjX7hutDOBn7%2FeljcWOdNgS0TMdrPrSiTQvjz2CMP4YklG8DvecHujV4s8LdE22O4KZbDFZUvG30%2BX%2B1E6DPSf2KJFAUgVVMrzvJcVhoIp%2BrG6lZWm5%2BzYnKNVexhXOdf2pvbzX2pnnGTBljnoXHeFMUq3nRhLH8d4iwD0v9kTnMKelxb8GOqUBvV%2B7hlSi5wGNuVuL4K%2F5%2BjkbD9%2FuQo09uhulQ1QLts2N2yOjl%2FSz8MLzE%2BAO1CDnuFSGgKS9AELJQyTuCfWkv84zxEI5nra2tD14WYWFSU1Kh%2BS9ZROcPB2e2IOrq6Q9zgPY67U0F0Ynn%2BelL%2FxC%2FAWB2tnvKwrDgU6vy06AWL3qORAzfTWHC6pTuYvwLSWtsV0zzNBVPAAH4IgZMUGYIVPR5MMa&X-Amz-Signature=5ad86378dfa11758d467639f749642ed1d3cdcae6e3884342444340d5796a278&X-Amz-SignedHeaders=host&x-id=GetObject)

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
