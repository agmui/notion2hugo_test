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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTQVYU6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIH%2F9CrEMajcM4E5HLuSVBEaBMhhScDFTucO0iTnlkkDsAiEA%2BI%2Bz%2F01iU97b60rZKLCazge0VDXc77CNQ9NPs2iwXxIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHbybJMfGnPqynMGSrcA4d4Bu8nC1ZBCUjHfL2ikIAT3%2BpHq2Dk3RU2mUrm%2Bk4sMI4BjOMvOkh78lZUtCTfhEXAdMao6UNBxJjmtWAr2MkB7dRVgPzN02fhgGL5TqvrhRtbzrIXGVcXJKy3c%2FH8wtqvo9cQ84tTJtNDZRXBy7Kry%2BTItj2VSzuZWudpPkNtXzn5TyJ9Y%2FsKg6XLZgkjBifsG4YUwY0YeyDD58FAIoc71%2FxnvIfeWjZWGxuj0PB8PpB0LzmX9B67HxlP1k%2BIdGCK52nFGIzkYI00t1vyTRyyc%2Fa3M8cCD%2FbSJBvxUMz3dJNNLbQ7ZdiM878FQdeqCvSqkRevAk8FWV%2Fxlkgdoj9kS3R0HYq%2BI%2B2NCL2YEui1yZ1do8SNeCWklX8U2P7MdqzC21pp2esiIfbQKrXoLnZnVW50YqtB%2BFE3Y1SbHVCvlxSixZ7dr570vjz2%2FSThXa2l0n6vdnpBTPVmDi0f51m8%2Fx6uM%2FzX0lbCCKT8iATN4uc2FUTXAJYEA%2FKuj1E%2B98G2WUMKO6wmghNYyRrBq%2F4GreEmwpVJkiUqQJVxcLS8FccchSeiwkM%2BvnKRncenS5pO39RPs8yZhkha5AsWLr9DG4pXDMpsEB5SNKh2ofOEz560mHb033mziXOQMJeVjL4GOqUBLb5TvzfdvmHws9aslsVNa1wTP2bJFoWj3Qo67xGIPdIJYicHC7LT0aVjSpZycnegnF7vvYoPRhqi%2FHgb0umqjPStlUNaj8BKuAzjLSk9agsfqHXpqlVi25dWrXEloNfF1LEC5UifGLz8N6o7C84rbDJfFxiQ0Zz%2BhLwtBVgYKohtRDF8JSu3yhoF4oFNOUrvPZ4nkivoOf%2FC5ep4VfmFHy6beTSu&X-Amz-Signature=e391ab21d7c6ca0b5c754b2c712608b76b73f2e8e384748ca9424c45f99e4603&X-Amz-SignedHeaders=host&x-id=GetObject)

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
