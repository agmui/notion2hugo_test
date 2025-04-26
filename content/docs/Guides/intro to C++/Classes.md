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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TRY34SI%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1EBS%2FS5xzx8ZErnWJpcSQgd1d2sc9pdcatxqS%2Bw78YAiEAlsHCffaMyyszDJMbRIX5bDFKJ13rdEokIZHY983Sx3Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFrJ7kHgsztqiuDOISrcA6BsWTPz9H2Gpiy071CAf37yLFhb5aM4glgBBwARZH2nDyQ%2BKsrJzdV6ju1lmPBDr4fsNxc5kI%2FSlcMRWMpR671FlPLf0HvwLl9XdEsQosk6zvwIWRZIZBSp51GYF3b6Yp5u5mVYuEwn6qzG0dV9iuTpwVOf2LL2syN%2B9k3V07cVkNdW4HZRAdsxQU8GtT68ajbrlJSNtLy6MuIdUlT6n8rOwrgKdCjDy3UR4I1OyGhP9NcxEVniytRuNcLvwyhQCQs5RVNiGqMaVd9U59S3M0nho4DAkwNfGOKazrmNozbaJQQTkYHGKY0kkXhGAgtNToR47ZOp0F%2FJkVFw4whNkadtiwuE548202FfkK58pbzwaZTIoIG%2FGCjOVCypJ5NEPMSQRzR7PjgEM61dm6p2ZbKWF8Jll3F1MGPDjKZpmDrqSwVShafptk35pFPIZYdoRDu%2BhF8k91PN3KJZ45mzGKeRiqdlDnhpl%2FCCX7vd3exCUhwGgcI4RKb5whccQN0%2FXHV7Z5bUKvHz9FCk8ApDPdbcs3rsSYPjf%2FBZVQX%2Fry0WWbVcI8rNevUcUElwGMoUJ4kMjwtk%2B3f8gXLsygf31Aj%2BIPR5lNadW2jD8faM%2Bnu3QGeyeUhNQ7jUiRbuMJWEssAGOqUBJZGgv6AaVaEWtThPCw%2FMEKJ%2BnJyoj8SkkAL4UeYFv9UZMO3tqJARQIYo5NqFKyWQpJzpaGinowO7bC%2Bfv4kSkMrAUrse6ZsH26vSK2Qj25HqygVcxWzbIwH4zjHWGyY3WQGNIXUkuLUFv8mMcar2UABd%2FtAtjrtiBDmDsHf3bDeiCLTG8gOXYGakG78R0Q94b%2FnLzABHFx9ww06EJGdFC7f7FIns&X-Amz-Signature=030d7f3c32474401fb80ea96aba9fe82f1755f2228bc3bebec47a2841c1f30f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
