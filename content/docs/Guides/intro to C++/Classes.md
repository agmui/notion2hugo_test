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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7NVXBG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEEvSZC1huVv0gBgK3a5%2Bo3%2FW2UDezz9NtE5aNcf9zxUAiEA%2BlzHBa2EvaJtp0cvsoMaDdfHRA3bZZD8gkc%2BCFoNnp0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBDdDyURvslRg2OqyrcA8GuHFcoz4RV0wSmcRLlCWikSNH3ecIjS1ooWq8w65gbb04VLZR0uTTV2%2BwmaAvwqyjQGivLF4esMfPAdPVob5N0KoBOlit%2Bud5xmX8K%2FwqZP3jpaXKII%2F3RxcewzNkNxL%2Ffoff6d%2FgqkPks%2BkP4qOxoPIj27ikVspN4%2FcHzqMBZhzNCBMANk6AOWVX69SUOI2ts9amscR%2BaL9m92CBWwoBLcGHO5oi7TfbAjsuJ6WmSE4GaygjgK0c6d4VyzvvOQyVPfd6%2FFoZfR9skLXUV%2BJWpnbQw57AVtmgle1ndKAVmGk2NU8PiC3XJHZ03JmLnpg3WqUiUA%2Fggeo99wtcQKKIR7DYgH8f2wn1SW4eRY4r6A%2FMxucSJjEfyA7EgXKqdUskADxgLBDIw6IpA3KHD5%2BTgrIs4AQ3EatTnpUNHCVIhN4uIuTMWR3dbslUWlbWt%2BMFll57kArSm%2B2eEYOWQX66LvD9Gnn6P1oGjiOXb7c6WltvfwGtxQaEpxNK2k9rK62howxu60YdiCUE36F7j4hliIqs3sCKh75ngH2K2zpsp1gQ7I8%2BB09uqKKKkrsJrT%2FYiCj7ILRM5lMCBkzco%2FPj3m61Jqpde3yW1mkeOEdpGk2vlqTA68YsMvZpqMN2pjsEGOqUBIRMnlCb2IFe6CdddC1hMRcu4z%2BWjcTbZQ2Me8WRBJVdEHujiT6NcA5tG1Bze06k2SxA%2FD%2FdDswv88jV%2Fvwz4%2BCZhHppeno8tkWqSo%2FnMrkxIPt%2FGrIoOz9Ul8pGkupD%2F6pL69PD27Jmh3KXWkstv6XwdiE5vci2AQ4K%2FkJkKRU702FwB%2BHe5iJKu4OhC8g24PFAn5MCMt1idqVl%2BcK5Cx22wLhrX&X-Amz-Signature=d08031127650b1f441d32e4b00c2f0471f83700c370a1617d6f4fa2b5df2730d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
