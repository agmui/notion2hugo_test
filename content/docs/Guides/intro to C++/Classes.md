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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GCEMQN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApKkpElS1s4sYDreCQm%2Fh9sqUbDjPNc%2BxNvueugubCbAiEAiNj2F31Tj5iDJ0JjdoaTRMBiCjJeJyg94yUG4QQT8Koq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK1fD8btC1Ot%2Fz5%2FBSrcA8lDS2onsZWTfmf0LOxp7XnWXJe3bo8Zs3otmP48%2BF8gSi%2FuXHG6z3KiQNY%2BMuAqKwX7N5kn8bwu%2B6uVlH1YwSSD%2FeoBf%2Brn6FqLYEVp%2BMv6mRBwz2Nz5dsxV33eC56FkYUTm5GNsKjRQrYSdz3xRrRYQlXCdM5AwloqpE9n3cAsIiXvUhfyR2nDGpOkgWTt6L0pDBy%2BrwgAdxRtLJlP8hOcSUqtiRB5NIpFK4YwPHs754fnLEWDcvdjtkpxfoLMQ5ZB5tuzv5RrtWcAjxqczsQ9K3pnekGMa74UldPvDT2CI2%2BsIEtXxyzsnfDyQkHXnhEK3x1eqP7mGG%2BD8a%2BCy7BrEvZz%2FHTBHYb3IGWy1oHs%2BvVgfi4Oqc3qrespoMBVrUh6PTavBIdK66jsq%2BHpWdt0x6cV6fO31Oiqpg6jFFhTUgxGRocU6kKXVmcLQpvvvbjqZ19UVUlZcf%2BFnoJPy0L7gEYVYvdI%2FE5Iy6KLslwpM3mEugr5J2r4viqZGKToIBrElT0iMM6aK5TV6z7eH0tEXikU%2Fcj7Lq9AH3B8KoOP7EenyJz%2Bixl9CXG7BLpA2oHsXB9gYPHRh4BweQkrvY5%2B7CfLDiSHtHXPzuHng0Cj533vg59SrUJhiAzEMKKFub0GOqUB8zWIITsRckwksMo1SJ%2B3q%2FSHqZVp%2BTT4J%2BdEshB5ShNH81eEY6nfV%2FOrI933Xa8Aohr9Ii2KIPXU4IbGBoBrLG76IqXzxZW1aodPBBkBdH7jzGDAYOd85cNsLDK2fuDoPNcgzVp0e4M9%2B7wYItVC%2BlOvM4vn2F3%2BoHfU35w1WZSD669YRLaR0oxCZEi9XYh92%2Fuj7bpbG5hEOnQxUeBjfMAHJ2hS&X-Amz-Signature=0daaa92a57a7c71ff48801c249c245210ed755574859bf1e1e381713f59bac60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
