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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5QHSHD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FB15zl57bsDqc%2B4Vg24PlpVTiyPXz9qoo0cudsGTdnAIgFQDk%2BRGbpTxaAd0F0XdPpG6ZIN1SckyibrKCCUgUJPgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB4mRlNu9GVWjPakCrcA8g4hy6C3Dn8cxwEfR253K5DAL2LtkpgwCoGczWXEQU5abxzDWCbLCZMjiqitIVWhe0quvkK980LgoAhG%2B5xt9MM3LXjq%2F68WV9RLWorUtB6fByO4YwX3kR6jeIRQz%2FhZ7A3qg8%2FkI%2FVfOo8o56PRmanmhVH%2FHqSzlwiVwKWbd2wpjcTw%2F%2BUGkc7faC5AAIpMgKFMzZ9gKUcvWbg6tzkq8ltxMvVuSpF1MYU8B6MoB%2FF1Ygu%2F0vMovfLFaq1efjTMPE9dW%2BvC0EJvDrlvWJu2yvovzOzA9Nwc5hZSmLZGnCd7TyXsnp9PtXygl7b%2FSTBArZDrt8cEXECkmE5Vpys7RWcv%2FV1hb44bYGisGFIvAKJB8jgq31y7JXx9EdegGZVIlfgBxmLC%2FmDCJAB3epvsiNsZAfUGTpgcXzeJi86wFxffAuPB3xie6nmw6U4V4mcFG9gkL4hlunv9m4S06XACFnR8ZVVWKb1ZAjRdnWWFzla7ZB%2BM3%2BTFBORisbC3rRJKmXPNBQmKuX4rTRH4Y8zd8wymPOHsDV8ZpslFldsOKxvq1PcWEVeVWULEN2l7JeCx0zq2m2oTJyVjyhfNCm%2Bk%2F%2F0guItNKMMt6TcUYFqifoi9Dg4%2B%2F0LJPkPfi5PMLi7%2FbwGOqUBaiujZdrjJf%2BDHkpcsy8uKQxbaSwuKOvD7Ylu5ktPvtwpPJsFVwrxS0nQOuhWgS8pMybXlkSsExC5YIBolvcqr7rCHkNhoNrvN%2FhHvB%2FaINFMyviToPBaEO7PhlEN6cwu2wOWYiOsiSOXR9HyJhtun2%2Bdg6ejD8Qfkgrb5n86i5I7KwlaaoXOXPSu6yasA0hcsFVUIO4W%2Bc0T8RzTO4LV5s%2BeWYUv&X-Amz-Signature=410b607d4f2e003ae3909b364699ccd6f6cd87833a80d8bef2dc607dc96b6558&X-Amz-SignedHeaders=host&x-id=GetObject)

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
