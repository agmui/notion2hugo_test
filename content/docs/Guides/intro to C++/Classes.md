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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNJMIM2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDul%2Bzl4Cd6qBfd7xKEm7aEdFAaECC7hdZnA7NpS9HSLwIgchzE8gn9qYzH7tOKGKlycr0Awp4MWhBI2c9dw6v6wT8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFt04Ue%2FxmrXlfQCcCrcA%2FwKaJMvWml%2B%2Fvph16mX8R46ULhaBPCqiAfTOE2zFhnmff%2BO4FCxmhEevqqe710h3PAtyBZziwTFgZ%2FxSWCtUgmpCNWmyv3djPmSi7cmE06OIa8jWsxw8etPtMY5gzPG%2Fze3jLsHC8yPX4lLhkrKr3hnflmbmjYXhCyQxundxFIrJlqBl1dcJ%2F%2FkrsV833WH6jA2YavweQ0kp8e0v34vwlTje82qOTJgN5oF4HUj%2B1U3bJrv6%2FkVfS9k1n2T3L8X1TKvC5QIYEsMkjm873%2BMpx076UCCgFUFQcofofne6R5ATwjCUOyYmrEINsdTYHJZuP0ksFTz0jZbNhW1gUJbJ1XqTB7SNT4QJ6EfP5nGzRZ8zlPUUDi5H6yRZ4k3wwjERRkSUex5qMNdWV3VuzNbdz%2FGjMMtl6svw7lAcXreR02WplVvf3tExuzx5gUTVgxKPTeMblXBFSKDE9HUgDNlSfb%2F9rFvJrrIw0JKSEPTAXBZEYtdFW9YfnitTwtzbN6QBnkBlwhRiOaQvQjASS1rST46VgQINnSCzv%2F%2BPKP90f03MyPW3t5hvFAGkASz0nEtb68AbhbTght2feJ1sslSOUxrB5uiycmitVyt1tQehgO9B6BPfGzOhn%2Bqi%2F5gMJLz5MIGOqUBMMdgChHl78vS2koIvCDX1%2FF%2FBV6lNN%2FYef3pS0caiIK3wGX%2BCDd%2B57lHY7aeXP6bLDhmAGNybbV9T95DkECjCuynzjKN1%2F4cW7OjsBzsyWQf1FDoUSK24TMhDIZJlGwqFVUhPp9vmMaPpOsxBjdtIVk4ZfyD%2F4SrhhxHeBpFppDEeNsqad6%2F4BHIjb8%2FtYM82G5zojXWxTFmxLxrduCNyIK5Hs8y&X-Amz-Signature=bf6385ffdc786b8bdb88bce27287f43b8a6037e97a863343be963c6c6c1edf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
