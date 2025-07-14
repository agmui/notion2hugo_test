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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZD42DCE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIF5d1SSE%2FKswFh2K0rcsaoI74fqWNGpSrmCGFeglL5rYAiAFyH4dFMKAYKUTN1PQzsdyyy2vBmH%2FdRyMOTVgATGDIir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM7NlFWcwnNsI0f11vKtwDIibM5L5%2FhDEVe5WN4A2xUriWQ4gNZCFwCS89POeZLY0sTkusbKRW8F3%2BboI43VsLH7uTTBDe3wnkk94W7SgOMbNLD42p2qiaud%2Fz%2FO%2BgOASqSFQqSFhZZhquab09GMACu1U%2FAxK7hQ2tv2vicyqmqtY3Lwd7jfjs3cnuI2YG2Rh729kr2IqyzdHXsNc%2FbGzJRlpJJCeCRapEzfUjgWRlDrPZdC7waZuhaVgHqA24mZTA23r1ZVvYu7rd8cbjfRCUt7cdeKii%2BBlOIVpmhBwJECobN502yOG1WTvJy6REveDZGigbDCSQBOsT1zQb3GiXmFUuYpCHObagpzsVYm1vkJOSvtbTTc3ZlKW9k0bowA%2FJfI6Q%2F5RKIyOa0hLlY44csgDSFw0OKMESBPOXlZsNGZ1jIvDO9G29C526JsSnZfaS1EY4gMKoUNgGvux%2FNBaQ27Ww7S68dQk7RjuqYkw4m%2F1VcBVx%2BhA9ItQVREixsDpOLC%2FlQgsWzNitHVN3TR9sqRVY0uIPn5x73PCnMHGb5Ycc5GOCXFeFj%2B6nGpoodqNRsORBQGteHR%2BobB1H3FCnpZSl9un5MEUgEUs0VyjDzxJyxbFpU6NqADpUzAKTju5YBlJRyYudETpTO3Iw1ITUwwY6pgE%2BziElTHL0rYNTEABJv3%2Fq2qB5fDsrXpOnl12aSzOYO%2B5zARXL74vhQEfBv%2FOdMq1MJs9iKvaVtKpyNQdOX4vUDvIeWB3UC5gtZTtz3CZ5lS9z8aJwJDSb6xN1XqWqIEv6mX7AiAPDhhzC3yb5Iag0JsFw%2FImv4gqThq6qkee48rRCvj2uZMHvYhlcm41s2KJ%2BRP7Yt%2Fd9vchxeRoKDaGZ7%2FZ%2BiWj7&X-Amz-Signature=f08a78b0306a999669c583bb731330402010545c1b2344e45ae23e9fd6f52d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
