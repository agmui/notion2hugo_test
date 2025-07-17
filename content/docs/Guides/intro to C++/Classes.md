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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUV32OG%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDLMdUriusgwee5Bx%2F0B2etsk%2BeMrBY74VUbn9ssAurMgIhAJ8RjCFcbRi666%2FW8HqSg6yEw9tLHx%2BqggqdS35e%2BPxHKv8DCHwQABoMNjM3NDIzMTgzODA1IgxLuO2x%2BUpJxfyIRl4q3AMY5SZEFhUCgM1aTRTyVQAVh21k5GgAkNzm9aJOiz%2Bvm54xpN0E%2F5ijgJcxEaGe%2FvSYxz%2FoQe0KZk%2BTgoij%2FSirVJL0epCD5nrR%2FSqSQeD4pQdrs5JGShIOheirM6G%2FOPSsfv7I8xkqSPhMuaT2t29OwkJXqlPYH2rdIUOczBnANIFYsXeQHa1nboeWahXFHZ91FC7ky8%2BzHy5Iz52uS0fBRrD6vG14TRp5BeaI62GuR6IQ3V%2FIdieOTgT1N5oirZObwI%2BRXaAOr1jXOtomX5DgDFAVKLHlbRmN8%2BjMq5idfYS41wKSLYg5I4R2AX8Wt62NpVkR3%2BD%2F%2B1BARrOIh0tfNJPjOJ2aSQAH0RRPMpykHK7Ss2lwtkM7%2FbCQsEUbdViuW2xb8evgXBeGmQU0mXH%2F8qPG0aN7WxLdqZr4SZu90SgfhZDrHuo1bzQoEo%2FWOH4NBCflVJ3htHa1KFkGJ%2BgONTAdRKlGyPTQ98d%2FwhR%2FNRx5mQjYt5AOz4ZipHCEd1%2FuHgAw9gWySF9zV4J5901L6KZ75U6Zuye3XPqw8J%2Fauu6SPCsXhjHg%2BPUciGN10G4PuarNiAZgmCbupCkB43IMFzQEtZKPQdj1XLbqo1B3EEa6ME3Q5BXFEkcFHzCUjuXDBjqkAXPCxXiYaqvkPBGt%2Fm7DQPbr7LVXq4lkoahuL39m9kcOm5rr6axPTMIfs6xQ2KS9PU9CkVLkQKGqnVfG7S7qN7E1PXWXdipwjUmggNFuMV5Z60MOpXE0aQMtAAtEbr4vJT6yTgJN0Bf%2Fob7blVzqIyttuMqQS6VBM9KUq%2BMrMEenuerxhKV1MNq0VeFajRaNQHZwZJpaSOidfGgRZVchBQMwveJl&X-Amz-Signature=696331e98ad021cf1ae8505df9ce4b11caba8c982d4bbfed958ce275c5dbe261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
