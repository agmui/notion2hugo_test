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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7ELMLV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6NZ0VE04VAARelbTKjaHEv4dLyqgSn9zOY66B8BlcGQIhAPzGKkRnOkl98IqGGbkt2Wj8wWXPXSWYzGUGs7eNmLRRKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnD6FhwWEEeTTBsCgq3AMZgkWDqILpBMGOIw%2FQQtHLG4X0ozVGF0kWDCncqwR1dYDREG4EXKJgQfj4OzRDAgR4yBzFkyRI7Px32V%2Fdcq%2B9UEZF9YYb%2BskLPVOsvhQwRaKxpDiqoadDg%2BHoSgmSew%2BolpGKF1h%2BlN4AwcoiDUaLV9MFBayFtWUTS4DsVwdFtShAaRJOCpiP38mzso67tytLT6Fev4aBtiPmjsdNVHI3Z1u%2F9IZytC1eJIMFmI%2FjCaRsXuzfHgAWpuKcnsXf1%2FEbNGpfyMWdFnYS7UpquI3eBM8uY7hrRmbH7xyA0gBSqC4XrKBksu51OVUMZgxWH86ik9%2F498w2%2FOvONggS%2FedPwkTKK8JXAuQc6e37kh0wSR%2FvMcokLq68pqWLhw4MmLbXVIMaIbhQ8mFrn8ZCsZ1nz%2BRYJnLrlvUHYiUF4HyPT5YeMFjNSwDAciCYAAnfCJjqlYrxNPBDNIMWloCfBqYKgZHgDSLbrMVZygO%2BKJco7Gj4Yz%2BjZitTL1DYrBwuhwscG2ta2jqHD6eC1NMCiwazlLYcIPsJgBJhRJm5T%2BudD0JYJRH6cC3YPVNK7wFEC8cAPlqt6FzOq8tdEw5vo9XnRUX6q64HmZOteBaEpDP2TKuX%2BQUNlpK%2FAnaFuTDn%2FqPEBjqkAdADRM%2FXBV9z0X8loZ%2BhPbsdWsmEdmhwPjevZ%2FvxcgR8sjd8gkQ%2Fi7Qh4KF92WbKV5bQdOeLhWugwF8%2FkzaU7ZRnYlwjAADXYdvQ%2Fu5pphq8jJXMQHszU1GOy3nckCpSkJNGwGcKFWDtGH2EL4mXc%2FC01JSZnYeolUEoAuYBHu%2B8XV3qWgBszY4B0jSqccBGjsko5LKQ6uzBfbGKcSVSpxOOwy3N&X-Amz-Signature=ed09b73dc19539c94fd7880565783b3c2c82a5774c054af58feeb5d443bc5924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
