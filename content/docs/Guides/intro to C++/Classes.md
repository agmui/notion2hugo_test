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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHL2MTY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQClIpuryPW0qXkImJFscSBCXLfgvldNYOxxLOAkPBrl9gIgfQWj%2FL32sd2F7XZY0YBHsWkA0GwJzf%2FdF6tzoVHxPQkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGY3EHO%2FGtNG8sZlRSrcAyqcdICMaUs9SrNTeqNENF0LSGkAhWGWR9n9L2N3FjHn9qQDa44n57XUgBR5XrgPGYt7%2FfZCO%2BtwGUY37DFfB1iqWJZrstViRSK2DQs0IL1pPCqHVCGShm%2Ftm%2BBWuaZ091caao7zchyB8vBovMofTv2BNdG7mveCrOnENKp9ZUMEgOwp8kJ5Y3c7WTZL6TYyVfjJytFZOxhJsuKLqcv7ha5S%2FT%2BavZ1qGDzL4xsSAMTpsthO%2FdHXZiIKLyiuP5dqWoqNLBDxCLtI4h7SEvlxaqXVipHw0d9aw84EqGC16OmLEa2xH2BP8SRg3PfnWq7OM2hou8n7zNdnUDMyd6ngRLh72JCBVMf1UpWXvnwvcuahhNIlsoEVJ1wCr1%2BGlTdsu9pUcgz1TBJHDTwN%2B9HsNrOHRVPa4rIhsUgHHArZUHXnfiszYuLFQADOXc%2BdOWC5gwTeYUmhVj7Ro%2FHzkpa2p4mF4A6WioerfA39HwN1E5t25MwnU1yPrdtxXkXe4rTBJ3jlA5w4NiJxrbR0idNWgUpLKWU7WsKu5x7jrwoU2oyFI7aJssPmCm0Ji%2Bp04D15Aixcu0YdZxMlbmll0AIbWoWGEhHeceiSNwkoxaQVg77BHIudgGttuxv37dQ0ML2zv8IGOqUB9xNVH5fZy02NVzaSbXcC6m%2FSICsQAUjFhXZMuHUCi2a2mFhShsc2MQgop5RGAuFMReX4iNQP34uL%2FPO0xZ7zUsOVisTdT4xBxNc5BKPEefH%2FgN%2BR3c3zk1nqVu9sKY4kDtyqzJ%2FtGiAaaOSWRhvR7KxNOzn%2BFTaU0j2dFgdnSeHguKqw9Oceq65ThizkGnNC3Z8i09BdymVQ%2FThuqGW%2BLtOIBM9s&X-Amz-Signature=14babe4585d3d5716552d55b05fe579739b61ea149c3e0f79984ce661c2a3d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
