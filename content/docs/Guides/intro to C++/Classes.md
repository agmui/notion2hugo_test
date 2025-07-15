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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DGBNSW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDDhwPFciyGhFAqQ292VPAAME1ngvoOyxwPJSs0VBu0xgIgOgJtcZURqDUY6aqGeYXfTxJbr16XJzpu7aQXK%2BDP%2FBkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMbFQyZUb8%2FfIq51YyrcA%2F5gzD0hl2FmuDIuTwc3AcKZbS0%2Blb5Nhb8d3FSjPb1FQpPvneSmu6abG1avXr2bOFKbysnyVthP9roGne%2BH3xNNhh2OtHVE%2FQehsc6%2FaJWnf4%2FrR1J7YESe7JsmhqYyBPP%2FtknCqWcQjC8GAwVDOO5YlirDUKVgzQapXR7WVzBSuev1J%2B%2Fo1jrJ0wYQDVfL1ECHK9DI0nYijxdJijO94C%2BqrAYPnSSKpe6XO8DfvtkU5BIerg%2B%2F73Oq7PS58umAV2tybQ3iBiZGZNMTSBxPFKx4D5DjlrjEg8B1%2FoKLNgaXZdWoV3vFL624KBK0rr9%2F4GbK6dgio2ydxYuBdtLZL0CWh0xa3T5QwJFGYeufzA06Xa2FQ%2FngyD%2FJgRXoPTzBJSzahFMUFdcoeDsuJnB455Qe9ARLgvWCtCQTIIDUhe6qyGwAPqGO8MD623yGH6nEFA%2BhsE7DZan3krc3l3kewtMo2uN7WVvGcjn5uj7N5qB%2BI4aGDrkL7d10lFfaovRwdZf34hj1e1FbHnhriv2miclbte3jiW%2F%2F6knaV76RfMWX%2FX2Mojy38os%2BCNjqOgvofLux8hV0C9EdEtehSb9PaJLRQWcgsCWypR%2FUp5EPzCP3hRf5OS1C0dnj%2B66BMPSF2sMGOqUB%2Fl8LYZFrSwqwwsZQS0ni0SRki1n%2F6IfcHG7jwd55XE3WT1Q6khC9FmgbCQKup5oz3BfKeHcr4KlbfFoKngzyAlZazidyr6maOliPtwVjUgmwcA9QNOMX7GdJdfZOyCjVWlr9J65%2FwoIOQeR2A8psoGqbyfe4nj4ffOVQce%2B3%2BZ%2FZ9U1lRuw0bwQI%2F2HnJefzAe9TuBAeIURyG3%2FFRuKmn6rgK9Ih&X-Amz-Signature=1c68f32ccb81fdca94cdfee85c7a2726e813e4583504f2f5ea181790ae075f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
