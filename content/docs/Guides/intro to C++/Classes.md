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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJSHTJ4%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFIjvenwgJG8zP1x%2BbWCiWYXBfED3f0kB0KmNogI50FXAiEAwh%2FsIn9eHe4KwlmlEdTbGpxHO8aVLgUHSWjugiF6MbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzMVlEke1lVVRBJYircAxpotAbPeuMCdEz%2F7Gou69S7TgBbFPvvzOzkJ7EV3ADvzBUl4%2FKIFzN%2FbAkSYItStAF5cDc282ns69oqJ8RKLqGTWcBvVRX6lnk7rEhx10tNi7yuOlMroI4K3JTWbnQg1ZslBQHf2%2FuX4xIKA63VgFBx6tUSSZqCr8aPlauPsyiOuJ30qFBekHcNIYg3CPI%2BbLU48z840q7l0m9ytzwPRKK6ccewi%2FZPSeoun8i0R6D18%2BQg9Hz5V5GimPfuiANfc62CTNihOoh5e3mXPAorLkYSmqZvK5SsZgrV1faJK9d9E0Hag96BU%2FbcNTFL9xatHmjpeyiq2%2FHvEaBZVfXZ%2BL6oFMXESMDTb2TYU4HmtwaMMy5N72K%2Fl7M3wMrg%2B5ffvztF2ybVElZkQivH8UAxboDRGJA%2F56kXvMW8ykrTa7YSVekFituMqYnO5MGyzVaQZfeuoJDL1m4T3tM8i7x%2B%2BwfN7HsuZF%2BT1k84qykf2E9FMuU5mwB0xD9HjeMoU7jaHZ%2F38VFg61jtitKSZrzugDkEc9ftB%2FWuFnsUTKzSI%2BJg%2Fs1hjf34Zt3XhiZ2zSJ7GF9irvWChy5YhI5T6pTsb%2FrmtO6AkERmfJsD2LyOEeOThSoTDH%2FFHfvBjaQVMM7SrckGOqUBmqcR1yziO7ymicCgjxt%2FvwvW%2Flz%2FHD%2F6L3P7rp70YhlLnXwxsyIri1e%2BmdUcpBrOhwkmyMQ6daHR6e4QNfKT%2F8Skhk5qU52YLqVDVXBMWn1mSo0Fa311Qi60KORXLNClnS6gxe73YAt%2FoFUw%2BSr32vd6Cw49Xvg4V0hpjIrszXntyVH1OKqvGQ8y%2FJvunKzgdPuSz9A0%2BNmO27hm%2FRYnPpNZgw96&X-Amz-Signature=cb7a65d680a3f07351882415d70550e62df2ac77d1a05e55148d9444c4c96638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
