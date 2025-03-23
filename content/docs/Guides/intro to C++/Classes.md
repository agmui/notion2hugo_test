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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3PA6ZN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAXqw2fS4bOfM2e38SJ1qRMPJlzvFSTpSgxZXsAEYpyXAiAusKjNoj%2Fmp9rsFb2Z%2B1jPveNZcGf6qYK9NnsWlX2%2BbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHtPsyPQ7eYKn3F6KtwD2AxHvmHY%2BZ9Xh4EUKvM7BxTdJ4us8LXDAAl%2B4YMyxwv90vbsYtP5%2BdGvBZUd56Kk5Idj4cROYIEnQdSfoo6Rm5wSuyQdQGm%2F6ehYE5MTVkri11zNdy%2FrSoTwEmIVwunBqStY48hupzcslO98c3HhDLKI2aYtvESfiRIfbbx%2BmEceC6xi6%2FoxPN8yXz6zUxAVah%2BJpq%2BMcabpE7Al97hYtQXqeThOr9t143MyTCBHNZLelYnX9zrDnbUTDjXHYJubJN%2Fk42OljosWh56XJS%2Bg239BNRr%2F7Rq05RPZ6686KiPW%2BoV0LdJGaUNG1NT9D1Rp%2FgrA06lEONR8jAFG8dsJAxkCfiDOa127mi1zZNYwGLJNSyj0C7hfJPvZr%2BUbemRBNq%2FJvjYtgborIX2ra6EVVJ0bP%2BQVoUiBPjOkM4kdMWUwhmYxgqhMr3PD3I64YPWTX1M4bab8d1XJCLdDetFHYfLGAzlRBXFkeGl2uO53nmN8IcqPNfC1sjV3lfLegR0S1fg3OWbVd2cdg%2FMLA%2F1MrVAQ2Xp6frLtwy4k%2FeiJRTag03fv9%2Bs5cRntG47%2B8GXt70P2xwZtr1J8dx9v%2BeN7m0lpQhlC0TcQfjnkS3NZvSeg%2Bflln2yuF2qlHYkwqc3%2FvgY6pgF5QcEztFXTocxnKIFY1y1jCT7mvr9MIqF%2BFowYIGtCJp4l4OBBiL42S3NPAsa%2BD450UY7%2FKOPMVOr9pEaumFE18DqBHAJV336iDY2d6pOGncXaNUAH9Am9yeUYaQimwECclNYFTqHeGwiNHUIXB1u3%2FfSLPjInQQbhd16CkuplffSW3NkCkgK0MRInhErf5yW5DLDxWuJfwCGL2WNC9eUr9ECzTwXP&X-Amz-Signature=f4158f1beaae815f0a217a49ea7409dc3e6e7c90d0e803fb02a1a6fb5b715000&X-Amz-SignedHeaders=host&x-id=GetObject)

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
