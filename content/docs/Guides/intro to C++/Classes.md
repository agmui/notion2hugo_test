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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTATYVI6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHcqGSdpQCFQS3YdH1IGpTMsbe3mAfsIHyYTIA%2Fgb%2F8jAiEA1Bewj90ko8GfwY%2Fiusc081FoqJ7%2BsXVYKLVisxNCoW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPI2M1UcBMrPDau7CrcA3x9FVkSQ1qp9Vd14CGIC8V0Z126XuoB3rsEtZDuAbonq8uyxeXCeXmZainJwUANJMN%2FAxss%2Ffr8As6cU7CrfZvAVov7lhy0PoEq6QBH9%2Bta0yYnJ7ceNYHsELAxGs44JEXM1KrMO%2FXSwcxtZQQbXlCohUGmzEyZ68vKTdnrdqy5OnL2TKyc2aqqWevkPbqQCX4B11mB%2BtMomhqeaJ9FZmyCN9v5iOsFDYRzimAX23QH7%2BBd26knMjp98EjBPl8yX3BN40x%2FpjwbsX8ClxDEzJXVqBbTkzAbD14mWM5gjZxDhXbwGGSGTFDvaRp%2Fv4imo2SulSb4kv%2BD4yW2Bd%2FZna7dE%2Fgv%2FwlVTPjnYQih1a%2Bryfhi9kIZyEicCUIN6wT9apGkFdiA94W4U%2BV3HxPVbTofGzBgi3q1%2BPEktmBx%2F1fOJN1F5FSLivqmwuhGUhr%2FKa%2F8CrAS1n7UFEDvs%2BFlbyFtGPEux4yyj3UDQFP%2FGGJFXfZtjF25npqc7lwyUdmGwJ6s32mn1A4vnN8MP%2FC%2FZLCMEKj8bxztD9O4LmZTAQcimx7pxk%2B44fq55VelmihC%2BmJY0Z9TDs9Di1816qui2QZWyE0Berz2aC%2BPbcFnHGI%2B3qWvgJuhDv7zk63pMJfEx74GOqUBpO6KGoXb6LYC%2BAZqp34woJONW0Kwepn9yQmKv%2FozQFSCenig0%2Ba50oxcvSqlEmldXUMSQ5IiaBp%2FbgKYUt850iAhpLz0PSjH8LoofbfEqCGNAYoxrXK%2BJGWJa0pILSL5M9fqxzir5M7ZWFcU23EnJtJZAXQeia7052jhvlX8JcqZDoXZZK%2Fh0jKgQxfiuCYXValz1uZsBRB%2BQ15LIhTzpgH2zVDG&X-Amz-Signature=ad57d8e687adabdef0f6c9a784a0881967f0899ae2629d53006d10333213b6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
