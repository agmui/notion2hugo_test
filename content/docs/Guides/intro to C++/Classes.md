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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7WC6S4%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIASV01GrcgVLHSFuSjukwdF%2B5FydIHvhQCfQ%2FvBQwQjPAiEAqJDjFIQO04eO5pAaYnGHQ0orKqI0JsjAV8S9MuDZFp4q%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDJZPbsmgrdMQPr7U9yrcA5PsV604de3WT%2BJIlT5y83VcZ3%2FP0JtSm3A5iB9OI5pLGEkvVfzXwWto8pUIrAt5n2PNX8Bmp3sDxSsk8EwbjTYRfzHqtXWl%2Byqfch8E9nyg9V4bLQQq5eHI19AuaKLg8ZQ3C3CgOD08DAYnDs9p8Zqr7s2UiwRM1MWGLV%2Fx621xq3ImuZK0oPIQvMCgBFQjr%2Bykbb2cZvRPJ4L1vzDp7oPuoqKMzTsWiOFi4StQscI2HpG13bmA7zplHtLZs1GnBPpXj6LRdUy8zoE7oslJ41ziy6E9%2FGS1I1%2FLuJFS8%2FzgIa9ClSHsz%2BxoWgLRbKUUaTSQxIyJGL%2F1kCmMhPfnun1vhGV620s%2BpCMHQ%2BJIbTbGWVyzF3jl7ibYTi4ylLWJ9MDYAOJyEdrk8iIYfdS8zIz0lpp6WKjPS1yDlMh%2FZEV4FKs2r0Xx3%2BbW5yZyd2K73tCOOEz68CAdCEIq6TWKRNQ4yZXM3Kb%2Bps9gH2MaxBJIs3PWZtVTF%2BvgizluyGgpnv13F%2BZQ9MW8T%2FP0kRxju%2FGaBGOOHIYaXWLeaTROFYM9cybCkOsVGnxwRcyK5M2c6qwxNLiFeckkpt%2FeVCiC%2BJgL3lVfuDsmBF8pDYPnSoM97xlovQJrt9H9EhHbMPycs80GOqUBF4entydM61%2BLcTmbW1WVsZOCybdlrm5AaXDBPaNpwIb0Ytp8c4K%2BZZL%2FbxXZq0EQk77aYku3HDRtoDYkMC2l7DeWdG%2BuN%2F6cy6xU%2BQVcXcZhRI6zRExJXGeF4XH0uW0ARP%2BkwKRsdnRVhG7kKAziFSI1h3M3H75sGdMJd06tvU%2BWxsf7z5WJQkgxcI1RC3sDFV6wCCkfcBtfIPUtjq3WZlYymg%2B3&X-Amz-Signature=f1a02ee88fa2a6d14ea87461f4688356139fb34cc1a4b600602b38c07daf3f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
