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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CQV3UG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZgi737Jcj1GaXAZdCvVVplTrtgYOC95nDi9Vxob4n1AiBgJmWA5LWqTr6%2Bee%2Fzhxq%2BdP%2F3IKIUWtP%2FPaB%2BFyaPGCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMwRssWW8stfNJY%2Ff7KtwD%2FEujLBVKfSA6riI6brqFXTRPRADg%2FUpdzFKOIJbO4MgbZ7yJ44vpQDBcC0truDyaPvL9oEFmGQTVMQZ%2BcxmYuCgLHqzFDmk1Qzv0FBIQ6GMTqpzsPBGoEsB%2FtpqONRJe86j2SqBshSRgJrJUhfA7DvCCgZw9bqJwyC0s%2BR8sadIx%2F3oFg6HawhHMFtaZncLNbVpopYk6QC4bb%2FbafZF0AcT8QYmWeMnCYA%2FMVYFnBoXrgJvYEgutAooZsz3rSEUcNDI7%2BYFkGzqX1gb4HSRgnSOIotnOGMAj1AVTW4HjHcOG7RcCY1iIj1fPxXODYRA7q3KaWn0807BIokeCwJg94wGmA4bVrfI8Orn6DbueKcJ4x9iG6lLE5LP5noQVCPumrWOT9CdR14yMUvNRGkveV3vc3v5pYv0ec7gxJPfXWa%2B46CYzOpXeObGBSNp1IL7L3CIzXlYIwV%2Bmo7AXikltl7g1Npweb0zm4dG7CJdk131wxBQV%2BBdWVy5oOgrpTrWHyOFgZmCdJGB%2Fpm4eIStmwY%2BrlTzkQth3h4bhquBUwalA3S9Nvcb1oKjAckBP9EeYhkU50QE3yWyg3slK1rALOE8TXTl5ZSnTQ51TQoSg88%2FbPbA3NIOQ1i6cP70wvIjBvwY6pgHtuN3FQwlQL43zPhBiIUA6INAXv7MIVmJLBe2SzZewOARqEDJknGAaNzduWDudrI7ddSrAuGfyhi1bdWXzeUitT25JC8xpnwoAX4bs%2BWtbWtEdnlJOosFsFxhOKonXtqcvTWlAiWhcls93qKsF%2FBusRrTObJb7TYAYCXbD4ck016%2F1Kosu9xSaYUh1YKOM2rZsb0i8ezLbBhVdtcZ%2FyJz%2Bv2vBD4qz&X-Amz-Signature=9f3ae1a1614f888fe11837ee34485f78b224b8fa49d94357ef89b6d19b473e56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
