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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIBNOQ6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIG%2FBGMNsKmFt5Awx7IZ1fBFZbM1N9pafUYOn3Fbinp%2FqAiEAo8FVAv8u%2FsEvaWX15mHLLShmCGwOWi1zwTQ4DhEDmBoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOulXUF76I%2Bvh6tXSrcA5uZuLs%2Fw%2BofnRPYb9lqEYN%2Bp%2FWIFRcKw%2FWojr3EeraTXV%2FyObD2BMbIiDz9ZRlZNip7ShXn2AOiOmSfn45LV%2FgimpfjgQAdzvKaTKu4EZEvZ%2BOMtSAASQM4y0Q%2Fo8SdT4KDne5ykCl0RkCNoJYNMrBJ4WV%2BxLeGyru5DNyRj0G03rOvIgEZStlmjMeVA5pjRUnw%2FSZlV%2BXwrXNF2fkboJeYAqTVdCM6jnzNhabjJ94w%2Fk9%2Fs0lOCJi%2B8DkScO%2FCuqpQjjstfPIZHdsfu2xZe8JKbCmizRMGl6YX6EFMj%2FSuyxfm%2Bi1dvXvS5n80pd13hS%2BQNvQWEWCKjQFvJ48wb0dGilWLN41w9rsHBV2BKRvpCZl7fRgElNxBiG4Tfpnjjb5X0%2FgAcXxup5VUG9OAZ9yC%2BWbQotMM7mCUjH94a2gfcCmkIVUKGuqJrFSV3%2FFlUop0TMsit%2BEJPLGcmv%2B4WtP6s4che22wqA4U4TG9ZaNFQYu%2FyVYRXQdt4xAprvb9ZETNwkbpYPB0sEoTrk3Ie6ZhntskEt2mIy1ygbnhx5aNpaj3EKM3PhGOGRrK59UsibpCwW2jeTQDV5XFxVJD86db2psBbAwG7VVzw2NEauHMk%2FcO2hP86Zx0ZtnZMLe3h8EGOqUB3z6gEd5TCVyMuoSZyP%2FvoR%2FCfq52Buzb2kMPODCZFSBiRa%2BkSDAI7GHH9jEz%2Bp4tLTWCdSPQBL7%2FXBBtuqmf6CWAJgnRv4CYp%2FNIfD7SNJmECquUNyOr9XiDELtmY5MkyGiasnqyU0EcELFa%2FrQ5cQbD%2FT5xcOKtcfBVGlZMeRrGLxJ4MT9CTYfDcswl4m%2FHJ1aEI0dyb3sFfXyHERpxEoTlQgzP&X-Amz-Signature=04dcb42394eeee8f59be383e36c30c7edbd069094d5d80425301d8dced609853&X-Amz-SignedHeaders=host&x-id=GetObject)

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
