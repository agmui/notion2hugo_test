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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB46DJBQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIF2uvOqy6elQSCQ0DZ84vIp5jD8DBeGWApo3OWMlvCzPAiBRXmGqhlpsdVpDiCWX4cSvnosYVJe2D5dD1eS8rNMQ3CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMepAEw%2FKN1w1xWX84KtwDVwIMe1Lr6tkrPajXNQos3CZkTQeF3tG2DPzJPG8JTw0KSa6Y5VkE8DiU32cD1uwBQuYC2%2FerJOUzx9fbFRVcCqGdmDL9vegCgjmNGwIjxpm6lvRU%2F1KIo0t7WWUj4RL%2Fchm0lgiyhPx2SdVvwx5sdJ5fa2t%2FxBFeIepW8Mn10IuTHvhJmscenSGQpgCrlo1PP6iIn5sEp4iZCIbBPnDHue%2BVuChtKsbs04J8HQREZ1Jur%2BMmPmBnUESEN7b9Uc%2FxKqyYwbTljURP4yFZ4r%2BtWzqrk2ZD3AyA8puIDweEudlSe%2FgvhiJlVNSWZr9rrWXU86cgd%2BKA07iSiWQ2dq%2BVUulBqqryOS2qnGQMAYhYZKPiErLlzjVEso%2BvuZFP6Pg638WjKEiUBdRDuR4sMvDvbsIdUUysKSWFjfPflnd7D2ueOnkH%2Bd%2FO59FScCzNZfWQJUZP8Dv2z1l6R%2FnYupdj7L91ay6K6xsiZxMXqJbxPCHHdhEzlRjDzqdYHkAO9C3ghckYBO2z3QNJ3wWiw00BeqL4LYu5I%2F0sxJfyn%2BqLostFDOCF5BRRq4rSc4ub%2F6NqIcCUXHP2K2plmkgFlwd5JDvVmPP8%2FSLracHfUZsXQNLW%2FwCq9C4xE8Q8Pcww7am6vgY6pgGadZu11%2FEBWlU4zuNsD2hGwoZJhGeln%2FAaWck9h38f0qNULRs9SeS7d6uHBLoYkc%2F73UzwLn1j19kDZd4gtU8sQ1MVrHyGEhSlmRko11X2IPxwe91PCLWpXToWOQ59l0RimIm0pNmHzOSD6pTmjX4ZFIp3WU7%2B%2Fk2J8JhDTgFqm1BiglA4%2Fe4trUiqDfEHx48h2PWQBVz5qZjW6F0dZZB6a6ujG65Q&X-Amz-Signature=02a57b05cf7780f55e1975b24bf3250c70a089baafd75da60b89d9d7dc744616&X-Amz-SignedHeaders=host&x-id=GetObject)

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
