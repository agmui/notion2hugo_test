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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVL2IDRL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDTw5uoD1EW9eBXyh1%2Fm4Dt1yI5zTTFEPVtJVIPTPjs0AIhAPj%2BC9L63Ax1%2FHYO9M8C9mDCdoDSmhwXkT%2BaRZxS5khzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx58M1Uvr6JhfXajbIq3APHsRc3eoTjLEMabGXvQs63cXBVMJ5GOfEMsUgB3qOsrAq0LnK4LIkvrZyouenqFCGgoGlXyYG12m%2BTP62M1w9XNU9AN8HhiCLQrrQqQ1C5Zu7kLR3ZDXYkvej3IVC%2BuhTQP1Sr0RWhmGLbxEIsSRuapWMC8BW5MilL4rtJ93xx4t6KjbtQSHgmM79uEkTmjQMnU%2FdXTNV967d0KiKmvGLHDNAndHZ5%2FCxiCjWQ6TukOuVpHIyNdlEXIaWW6hlVtzmZW2ilhOpjW9Zw5y4jis5n8ZcGnnVohh8TU257kjsFmHxvy7EcYbkJ%2BLU5P3Oq%2B51N%2Bhkex0Kut%2B8mmShJjW9Rz2AJe6fZQ99gIC8TQNzy6EkgL%2BFphxFO21iGQTmgucO6GaIikivbCoG9O9kFPvFD6YI1JreNTavx2NNXM6SDhcCd03OgFu5ZQ7ZK8LAZ9E2xCC5e5%2Bm%2F94KcWrFBJ%2FBwkPAimLvMzRGWc3XqAxU6D1VMm6X1AjfENpRrYlzsY6HTeZ1Ym%2BZQ3eC6h7%2FAkvQXhnL1n3RnWndVSt%2FoKD3rPw5hdFoZfXH3e6zr%2BjhNr5auI5gto8WP2VDcuDOx5q%2Bp%2FuD7AWcJTJQ%2BMHAI5b1wT4KNmgiQESZKeITIuDC%2BvOa8BjqkASNMqXzu8msee5z2IcI6PkZ9Q65KAtkyiHxeOKDDOEeNC4BXPZJi%2FwviGI%2FQAdDBw2XxbfA41zBWRjIkeoVo9hUHUrkEmnuuZjRUBKghWYhJ%2FGAJikPFEiSmuRhkPwL2ykKJ5Coqemdw1FkzW%2BH3z%2FVo4sOjPHJO6GX7zz5KbQklL2mgvNmtsaq5pAPBdk1LLEWOAqtLLe%2Fme7f77CcBdIcoPTFS&X-Amz-Signature=5cb4f0f47b9cb0063fee086acf5b9aee89eea3e52a6f554dda31e53dbdc41d66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
