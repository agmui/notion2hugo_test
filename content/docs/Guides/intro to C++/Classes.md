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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q7AZATK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiSuoMLw19xJWRyiTgtYpaY1qIma75F9TkU3mfwlO3YAiAKKXQ39%2FZhKLH0kE6dd7H5zQgr9O499TsONyjCg0gSlyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMD5VLC4TPqJMP150lKtwDW9NBVRAzndDR8bp8OQIbbQM%2BIRTw22GVLRz6CuJf7b04VmBvPQXp%2Ba50EeQ%2BlgIQeKUGUFMy7kJvTIJAVF6PmNtzjQm%2BBCdix6MeguuSZmye5mYiwrZiN%2F9gSvDF%2FAyWyaK%2BUR1Yh9Yw7ZaaMyrHxK6CVlwXR4uJJVL5CS18nGEYmSZ1CaXPeQVGBVF5I10Th4MxqyFW1%2BtCt780FKMojKs7rb%2BDgrgfaOaCO9jtLzS0xyyDvGmdDytLNzdKNAidwnzZnDcBVW1E2F%2FZL2p4RQzUWbIgSczr%2BPDtfFSmaToqmMB8felY2O%2F9mAZuZr%2FK0qB4OO%2BZ7AilI13LH1gBHpw4BIck1hi8%2B3dWn%2Fx2be3nH9lcHkbhQivuxmvC28EMcx00n1ZVNq3gARXsGU04pSiCWI8%2B7HW7ITFeTOOYFvGe%2FfbSSRci%2FeFpegkZrVPRXVDOM%2FwkMPQDsQJntwzMbwu8TFhD0t05hWx6rM7oo7hmmse3YTNG8%2Bew4JerDId9bfHNzCz5zqceEv8%2BkiRpIIrEysiau7K5WOF7zUY9Qh3w%2FdspkpFyEetjcFn50wnjF6jYxxVG0nEr4jRUqiAW799Sf5JjqPdIrksEumL6QLpC1ufWFkh00Xaev0gwov%2BtwAY6pgFMy0GS7p78%2BhXF6yHIel71EfOQReq0u2m4aq2q9lvZrlDss2vByT8vLQHlqTuMt%2FgE8Lyzmigxn9j31pXEo7xmuhvbrLLU88LuruH%2F4as%2BQgD%2BC2d2nIEwtAtgl2%2FGOhioJKpgfevR0s21aKTtBhNpEowzrLJ1QwRhJJCesOU%2F5e1kNHO%2FEdHRGG2szPV2%2F%2BdHW6rt6%2BUI9eMVmnSEdRth1W3dU66C&X-Amz-Signature=b6218fa544a34d52ed35421f782a96c688941037e1c26461d422470bc0783530&X-Amz-SignedHeaders=host&x-id=GetObject)

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
