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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKBEVV6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD49ZhQWId%2FdIIpZM8Uy%2FY83LHuKrPJJLicN5M2sD7xfgIgZ5ueNxIDrvccdz63iDKoCvRuJahUcmF41QuyDnjuB3AqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJsJh2yiX9eU8ZnjCrcA258wTY5VHm4Mn3KijWCY%2F8JNWd6O4zvVJ8hMAgonUYGFhUJHTi5eKLhZxdwJNJA2IntBY8q2h6uEDJ3lL%2Fcl4WQYOv2q1CB3ed5HNVcDl4rAYtzsSCZaubGpagauzagM%2Bu9oFwEbQfOY8sQitaS0%2B7Z5RIp3GqwkVVBh1BTqUZfIo6vuTrobadfnl3f4j56oNSb7BKSIwTd%2FbfvP7zW9BIs8JuppVNIg6DUjFBYyb%2Bg0KRI0kKGWmhNOPHbiIdInqiRq%2FvFnk2SMrNGVeLIHlhzxaI3xBf4uWhir3dLkHjzTIlVE6umdVNnP8eQopIeiUbTIK6QQQ2rY7EFXMa7u9mk2Ge%2BcxJecKykZSWmc%2FLMP5fnELXIVbDoXKnLOFk4dsFOpe2om9TpB8CB7XUw5CXju4MuQHyJYGkl9Ee0NyrpDUh9WcAEGZwt0NYbLhigxbCk2DNkyDmMJ6i9pSfzmX5kU0jpg0hJJmpO70apdfFlQKsvLyczA%2B7OEdKmySwyfmlBJTsPxGlO0qVMQe2ap4MHpFe%2FfgipSDWpkE1HN1ol%2BwLcRTIAfMZoah99TWR1%2FpNNQFmcV92CtE3CHiC5HQXAKhaxJs1XT4Tvc3X%2FuxvqM5mBHeaLoaquIGHhMNaosb8GOqUBdf9DOTZFI2do%2B169OZ41WFDM%2FLMJ95aVGKEeP8kX9qxNPSv%2F6D%2Bv1QkoCyMfFSUUbK9vDNR6l0AzwEDbO2pvKb5c0PUsb3JMaLTmQ4OzGvyvmi94vguYidx71vnr%2BnVDTiPaOc1IqOvtrcCXEhxH6lf%2BRBuNZ%2BxQDPREEZ01GyaDxNzAwKQ0931h0MTIIV6O%2BD6EvP3s44rIiZrNxxgSW7D8%2B58X&X-Amz-Signature=c4f083d7f7cc16037ea81a8bf57a60c13d4270ac4dc4d973881653b412082ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
