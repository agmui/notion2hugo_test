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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4VYR2C6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa4aJuRz6x4RnTOxSLIomlHw4G7W05GUBTw82efQsaoAiBxHYNjXN1Mb7l22B2HOZO0ejG14IHwLZ4UO2Vc62PWIir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMMmii7TJu0E%2BKgvQWKtwDPt0IDHDFedUoTqJXi8l%2BFsLIhnWYbxZdvAPBnq4xfpS5yjX%2Fju5uBjuv%2Bi7f26ArsUUupxpiA1KYz5y1l2Mu9LNJeCMpzbgb9ZamtrK6d2HsxumMTFh%2FUbm%2BZrBWCkwMR0RhXlXmuYepoBrPFWOHDGitbhqw84E1uNiWoGKpc6SLCrkhE8NacE9yY6qebSaQd%2FBUchBY%2F5Gv4zTcRuz%2FZ4p%2Fh3eIj%2BC17uZ9yOS6Acqu1PtTYfitBg20kK29HOzsyyT4LT9Klpku8NHOC0dVtNEo0H7LBJqU36O%2BBf3OBRNiwYq2%2Ff9%2FipsGWyYQBpHbl7guStvC1V56LPR9aFf1KyL1%2F3JdsXPRgviZt541MhqXhK9sS224R7I8T3931EAHEyFWHdsqF9Tuu6%2FSxFH9XvqmafCIWhBf0afWsa6cK9CsvAq1UELnpLQMZBKuZrjBYmOTFaXLJ%2BqJyk3f1rbnkF%2FBukoZhFFPy1W%2FgKl%2BjiQ14ozxu8zrmHsbB7S64%2FoPxXURqohxMJ1KsNmu3Mt5jP30ASJ1bOUn%2Bpg%2BI9eIL%2FbaGmiWn2fM58fG5JyaQCa5NsJbKKfc%2BcyKi7Wuc5i4Dj9CXul2pJnEATyknl0Hq02E6Kqkfgx39tuo%2BAMwvby8wAY6pgFabsNESaIhpw44t2hFzRrOQ33vA3F%2Bui8BrnNSTIl3LDVCPD9MgP7pkVnBl%2F9zrEvXe2F%2BtUDNANPHGoeeTyRJdY5ToncLffOqi7%2F5P%2B4cb7mhJyKrP29wWYpIHa1fwe%2BoQ%2BTMAgrJ%2FJTnKMr0Fee1IXbonVN9%2BRLW3N3eWAGXfeYyCwIjb153cfEtTxp46qsYju%2FV1JYCSrcv3R%2BnPfVBwKFsJm1q&X-Amz-Signature=68458e5aa189d83aafc074d7427a5302d5fe3df0996eab18cd042c23028034e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
