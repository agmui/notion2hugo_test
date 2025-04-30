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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HWYHFUL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDcGUGNruxLz0Cj52JIBObsRmiYDQ0hIfoY12x72G52RAiBYSxT2Xx8rD88dxlLLkSAvWvYD98H0Ul1A51q9pQl6oyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKAqTS65kOLYh%2FQxKtwDxtz8rHlbQDHMNPGvLZz4Rynag18Rlr1KMjCf7Ss8gUvwervyBf6SfMVmWZcZwtqkWueMu3Ykm0VSLhy%2Bj6lLkDIvbgg92RB2CuuvRBskAINIfrFbIS5o8Wpz%2FmmnyvJPOAJ7GacY4oDxfLUyOTD2blpPFq6a9%2BGWDTcbsZm6TjXWcs%2Fb3%2B%2F562R8PYI0ywDOz2DPv0LlNDD2QL3FeBamwryk1%2FKN3HsVryLWwb%2F6nSxMTNZOARNFwW5JoVJMvVjfOppL4%2FMDzSZetL%2FttpBAv7OMgmHKEuMufoKIwfm8CI8pkbbgNdTPnHrGu9hWsRGRhVP8rmT1ZNcwuwfQcwzwanJOzfeUvk1TzgPBtq2QSpfcNh3x4Eo8PQXK5IF0MfeONg1eJv%2FqPe5ZBfw77B2iX9bGoL1ukrz%2B%2FsrPm5XXcHhUeokmP5rthOavX9U26Qc7pVShUxMUT51QkTpPVAj9aEfszoLJJUTsI9Ly%2Bslu527XJ92G5ceW9DfZfzd241dwPzmQE3inAH9%2FmP3%2F1guXMZEh4DtAdh2bNFSZMZT7mHmZmfAo%2FkbIHl0OOArgHo9lo0YP41ndKnflc%2Br5DSfSD%2BJj9MbhKh1%2F1VwDW%2BLxHWG%2FuaScKmhYw2zjlawwxeHIwAY6pgFG9ZnEYmxpAT%2F3vr%2FVQXy6xsQi%2BOw6AvokEbKwICucoIWhuHX5dglXoVFDfkQAy5NmUnk3cIV6EYeOhhcUeIuoWJjQGt5OIjWaOG02lvZDAUMbX6AllHM3r%2B8iDeac6Vr4egRhcelq5G6hDsA1Mgw8RevFuJEfbTqAyPEIpJ9jcV4f%2FBaDbOWIfXjFPKgqjsGSpOdLRz9oijZW7w5HInsPxp1yvqrj&X-Amz-Signature=7256938689c3642661354f57810d278f9973a065af5b3e9d791c68ee5b6cc75f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
