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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JAKBZDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDs%2BQlGCgQdSYPX2Q71gBgJoKZdcNNRNNWAewJsQMNvdAiBjF9f0F6Tk6WXbAp4E7cjzY97B3AZkLXpiRZSRJvy00Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM2ypSUV8S1cwBb5VvKtwDseDw5ZMwEJL7%2Be%2BtPihoKl4C1bd2OMofKS8p72csvcdUzuNKtGAixXMXZzo9Mh7cVCRK6ALkHSdYRGQmxO1l%2FYIAG0mCoycmsJ03%2F9gclfBWraUv22z4sbyGRrALvIr4hjGaUbprx8iwtHvHx77D%2FKhgnFmI8gRzVE26jTbAKjIC0gUFNUfEOeosj3UY470T64%2FU6zZtI6phpB7kIIX3h80PEM8l%2BpA3FIqsO42MDpLo6tDYQ5uGYDwhrz853am8w5h20mp1P%2F%2F9G5hJ6qO%2BHrGLZG3RBuFx%2BwQYShO9CLds%2Fl69FbDIiAtB0SNtROsnvrqppOVFq6ae8ZUxN4skKds1WtPYeMguZ4yQmzPYPNb8D798Uo7eTNeoYwmrdcm3mVCIjvn07yZc4DY9xRzDSDnoG%2F%2FMsql4YYnJUoqVOUVrYAtstbMkzKEVsuYzH3DlnsDUFEXDkZJukYKVcSdIfeBj%2FrkDJWDVMHh2vIniUI7GwjqSWiVfsfVBC7afcFEDO0VZfeonZ%2FKyMRlVuusU7jMxYe2ANc6Y4W3LtDDbIv9JAHaPPyoLUP2yFbahyv5YNg4bfiTJaYP4u96u7ZUqJ9WUvWGLosw4OT%2Bw73xMlmCeWVc%2FOE%2BmXSTZr9UwoMjFvwY6pgEmjbhnrS%2FBZ6iN3zCq0O%2BFRvc6QLh3zVs8KJyE%2B0VBtj%2FZNx9pnC6WPFbjJ38FxPdzh886H1L2FS8zs%2B5vCR2pDDOzds8Gf1NkyYXWAy7sQ74LSn9k9bvGQ4M3cgJPbXam2FUy1GThU4B%2BuoIl%2B6m%2F8PImbcLv9xyv6gU0loUAzrlb%2BocEERf314UJh9GIEggNpjMRF%2BXC3u04eB8uOgvxl25y0hJP&X-Amz-Signature=2b2b3cee3bd54ef0cf992f7f30f3418187823f8eb77214e066edd60695136fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
