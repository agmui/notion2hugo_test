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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBMTHWA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGmVxpBZm25toyrOamkXXrXr3lYo%2FwEjSRfdfJFFiFE5AiEAkRDnEptoIcMI39uZeIv6D8s%2BeE3zN3c2VG4rZ%2BKyQ4QqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiD3GHk5LwH5sDlLircA53HdsR7OXY1QAs5Ma%2FRtoWvCQELogkmQgfZTluE%2BWgCJ%2BW%2BC6KdbJ4b8YbBhH9PEksc8bm1uD27Eg143n5aGW%2BUb3UgM7uyZuh7pbiizslauKlTSmqMeq0eJG3YqyZgMLofM1KJCjN4TJUT7eU9Z7KbXtW1LWiF%2FwTFcOzWNFmxGPEszo0c2PoS8utBRtPZjcgO7%2FZ9JWwmn31VGrvOywvrVFEWYYb8Edi2mdeI7LsNQH0JELtIgIBC%2Fz4ZwxD2b3r2QtG3Ov%2F1eikOqgVshwcb9yxgDQpP0VsIOqlUshQ4lCtiudRyJkQ1wcuaTb2QAoAABT7rbENuP22H3F9FIzd7fvjWR04zOK42l7ejEvgFDAdkh3s0gLIGfCVpuQoVlVdRSCPN3JKYDMsNlm3zFtvkvGZwUli6wZ9j9fZWHQ2JGCftA6HVZcEB9pJxO1hEO5%2FSPSpjzTe9iHJe1PmLykUC6Fxe%2BRcRuDqeMYYIATobQkYtMNYe8yHbjNn0CXEEzUycU%2FiMw4GqOVY%2FtuWd4BGdPiMAJWmcfUuSA4WkVEaANa9aH5B0uTHrj%2F6kntBU5JcT1FctVdnfmRrkVo%2Fq24FkfqBbG0fgClRARgh5Hv1PLBc1f4xrUPBAfZVFMIqq0L0GOqUB7KQjhJ4Xj3UjxmI5r%2B7fGlDPj8%2Bd63wieKr9qSKaQUtP0cCJiCFvKgVWxsHq6Ah65%2BIxBfATTiHbPRzy9Ekot8x2HYmozwQNWvR%2FvxfPCrsc6ALdm3%2FB2eBeN50kAf0wdIHfQ%2BiTqfNAsOR2DpplXacKOTLXM%2FwML%2BKW8RVeSoF5Oi7JqnoElTrl0jxQVTlgrnlLmpgNFP9ZDZafIp%2Ff1PoO6qpr&X-Amz-Signature=9cdc3fad8c5c2a6f63046bb2b3be4ad795380dc49382e70a8607ea8ae917dbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
