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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6FHS5O3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BVJZW%2F%2Fp8R%2BEr5ZHPQFOPmEEswrpOiRGzyJdjDP71NQIgboe19OxMNejuc5ifiluGK1MCsVigWCg9Jltp2u84jDMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLIa%2BXP22kUFnN1PcSrcA29Zh3KZF1a8JBZmgzQRfi46UHdW%2FzublNPfrc6sI7vsDg68ajDnPwqTNckltUIIc4e2MRAwDV67lRwffXFvMJQDR%2BjTBV0bjrtskoAYc00VIgm5wkuHnQUhQh50FFedw9fpF7lz5FT7GAmSEQP8acnpe5E%2BUUJpEIcbEFO5%2BKJevP6Qr3xMAg3A46Qxh9%2Fa%2BDesy3LzaDIebRZFdggWigtHEymYh%2Fn5INEIuPCkTDc31im%2BSLXfYzntf3ccFewHZSgfN5XAVoJpPgLnj26o5A3ZoMP6WuFfmv0SdiTf4amUPD4OjOX7PgKwk6zJM%2BqDtjE5JaV9S3GvOLdHox5WNoH006QsmL1wFXR2Mdxh5Ts00SDFMiNsMV%2Bw%2Bd8i%2Bcs245wHO%2FJDs0mY8KjcbQT4IhzoR2xEH51fkI5eEUnGJB%2BOsDx0%2F9lDC%2FlMHwXTtDC4%2FnTo0c%2Bmvq1cCKQfm7B72dBjAMETFxgzbLyqJ%2BGT%2BVq%2BzPR8BIhOeta6Vp3Xt1HbB9SViU4%2F1uHDsCyzTf4DHbx7dnr7nyMz%2BhANca6%2BIaEuaCATyMRNxl3IBvvczdAwbn9fKk9HE6e1RrodS6XGA1S2ICgigTLxF5A93d2yi6KQ0W%2BQd74M6mdAU9QKMM7K%2B8IGOqUB%2Fk09LRc2w%2FJyU%2FynHOUL4c%2FuLVvS%2F%2F1x2I4THeudX8cnKFcyicQuxBnfwQ99QJHO7VfWixGjOR5VsnTvSw1CnyfH0LhrfqHLy7yx96mxtHOC0iULhD9Zqk7UaLE80lAzQvYBZHZMuxKGEbdcBw2xTkUbzzlhugFcJvGJj%2BJgoRLlU7bewNsq%2FqRhOMX0OlJPQ3fiq7tquNO%2BPT9%2Fd9rOlaMlQSBJ&X-Amz-Signature=98ca4f156926764166c2df19b5301dd83c85d9ecf1c8965b9c832329545ae3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
