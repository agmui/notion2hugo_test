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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYX7W3D%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIH4H6ZZkCsbQH5rSZVDom%2BdtFol771MvrwS%2FcJ0DX5gPAiEA5uAsCZJO%2FKY3vYkTejw%2B%2BgGCMxueFrBm4VzHzfUQUnMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBXkYD6zb%2FVTvL7MoCrcAwpbgcFsE8bSTNWe1YqKVNerLa1C66%2FVVnb4NIbM0SgDEosd3D%2FfhIg2eyi5kwwtqzNHBoSW6p76xvQvhs15iLiOp7Qi7KJHVgy9h%2FqtRVoAmkOGuA27FwEIRGaBCjxcxk%2B4DsZ94IpJ3VpEp2CDibDL64epArl3UKBOnBeJ6Uy84miWYLrF9RDGv6LWsV8gqiTF9LUfodDqhtC8tbFyGIPeBW1fGFq%2F78e%2Fg1iaSmMOyP8GTEjdGFMiMux4H9lqb%2Btlwx0aNct9UWsglDgpPL0uvUjmvH3y5L8S93RUXcJKz7SexI54i4G5Ax9dumIxgwWoEicOA%2Fol8BHdEyAZHus%2BRbm5i1snZIlxWLOcW8c7vTrUGLw70o0kQguBhBThTl8Lsf%2F4IFCq50%2B2Q6aIg7%2BnJBgdjhoD2pl%2FDi6vD89QeKfdVIUfnmcCldOC8Ctco8OXXsW%2Fta9wVdNiFG6M319A6s7PC2vHcNwGJaile9zRxHWZRrW2%2B8JhtxRJxRuZB1s%2BLLbJjswmn%2FdD84LxOFRA2k8WIS0pJHx03cDh0hfKAzIMCoM2PVonYHRNMj%2FxolYA0%2FVXNNp3x0qaXJs0hCZ6pqfIDUfaUrTRVoLEOBX1YZzd0X3PyX1hPmBGMLHEn8MGOqUB2gO9TvmSSvd1tR%2FgEnjNemVNN063WyYGnPGbv3vu1CeUiXBaIZPcPD9dekZ4GOFWIkeN8rP3zwhLx5s9egNK2Q5VlEUnNjGCdzfe0CbKDwM6I6iFH%2FAdpYamcAZkmI23reDvTl%2FfJ4rerSrWOT%2FB%2FMyNlGIaKm8sWKo6xDsYUHLuhCDHcgf9BT0UvA6PS4U9YmLFKsz7RJBljnXcgsxA1d%2FH806D&X-Amz-Signature=abad4e7fad0b5225b7439179021bf6afd1337c73241c50f96688d369835fa1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
