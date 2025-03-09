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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIB7JXAL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC7kaYGCHpkiVDS8tS4TG0ZPYCmFcBHk0REVIvmaf43wgIgORy4%2FZrRRAWkMFDlK73zSFMxp3CcomBgOUPuqiUVzeEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHLa7b2CyYnkArpSsircA04Uh8DC7yjm9WtxKUgQkDYyfeP3lOiUSnbOynppdXZ0TdLddXgW9oQ%2Fh73C9gCaZUW4W2fklOJnNvC6GVXa8xI1%2BrZoi6FtdD8Qa6Kg9gzLqALvNaiEt%2F8YiSH%2BwFEmXxSqojk7m0gT7aXLVS3CWfN6zWPcb7GljB6O4WB6Tvb9jEbPGXvxlzURTK%2BHJUIuLi1cRxu4TjqQDInddjJmNmEjKuxPf%2FF1aYiffQyicGymacrB%2FwUTPYWuLDwY2fbSpjK7RcZArSZX687A1o8yqiIEcTsVjlk5cNyL1IdRyuQgc7nGDy3b%2Fv%2BEeEZ6VRr7dR%2FvYEKqicidnTfiZFAoK5%2Ft3%2BwtCqGdlfpZuARQn7t%2BvdaGx3I1JEKedvovW7213B39DhDRvYNeA5o9QSClfv%2BLSzUMpHSu%2FnR3dXCYFXDuTcg7jxTadLeyI%2B1PPlEEasMzu5Ov%2Bir3eCUalcjZC4bYdeAQz4uqmOAN9vRZsW0NhHgyGaT3zuknxR7lFHIv4b0l6vSB45MdonBi5uv5I31%2B4QoA9T4INDVMrZ26iHuDW%2FkuCrf2npoZ9IAGaI0O86sMdhx8LiQGXzPg4ocfhohIR2nfWb0kaG4Bj2fbR9h%2BCfy5JgxEdmhB4xbgMMeNt74GOqUBbadJ%2BDDhNvoDUZ%2BDXLS07mJ0rTso910dAr78370Zt6iEwE5IsjHBWIIm4Z%2FXcakzibllip77ytfeFbr73fLelyWOmO5jh4p9kOl%2FMl2OYB7idYAJMxlHO7k2QnUkOQ3s3a%2FVVEggddvwnjzUefD%2B90TQZpWzh6fUITe%2Bfb5V1Gb9kUKvdZfZQ%2Fxo%2BNCBjE1MWEK3GIe1wzRRJfFGCGNls8EXWKPc&X-Amz-Signature=cd33b1b602b6e9cedad450796c246d31ecda78fc61625379bdf01b8f8f561e96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
