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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMDYDRO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCbkbtRtsN1%2BtgW2GFmnRYMyy6E2GqU75ktUESLbddNjAIhAPgQN0%2FuD1mWkZSisLgC3GFlcBesicWCHokH%2F4Fx32ECKv8DCDsQABoMNjM3NDIzMTgzODA1Igy99hE%2Fkv9e1ysPwM4q3AO5DpkI5m4WMlprE5B8CZpc5llft8HCljHFJzwg7FvnGULDITotTslNM3aYe1B0BbM6L%2BaLr3RQUmVFP2vTYfOFo1CLiKqbs5mN1E%2B%2FcrqdqgysHW7AjGrGGM1aUuE1PuB0WSLL2JVUfBCl9WbPOBxEE12p%2BhAaYJIew3b6dMWsU%2Fgrdmy3ngjPlDqRBxf26cxnpy%2BSwpQhjc%2BN03cf3ofK4%2F%2BovQS1WY0DRsDw86PdEM8vuRa2YU1BbBoktAnqQtTG99KD6wmdqiGWW0MEiJEelPT5BbQz%2BVI6dIM5rNMlNEmIqmEnE1oIXv4Bz0B9iyTipnO7quJvE1%2F6pnEJ5rRVeg7VQvglDm3AqIXmjZ2CqhpCpyGMxvL%2Fn%2BE9eY9xsYy43l2cCper2Z%2Ba7gRtsyMufogkxKv%2FYZkBmJ5C7N57mEcdV4rmkOnD2HLt%2Btxy%2BmMQEcTMqJ7gLVfSKgJ4%2FF9rcsh5g4NG8NFoXarrM%2BF4BDmQ7jaBB2imhVBxRQEp4m86rJEoYZEyJxWzVB7V5ZDOPsj7Kk82UXqsL67mbsf70hcn7%2BZHRhxS%2F57yNCm2V%2BZeaLm9hVnAIwcG8K8qY6BI8SkHnURV3uOa8H0iGZ0Fcop5kCInMWWP1NISpDDlnc%2FBBjqkAX4XaTggnDxz7nI0OzexuKhzeTrf4R8tiBbyQ%2BtSuHeHA%2F%2FPhAh36W%2BGem5aQmu2XBIOxuCSMmW63McsVsZ5kB5AqNivoCOOklzOloVziQQbPyTrAywbKy5r0ozsizD%2Bx9nbEbrqX16lE0mc3VHt94FAO%2FXyez5H71QLSiCyABd9uO9phjgSV1g7NtnHBj7e9vXP4ySxLIPxOdua4s6DWWwUe7xp&X-Amz-Signature=5375854ee05335bdd8c61da8f0a946dce8d852984b42f3f956d5893b4170d17f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
