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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULICEM4U%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdESColKVKtoLwZ95DB15MgYZURAUOqMu02%2BXPE8MeRAIhAIYWcU5MkYUwrf3YYDEQc8sy27gvFtxeY%2B1riYgSEsLrKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAi6CmW3c%2BZOt1bwQq3APYt6WRKFuz8kHy0SMQNXEhma0kU%2FRsAq1W0QkD9sscDXGWyyko5HNoSAvX2l47zKadPpBIwTNBmQJEajv3gZmCM5YbG1j0Dr0H4ZkPFxgepZD%2FqpuejMGR8BzgBc7r2zgjaTdODOCeMb2zA9tboG9dC5bHm0WO0jmJx%2BxbLw%2FStV4qSOXSJ0gaqcM3gxIfN%2F%2FYpHCDQRjl0wp6gvghXA6Tr9b09BAdAcSjPKVKTKnWDxuNBbO61HQao8kY%2BuCTwRgcQl1b7NF7clzAAHin4sd1t2G8zf85uAmzdEVjdY6gT4psbuR%2BLRcpR7eQ%2Bq8wLzI41v1duCFIiyDITzGMTJbNoYo%2FL1qmHuwMH0ISfwGMAUW%2Fnz2OiNE3MK6R1k5xXuFmtZrK6%2FAeyMzd6xI2AmhRLQB4PIfETkjqXcqNFjQ8MoEgxSdby1lUBUyblor554RrSvjPCYbJmMSd8h13%2FUxQlkGE57igxe5R4hLxQcj7na4OXOo4IGOxR0nY3sVzhvdFuOzgL8yW50fTThhfDuMs4EGwMTKxacdF6%2B8ZxLOj%2FcAmhkRYdb1tcTADHygjYImhc7pCXpMUMZioZ%2FkE7YKAHC2llRMpA6NF8PBKTHSD2aMGqLsdhHMV33CvhjChoYzABjqkAQ4ZnyVUbN8kS5e6CPw4Wb8vyCwEbOhRoYX2CweJc%2FeuojmLEmaJPhCEA4%2F0whW45zJBmJJALJRU3TZfNeZUzos%2Fc04igwFk59VVm9fxSuNiKctKdKb9E8cqTmZXtMaGAJbbBPf1DvtAwapX9xty3VS0Uru9d1BjJXMLU%2BwlhbeQ%2FBGy0yzfsoW%2B2weNkVtaUQ9jqTFviU9Ar60gEpKdHwYsn5QN&X-Amz-Signature=9054b34b8fc5bf3814a9619e3cc701eed7f6005c53b1f6b3d257f007a412dac2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
