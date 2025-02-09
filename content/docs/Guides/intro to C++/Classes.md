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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5QNECO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4vpvP2edeNI7T8MfQj4RjsIpBQn%2BKUdEL5J6yiWoqXAiASQ2Xy0fcoWY3zihVZGKYWYaQ2yABe0RiAiWUZE47osSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTiMxR%2FuoXoJzkt9KtwD14uc5sT3kgnbZwbT86HI%2B3T0c4OAm4Q4Sdc8pgW%2BQKbu6CasACh0jJIMlz%2BrWL%2FpDa9jAhkSZFtCg%2B5tXCEa5lONnT0gLEOZmd4Wa%2BnTzLfhB12gFGDZ8Wx3sEqq7innyaq4rgLoRAnbb%2Fwabu4yQ7ra7wAoHrGdYRy7q2z6762rHlkhmlHIMA87cpqisdq%2FakWSca1xaswVDG%2FvwAnwK832kY%2BTIEVe3Z0NmVVn9aHdAghIkgtmhXLW5NqF8dN6SwPVCO4N9W3D6AXqKMF1pNZCOAIzC1IZJ2Hcc%2FLDo3SQ7jCCziNRj%2FjZB0YFU%2BVltQUaFJjinyKkEGkbJnDojbZ1LiSGuK6cPd%2F37owz4LpOuvmDL1NCInyAy96kZpQeO%2BTOztYN8GBeV3vNEq6OTqW%2B%2FHremX3qoLyUOa92mvDyWPbVW%2B3mq1QmW4TGXoiKxAW6kUd3nXiBDylEpOT0KmLN%2Fojw6PNaTWWnUS%2Bk%2FtIpBQumslknqEDrS8H1dBoaQN%2F44TN9RPJHEp4BFRduPAxk9agw9MCMa0ni%2BGm8%2FQzKx9fz67LgT%2Bw2D4ffAUxCI%2FrXHNs%2FKJHtJ%2B0EXBfyPiX8RfZ7DGuxHE84L16%2BijbNI%2BEV5jHXogt7KaEw7eOhvQY6pgHCRZnIVsrkq8XdFueh%2FxRWoNu5zv1cE2QC0oBSxhDJRbzPEpXnmMLb8ag8CR4Uhg8GWEyDT%2BruXlT6%2BgtsqXuOYcDgmmRWnjdEI96IRDuA0HqhXCdrKSWYePS4o9K1iuXRbflHkMGe%2B9xu3qdKApk8%2FAd6ZCbl%2FnymuCxG9j%2BlzcxYuSutVzvxjUq4MDZWwSbtwfN9sg9j1pjKMzh00fM2OTGKcMJf&X-Amz-Signature=eb5389acc7efd200cf96762e759aa61b5365c63cb54351b02ac5e64db53b5be9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
