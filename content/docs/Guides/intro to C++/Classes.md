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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD6UVIM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5ygvZ9te7wGa0H91IaaMJ7zwTqHueMVC26EhaDsiwwAiEA3RN9E6K7O3XrhA1iphne2TlPFcUwkHd82f0%2BejB4mCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaIzibGiLlsXnQNYircAyqROmN9gUqxodg%2BXQZyJCe1Je6r7gWldAwvd8rd3mHnKOxmbJtl377ogvIZfOZTw7htKUBIpTZFZiToemTO0Y4JLHcbEhiNFAAnUuJwfGcMkk5TvVXytacZgtkAEal6BYFb0syIYw0YUei%2B%2FtjpLaiJ5r%2BcbI0pyEvER%2FgsKBCjXHQSqYjFzLQdzi0mYbRIQgy%2Fql8UVuXS%2BbK0pWIv1nQTM5u%2Bulx2h2J9alMe74KfTm1ff8uSoVdhz78BL4KTTlDWLAGy9I%2BL2sv%2FcahV%2FOyg3L95txatS09g%2By%2FqP7KV4Uk1JnqLEr5VoGsPo9yuLYfK0FiiZQ3Ojfbdcflo%2BYrPTZplnH64lWO9nrIU74eb1%2BP1D1AD6I0W8G5mkN3Ynlh48FZuesN9HNBVbom7kcPZpHqlUT87R3qcEXIFUN5%2Fl8rMKF0M%2BsG8T0eWpqD1iLhbmpWZywUz%2B%2FwQKohfWcrh3%2FPyhgPhzNd%2B%2FwqR0UAZxXgVHnqCZ%2Bvbm%2FQptjiXzJ5PLpkjO3QC4vewj%2BtKGZM3O71rf8miZRJ8pKNn0df2aZlBLH%2FndEYJThmHbFu1R%2Fz6eTUTISqQl8AMMgXbcD%2FZ0GmBTdl2npPKhgYqQR%2F2rQ%2F0%2FKiCm02OxVz9MNaT98MGOqUBHmW6T0pKxyIAAWumG7QurHBELraM15D5s%2B4A0MFtqd4XU3%2BGlYHhfsh8py2vsPsB174kCv2czkMMZfnLsiEJg3ZcFyLvhIYCQDT%2BhdahRQTB8mNiPlCo6SdU6odxSCbgNdUN2WCFAIWk4%2FIwbEAckypzFsSHNRzl1sLaWXhAog22oShym9z4JMMgSoiw8hyqsnoj1MjwWBuc4HJAmEfucu2FrHhY&X-Amz-Signature=71764bef5de3455c477ca11af66ffd3f3d9d079bd9e081ba9b0b0ac9085177f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
