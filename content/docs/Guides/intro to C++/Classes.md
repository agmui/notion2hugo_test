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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBKQ2VT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCvDqWsFm%2FSpV7vd%2FR9fWQcQCQG7uPiHanmMLUy9DmmxwIgb9Xql2NwI%2F9AGBcBoJB3PMH6cHLmFLw86SzPtYPRnncqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfU%2F%2Fdd67GLo7fGPyrcA0YjY9SVylr5OH31dlX3iup8CqDsobNI%2BNV1to45ZXfL0d3T0kJxXFpBZaQ3BOBEYdgoV9YxcwWXpl4LsYwtRNYfrxB%2FibsWD2z64RG7eZgY%2FF9iZdrqxPot01GC6xKDs5dnsbop0lIGbTAECgufoeDBiQJkaybi6zyxK%2BcQY1zkGbzHHL%2BkZZwQc4dbRtYzwaPgkSndMPGYPFC1F4Vsmc%2FD3PcOWFqlIp28ULbTwFSauSX7j1abH6CslLB1J8VYR6pqkpQ0jC7zvrc8rzBqcoXtWPg%2FlEPfWJwPYZtcQGbk6YmMRlyhO1uAdAJBW6eEmvhh6TnBFztk8RHAVZ2R3dtL7MlVev9l9sbpcxzIzTPwq0MVDk1zTJa8RRAD4%2Fp%2BPzOqnrN0gHY8vrS1o2UDDAwRMVDGs4Q53lYacA%2F4NjHRxhRH36b5%2F1OVD%2B7Ci3NEHyFmxUARd6WGhNlCWQt0Qjlxw4kU5R9pk427FUJjtp1Hi1mEKOgaRsmh92sDTFodQCyvHL5nhdVItXNFUyyl8p9m5MX5jcKMmFUCzbAS1o%2B5VlzS5JKFgBPxyz8%2BTu1MxD%2FQMlGwfF0j8y%2BYccecib86Ohwqof78PFanBzPVaM8kgLndWZW9xEB5Fp8dMPjGk8AGOqUBm4kGwlntsBBA0ujOYGnLDE8xhmrS5mNvO9eJbgibYJM1WXTSFvFNQ2RZztl2owVX2LzMr9UO1nRqxHICeiGJ8cS2fPfiOdMLxINUmXdqogU454ZvWgUJ%2B1o%2BhMMD2esshBTZy4RPxf7hw7HJDmMyVvkjvmkFQ%2FzqJnMeRMRlAM0vDCbTUpN6ZibVC62UhM3G%2B21XUrkmPKle%2BJ4FQ5EDtlr2Az2V&X-Amz-Signature=bc4a2cb6a879275be22c8429f8226b356c597f07835f7dc7aeab7f9d558a249b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
