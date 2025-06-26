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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4DFUAV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0dB1Cmvr1aO%2FqmnlIHMWkoTO%2Fq2sIgZvctMrt4653aQIhAK0Z2Pu%2Fqofq2Ux3Wa36rgjlTVrlCkacdDy%2BXSMVzHnwKv8DCFMQABoMNjM3NDIzMTgzODA1Igxge%2FvsKXj4qG%2B%2B4AMq3AMsiqq3XqEYPtx%2F8nqqdniE6qv%2BmHStL3LTJ6VISQ7aCmgQw14C1Xp950fmyeA%2BQhi017JLzUc6aA4XnD4HqZUwKSxNeBwDVdV67EKTtUgQ6KqujDjTQwhtEc6IKk0cr2pt5zhgXSyikSOADdhqL2%2FB9ebgbT6zEN25I1NhnDwyeTOr9kioabU4iRtJmSaA4l2UUXSMalyOEq29jo8FjUgGSG1g%2B%2FhLybAMmXCJ606EPFjb%2F8KiDJC3RUtSRx9jbyEtsc5OMPj3L8RzSmO2VePIm0Y1WBxO53GTQfMcyj8m9PGDbMnHGXRckmGTY%2BIvEQ9zJxw6liulPwKWW6Fj9s7%2Fis5yJ49SZo5Vi%2BlgPp93Kkdm4Ha6FanKjmvR4Ke52suRyPAZWmKLNmUK9vwvyvueAUQCTrvQhGVEH6xb6PiI0uAJkgD3n4ZGe%2FVxPRIu30tzRyCj6cSlLzcr6byCOtPun2Q%2Fm4IQVGq323FMlNhhp9%2BAi28fQk4hbt%2B%2B%2BvE60OF4TOaI%2BzwWAm2pEIU2QIjxs8hBZ6m1H%2FdzREkroeZqdZUcmW55f9iwaQnOGXkI3WDs2rE%2FFgDyxlqRXNW%2FxaBlpw7hfwvyg%2F47GgkQX2JXlwCh%2F80IyKAx%2BzLLnjC63%2FLCBjqkAdepUW9bkMjqxBNQ%2B88TPUgdvvbalkxno3Bbre9OkOpqC12PPYdvo%2FO8p0VdCeWj0KD3S6bQjFw9MatHeGxjfHTW8dt82kz1Dh2OkwoTUWXqZ8VfaxwcSk%2B3Dei3r1BxnzYsaud5tG%2BIk3nHfz4sROlJStTI86Fo2dBsr4ELr4gu994j57PY9c2%2BjRcICaA7hOrB1v9mA2MOE4iL%2F18qpMhBZUhv&X-Amz-Signature=2b1c42e51a604c0f82f5b297d88635d89466c33c0056525ccfff9a74debb5ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
