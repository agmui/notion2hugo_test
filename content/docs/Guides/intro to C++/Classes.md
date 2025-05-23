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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OCN2VC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDQU3eKzLwdXM%2FYMde1Q8EqsQfmndpIVd2F1wfpLpQHDgIga6o1Gma%2FJ2Lee0Py6m23cSffn2BM6kUpFWypkGHAnswqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSOJAW0SaxZEusYeircAxc3hhhfYLEnimWi3SWwk6G0vMPinhRL1qKwrh86HmoztysIhihj5%2FlQvZTZc2fiKW4b26peerDYmSZl2%2F%2Fs0KxjYFwUgNSdLXk2OxgwJ7epCyQ1aGdG1GHEk6Nr2ZuARWnXJX%2Fl3GfVDuPaOUCX65t9rO5RJcBBjSLrYyhSBUPG0cn8ljP0dkHQ3xYenie8uS0iR2uCdrl7CMpRDZFH6L2V%2FpsgnhiTfVz0MStYlVLXGVIV9lVYQmsUjBKITPAA8QFd2OIphezNPWhVMEnT24X2Id0z9%2FSsZfXgyn5XecEZBcVMJy0K7dWJ5t5AHJf84H0Jb2HHmAFmmlPveJQjlORxwKGKC8rzyyFAnmY0opq12FLvqco7%2BjN2GeAhafPOhf0bKAxctNSDS5zvM%2B520fblLM8pM7TgeAZev6uw191pcaGT9XgVIlHSGLNgH8klQhS%2BrBH20eav1mXh8J9PjyL7Vonxa%2FXXOuE7t%2FKpKtgLP4qvHtbY141qzVQ1hyC7fFQlQ8iikngwQAziDJmwNm7ZNhzqkwx4vDoaBRjEp2t0oUnU0tR9OS90aZ8GYe24Rvu5I%2FJoxIxQlDJjuHk1BB1wplffwtdNplQcmGV%2FZTnxrYHFCWlPT2mMcOIIMNrCv8EGOqUBByOXRWFSaKotKYy%2Bl2ADRm9IWvPybW%2Bz28FcWwBN1RPzut1VsizEjznC2TqlOJ%2FMtkVMimmJu6UFn%2B1Y2X10EceuadNpJ5Y5ETPDvYv6Jk6y8n6BZbSRyOTCslIC2BRPlBiduTYmZF5xaSIik4ALiKukUgpGjWyY4%2BXDSvDfOxojtm8hikrDXm6w0h%2FINOb2rjjPOMuyEV0QIhmVDm9FyGK9%2F72j&X-Amz-Signature=219b930c7b40ee83464eebf2d9e33fe7ebc6c90e57f06c35b5b2e2a2e9169c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
