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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVSSRDQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSRgCXcRagxmCmeRvV2HTZh0dPfK%2F%2FEQr%2BeFBSokVs%2BwIgEIQJOJh0rolxnSmb2TFHEO%2BC2Z9qogH1USbKcnNN8bwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0xsYJBzS8HQ%2FO25yrcA1xJoQ9w4GOQojsq3JWliXl216vBewxXpTw3sQm1xStjxKzwU%2FvV79tPZiU1VbtMLFi04CTw5XYPEA%2FvkjTvKGLNqfGKmOc%2BVjwi6J0dpOqOqddx%2Bpzrc8lfeSkHtXp03lXx2GSDjdB8xoiukuEDoq29RZNgBn0Au1%2FwenFWbT%2FaTHpsBSzwjk0TX%2FghcHDDarYc4PM3nv3hjnnb%2BID2Q%2Bxr2UU%2Flc%2BZy9luThxMmO3bqzD3Hwicm6nczZPyd4t87I24gL6ZJWbi%2BOHb2zKzOOIh%2F4OgTauvFQ8BP5zsIPwDb%2FF5aPkN0IGlrjm6LLCry1Xq1wzthNB3PxRbcuyrnh%2FgO550OcCLDxBWNzjq94w8cz8hZkf2z30Nc5NXwedArccTHsvVbQE67AFjZddGID8a55drbV6gsunFVBs2KVST29M5B9YekSW8Mnj%2FXvUf0vno3HftgK7qY64RucDlSEa%2FBiQqHEOrff9qtbKQiJjtK%2BqB98ZTCXQgpmSlZc69cLYUETsGLpELc6ym8pDlPdkOKa6lRXQ7yOk18v1%2F0OoE6Ndc19JOi3dTFa5Yhe0%2FtSL%2F9M0fulL0JOgx2Fe%2BezTtcW8JUYr1Aj11g9bGLdrwQCs5Kbq74HxMO5%2FVMOutp70GOqUBpak%2B0Zo3zzuT6SzHW%2F4lOGfvUizUQFoS5IoUTMcPgdJIjdyGuw6BvxSG7uutgEE%2FW%2BY68VzoamBhaHgiq7uH7J%2FImD%2FpOOWjXPZAIaU4CpIXuHt82dklTV%2BSNFuCQ2nzQ6GFIKgElV%2FviBFSO%2BBiMWFv5PE0mu9AkytsrGWxrlTtAHxGsJQ3Poq8ysk8IsSP%2BwIniUd3GUQpTUI8tnz5I0ez%2BJ5y&X-Amz-Signature=594bcfc2b26cc647e878bf39cf8e382118d4d27ad85f4410bbf724b7cc485035&X-Amz-SignedHeaders=host&x-id=GetObject)

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
