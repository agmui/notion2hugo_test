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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMOPGHR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhYTnAcVMJ3fiQF%2F0eNNsumer%2F2iCqIJHeLRUpXv8DfAiAjxvIuweAzFcxzF0B9WxyA8lgHaFWOQMO8sQO7gaABpSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GbVLZqK%2Bu%2F8TY3IKtwDFpOPFndAtZ0Xmj7jwV5Jpm%2FCnF%2B1lWoBxRUi3ho63FL08q81PC3njQeoyH9qEU7nb15CXzDKXABzWGIXmLZEUYCB65taORngZ4JRylefYF0Br4sA%2F9JwHKANeauHLA6OpIb8r2Ng2qgqUeOMxP5qCbnc%2FRDw8l30pIK2DlDtjCRBMGVNFrQKa%2BYeN%2FKQenSy%2BZk3ngVDJBFiLizWvEQEqiOCyP05to%2Bl09iOnEeK7R8xJHJtSw9jAgiI7WsN0ABLL65lVuUipEHXCnaTAQsxJlE91l4eHWTSSlS%2FSdfkj1mhsLEnTbfPE%2FmmEv4f1ArcG2VazWD13osZTRkDUQBEhX2rtV%2Fw%2BRofX%2FRa38qBPepDNTqLQeSBVHvk2LiVOuc0nhsZmx7YXoQtu0UIxydeaSOCT9M7SdPTy%2BLEp2d0v0v%2Fv5aTbPMlrfgtTl39TnKdAAlmDkPTju82C3sLQkycEUe769ciMcU11edRr3K1OaVIoPq8P68LOAgeX0EYzwdsdsiG4f4EiTKEXTKM62AeDFQutiOOGw09zayWmyi1xTA8PXoJe3WeaMDBGKJeGaNjRhyAZrp%2BtmTrJqohtpxc%2FS%2FmkRcWPiiMV4TAseQZ9x9bKqn1RuPwG1Aoz5EwzJ6rwQY6pgHiKxFHw3Tn3KqTWIo14MsJ8tjcuG4eqZZRhPwDDXmP8Hzc%2FDKUDLoNCrbc%2F6mhXpAMQZCMJt6QHSpvo3hLPVHUfSVyC946qTQx2CPfMauXxsk2%2Fvjk2FPuSJYgD%2FUtzEoS7RrvygpK64djAP320R9d%2F%2FuBGTLD%2FSSRCPuhIYn%2FZujNXAaTBx0mbAEJJkNqDiOWW9OlHhjzm0yfKoXcGOVAVn3R9%2BC1&X-Amz-Signature=2661711ff759a67c08b09b9a49ec86aea11ca71ce0016460b8efa256a2eae62f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
