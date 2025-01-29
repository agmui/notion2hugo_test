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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZU3JRW3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHOEc3YHxXYebKK8Qp%2Fu3e%2FbXjc%2BGawA2XakNMl9S%2BCeAiAhp2rvanat6mvBWwCLva2flJgVnjhtuNYrSdLL4dLjBCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmEH3VSUhdx3TsR1KtwD3%2BrEskUSH6BKXhwYDKjnvYELA8R2IRzfAGpADkNoXfFhO0mCiY2bQQKy%2FfmW4Sf2f%2FxqMd9%2FkioLJwEFQSADKEwDkNLQ3eUSs73wVzzzSeI9o%2BA8yOXospzp3f5cbA0JIfaN%2Fa53WLIpL19%2F2uAaXrTSBzBimYNep5CpViIchzDZ8dgy0k323xzYoicGwsHA06rIA21SsU%2BxDtoAr7TuNSPpEnjPHSJsHHEepyDFzf1N6ppx%2BEz09xWUAr6hMmt%2BIYwpJFMtuTZT5cXCXdieffIgy%2BiqLwupZFzAzsXbbAQjetSEvepLrHc2Dbuq4FTNYGO3qS1ouMRWC%2FHnokmmPrug8%2FQkRK%2FpvIG56xRRAgJk2tmPPl88ez0LcrqDLntYanLNohcTbHjaEdz2JYfNTiBKmc6rkk0epP%2Fzeyfozz75I4Y8eWIOOWVW2Dlqd%2B7PwSc1n8c7n5oQ7yNO624xDSa0urOU5j9T%2Fi49FBXdff1uPJDnP5PXeUVNmHcXF9RK9dNBlaQeLsicnvN%2BH3jj9iQhHPdd4JtU5G%2FEzSnz%2F2IGZ2nQ%2FR7cE%2FgcyXi34rjUEnM0w5cUwfZZnaPF4reU6DfzDOHgWY%2BkM3%2FLQXbBZqkmqfUHwaB16WSlba4wnbzmvAY6pgFZW7UqSa%2BK9e4tp2zBe3DWxsG9mZ93CH506wWt2dwNK6H4oq0dCa6b3UMe2yaD9Es3F4AhroD5fWucF2RRHx0TDVBESE9TaVsXNLDv5USb3nrjx2PkLwXtSUGO%2BRY5JX%2FpENes0u%2BE51xxdNR7q%2Br3N4fG%2FBHWtPP1iLHdxjics%2FQX6YuBHdn%2BRKfjmS6ckJb4qmY9D63xS3cDUClZQgWgB3jtY9P4&X-Amz-Signature=0c7a19ee551489fd7b93f0e9c17f6b26a014527a55c95f1b266d3f7e834f6ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
