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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZICTIX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCWPMoz4vTRvIip6X6EMWhkOQa6uNe0ibDN2qpd6bckfAIhANh9RUSyZwwDp3aYztQkniNsBBc3FiWlepA%2BZ1Y0O9CUKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKZAjkcb82cwYB73cq3AMT8JhSnAceT3s4nEn9AfAurGquFpKOSRhO2mTf22jn2pyCReVhlze36Pvwqw%2FyhBqsFE38MvIFdf5VtTj7nFSQIqiSfflbfQH8OoEyu9yxODifQGM5cchoCMaTmPX5V%2FD6ARbx5etjivrfkj2OtHt2S0vf%2BrCbrMoAdafvmpxt82HaC9xm8KW7%2B5mCyc9CSHjcOoiZMENW0mV0zvVKdMAmNIsh%2FSQuXvLB7Op6Fa2fdDsTN93YlbzW2hXe2jIMXzedn7cmTebU2WQo98YAW5pjmFlr80pUfNQ%2FRKWitsA%2FUxJS%2F4gHezW%2FEstZidBVj7F8q9Buynl197yVM0TfadBhrCP%2B6FBlZS%2BHY%2Fo%2BjN3f5N079DWZCVCgkZxAaRPWS2xxrWzxx3dGBLYXwyq2E3XNRA1qTONZYhpQ2hXqxvCy0raVY8lyS2WDEDN1grDaU1UgqatUDJKqwaH4GJwMCP5HUYgaMik3syKBIVb%2BKfDbS6dCs2kVPQRi%2Fe7UZ9WqsSCqKdRb92%2FVs6KSsMxUHyetH7i%2Fd9NRO0Y3Px%2BaMoBgtAsMo%2BpmGSLlB0Uj2mMPicwRjbT7yulch4FIGVrHGE8C%2FVUtu%2Bd0u5Ug0XJ1UAYj4VnWgKU7%2B9ji1VpNYTCJp8jABjqkAQ7sSB2pWs2QUMK21Hw9aBD3ucH1l4l0HtYbIxW0SZjEh2PWS8bVVSKlRaTE7h1P%2FW02jkjcrlCjJQi8BFc5fNcyWCG%2BpZWa4AYWlXmLxAI3duwiMcB5BMPF3O1WF%2BorrCVmN%2FFE9OYUsczi23bn%2FOxUzhrm4q1KCdudmDHEEy0Fj8lE4oWfpBFxkS30RYn4aPDuDj1D%2FdYNASP3ikW9czP5i%2FvK&X-Amz-Signature=9e7d519863b4e15814021420101cd709f0037dac11ff37bb20bf39d1f9beff6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
