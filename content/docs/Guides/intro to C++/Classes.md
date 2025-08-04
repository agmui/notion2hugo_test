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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWV3M3BK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD6VxN36B2JVDa5mUAlNkzB0AIxA8%2F6dC%2BOfFEpefGVPgIgGX7Z3XUM8myh%2F1kh6Up9UPKzpFSXZj%2FdHUCszxFFkD0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHM7FVaMTVKsvLGxUCrcA20hBsWrRKTkGLd7vJmQXUbodAGhYj1kcBsxJMdHvta6wi7JarimjCXQS7ipIUy0XxFXKBeo%2FYRZTQ5h%2FH4P8cbl77L627iyxZH6dCNo%2FwX3JOjYEFsfpq88Zdnx0OxNns2N3IHhJggAAxsv0wTuTSWrmaL2ZEKF0hemoStNM4kVFZC7u5v1mJTEW%2F9La1UcgyjcdNVB26gZWffLioZdBibLNKz1JrElI6KfNYbSA0EbShvOVNiPU8VtgChBC3l5b1dPQf0YrEutWpD6dNV1h%2FlOSiZlG1AHQ6kkNjZfHi1pLAp4eEHjl2HGU6hIyReEh8PrHoh9G3S3Ct1tqEVdD0emB1%2FpT7yvpdktYklIzMCUEgCrWdZo65dud9cB85%2BiGQk0RdHGJbx1iOruMj%2FRfzvSMglKcLl%2BM7k%2FFQuassYHztx60rnc%2Ftci05HtZdq6yMnj5aAVmVUxGKwTouP7KzqCXHFDiYrpcEVd3JFWZVh726j5BgjvuQOFUpgFTVLEieR2eC90K9W2PPR1ae%2BaQPwQsSmpxOAR52AlzTIjJIsuJvy2HxXZf6usHQfB3STwHHRJlEf7aJe4N3SUKyNtRQMzQLI8DdmKNYWv%2BJVf3C65ggDBZ37HVoUQwzfKMIPBxMQGOqUBOwWQue9yTUhEd56QT3glPrWMZlxZH6611JkS32MKcWCFdW1LdHfCcKSFdWyZhKMXoHmGKKJutW81SboahBUpdxGn8xNavv1KkITFrJNgOuCXY%2FeZPP2oVMjZOGz6k2PPhnpsXf1pwFtcSLYLM8ZK36ov3TK4VbjAuXeqXz9Uxw4dEqf73jsplnLTs4dCpy30FasNMlF62vl322A73DZyUbMff85x&X-Amz-Signature=c809d44d297e1fb75c80123d3ef822c96c961b3aff60f1ca1ebb73e8412655e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
