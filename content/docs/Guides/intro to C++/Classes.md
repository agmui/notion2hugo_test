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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEK7V6D%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD0jukTWgS40aJZa8hUI1ZIa8hQV35fQrBGzsROkVzerAIhALV0UpyIEztPkKpKJMT6UuMgc%2BTfQY571vh%2BuxBAZUqnKv8DCF0QABoMNjM3NDIzMTgzODA1IgzfovT8EZmwt6xgh5Qq3ANb7VKwM2AhT%2BScTTNC566xj542nYigKU5zpEw52o4TJSqFW3uXkHQAi4egAdffguKJujyaYkxomWi11oSgG6RKRa6Jq6VxWAQZgiy8oz1lry6ni%2FsAWlQiYaZdr6Zu6YzJ5NIbIMpG4SlQn5Lx79OjK6PNX1nXrtxr0a1%2FjEDpNgoV1PTG4eriyaj47qmAUMjYgF8ixalq2aHk20mUIJRLPsYY2SV1tfL2DKvbWH%2F0zDRGzReSjWnBn77vDTecIj3g0vL6YQjVUCRaHVTto84JMCaF71yUI5vIGVdWr2XCqcsdaDifvG4ArO8y9lJ2ifTSztPnTDM1FvGnWn2kPmcmlMzqmHHN8lg1LVp9djPkw2UI9vYCy5kvxgnHYUT3SqEiFdUfRAUjBIxxtK4AXvHw29WM4E23oiTpsVbgLJrVhcGPVcorVxZV3HG%2B9TR4Yq8zt6rNlCNhPfCamG%2BiW2Lb2Wph3orgwBrDQ1N6DzI%2BNh3dzbfz67YyIizHslOCZWC3MGxSR46b7dxL7O7w1YYZnq8PG7gPNCLLoVuWqT%2BXkqKdvvq6lWikeuBhq2l%2FOGv8k4KO3tiJ8N3iJ6iAF03glVIQaUvFu9vs1O02Y9TmEKLlbehMhiPjePVsejCu8vTCBjqkAb0Q486eqnsiimt2WGbK9gcnmWpvi91w7HB58b07kkLnPW%2FZ1zQqlIiEwfruvMvbLAZTMEotV9epDySMuOXa%2FTbLDQqUQjvfMVxBZ%2FFqb6Xzp1wN%2F%2BHb09j9x9Dh4fwV6PAdRpbQQGWj7y3REn4LJ%2BfZmsGKM4k0WybM%2F3jScJBl37WBmE%2BGz8G6jOfQfj8F9rUlmBTwEEOIH4D58yzsFfGbK%2BP2&X-Amz-Signature=2198743b3e68b763f546ec929413cbbf4aabec662ba05bf8e2ca77fd23189f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
