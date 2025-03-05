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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK56SQOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvKC4IwHJ2a9lWr9TbMyz%2FyMkVxkPNXqduFMYnJqWcwIgByfYvqDgqAzLY2XPhTeCICsxMGaxI02jY2xXZIQXir0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFi8O4r54VYNoSqfZyrcA3Fs%2Bmf8DU3IHLnprbnAMxrs5okxeSHl3hBAsCdQl3Tdo87R%2Bykg9rN6bHnls2EX5UXc6esABbmq%2BjZ2AKiwSxgTjuuipWd4p6Oy%2B7jlPEWF4it6RMVzMwiIpxWO1VqAajX2OE8ca8om0h1XyNN1qN9KgVifROVTLLPg2Wkb8WJqHOR9w%2B%2F3paRw61gqsZbzmwxOUhGeWoj6HDd%2BD1yZ7fthv11pv4H%2FNcXOtPiJ1pIek%2Bbdoh0tmCQQL0bxNzN98vGH4nYrmwuc0t3yscBf3%2FzrImMZZV7mHpxq5abRhKLsiWTWByiBY3RdxWczDNAkPAc73eCopxp8sjJPjkxYFaQryLQo9fW%2FSATbwZo%2B6BOJlRd1I1MZAu9LEtulZrANFFoD0p1FcpST3WmPPV7NQALTrpnSLN%2FmCfEA3ctdurwvI8E4R918qcCI3RHEWxSGzHkkWO7SCPTztT%2BU%2FEm9jzlgCUbfiFuy1PaWV5sKDB55lIKpkW%2Fw4umXUz6JDN4uTDhNk9kUOLFxVemJghKinOJJjt6zU33v1ypeA1Px%2BRJPZOahQkBHoeXZdutSqUUssCCj%2FIHX9YPFwQLCjY%2BqMqVKpc%2Fcti4IbQaU%2FilwrffM%2B8H8L58nuNloN2yEMMKvoL4GOqUBaLITBhvRmBw0ngvT%2FbXg3e%2Byzf3cDrCOfqnNe%2FqztUU3c1MKjd43Z1hJpI%2FDCPbA0%2FUv6wKMTVd33DybAzEywThA1zcelXEytKvhZ%2FA0sxu7Kurxn7Uf8zZer9XszItg7DzhOMM7SyYCsnCM2uQZq6icecNOrmp4c5ttG2xXTXP7c6q%2FmJ0DBctgOjjIgaU%2BWosBGtDgyyBPDh0LAZhtscSAH7LL&X-Amz-Signature=52f8e112aa3e352f8f4b54b61f23dafeba8f5fe6ebaae9baef25cc9da0184abd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
