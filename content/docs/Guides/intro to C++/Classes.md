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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVNJ7SK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWEFKR8hZzUjWq6NVeRHr%2BBXTLbJcG%2B4MAiHRllZZjiAiEAzsbarVzZ2neT%2Fjdk%2F9z4wsmDh9mepUh5h84b7bpu1xwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBkd13dTiaE2AB0HaCrcA4Dr%2BJuUZF5GgiDzjjJGocKJ9tzSl5iOXxbbox9KEWIJFnzK%2BEZ%2BTMPmj%2F%2BqcgyYPZtSugxojqvbvf5m6k8Lyngs8ZGWxg0N8dAwHPwaqnW0hU0C%2Fc2%2B70MR8bJkdHIXHSu0ZiTxpUU1SwIW4%2B7aMq7ce0zbrr2tdeF33jzCSehzmRycDlWDieUj2%2FUBxCN0hT14H9NdzmmmLiwBM%2FQN4fLogj3LoUhw8R4T09ngWVBiQ%2B5AZkBEpBa1n4O6WE1rnYP2PSk84txhzj%2FUglk7DKUzZwp2QWIZ27DqHBTpBHQLgQ%2BpJfygTFLZaeHtxdbswlkZhfwQKMnDT0I%2F44gkbD9JrPVrPT4e9I9ljPO7xVTAjWU45DOiedanUf3VPwBJs00RApebpf%2Fjonff5ANhuvbT0e0PGv%2Bk%2BpjsLt%2FywYf3BolREWpG8OoJT1JyaGNd5yGw%2FR2Fwi142Wiug2kGO7ldXhux74qPQCg23h47s6S31Na3xlsXbgqfNeSeX4Ajg30fY1NcJdYsBXQjou92vGf%2B9UMkSb%2BIjdUCJnSUKmjb5k1UyeVm28NAeuuRywtjr3X2jHvydZ4CTvLXixR3rlWqoxk6ER%2BHzOaDPexmNsQ8giVU7GebSETzB2u2MOfBqMEGOqUBXKUBu3XOMvyJItLAi1WylCpwge%2BL4IvXxUqfy4MxsC5bGwunKW2ipQjjzjS90XqF3cRJ%2BUqlkMywgi12BIKpfeSZxbWQSKal7AD6gReckZMpYbe3XA55U3hvJ1F%2BXrwFR33L2ZB53ZIdj1ONQDMsolBED9bLk2DRHh%2BGxAYeigpDRIlf2Mz13b176DjGGqZb1f50PQka9NpNJpQdsK5z0W%2BwcjB4&X-Amz-Signature=7ed2b7f44aa7cae130a12df9311cfffbec660d8d26dd7d3b8cfd722851396dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
