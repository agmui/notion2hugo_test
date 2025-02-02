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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2Z53IT7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH43CcZJm0PIYwJoAWOxFqDSm3Ylfz5VIEAoxeXISWOzAiEAp6uuHJ%2B9YFiCFwph8FtutDC7eWHY%2BQI8yrPgHDRB5goqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxOD%2Bjf0SAGz3TmpircA%2FdwKbd2CD%2BOl4ezHNtRHM6c0fXbaeqPLUNH%2FZOU1C%2FuF1QqnnDO6Kd1IPX8Wy1P6kPoplnQJXu%2FOkaegmEHWBLt3vnXOrSsCn0TH%2BtIv1lDg%2BvCZHykC9XNWpTRt72MlqRO92IYrEYx%2Bs6ACA8LzX0VqZmD%2FZAzULDhMMINsjUzsXPJVOWp3HLcbDHlmOXJY%2FHivfNJcQ2nOoz7UbZ2VgH50TQwtPximkb6BeODCk5JlUpnTZrBecVyDMhrKeRaRYyGvaekIwzimi1QTOrimEJKnbv1r9DkmMVgqn%2F3ozOEhlKX6rXWtPQkmCpypPYSI%2BBwNock6oC9vnQrBAKjsAlUJWmYLV%2FJkj5XXQYMjhZqrnJLfM2ZeUqYN9GIa1feaReKS2Ujqjo2jzUdy7yy%2BFOOPrAuccL9Zbl5OERqrOqfrlp1ghFd1KRSiBluf%2FaNEZYxeuvzoXsahww36P2AkwqQwWRzuwDKcBGQASt7wZmO%2BZE3X0LBJQKN52Ivst%2BhP9DCNFcLYl4XAer35qT5D3uyxeWmXPg4FwIRT1dT094kiD5iwpKOMoTlR888vidSEgm%2BVtIrCU8FUC%2BUd5WxlgNfdjMgvbRD0WO6U9u5I3z4KL8QsEQFmaJxj8DrMLDf%2FrwGOqUBW%2FyLPj%2BxZf3cRYAUJK%2FQFZ9XQ8VoOg3bZAHgm9SC5T4oMJ%2FBbPr76%2Bwxk4ekAxk7ch1SzlFR%2FQhJDadwqGWgyIzQrVq5%2B7VpGsQwNA2jvUEcr6BZsLCffDiVnXgFgkCU5DAVnBMC%2FcmwuTW%2BAZAG3dnWcsGtmy46vHcAe8Eq%2BzBOsVI0y%2F81tOH5aThB1aKfS1ithwKKyJCJNoXJPl7exfXVUyWR&X-Amz-Signature=5e54419e92abc736b173d3c3dd8ff8fcd77a986c93bf5fee98b70459b77590e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
