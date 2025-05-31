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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMXKWIET%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPrHAV4QMnttolPQeCdF6P5sKrF6%2B%2BdMd2iJfvVmYB5AiEAwxSXjEMd8via%2Ft2MvSf35rYpFvsSAOng8zAWe%2FWEK6gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdH0gIBhZaelwKqTCrcA6%2FK5pFS05ItHta8%2BetzObtRaHkuCWocLqsRSuArQPfSMN1gmWtO%2FBQOnNTx3ONs7N2QoPiWktjPR0jaNFKbBSAmT9RzUG8f0YeJFvSpS3dTfcRD5iouWNgmSC%2BXhC6xZv7FXod4dkT5Vjjg1ytbbD2TjKwEsvMJaCRIWUrUSkMip4PLIZvQthk7zaz7%2FqdMfHk9z0dy927f22aZamytoGRYCmcnEia%2BX1Znvv6sxWQgvt9Ht2gPhrGOqRealSGZeanm%2BxNc8RVSPkB5g5G05w%2BGYLnV2RGjHouUWPoCJTkBMTBmCi%2FUMSU843Ft3EDAFZmJRcwcxWapfN%2F2TdnnSIukRxOVbkADpIkFeBaFz81S9BuVGiuWY7sxTpbkzhRE8ntU0vtng9ultoNOnDq8Crw1uIjIA7CPljZTQPCpCzxZUHbHfkHi6DtW1%2FHPDnJQ8WCmb1119eWJ9Y3Zq9vVEbgZ5k7ISVUx2%2BiXKn9KpID1A8qHRtWBZOud62G%2FnZKzF9Qu96%2FUo5TjI0wQB%2F43xsmYvKd5tkpebtpaLWgcmW8QO9Yp05FnfRKhl9%2FfCFl7zXiphGDAhu%2Bdqx900%2Fl9qwkWjcHxt1Kdd%2B3Y%2Fud2%2FFAGGb7y8D5HTdeFICydMKqo7MEGOqUBpZqOZJFA0RcBrFEEGNsQI2xJXf7sZwxVRWqJ1jeaHgcV%2ByXtWqth0kB2hpp8i6Hd6cQemVLl9Y5FBOCM3shhpwVV93KAow%2BtJWFoFtxDX%2BQU0oQPYL2Xj3NN4LhyEYzOHc4HQugjXCo6i%2F%2BQlNSPfD6KdYZMKdgKB1nv5Et%2Bbx5WJcVumTMDhJXgsTKNY9JFphyX9OWzkPaatp2NKhjNFN7HOSiA&X-Amz-Signature=d9d7fe5e7afb911512ec35d5b8416dcd9d9905fc7422c048ceb979a33a33aadc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
