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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U327F6Q5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDZGRk2W8N1LdpVfquOSJ7v74Exz9VvkryrzzFSO6tpJQIhAOQO%2FGxKwaabZBbc7VuAkJ7soCYWeyQo%2B9BE0%2BGeHRHLKv8DCBQQABoMNjM3NDIzMTgzODA1IgydsxWwJ2bqAP6wgK0q3APftHMAIplUfjh85gW50%2Fc%2BcSRFIe2LT8gzNtopup2yHmBxtEcKSjKwGjFbbde%2BEYcnoc2RaOFeuKn8up819ufA%2F347X9bu6JNPVpaeFIA5JGU7KBkpG%2FKKuxRzVHjmJna2hSCfwI%2F6j3xIdLdgfe2zjzYIOxXVaSxMT%2Bx%2FAIxliybdYX9QRAs7w56Bv9LVR5qEU3cAiaSVNiY%2FI49K%2BGLDN%2FqiPpKTtvswgCigdtyefYCOgI0kEYbnJSp6%2FfBZrDeglfAwp3r7wnmtxxMuj8Hhh43Q1B7xpb6rhrg1SouwtNZgzNkznlC6j%2FoEOt1yHvRzd%2BtibHOmgznwJNv1ryNY1XqDfD8QsYjwc8xQrJPp6F2Z%2FhpoRV2g6CfVPQEFS60hJqgVgDGpiVF1l7g8IWJjbob0I9HgqVePXDQpveb0yvWfDpKgXc9k7LXLyWPzIXEW9e9JrY5cQxbwIlImGsef7WqMbkNOQf%2FujRkwqGePaec7yYQqXxbbbw%2FgItthVAV3zugIfr7qsfmfywUOuw3KpqFzQeLl97KOLmVOX6ho5oi%2FThstkcHKyua%2F79WECbVrzagk43WYFLvi%2BGORYGvGLkDcVGKiQQcP3lVXKu2nIIAOJDskfWHLFzViXTDqvKjABjqkAQHRjSQhIOYWnTfyNEfkZwM3zI95PXI7qOb1B9ke6GBc9Zsy7KHcPx%2BywVZk40I9gbvWAw6ZPbEZTGcf0JovPAD1v%2Bv5YtOaMN5E%2FkdR9mwkW3o2E7e8Hq7KefDK%2FoG4QY6Addp%2FvPZXabDaYEdBiBRHaVJp8AxOtVJ7vMkP86KyrvcYaAYvH9NEWAKoT1gw0NWz3eQfY8rkMSbW3RU9LknCzLXu&X-Amz-Signature=5a4be60f53cfa793bd265b8f6ed757f307f64d9b678f1a4b586f6a4fbfc67893&X-Amz-SignedHeaders=host&x-id=GetObject)

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
