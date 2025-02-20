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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3K3MG7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyIKB%2FET3GvnsMEnsrgo1pMPKUeqMb1OInxiOslLZ91AiASQngLVSvnRRaT3B46W6zMT9a3ACF3%2FJNi8ozln12WjCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LkO2cs5c2KLGG05KtwD92iamsUXueR0pYw9W%2BArbQ93IB%2FsCd8wSu69WdemmZssSO6SFH5gzOhCDuIQIcQBMjg2YkwXBsHZeReEk%2BrydCtoGp4rL%2ByxB6C7vtAQa4U1KpmR6xnyTG%2B%2BO5cMtr08FPXXMpYPFdoqxmuoWRzyH0V2%2FE0toydRwbvIR2TJh4SykRi110HAD07rYLsm3KLLOcCqB7nUkW96vZb5a3c9FRje7ymXWUmKDM%2F9xmBb39Z4IBkUbnxfkcLNFBoQ8Zp5PJr1vY45GwS1Lz13whZSPAf4PvmYZEGCdl7mGdzZ98siSiChkL3gmtI3ngFRzUZO1ldgqA%2B14Zo1%2FQYLelRWL0JrG%2BvDPH6eJsOREpEhznU9xnTd9o5LuVJksR21GAQ9EmCzgbN772PAbhD8GSDGS2EFDWUE3t3i20uEvLx2xjpYOepGICjp5B0i%2FRgwM3aXZditOzheNHrEmMH%2F7%2Bwvv31vWLjDYbq%2FlOpyt1ZJnw0Jb3Yuw31vjtPFaQjjLbsbLOa7akB9rwX8BpXnwC1mFtAOV94p7X1ksb8E0TX9wfk6tziQOczg1cFCzVOOocycIOyvC7jo1h9Uxo%2BhbUE0H5xHWHsr2QSJVLBZ9WmmTiH0h4UjMQJsF2xg%2Fd8wrsPavQY6pgEp5DxsojXxHRy2joTdpdqAEP%2BlIjTPd2TN0xYY%2F%2Fi4K%2F4yRGjPp%2BZ8qIfGlYfyd5Jbq7H1LOmqeIk5E%2B%2F%2Fa9GNWIbN2QFjgO0drXCW53Iv9%2BVrUXIl06aTynxSIOPIM5fSeTwitEkBjSdKAttK8KLWqBVGzWgPGIada%2F8ruPNeI4Xn39g3%2FwVJt1pbL%2B9JfBDyU%2BPtCpcWeqdTi1%2BEScZnMrVJlE8E&X-Amz-Signature=384adf71a4f8a891ff124317918ccdeb45633b9f7cde9ac48e6adbaae9fa8389&X-Amz-SignedHeaders=host&x-id=GetObject)

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
