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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPAEEI4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCWCODQa0BMajyDFIxiMmJ3uLuQJ09bwma9629nNZ1NTgIgIOnPJR5%2Bbhlng%2Bz04%2BQEiCOpnOIEzb0tdJa1h2k4llgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXNa1%2FAk9oyVaaqWyrcA%2BoZLiJtKuS0E6ZExFpyPvl94uEK3UtYBtaIEeYEAqgKIVvEPHwBkwpRpw0RObZRnZaqkINaEKv%2FH56Nsp6Cxbp5UjxEFTJOUorXXjeenbeSmteq1M13p2c2HbYi66Wvz6ojAVUGXPCVRuC6z5%2FDKWoGUZVhpoOcijYqvccP1lsNZ%2FxX1DoiNhTUD0WxJHgx3yaxfbayQZ09lRD%2B91h4cbWgdTKOGRzU9P9PMxfAPUjL6fXzzgbwBntY7pEGgOSO3IlxFMt1ECfOKXt9kZW98BnXyxO3u%2BEddVUsISSu%2Fu%2FkQ%2F%2Fnghsy4aHWbfJUGr2T9kkw%2FIQJt4ewRP1KEAUsCRK5JAR9oCGoEptoiC%2FOubQzfYqolFC%2Fmxbu1Y5hvqtt9ExAyytsIO1E4uCJ2jG4M6ac8paBhjTw8Ryq59IHWWpgvBBCE%2FvK5Xp%2BGNTcPofNcTrLWTXF5G6HcJb%2FELDOVlVZfQh2EHTq%2BvZkhDxG2JaFEo6iyChRWh5Jz72uPV5RqNf63Hf%2BaUkIxxYXv2%2FVLUqrE2tA%2BpYklak%2BAa%2BjSEqBxr9%2FsqBzpzxFayZcT3gyxP9VEj6xQrMHcfCvUyUUMGS6iY%2FAcxlQtQ1aoWyjkvT8kx7liPhpIJ2yMjbhMOTo5bwGOqUBhF98SisUosvH%2Bm%2BYvPSCxG1XhCgfoRv7cB4aTZ9XEPvEe25F1%2BM9XJt1muh8zAyk6dQ4eA4ESA%2BW0qoRKjgAUMPoAP7WwtOU8me2rLRwEK1qb77yyIKXQYw3xrOBg4qFuo8V%2FQC3HEA94cm0WzZwlSaZ8oCprfzwEdszuku3cnXZirbDAEY2DLpsV3ecVDec5jbt%2FW8MrsJPjd0zIXjyeKgnSE%2Fk&X-Amz-Signature=f9316a47a7ad4d88f788a6a2456d296ca9e43f27dbfc1a97bfd177563694448e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
