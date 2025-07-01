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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7EUL3X7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T035416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLm1vpn2b0st8jHyN4XVCFzVUlysN2RF13Uf6VBORYtgIgL6Tu%2B6LqbfzF566H0MQfdYQcWh0dmBe4B3oy499281kqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNBhNuo4lx%2BlIU80SrcAzDCRIP5RM%2BZOGDPuHlsg9VY4rny8FmQc4eeaQyZRhN2hh3OmAKeK0reKFASfZMwOIlvC%2FUmsCuJPGrcVO4LBZTvx0%2B7WMpJNQVbDR7o0FzVcg4ihR89IcdKKzLnnE7WoX8AW6E61jfWRw0qlj3ZNbW6EG8GE2R3ts5d05y5C1TniNDPVZ2RtO9jHOLWPnJJXcIQZng0RXrs68dsb6US%2Bt7nHtXZJdiKshk8siIL08Xpx4QjWqb9Yttkappi5F5%2FtFTdMJ3m8SoXuhSEqWZGZZCQpeVelbX1sf60nEZgzcssRrgY5ZkHHXpC%2FPLfX5NViyELhDLdCLz6lXxdkpXwU1jfKHjtsB9l33xmLfWOxFvO%2BynejgvM6BfvAtjMKak1IwkPidc4pBkEex%2B0rv4HKkRW9QtI2tBG6XX%2FUcPjhv9hKFWT3y%2Bq1lJcqOrFJYHvdUG5j1g%2Bo4E8Es%2FrH7GscrcjpomsiJlS5ANVOhvB71HGuDQjV8pwEPPMsZlZTKv6WrRD7t3Epame9ON90kuuZ0i697t2Y0MjSaYn9i5vZm7sHyuRTF2v5V00VWk7bOKKyoHr4zhUhVHyGE7iZD6jsajP2MTOYi%2BbJTjUgFHYmSxMhP%2FG9yJ8uBfR%2FulbMLKjjcMGOqUBP2QWf9kN%2FCW0etXtL4n5hEhJhYYFpwyLnfWKdIeRpuXCe7SK%2BW6%2BPayyukYK%2Fr3etvNcCm%2FPrEDH0yoKDVrCObcnUp0V%2FbEE2UMaDASlTjfyzqiYUvey6xCic6bZj3L2XoXA85lupJUxDr7n2Bb7A%2B4t069zGC62A%2FkRoPzkwa7fuiCHGM2tODDY71hzvdfwdWYUsNYLGbyeXJYbKGtcUNrg2O8B&X-Amz-Signature=41a8cd7c848d24fc787f97a7bfa373495394a48b9725b7a1e1500175fabdb2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
