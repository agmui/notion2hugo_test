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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD2AI3FZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCM6clh40oyivelhawWy%2BN1zd3%2FwlOSvXrVuE%2BR1Mi1aAIhAKDex9qjN1VfDZdgJ4T3%2FSinTKq%2B2zxht2qxJN9U23ugKv8DCDUQABoMNjM3NDIzMTgzODA1Igzdqo8xmmCX5F2Lrfkq3AM2g1VEp58HaN4HwzxkCcl3RG5wp2Kuf%2F%2BDMZOE%2FGQ%2Bakjx%2B49vYCv7%2FjgECj3Je3mGX8oQo25zCteGcuPyPWjHS55kPwHEQOEeg6%2FU9Jp7obQ83Cgjg%2FW45ryRNHIJGW4uv%2Bj29UfZTTfqBNR3QJlcZGdomlNKaH9EPlPuTjlukUN1GDZ1zL%2FiJPK5lkf%2F9AQbzCNo6IRvWg%2FZtmjOiUHm%2FnkxMlkFOpUFRXJLFFuT5aAXWIQ9SEcM3RilwVGB89wTkKb%2FqzkGEL48KncjJk0oipuMTZGAN4WIYyb%2FHhUd6i1JWB9wLITvpTqn33FgRTdHm99eSTFH1XvtWVvpEPYs7p2gMIycV%2FaFleY%2Bj%2B41EhUYW4XoMPD08RmrJpuZUNnv0WwzWRJZ9lhGQ10uvIxPcrnHL4X5QxV3e9kzqsI9lVsWOP%2F5vDX1vW1g6HyJpjDq4QKOVfPtlnsNGkoQLuKwqLmPSbEQndsKIxvWSzvBAiQ1uzHeOUiCScCefi9MyU2mli1gOhSYpwVLw2AwQSPzqkz2hp5NQFGMzjbogt3t5dC9k86aiwiU7ah1SGgdXUf2WfXY7KGqvhNrKuJiqoAY3J2ySn5ewbTwURD2STLEpHt8V%2BJn2qmcogTP0zCB9c3BBjqkAZsDc7wjkW4%2FhQBm7A8xzcSYUiKVlYF0QWSZ0jZktGrc%2B6uu4%2BLlcornP2L%2F0CsKZMLf9701XTDEfjFBsNHS89KZBaW6lcP5m%2FlXIrVm8n%2BRiyxOokDwdSK35AeqMJlpHDhBQyAUH4EE5zAm1NZtQFWapNOwnqaZCZ8pr8hp0rYvW0AemJqcbianxHZarbuywM2SL9bJg8YCKHdeBnrVJ9Y05OAz&X-Amz-Signature=cd4417dd3eeae346fa18c60abdb591bf5feccab4b6c92a7417b8505b404e02dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
