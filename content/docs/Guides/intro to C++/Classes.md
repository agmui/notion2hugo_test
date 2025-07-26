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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7HJP4Q3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAkv79fwPalVBu%2Byf4xOq8irTtUyWBKW%2BfKDOEFoyPkXAiBCJBYAlFcYsweo%2BmU9cHtxKI6phHU2HoxT9CHVlxJSWSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMYoKWjyjQfCES0xXOKtwDzy8r4YB%2B4c%2FBi5quoEeSAw%2F0lukA9XYgR1KV3fAR69HwOrNUPYY%2FLjldc44W1alPHRkI1HGmNyn9lWTKBWgHtZyxyQp3oPaDJiORivDXyZh84t2I6Fnp2RcQ7QJbH3P8uiS8Ys6MDu62TAAj6EHEwacdR0KgsxZuK5BCEhhNAvck4bgy94jGAqmHL05pIJyI8qdpWK420f%2Facm%2F%2B43YiLyltZF78BQciQHFyGdMDEyILqlzkZlDjq1EWP%2FivSsm74MThEvC2rMkwtnOP1n3GMQTm4FVCUVYxtmLVJL2lnjJIH1%2F9C1E3q40l%2BfSRHjUDFcxl7I3UR7IvDt7dZIwBuNXA2gC2zOBT0s2SmSYw8Wqzgrebv8d1kqlUKiEq0PbFlYjbhSV8KFeVMPYoQEhdxuBeMOSZCN0IA%2FbP1poSJnWDw5RbWF1TyE87OAATdJgDZBDw74QJWbtRnvdARV1Ibq4SH5GeN%2BLFqiYigv%2FDjEu2U41%2F0f9ySldwEpdyGoBGblaYN19mlPujpQdlgoe5WcaV36BjQU%2B0hDqCtj4qHdJ4TVqfdfXKjgivhyMD6%2BGxk%2F2izv0xEKcIHVrKDCYaVlULFHR286WqLKZbXJ%2FKONdSzTrhAibN83LWT2Awzv%2BUxAY6pgEfx7fJ706meqJJkXdkMH2NyPzeB%2BNQW5JOBB6l%2FyIxZbv%2FRRl5t%2FhGxJ4bc3zISSu4JM%2FmoG%2BV1ANf2gSGO%2FgFALrGtngj27mI%2FNMHb%2F8II8lrar6ax1JdgKTcP2Fh2lF8U3PhBI4pFlQZPq7MfK4FyEHMlKJjjjbZHCme0vCUoQVWss1nhS25e%2FZsrgi9nF2fpTWl%2FBuvH9yECfTBbxYGs1BmM6tl&X-Amz-Signature=bc5813333ca3d0122ea9c518142cf22160b1a18c83e67bc4b9fcac49439c4613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
