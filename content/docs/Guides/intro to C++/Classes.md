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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7UVKAS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyRSkmb8OoeOfOp5OkoYxT87zSSm9gArplGwrsCMTROQIhAO9N47q3i15hfATdjwc4u%2BsJiDU%2Foiaw1nRJ39FSeguwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5dVIOUQyp4rDXz%2BMq3AOqVN587q4Y7WTRFI5432R9Yu8vhk61oBa14Mi7A9s1%2BHqE15bn050ATKOpKw8oa0H%2FfoOkcHauhlpf%2FHFTbZ7NkPw38IxenaS0rfJyCVY2Oy26KLdzwq9lW4zU%2BxJ1HEQF%2BxyPnsx%2FiY%2FBpfP4%2FIZZSot2LaTWwFjwUmGr8p5PRtlPN3HbRhSrV0RfGEzsGTJeAEs9q68E95IWqt0Qt7ydmhCp5%2FtZEDZV3E0b8jmvaef71O9NQZKzrEMdpff%2FgLXdm9O80a7l%2F8hCcMI8q2FEMJZ3F%2FokbR0ihfv32e%2Fl12pSuuEOq0mq2kwLZR5fbls2aV4g62HVZ2yss4OIr6Dh4McbKDBQ9Y9ZyGywIdZOtx2V1zpPzv39yv0ARz33k4IVCt0ycMCr%2Bq1As%2BUN08NceKa6qnW3n3HyzMJ2PXQHdZxLcUL0Ok%2BcSyiv72y6kdreDBJvojzL6oS6L3H%2BtudPaEhnS%2FnQTzCfQWy6dolDPv66Wbhf4XSsMGPs2xN9KbQFZRtLzUE6j1Roxrkn9OkkCyGp52P6%2BC3o119%2F646o50itppim4NfxDHs9hj10WJzY%2FHQEniloWxiaq6UJNTx3p8wTvIoVs3kBHaHvUzuY2xLb12XrevPuJOnCCTC23eTBBjqkAWMRXoEuPcBRatvGslnB5h6QsBs7dHpd8Rt2tAcicIfAMVAf0aA9kX5qBvHePArwcXDtOG7qd41WloSMVc4ORgrhwXcxBLWDriJveUmZZR4nDDd2mGwNRKmy5C%2B2dvstipEH%2BLdcu4P5A50uoL4PiEQUquVxRRDnZ017md4jsYmWcdmV%2FPDiG3fwF02u3cMGxhXwewb44wv0hBOJ3ksWYB0xSjkg&X-Amz-Signature=3cedd5dc5641550b60820138380a5de4b966d163be2a85aa55e0e2b1f2c179c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
