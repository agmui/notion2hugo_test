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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A435HYK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3iynrsamjLg0ym%2BaNGYqkbR6nMqV2uS1pgyA%2By40wVAIgUUJ6G53DpeC8JKXS40dSuWpS7VpRkFFjJfgrfuAOVe4qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnjw%2F1%2BnPIYHo300SrcA2Tr6MaryhIH5Qws9RHGDtqgNYNcOi5athCnCvU%2BT3L4jcedH%2B%2BTtBlMgbzm8WGHi2e5Z4a%2BoUbclxSxjqNNnMC8lnQNRfeTjJ2O3yDkx4ASJ1o1Pg6jwXl2%2Fn0HygvHuViY5Lk46XxbzuDVW%2BERecwLK1O6C6WPcKd5Kd478lT8mxWhmzqMX7S1uoxJWr0Q7dBB%2BpOSH5fLh6CjQLchkpzhdVJK5pJcACf1Bp3cyrTxjNSfbCFlWI%2B2MmI6S50fQKFEqICI8gF%2FDA7LBQBDG%2Bfr0rViUb1B2NoJWeVS%2Ben0Om7494dsW9UGm8UCpmBc8zOafqAA7wsuVWbcXQDNoWkfjtKvh5cAVy5zxOKoRn8IjykzmMMeyLDkj6yPxMTbxAqfRP07gYn3MzMza9lvwATJYIGdri446By7GKWY%2BVnnj1hTBMMU6bp7OXeaHtCxQMbMHoD8Z%2Fwyv8UgIGP87S4TI%2FaScm2TWn0qTvcYOmeYyOi386JG%2Bsk5oCRC5jz3bo61MbRBMNb%2BFqZaa8kOoviMYYuWqEM6CYSj897cZ3mjT3Rd5HVtu47LEV9%2BiiR%2B9ulTOHjoJpE6yMPExw1Vj%2FmD0JO0Sd5%2Fz55ifrHoeByRAAhCZscB1sYXTf9%2BMLbZysMGOqUBRVHxYwkCePFumo9JijF9cX5ajffeAliQPoENH1i1sdqqUG4Lzb8LhPfeR5vZCdEEWZVo1JmyekyNM5iDb0Fz4YXtIvTs4VvdfAQcKIhR10LzcST80GwWimdbBdKNtPS%2F7bKsSnl%2FEUk7HWtn0KnOtbT7kJC3jyiBG6vAHnS%2BZHFLu9%2FFwYuqVsI3vp2R3yq%2B20eG7VVykd%2BZULrveXyVzjkctFSc&X-Amz-Signature=bc347c16f566ded77a5cba440d7d4a7d5317df9eb0ea03575fabc7f5ed427ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
