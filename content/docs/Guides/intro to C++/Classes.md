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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DIFO2EM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsAtcNOVaemRkBInO5OgaBS0kjw9JmQUmTlIzpaRfvRAiEArSAKX%2Fi4165OqQdivReZvqiClngJbEcPSa%2FS3Q4g1oUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbOxgZe1AvUJbGs%2FircA%2Bn2Hhli3a9ZqYZLwEglZYh%2F%2Bne0DdYHPOJHHLHaDBdcJiw%2FltSuG1iIvcvad9I9fAQVlWSlS822mALOI4ZqlW%2FZ1oriqR8kF6Am43hG9BFav5%2BzRCgq%2BCdHLbV8lvqGsMK%2Fp%2FCf9jqfbsEBzHSNn1C4lPpELG1ndALQqv0puuCTZk9WwgWK2I2hQFzcMhk5HzTxTDTKIQSp5egKwY%2BfnQ87iM0iy75wL4dF7exk2Jx0RQ81Gbl4LF9bUw3LNzdEIr6F0DnJx4wb9hCsmLYBOdsk111Yn5o3doAqT4AuvaOLCCNp%2FRCG0c5zrae6cV32jBY75HcwkDCWuiDK66%2FnxnAijr0XiY678BGLHo1YvMQ0w7tA3FSt4FaN6aNywLhXxKmDyjaXDpbSnBhwbdiga64t2%2Fn92iA0fUl9vHz4joOzcXTk0pZQ0GJUmufOGDzpuZ2lPVq8BimVXvtRxu4vHy98oyLcUKwM5imPdtaDwQpn3tJAcKAQ15aapqzfRa9Ykuzv0pTtZjpJ1kRVXEcTuOUhgEkVVoWFhKKmxBOaeYDn4Pu7hSt%2F0jHyBKiA%2FIDJkozhQ%2FkGmav5REv337TQh0kC4YUjPumM2sYptxm2s0tWVLxR%2F%2B0hTGh9BT0tMO7k6cEGOqUB4qKofkfGr5SXdEUOMFQeP3gLB4yXOcF22KuzfOhD351lUDDMsKNWYBYMKwRFEO6ewHtVIUGl2cZWdMQjltgJnvT8f%2FXuEiOY3FAnpjPF8nqXHByKOEXQA2H0RNR9AvnlVxzaA1iHU0rfWoeVE4JwL5ilNBTq%2BtuhJ29WV6H%2FmAZQG8dMt7vaDnV2qB0FjluCfbtEaQnE9YAJycikdbQq07HIiLlM&X-Amz-Signature=5169177f67f24cd515f830410aa253d23fa6fb3826a9430ea1d315c2fa27a581&X-Amz-SignedHeaders=host&x-id=GetObject)

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
