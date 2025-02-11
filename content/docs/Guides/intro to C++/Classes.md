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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IJZTWS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFavT1dSgdjq1jkIy4KKL4piP7w%2FSNNcy90sNIdRplMtAiEAlg8jayJrEwehNa30j8iX4vPgjIhQq3n%2Bq%2B02t011wekqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY1MorN%2FH8cDblyiCrcA5UB6k2o39NAAIeK8Wx11WkvPHy8fveNQ3ZIYHqMlObtmE%2BTeJH%2Be0UO%2FlgOUQ3pxmynAsMEe%2FXcplpZZlc0iMkqcqP%2FVIhxCFOP6xFJY00VCscgkhtTwIZOki4q0yo7r1mCQ4bGkGspaqTV5y2ySeL03YJ2EpcKplUzA09y9mQxCz60vNfWifS%2F6MWxJM640x8pzeKVVH4Sdn4UiqXYx4cxTGCW35veX34uDbc62BnJIB6%2F3%2BNJqOsTV0jDIGBcTif9%2Byrw4LlzEGPUSGcwvluJF8ymtUpBCbUG6vMI9vPKMlOtl7%2Fyokv0VawfDfR%2BXwtYoDjRlZBj9wb%2BdzSpsOPnGddyamLqzYJKZJcryB7AfV5%2FGIGgxm%2B4HhVfkz9D7bBliIvMLOrqMTazZU2DJz98pzslmLnB4JKsgu%2BdkZJaM3XXAOayRy%2FG2FIwuwLbityg57Hms5l22fJMnkJF0UMG6%2BKLPT4zk0GGnsApjyUtijpas%2F8sWAyn5PVevrYatge0jq%2BexpH5BebSz2NjADjNokZAbYx3fncABKxoh4b2VgXIBDOgWJJtn9o%2FHcfAweaIA2pjoTcwMu%2FFszbVWBBXJiSdJMWq4o7EZa13qfu%2BhP5J9AX5R7rPQ8uMMJiKrb0GOqUBJ1XL618Tt3q6PwD0ziFzytp%2FLVStfdySd%2BzgJruGREEut2JNy6IVAQKkmrovGgA%2FIgdMqWq6DmzL09pVTvWI%2BNKn%2BRjPy9Y56Z6iDIKzpF%2Bw0d44zWjjmrw3TlQpdcnXC31Of3wZ96SGxA0ZSLKdsEbE6OyywDj2S4Nb7qVUtOBH14HUGdQHEGxIgvShJ5G6oG%2BBo2Y7Tj%2ByRrnAaFqxZWYY29XF&X-Amz-Signature=3d7937f31066d6b02238ad92768aaa779b6bc7e13ca6aa21fc5b2cd462a90f81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
