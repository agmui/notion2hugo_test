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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAG7RYSK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0FIBcf5yCT9FZk0fP2FSFSzGC0xGGExyBUpn%2FQ%2FvRtAiEA3h529qIftGpYdOZL9UdMMYxiVgEx8H75VFzNmBbW9bcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQiLNcZAjNPYWB2JCrcAzPZyT1f82WPcB7UlwX1JgH0u0sxyQLPVHhvZIn6YhjCKIbQFTy2ZlYvxoyShpr5FDZAmziGG9G4fgvNxjUV2sXcrSfjKrYSqSIfoSnbOmqnzw2274qIOOviltoq645meSJz8pY9PEsRDdgzxFDK%2FmIG14yH%2BWKb7tRCAidXW%2BEVQt8K8nkaxhLIlts2uuYG2O1jktH%2FhrlYJeDn0wPYFMUhyZQ6w%2FYSJ4MG5YhtJAGcVyjdqyKlRbP1lE0mE3F50ylvXZQ9ia0g8iYCk2ecSGCME7QVXSyJY9oy8%2BWgQLqF8wtikpZODDwuFmWR53xDKz06L8DVIDDWIXfNf1dsBJEIY5KZRZxPmRk0CmYjmCBWj7X7FQkOUMJ4hOHVktgQEo6XAuCTKqJy6YigYtSysGTYmnKAnSGBGJelTp9mxSqmUjSVkAuLR%2B79MWgvFz3wsBEMFzMgn90Xz0OiQ8Oa0iR0w72wZ9TmOTOgXCbTvXqWCzj4mOsDwhb8TwWjTGj6RjbgVyl4n8%2BCPu7ugTR%2BV5i7LJ5A%2BURPraXeBGus2MbT3jBLmS97IMMMzBu4PMsrz24XmcERC80lv9fSkU%2FwcoEuUfh09ESxGxCNmxEw%2BGyLaGtL1H0CrEVkLxFpMJmnjMMGOqUB74gqouj6fKfdETGdhskzd8VH%2FHaNQMZWgl%2FVmodw6p3Pw%2BHxxL1yYaZUG80lEl45QbVgzrqDWws3E9ktGy16Rg6NcTlwq0Isb2%2BU21c81ga8Ry0b1LIsnj0s%2BTGKAcb32I9jzXmBYcQ1SrK%2FnFtknBR21T%2B9Y0MEMuHNyF7F2y5VYY%2FJQ48Wtw4Hll%2F5ZQDMDP4%2B%2B0GP%2FBf%2F5v77GiuFrIVtbz5A&X-Amz-Signature=b17e924b36272befabdfa76ef89dcb533e5ed0b694547326867a7d809ab0b09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
