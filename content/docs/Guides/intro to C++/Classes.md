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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HBHZYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGjbdnjKt7XnXysIkMbSbxKu%2BSGbG4Dp09ASyNMqntGjAiEA8DOxtnc4CuBVw4nBzWftvVpOyLUQ%2FU9laR9GFgh6QLEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEyb3k1LmDTNrmkOQircA%2FuTFxdtnEH8Z2Ks8dqdU%2FkB%2BOMxZxSXyt4P85sHqQFS9ALfVrReIPNH0avAleNBvURbjGsH%2BZxDSsFeqHyFotvEPgxnm0U1YzWCQ1v63hh6qYrAXpbE146Ri9bgN9u0I4CifexFivKW3TPJDRCfNUGH8bBLrAtayIGhpuiJ6Qzz%2Fumxve1JkgFa7OPe8KdtLMPGrPFNgTS%2FC1gojL%2BjUCcnN%2F26BEyKpKoleFgmwtTIjD2TSFKCRV0u1sugIsqf1trHDL6Ly9wtw%2BSEAO7CXS6TQ12ME%2FMDL72pgxuaBumSOGziXke8GQhMwXMr4LwyBCno%2Fhyh1dnfIhQRa1f9qErgF4TvuXjkYMSl3xfySSZOi%2F5JdTvN39wzbU%2FzPhSu93nbWFYtfcQgB6yT37SHhamU3qvZ%2FJBQ23L20GyhQXldcTnbRNzC2vsugX9anoUcR%2FvbSomXdkOX2bXnlQyzlnuyWN06boz6yHnA3CPi4zLDtMITJCFSrrEelWX6Oz%2B9PNNULybdL6EbLcLGY6NKWclsy2mR9%2FD99sJjuMDuWKuA87jHA7Ya7ysiHJC39N9qM%2BOttrE0vQK%2FNJTgZQKEIC6UqKN8MXyuMvBlzsRtIIJf%2F1gppiHh3hV2VqddMMSqzsEGOqUBXwE9dAGzdlNW1cjyxA4lnRH0t5QjwtfiI%2BvMZOBPapQ8MbGaHzYPekcFLgScgLCVrkC6aRIXxeRvBTIDg1bZALfUJLUxkVrx%2FFPshZL94xvae1jtEEEqn8%2Fzujz3PLz6LpYF0HXo2t3ibV%2FmECuI8wts2A78anFkaCLpt8%2Bisq9zpVBPfMIGEsWJwkF4191Sjq6EO9B9H3v9P5LPj4LB85W%2BQnhV&X-Amz-Signature=0d70b5724f7c8b9396386e05da8cb6c6b8c841d0d2b79c32f3e4a36a855e7c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
