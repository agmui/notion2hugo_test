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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWWLTFU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyncsdmV9udRAo5F0MZOPsbdk5Dtqgir3q0oulENAUigIgQCzadnsbZJWojzQggWWZuuzNojgYtUMd5V7hr1qPT7wqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFLjQk8yXB2ReGWFCrcA6JsWYMwTWlxoVv5AttRwrtw5Gq6zq48aLA01xKZAk4dXJdeNj9KKoqM6n%2B6cExtqYgtAAq%2FUwnt%2F9RETyzkfsOo%2BLf%2Byn9Hz8SegHA6diyCNNuS5ZDtiZFQNzks%2Fl%2FVI%2B10H8THp1uzGyNR7smPLDz9wbRvxYPhDqRz30m15qjda2WhKp0cQI01vSs5t%2BxcYCYW%2BsW5SqdDy12dgFUlDYUX7j4EBAJfSRv6X2MEVwABeuGUz5YvKvzctXD6NUQ%2BjNQgD%2F%2BorZJxPfeqL9iW6Gdn2amYH66DBLi69p%2FCArafB7R4f61Lc%2F%2FSh732jWIpv0p%2Fn6PVpB5E7u657QX7svY9eoen%2BHPoQsrgYsl528KH0tz0CL6GpXFI4KTxW9%2BYB5Mrh%2F25Uaga6jX1nknoOYF3EyxuOj%2FTqUY%2FSbZf9pII89GE0FIisFD1sY2A61TBiPAfR%2FThQyHydH8oIcPDIYoWB1bQhsc%2FRsqR0pOAATCGYiZ2xfoi%2BOwOIt%2F%2FuiG4EzkBfCw50FiYhQAcDVRowTgZCD44LqHCf%2F0A4BIqnco5WiFgDfbymQrd6ir2xQtzU7ulq4rcOfS02YcU3uG1CwKS0MSVmYC84YaDKeBNr037SAoAEnegaBH6ToEWMLaY7rwGOqUBBr0D9IMLnt5z7wZUZ3cHnEq95H0v6LhW4L1P8WssshQA2p4%2BokUb%2BoroYgg2eQwUf79daO2oekWzd5HfS711nboy1doNvGMWfwBDdJNqYGRO1z5C6tXD3v61D8mLVuOtqcfvqURIHDAvnSvIAlFaJteezjZv9GCjOxAAt1E9B7tPgZPsUegylNqua1G0wGkfvJTCegVq77j628626pWGuVhvtQyS&X-Amz-Signature=7c39fe38a453747ea16868ebcc7bb4986aac93d50b843c37cc54442dd6dd3da0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
