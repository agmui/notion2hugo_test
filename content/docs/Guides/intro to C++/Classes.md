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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE3JPDI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDYVScYw5%2Bmob89bFchxvnGAUWoZo%2Bz2n86pyIwREYZAiBqHEaezF69Ami1x1avT6pR9WKk6zuPRB00w80cg0RB%2FCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMRuIH%2FI3qI1iQhKdSKtwD5Dy8SchTOrMqIzQ2mFwfo1qUmPnVYuJJ6izB9TyoSsUObG15hbZsLDlCGLs7Xj2LeT5xK%2BvLDWQU2gajyeZUmzbK%2BMLPJoNEvBOGR2hDTZBLacEPPN8lGivZa5u3Aj4WpftNp2hwp67cH%2FYz5zZU7fPgGS5GjLQpE5xb25u1RgB1NAbKX7Cd0E7MCAt9XP7U1Hzkt8X6kFbLRmTpbNmoDAKefUsEChyXsfJ%2F%2Bzacx7tcBey03%2FawLG0AkmkJfw3ukarSa5GIXIavAS%2FnatN4cT18teM3jUALCbaDCIUewE0o0lTxJ3jwHw86sgj3IevWfR5ymjDx5J4N8JFkFhjDLPr0%2BeMF5IG5DUta%2FNiRti91Pt8RiulvrkJNFrlTfdVdo8DgzZ507NJsjT%2BnQgHaqtxt1xYVJfx72I3RboPGzHiOfYwVlcDi9MByqL8NK9srOCKQI6oqjrdyCvRFjaVUw1dkFtP2DWE%2BV%2FvccS5sR%2Fs3ULu3N1GTlzWGvur3prfvwXr2B%2BnyyqNBjpe377GNaBixqYJ8U6mkrSGcqxRPf59aeAYz%2BGovhGnvMqZNZwUyLAN8p%2B14pzezBI9nmsvJRWLhRmF3Noz4N3SD6hIv7XXsaMAsjpb2QQg47DUws86nvgY6pgHCyfZKfZYr8BrBW9%2BrhAiwIp9uIzg84XhHeIDuv0xm4iqkqnX1ElGz1b9BEW2bXqSZUqAhi1n8OgQMzwh8Z5CMhZYAUm5D8hoAkPTJQ%2B2zP3sRDThYaHRZne2KfBWJhkIHzh%2FKXmvBW5lvmpJazcQlk%2BXgyc4h5xsVdjyM%2BbxdrubNLgNEUg4MHc0eZ8wh8avFUKBubNu%2BwL6L9Ihw9mSY4nzB9m30&X-Amz-Signature=346dc988f5245a1764027d96036cdce3487da85eea6a0a185adf8bdb5d47ba18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
