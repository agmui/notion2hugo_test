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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6NUEZ4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA4N1noVvDJjrEfBTf9JlENE09nAmHMR231AxRQBWSs3AiEAz8otWeFUiNj6jhvXrXEctHzsgzyJGaEIZTjoBtLr%2Fogq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJoiK%2BozIF4yCgUTsSrcA60ZRA57jacf5c61VJzfZgNUZYd8P2Ds8%2FtL5ricSpdCCLYvPCPRcvwYgObuE%2BNSXlM5F14SWs4Ale0bM5383OWBP4ElCa%2B81Bh2d2WwoVgwKq5pyvGcorLP3qOkzRbUShz1Uer6Lkuv6t09j46DdcI%2FlRyg4sitJjcJsDZuIlIsyX%2BVevzsvDiTluFbw%2B9on0hKEnm%2BHf1p%2BlhQfsGkauO%2FPnFsIqYRwAeQ57nD4o2s853dDWRsGkbw15z3KfhavSaxGw4lyqtMMJjUVCPdqUkYgZLO%2BFlkBZTxP236gmr0g7lVrOHyDZW%2BUsnkZ9rTofLLtsCqvYVP9IJwgrGx%2FG0zVL6ATJvv2ZaDFQjFLgHRSNZRo%2Fe0op3Ut2Gi40Rk%2FiGG2xm5oZ%2FwlCc4CPfNQDP1IbpTUjb%2B94WN%2FH9nHN4nZQOq7JpScJVD57hfPbiLoZGJyd9Ot0Z75aLBgz%2FugbuSyWXTSXE2S0LsW0Nz9YAEOlj9crkrM74lV4gpToS9sTZBUZBy7C050NdFh3brI8gQlLYmt6FynCJN7oLsPd1N26SyAvajAzec970ZX994DQH5Op%2BR6tDDwe%2FiodT04sl3nFeULIZ4lMdwaZrS5anFs9ZPWMJ6erufdrRxMMfA4sMGOqUBRylo022cesi12v8Qb7B1SKBQlBnNvRKLRpFr%2BGbN23MdtgbhYYTmmo31b0JzRbY8bFcxopV0phWMH4lvZJ%2BzCD6FvC4kbjZ%2BUM5rLnBs7MdHjPwxQ6w02aB2RXNGKpPnTQCNFXyfFpy%2BQyMcfHv%2FO7mv3Z3KQ%2BakJDj6P%2FC%2B4XMYCIAB%2FcUNWo1oV4Pc43BKkrkzLxUg%2FwinqP%2B6NRDJEJEDdT1%2B&X-Amz-Signature=788510f0a3e48509f82f6819deede13933f490c48185efeaf927c83ef34768ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
