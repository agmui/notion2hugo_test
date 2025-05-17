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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUDVIMB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bvo6Vu90mKkHzyPOIduG8VWeZ5S6U9b5b%2BeNBcLx%2F4AiEAhuKnBvcoJGTET2sQijb%2BqPBxPllmh%2B9FhMCo1Ip%2F8eEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHEOh7W5z6RZuKSp8SrcA8%2FVxhED0rXAxxY0v9mnFuNNPOb4z345vDezJ1uvREhMipOFe0K8UASjkks3pjM8uf%2BvZD0vaAtdb0mH7CE0Vk9GOpBg%2BpY%2Bfg7pn7IaadJV3oyY%2BqTu6rnOBh9tf%2BNSPPpW2VrT7uXWmYZvaCcZEixkYFC78DsWSZYCA0ZRfin7FONsiLmggQezTNVQCHXmSwZdeDnIi%2FNgYHLKNXxKJ5PvNcvz7RyLKm%2Bhoqe8%2BzUqCxi3W4kNY9LN2OjNzLPBWjakuPb%2BxmETitwd%2B49m%2BM5jdnPtovhyh67JDV0g4IBxucYEsNtS3zMzaYAf6wiQmiQFDwA36Q8dgSGuRdVQj2Do9uuTI3EpCX3dYcuzaH%2BMTNwb7XJLvbyOGzgwWOoR54Cv8VLOMLznHTOFh4nSFJTmXqFBdelOu5BM0lAcvkDQVTY6AHjk6UlkGyaSB%2FEj4GSRAINlkKXlD5lj8HeGre3grrK%2BYmiIQBIKQDy%2F%2BanuGRB5dUFy%2FR1sclgpLUHzqjURCyAl51UX%2B7twkfXfqxf96D3DaIic0OD%2BFFo2Z7rUNsuzIMErwf66RQdnDK0qq2%2BcOFT046ISHA4E0mlwxOIfo%2BT%2BlYC%2FMrYoxYR5yEC6h8LnWGVXAB%2BR5sZ0MJafosEGOqUBAScFRbWs%2FZkHBScgDcFUY4z9CCJ8uZas8U%2FvdOY05PHEi1eLSP0lTraiJ7jT74IML%2FMiW%2FWFdFyMB%2FcOcBcLl%2FUSe3WfLzXooonHQ96dkKL%2BU0%2BPGqo7orlh3Dcaai0aE%2Bo7G5H3SL7f7By5I69cuer7K47fcqCP15gU24Dge6Zeg8ssxozK1iTwBw5%2FoZxSRp32Fki1GpIZtCwp1%2F8BMcwVV6sb&X-Amz-Signature=31c0e1eb86a05b14ecaa272ae53836c920ded6b9e9d8a0bff9c0d2f5962a8cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
