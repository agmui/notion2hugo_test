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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43HK7HD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHW5T7c80gZUpT89yvF6Nyora%2BnlXtNsHqsUOMzwGaw6AiBm4OVHaHI%2BBvnsYL%2Fe8lCQYPoVmteJl1XDS%2FFIbunABiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBosY3ejtqBFMN7P3KtwDxpqONMAwTj4Jm0hqJvDOC7bDme8AfG1dVDpH3CWi%2FJkqmRodAOH6EEKsT78j0HXdB23e6o%2BrHI30Gc3ZZ51nx%2FIGbTk1cvlUAW5oHPn9w0U7Xz9nCHaYcxjwbO9iNezTmdeudXdpo0vyH%2BIEu%2FOARVjrEHCZGZHBXFA6I1tKQ1qhNVqNpc%2FpPRS3p7lLgaNzqxe%2BQ4plx%2BWeAZORfZRnAFyuWtxf7b61mjgqEn7LYSr6GxCNr7CngVeeIPrOAst%2FSPv2RcJ%2BZAWsOg2b3xOJBken5VlyXLOJGwPngtkw2E3GD7TBVO3ZYvbJcz1TwEr1QfAdGpj6s4azdoZGHg0uS84qiVjXGIEN9UO7EPL7az7KpSXjUnwxm2%2BgyhWfJqyDlnUrI2lTC8JdHppcMo%2FVZYoiOv7%2B1I1iNHDZSbY8PoG%2F%2Bjw1oCnq9nq4ry5tPJoJDRI6E1ZPDN53uuyP09XlBzTF14kGSidxSLMstHAJUIowKTg1WnBA2ee9MIV%2Bj3Re37wY9gAa%2Fcvks4kz2wblSn7%2FlKIotlEVQ%2FUUvKQgYkiRL5aSgeqHlawegDkZPh1xBEre%2FfZRte%2BOga49wkJkyxm9gtz8qZOOHzTDUC6ZtdVzkrhi3fZtcEFiDsAwmdvDvgY6pgFilsFzPB2sa8SozbEtvQCBhKEpSKzXsIwbe7DiOixlvyd%2FbBc4%2BrtSTxRcHX3EaHdbtj9MpAJZ2DiNKgZrHIbBO35Z3eGPL1tUr4rvUCwUt51z%2BZQMvsg5hOF0PhVYpkFnojswCIzlg3qxCT2Dz%2BuE%2F4Bi9TZarjie89ANMPamzS97qaDJo92V3e89U%2FeaEHAnWPL1o7YR7nzitQt7iJ8Kc457%2B4Yf&X-Amz-Signature=003cf831044c7872be760180018750d90a96d30f9b777237033f8257e2223138&X-Amz-SignedHeaders=host&x-id=GetObject)

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
