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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5TTOL4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDX6WEY8yasAufVHGsj7eo9CBRb%2FdS%2FAlEwI%2FbVuYxY%2FAiAV9zrq4Mq%2BbSe%2FBLLC80ggFX1KrzT%2BwcpQUMtkH4aGtir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6I5G8E%2Fb%2F5FijZ6iKtwDMrhxLg6yOw8Q1huI3Lo6nVKD0DumytTuKIDMP4Ra3BOzrD9Nq9D1rx0TZCqB09Ob2zh1E4ucNVCy0dzM1gt%2BnfBp9psZ7oFQaGr87URKOZ1Rj4Y89EqVRde5lCVC2bEG66OHz05DoBx93%2BR0ersfvI%2FhvX3nyHxVIQnVKSWzd7UJkayFtnS%2FBXMvsr8j5n6bbshMVq9UrYz%2FyXDGTKXvT3oLPPPCZAD3P3LDO07oxwQ5OQG2b5syF0J%2FMEXbjK6DyBQA4bNmLRR9x%2BSGlKxr5Pn%2BHIblv34J6T0dgKdhDlLo5NYhPaYyNsTvP%2B%2FHN7OZe5CH%2FKS1z2%2FYTJMnYd3QPGR02kUqE3oZW07Njf6XJtOct8m%2B764GAwv5r2AVJWOLp0%2B0Iz3Wf9FosluurGhyjeYai02Dc84ilbsr4OfE89W70RfDWbj6%2B1oAoQfLv8ro602u%2FG7m2ZTW8qksJHLj8JInmO46I9nrNGbh3EjiMW77DJwDnbDwJOI41iesxGvve7BfOu42nedR8hhY%2FaHb3GUH%2BtkigX9n8X0Q2HfvdY1jkv8QYOk44%2FgC7OfnOhrY1wmNNOoEJGZBrHILmN8uJck83NL3rNgbf0Bv5m%2Ff87dEbuSAvb6kPyoU8a8ws%2FTExAY6pgH8uPhY0rRcz80rJItmD4wnuui%2F%2BF%2BRGD5%2FAhARYUnXkIU3b9xf2dNx5Y5FRBxlDaL%2BYFD3nZY54Z%2B2APWDgBAeKdTUeEFAkSEDLHKlD8bLiv3v7Nqua41o8PSs56hd8lYZf1b%2FiJAwmlaZVB857YZuweDPz9xNiodJ1r3hMKLsn2ANJ1OT6sf5yvNgtUmAZni1BUB9nVyncukdCTI16yXk6n9Bxv5j&X-Amz-Signature=45d838f739b37579353ffa396272a78dc9e1462b5f6b166054f676410f177ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
