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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Z5QPVV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2B5GHSt6mgvfbrhFqfwfkxA2e2fn7kHvcD8RMsefe3wIgROHrio1mMM0%2FUbP%2BdVMqyBQzWTvOYArIseaxEt%2Bc2FYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbwLWTgjamG%2B4efPyrcA46tvmWuYYIT8bBFnY67xioaCRBaKLpl6ypnzx4onzXCU%2BWtEft7zxCGgRQt7FjqWi6dSRc1bIKQN2Fjdxj0%2BHWMHEH1rhp5Um7BTAKODQ5lXw54y7lH5K1Z0g2VV%2Bnim16XwqT3mZRgJ6iYs%2FTMQH1mk0hKI%2BVwQUfAwwHSMfwZQXOsCSmYUHRaYmb%2FI4%2B4MLaMhcOjV3ytRPtTyS4WwuZvWmxvZm2t7nuZf7E4O%2FvStH7zjove9HqgUsQB2VOW3GIy2l9dKj9BCKQ%2BSDVsPcjXldDXLpeC4InbH9GOc5lpD98%2F8uXCSBeamS1JMWGIB7tUqFFErxFlY4xVnYay8FV%2BHSyETyGxq9F9cfvirKAWxaFsxA%2FrxTLfejU%2F%2FEhX82LrMT%2B2xDxuDytcyIeNzTkwYa1uFY4sXZr4sh1mErVEBb%2F24EUXKrOQ8LNoTPhjgASLk2fWtkcGPUKLz%2B3q4smG7xRgDfSX45TYIbeFZMCBE1FFiirHF3UFzZzgGbN94qz7JZpq%2FQj1cTeRSnF0VB16A9OdohetgDQvCciCGsPJjz0Lr%2B4YMAgZPIn6zsK0sFfMDFltInyEjQmnc8MB5hCyT6NA%2FZ9mByKJS%2FvqNXE1EKatLoJX3tESgbCyMLvcrsQGOqUBAY8KrTj7OrN8No0rGT%2BjD%2FN%2B99wAk%2FyhHFnDaOwVVblGvbbm5EcLheOpNk39fFfMhLyOWAK3CIAVoBFmNeFm4IJA6uSI2VdgmMo3GM0evWI4aeBcDR6m9jdd7x2iNbf7arsgLvsxbUSGLKP5dUOmHwXA%2B%2FtoivWByyLSMZh0R710%2FacmZhtH%2BLJ5suuYiNp%2Fp%2FQl7bmfIuYeunIDjc0tSOQYQcPU&X-Amz-Signature=ba781078adac8b469c08ad223c09f471da6788ebd2aaa366af344aa6d6523739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
