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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RBUVXAT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM%2BEQax8ujQBmNdBvU9Ncqk8XKMJBUIw9dsEUJ8u2ILAiEAlWDfL5gx5%2Bv8QZvxbk931kcNFjYavfSxj4A4GE8uuIcqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8OBD%2F8839dAarHyyrcA%2Frr%2FJjH1azQ4snjVsAhZbpx59tLRPsXskZUfdMmmSvGgnVy55aHXj1RwSs3xNAoEwiVb%2BSQHnWY%2BLyOyFgzWUBWTdfunPgQbtxij3SK0DNKHBW26jDfpvo%2B0et8jU1YjUHkLKCque7yg7e21eDDk4nYVtNqoHHWtQpLPhR7BRK8fU5FHHqXAheEPwzkP%2BPhBVo40N%2BeFyS%2BdV2nTPNEHV8kTlSM3pEhAgJhN7VDaIh1qZBHGvp%2FidAI1FKkPmTPPbqPG%2BV48d0Wf5tEhqFuCtS3RTJIBTI%2BRJ63oE1141aFn1eCVFeiQ81hyUebE5sht3GJcsfJCgUeV00TsEcJhCqglP1kQpSOdB%2FGEUHrHAX%2B4DX5D44NaRRFzIY0pj32YwnM2oiK6nB6UsP%2BILBHRACSYuNp0lQFnpE4TCncIGrCQ6u4ISdjfCuXh%2FjvD9HuEOFfFHZdmpvSfrC7fQCll%2FG6ZkSUfT%2BbrHkakxdI6bAnIXD%2FVTr851kXkaFGC7iv6u9R7UwCja2GjbIc9UgsTe%2F9Op5PBVixesvIA6h6ZC5AIlalAR2tjl1h8f%2FChH1E6BEgHMLu1guInXMe7evwpmWv5pMduanoMRLXD4daje5oDnH7kNJ8JnaD7FH7MI%2FutMQGOqUBM1kXQ5t2AS%2Fo1xHpKHqNWu8OEYb6zpUcuw0d2Nb%2B21%2Bstk2ZuG%2FUt%2B44zoYC2rcJFix%2BKnAyZnlPR1QI6NsBHy0BaaEDO%2FkkBjvlXh4f5kuaIk%2Fp6%2BWuwtj6lhHs9RHsBuZAM91g%2BVamzo6Rvu%2FhvfvCqPb%2BtTzwzrS7J5%2BsiXFtXv2sZSC2VnEgAqnnRbT8kH2LOPflyHAKXhYfh6uHUfWV4QkB&X-Amz-Signature=e64950049ada91f79e2c08669ec8cfb7a270afde09f3241f73fcb4aaf661b361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
