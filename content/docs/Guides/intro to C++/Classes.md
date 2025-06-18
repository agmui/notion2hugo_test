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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKA44GU%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeXsu%2B%2FVmfQgZB3q7gstcXA%2B2x2Gw9oA49aWIkwkVbfwIhANthRY1qV%2BBernU3qxfZX6HCco5jALyavx4lP95WKyRmKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4dJ%2BATDtA8%2FQpT4wq3AOXQ8xPsA%2BKQCpOLkPccrKXjUqNSMc2SZ6Ldz5xD57hgohAhKFibw9QYB9auwbhb8bKAH%2FE5BiMwykuyRZxpt9OcagsTUiW56KkhbriNuFROb5AbicsdHlq9hYAJ8S%2Fz4Rfw3DfExLO7xxY06ceTWhGEPaSeiS3kHWQp9c4HJS9kf60pYVBFT%2Bx9un5A04RjD2LGT4DIM08agGSdf9anMuLs4bgK5OhQI%2BHNdYyvfc0DVR6q2w%2BXYPNN5mKyJEx2sPbW92YwyOLeU5N1KOmIsRVWVHgOlKjJOdX8JCfote6Wzyg2FqAKWRYaClSoS2zQaf3Sed14NR6GvvdDMUQQD6ry6GWZwjljt%2FMErZPdkoMBOzc140sl6bllaHQlZSNrl%2BK4D2IOHn%2B%2FJQALkStkzscrURlHjW1Oylgmugjq7%2FTLZDZHiMSS5QcF64nPsnY4K9UkXffKqvdhofnTHbYCL%2FgLQPTsR3zRswFbpmh9%2B5KG3s%2F8%2BjbVgSqe78nKVh99ajN5QtSCg3IsuU7sfkmANvTWKbz3tm2fM2UCBBmdEW9wxwd%2FBoKtWuuWhqliED4m56ZQyhjHeOddeFrRVCofCPTTvlLKsLOWzSL%2F%2BSJfP2FqFRmDNs9eBcrXl6fdDCUzszCBjqkAYso6YG%2Fksa6ZEipc9aCUcz9clJzzL4d9oX5vofdVBTYp9pwDupgO0CY2EHQ7Sfc%2BNtFEv1L%2B52c%2BgXUftZwiaRzi%2FiXmDBkcq5zbXKcERpBdrEBXf4%2BEOJmosRSC1SRhUf7KYTwCDdkNlLEyRIdtiTsVXGRDWjyimEQyP1hTBNiXdKXOJlhF0zkOlpyy2YeLFJUm6tnYPxjX6AKeAiZTn2pZq1v&X-Amz-Signature=0227697953cf122ab05055cdd5bb9b2603e2a6b6ce8c3f8d4191452d058dbe6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
