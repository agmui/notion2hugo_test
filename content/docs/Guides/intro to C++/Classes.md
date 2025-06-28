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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HWQMDI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVOjrO9JOFH1qpnekhKsppifNfTQ9madjUkEp%2FM%2FviwwIgPWRlz6X3fzUC%2FMfRTKlq9M6pdOCSbMjqI3cu7J1kUmYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjkwPJy2XBqPo%2BCXCrcA5LVMLZsT4QlE%2BauNHG9eg9HRP4Haspl2JBCzpQ2nTRIpF0aabLGQtQsbGmcVmAclHu4OG%2FCBglo5rqOzVjcRzUjikL7Ks6oSR9GR17oI9L6LPVRA6YXEKe2zIeKVAqO6fI4PiQfloy3H3fEZnBUgS4T5pBJ6ekvq7HS6VtqRtc2DEYa19fQvPufYXpeQ7WEI8gqNhlQWCrigSxHRp5XMORNg0QSLptF3gotNnNyIHOsgSFoaIfkyGA3EeeTBZjOZmLulOk2%2Fw1cbaRg9SuLqLtHfB6ikfMQpynVKA2X%2F8P%2FaISwvRwAyqVmRdDwiwcXpviAC9Q%2FDgGbo0bw4O%2FjBZ2ATIj6qUMDjBhGUlta1fKP%2BvDjCUhhvGFIzmp3j9VHWtYUi7NHgJ5ydzpH4ptaLOTKee0D8dkoGrVtHNd1zRryjd7j%2FiNWkHf4koa26fCQ1iFbp0HqNhC1Rn0raSKcly%2BB9PZ5Tkf5%2FFGO3cGX1rcC%2F49CZ1LD5XYJ8ympdZJ5hkbvYbqlgTQXr6WI%2FHCGZsRCO2uxZNt0ru%2FW8V6NVQcYP%2BI0kf3K1m%2BbuYYIdxYkUB6b3MmFyw3lYmg07F3lo8V15lnQMoKl0dAgI1KSpqQlUcIGRCgSgiuafATaMNSg%2FsIGOqUB8Smy0sk37a68RWUfY5Bw2ApfMyzXlx2kBtdeeTl1mUaKSdew47qPe5TYCcqRSvFoG2PSOa41HYCrlRcHltF8Mk%2Be%2B%2BO7QG18fmhhVtqGQC%2BhkEWDPk2FpvaxyqVhgCOsivin2fFp%2BapsLjr2J6GqLtT7Mn4ee3VcYveVPSNMzR53x3z2nk3Wso2hvEVI9u7uJmChCmrnTtkdMwtrMwv7Qz7fHFd3&X-Amz-Signature=63234061b65244d409825024eec79d788ebee7e47268a82e767ff286d0b3b12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
