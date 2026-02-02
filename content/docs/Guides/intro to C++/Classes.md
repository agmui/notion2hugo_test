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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7W4B4VO%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDwd0vYBA4F3Gwel4W3uDp1sEU7ERo5uHId2%2FrcDqqm3AiB5F37%2BLVaO1gchhgirCbflrVBy1fOjXA9rfiXa%2FFJpAiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BvwzIUQ3Y9Hq3tyZKtwDznucPexhsuTfTlxJ%2B%2BqeMEDRQtN%2FIc8DqIZh1YIKNa1aA5Clb6tWascrYVSMIasJF7m0M9yY%2Ber1nCo36HyrIRFwgv%2B9lem2NbgNLkl4YkWz6kmQGB4GsfkG1D5KgcXkqIj9QDWeOmDUaChAxYSRsxf9QKv5G1rmREYcoPt2MaReM6TrrcqhaBDh9ZNysAaGbXIOf1HRxg%2BrG5ICg6Kit1Y1pcFR168NxW%2Ba%2BkdIs9EZkY%2BBnKZ23sjShA09juHl2uqJYgMMbNxT2EvTkT%2BQ%2By16dwef4PSoo3KPf4FmbAWEvOZ7u95AfAIriL2NEJiKSDrlEBNNOr4ahjpl0LiGCc7tuRpTlJWOXVGu%2BKiqDgLR%2BUpfIDqZXgUFDbLd9CMAcPAqahkOaMQID4GafjODnbd12jEO0k5mua6XAkFcbuX2x1plGGacODlGm9a9UvTB3P6M%2BM1R6kLfnZJFf2D5T9VhPjK5yEGrYTfzhR1RLYY5YSjAQ9BTxsbh%2FaxdqlWDCQoUcqaIXdehKXDKWRFG2ZYUW%2Fd8dXPFuOOJ9hZGmfd8hUr0c3RBwSRFPaGhBbPxyS9MSUSqbQwoosJSzshpcyDYjzwaIvvqsG%2BbaegfTNbECrmhQT6j04rZbdowmIiAzAY6pgG%2B2ZHGspdUnXiQhtYyPXa%2Be6zkZ0Ntewha6Zg5GecnMoZ0OvKto1wpqJgRPesCpieoOEtpu1A8O7CDtseBimLhHi0fqaIkq2vvaGMxNrp%2F81ORnI1cAx6PodltkTvvLZjJs5rPuWpA2slMpz6VC7SznlhusJNteT%2FF%2FV5Zky3QtFSVA7VcpEN%2FqJODJ7Z5eM2%2FZs5zPAASg%2Fa03w%2B843%2BNOAs6GZZy&X-Amz-Signature=e8e7d620e4f06e7feb3baba994bb7afde966b2a6b1b1767a39f2a29c099477dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
