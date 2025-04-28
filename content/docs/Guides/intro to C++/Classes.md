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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKR6JDF%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqAyKVh6007sY4lUrPH4BLabT3QautSAYClfjTnZYH%2BAiEAhTXjEQk4WQufWlqD8Boo1hvGIlTN19%2ByiLUD3MPdYVIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNXf20Hx5dt7DdSvGircA4yVNBrKtY2QYhv81ABEpD5zbFbMSh21iy5wcaQ2GeyFSOpj3lWqhujWuwiBdsb1lx5mjpMXbMJi61rBPz6ffYgB%2FK%2B7S4C6f17%2BRGBWG2xKsPSxCyIzf4ZU%2B88Y5VQUZaQ1wNp4E3Qjad8NdN3Rq0vPODW4RwcHUDbhtF8oT5iIw0EXzqwkio744G3yWvsMp9F6bfLbgBL7DJ6xEyKOkNGk9B0MAquQySwgPXjimrfsx8hqQ1jj6jIBIE6BPQgunc0R5isbJjlq5SMZb53sUPaf1kh%2Frz9PoYeoepqtUoeB5gwv44HUl0uwDnmGI3b8UBxXR7Gxf40F8E9a2z3DdMlhmzgtxJkFF9kxSYovSIjyuGxEITHEgWlTc5%2BppGRdXeAv6GNIrUUJDu0eTAoHPGVU3Mdwt3Mzs4KSaic%2BnicFviXWJ9QNJ%2BGoSINRSrS4lJYmDYwczM2BxLirMdjt00YXGd4atz%2Bpej7w0jSqZUTDzCTmzaFG2sYeP0zmUOQ7Gsdj1AXRrIDPsEnQymHVMo%2FMLpSvOiYJD3F3U9rLLeJPS%2FT9kLOSV%2Ffng3vZAAx8uigv4vkyiIOOriciec1F%2F1E%2FnDmTFnzCuz1xppI5f1aGIWTVW5sSGQS5y2iOMKDSv8AGOqUBLGspqCD2jsC6hRv8mHp6m6%2FenIqDQPJayJqJJkiIOAZT17F6YTgTHDeOwBMEzKHEKG5SPAdHioZXtciLFQ1LeN%2FnD%2BWOs6tXdkfH9uXpkCesg09upP0ESGq2pTynNyM2PIijTcBlEbBg1wcph3UQFEWxLlGKs4s7CIg%2Br2Dln5T6qYJzQdghUzY0gnisi9jKjrlfwV0rkQFSL4AqCOxoyKM8Hhxh&X-Amz-Signature=57adf576834442b58aa2c3c9adb1b2411baa2f39cc9a32d156b0b127a18d0629&X-Amz-SignedHeaders=host&x-id=GetObject)

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
