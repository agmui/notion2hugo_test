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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZDXXBXI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC5U1jyLBlD%2Bf%2Bj3hwRSDLruBpj9DCbyKPNpaXK0qTlWwIhAJE2hlzdf3Yq4o6gFcfzbvEZ08qglxOpmtcClFMlMbSfKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSmgieO4uvZ2yeQacq3AOA1fQ7uOpr86TXE3WBafPdrWj21BY3WPWBNzotv1%2FeZm%2BYgLZ2MwaPvRT4iL7imyZ47jqt1Dm7xQM2C7Gdwgr226ok9yBKQ%2Bk5Az%2BLxEmfyUqoiqhOMAQnrm9phv4zLh5xDHMsYfxRmMiRYsSK5c7CfNYmmMEasCJApiiDmqFPWn8sx8yvpfbLLH9OJXG%2BD5W%2F3nmfyEKla8oAk5tay35mVmg%2B5baJq%2FbEBxnGacM1aEnmST1so%2FYanIzvJG2WkxEs1axS3rvtyL4GhLasBZlSsR0BLgoXiNymTT8tlkuZg8nteBvRfFmvs4WVPHfEAC60WzI6n5CJM5pTIHBKMUyo%2B7pIYHiFHjHqpE3U0E8ulW1Q1hu4fqT7ZXUeKni5o%2FBvEjzgjotHnSwb8tSvStQg5dakO9%2FA5U4%2FVYe%2BiVSEZ%2FVAjxvftEWh5Vv3ZsVW6yziBZ9EKxh5ialRbPjPAZ43kMK7mu0ttyqk6CsUbXUz6bXKt41vIR5osf0hN1aiS%2F5HS5oLMnuwwzYSlg8ZNOdYzd%2BQgtxYv%2FfgUlqbGxZzaevf8I2zLPYmVo6YsG6LUZaH9ItwTQHv7ccrW8b3og607YLuvf2FmYgdK%2FTErhEjGHSiKQhLsUmyBcVCmzDW0Ia%2BBjqkATmExPG7zgQct0697qi8y0AdAk7w1doY4p%2B4wxwdr3LjFmSEL%2FWi4S0J1xqlXOBviq2j%2B8C%2B9e3VNQcslz6d4thtiHdSFJR73KysGemWXHeClv6JdJ0zAsQpWfxIEUCMfb7z3NdAZRgUd18y4KmWNY%2F8t5q8nrp10vGwBQUY39DzVzK6QtyaC4h2FKt99jgDjWjvkDK1RFXmnXN6BOPE2KuU8LIC&X-Amz-Signature=7d110e62ca0bd5807e5b8bb949dde487902d1727a45e7412c27f7132ead17710&X-Amz-SignedHeaders=host&x-id=GetObject)

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
