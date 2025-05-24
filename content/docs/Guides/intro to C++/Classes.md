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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUVISY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDZq5Rc5FgHCAGRkPzvstFp9VeTh380MJF4r6BItcRPaQIgQkBbCALljNTf11UhLYutOVQhURB0uWZznd7rh%2FaneDAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPja6EjvsTn9eyaOayrcA4FpHGfNAi0jHTvg0hR3No1AJvx3FzxBbysVNgQXBClXuNcGCgQfWtOL6mMc7iamGdt34hY1bApro9Niv3AhTTk%2BZSr8utWuKZirZFGmSFJ5ZPbHzgzBO4b%2FtRyAl4GkQT9fci2qSSWj5ewCrHUkYpvd%2FIamLm6gZqUYQ7LV0l7SurHcFBWPhC%2FHhuclkaq618byhiut46yHC2xGgcKBTafHQJDznYPvL2aJ3G83sJVAtebhsE11wckTFgb89sDw6%2FKR7BAcpqHk6IBZY4Euj4E%2Fv%2FHlsalODVdrYzkV84E%2B8UOcSv3ix5n7LpQSrm40yFouqlhsf2lBEJboZdZZWYgw1y3x8TBD04jxz5p2Vjaupb4fajVdoDkusMGfgGwCfVqqSfEtLloiaqDsQ5T1OvCL4LXZkAXumPj7UIL9H8um69lLblqkDJ1a%2FFdn0jusvvy82jFUb1OZuzz%2Bop8wjbMGVLykC7jAjzo%2BKzYsZ5hzzcnjfv23mhBF2jauRhQZFbt%2FbkeM2xmaeBjnmidkY%2BsiUJgGNvxLClFVNjwG9vbNSI60LLnebgAGhAb2DReWh3Mwvb1nm99000j%2Bibj7N0Q1ZiYZsx4EPGBVUdMI%2BCFF2Y74DDE8spiZwOHBMPnMx8EGOqUBnW0zs4JGLFr2ycY2KjZcqiwA8EyHcSLNFw2jrA5%2BWJjUP50mMFtqmXO%2BTAQ048H1dYC3fOPjz3HHQzuUa7oAWKmFSu6oJPTKdI1fLS5jM9Ur4GmEsjo79Z0s4%2BaTbXvYAv51K0OfIbKyS3W9RRUfDwerudNMjVEDewtZW4Qc6NKSrvZPZwwdC%2FvdYNPUXbdy0Bjbf95oqu4%2B%2BljhEilea7u77ewn&X-Amz-Signature=5a798a3e7c7cd4ebcc52cfd032e7b70d88ac8cf30b7d88806027cd3260a444ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
