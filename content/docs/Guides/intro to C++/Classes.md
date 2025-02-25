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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLF2MVBD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCDdSp9LXjdjvv32UdgObkkZl%2BQzRTX2BjW4TwO1jkC%2FgIhAMtilFm5pEes2KJq2mCFPJ3QFm9WUinmEurpLFmR2ApqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzqLz1A63AsDxnRttQq3ANpmfqCaN4DbW2nGlsowMaQvALIEFfw%2Ft9mwx7bh%2FOtnoM3sZRSsRbL02jgzF1AcUw1KGqWA%2FnjrcHtlgU97%2FfEYXkogu5nN0bulBlo6EWpJpDanbuM64HamdEvVCPMV5Z033RrS6uVzYD7pnmvR0ZXYG3%2B4sMosLbkHXcM9fAA%2F41T22QoQOLnDaIM4n9chWfB3RhmHYRCBn2JJsDqQlnbfYvjn1%2BDL9XNvaxoLfKc70pAQq%2BGZkeZGr%2BoiOWhJpvYi6ee44amRnMU9bmvdBpTisz615LeQo%2FiSTL6Uh0f61i4mOpc7d%2B685z8xANIpCEISfPO5nvymOneMd6schdmjHUxy3u2ueRQVOQT6hpvqtJzlDrsNQMVsPSeQSYYWTDNBTZz50MtOLLg8kuEICxmJaKIQlAAyNcarSw0GpX%2BBRRu6zVO8CvW9%2Bpif6X4o9Q2iXlWXwMyDMPz0YOqIgCVw%2FQabCgRM8W6V4UlTwANqcF7dxAx8n%2BFqmCN2chCZc79kFLO5JnCE56H2b4BwcGUTeF2kSF5ChRF9AUeUNu%2BVxISC%2B%2BWOf%2FOTZHFzB1horaMNLeT0QBgOno%2B%2FlvMpHdn9DI2seH92Pu%2Fa3AocAMNty3MGPd%2Bm%2FMwlQobIzDO3Pa9BjqkAfHFJA7UgUSWczC6K4JCTtwO%2BydGwElKMtfJ71olZAH97qdGIm5sDpdSH224vvJavSJoyw%2BUOCbwzCFfIWIQkG54hmrziB36Q2FanvHao7bd7SRIAQkl%2Bpo1mU7WBOzsPgd7I3erKtrV7GxKHw2uhH4ic1JLl6sUj6d6H1U4qIGZJ5RZgyzZuFZzZEtvSzMMt0wGoWiwOufK7I%2BH8uqtnfKyLYh4&X-Amz-Signature=c50536e8dee3863efde1225072682e5e4bbf4ae8783860bece56796facbbc160&X-Amz-SignedHeaders=host&x-id=GetObject)

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
