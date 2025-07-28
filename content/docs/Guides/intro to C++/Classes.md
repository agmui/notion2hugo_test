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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456B5ZLJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCyBEC3hHWU4fjAxLT29Skz9shyd5ifIDbqT%2F0xDbj%2FEAIgTLR2PfT6T8nKfekXGZMqqcgOQQsqe3aPATW3hNQgVskqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjaTP9ZDa4%2FDPc%2FiyrcA8ZwfXQ1Wt5foiJuuJGxB4fr%2FqUigkn6zntiKb4UF5MEnGsKI85jbf4cRTjLdkbgc82EdciorX9M6yDh9J%2Bp1S%2BVpSKCNii8EnIaIF54ht5FV%2FIdKobYQM2eXOZkHuuwezq0kWT5xN08utCE3gdqAwIemVQDPext7trLx6FheOmHDMStI0K00cz5z2t7SAVJX2q9vDKjwkB882JIn9qi0DjN7kBvH2RK%2FjEnYZvOIRHiQ5IwgZxkLWopqwXBOyeRz%2B%2BJ1iAm%2BAcVMukf3C4NMbHSuruucJ31H5XXNiw3jdYWcOtAK%2BTxqMPKgftzTmp34IgYn2tYRlm5dQwe%2FP%2FBT8UCu6y8%2BUcs2lSW0v28BbD7rI%2BVeKkXBdRQqZHFkvchFh%2BEE4m1OQAg69FdaaPxyocgfcms0zK6o%2FrfOZ7y54xjJ5KPrfabMNtwWyXCg8pWnsSOE34zYiM13oxTddE7gr4%2BQ%2F37YsN6ek%2Fb1gwIMOaYZlVcMZ5iDphE9eCmLwDKxSQ2o2y1JO6DfEnBCuevrrzkC1VjD%2FCH7xaHcQvbr%2BqNU%2BYbfyLp4QesGVAw00C03DAmzWId6eHubfejdJzWayRiPmNaXE6Wq5itdTRmLHtDLJ83wgJWi5lhpte9MLy5n8QGOqUBztn6v0VEwSFVCHxDcKj9nmeqvr7WtMIqIVNwvhPn87dsm56VbrR3ISN%2FUryhKJv%2FuXL%2FBhLqEeIKuIVZXefeAVR5v6NcqRkxwV4U6KYVNwahqPUgzOBmMamDYaqEFgxCbKJWkUDnLptvD5EtDbkFmg0l%2BB85QZmsuNFNvOMz1oBP4rcmder3FTEhzRJWdv%2B5MH%2B020%2BhGakWwD4jjcKg4DmfzGqF&X-Amz-Signature=92764ea83c23465d333ed7e3a7825cff73a1fd0388b9fde621e666341612862b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
