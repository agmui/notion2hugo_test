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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2Z2IKI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4Nn2mgcLaKoux9dnLlv9Iw%2F2xNmdKum7HTm0heXnBewIhAKEj01Iv5qARL1GS6EAV0jAYezyYcM%2BqB%2B%2BSFkNpdwMPKv8DCDQQABoMNjM3NDIzMTgzODA1IgyVgdAVCkUaValpqIAq3ANLdD%2BJd5OBKCn%2Fge4WDZjE1CU%2F0rZO9fHkuFdkJNh5WNx79wkaFyAc%2F9F2E9grxlMw%2B3x2pSMy%2FiMNUL0npkesxDLMtdP%2BV75O%2Bja9hxmb3d0c%2FFOboA%2FZKrl8n4%2FofGFVdvVFZlmHImAFDBZrD6MEaEqro6fxQXOJoY1uNQpqkM6NQ%2Bf4JGYtOlRuFv3iq0XUQyYmvSCJoUEFOZ6BYe3GWDU8WyFbEcUKXTwDLRiLqERr7l3yb1UQcAJWwFPtng3HJSR%2B1vMP55LyI1CbZDtlaUkLffJgbaXmYN3VMZo83WX4%2BYgoi3K3ei7VbS6MYFVLJmGRKMttJyH%2F6IE6Q%2B0bWCj%2Bk7VeFUzbIuNaZ%2FJIBbyGb%2FnMQUpeQOafbGT%2Bi88xkVOLsKoUQHA%2BO21CER8RylWGHzJHy%2FJ41pEc0Atgmxojgb6yaLpyY%2FMXK6Ie8GDTEjI5vUyTafJpFnEwyr6A47v0KxE%2FpfQtDzakHR6IdoSXL6UMb6LzjjlY0lMrlwvrXXvqBIc6r3LuPbLZfI1bSsllk9w4YXQXgQLrhSD%2FvLkYIU8JeI6JS9mLbHPDj7In0jN7NB3%2B%2FdhvhIIxIWehl1GQUVSUYTceCRHqqUXMGbaS0pXHo60%2BKkKqJDDW%2FPK9BjqkAf2Lwm2JkNmvYZSkLFGCpkMnn7b1JRKhyyRmOJthSc9AheTsgLDO4GJiSgpAH16ttjzNsfaHNRGCzleZAGEAzgCoDhY%2FP7rAw7yDQ7unmrRjXU7uSecUQeXeel0weaEx4EAShbEx7taBDLYdS4JEZk3mowTxWkUKPvBez6zmZ5cuaqoHfR7G2tRbjtjH2DrsXBagKKFNn7Nhb%2FSb%2BV5NjYuVq8sU&X-Amz-Signature=7ad8903cd8164fcb6d98a792d897cbcba3f5f9ae1922c89bff2dfa4316778598&X-Amz-SignedHeaders=host&x-id=GetObject)

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
