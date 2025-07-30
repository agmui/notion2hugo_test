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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DG6LBFH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVXcbad3UaBGFcWyOvNfOHd%2BDkqSK%2FTD5ySgsHqR2ULAiEAoU75Ey4bVtu%2B3CATfWrwqt4GkyvMK7WoJGt92jV9vJwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzfFlnC%2BEpgoKVw%2FSrcAyrvE5BZe6dGN1KZdDznh06HePZHSs3fJUOnNZySN0QPcoJbd8hiFmUN3sg1b6KrwSJ9%2FwfjCs38GnoZBM3CLQ8h4jDsfEKYUt97q0fgJbr%2FNVA41WLj6eiVYXzN5ZhOnE9fPgqXeSt%2FZlgpkDfapwJhUBHsrRA6itZPU9zizBwhURKTKVq8l3y97LOntEqch8YRiVsH5Sh1ku3IWQzQp9d3siYJ%2F7emqp%2FEpNkmYWkIEKVRObkeI272wthKAjALpZ%2Fv3%2BWjvFMHMGtotduHwurCki75fsllm0j%2FXR5PKnyT1wFRIElsOgc7wwhqaGOgU7PEy24%2F1rlAHNiR3LEq88kfDGOjxITXmacWShrS9CbO5aCkxqLzk6KCw6Cmm7PUunCeXXcvs%2By85PxofwFNcxID3JutdBIHANSVN7oL7fNTnD%2FYgWy0lbsJvKcJHCtiuQEKTJ7Z3rIn8dcwUoDf9G8wp6z%2FXmq6TU6vquzgM3fPUO9wGT917g0TJ%2FroaVc26HFkoEuOtwK222%2B1vF2q437NDJX037W2V4YweNAma78A5%2FkBfvLXVDqkO0nMFSdgvlUPq9605p6lIj4sEorrluUpXM48EhAkwdHRrc1xRK70nk6IhBsGMIouqR4kMJfAp8QGOqUB%2BLTaNRLSKEmWVATukzm0f8j1wYHPBM5ZZybyPrlaqaNPR9wwaJWcYV%2BuhOMp2aKvKkL9OuhAseZkljWOEOP4qJKa6FNmGwRqOCPH0LiT6KBsmfGjtO4d0yv2UmXix5MM%2BR5A545JWhYPLhOV2rOVgiYOWxy1HZ1V31XLYoeLz2R1mLj%2B1YGSMFr19IqcxdwoBCiBjE88SGHre%2BdejzZYcXL8Jlcp&X-Amz-Signature=0dd6e6ac4664c7011fe6ca95342ffdc7cb0fd6d9ae6bc3723f4bd9de621841b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
