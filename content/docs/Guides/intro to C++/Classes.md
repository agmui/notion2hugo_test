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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WZTABF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDWIp5P0mVXy%2FLAC74NHuRecoNJaisG4GKuNgvylZQOwwIhAN4L0m8ZE1XcDs%2Fe0VjODpyh7gYhOfkvR8bRCnKXdTXOKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFf7pGlT7xU23lkpQq3AP2M3folp2z%2BFwvgqA%2Bh1SwhNawfPfKCB0KaAWtw21ssps5T6rbiuVtfbB4UQqeC8TYBLVe29wyFwdo%2BpUHXUbBn4bvhV1j9AEMvxOeQggzIg1EtCGXtqn4h1UjO2gpWbjlGLyRg5O2%2FZlH72Ke1Kz29%2B3jNj%2Fim7u8nLFveBiHowCrrUmt6LvEabD3wsD7StPIYs8DtCqbv4rmfb3wy5Wi8IHE0IdhtVJjXLyZIy1GHCAWPu1YWZlR3chtyGgtRCu552YV1v1wpp7b50EJTzYoarYUAa09IU4UuLUpNrffBUuPT%2F8NNDXer01NPL3ZEOcBkcUHO2BslTFLaHRUAdDxgwb2eWMbJQE8SJbY3xsfKxOX4L1pMwRtMb6VlS0OB1Juf5FkQLxXjhtyFOo1mkpNTBf5sbT2e%2FUrDClkJRpvfB6Q15UKEDbOFCW3ORWp%2BwlV6X8AQ4J3%2By8V5CKpFGjav%2FW7R7zrr31%2F%2FzvVqBAYLDngmt0UQp%2FkOWlJJFx%2F5s%2BCcjbekONopR3%2FDNp7qXxQfSUjgIcOui42oG4q%2BeADeT6i5djWH8DfQhTttPg7Up53SQzFQ62gP6SlZjghZLnVqvKULH3D8%2BuhiAiSIv7nUwdssIB4%2FMCbRTKjXjCckKzCBjqkATcNU8edWSjg15J%2FujepPyRYTl%2BI1CULwd6I2NjQ9ACEKFKvvM6shPWnfiS9JMDdS%2FD8W3w39ee0WsCyuejW1t0lDoFU5wUEmOlBUMi6d51P80a79ECGgSeSquDtqlim44HcqItUS9XSsRWoHdyb7A%2FK7KoZxvTBgR1cIzkqwtYqZqWofFU9%2FWHBM6CiQhRe1T0J6OBhuApXdz4EBl4CnaiJzChi&X-Amz-Signature=5573080d0264f82178ac0e688dc9194e20185d2059bbb91706f35be79be5efd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
