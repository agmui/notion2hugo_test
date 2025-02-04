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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOJWLF5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGi50fMpe7b9ykcSEX3vwHZnVya1JmfyMX%2FdBhf16z7fAiEAiw86fr1uX0gb2DAn%2B0VcJB1IUnpto0HxgFUDSQa9s9Uq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMPpzH%2Fa3IVgq81xHyrcA%2BmOI%2FoLLxZ27ei4RSRDMkwqOCvLG1pC6XfR6gFMn7n%2Fplk0eDmy1kwilTDvmH%2FoSO%2FMQq2Ym1aB472eRoObW2pb528p4c4kUCtVwUK8cp5R8E3p2Q4hWIWRRGtviCVhQ7gagxvYFnL4DdiWz2rEYMD4IMXIL9ixtMnhQMEA0eKxKW2EXOG6PgVCf7pRPO6MK3qvBoyBRIuyVCQUmULZGQ6EGDWVfHFovmMyxQMVZazD3y6t4NcQ1q3PJCnc%2BSpUph%2BnQxukVJ1PwZ31lt4g8IcQuIwUm3EaX5456LqWYpPdiRCFll0MLFBw9LZWe7dgnHvIkN%2Bz%2BSido8Lm3kuEVAQuAG6fLMWkjj74DEaIZM1m%2FFHV95hfWbE6b%2FCxohvgFzKOUYY2GdSM7dDc%2FuKHOemx0gk%2BLV56Ewg0XRLrfa1ZlyYPs1YG2NYvtjTsHaVu0DRLxqN5QXlsqaM3NgyCZnswJYFaPgHXLjtIePQs7TjJ1IT7RGsPLsKOoDLNqTqpwMUkR9OsaOwg9QjAewE36jCLCBA7fTVuQe0R5PNbrkAe3fuiifAkwUpn2aZCezOO%2B0UOExIjxmSvKb3hGTN2Xdea%2Fbj5d6uSmHle%2BG4yfUk8vBdXMswwY%2BRW5UMRMLjeib0GOqUBhoysKxSdGUfMUAM8WmiQ5lEXSz%2BlcMxBDXIzf9jEwQWZ8ywymLecobSL%2F8tEeAoYdjnGnPHRoudM9brF8sAegQHRBpebwbUJX1MrH80VunERghvnJPH%2F5gGCiiDOEndUqMWPFLwSvUQ2%2FO82cs0pUpuDD0ocfPF7p4JiqS9%2BX0YsEENLSyN4Ujc5mKxQAKCLVCtSiPEPzddsmQzXZQJHR4YNqyRg&X-Amz-Signature=b964a6fd5f80a790ee1b0aaf6e963c1515fc923a321688393d218c99bb330a66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
