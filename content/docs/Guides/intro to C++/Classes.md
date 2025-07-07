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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBA6KZR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD3%2FUpmgE%2FbVTNvr3%2BWou%2BD3cB78GRx3wqzldl3WcYgQQIgO9PKI38XB5L0w8nYVKg1x9O96%2Bu4yvDfy7BZRzHk2f8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDwb61iQbFbWQieiJSrcAy7Tf5GuRI4y5cxDEaXCIL%2BVbDMlWDuvo3lUowwakFvtaACSIzVuE1DjdT6KQk0U2OqYLDxYT02nHRa4vLF4mPywgJJdt%2FgQvEqjZv6a0ITHEPERdaPc8tXFrX3wy42w1dQUnVU7fkDEru8WqWipl4W7QfQJ0nvajZCZ4hm7iZ1M1a5kKPN%2FYS2Ir2Xfj2ZYWqENT9A0gGazd1r14WUR%2FEdUbAOZyCqCpQWSpJeQJ%2BfVE31KmS2zNyf8p7Byol6VCOTUNgjfPEoFPb%2BzH1wBepLX%2FlMnxPl6qaHX9WJhubeHmy7%2FGFqt%2BzUc058m1%2BAH1YIz0EjoTcb8o1jsxv8Zp%2FoC%2FQE%2Fxc%2F6dQ998gseG9zzbmHlMA81d5BmSrfTBfDQhTIPakV7DY5OR5XiEAVOi42wPtPHeQkBhc5Jc6Jsxf4BDkkOMRdLhYFJ9L2RDp3bVyUZuWoQVav2R1VaCnc5bXNrcV6u%2BS6gSlciQ1qRCPQ1I8a8gQ%2BDu%2FRy%2F2RnWx7JKaofcL7%2Bv2egLOFn27yYlWdNN2g7MGJZBXoiSZaCLzvEqfCXKk%2BRwE89lNOFI3wMHaDOrD6joPDASUQWSKL8Mu8OsSHhvRayfciItkTeIaIw%2FFeTY%2FSpxO9wh%2F7XMLW4rcMGOqUBubh3ztSVtpCPDBj9NHFIAeTTrFYfC1isRgQQU9Gz9n5eVj1MsKL6UvEDOmC0MEeo4FgFC%2FSOFhc2h4NjJKdr%2BCaME4N%2FKsPssN5pidYHn6tg9u1WcUal6H0wKsV60yuPBOzbqqZXnDSiBnUfVNftCm9MF4aiA6sMOQK4i4BHbmNvjIFw9td8kmS0PgyhEJCWA26BvPrgvhgTDsbT0SThqRqGJMNJ&X-Amz-Signature=30c2f1fecbc0cceeaa07e4bc7bc9a2808a9ff0a96e84effba1af29d49cd25268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
