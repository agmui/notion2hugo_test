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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EJRPZF7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC1RcS7QB22cN5uJknV%2BFqNdto8jz29z%2FZsgkE4FGP2OgIhAPfXU0fmwBYWxqUH0bBMcmRX86OwJgpihENN%2BBOT2%2BCDKv8DCGAQABoMNjM3NDIzMTgzODA1Igzn%2BBh88uXaQHX1ibgq3AN6AfqFgvAZF8Gqo7tC0ti2ZM7dLXjEjBB1nfS2Us1ugrcSPUn0Rx7pVCJwrPR97rVhJYLsjaWlCYhxq%2Fd0U4jZy%2BiAwomZW000v4DILxBLjw3%2BQXGPHdfZa%2Buweo%2BPouR8UP4NOf5o5D5YeU6r9r9Uehw791yUiohL8km0qVFSR6R1NZTnH1MBT9bDNzBhrJuG9ttBSvsYFTZHsp8UONPU%2BgD%2FZQxUTDeajVQEEVGEiG7UlzSDDXUOANOCsKDVISxLX%2BH8s8EF59ubLKFkZp21bH%2B%2BhSQg3UPd0I3CkiEDgFQotZVGKQ5KK9x%2Bs3nBpwTX8xnBXzNApjsEsRPURAMxr4hPu0jq3ukOsN5W5dwmYFovIy4Gl1r9Ms3ky80aCyFTeiGuLzJZtaxD98ovHueI3Hec%2BGYSaV2rOhwojyy%2BWA0ByCIrefh%2Fqvs8VqwM6UVCXZFgXTb5A7%2B%2FCnQQHqrEZRt9FMPKvz7TS3dgSgSaVsArTjNQ7wVzoLvaVDfnfHELw%2FIKVziGu2rU0%2BpH2g689XbUC0UxTpbFUt0i8%2B9G1USstq3KgLxY2doDr1jUuL5U5bOQT%2FVaeWXALdlp9PxEt92R9dGIycGNO3JQpi9KjbCetEgxU7LB4cnywzDT7N7DBjqkAQbvX4%2FFpc5LXCcmeIdwuw42ixdDC3sMj3reYIGqPvdvtY2LA%2FNAo8cWHWaMw2N%2Bps2XxwlI1E3xHMv2qNZcrp%2FNT6DsYVXKC5kKATMzmC0fCLnbqzyCRxGsp18MnFYP6f7c7Kgp6meJ1UIKC0RVUjUspX8GdiBLw0FeuU4IHRPwRE5fY7h7DzbES6XRw3PWyCoJZalYRaJhynVKUiwLvkMIY1kM&X-Amz-Signature=056c1a366a99f55cd600a5134ca72015c8745036e76e1eb935f1c37b4a1a1237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
