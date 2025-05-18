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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTDOAEQ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs5E2VOH84ROw%2BX8ZwiwJU6rGfyAjWC27CCjKcxKjyaQIgGPxHK7uBkbTnIHx7wxFKLaGyTE5RZe%2FLsc9d9uzKmhYq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGS7jug%2BH2wYFvDr%2BircA%2BpAmr4tEm9px4Y2XcH3DCcBT%2B6E5wx%2FIP6RXOOr0rg8hpKC934H7JjUce6AB1UoKdSECeaI1UexfDDnChvWzRQVJcZbdlNLF3dD8xnthH%2FtErBjDd%2BmZBhSRnwdd8tjrtrzQjkYrS8DLGhw77RyeRtc%2FBGWtCoGdgtTo7KqIuVRiO6aE5xAjsSoSopKRN6rLxd0YIywRODYrrX7m4XG5%2Fg0wMFLrR0WkAbOtrYJbveEUFZLiNGpEP3E%2BBT%2BesLUOswtzpNRIXOELGmlrY7mTY8BoysQR0hVphkOvtK40oJcNAPL8GPZcN77gdFkTZLSriczgsUbz6ZVh04hoZB0fTRxFNzuFSKvIuVMab1EpzH%2FzGzqL%2Fscfotkp%2BixrmNkVh6GMTxTsspQUI0wgk6f9g4z4Cun9tDiDW9vN2AAwJTEM%2FXhRmnrvWdPuqgEVUtOz63k1ZkgmraI01gDU8HBbfZRFPVM9%2Fm072DkICE8F%2FzXid6AMH%2B%2BMzFjzZUNXyXpDNHFkMjEghsAEgCCzfhbAxwfpLj5YXQJa2KVgihK23IxMF3AZCir2rNi7m6uCrOxVD5quWpTHUozag8NoOGWCN%2FIVsvq%2Fw3OaUQf%2FUarQ4kNeF3o0waj0slqOzj%2FMM7xpcEGOqUBBDtRqflfPEHJw3PRcoP09SJHvDoKiF09hMz8F6xtZ5XMum551LmuVtBi%2FCzg7VfBOQH7HsJk6COu8%2BwTKyu4HQ4vJt9Tb5ui0I0%2FDKbAMm1Vxk1yIjmRx5ITODgYNTQ9cXrzbU%2BAsHCTYgegxv%2FHtjSCAxmGZPSCWng9fYIgt%2Bl8302M44AIcjJwz46sedAQXpeD7NpeXERqXzoJ62Pwt2N5GcwH&X-Amz-Signature=5c9c6fc1217402a4a655466fc44b409d9e34d0d7fc6333e8d807e329a6fafd0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
