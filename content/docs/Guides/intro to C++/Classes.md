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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSYHID3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH6Bc%2FvCx%2B1W18Bn3WDNGdwRUOPSrJvhISeAz%2B56gN%2BAiEAwhCBRSg60GIX0RgZjof%2F5pbMrK%2FsfeC6T2vtAsnCoUQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJRcFUV6mp0d7Mc%2FRyrcA3%2FaUDntIuZ5PzG2EtW4qHhcuP5DIV3tXcnK4r7q0sRIq050UVtbNdWCqVxcpkahV2P3snkMxV52U5WTyeaFj1eKcecBWOkPH3cmNNu7oKIJTijZFEdyDNnG5HSbg%2Bjjz278A8AJOCNJYU1GXlXj8ueNNOXg9uIOotPKyQ6hbh2L2gq%2FJWDM0qj31JjHhy5zh%2B7is3KZh2fF8iDQkeSv0H7jE6meJVBESw7e11CPVNrYoVBKzfzw%2FUwYyMEwP2x5KFbPfcVSAyU6Lz%2F%2BfNexfSDbIa5UelvABp%2B873%2BsXfm9tKRUF4wzgAZYygBKt8ryi9ixrj2nv95alX%2B5DZiTJM1B8gDWqxx6p%2B1Wq1OkueS3gnaL2fl3koKRBtjAjfuAuKS77S70VK13KQdGrTpIejeqvgKhO3E3lRIsgASsC%2FMFGT7BkdzuT3wyL67L51usRCIb9fx2h3ICUC2iYcKX5l%2F%2FXinjonWpBL7mqd2jG7IWeJ4Ag5bvvbk2T2RjQJebPqaiJfYmhbJWnOnGpjTV8gfBoa1pDD4tk1CP%2FqaKKmbzL9T%2FBrOLxYPdg7j19IlpWr%2B8%2F3QWsS1IeFH5OJQmGpgFuOGVDRFWMmwpirAJRPrp1jpD0dd6C4NKh3P0ML756sAGOqUB2pBesjZC8aJWRPmuJwGHvJdXrXu7WJHLN66ovySXQGcia63pQh9xSUGh2xPSd1bALwDEO81ijQQjiiVD1Dr4aV0hJTX9BGhlxrDF%2FAH2zzCoHQyAHW3f9DXbmp4sJ8qkp5PrgZDtcMlIy2FJNLsAijo49UQ6uLb3sguYHU4GUEDuBz5W%2Fuy3cY5yGJJgmDSJuA3sFGk8XjKrH%2FfS0xrj24k6o1Y4&X-Amz-Signature=1b12b6c3e6005ca178101a826636dc004051e113449a82f6f8747756041a8c63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
