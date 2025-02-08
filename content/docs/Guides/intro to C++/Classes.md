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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SMPKZ3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDq0N3tRByD%2FkHXOPnDS2JEacIenus2xgP5o1NpUFFELAiEA6vgEyHXh2Oab7r0IeyPB4ZraRXNP1jv6oogQZojdU60qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCz1hjeMX04fQgJ4NCrcAzH3JubaoyrEPqC6pLXlhDY9ucWdJ1VFiXIISF9TICY%2Bj5PZCpe2vjLaz5CtmSc4pV1puJKXWcg1V%2FXf%2BvVk1t%2BPWK4B%2FZMoT3OvSc7SnollikWT4SW3lbB1Cj5A30t%2Fih6z3OZ%2BgHt%2F5KPrROLy6vcmlOQnQG8ekREambk5sjEREZHf1n9YusfVEisnCUmIfQomY5nhAeyHiGk%2FjPq9igmcGBBaL%2BmTErQKI6EhxqGfU4gospl%2FX1D3ewh1YsXhrbbCvr12LyBL35AtApWzpJSczOlGS4i64oUMI31bD7w5BTxVRqf%2Bt2YJ%2BfPEbMCyx2L7vutMIoyCep8f1qLsZ5ULwqDYgap18rWprw2XRDtPUTYmFXWwlbD93Tl6Bllf5s49C22EHguopSFqFzBy3BJ9kfHqhN2kppJgaD1kDy7ODyZ5rAWTRa3%2FX%2BqIzqmbO1tticvPr3bBZZDpaHEC5qkRMyT11yWNc0m2IrVtcTq8PfFIVQFqVY5vpiluHQFhVp%2B0Yw0qgoHOqbv5wBCSDZ1z60%2B3q7U5PenvKlAo2E2xVAy0ZbpTNeKG7buRwFq7ZXfZUtiogJlZSzLcGmMWXiTxazOoH1NIoQslWCLPK9FLaxvkJ7%2FVG9aiYL8fMKKYn70GOqUB1nrpnhyqB2MgvWFCDUpUrnjD47QWvy6OtGCX2fXhmmMkYvDgcwAHDAdCCHcJbmo8%2FaPYEDyYaq9VKVeTk%2B4biQSx9pwsWWxRO1ER77ksFCui8FvhJVhsvLecY%2BUiwdImeP%2FHeQfDN5gxO%2B5mQ9lyW3XoyT75JeM6ceDOzD9pF9QlARgcxqsEbJPM2FyKtSrmmLul5d6uiGTqe80MyfDtsO18yJ3G&X-Amz-Signature=a35f0177fc0077e79f2ac7220f2920f38e362e912d231f301f14eaf4e96ee228&X-Amz-SignedHeaders=host&x-id=GetObject)

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
