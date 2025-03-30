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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV3QAV3R%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDraCb8420zWcPguAwTy3%2FuMMVIqXTN%2Bhlj%2BTBcFDIePgIgAyT311PoGzHM5Qzcad%2FD5KNwTEysroXefLaY%2BQuc1tEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1JYGGsU5gFQYw5BCrcA%2F3bOdRd7NFAHsFct1BdccNrN51iJlRhL%2B0VCDV53UEKhwIvnLom4qoKx1wiYY76iKow9k%2BMSq8ZKAOBoFky3%2FV012XU01Og4a9chNECJeV6c6bSeSr6RfWRUxzgRxQixy%2BoxBo9DgnYslNdiMx3i1ysQYepTiti%2B1M1AmLnxCxJOsfFmVAddkSCFUxGR2o%2ByZweS8OHeoAR7M1dNIbwEwe%2FjO8W41dc3hKXHXooXooDFciTwNAJO3s1b5IxnDETBfqxcl0wF%2BV4VL3xb00ctkEMd1yKp4xE4nY9qK0nh1dgrkJUxV8mV%2FBskTbLGPTMEnAFvUxQwdQ9zJ3OYbhGgOetBktg6l2bOWuGPAsckm7aF%2Fzyfm9MjGBGJMpLemQOG%2FxLBpRHmysAHyzN7rUg0Zj8XvbLwvuaV5ZaHZq7UGvLtlkhPVWuoxmydnRyT8HifiIFUSIAyZqEtZwIysrwb3XlRpxPcIO2x3mrRphcHauiMY0vflPWkLDs%2Fqb5ETsB%2BzFQvW2qFQHz%2FZaZzUl4whPpmgoKg0Bp5ya0ZQcqDKywVxDwgKUMdOj0%2FR8X7GJfN5g7Rmk%2B99%2FVejhL2nnvHq9lqo2KLd4866hE%2BU8ibEyIiqlRJGmChYwVMduzMNPtpb8GOqUBeWRs%2F7TyYaXSilLbyJedkgcSS3fIxtWYPJGCvkp6GOnG%2FP8uN5p6EPjF7nPiQTWgoGw1M8NXskf2ZbIAkowqtX1VAEUrwkDyGYN%2BAh%2BDNunCmXHeBT3t2npT0vZbe1w%2BaR5VWZzN1kHMr0EThw8FTnSI%2BhlsUNS5ixeG93IsczkewOpb91z6OWSsQIG3QwO4QQFV57ys9lTb%2FV9j%2FtOKjJ8oEEP0&X-Amz-Signature=b7df59bdf9fa1bdc2273c632721966264cafc80f8c64bc49a1f1615157d78039&X-Amz-SignedHeaders=host&x-id=GetObject)

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
