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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCSUVPXI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7H0qnOWu%2FwRrQ%2BqcAabbD7%2BesMBgBJxeldAOzXOJrDAIgZK1J0xKmK66ZnUPlFtpumy5kfPEwbe6y65hYt9CUVlkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFotLS8YIod6iZAl2SrcAzkQk6QwLTh4%2B%2BLStJixD8keUVeGtcnrv5z5sVq3MgkSLj5JSyEa0BC2Yzc0JEzl1cNnVaTJw11CnNBrgvNra%2FR25Ysn3aIx6udGNgp3hQ0nE3%2Fzmd1JWGv7ipmJDem8CWYEoI83%2FXwok7s%2Bs4NaxsDp7wnS43j1kc0fqDOD7MNIik81inGeYWLLiQVeRmhOt5HxITzRvJDX%2BE9gwFbV1jYowExwZt6RtKWV59P0yZ%2FC86OSydKa0LN%2BshtIDSEkC7fcj%2Fnq8ihvG%2FGY44sQddZ2kqeKWanqHJklhybR%2BkNtI%2BGZpER2uk1PMy%2FqeuxEYhU8AbHacyW9xGZwWnvtspwgHHbFBy51n48VFyyFi9ZyZNDJJYh8MJYmqnevXckFSM%2B%2BHjmzSGg8yEahlOVnm1fXbecZuROhB5kNdWhTyGGm2N86RYQ8ucLTs0DUN1%2FMTWTnrddX8y%2BH0FXoSBmYNO55dFqEY87AvUMEbfaVf%2B%2FgWyeEYEcICZBXlWWy3pDFgePFDLTAehVfuM3VPvH%2FX3gn699mhcuulMwpZyP%2BCUNYaL07xo4cfkSOie3YtQTLd4IbhDJVOhYB%2BHHLaQjBbbcPBG1N4a0buP5NNFYY1s7gCuUYRxZ42kyUwWveMI%2FE2sEGOqUBiNPiH6tN78tdiJ7vF43g0rObIThC3NJfKpIh9HrfRNM7TxSKPWXYLVqfcIvxEo0AmVzYIRVC%2BLCRNFYYZBvKhZw38x%2BAfvZ6GAFjpETsmxa%2BlD%2Fp%2Ff4YTGg6tJ6I7Dqc%2BtnObfT4nVyE89uaOfeGITrgep3TfIihK6pjIj2Q2o8K1pAprIurZFBW1BHSqVMTgOx5w5z2GNaeh6JiOm%2F3rCHVtFr0&X-Amz-Signature=05efcae1e646463f6b38eb5b9a678456046cc5565df851f27e2d9c251a959342&X-Amz-SignedHeaders=host&x-id=GetObject)

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
