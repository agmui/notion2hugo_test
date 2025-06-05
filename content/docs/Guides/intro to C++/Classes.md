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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKN3OLVC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIG2G5bu1%2F7zRzICWVSdUtJIUbaTtobrV20PyEyIhNmNrAiEA%2BWLO9AEvEINHmDvaEdeR7wvZr0wvdAExYDX4DvL3yJAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJARwuhvjkzrSugc3ircA3M4JAfWSbYRbm7qmSLz9y0SoCS7WniUbZ4LLj2f8O5xpenfnwXjx%2BnwEoJWyz2RvRKUepmbCCYNY%2Byp%2F1qQciH%2BFfCrWMc2pJwtXR6sM%2Fa7Aq8HCiYx%2FmcjQaQ0fAPWNWZY%2FEHuJjtapuCayahVzvlPUaP%2FNoyACey%2Fvy54flaEXsbFYUJ0Dib89nrAC1%2FJgKXJE3dW4tKPszu0Aj6RJ40wJMIsyMDXHT7Mzahkvt%2FOkXAEyUFlVPFXNuf4SsnuyKTUglvo3Bt%2BlwcQOyvhrfXHLGQwTXufyFN6P95P8YH%2FDYP0YzkYvbaf9KQblLODnWAY5JPMc41UNYjsunGj3fuqSGXjhm7gyj91l1Z1N2LwR59%2BJbB1TM1XYfG6IzquvBZVBbx1qzvQaV3qr34z6otEbmF2%2F33WbIh1eHZFldiuTFGCpbapEFWe7pfukDW%2Fgxiq3kngVKnHFiX698FPb%2FLq72KRP%2FbQy9O2Wj0n7yz3EimXUVk%2BzUTziP6IsNaYk0FJv9Ihy7iuenSPET08Zvh%2BXbykS8h8HyMgQBHp0vqYDUDBWAuSYOVVp%2BSEsA3YazfV3YUkW1PHqyJtCRs1KyF8JPF%2BJ2sZFtLwmOUoEMj6VFZMHGAkimx6LHSKMMWMhsIGOqUBzenJtWAwNup3zOK91HjzXFUTzbhzb%2BolYlWsnymqVF6UysII7FmJkIlRHm7sBsgNEJOcNC9lTUs%2FXL44QD3s8evkEB%2BdjR8pc%2FZ4WrbkeVx1uQAhCP2YC8IHh7NbgfaE4V5YW%2BqYB1Rn%2FJ2kVXspIjhpdYSm30C88QqgBxJmM%2FgRu6NzEh%2FtprtVFvceusJ1hkDWNKgixuuMzwGwofdWGEmEkPyl&X-Amz-Signature=22051be2d6a901db673ca78674c6ce594d488ff7fb7e959026a126a53a7a44e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
