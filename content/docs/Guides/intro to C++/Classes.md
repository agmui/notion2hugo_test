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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FYPICZA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBaqBhMB%2B%2BkEeljZr8GloOdlRaWlgnM6DjpF00HcSuRXAiEAg6XHD2QwdfavRAUAb211r95VtMQVNDZV3onoW07M4kIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLoLGukMwMuKmUShyrcA0krnHOrK2TO2vlnyVAqjHCnfXqx5w0kPK7y2iTF66hNSRoyo0va%2F2xuTSOnP79h%2Bnnv0LBOfCKSgCIqRhGWgbt0ETk%2F5%2BhsprR0P5PsWoP529ODk9uuAMqSt1mNZEBf7YnetE%2Fz5OuqBHuKT5aqjtzdkwj3%2FKC4dIPYoC3U3VNHX5NvszfJlXRzwaBWxcMxL7zBdJnTalRore0aV0Cx57mRJjvQVKyLAmZBjiStsPW5eaKeSZUXejJQsKEmMXjHpevW%2FckNLDQBKHkMrrZSB7PQ1jgWyeRCeYwSOU185HlOY3ewtDPLKkZThrpXP7GumMiFgUfT0qppNkHdCeD41i%2F246iKzfEbvvfs3uH1U2cGho9%2FkNmRYBbf9iP6FnrpkDsFWcX2EYissuu8%2Fyudh5CrWYc6vcGnpkiATrVA7%2FYMgIRFZWyzXhq2%2Fuudv9dslpHTelGEGdxBhkk0VMEvzVXnU0MASTIrrmA7FbV85igjdoR2GRmePO6S7iZimhgR6h%2Bi9T9GkXWW%2FZAE14mLmnee18%2BPbkGKIX27hB8BZPU7H8sHDFfCBX0LaXPq%2B5WTwB67u7vq2ZqiEHQGLOqsVci58ywYkogvC1j4It5qwwK6CxKbHZydooYShC7CMO%2Ftvb4GOqUBgPAZXGQKTG%2F5e1UEft8TmOXw2LCe%2BGFFze16wfg832nIykOLYUD33nbwC6MqngWp9Xum6I3G3D5lHeT4%2FWdzfX1PyyeAx%2B4JDZsgtjFDc70JcVIxeLWGmdSru6G2lp9CvDBOnkxWnmZYobT6BDqpjAoT829glitNEIfQGvhFOfHg%2BmkRH3%2FZdRUl579P4ECVldzQV9JF23tfaKIGusjp1LE%2FNXZ2&X-Amz-Signature=03894e3680f30717de532a5944fbbf4788c2aaa930ca66d42d8b109a1a54988f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
