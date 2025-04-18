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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQELRA2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu8p%2BUvYKTOt1Fk46AxLocP6fU%2BqA4BNGAgBzOlALr%2FAiAkjIXi60VupOPh%2BHQ9gCkmVKLEGbNTNFgeqN%2FTmU9oKir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMArd2Xi1CFvIE0lzdKtwDlPhqo%2F2m3I5b1qmgPDUgIleNf2WzZzw3Ldl3NPGptb7QcoQxcA6bjW7FTZw%2FdEeS2uDucU4b%2FakcGL2RduEmCxb2wWQ%2FNt4L09TIiVxUJBeVQXU83ccSS9v3t8h5%2FSur4WqBvHNwZFE1FLeI7tjhfmShSYulLnfxCgMRhgUkHPUhXZ61OSJOSPLvM2%2BPxif%2BDg14T39XDhCMw6LvGABNXmiRLnJg5XnIT5%2BUehOPIappB29ByncIlVr9f1alU0XeLMnhDYKPz2OvAqvICxA%2BUgqhdTdPNCCuBG5ctg5ZoCoFa35VVkBnpCuYCatxiPSBvbGf2WmrTxgqCeqNR71EWgp1s7BtWE3jT4pwk3efwhBWyEuf1Xsv0wsApuyvilImHcXm3lzAu6bPiLv4OM5babX5vzKYuHQcflQehlj1VRuFpzcrirYp8WJ23Z77AfnbX3hrZMTtXrQux6kelG8CF2cWoUFxqdwCREIZCZ58diAMPOapAzexPbOz16bvG%2BqmGWxKDxIfge2V6S%2FbZBMXHvhXnF6uh4GCXwhtrT3BLJF70L5yS3b5qOvgn%2BVJt8h06YHUqjO6HYrFxIj0OSVJTGVKrp13ulDOG4VjZnriN%2FkqrlVNQu1J8zLbkV0w%2FKiHwAY6pgEk5ap3CTsC7Rdvr%2B1JULdPHnpdMfmmOFqih17p2E3s2za69hVmJVsFMhuAcrw%2BHbSJbFZEHoK0X6H%2BZt2raZkmc3wAnHdKTwKOvL14OFLgOjN28vtkqwaUkMuMk4VQpvGA3jJsJgPflCrB01qV5AHlUNEJFe%2B7%2BRqwoRUBb0fo7MuzDBBHlja33wioSEMpKtXYX%2BqQE32X%2FDBfeRJ1qxGFY5gFz%2BdY&X-Amz-Signature=8a0eb7ec0d5cec145c79e6c68002f4c76f7393cd3fea3fe32474e3b1a04bb1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
