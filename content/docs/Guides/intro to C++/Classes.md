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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76VES6M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAFGIbrVl8SW7s8yXO2SWOVL7BKJSiLdmLucAmVO0IZBAiEAxDlKDHuoFXwuZ19j1ehNnaiw5bSi%2F%2BCcM6s2XkF7Dhsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMCCQ8pRMaxY2yEMZCrcA031Tjt7kbEEVqGOwfo20T7%2BCAhbBS05ohOfLev4xhpCI%2FTpre4LC35mqvROIjcSy05ejivG6mLIUUXumnTafcFXXCoii%2BA3UizY9%2BjYrmsd6OcKr1s0%2FFdtlgPAp%2B07d5%2BqiAM9rVEgnXivC1gp1GWNHK64EAHrtdcaEYWfY7hVHJtJJc5drTNn8CtykeiqTBTL23UU%2BCYTo1WXM1xR69jf1H236GHUEyuzmjqJmh3mn7y7kbYK6TOr%2F6fe5CKFdlO6LxuKL81s2Ho32Igh5cVzADuid65r5kJHQRvikdHTu8%2BBxVOvI0hawHqE5JeJTEz2AD51HEXaFKhsZVOFvsrVTkw%2FfVkF1%2F9OXApWeIbBFF35ntilxfDrj%2B6NwcvhmWZvRAFd7fz1jbPnJ6YJuENaeJo5%2F0jdjgY2%2FEZjbI9YvlIBaSttD2gsn5QioGNwXrk5a7%2FtgnA9qjIFdugodpw1q3qdn56y5oNEGM4kU8cTHu2UlZmjAwS5HpQNfRyC1gj0w04TfypNi%2BY4QmEwcD4d5NVDh5vsByiWGaR%2Bh7FlePqSfON32xFasXeStTVoGbISyPMJoClVFtQEfCn1Jc7kVFWDwGt%2F0gmpLZDMbE9FJsoKrS2GNsoGUvsVMIfEhsIGOqUB9rIVEAzxqwcGXYsR9MP%2BUcSR1Isjjn4dC5biBF0J4JiM4NvSF0ATbCclnvr8AQDtm3AI25ne3vTR9VPSB5JAyBhi9Acbloh053y8L53PYqTjaSKXsd5snsxxIljWFvu9qxwDXK3sTbQgYlr1D9k97S3ypIJQwiedqMMuLqAkNll4LFZLNIqqQeyeVsn2BdTchgDMsdytmAekaMBYrGzUVlVFJE%2Bm&X-Amz-Signature=52ab36fe8e7ff9b18556db9cb646cb86827c2ba023aff79841348db7f516b599&X-Amz-SignedHeaders=host&x-id=GetObject)

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
