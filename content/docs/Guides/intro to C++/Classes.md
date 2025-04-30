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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV6ZBU2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCx97Whh7bYTdIHP4vucs9SQ0BpSujkwP5N%2BflX65pNfwIgP4%2BZkglpOg%2BKPTObTsqGld2ZoV%2BKcNBf3ZMb1quA7wUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFhq46rCpil0gBM6SrcA7I1aAkcp7AJKtqgIWkxmPJPFgzhFEuR6XFLES6VLeX9WVYAzR72thwCmcya8ZXXpEMX2hY17tVgk1vwknhEIqTaWkit6hOCuVs%2FfAyWRQEVqa1DPCb%2BPLtEd7yHTjUgVRYzjOj0c45KmoYpysuforO6MO26VtyjkyAE%2Fa%2Bmk9k9uDKtQfZ9wKt5ds2DR2eesup9jVp40KFAboB3patnz%2Fl%2BmWD4NFk%2FMgZIMokhsiXoV5ohzdYd0vKWr3q33eSagUVU87HHOBCEonqDdkvWH0JbXHIRNGSRG2iJ%2FQnv7szgWptCYHIiMZfnC%2BnkUnHKgyAr3o7ALjrFmpURFUrUFsXqdHNomOp%2BGv3FCp6FvvTjKd556Mp75%2FhzHV4GI8gaRTByTyAiYOzfTpf8mEooAvRA7LKOagc1gWOTCCvhZKDzbFV%2Fvji5Hd6rcUIU43uppu9Gh6ld44UWoNCV2xBNRHL5b2eWMWBpluP8ayq2tZpByU7dXLS2Rxb7oJIp9nzQhB84qbNyngvGPgkIRaPNNWy12oG2%2B1bvpUW6TkVQCzLJmf%2BNqJqbYvMODRs1wgDELIhm3weqMJWqJvnAmfmz4pJAG%2FE2ekOZs4r56kEFQXBU4GzcCvD0XJ8GM7TPMOSuysAGOqUBxM7xxAT6vltyGmvfxpx861T%2FhrAmiZk5ncaTbIBeDgLVV6jXurNZX3Sfd58C1Z2s4GhhDEaCw4g4DwlxzxAzy9rq3gK8C92GdGhTCkZ4SPJfu0meGofLquH%2Bo6DlSogKD%2BY4Aa4MQ8HF0yW3g2WOzKmtbQMR5467cuW3qh0tZwPH%2B4C1Xx51WTZ%2FMjiimM6gxne%2F8CHTo1UdZTFuiVfJVayBZL79&X-Amz-Signature=8b5624a4e9f753a39c45040cb431ef27b6ba5a2628c097cba5bd8d09ffd6ed68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
