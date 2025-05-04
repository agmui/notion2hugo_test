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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBSNIMOS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEMW2rIw0uCj75jvEKBjFr%2BVsNDhN%2BeuwWS5hIu%2Bpj7HAiEA5TNktYTisgwF7dUKA91i%2BAFf4szn0zPbX1e0h%2FhJv1UqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMsgom82o29kikOrCrcA4lQx3cr1Q%2Fe5YYrZdM5Ez2j%2FdVSAccm%2FHpw3yiD%2BPD%2FJvillhgHx%2Bjdw%2B25S9NSlQN5M%2B4FgZ7XTQtwmhhuUVImtFZM%2BBYN5PYO2hkapl%2BHe8y4EzzrutMuUkCH1FVsHZ6wvj%2FvdwXMmeoqfAxGkd33OK7C4BYmwG78vBin5ttN3lKSTXM80lW8LnBkn%2FlVAK5r24ms6qOnreQLLFBl5HR0L7K%2BtYOmDuZavDJMZu%2FCCYuKDub96t%2FQ7KOCPtIETsSqB42swY6fS%2FoDDknjH2yHZHxXbVIPZlGaqsDL4K2YNA0XmJ5ygS16UCKVLqIdExM50Anf5jE%2BedJQ27pmapsBJ94LXjQChhh8MeUZzcUuuNlj4jAhHIZU8r9khMd1uj1Q%2BD3PA%2BjleNUM7EP0B1zvoBYctgMPQRYTQbXddi2531ljJyWx%2B8MzTpVC0tzug%2FETuTib5mAp14EoC9H%2F0q7mZ7s5inAi2rQrSIbcvnqjbDXyM%2BkNENX36CBWg7PHFQy58svV3HNvDEFVelN5WOz3%2Fq2jEhJwn%2Bkf4fHnSWSBF%2B6nujV6ZjtuiOJ%2BRS3bbBupgCpByG11NlEMpO3qBzxn%2BghunM%2F9YFf03WfRjkhW1r57qj0oWB7%2BLotcMJDr28AGOqUBB8oLGJcinPjYJqYssyrS4Tk2ddLLdnqQH6Lw943R0bnEdsbVPt32wBUSWeNQ%2BYM%2B13bxGyuJ5aT%2FrO8SpGwS2%2FdVSjOWvNm9VLYhSGD8SIU5%2F1GvJI%2Fls9d9SY3t6Lb%2B7dnzVMMX23zIB1qSxwqZOsCGYwMt7I3q3O0dMMJSkhk%2BPTZxHxmJq3zrw%2BiRYj2GDamkp4D3jqETwZqfXS7N60TdzESj&X-Amz-Signature=d964ffaf0caa706aeed515905ea94b7a3a012c87b8f314fb4dd52843320c9bef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
