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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX54OWF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHi7kFtlHywA%2F9dhUpiZnKS21vnPWpq%2B1EcteHWAdv6yAiEA%2FoBGVxzn%2FZ6GihdCbwNAakG9Zhr67DF%2F5zq2shALidgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCq0eHPM13UenihMjCrcA9z6w4nRYeAdCDfUcTrlxJ2WItlsXSX46a9XxoerTXx%2Fp272krjkdNEi1bePsf%2FyGZtpd0XkSjpWKOBWbSNWmX8I3plj6%2Bg8QW03jgKEKq33q%2Fu0IAolLBvvFHQA2pdpAC%2F9sA9X0xr4sa8p0%2FuVSynbty3Akw%2FN6D1CiQKuDkWX9DoCOmgHyWY4KXkR8Nj0vPKdCyGzbOG%2Ff6z2LZi6c0h1r8gI75ujGlmbks4MyE8hd1uD4Wn3IgIttZr7Mkeh8vtEGVKJh%2FLbQf6xXHcQrWfQKf4e1PFsqIl0%2BZawJmthVvzu7yFTNa1HyewrvMiIzU3a9lkCZJQkBcPzTQAyoCHEYNJSMQpamTDMEUYvxhlZU8VIHXvfjDmW1khPzaRf1eRf5jr1wmXzUsBeSjwRQ7H47KF%2BNts0kGBlnhphF2HF1PHBQAH9ILJgRYPWvWC7zXNxDjrY%2FrbubKwaEEbFvRJD2puY8jGaGDrnV%2BZq9G2hsV6RBEjfB65mtd1KnErwEq6YcoCDVou%2BHLS2wZ2ghTbl6sBJHc3eZ2IEdGIlicjKYVq48wRiJeegvL9CauTURuqYXQd1pH18N1x64hBDXtarflaXoXxn1TvLcJjdWNOok4LRk8y1WOoHuTIWMPjal8MGOqUBq5wJr1UwPgduUuesuYupaZJ0%2FkH4%2BrZWkCZP7es9Vhd8vRjuwpVowfpMcGu3QZVx7od1Be0vxSREUJb3fdr4KOaJY%2BUZ6aivtFV3UjcQJHGVrvbJs5cg9hLCPA%2Fn%2Fae4XBlFOinAAwsEBHicPhZcvo%2BOVNLaLS3K761XQ26W49piMGlxXMSzVNG5Ltus5dF9cIcTA5omqYtga4CmfGFst8yQrYx1&X-Amz-Signature=4fc23bcca6df24ba9a750cf03d90bf0e90bc1b975dfab56a9e9fad445b212dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
