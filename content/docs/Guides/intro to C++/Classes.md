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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQHYN5K%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCge2%2F0q2%2FMJxnfBxp2MYX4msyNZX5syez9C%2FQ9%2F9ImTgIgbRYnGeXkpTBN2%2FTlYti9NCZv3HxA24MrSmAJy25nPj0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn3stLadf8XJl56zSrcAzz8D7M%2BjaIEdIv27S8c3vrf3MqpVK%2FU2VXu1DlB3tIPkxFkv342bpTY%2FUrGi%2BjpKpmtpn586GJyLj8Sff6gueY1lP%2BvxtzOabNNX2wuu7Wni88yQzcg4pEIxnOsC4dnbGTTlzd383mEPv9FhynxnHSLizFYpH5RTgeAm5KhF7z%2BiZpPr7XRLNr%2FCl0BeYhukJnaFLFoxT7icM%2BBN6lDzA8TDJOL33S%2FwH9MOFOBK8qfFZ5GPaaCJjpxYKP51rGi9Uu%2BwkXcDh6QmM4FUvvaca1VVBzH5c2S2CiAGyh4zN4Y4c2wJJ3r%2FV%2B0MnSH2GpRWrqJRtCHTqOIWcYlprxFPBfzWmPrHL%2BJ1BtDAkhfeZyKyLSog6ObR9vf5lu5zBdA3crNTR4aLdpigCr2g1dcY1yVkdm6d%2B%2B9OFXoVEzuXez690py7%2BRcl4J%2Bi0uWfAmwUxrK%2F9yFGI8okH%2FAihO%2BRVBojtupQk8Xc%2F0tf3NPYqiwb%2B%2FbkEW4U9q3ntg%2BTJUnVI%2BkyyAUl4vwcuyZOkoBJqKNwCq6vv1BZoEYIbTBiK6ts1Da9CPD8LD3qOdcTshl%2FGGSOon2EdqydjpVqym90isoYxw6fJcRnk%2FcOFgsSHJu7SrZbslbfGoWf6ZtMJ7SnsQGOqUBIE9USKr6kO%2B8%2F5y%2B5igmewKgfQmKtIXDRLF90dwUp8q%2BliRe5P%2B2xLxS0hfEXOXKtnZLpF6Nbh27LXqGw6e8c%2Fn0lxtFeqeNCAxlGLwGIyg%2FFEBbtfRwChR3pnUu6ffp1%2B87CMxwT%2F1iwe%2Fg2NPqejFq6MkHGSkrKoi4K9wV%2FUC7dvZg3j97mRZ%2BFUdZyCzkb5ETUnbQgLx%2FVEDViEE5aOxePh0s&X-Amz-Signature=3fd49886979d14e4f656c117c5f4fc529d3224a5d7458f379fa1fa28aba92fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
