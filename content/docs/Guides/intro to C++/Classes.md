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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMZI4GM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2FE5T0v6p6mgfHkauhaFoDLv17iXglt5UAPeQUyMtuEgIgMmX%2Fh423lSFDHonWko%2BZ8fzFLYC00xCIIxBQQb97rPIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlcV%2F2QDosRe8jrHyrcAx3J%2BWlR4ekqlUzFMArINtIrPamcKAVpliMMIFrV45aOkTvp%2BlYIAFAfQdYZEZJhcutQuF1lVPGvtQP1sJO9tgLjos01XEgLBY9RFoljj4ATu7leI3hTO116mCah56N%2B4bCkpGa9YTX8XjUpR9pjoaTrH4BeGAhMY%2F%2FCfQlcWBxveSSKFs6fIHt45FEN%2BNZCF7tkBwzXMWMDXwsX9wEhpGzV9tRnaUt3jFkg6GmpsX5tF5eFWNQKQM4EPHoCfMjoUiYAzzg2137%2F9w%2BQeZdEacO9ddsMSIQD4VWLwN5i98ku%2FBS8ITwros4MZZi2HaVkNaihvcGqrgFQfXj1SIweh7PUb9vUJzPLfI4tehf%2BXztSLSFpai4nVMCjT1LVe2Pyd9LeCh589CmJ8WqdBBWd1Os%2FCFhSQ5NYQfdy2kdAftT1lLpPXOmmHZdVI%2BUt5XDjQ3y8EHyjNltFO7QDFFpPFdSYaKfBw571F94JTOrX7bch0oKF1s%2FFukrzRYE38inwC%2FHALJkBZjta4zXgNIsrOrUVL2Cxl9XMxSihkAY9XMMoU%2BC2%2FF6n%2BFlC%2BYtRnuNYDB4CbxTzOJPHOVRkOLwZzVHW3yIQieBl3Pt2%2Fd8GtxzjlOKMtqvGdmk3jEV0MI%2Biqr8GOqUBeJ3GyK2QhpB08wVezaJi6CKhGUlC5BE0cWpaq8Et3y6CqF3FLAOvd%2F2wPXs93aKw6uPnDQ76CCxoLdh5CUNZE925qgToOh2hFU7k%2BvEa8haCzijOmK3gIUDML%2FKBzEx2KCiWlpusM0EYgG%2FRCAK7dcbGUAsZ%2FLr2s6abZ2WK28qqTiNw0BLZ4RjJ4qChEk85tJ%2BTxOZBK2wCRch5YCvlq90B4uuX&X-Amz-Signature=170716e02c9238bb744ba5bfcc6f8bd8094566af7fbb68156969188d83790e56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
