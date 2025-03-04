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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYJCPT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwC0eI%2FJYRIx1m8uTXjd0qi58%2F77VvE%2BEesi5%2BUaVYfQIhANWmsMeWuQSad9PRTpYw4tj5reeKfaB4POBlPqhkut9PKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymyKDqQPDiOOuZKvsq3AN%2BJBFNrMV%2BIBFMLcxk2usJOAHeKeCAjAHmfBSZJu2Uav4VRYvrGVuXGoskeRfxg2QIJHvzMu5pH%2F%2FaiD0T9uOQNM%2FloOyjW5qF4n5oNldwfcNFQkdOd6z12CnDThqh80pN097ZVzAi%2FhEHadM682aC3Z0L4Xd3I6K8osNMrevE9zClWpPKAxL2eiwlI1zIVLDJX9oAjv2a1du0qpvTI7YvO1HYTCdQidvbM0KZAA7ZIQncXZytamgw%2F2NStEAhPvh9FbduHEyW1FbnPQL0M8HJkcwzxkFJpBOUsbQF%2FyFNeNcPwY7O7ShYhH1smNS9LQNdWWWdR97yOYXuTWdTBfkYnsuZdGJJN52U2wSf1omwM0ebt%2FVpBJo9Dakkurn38aTwYM90zVTpNnWABSOgLcBfuE2zkzTX3iBWIvLOU3prZB%2B%2FwuBcVJBv%2BWN4wvbh%2F8d4TvlqY4B99QJ5wyt%2FK0tli7acQLdvwwusAd35MgtoisRlYIQ4KsgpxB0AYfAtdbxrsYUZo482PkuS6QCrdW7FF2gpetea3OAAEsV7k5lNWBH4Eam946MGZCcg%2F%2BebAlibgEpvgHXDuzwNrDkThmkxXVm1hqPCpLAoshqvKGzV%2FsbZhIar%2FMazYvi1DDDKipy%2BBjqkAd8i4D9eGajpx%2FloH3F7rJrjgTyMHrOk%2BNu7ptEO8ePuy70OCH51EQb6N5W9lE7godMqzoe72VNW6UWNIsr7CNw0ddcNCbd6Y2heRLzhYvqI78L9ozYBHZ4Zt88Q%2B826V37hYyr96TinrKxP2s2pPdTS%2FaknnUNJu7tYhYBSLO%2FhI2Crw78j4xPvJFA%2F4XdfflpbLew3xNdGXCahXRenecOHzduw&X-Amz-Signature=e6bd4d9bc51f75ad0ae05973749b4d402ff97510419af60f23d77e000d96cc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
