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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJXEBV6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGOmNkbOuIvFqR6%2BQNPubcK5ObxPqYxRZ5XBHLulQvrJAiBBuRCLbZMUihAS9O9yz%2BReXYwY%2Bbe8m3Bj2YcaikmpnSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMbOAFiNmrwrmuBMvYKtwDx5Mx77v8hECSW3ag2NPMQSb4vRt7fu3HYdEboPcHEdiUQrFgzlMNANt5nMP6DFBzzwmYEKCvSDdoMJZ3UtBz7xPnT5mBNozWVZaAZ5J41sOIpO7Rv8FSOvEmhQ6zy9tYlEtKRP%2FtVO00YDu8%2F6d7DsUvJHTwTCBWfFYqsthr0jnXZ9Mrjvy7XxL5nix1Yd%2FIOxsqvTs6d1pachQr2BZzlJTQokZdHUmGiY2ixs7QMdOd2hgiwg8%2Fd6XLfrqQarsVG9Z9%2BQa%2BrTZiehxAi5t%2FEEwSwW2lUjCDnAePTzcE8Rt6QOvX96PkkGGNTQtutC6Wq6jtcGMWuHO514AUdMhDRMP9q5jKGNoR4xdwhFd5TQyiSX6Y3tB%2BsI39mvtiaoUMOLl83IBuW3NJ%2BdE3MOEZhGDvl8GTbL9OVUxe9jmLFsSs4jtW2wg6Juir%2B1U7KilR%2F%2Bk1wtZ2JJdUQz3a3A0Hk2%2FYxh4KBN005JBg9ucVpYyDalt4EBvHuqfUIXo08Ko0prEstbZdrtaD4Iq9WjpI%2F%2B4Pn%2FzRuerqSkzyl7jJsQTcDTUtcZxJWXEl6mJMt3WvBq7jf31ISzciYBfiPGqkyOZ11PFF5xBDC34EWIeRAKP999gYINjB1e2h6PAw9fCCvgY6pgEDQ4ro6TyfHI1KK1lwEf7IiFvCNKqmh5HZ0wtJsD4OKVqV4b5MpYyznEKa1o7p5CJHezOLZZTdSfqCg8UMoHD7j8Qk5CeW%2Bz2AR1XyVs0NT9YFXdnqDHSL6ctJy5ZlmDTI8Nog%2FJGgF4slBdXglTlZE6%2BGr%2BgkBQy6U%2B5JFMXcEoddVz4Id7VwuDY6r4jJRRiBTv%2BtVaeVB6Z1pwiagm3azCX2majz&X-Amz-Signature=e38a99c95160d3e3a8a0924d81f755cc3d4adc087a90a21d12b19ceb9537e6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
