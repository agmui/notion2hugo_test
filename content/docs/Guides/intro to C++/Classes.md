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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O7LYZT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD7wG0c72oXoXgh8qbLJNk4%2FPz%2Fxubnv5BZIKEka9bZwAIgcq7XmLenWTV7RgvRExA%2B67HEZeMWfalm6Y8coV6P40oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcUCKC8qc0ZTxcZfSrcA7fbwTpHjWZBDTNp0JJopD5pQZviGUPmrRaS%2Bn8iT%2BcjyLndQiZlEBTePUjHgK69osBJyHoqNSebmCfFrThTJiB9PhlrbyV6qsxsKIkX25hyAm5f3CqWjBdeEtxCM4mQwFfCcNDPSIIZ0FhN0iKxPyTY%2Br86%2BXkBgbvBk3P9YO5GoGRTy8KkXT3v9WM%2FwVQm6DviMS3Gi6FZdSY5uRKcXIZWAv%2FedQ6WJIidD3a%2BOsN%2FWBa2jF5G3C7iAlnLE9vZ%2Bu13FawFOU86uXryfnTabqS3bntGmrj5LGUokkc1i1dMp2HtUf%2Fw8YOh4ccOPrKbKT%2Bs4zvevaJ34LkXNnKeVPta8v8hI%2FAOelJEUwxfZhvdepAaT6zkEcvhbVdWKpr5mK3%2FkMF5opOOc4ZDgCF64%2Fh6MM%2BkIgwBzqI1SJEDgDO3%2FDflHVVgvJvFHv7s8tnUoqImj5HRFxhgaRazMjxgMy5796yvffXHHTA%2FYcogvf8jV4dPYqE%2BbRmXYZUgP3SKueLI%2Bq3A6SLeWcrs6krJ6zPPXLkYA3vD9vxuBXshnUih0iWmlIqwGOlBQSGAK9q0vexR8%2BrNFfakkt%2BSVHKpyshYzG%2Fks3bY%2FF%2BjLlOZQ3%2BVnNYHuKfKHHrhhVO1MKzegMEGOqUBi4zp5ESIaqvQFdAbJefXfriGKJqConE7KlayM%2BiPBCDXvBIgX6oakbmfGBTv1wntxEioDdJfaSG6HLvNszSRw8yxIkGk9X2JqTUentMENcy67Z7S9VOQ2RsA8Z56x3UIJg7ASDZGzqDgDT%2B%2BeV%2BHCci3fjNm%2F0cqLC6Q7TGw%2BoFBPPNmlatocesYoGSKG%2B6vaiUBtQ%2FWJt0khSuPWjrLBkyyF9BT&X-Amz-Signature=ae7bb8e7cc660fae688ea9ef9d2180408947f1de1d2bc12c0da056628f8d7a68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
