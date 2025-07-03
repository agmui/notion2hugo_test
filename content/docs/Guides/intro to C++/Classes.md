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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQA3A5SI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDzoWmJItg8pnIfGYSYZyTO8hTR95DYzAoeXJLGCIxw9AiAG0YHifcSVu9TBLXWOwMY9g0LOer1I%2FqBvFkpfozcZPiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz5SHLIOYeNT3bybfKtwDfF1CWum%2BNL%2BzWAAn9LhqmkRtjFKCMdUyV5lBdCq4tZwrtPwXVoGjRqsg9wQgbFlrl%2BgrOZ6jT9MkDuKo2i7vpqm8%2F1LqcJfGL37Wirc%2BiZeeD0dwEpXP1vYZym3hyTcWwwwJKSPi9x6Itl6ICaQyFxhMB4jPnEWBdBFy9RXAdNaC%2Fhg4DwoQm1SGv8tdfhF2ua%2BLt2%2FTATA53AX6PSr907H1WANAQ3%2FqsO6fsaSOOLkDn9XVcyECP22Uyuuxnf5EsB25J3hab9K8PkqHczRlhjfveQYG%2BYkVe3vXWhSnpFJkOhxLpy%2FbPrQkppdyvnW2Jjf56XrVjWVzLx8Ii9CND%2BBDd6Q5rAcVMrXj982NvJICqgarTWXcMHbmNxu8YlIn5nnpSV2H8Q%2Bj%2BfO0C66N3iuv4FVFLgsm3WPumTsyDt9nGR5ic6gbkwK8X78zodKKskpd1NWzIMSmiFS9nPoZnO4Pc%2FJPXSu%2FnMhbrhQZ%2FW6BRu3HOae3d9ZFkab2RM%2BulV66UOVXs2f5ZUKKZTEWOQna2bZtFCYvc3M%2FOLgDcq3SGfvHz%2FVtbD6bCuFicAK4mNGzz%2B%2F%2Boja58Rt9NQs%2BRNtfOgrCjAr4a6Zl5x2zUJb2gEK7wqvYoEhMwf4wqq%2BYwwY6pgGqMoR60m1xyWb3hQmdDR5pXaNzXAgbwbvvRz5fCQqLz5zlqn0WmHTyK%2FnUGOYF4grEAYrOjQOIg9fs4XGCpbWKJJ%2F4PO3IIXi8YgKW1y3jj07WU6qjn%2FDCES2HRQhMKf3yLqkYkl%2BKFShygY%2Fe67cRdFZsTVRn4%2FKl1DH6HwCLa%2BV92cGq5lit%2FzNfYtBqeqq6%2Bi%2BYF9mK6hUBsUMAVGNJaCeIB1ax&X-Amz-Signature=c40a63ed30780348730a16cb2b6d349076b04f4129631edbcd999f205f1ea66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
