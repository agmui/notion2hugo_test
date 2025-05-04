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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUFJ2I5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEGacNVQRU23YaNk8ppXdnlAf53lfxbV4lGVlYa9U5s8AiEA9ldXgMqqWxFaTPOIoFkCJ1EoWyYxdQZX9fzLrSjC4uQqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnhMwaweg3bg5r9qircA9QmHK3uSwqpDuupCELxEwljUDmdYq6e96jJ%2F8DENpQIZl%2F9lzj%2BZSJSBiqcaQLDr0eFtdkLn0oOgMmx9lmLD5gqoNdRyVnxlx428tQnX7gr%2B1ZMbWRs6oxiiR3fZQWXwAudL6FdkfuK4qQ7cDgSiiz23jecPUv9%2Fl3os9OOfqxdTjWND4EQoV681mCbaNbXEEbi9WWWDrD340aU0aN9MpeRk55U4Rmmn3CvVZdXLN3VFE1idzoV3vMdS6CbOoYGI7I6KSYDSEKESyJa5arg7FeMxPVWKga1wQ8nQYZXaUyavpT5uN%2FMM79Fy4%2FhxVS6gSSTdMU%2F6mekFUf%2Bt7lu5HdyQ2yUik32O1VblgpqFCm9uWUPwJPEwlEaZVtwj5zKTZr6saOV%2B9tioj2MZgvlk8FO3CxLqh%2B%2FS9KCGrShiz5azBvnWL6QAeIBjf1evW5KKXrS352I1YLfymZvD0HBe7wTUKCdA6SqGR719BBVZEHGHEYhJqZVdWvDioq1IHDBtfx6vgRfGYUcohXPpx5XGLmdEuoNPGLkSkRMR2ucYkyMCj2JKdTkin4BPX%2B1tHlzebDF8CC0lyu5NFqWrtTs%2Fvd9b8zkZBLf3E8wsmdVW3AdOiiutcM70h66n0ahMO3w2sAGOqUBB9cPn5rrI1s5yBKQRm0kY9fbAzisYVxoYoKPJZKUm3gpal%2Fq22f%2F6ZWyBXu9ve%2F7ITihnACayyYBsK6iXGSsN5Nr3msL8qJzAZ5sPyQj8g51QZK7szQgOE73Rq%2FRS61GrcyHdxchUhtuhGljIm5JED%2BRNukYEpcUz4M67jrSFqGVhcPXDHx4x5vN8J6NwX1Ne9NNu9sq%2BOCYBD8oelBAbCENt1In&X-Amz-Signature=ae72171c4c2efa2aa59f85f91a2640f5636bd4b516e844acaee637c575af48b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
