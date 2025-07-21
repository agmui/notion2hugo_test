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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPYUJ75%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkQFhpELQ89mjQMpaYtSYT%2FhG65SRI0agh99qrYCDDGAiEAhQLK%2FmcoHgMIlqpgyb6msTa%2BvfKDFi5Bxw13YfyeDDMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe9mytP4rOCf7KqJyrcA7qPFF%2Br2p73CI53ZBLOo79NS4Nishjpe3bWtMJYUQsYLQ5ctWTziRPta1c3%2F7RPcN6tb%2FrZW%2Bi9wTGjc%2BbqOk%2BOZrsaW61NTw22uWqHAuvq4LvJZ%2F9MLTK8g0M41sI34oPIQvkgHKkVUKFa3itnwrvw2Q1%2F6OPl37TvAiNl1UmfZXMntSa75wUp46tmzIGUUzpVE2hFP5Sj6b%2BpRwBU27sHoykhL2ArhZcnhR%2Bk1ELty2cAE%2BPqOwtDNyOVEtrO%2BqYGsP2lFEY%2FyzrNlxYgvcYVcmiws1FnslRt8f0l224ZdmEjL4nzut8AWcFux2yqa1JU%2Fq0471Xk%2FMklixXKtX7FtYprabFx0M3tc0n2%2Fk5OMaSepX%2Fm2jF2qT4gCCxiQ9b5PFL8nTfWmHXqTwnK71srwPPOSUN3fAF7qfSvHIj%2BZFkxz3ObNB0KJVajyI4d%2BCaa37QWIEA3benLh%2FJn8l4oeVFZ%2BguMeNiE1o1cnL%2B7oPMXXvELXnmSfRRwR6TIdSTDT6wavcDvCGEa98yQQ9lcmiYecjj5X6qMvcsqBGcESorGdBVRPSLzuZOfG%2F8ZqBtKqutvEMmhzhOZiK9lc7daqMFyy1AZogVO9lDVTUI42qwMYmnqFiaYgUn%2FMPH7%2BsMGOqUBsZqKag3wFlwQpg1Gz7C7N60gIm0PcImYWVRR9MQrCaRxZemGS7Cc8ALUTNPyIiWc5QTmGRyXZ%2B542fq8Q%2FSNNab8pyIJ0IOyFjIv0WH%2Bt182RvrqvGcImR3eETpb1k42RJBNoK20hSFF5qXy%2B6BKdGEvp3NEy%2FGQrg2nKMvdor4GaX0HiJHVdr2KHfES0sxTlC%2BozTetpjt3zd5VcN3MqNR9BKxj&X-Amz-Signature=e7b7697aeb187746b7d37b542f5a3652d5c4fbeb4640f22de085c2cbfd691474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
