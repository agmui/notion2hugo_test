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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3O3GJY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXTldDJXdIJHYZeD3w4t1E0Of7l1s9oIEGX%2BtJFsOfzAiACNbhSqtdUNXbqLfdxTbhZEAwFcRju0dZOC7my5StlGyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpWyrloILdfA8kaGKtwDVSICS%2ByGHkRyimYibfpVaq%2BJ4zEXzF%2F3MPhx1qUoFEPJyESQpAiZEVu7tIwB%2FS11cjKhpuzH8sKM4EQFttXITMBUU5ZuEJNiRjbLnpUXN9hpPcxLS7rZwrVhWHWvHHjX4NwMKQjNBRgWJgdELmO1rUf1ysxdNdJidXke0XL7PMuTmUO%2BhSYdv6tiapWq1y2bInkHl0yKTagQ1TAUBWW%2FA5PEr2UnFSsjk%2Buwcf4opX2tCfUxoY869Ud2oFqULGMabXXovaiZ0GvrYXaHinbLCWjgn9GM5n7IghT9CgyNVvt0YUkOHf5mT%2BXQpF7klS2HQwDWXzO4B3%2FcB3AvdqxYjYhP%2BhUzpvr4yCctalqORweViHkwSyspa3DvWVp8wwgGo0Qie%2FBpbL%2FTVhA9z7vOALJ%2Fd81hcshRjyFNQb%2FjXQXaviBf5gVMPM7DaSd%2Fl7vweZFgPGbDVLS2OnWb78Th2C5kxDLCN9BDt%2Fg5tKk9zxlU3pTD%2FUB4iyG0oUEGdUPzdq9gHXSee4XejgnO08NQkIivbjmtlK3wwMtHthTuwtv9sQzM7YG0sBGgx8UQebKrjHnMh0zvnmSQjMN738%2FNL9CQCvh5X%2Bg1LyUnJXuwzqScBVqCMMnWLizogR4w2syvxAY6pgEVrW4AEHf%2FRPwDZrGJM2CpcpTZkVizsRF89zyXWLcajkaVsSF%2Bj9fFFYe5Nc3dEtbcAbhAfjamH3gRQVbg6VRtiGEAynzy%2BKogEVbv%2FQASUZ0MxpP6evoMdEefEOhofC%2FGAQkQ7npjTN5OT1JrLQzoz0oOjFCT%2B0dMU%2BCqJ4AxKxyKJSj3tbgyhc7z4sipqpQzjSO1h%2BOMztErdsebMOsvqtg1NijP&X-Amz-Signature=9c1a54001f67ec983d6da9631c42598b68d72c9b1d3fd5f0b5890cd8e792bc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
