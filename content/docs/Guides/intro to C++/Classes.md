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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RACKTIP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDu1jjrsT%2F%2FnwvaDTQPtUVFVs74Q%2FDoJX4AeF6lvDyleAIhALogWD0jc8TRLcxmECpkrqUsZiA9xHJ6UPZQjz4pfNaaKv8DCBYQABoMNjM3NDIzMTgzODA1Igx9inveapocVRMSWh8q3AOhS27IkJXClitqd1nzm0g8ECG7CW4lPV7AV8PV0yjERhkr%2BpFx2sF5Q3Dh%2FNsa3OQnZropTbW2Nz7mp%2BoE%2B27C9ARC5C4LrBtEib7s%2BE9XdeCp5yX9BItTAVI4QSDwhVfW9VGA5McYV7DsuJRn39enKU8sXZ1y6zrDZTEAKp2ZFkNd5QOJwvwAGsBFsKTFl%2F50%2FNndfTGiCS0sqTUvjjAo4VwBqH%2BQBVAWWIunCWycbWDh30zzhj3PVyAXjBYiU23QqG8Y9Bv8pTrIm1OZAhrkz%2BRsaI9mW0oXX%2BV2BzSOyWlyeaJMjK0gATcfBdo9iw1EDrGoGUigXHqnRYQj12Raiyj6q1alpDU%2FWnMSJjhGruLpKmgTrJRB7UooQY%2Fp1HkRHgSCs%2BIaDH6v9%2BQ8O1fQL3eJkZ%2BFJ8hhO%2FFIWdPI3poj5C40CN2orRVNeNOZ%2BKII%2F6j2OXWRmkRQeubaMAtJzcg1jSlkyDf3uNjI9MvRolLVKF0jvm1NOdWZdzFhNDj73E42rpkIFVNCSdtKMXK0Hc5GroXxPvk61grR%2FEiKaZbh4DgktvLeSRe57Y6%2BXNoYMdsOwYgfGyRBUEoOkAsDsmHs8aehXibGIquCnRmGxtqF1r8Yriidr%2FtxJTDK5vvBBjqkAV3bxZlELcNGLoRjLVVmyKtcDevURmeX5kOH4f2fgI3hch6NDaqO3SYTe78XYlL7%2B8NpMxncm8OPtYIEg4f72M9dLp50yJU7VmkahdgeEbvQxSIw0VDP84HQdGzT5WfQqKyeVXSOAOb4p0vhdkzo5ytOAATOrEuh1qD989cY1lB74Gmr5FNMfUlyhZpdKy0yy1zT5hMl4k%2FRYKm%2BCuJ077gZX9aY&X-Amz-Signature=b49a4baa08db819deffa225db175760d05fa3f6ade16d63192ee7aab467193c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
