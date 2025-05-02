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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQBFIEJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFg%2FGq0e1Iqnfz5JmYU0f4Cx%2BrpCpTgosoIhkUhHuKLbAiB38mfsZOqrW8PBVcPNseLxv3XxRaO%2B5Ylo29RwVOU0ySqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOqkybwdzzipxLWsKtwDwKh2A3lBflmTAgzMOWLIxyBZkfr6Bnd19SictgQEPca1ycKW9yrnARpQzsosSCbQLjIjwFiOq5J0QnOF1Mk%2BnG85IFloFBoDtSVfSrNz4Vd%2F51imDT1vmc0X6KuGHrfYQKEQMhPH64IBDcjtDoyEG2XoWVxgdm9y%2BCou0sRzELTf4EwZ2LbcmWUX82y8lUsSQ%2BnA7MIXkfYbvqVBR4quy%2FtAEMMVOBDe8BksNhemmI1mRMvvMgwvtmf69mmlwtK1mtnVng%2B1D1ENf3ebcdLxFYNlQzmfYtulOAz%2FezDaDXpYz1WHhrqmEKOuQf%2FCRV4uai75o45Mj6P39PhOrSilf2lbWOk8Ad3DBQmUKje2pPXZygZCKV6lp45pUrZGps6w%2BZt2nF0BH5N2Q5EYGhkQ7OsV11UV3MXe6u5VBXKOBW7Ci0tPYDdCDtxAswI6T1o90BlzUVJSAJjSJQNih7aJVHOiRp8FesiA2Dti0eG6c8QMnaryy8kbxAhGnmOTmUN14ACenZvH%2BAofFfLJK8Vs8J%2FGTcFuT3IOqptTmu9VWlqptnt62J6bk6LniZOPXSFdEsO7pKQU1kTQq9833ZO1rBSCkfrPmC3dgVFjnBRvnObL4MhyJuTBvIV8fWAwiOXTwAY6pgFIk2ZiQoqoLCq6rry8%2FdEa91PZl3TnxpuEhzwUyYdqUHIcENromDH2z1KH2QjQk4mVONi%2BSIf6cvf%2Bm0Qx8cRtBXtFaK6OoccY2dobu9p%2BUjT2HtCo2HCSmT865druS5Kk0%2BU%2Bmygcw%2BmH4Bnunr6QaOjjRN5GxWiyIT8OPn27BseLfkUV6kpH%2F7%2FJ%2Ba14OJAlV9lT0LSEFkuh2W2rMx7bH%2FTfFDbU&X-Amz-Signature=c0a51ac445d7c213e9139297bd4d2df26397dffb446a374eb9e7eb34512b2333&X-Amz-SignedHeaders=host&x-id=GetObject)

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
