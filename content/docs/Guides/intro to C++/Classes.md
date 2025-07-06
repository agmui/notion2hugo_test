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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJTDW3G%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIArMRj4uHscaUw%2FEYddlGzSO1hmeI8PkHu%2BbYCMx%2BSf5AiAxxAB0ZW36aaBoxo8Uqfty1SRuJ0LQZGugiE6%2FSLWB0Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnoDC368mbK3i3k5xKtwD%2BdqInc%2FTwBOMYndqyySrn69VZW3r2SMghDiD20yUXiI8bf14Ibr0odRZnx%2FbjOC9Xs%2FmZZbpys8%2B4MuIFlyvjD%2FHqzYjPrhXNCsZoX%2FS%2B%2B4jDkyAtgp6mIUNjnSlSe0XJH2luCL12lPIQoZ11vaV7KlzZsiAESFW49k4PtG%2BAJavxJTK5fL9MUs%2Ff%2FTPaBKkZoyUwSx8GwDOt8LpyMNSyRcfXs6W1%2B4r%2BY8lAX6moII7Ct4v33Cj75V6Kc2rUI9clrzm7YxtDFm207ofdPpuXKLFXIqrHzzD4oBpmGsggITOZXwOk%2B7gRceYIKUeZ7IOH9W8roNkiMWHAPMQ%2Ftc5jACOlF0cLi1asTPVuTArY9cWOqepXPhLQuyHiDZ4PRtBr1EtEisGCFbxN5xyCmmOw2XaHs8CF4M5pOFEiNHG9sa8zA%2F1y5sHkE37nrwVOYJl%2FAlrpMQAFveNfVfy7EBmZ1%2BNIzxNqsRg%2FJulADtMg5gvhlZ91CM2NYAQ69AFPHRQSAqnnyPCoDlZDb1v6GkZRurN6nq2r7gf1cROvjq66Bcyvaf%2Fn0dr8pYEstdCbBz18LlqfNX4igbZT31AoUl5FEY6PviC6Hm9Pgvu%2ByFrghtLDhjadYhJ8w%2BeORowmJCnwwY6pgG6KdpiGEukUIDxsrn0hOaSQmJ4JzoChEcP10pHP3z%2BkvofyE7CZU2B2gIElu%2BHI%2B6Ri8oDrUq4admtGyvySMg1Fqp1EA7nNhRQWdd8MP2n0zRqpaCXHvVcKbxm9NsuIysp5U4QXi86%2FHFhhyNyv2UMcXbpXcBqCqcu%2BkEeEmx%2FdC3xnhMwBZGiPr29Ir5S3HxjDuCCRFZeRW7mjOm9yiR3DybkENlc&X-Amz-Signature=aefc1117ae91e3327f1a92ae96a6605512ce305181c7a2e512e7a2fc3354b9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
