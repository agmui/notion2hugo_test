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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2Q2TBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDox7wfpkGTZa6KU3XhdMKdYJW6AxqSaHR1nuesqzOnxwIhALcx%2BYjguMrdcwjI7yi4BMQ5heu7HqU3QTZOPPH%2BK4jBKv8DCFcQABoMNjM3NDIzMTgzODA1IgwigQyyFUUexY3sfZQq3AMoicA9LptDTJ9w776jugPFkuAHLfnjYQ0Gw8vAxhz7LjXzLav%2BduEeZD6491T4koP5YO0gf2ka03ncbO2tAe1AbtGcjobSLK1TL%2FY0ZhkF9m5Un9Mhcs27yao3TmgVSk8V0oEcxVhrbzEyc5IoEk%2Bq1fs4su1GheeFKku1YnC%2BmwEUFvCADonnHPWe56KfRhv3odMbjmyoFc41D22f9BOPPDap57p7eMbquzlZVv18OcUuvVzqzmLGiKmLMZHtLBaQy50Wa3%2FJ0b3MqB1aKBSAU79TeEqSgkCCjJWeeC7W5HeQ%2BQWzpnCIzTTnlwootZkeDwZ0W6sseshqCNjWmrIo41Jc8Exd9pcu8F5tg4Q8nszYGXCxs%2F0tAmvMURM%2BwBYphCx%2FEeTG7S%2BL6PctBTE5I%2BkU9uLDYQSa0jACevUl06gtY%2FSY7fzJmMFYJkrwnB27xXUwZQCO0wyga9IIBA2eyFg%2FL4grJhTVOYgd4SI6eDaaWH6uTUwQsIR8w5ygBdAoPUro%2Bebk8A0em%2BKyx1ZDYGdVtSLt0Q%2FPSl%2B1NRLbWVMW3X%2FxgphABT1GehK1JHYQnuvnrZG9F3V1tZTma%2FqJ9Xuudcw%2Fh3K5NFHO1xA0c4HzCwc9JMExZBMt5DC%2Bs8bEBjqkAVv4yB1%2FrLtHhvAVDIMfUb1k%2BsVNdTQfZk7ZHAu4j9NBZ3XDj2DQ8Wr%2F31GssD3h495h5DDWMGw%2FIlFyj8rNnJTcBoOT%2Fl9GBiBsuBOS8ptTti1fhIUOPkEzGGOmpzsMV7nk%2B6qWT5R5%2BGyIxJs3zZgXQwDRRDqN3E6TajKQvuDMwe3HoPJNEgQdRsFclGpnncWyUfpimrLUzgUNjnyAjRQjk7rO&X-Amz-Signature=3cf3f111d918c65e5a8142b6c3f3cfc248be847459e59d2b169b369d7b9ab7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
