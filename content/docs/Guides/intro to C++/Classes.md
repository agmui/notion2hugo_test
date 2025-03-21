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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLW3ULI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIEwoLc2H2aEpiUIKpiwOUBM6jQNYd7pjVxiHnuhgtja%2BAiBNzpxkhxdOslJvKz%2B862O11wzP85U3O5RGrBPYeSmaXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAoe2SPyyP50JkDIFKtwDM4RLMdcJXuwCEc%2FA4k8dYYypQu3B9hiRHNOc4IFxcTTTV2aAoSUnGZuu%2Fyi7PEJnNyv0S%2ByxVh0M7r6m5PTkYixjZ0wnYpXtI4TA8DoW0r9e9HiNEIR23rvsmM82uqsnktzALlDFr3bVFTrpD0jHJfUMd5UKjHkRjkjm64bloT1bfQXg2U1u519Hf%2BJWiP9jtS28phcQn3CPpDKOrIw%2FpbrFEDg6DFHpOsSc9uGL5nA%2FbE%2Bj9iILFKa5OojFYNNfac%2F946WkeU%2BiW51i%2FDyjgUqrx%2B124GHXw1g8iN59ba0vDiHAFgXUwk%2F%2B%2Bqc5T2%2B6FBVhRk0i8diuEgIuyL7eN4QgSZLSHGvpZLNJnUAECD6WmpWsvhVDxIPqsC76TKZWnVVPtsBGTh4sHboB4FfNC9D22uw4RQgR3DtjV5pJ6p5S95t%2BXSZe8FJEmlWwqaRhc5kiZu6Z7R%2F1mJ2NmsEUSarstKshz4hxqp%2FuAstaWO7oKaPTGG%2BhSeGuCFtttejW9bgRoN2pMwFl44%2BtPCv31XOqMqKX0rgKsHipst5e6ThiCmUMu6rJ%2BkPkrqWYI%2B1Oe7d2LTFbqCgWkD6EU1YcxPCvA1EBnLLwXjjCJyHmz6GhHQjB0jxEEMR6oykw35f0vgY6pgEgzM9w76Kl4V0dom8s8v81zx0CG48XSJIPWT3YLgaAIRh2agFgqAGpioTyFCZ0aLcn4%2FxwCHnQYpJ%2F%2BMzYL%2FezsuN4G%2Fz9mcFJmZ%2FPe9qD0vuYrl2F6trRsJF7c1ef0USxjVgO2e8my10waZMAtwRgcMy0MCC1E9nKbVdTyuvXPbLrfsx0Ra10%2BVMR5GbwptX3C2K62h1sIe5pfWR9geHhKO6IO7l%2B&X-Amz-Signature=da2a17171bffe996dfa3758f931f384cdefb58dc839fd0288753db4fdd4c72b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
