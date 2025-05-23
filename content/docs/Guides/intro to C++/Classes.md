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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY67OTFA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDdRgOKZz7CkKJqmpqD5TSnTMhWglXD1V7B0ZiBgKNOqwIgOEf9lArzyzcUPAolu5PhG9N0VN3AgEeJDmJrPWzy1k4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNUYB6IR3%2BO68sz9ircA3D%2FfWSw339kCb0MDxKrmMzd6sAbCPNOaeRpzFxj1gXHTbL3TZwswWIVeZUCxdj9LiTIcmjQ%2Fo2JreZeKxuOp6RanveJleAJ024Uen9KoqGlBZzaiTeCaaZILQ%2FuvMOcexWqeVSI5Xl%2BTHAh4avHnbhNJNrgme3zHbRCEpdoJxM%2FE%2Fp%2FKaz2Yq9AsjST%2BtZ%2FfxrlTJEPDlKZ8DqQ6AkXejaMerIZJ%2FWvramwBZ7beOR9viM7R%2F8Jn09j3XHDsBr1fBxF5TEqZLTdrDK%2FwA3bSIwfgN%2FJJWdj3XkGuJf1SIrqVRv1vdtIg5a7v9YAoOjykJ4bTWvdF5cFjykFqEPzj1nN4U4R29J8QKLHAsW4vXSSJzNmPXp3gHorVq5s8E1iV9KZBI8jwB%2FjZXw%2FWaF%2F5Cjgn0ad%2FcrOhommJV1%2FvoQTjac2Q52x%2BYC5LsjDuA9LB51jICXmdXMstdRBpL2zOxlNrkxELr7Qjtdmer9COVLwXXJfl1k1udvzVUUrmNVStrRk7%2BSCBn4SYIxKgG7%2ByExrVH2xWagOoc8IpchXfUTPpDi1dZpi5hfz6IiuuoWirPUiiveI8W%2BdCgOtfnIN8iSjieC5yoJ5OEBJwfV%2FRo0P2Yvzk3XYOYbRSpJkMMHywcEGOqUBfHmzPVaJtGHO97z0R%2FqD2eXmiQHPBrXYRfvS5eChJv%2FE9Or3VBQdaHt7Ybbh9wCudvBvF8xLEADFUOk8VASmm8RnyUlGPfuHUozjyMjkMZsQWt6NqwRxaprPVvkbEuEhrb1cHsVeqZwwFDjnAEOaVVfcAsCqDOOInmZsT0s1v7wd8%2FrAs8fBzNpYHMc3Rv%2FtsXpdKvgjI%2BBmRdcupN607BcNgRZI&X-Amz-Signature=863ab5a5b218d0df299c11eab867584a76e5fffc9a46269176acaf94dad12add&X-Amz-SignedHeaders=host&x-id=GetObject)

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
