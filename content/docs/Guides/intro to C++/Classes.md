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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABOH3MC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDzJtwQGFqNuZMDjD17JKpOFOY5cP17UZXpdZzQc%2FYY0AIhAIWW%2FW%2BwHu4QRcyd38QRcBzoA3GZERAmQOHO2WaxaBl9Kv8DCGgQABoMNjM3NDIzMTgzODA1Igzm9TaUwjfUpVwhE0Iq3ANY%2F11jy02sz6BVh4PUHYIa6%2FpzvGKbBpHBo3u3LPYDVIKYpxi7cICAbXPA5VRBt5Qx5G3N%2BQjmtTtJXwWLxemrim8S2AbbuBAzU%2Bm6GRY8CNaabUU%2BOInZjFFvck6jtzAfuAksRIlNMjENsjOUdtTCuIykTZPjAEYTDUVs6FI3OoeH%2FYjc8ci5vZBAgWvZI30SbnnCemo4ypTr%2BXXzKzOr9zUa2b1emXNv9MJsLhSNdQLpUbej3vGvHRM11Tq9w%2BqTD5gTQ6W8mCY7Xc6Cp%2FqomSTgLRvjuTlipjduceq2MSPWUQCdrIZ4sTOUYZyanGKmmsNNMuu1SOB0jjBGHJUPB3%2F7IjQUxZbcDY%2BRgdzDdbPj8q4As6fF63OVIOsdXdHvWCZV%2BEGyZcFtZHfh%2Fbe9bllPawB%2F4PNh4BObdCIHgiO5Zx5ka71ZCIp6sPVX1IvnHTUD395sUMXCic9IndgM4oF7Mw2mDXkr2BhfIB01%2FkNZGKnG6KIFVIN9gIGtefZZfbnQmHNdBQt7zgESWQQiI4A3eHpwhD%2B3PP5p%2FoxW5NFx8h4SnuNiqY1ox90MBrlLQSHBCSJp5Zs3785zXtB0xSSYGPIhpOvCLVKdz9RYeu%2BOMFpeAhTa6CKKYzCBw5XEBjqkAaT3xChNGNqmyT%2Fr8v0svV%2BLj9HOObydPBDwbB95FCfxYMqy%2Fwn1%2FmwHFqXiXXx%2BNEVRkMcYW3wF6pW4aLCgT6NfX33HMxx%2FHGBkGqDk0z3GnYD0JDNnmO8yAhe8eJBMVKSSLj7PzlFT5XazZEFCBVq8kbWvvDiPtz2yzfLhM%2BGmjd6PtSe0naKbQCdci3sBHGUHhklPYfh4%2FExj7bSpl2gkaqmv&X-Amz-Signature=12271fac6065c27a60f00c6f9eaacf0adb431788265cbc8da67c7a32b34e3f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
