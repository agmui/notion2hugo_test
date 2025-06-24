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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXCYXSH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFb3y1m4%2FW5Rq7b3xc%2B3jnh%2Fvig3OeWdmPLZoB3exnS%2FAiEAtdt3lL1Aea%2B73Y3yNFiUx7rS1A%2FUgPdrGArUYHFn%2Fpkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOP4pJqvCYPKWY%2Fd2CrcA%2F9q1T%2B0f4Bdhd%2FcDmwIKmiFV2lXROhYDjgvxGBeAk938o5q0Fp%2BZtKkcVoT9hMQKX0d99q0ASjT8PHH6g7OewAx8e%2FTxruRd0Lme9pV2%2Fb9oy8xLk8dq2g01%2FONUuoAMcKZ%2BoDt4X%2F6sf2Ee1XlDLggGo%2FMTngfbaDPwfC8zw%2FU%2BWvHyNykOooa%2FGjK32G%2B8qTQztYUqL%2BB1F0%2BbFucvQBmDZpFBI7q%2FYN%2BWHjj1wDFdS%2FOfp9OCpI62QMWsI%2FtwpxIs3bcf3%2BjcAgS1OaR%2F%2BukBZckc0ZYPB%2FMetYB2iXHmY8zoU%2FJsgWqewNioCe3Y2uTricTYZxl1cdcw7otYCE7oKgcy5B5EFcTirCWLGWuZmlTlC7BwV4jypYEmExG8H5uTsvHRKvjyjpYehKD0ykiHCH0k9ajyKnJYA7Zf3CC5JiFIMwVA7zdFz0k7B%2BVh3Km81wLMTc57t0QiJeEcS6vQq2nuKx17JN8pXCdhDBVMlaPY0QMH3qFgKHoK%2B5nE8wGP5xkODpAiSUQ1fBNh4pyLkKhOPNWtZMMF7MyBXDgxi9teCYX0uiAlkiwrL8m1NIrCQX3zLis5A9JSBRIiJxR8pn6yKSwOWwGSCfe0Qr4z2HuqV2f5e5y9WjCMP7c6sIGOqUBZR9cAyw2RFDDIiCHBipVXFrJ%2Bh6lSNo8U7y0lts%2B4cLfhy0%2FbPXGtItF%2FoRCsR3z7YFivMvPzLnrUFv32hgt4z62P9UG%2F6RuX3He6Cqy8%2Bii5x4sse9QNcFlctKOc8Kbh6tfQN%2ByS%2FqfLyl0KhQu8VW0FkhGgcbWinIi8QSEtsSuDa79tZWwBGuQo9p5OdconKqMnSeerK%2FGcuXyhbW899iJhWNC&X-Amz-Signature=ee00cb8acf5e91de8dbb2a650496cdd3d103694362c344240d92d0ae61497eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
