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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSCBKJD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTLDnM25B%2F7QuPgtFlwe5OSPXyoWfGluKUGq6eSjes6AiEA24aDKJ2gAZ2B9EwONIn01HNOKsnnM1zf53s8dayQS1kqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXIhVdqcCRK1SbLFCrcA%2BA%2BVC3B7WJepo6tQfWauT3VTxeZ1ZFz6mM%2Fzr3Ua5TTKI0OL7RSsBz1F2iV9mkhjhUYsnqmnr8NRp2hFDDi%2BoEmBpLaW0UPjUiu%2F0PcFU9VWyPMZOZ1lxD5PXqH3pq74A3ex6VZsbzCF69966H3W9m1Kf%2BIlsRaaQgZkkjp8tiJ6cdhh5qRcevBetkVKbhlcToMSTbwMEtpMVkpKZFdvh4V3Lpeg5tz8H4fKQv5xNNYnYne68VPd%2Fs%2FG1tgJWknfQUlHOwJ1wbrxPNmzOtbQYP43E3SGlz%2Fqo76Z%2Bh%2B4BR6TGqIeGz6TUFV1R06j96jp9uDrUKsByhXh9jgxxZjYicV5%2FBQDl6q%2F2KwGtx%2BFApUvwHZP39yf5uwFy%2Fsye2hBhYPo%2Bfih6YfWiUsNYnO03yGNfg%2BRkVZ0dvZNMUs6j5QBZVHK5ISM2ZPO%2FtQCjA6IP%2BctpmP5hkb3QUQDDoeK425x9nrpIiWW1U53JlZ8blHCB4PHm3sV8rPC9ShxeavRbYCxXpvQV8SBlcb1rPAlVWayK%2Ffootp4Ob7Mon4Rb5Ft2tHsshk4WHW3igaeo5%2FEENaNYU%2BITbuD1FbFKmw2bVqNdprz0wIUskrZRZZuqsatqkB4Hxbq%2BgA4tfjMNeg%2B7wGOqUBUaTJtiEkM4qORTqQwuxpBnEHTQxsSK9WrPxuKBQ7eje7xDS%2FDanJdnlxLS%2BivR%2BbyggN1pciQ9aRadpIW0o8YYOFVwF57AulTh%2BCv%2FHB82OZLZWCPFjxV%2B%2FJNhsej3giMzB1rVH1S9%2F8ocqRr9rRz8ay41o4uqa1DcvaSWjNWpbBUZDyjp3MNLG1ZSqJlZzKlrCJxsUXM78sqhbioixYCaaIvpsd&X-Amz-Signature=705307a7b967009c1d02b4780372e3ecb0b0ba575ddd5a3f26c1f4b3b6580b05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
