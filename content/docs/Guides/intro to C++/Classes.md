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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUSFZFB7%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICt0R59%2FfrnuR8opQfE%2FEBnhm9W0PjInDT0VV72ufI9AAiEAtalDisgS75BtiRtychr0rNT6hVTKWJgcW8ufaglbrncq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ5PZOeqYruAnpUIqSrcA4j6qkET%2Beo3TmvuWclOy6Hha7SeGtkV8oqJHw6wHbim3O%2BcFqEvgIC7P1Em1uhzmgsD1mSQQk3ukmzuf%2F5gP%2BKOPC%2FCGe4gv%2BCm6VwjR0gQy9eiFLBYusSijgq8t8ML5DTBIeVvck748yB%2FYx023ttXGeVF4%2FjgJ6d3j%2F4l0vhkbo8vhAAWi2eGJOHhV8iLGl%2BdLfkNYPI583riDI6u4qO5d%2B4GWBOnhU9kjvpkiLh%2BlZmPtWOsGFJTNFxPBvSoQJhaWCNMztUqLAu%2BUSAMUDlGmMK7TXwvWuSiYXyTzmCfNgO%2BOvF234sI6it%2FQMWAfK%2BwDCeTAHRhZJOY1bR22BD3Cm151KyjAoHUNbag9WEao9118kVMGfw60fxIowcKx5LtGGZp1TcN6bylCJ8OYuMxBOkZT2%2FTPpXGPzHK9808OP7q9NZDlm%2F3ZEa6iChPxitY59kdjgsKJI01Wk86JHO2%2FuMCVeJSyWQCUXfZvahSKneb0UXNjKRmyIgw8S9oOLuM27ZK%2Fe4E6bAg8d4T8eEwhXw2Y9hhcPW6H%2FqvQ1Oj1eb6gfrbqZh5jJ4TcYlgLzN8h%2FawXgBDH3VF5BjheIW34KgzkOiGG6K%2B76Wy%2FHiqJcnVNVNk3TMj%2FkgQML%2FM0cMGOqUBV6VIcS2OvBbvsYrxtTwjksojumbF6EIyAl6F%2FelvhCEpnsFDD37Us%2BbphE%2FRZ949rAeUg1yrNgf%2FlwGUmC9WVw0wYgQaE8Rj9C%2BHBu1lqkw0V2KpSJbu3ZZIX8iwFSxvDQNbc7nFC%2FPXiIHD5MGL5dx07xHD1EFJKtp4EN50o0z6G3m5tnJNB9ahQmcqG1Dcj3t%2Bk8ADtUaAiYX%2Bb%2FtM4JgZUbbK&X-Amz-Signature=17c638d33cc366a442335f4c7b3860b9cbf634f1ffb088d0db48e2da25935d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
