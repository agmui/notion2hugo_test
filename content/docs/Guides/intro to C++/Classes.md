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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W26OHZS%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHK3%2FmTET922BASwwLC%2Br8vfBKa7hRtoQuUsl3yF1vqTAiEAvMTkV1hR3ypMAOYzjY%2BsTDUwER%2Fv1cONHcTQfllN2%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvOlhxh8jp2G%2FTCPyrcA%2Bjgy%2B0yExhe52r6bYomR3LhLbgful5qI9up0CS9rN%2BAKPW68jZqSP7tuAMzRjITme0vqyyh26U7IYUERT6RlKqIFr68TT4IZjbilsfMcUvzofHM8DNxcyLgeCmoTALBMyhBeLmurS0QDGjt379vzfdKdr9qC0CrXVF6zCAgnqUpJiKrFaf7IP40ScJIo%2FuaC7KY0%2Fic3lPMds0FW%2FFmmQSgaZnIHzkjfVuhlvNgnC2uwOTiqi5AiZqNkOWQL9kLCXaGrCbVu%2BBdtnGjDwKciCWo6TLX%2FgbXWdHE6%2Bk5ZzJfPs5yjsty7g7Vuf5K0YvRNcNUBuJqoXKvlwifXz2Sc8kIo26MnGPrBzyi8UPT%2FXf5CdXvSc6B34lTNjciq3uENhhu77PghDquGkx39LcH8F0BKABD1vbkb5LSMx5TmFLzVwsT1rTrdo4AYyxWLfmI8XvY95RkO0B0JhxzJ3zmuWgpf7XWaRjie2jEHlpANP7Ntce2TnbEdsViBuo%2BsF39KeXqsTfloidDUdm6raIsToN13xiWUi9MnL1al49rqkMIxGVjLGWLdT1MXhLvV4lZZinBhU3Cuc%2Btqg5Mz%2B3I2hFPATy8GcyoAz79PShyK43KZOlt8gUdB6mNTFd1MNb4p8kGOqUBsruwESmzfMTQHHbSwL0%2FD5ssgNa%2BMvKyrXvpanLnfkaJw1%2BFQcOMXW3Hin3lXIy7v3lOlc%2By8eMzg8%2FCckzaZ3Wy%2B%2FMNIJ0e%2BSeB3p4Ht6XTJ8RhnscZ3ogqee2uBBr8QA0%2BA9ETjOqh%2FCwYGkyZpFVsyIiT1h1EzpNKUWGE3GqlEVI9Vq8hGH0EvQfx8xiNBuKzEXMFWkI68KVt4s66rMnI94h3&X-Amz-Signature=a73341566fe3b27e071bf7661a38a7e588288246c785f7778b6f839a674cc2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
