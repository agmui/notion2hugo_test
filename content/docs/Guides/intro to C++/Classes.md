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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWGT7FA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzGPIKtCF0unA9Q6zfiMjfSe3RLH4wuwuKFHc%2F7QPSaAIhAO3gkICJeL16f18DxJcTRy1VkngJdDzzMBfMuYns79Z6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igx1IfeTfXKGID8CQ%2BAq3APQojTK8LKFrvfgJoEPB2ZLAFhNpkYljnTAZ5N%2FFbIhoTYeYWdIv9kV96vTTBIXzt5ULdgWdjakJAFeoQExZz3lX0xpDcye%2ByC4kuaidIIcdQKFILUOXx%2BElMrXTLSHU4rSSRt1Mjt90BLaNqXmXghc%2FUzrC7P%2Fhr7eaFxiVGn9dkX8IavOUsnr3pHUVZETPREuJimjqIAl%2BtZr1xTNPnPai0E6ZLLYZsZU%2BFnM%2FtnLyPrDpA6JAvAyQN1b3xKfQJ86rlPswlkZVXWcKNOUTF0%2BSLJiMKdvznkRyJoFku6EXrfw1pS86RcWISh4op5GFVsGVsqdxOmujFbNdlqKTpVmo%2F8fu33SZuUc7raVBF%2BDvHqEP8%2FofJ2rkjU3TwIgKbZtRq6cWddl7Xr9ZBFqYl1LD8%2BhFrRcBT24qfuUYrsMwy7bEdQ61zbVi2L9ik6OoNuLcp8UiqjMqDwxkCWh%2B5hIMvazThsPBARUe4UTE5beHUs2RoLzo0PlFm4LaoC18UWPuQu1F0AETL0VddEEVK58pJlRs7E%2B6V43kOC3r7VBMomq2HgoA7cXQl11touiyjJEeqs8E6kvHvBXAhBmVk3YqPOtbozN2ASbZ628iIlpkm2PQ26L4WZDdBwwNjDgv6rABjqkAQ5Kv%2BoTanAcj9oCpvUIkhl0gDbcvd1J7I5mlqIIjn105ZzixPCSLZqb4H9f8nD5UFlfrFWtyz5YusU7vNIQD%2F1AoKsyIdrICTMre2HAKiwBuTuQC5pL3hNI98uG5jdWttcsw1ritLyjwKrukYiUaHolD4P2XB6KyxRD5yP7ndFN5N6dUCdR4j8APb%2BkSAubHJJsnGhWBB9BJGt8kiEStYjqkUd3&X-Amz-Signature=19ecfd482f69b8d4f3a88fc52d4727f6e6409d3d058e09227a4a1a8aceef5f06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
