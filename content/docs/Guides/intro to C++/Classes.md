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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SHAVEH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIEIJ2AXJtF3%2BcAeCZdjrPud2eMDNxvGxHlcyMmRwA%2FRQAiEAjsydNjEmD1yKaQDEz29CFZqTa6g4Tph9dFMqIHBIbJcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELUqqOYxvX%2FEymp9SrcA5EkoW3GOPZCAPvx%2FHKn9RhfgfxhfRfhIK7%2BImhLo9lje89e5ecg2uMc6Q9iSAokeQOCtogzK48nTSwRJVkD%2BDC7ZkNsU5UmzysqmUmXaKXMStUIqMRJaZw91FekXKf5zTWzZ3GUN3xpCdijOUS0XyQXcb9uZRuEADYDwFOn3KCWL2iBSSQqS3BHqBh9iyaAetH679Xed0xDmOUfhxIzVHznNK1U6mh5rVX1txY3dzOZ%2BOellq2g%2F%2FvWKCEFkTcyAUqtaL1XVwyhdTIx7%2BgmO42kHHiETCz%2B3BhwQ2jvK6mMdZVx1%2B2MWWqtlzPuS8QbS%2BeX66kn%2BWnXIHSGJI73UlGFqYpRu8HuUPZh8%2BHt27y0RM4aoelWnCqNkcz%2Fm21o6rQtq%2BtqtKQcWWb%2BQ8cET5IB63TEsCfG4xkC4kc%2FfAjwkY%2BSWI8%2FNj0MP3jOwthWdaZBBmPCo1yhZNW%2FBZKC%2BHELbff2lcXDLCvQZ1C4c08uw%2BKkmdwWyYrncokGiCsLtOHSW%2BI5%2BwBRAKIE3ZiGmtlj8OlOCUIgJshEUxZ1dgxWy%2FsX7i99lBT1KE%2FQnVUQ6OgENRdSeeROXqaoH6Ey4ve%2B%2FpzswXTtp2gXFPrzo%2BJ%2FEGXCOs9va%2BHPuFhZMPzXpr8GOqUBajQonp6zdxKtWqe740qyWKDcH9LW1MrIG4oJ2NQLnH3m5esVVb%2FK8Gpg6d7QREbB%2Bvbh6OYFNJVp7Bpu8k6YuD%2FwRA3me3guF4TWm5SXZ7YXE%2BkbHzqashl4lmccQEcSNNBv5dX6XHymEuCRGzWbdz8bLKzrDml8KnUO%2F%2FIfCFyftdeD0XaLKPkXFf3%2FAArmTsEH9O08AQDlMuAznQ0Ex0WcxgaG&X-Amz-Signature=f4b416ec77929f04fc9a0795b99052a50c91577c2c81e684b77bc155760e96de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
