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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4E2BA5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEkiS7lFpJKvz5cljW5esro5rkBVDfHuZQiSvmi6azMsAiAlqxnm0rzq2mnMrrTlCzqXYtW4L%2B7fv0QvzPR4RjWhNSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0cWqT6%2FzejjcibgKtwDDv137KZPfVFMModmRwS%2FkGayScdRsUIoLcj0xPOjhdmA447KA2d1lvHNYUljQOXgiWW2RhIWXEaMFE4Y6DzUZ6TAtUFDcIHmOk%2F%2FblRirn2hAaFZh%2BQ2GiUAddN9UNO0Ek%2B9x7WWzd525mrWTEl6T6hYaFJxX%2BtqVwAX%2BoF9Y6%2FgpYrYnM3HPEpf01cDZSN4pgdFlmLePJ8JkqGpKQZeKndRpkP02iAwAZVUeL%2F6IOqIixJ%2FSABG2Ryuy6VBGZQ8Q2MQaRzj0mtRUk%2ByRLYRBHs%2F8X23B6vvvyx8PbDScwPQO67%2Fhpa4c4c1ZwH%2BddWpllQvBQt%2BTudL6xCxoEKLfl%2B8VtSnRZGNZnUko4wtnh4Igy0wU0ALq0AarcS%2FSmwUT82erIHuPDFwJ9Ka4VoH68nLlfLnAfqiMSnuGcrZz8YLx%2FH15HCTPj7oRyBQcojP7Sq0gb90m0NDX5q3LnKaZWnB6xUAHidnMxYoD1cAyxajjONGMFL%2FTink6QnPvj1FBve8RyLonv%2F58vw%2B3m8huh2bx%2F%2B6Ok4pUiGDirS3tbz8drSEC5htjtwqASTMqihDmVakvt2sdHuqDOG4sxk07s4Awy7l%2B9F%2F1ygidrvHfL9Rr1pgMVS46h5Ko78w2Ir%2FwAY6pgF8JYPh9tgRTaGfMWHY18Z5IELHEyjlI7BG%2FrEfMHMiU7r%2FT58ys%2Bt5kBe0Qn8wfsWSiyn7XcjOg5yS63QLuo5Jk4%2BUd4N3aPywvxRT4uanKxqpVKAZrL9TxYGfojv1%2FvTU1OZc5KAu7ZZRnkLOzGcvv3w8l2UIRLa%2FtSgFUoCHHus2T7TVdEUFSWvj7lQX9vqYS%2BM7Qs7VZIUB%2F4q5rS8IS7PabuH9&X-Amz-Signature=e7098ddf089d4833f4822ab581192f998cc804999f240faf207b88d37fa65aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
