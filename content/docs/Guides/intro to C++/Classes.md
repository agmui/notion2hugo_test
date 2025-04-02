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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU7KLEWE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDp0GJuPgynSq5c0WYO7EjKLPqA%2FTDmHPC3dEOhPO7FUwIhAJ%2BvWSVaQpQOE%2BtgGAdCon%2BaONVkb7XZDyj8m7M3JQaiKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8JkeBViKpz2mwsOEq3AMEGOn78RZ1X45SsP6K4Mrcg9vgEAEme1ZPiASP559cs37pIPXdPoVTHVrRH9DAjv1ysQrUwAMe4MNW5hKun8wkRVr4Nx6IH%2BEg3ckJM385i%2Fnfu%2BTOkbO5WGBryzlYTnhC2pmzoUe%2FmEQMbl4Li%2Bc59WgR%2FFvmhQH%2FA5r%2BuUM5WXaTuXApT2tXhEbdbZt97wz9XHfa%2BCFnRnE1f017olZdmldYjf1r5fcnMG0oHY1JXIxdaP4VkFWfkLJuewX7sD01yL6LduOfD6q1bzEGI8zzN%2Br%2BPcCdMjneLRkfR80rnYRgB96wSN9SjbE0Qj3vrdLV9VXdoklAsbVLvVl4qdt2BRe0FWb3T%2F6VJmErRLMLD87g6RCW5NZ9pa6l2uudp6tew4gHYEthME3rK%2BG0Wnq4PZ6axB%2BlKM7fx38rLEkJczQEqEFps7RJ2UOD1P%2B9d4NxPX5yqaCOGNET6GDisucgoISzFjoV8XetCd99GLovMcL%2F9k2gq%2B%2FXGP0KvXGDnF24g%2BhaYkpUEhYvU9h3XlgMD860DYehcLIorveqH2Zs27mHt2EQv8SpqBZj6rh51%2FR1fvl%2Bz6oiv%2BIHLRqtVQAyKzcOtQkssA9G5Vq8tcbzi2pRLKGdtxPMHbuWxDCBpra%2FBjqkAaLoL7xdxM11e6wcApbxJGxyhVK2Ea9Xafcz1lR%2Br3fO%2FC5HtmzQaXYhn8OlqwNJIDZgBH6yzq7YiKaHxrD9hEiTY7eae59dgOWoy9Pod6XAU7pBWF5nQLz6BVdSy7jO38UI0XQ6MnYXNa9XHeeUTB9uljpVS9S3OiM3TgHYlcUgO6tLJRiOECk1pubXhGTbVAEvkw5xuNW3QZdCgYY0UGpEgzWO&X-Amz-Signature=f5f57d6391d2c2e788a3f93dac62cec4059660920f5a0a2839b9a97ef15f644c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
