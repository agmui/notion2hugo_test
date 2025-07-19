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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBUINLQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJCWpfGpAXV4HuPiYyvy6dSg1362gpcz2Uh4m1oE9ZSAiEAkiW%2BNZkWyzCz69CLUVara%2FZxGEP7WjT4rTP9wLzUl5wqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrrGEHJw5m3n5UqSSrcA7VcoCnZO%2BTJcjvXv2OhCux3mIzkdcjQMngNHPBYGdYN62ccTIwn0piMxlMHnQKc6kYd7IIhxETlmxm0V53A0OucjR79e3Cbqx%2F16p2BsJYr8GvmFWSoCxxctyCY6vs6XCwTe6kBkfGOHfSSy5ryJdyFXDLjRfmhHRIwkzApB3lPGcRoeU6RFk9AxxG0Q1hkx4e2fSn%2BaC6LwRkjvcDm62G%2B6k7%2Fz6LoigxcutKhe6oihublBLex%2BnZcWydDKKviVvNbavxrpkWe4p%2BKXUFIZU%2BSG2Fd7O9iWioH6%2BI%2FMkLSLMpZ2vvAYvi9D6FdCJ2NQBgkkcJoujFaQDTkzT6rqa0I9xD8I9Aa%2BJedtoC%2BH1k1kPvfVMmuuF68XTvN%2BpH15jPmu%2Bn%2BJ%2BvMq2EgyCcru2FoIenQ69RJ10wU9X7MPL1oG612fhZ9TKrROjqTNgStBVPxTMS2dYBvnfm26jVxhRBJzkJqof5H7ZnmIT6HLD3XQaJzfZ2FbQghCRDIXfbATABfrViwv%2F5FoxXeyF0LmGkGFkI3lprfQjXsZ8doUMpCWde7jVcrqmTrVIRO3aiuWuACa0l3%2F8U0hWcOUQyrV%2FsRZGpQwZC9UJ1i28aYs%2FMyzvYTQge7d14t2VSKMPTp7cMGOqUBzkDq1XzdS5Br7u%2BZXbucWt%2F9G79wI6zFMzDXIRgX4RmnUUD05GY3QO0a3xVVpo3z%2BnkboQIZOZVtCaCES1mCHjjvhn74VODZvnekdsz4IRi5U8Q4w5jTTy7%2BxQrkKIJV9xfKQ8h8PQVJaTqtO8nskrOZ1w4ISaOjOrNW0YqGAgpmfRbGRcLXCLGsyuZNqqu03iIrknkitCBzEaM3rs2rIDsCrSnO&X-Amz-Signature=99c810f2caa31d6ca5310ba2500cedff21f96e18040bf1a396ac8384936db0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
