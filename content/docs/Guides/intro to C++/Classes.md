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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKV7WZ67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICXZYij1mACUqVGGB2%2BiB3gIm%2F2Rodt0G4pj%2FPRtA6OQAiEAm4dzXZkKZvwTN3t2tODEOeFieh6riepnV%2Fg4BGEj0tQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh%2BZMBhxE%2BcL6vwGSrcAwb4CvwL72gqxWVr3BlC44b6SDXpHmq23AihUzz4JCKoSbP6ZL3wHFwr9ljHh4fKnq5ivR%2Bi0orz3msd8jte1B811lYRnTm5MrGY9ZKxKJruIeZOUzktc%2Fnhiu%2B8NYgBiwbnNHPT%2FzypJJgpfKSkoqAp9Iko32nSa0rWeeJXeWmg74n%2FYDDjnDsH2vU4BqmSHsVQ6VJysRAIV98oZkRUXGCMJvWkq%2F0UUZMVqxHoeL0IY%2FiEFB9HTiLbp9qz9s7ud65Usd9vVmzfNUf9UiyGg0HZDyrqW2OW9tb%2Bs0s1iXv7%2BaQXsirnKDXksKY71hPD%2BQSxUEEODeLX1oZmC1CKGfs3apsEAaZDq8ARn3dktPEQEzi3zb963RgqyYWz%2FkQ%2FhE3E6seerlcXq9B%2BhLygMphmBjFDOsM5RxuhaKLfNQRb9avAknjE6QptiCLZ%2FR38%2B7MGL4WmWIGrCrq3boK%2BMzCCQpzd%2Fq%2F7b%2BWDj2MVGxoMN1rVT1XaZP4b62GAT7mcv7fRhjVFxxPVeHwYyJ85oPW6ZdnVweXE4RwcIHyaYoO56maunmXXEetgdw%2FSsyn79Qc2AmXZiVo4NJX82tmCG74AgxdbPpxBrTvY953XoBVXVTztSxtPJxyCFyvyMOzL478GOqUBGA3AqGn9inCxxa7PZNSWuN4BVAr7jCghVrThmDv8OXxXYmfjfdoUfWOMFkmSH9sd3hTxYCNQS8oJiPBybu4%2BL4BngT20TgW2hKnLxmpPXgJ8rsmnpiMW1KgoYPuImifNZDRI8MkVaNtQxH86JjTY%2F35233GJs05T0HBZIMp6Kz7OZYQsc036uo0haXkPbDKvQ0V8o2C32Ja4Rhj7GBW%2Bp2UPgD38&X-Amz-Signature=b5881d1b4e2787bab4f86a618a63c023a6dcd39c1da0611770998619ac15051f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
