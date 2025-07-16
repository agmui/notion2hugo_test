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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIABV7O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH9E5asJkCulxwFdAIIuTpbHxM%2B9u5DdSoYwXuRwmRLgAiBWJ7vxIA7U9ws%2F%2Bequx40N98nDZDJRozDta%2FllZUYQYSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2Fs2BDeZ%2FhVlh9CyUKtwDE0HxRJXPXa7gAh4Y8N9TO6A6RvUASC7fVA9fg5RyI1%2F3b9ITq9h3TqaKiZ9wzsz8ktV2y5npNG9ZWHtFb3O6sUr9Embj315BgaafX%2BIulJu2U1buPyufCj985EwiMSZ1BstCt%2BKcL8nZ0dvo%2BTpl3MFlq46eO7imsWWNPgF9fbBHfRtOnNqxRacbtlkzRV27JXDDxcH5JrIcfp9WA%2F%2FrEin%2B8gEj6ImkHX4Vy%2BKPudKiULei26A8hl8hzo7kq1E1TYZZCH46KorjYdYL9ocTbGLYHwxxgOTRz%2BXfCCaJHMCX7e2Xc6Kzl5S3V22AAHrl1J5vTwx1IARTaHD%2BoPBZK4zPuL2lwiGfS2IN7%2BAycbtrspgnWDGJge7bgCvWXBWvtaKNTU6EGMI6VLdyn5NKPFh1QVKIMMXGJ1laTWGDA7z6nRX3mhujpspCW2Edjmd0wPUYoqejiitvHJwdOfJjFZczAfdSri%2FYD9igpQt%2BXDrW9nAbZ05pfQaW7tn4cKaGyaWCZkXa08%2By1E2p%2FW5tGWLy2fxLxLi%2FffMfTZcyCD2QkggP0AIjLmrUWPEUsPCf8jxZCcny0tgK9pX45occA8jy6ZZ5QTTCDSNV%2FOalINKbUArRhYEgqwd66g4wkZfgwwY6pgFFkgLMefLRGqNNsFqKwMLGwFJMdYPuEwQLL7N3NSzx%2FihWzs%2F8Hk5xAiIxR9FsuPpTusUBtEyf2QZnGlpJXQHXZvD7%2BV7DPNQmQFCHV%2BW4jBFlYfs2o%2B9uDCjQMz2cGSP%2BqdkvnkBtvYsWZwY5Ak8VFnXQzB8OSe48t6hPNoxiWLZ5WdGm%2F%2FUQawiS7fsXDB0%2BqAyx64HFqVa9w3PzevFkInIq1ptk&X-Amz-Signature=49b93ff896f655bf2c1a723e083beb4d9a800b5bc97c0bc39104a3103a0b2ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
