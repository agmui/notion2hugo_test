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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJXDFAQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCrkfE5hwl%2FB3NihCwXBAHhkFQbxBVs2ijmsJ9nUvfiwwIhAKaYJkUSu6ynHX1T%2BoNqAJm3QqjIEapLi09TYY9YR2lFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5V02wxCookRf%2FmV4q3ANIKRHD7vcd9RqlGYcUrmINKa9MDGFk6dTEh29cilCncYHAXTFwujbQGA4zh1ggYnJunDIV7JNmVVW2KPm%2F95JZC2spIQbUQFW8Bap1aQxXki7ZIq%2BnovXhayCrCGDZMuTuDV1ET%2BBSd6pQ4SemsjP1oJdt84DNMnLgqPPQwUISinetPLkewqTnIJuZLF%2FM%2FE6dxAD5FiFKPccmH2%2Bd28yUdAc%2BSo%2BK%2BZfJ4ZDA%2B8KniyreSHzx3dDdMD8WhuY90CfTHShMbxoBgrfqW0zSRbATrZhwF9rzt%2F3%2BBnQvkfhyla6qFxnHvr8TMStNu23yiHgbGn4YdA%2BPsLMjcXyUO9iVfdILqsRnKuQ%2BctkMewEYrfRWKkVIETl7YpQoFbRDpjWWnwG9mqRJTF6EyBC%2FJ19fphxPVeHEFH3UeLPSZ0LsQAMdgZZU1h7egnlL6FCHp9tl2S9CWo%2Bd4z8hiY3AFBYzoiuVuuW%2BA8FNa%2FMmQp5XQ%2FTch5U8y8Yr%2B5Wng%2FVVKYmHsrKqCNvT0ifMykrWOxO5djlYfqi29%2BAsUqBRwF0gCFlXddNFTdOfQDlWkXVvJ3qG6Bbq8zQfmnUwsKmSu%2FPJ8FAly9kH9WKO5woQ%2BdvCLWjv5kIsuLhTc2jFtTCIwp3ABjqkAdDeAovz2QDka2NDS9FhwCi0j5cPZIh5ZHTV6f31KNu4oi1KRE92TtNHBWo%2BlsEE51ZVW0A%2BHqOpqGOb1dpr2jWWmLdNXRyCLU01uOz%2FzvyH6ffz0loRNhhnC0JHhBjLARDQZvvlPZEo4GO76gTMGrVBfUmmzyWeut6jnxLwGUciBX1DXrGLg7llnybENibpOBeZ%2BdBFvsreAHlQD0NNfYJpEiYh&X-Amz-Signature=b958d99a260f23acd021b50b14a3f5e0fdaa46c39f25e2647378669a30b7db9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
