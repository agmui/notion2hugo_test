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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNUBEK7%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOpX3toH4ipO2q9M2LRQ490dBL1skPxMNlOg3q%2FNQ%2FRAiBP8kAm2FxuwcVt%2F3%2BScohJsXH8eQpdINo6iBEd5mbEFCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6h9FCLdDJkDVnVW2KtwDmEmx%2BTHo2NaeXx0Bj%2F0Gd%2FDmWvlmsRIjV7Uvafbc2fVxtGcTQds6jDi%2FGIn4GVVAP9ZsW%2BoDVaPu6oluJJL1MMXbdxvLbRvVZ9kKFk7UlPaYYc1e5lCP2bpetY3H7N%2FUuG729e%2FdYmg1D4hlPwhbbxaKKLi1GFQz308UcX%2FOwLdIl%2FSr1623f4yIf50vetl8tFvNy%2BLW98%2B3DaOeDxm%2BmDV%2F4BQVQAyXoQYbAS9ZF2p7jMyxMJdD9IxP8vKhW%2F3rt5srBd5oc8P2nQ2Ajfy1BrkkpTZhFxWKRQdi5jG%2BuuLTDnSffNgB7PBwc%2B6Jo353fpLuNhScxo%2BMP5njHDQLruAXSo%2FTNxCC7W5droI0OwrKJ4GLvm23pr4RQMCzALBpRR%2FmEHL%2FKTvLZ8dsITs5nWHGa%2FWoKvV5heWyxAPP7Te7ig4qkj7Rc4vfQseIQENPisEvxQkTsLUl6jwJQkzFX05G2nUCxFT%2FNqnleYwH5GBNmj3%2BOkjiyhKSWw%2F9a8nSTifdI8qucH5aV3MTBYvRBQf1rtfqaE2yiy3xeyZ1DF2oJJ1gaAdnJvSB6sxNbr4DEgnFhtF0eLaJX%2BWYK3J3stYA66W8rlLbe2MlQHYeV%2BdkE1kgRJkZl%2F8cgUww1sKj1AY6pgGWl0KIN4%2B63mBIMK0rMbRrY9O8B6Jti%2F9p9zALqYuuFlPBOn76fTTNNGm1mubZIlDYnGtI2f3VauegXdLvuSCuAl2107naLQieApD%2F1YqyZvjsh3%2F30nmF4BKz06eEVYfUny%2F%2F64dUMUQzFhGnYJkH6oqheiqswGkv1Y8%2FAL5B79qS5qlqLvE46L9pm8jlIITKuyb6Iu1BLNazV9IdQo1OV2nPzux0&X-Amz-Signature=513a4a091477a0dbf4d44b3856bc94685d4c3384cbd195c0f2bd45a7da5bf0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
