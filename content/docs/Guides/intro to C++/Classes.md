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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCLFGAB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIA21m2FH2vFfn46%2BEEA986Chz7fwcZProktCoj8Fh5obAiEA6z3g5AqievgQV3eSrWivL3lUvU3C4t6NCyA6h%2FmJH%2Bsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNNWXu%2BuqZRwMA4poCrcA9f8uehF%2BvPGFhzmgbdgjxayyBB8nndGBXl5xxWt18eCETyEYURyONaMIrSskmo2iear%2BQALwLpctTME4DcpOBkcz4V7cX04cUtvruRvDgfiWys51h%2BYRSpWzHkv2h940PkwJHyEWImj7LPvOeZIzeJo1rfCUIUwPYmTjap3Gk78tiUHXSdyhrm0vBGcZEQEmnAG3mLIpw%2BQ%2F4il7FJELU0BPvxlZotgRvVAQ2TkSqdfdWxfowbuhF4Pv7nV4jZtGemEsVn9vABsHq2hBeVBk8hfnITQth3ZLmcXVqGtMHKIdPjydG82azz3vwBvUBJkhlNMlSaG8Dgz7qnXrS9aDdB6gsKUGhhffi54ZRrIyVnnnxCpWWNKxILc1WGHFdEhvLDWpiGzKO3Qm3VK7JSz4ZtkZ%2FK5XE5WQJpnrsrY2BnjABcFFUmJGeUULcyd5e1YAzI4pvCv6if6xufdQUhLsw0KXs7VElYir16lS0dJiUpy1I6SrRUJ%2BsucBgC8P9RAiS1zoREvLdKvYztcxmKW7OTdloufODGPxdkdiyOO2GI73dwSTvFxfdQ%2Fi8bymgstqioPD%2FwW2xHjMHBBVmFoa%2BhO0pSxlwAo8TCeXiQR7%2F6sPHFqIDjw0szPuj3YMOTXicIGOqUBy2TKszbPG8%2FA5F2NZSH9WcjEXB8sbwhHpGzKSWcnuGG9eYgZFwgWDFzSzVSQWxKSux7pMqXK7ZquVAsjPHPbPRU37KtH2GE0IPAVpdleg%2BTEG%2FKKtKDBkbn5iS1tL6UF1V6HLMxproNn%2BCAzjBSnhEOvyupdLlXVno3Tfx6c5xpIw48YgechpP8jeTCSMPHBOGGTTL9f2nXUTRGDmDATxc7dJDob&X-Amz-Signature=a4ee2728e1dc9b54470635a1591497657f5262e0e6271837cfc53955c800aa21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
