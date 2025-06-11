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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5PHYU4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGG35PY8QKO9OORGFYJoaidnRPq0pAHbr3XkltVJ%2Bu2tAiAwbPs0g0ex2yyFrErPoWcoo1xLVsZqQD7e7kStGHva1yqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUxQVGRtDnThi9JF5KtwDb4CtsxyI4FuZ9AyGCwvRAJBosHoVUmKHRNe%2FDK%2Bj4NMbiwL1e6Pwvo9PF9AFO5XIRXza3E9dPJ9lw%2FFpurlU3pgG2N6pZCw44JeGN9ySTKPT6sYajwKT8PzUxpC3qxTjCwgzfO2VWOArTgNirHvFZff3wib15G2EZgpAM%2BBprSTSmBZ32iZ1CcT8XQdIqtvviU6v0YaIYnhekwjHujnHZb8KkRVoaPfSzkRmw7j%2Bw2ss8SzSUQ1wAz8DGHVhWyJue3MCVQscZHxCAsv710e8LJVM20bZLxa9%2B9h59zKH%2FKfUYhlJgNT%2FkmqNnqYgZ75mFxoL0dHN7m56uzJdIiKRE6aXmzHWQpQsMx3I58PJ%2FCMAETVt1%2FKaovO1J%2B8oxZKJnlv4PesgYKDX28qhmo4vT24Qf%2FXk2Zsnzi64%2FHef6WqoqkNFxjvbsjLaf3sTWFoV%2FKOLi0aOjuQrIYT0EJqK%2BbamluIWC8NxoHlNVVh2JyMz1z36yV5lfvvKSMriM4KLdSeknJ34lfLvKTHJQyGV3nwkNl88kbww4JMnmR25fd5beifpr2NTkOZ0Bw%2FvC5uwjbDJq7X5WexlwMBrciBAtVwgtf6HQucgvak0vB2IyJPj9sG9e7rbBrjbRuoww4aowgY6pgHm5ZqxJmiBgbORkw6cOGBBoRKdvzbOGL%2B49Q84GptTWF3Z25QXnEtPhAl7KG9HHrAyyTXEJHRggLpQEcNa5jXJifv4gk7ElYLTQg3PYDb4dAyYFW2viICrHDeWAlEIZKC1DKKWOIpav4nMAqsiJe2GtxRIXaeFJWLyqLegXfZyifh6etME5xG0ElX1a%2FmV0DpWho%2BWCpHx5R%2F9x7blXZ1R70D0IgHM&X-Amz-Signature=56d06433d783cd63384b491cee5205d8618290d1ffb950e02df4ba94848c5be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
