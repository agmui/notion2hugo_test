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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IJTULB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1032rJYJeysEc175uTV8BhkJjrsHGZqxYnZ8BkPmJHAiEAr2W5jEq3pkTepyvN%2BUeuDYhiUsV1f2iWJwIikRPfKk0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDAl8YABEVDSqRUVACrcA9AVzGKOujJXC%2BnEW0SfD4ML%2BnoXKnn70IZ4vwNUpsj1JOnxsnZ0TF2%2FP4gzDFNWrUrUq7ZKiDCwH%2BIEa3Vlo%2Be5Fm6Bv%2F5u%2BbRPRSRRLz5jTtD104TH3SF87bt%2FU%2FbNwYv258ULKV635fcZpaWcDpmd8NAcWUdzahfVovoPch%2BhWr0KirrZxWNzNvqjLkwB97EA4gU%2FwbptWklAsT6iM1Zl9k3snt8thgfNPoBuPYqP2rAQXlxz2e85JICRnkXReF13rgndu%2FITr3%2FmPbL5Az4IexgVqPDsdFiVtd%2BTR2Zk0sWwjroaFPBGPLfPyMZgafipqmUynEed90%2BC8ntIKYlTQt5WXacygCuDYXmbwKCLIh%2BAPj5fR9rAu%2BNlzC09oePLMLL8UwROO1K4mRFV9GyJrkLy3DLZAw7ojoU7axNons8AsRU%2BdVEU9PJphCUqOuZFDXwOv%2BKDBu6OHgWzTp1AmYcdMZSEKp4cSMl7Vbxx0EQv%2BpkOpHZxfwgDqNCF4IJZexnWvG8mrOgOWdqcVYC1S4WyMrtKglcNvndEXZa73tPMsTMIyJHvmSSGT%2FWk0cVz7d6GJVBBrkEr2hzEQbpdnf7FNJMVVy64CSUiIasuXGS6WbwTM%2BZie8eLMLzk670GOqUBhlMJFnxVWT6HMGahU6QLODALsixIOTihqaX4w8IgiSo1ax%2BEfSz7JQXk3XdqjCiJa1SHN5C0U%2FBt9up1wkLIMD2UOF8ShrQeaqmwurIFYUtx1d1TpUe5gAETO5AO6StNOGZrbO6xKgIQoo9POSeGdLLM9MCx%2F2bNX3iLXeiqa3Q9x%2BdUHnF2fqmf3xvSgSembljJUiDrlZsZW6lMi5lVcqD69IEE&X-Amz-Signature=7bcfd5a3242cb7465c95e30c16da25c97b6a82ff3a86aeefc2ac07667b146192&X-Amz-SignedHeaders=host&x-id=GetObject)

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
