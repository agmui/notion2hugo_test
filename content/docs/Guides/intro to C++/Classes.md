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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJK3FSS%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQin89E03nFHRIngD0Y7fxLv1IE5wRUqvgfVS49cXrlAiBFUJCMoO%2Bo6E2nT7tRNg6%2B0lWajnsE5xoRsfGrkf1XOCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMZCf%2FGOA0TSCPSBMCKtwDZyVaGxZd%2BbEjsJa5AG91BeFed8WSIHcyCT2O60s7VvgdRqacrHaXtbir87VOwCUYZf92hpRfZ%2B2PWBiF3kMqXRYGGxFoGpnSOsKqETgzAwgG24M2U4Cbtn4XL9xXo77MBUQXEaXxTNnbRE0Q2KMIMsbr3s0QPFrf0kdMI%2Ft%2B4eUvoxJgQTj0HaadRUy0WSbh8FDQp3nstC4%2Fu9XeYADqNiMtSR%2BjYaakFM3MYWblHeodgy3xhNDUMdgpPOPxa4qw6ajJ8WEPvtURrugI7f9bVZZB9yvInbE0Ickj%2BA1HKVZrIs0C8IFFlyltFrmFO%2BZGVBDfAuqKrPBo4rnbvh92e4Z3nWSs2bARO57uaMLUfA0VDSZ2YgqzVB1Kt7BgzSSNBvt9rtp%2FGBv7JSam%2BMIFtVCrFqbbKkkdnxWeByvtijNZo2JGLBOKk6Wc0QepkpV8vLxR24p0w%2Bq5GD8LFRbAW1BP2ZRl8Ks8PSQt7Jm5H5n8eo9%2BW8a%2F63edIZ9WF%2FdhQEMU2SQeF59SKUS3DV9WDHk0eN6is%2BE%2F3NwZLZRpBdn0Luc4Z%2FpFHqT9UI%2BzdP269TTXDAr45Iex%2Bar9Imf%2FftueauLNjSY1YSOFumD4Z%2B4ZlNiyfslpuiy0hVww1oegyAY6pgEllrOGjN5K7YA9T4eQLd6wodEyLQuD3daXeXzM%2Ftg%2FUgOU5a7XtGSO0liCM05o35yQ0pI%2FKeOHJBc63Ckf4pKu3c2qQYgWuFM6Fw3%2ButA1JIs2ew0YcTQ5ReG769P4Qofsj3JJl3iKF0Toum4jpAJ3LskhDuyZb5cmMwiZByB9Wxn38hYZFQ85XgNnzoZgulvnhaVZoT%2FNodomPAjg4kC3mqXIIDvL&X-Amz-Signature=fc64d00232a4a4dab510d9e1fde178d9766742c6fd6d3458b9a3acff087ff2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
