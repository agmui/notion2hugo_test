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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPPGACE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPbhRm04iQgjAKzu5ljw4SEBRNUhDcaKHU0zhL2Uu9KAiEA%2BCbUonBojt%2FUvhEqAzzvaoCMts2Mf99jRV1ur9NrdR4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLoh0ly%2BIpj%2BI7I7SrcA%2BAr3vGTdxOiuXrohTQMqo7m8z7MLKyte0wESjFD6qIT6YYJRH7izY%2BdYdFoFs90OL9Vso9uErG0BgOoad8x21KTzsk%2FWJ7r1ZmicKWQ%2FmGHzHk2dY%2FcV%2By%2Fnfv1MDUVRQgqzQ6ek7P9Xe6fuRBdEUYXruuheazyPNftVrGS8QItoRb66Nhp3FFudGuWei2GI7E6XdtvGhVFMEHo0LhTzbeIc%2BEYf7hLdh%2BZUdrrwdETIEsdK%2Bgp5cQ1WT%2F2Mdo%2BzUOMLvooSpf6S0vB5V8%2By0vNVsMD2NkNru2f%2FLdlxriIxfCjcwnjBNEeDD0B35rg5LRdV%2B5PgAw1AT9bLDaG6lVHXakkFi2ZFHf0SFOlt4AeIrZqUZfxEgbUsluFBTmu14sKGGfv9RtcFRou1tzzWUH2mWxz8IpnWF%2BOWo6yu9NJNp9CwwcQ7dWATelGNgjR55gVCmBtT8puU%2FYdPMGQrFqbkRWZuhkOueZeXTRHKkoWPsMMfkjrp%2BUzTZmhcPAwJmy9oqhvlR4Cl5N8BlVb22tPN2n2n5McyYNxHegwE7ALzbNhCajVSfuvut99UAO9A0H80YNvyvEWeHkmSW82pF78dYvnm3uCHuMRimG6baZJV2JOIRRTbutvtQZnMLiggtIGOqUBolL2xovKlZPoF6j4BgUDt25Y4%2B9IfXHQ88Luz%2FTSwKSsc6PRp22nZRHL%2Feq6c4uZ0ANyl%2FqfV9NGe6vscACIhhPIlBDiA0adtBzWv%2FR78fNBJ7%2BzjGypZH5fMFB5O8ANZ2gV2ezEUu0qHqcqJyWERF28vZEUMwLtqueXMSKrTAZn%2FS2CQBeiZoh1YbQPoWGocKxpiD2p5z4dao5S9bBzE2EAmuZO&X-Amz-Signature=a6975d9e5d743a6eeca99d3df4964ab3df7ceaa61cf3e9b0083ef3d64671d6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
