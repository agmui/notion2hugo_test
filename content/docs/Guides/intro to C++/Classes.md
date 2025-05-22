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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQDO7WX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC8OyrCT94ZxmEBkRmsa29AhuPNuIakeG2o8hG4c9qm%2FAiBgg4OjKDrm2VWWI85kA1KgMy1l%2FxG241i%2Bj08fdPGUPSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFQQEpkrQTQmvx4rTKtwDHQtiAmbOqSohSXSJTo9Jd3R2PPv3BV8yCkJTrTLMpx%2FqPs6aRznMEjyXskB5zw6x375eVvwy8CQXWTbM%2BPZDPb6eOuLE83hNQsWwUhrycTmPXoaGHccYMefNh2BTS5p4C1YhuKCw6tr%2BNYxfbvqCuw86tKAVeXYtqdtSf%2Fh6XUh%2FZdOV6FYorlWeWA10WZKzJHvlo1lhyjAGp%2BKHcY%2BTXk%2BWDz%2FFSjM0yz%2FGVvBTQO9zxwYIvdYgLqP06%2F9Sj71tmaMgkmlGAoEeXsz7S6riGwTQLVGZCzrEvxmUdCi5dBAOM7O8CZA5Zs8WnW9zbX3u4qwM06KvNn3LmgtFYQvXPcBV%2BWaL5Y42N0p93UgqOA8Z2f1BCFZ5vKwSMHhHVeOJKPEtQ81vsiRlIC3hCLZvgeTlMHlofnt09XKnAmYbYFsk65J4Cm4tvqvHiAfo9Fq7cWBOBUAC%2F8WGhFLXKPbnOtLr89lqfNkDCA%2BlmwfYhJz6b8Rcm1r36%2FbEF81fZPgY8%2FAofc6ZTvaSCFFPucqK9bBDd59skFLUexwZwXLaw76cvMAo0ogFhv6YbHfZ982a4bevWBJLQerbx4KCnbypnKJJk2UEbQFcrFN1B85xdno0vIthxJrw331Csw4wruO8wQY6pgHc%2BR0w%2FAALb1BtBfCOPOQ6Yxjoh%2BW5%2F1wBhGDRBrwt%2F8lwrsKmM6gvGdw1VpAjllatJCvkhDlxBMSMAvh8g47nGTyoGPe3ukxoj1jfoS9kJ9d6VsnTdaL%2Fevwp3zibPCbeTxx6Tgb1ocKedKOTcBn%2F%2Bf440XM0%2FRQuq%2Fmccsf9UXxhf1UEvM4OzxQD%2B4Om8D7mt07YV8eSTpgtJA%2FX0%2BbjIBWf7zGt&X-Amz-Signature=faa0a3c0c8e680a9d2485237d68f2a74bc28883f3a297b0acb1e6859b3509c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
