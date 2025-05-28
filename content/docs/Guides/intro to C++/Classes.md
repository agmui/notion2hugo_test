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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBSXV6L%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuQIlWJmVvFQiCk5Mu0paTtxS9%2BA5Y2YuSud%2FUKJqJgIgOmFxukfYbYJHICtzBU7FFdH3QqSwsXq7vhzT3sQ0CzQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDK%2BqbfhVs5uQi7KZTSrcA8HjO%2FQzlAdNduOsvPyt%2BFr6misNxT9ra9Tg3XYfqVGmf%2FTDdJJfNzlqDNZxVEeUAFxBdtrP455VAkKmV%2ByROwZpzWaNFOz%2BAz2vp3hJNZ%2Fo1C5MsRWfaBvynf54CCwMdsOQ1QLBq7js6TK2vbDeu3THB3IEqbu3fq9iVFDjWppzjKGrak5i08Y9WUKcT4IRO7hkqlcl3XF7Iz6ws9FXSlrwDROfMLMP5s3LCJ9KcbG4L2V2fcIqi9yopIlGWxb%2BhtgJPq0xcrjq4otfsYhsaKAHqnS75Z6Bb1yQBno5EmQ%2BPtIptDf92XPET4ly3esSXun8HuK8J84Jych%2Bsd%2BXRtLvnRKjr8BziHVbQrjXaHAZS2SssbxmhJAHQPqNipbLy3tMmLCWjiuVNC9GmfcipFn7kGZqKo0UdVbtUAT8RxxAUqGstNwNBqg61nRgj1JjPrXHCS4LN6aUDDlTnOOyVfhmX2ZKeok2b8cezXpZxHa6u6VolSYdUFlMaUmKERjJlQXKHT7bt47wIAxApvZyV7nL2pp9OXKK7AF2bv84%2FpQ%2F1P4%2BK5HB9Z%2FhjR5M%2FveBJPzqOoMB6tZcb3e9%2FlC9H8rp3rP4tU52o6b8h%2F0bsTK2M3rQfzVIFSnhn2hGMOqX2sEGOqUBUtNIoBV2z6m%2BoxXDnW4hHFMB13hbM1uaZT4P340Oxxkz9TAzM0i1p5SG9N4%2FNlYdLron59JljzRnQaG2vIcgJXwTMPu6ajR%2FgWhlghU3NUWctBbZ%2FHi7EeBnJi%2BgDQIWXxsGzkwT59yS2WZ5qK74YXhSiYVZ6alemvRkWOIKXWGnPH731F3zTpeqN%2BWHqFGvLOK9ID6Bcsrx4VLJNHJVshghytbr&X-Amz-Signature=d5fe126b1a4e7cc3f6fb0f7a305c5d276f5dd10c34df23047902c4bcc34179a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
