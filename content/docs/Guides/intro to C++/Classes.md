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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I476FV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA0croTLbDSRBXj25rGaexEo6%2FcnZmL4GiMDgs1nSnBwIgHEalZaRc0a%2BfI%2B1tD5kxbXMaMDmif7vsCATpfgfzM4oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFc54aNdhF%2By%2FxPQSrcAxl4L%2BX4bILyeAz76uSok84xM4vZ0UNVHggZqfYFs9JmMNMqfZUu4SxogPXqSk%2FNGro9677k893w0TTFQ%2Fx7uMeyP0oygw9u1ZpshdaZz05fWid6xmICqjX0XUVVomLgNRya%2BRh6wk25ZiUNAeJMbXCDZN3K4oAh6FUNuRsX%2FP5x%2B1HWgxq8Gk5W6FwblZkg88QyITC7UVQkENG%2Bi436IWxCGDN7PFaEh6vBtxlT2v4o6dMxSpuGN3%2FhdSx7CAqr7oYysHjh%2Fgp7viCrsYUkuEoyUPeD4cmbf56WG%2BIXe%2B5i0PqI5%2FyBa8xqw6qQmPT4THH793j%2Fc402PDSOj7ipCPupFEFpcx13D3vzF7t9%2F2kC8U8sTn6eQPej6w5iCKcfhXRw%2BeVRfgp3MpzS7pPBuIKFTjpHL%2FBxgYn8%2F2KWNbA%2FNGNA2ZV0JWpYZvW6VDczjg71R%2Bz4VNJa3aj02vX9QxWj6Ha%2BEWrrlmjY%2Fs7VxpViCLHe8XRt84CutIqgvIRa6UcJYONjrjKYSvAmLy7157WBdNPvmmvgbf1uLU7IjKoB8h0b3dgc55veRL57azqEvsCayn%2FKrs16S7fKsdsoqj3%2FHWeVM77xLgqNeH%2B8gg0hC%2F%2BI%2Bb4QrPKcu6G0MIiJn74GOqUBK%2B%2BiJ6SXkEeaGEYkYbbL1W3zE5qGW3wnFR9hyeIWe9YUbC0GburN1JVmLj48mqevnrhsLNBPyyLDEbEBJDuV3EJgYDwGms82EAEHFvRd1dOta0ymqHFmqZzx1rkWy8Ke5MJsot262%2B12VsfPr3ckcHkLvM4OuDNCBFVCYbiFrM59tkEmW6l%2BZswRrrhXA4n6ePdODzeGesqdoLhiwxXdyPyLBgaD&X-Amz-Signature=690dd5c0e5574e1d2fbc82077a76ce0e923b7c37cb1f17728d968683172b6e95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
