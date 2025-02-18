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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES26VHQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDZntf6UgZ2ewJA11yfbovVAXfd51Y7MZRixPVQ3LwTfgIhAPd6j2zbLZ%2BhlTOa4%2FK9mD6m%2FdMTBXHqUz8eFW%2FtqgRbKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZz8TeemNYUWseb0wq3AO62SG7fcWb%2FQEC8U%2FH4jWPcCF0%2BbuuuRKH3EPTA1o5h1iq9XKEcVDy9a43hA%2FBWtw3lS6VPNZQbbzo57Sul%2FNx4qpDbRs%2BGDqEDP5%2Fo2%2BeGFXAMoW6E2UvjPn4x7LQXaLs%2BdVOTgluOaf0X2iwBpUFGyBSZ%2F%2FnswJYsfsCpxb%2Bx5UUhOBX2N7JWK6BddGupX%2FkDGA0I9%2FIFB3lxAtdx8GcAo85JdC10ZfvemD3JaQc2lXRT%2FcJ7AmWtWii6KrcW37vupOjOWUvbE7nFeprHg%2FD%2BLpgGkDrY2n2lAg9Bb3%2FPIaZjjRkZ3%2BZ%2BHcWVlOl5paEURExuHGg%2BgSGRu6hDjKWWA8cAsuiv8W9iggG73OHJdAaeKebaNQ396QGGvkI3a%2F9mnpd994NnfKzwd2zX5j4%2BnrJ8EQFDXw93p7bnH4ZOZz0uUh8JIU89Gm0jDUs4n8SBglihKi3HBGGte6prcZrdlbKOALc1hjVwY0J7wTSf0ZFrDw6Yhqno37tJwsYfHiMjaTU%2FVVtn715wYCEgHpmoeL0dimY%2BXtVt70uQ2LhU6fSSRn%2BQPcvHYfvp4ogcY0ljvN%2FS6LVfpbhCfOPR%2BV%2BtUZB10IaTiSTSc3mYv9YmpDQA8LJwL%2FltSAX0TCfjNC9BjqkAYO9n9w5KNGwMO4tCqZ3ccGwLYv13DxhipMFVUouQ1w1QLuw4sBWU3YVYePHq0Mm31WnCIaeM1Gy6YOs6cfrp8kGMyt6wlwin%2Br7%2Fd0PhYC8jCFvXFEb%2BAab3pwC3jDI97znwij5z9JdjtLa%2B4UauXJuzX19Bbj4o8h8TxceR142QcMFi3HxbOzuwxE3bP6eDQ2DxRvfk7jCJIcjSxG1XKPhhMf%2F&X-Amz-Signature=cd1003a5368fcd22b6599527eda4e53962eb64536fecb09fecaa6a10df452bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
