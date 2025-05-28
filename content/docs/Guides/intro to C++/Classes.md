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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4TZRS3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYbU1Iou1INw%2F0v4U1rdYwTaUH4jyTughLZJ9mryNqgAiEA94E%2FB7MdlNUNqAYmjVfDtFhbw9N%2FPpY4nWULlIcDk5sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKCffeBMIGr%2FfGPNnircAy2SCT0F93JMFEaiKGlbUH4f1m%2BOMm4Sn%2BMO1OUyJWZjX6161Nld%2BfF0VBRO9gI6uZfCWNwwF1cAmJJZyyqQbNw3ysLwHqqvuQiAcET%2FG1QvUtJ%2Ftkq4CBrI1rte5DBhTNW7rQTA1l2MyxxG4Ubm0cp4Jg%2FXkv6gmHXmYd6%2F6tizL8zN%2Fql22dN%2FuJDbi%2FOr1JOkf9geCQwzAeTGuF7JMzQRHHOF4QAOcOXe6rUyZpnOcUVdo7ASZnbQOQY7SM%2Bh2zHRH3lGNoURZi%2FXMfJRhLRImv4bfe81ki7vUR1b8%2FX9uqs%2Flumdwouta8wF55uMHqWG9mAaTsx%2FA76ThmnK4VK1sYmzcbhbBDm6hrcy7qz3xgCXp4XCEdgnk4g0fnCazy3jrlp2fUWH2YPb0%2BPNQQ9eG1ZPDEZXx8KEIb2HWwMlTsLj6cUSrfKWaPV6LTZdjCUBgtk0w4m5KM3fNalbP2a3yvEY8r9nwF4RVODn0S8mKrFePEjnZNyTLHmP8kBxGQDeTzKsEA41tmbJaUTZn0G5k3CjwVu5xFJ%2FC8fFweyTPmTyLkg5wjBkYZpCrXj3j9tcpAFrYTeeN6UgLAoDxAEeHewmW%2F1CHUKfu2G5Q5HOpRxoFrxyu3HMSQleMNiS3MEGOqUBAX%2FMy5jeZqD%2BCOvlu%2Fuzqzx48pQum%2FKfoRv3NBTK8Q4wnL46AVTk%2FeNX%2F2jnq2CXw7lwKuzBtTdS8bU2CqfFJszuPRBDQWQtijH%2FbFJK1E2PnNH%2BEscr9SFMUawEbgFtQbIRNJnahvDnPJrfj5LEsUba6lyzWObOtkaNOukN4X7fy3AfW7zQ40HNZLs8pPw%2FgDcR5dtDrpoqFIw4zAjHsLve8XmF&X-Amz-Signature=95047fe9f7916c42bc2a30cfdd934632912028116cff1ca0667720c738e1385c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
