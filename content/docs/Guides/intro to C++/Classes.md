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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWXHCYH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2WN5tEILN03KGqwxFjYIrAhcpPCG4HFN60oMI%2BVuHRgIgMGhl2iZ26yTELpaRarE6zPvuFREZ3JLMQYWyEhWKXLwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQithL1N0fFlfqDGyrcAy4vHXJ0BMAfaqKPlY1an%2FoBGFMiZ%2FH1%2FEJnkXU5VB8H1esV6cTUK7I7OGgLNJL7%2FMiYyvagqlRZYHKDu8Na%2FeEH%2FdCIsXy617lYm7uWa1%2FU5RKsglj%2FjNx%2FXGf%2B19We42Rc9E7iLkS0KWjk8rM8uQ%2FJFZBHXoAq7qLUsHrL%2FYk4gqrJauv14p%2FNisZS7jG7A4KvLtAyq%2FlJiBA5e4zXKipScklaDxgisWrmw0HnKeLVfDCCTXnYJ1431NDbCoSzjGOihgVCdTddGwUzBrWju3w5v22uxUFZ0IE9awcsj8CJ3GiLUX75tY%2FexkmmgUeswm0JRO0OTlbAT51%2FyKReTcZ5oFBYcgr7%2BE4PE7FdhW3RXOpWn8XGxGzYRH5Ow4eTFM%2FmwQq19PP0aYZoPFZQzBSJrSoaFuLXa%2FkLVIQPJt%2FQFgUpHR8zat9VG%2BtqXnsEAMwRPGiNxIm7qd01%2BgWGdnHhIFSqAD3vGvwIDQOjonlTDz3ncYovecrpRSinsh3BxvM1pYLlr9c%2BTr9ohwhZuz4OWakd492m1XLjxFTOCH9n5dclny0MAZc2talCrkZ2nGKU0gGO1gQ3NJ%2BzVYv%2FNgrSC7I60L8aWtz8ICC3NGz2iMXI4wpQ7753IT5MMJqEzsIGOqUBgVnzGi02bRwaCvMuE9Soh5M9UnIgNYfAcGRe8QEOHkmw2h4yIX1ngqo%2FffXlYWWp1gxl70cwSziAJPz4OrWG797qYToNJHWjaWvh7pMayB23%2FS%2BLFfN0%2FeCOv98N9Bv3Yp%2Fvby2AjOnSNgpOxbhjmg1WeDwGLyeDSXBm2RO3jwUISmpBXMqtnU64awpe8%2FryBvqEU1KZfOgngxFtlPu7HWRCzcsT&X-Amz-Signature=debdb4904c0fe773a8bbfc7224193ad460e288f2098e7fbd592441804ac1bb91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
