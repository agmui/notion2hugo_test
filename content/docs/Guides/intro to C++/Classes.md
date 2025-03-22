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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3UYYXT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIAnKCgrxkzIB00R2LmYh9UxyLtOW355SZX3TfMOMossgAiA6pQ1I5JxdqOxOpwF9OK72%2Bv6SxZpD1brHpS%2FKG5APtSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvX6Lxm7MTboNqCkGKtwD%2BY%2FfX1MDDTBx59Ru54rCtJcRNcF4fcTCsziiOOM1KvjGXd%2B%2BBREU0ODh9tUH9ADSwkVCBFQvl143IortVxtBGgVOB%2BnauAxgQC9cZuc5NqncOJbluIsyCt9whNCK728YtuJ5M%2FQRv3Iw27n4NoDwc4e98pVnvKsOg4Oi9PrD9PAFU0U6Nbs1LXKW9X6AbswaGJ5QkQP0bsZqAvH%2B9%2FHVQd3Rl6LFkk5%2FQvpIr5dKCOVYbPtMs6Xrp1QXjEIwcOetF%2FPDIhC%2Fq5QaRuVQpkcBq%2Fvd41EBocuSGqs0vDx4kZj4KEuUY52YUBaewRPkb%2BGO5J1OtcgQjeYdP%2BCWZtof0lBbXDDqJgRdKgxvk08Sxh4z7yKngk9TxJBI5%2BNuloTmG62WcZsYAtNsEEIpuwiAGxWjTIf5ZCNZkA4X3Zu%2FzNX%2BnrXZ3fMpH5uOGi4VEDi2M0rgig76%2FYSiDZtbMnZYoye4iL52Jm7mX9AH5O1m9KUDCbjeMGdEFpYQSB5eN5WTmhqxNqZh16nIrNeI8ugMJizO0J71Wbk813wufh0ZfxcBLh05dj%2B3EpKHq8hQBMLLlVvIzGxyB9nOgw9hKXHFDwjHiIClQRv%2BWbXmIeanR24qHxKRDhu59bSbWSowouj4vgY6pgHL9Tmik%2FPxWsZrs2QIfxTt5XTClbeh0vRGgllnvNt167TTVQy7HUSHGS%2B7BIfB4Whav5IcLXpGFcVmBAmWniJym3C04ApVPXvZVurKFQKjkbOrvUC2abc6tCBzn%2Bda4rGQpXSwewNcM965GCX2QY4nRiBSVeJgdpFDfQG%2FHPN9XfN5ILsJlbj8yHYHRDivzP4yraOJearDKF6b6E1wT%2BPeVFmLl5qu&X-Amz-Signature=bb44f4c403df2b96ff15ed1a3a73570d55505d2cffb3510f48fd94c47eb5eb02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
