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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6RMJLS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGB1mgFoDMfeJvq0lwbACJKf%2B9HSN7Vrl26Wc0G2pod%2FAiEArbrJmMzxEwUt8fmBZwbpc8KiQQ4jHpUxKiRKAAJZQp4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIwbfNib83HsSdUUpSrcA4yJDuE7Qs9sbBFLb7Vkp8gINGCle073gGIOFHQmF1bZxohs5CDf075BrOCDKf4TD%2Fs0q7k9d7zQ%2Fqnmj6tSTwIYx7CeLxUQD0OWKdK9Xwh2REomRxicqNiL7vfPPlw5X%2BVBedbP4ffa5I493diJE7vUTvYea6bamy2ZLiiUtgVaFtSNrQUahgE6HCwuOqJQWdOMDdxQOIe1HrHjKCrAFoCwh0KrpsUAHMW0Z2wUQbC2pB1QQowDF43UmwvwEpfec1ROgJyN0oHcGGt61qW3Cf7gU8FaU2OKXR2Q7wo5oyViRpuOcqDr%2FgZ9js1wov2%2FrZyKQlz%2BtKbaCyO0JnYCsked%2Feg4XSiCtQeGbRk2Nysed8ADwBByZfm8ZroxKyv8%2BaMwlopdFQFAvyRptk1vfV1R5FVNBvK4V4lwJYnWQMnppXJ7D15D%2BGyzHlk222zHPLoXnKBcVjT6BJcS8SnxwctBZMOkI6suul2DX2sqvKeToRgNABkFB6cFUaSPOTWDrcMJ9ay%2Fmf%2BIW4fkfElKpojaBwXgBiUzlIQM0plyuRYyyBJACNQkoDJVs%2F3bp07p2b6G4Dd8VdkQLJRtW%2FWbQFcOcWX8%2BlzRM07ceoLL%2BGwIT5B4320EouVMfHMcMN%2Fkv8IGOqUB0l7nHySXF2HKDTOGO0VOJeoET2j5O0n6XwW1CfJlS8oFQMf3GUsbsrG%2Br960ajchV2e6oJPEWRKQTRofpcVTUOnnhtTPH%2BOzl0Iu%2BTO58C6%2FcuO%2BPx1ojTFsa%2BFZ2Uyv3fTOnCJYk87JK0n55uHPoyfhbVvyvl9efiJGrUXn6fjj5M8A%2BN2ifFc9p4pQBZPHQsv8RY1SkDnftlZAmkp9RQhKr8li&X-Amz-Signature=16112a09d64c78f13563cf6dc13bf5ef3606f6d8509f5736152b6dcf55f58f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
