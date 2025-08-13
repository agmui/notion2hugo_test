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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2Z4ZJJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsBB3OxU8xQqbKyLeUxYlzNFxaNpfSi%2FcpHsZxvR04fAiEA1fdjOCOmW0yBMB7iGnTFyyZZ6IRh2Pf0%2B919K5QZeScq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE3pnMcG3DmvX%2BwT%2FCrcA0NgpSHYHnOHlJACE5uuvzbjRudnyVsslK0JfqmLk7awQWRApX9ViBT1n2lR4LbAfVwDGzBocOUx4kM7QjI3%2F7mxTEr%2Fbn4tQGtAzWDzHV%2FkHKS3SEs80mgR4L%2FbmWCwCoE6B4baEh8ApyUHG1Y24eyu7UhNTHglLbdjjdineqBbrCYBanCDytyTGKNKP6k4ymWC0PA43tY%2Bz27r6bBziLrJp4cpkeIme4079vagG9ziMMaY%2BD9jrYUyUi9B8b03vFs2UBZgauomnz904mY2b6wRrFPO4Tx11K4tPfT8FMIRTZJjrob9LRdpd92QQ%2Fqc%2FQMu8%2BZ5Mtk7UxKGUzvj9CBqu%2Fp23Ihzg4MM5VTYnAxrRkA7YwcbzKg7EWZI%2BwARxH2WCIHf%2F0WCOu8lFzNEZI7QgQFL1L8hD8BD7lRuhY5kSdcRXVjU58icrAK7nixRJV9rhVmZoytG0PmpYmABqysAB3yjKhcA93GxPnB31OL0iJE2G5jWMQu%2Fj2bJVZAiyoCCSqhtOgWjzhI2xb2PbskJmf5Ig2qCvJhUfV33ky7M0Ngj7LbgPyjDBli3QpbsmqR78ohTVsojk%2BaFSve0pltwswUyuhLjwHrQtb8CT1J%2FAoaA0BfAgg2Z%2FDcvMI%2FG88QGOqUB3VdHv2nzgEgScWTax4V9f5axQS9%2BBr9gLZDaBvOLafW5LahNOP4WQNZg9GTrJAMSllRRZGGEZTJbDMKyDecgCHIf9561x6Eibw1RmocXgdFq0Do8o4vNvc6Ge9%2Fcw8xhhHyDJcJFk6IEDUWVAaKaBnjDyRfy2V1ImCfVIUc73bak%2F2N9fPpBbVGEE1K66NXM8eNe%2FmwD64Y35ebJE19URf5gMknX&X-Amz-Signature=2985684abb64456b262689129d467c17feb39cb413386b70fb508581e10a5b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
