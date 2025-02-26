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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PRH74HV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDsAdIZWxmteh2BhK%2Fm7NRuCxOXVxcozlTUYAAQFMiJ0QIgXXE1TmWcX12hXWuh69UQLygEZPUzIG65IlFA2BSyisoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGdTJ0%2FBVfXdmjnWeSrcA%2FnopssAt3rt4RJ7BZkxyhl5SlRYOMW20lk5p3mfi8d0VC5xTjRXI3KDSbhF2f8hb8D0LMPhPG6L0IMfH4wkraM2TZEClDZRkx8RzrGUWonoPh2sd7j1rpNrFnsuyNlhesZmQx%2BUAh930iBFFmQIzapE%2BSS9Kvls4SuOC7rL3gbpE3Z9MmfTXiFg%2FwgDLhRId8B%2FMhQ47QwNw6xO8LUfM1djL3WPVPG1eKHI%2BKyOejDJbZVN8dbA2FjTqLF1PLWY9%2BURFuCJAzDuYGow5ONJCt5Vtx5awVCtZk86ypoXesxhhIzwpFv%2BAL%2B3h4GoUolUWd5XQiC%2FxdD85iB4V08JxLybvWPpMsdk%2FxS3qS%2FOynxxYSyTctydvje5CV22H9UI1nfimMDyyty0iCaGcJNdGKcAjvuXsNRMxgVLoMsW%2FhbxOQ%2BjVr0HPksvwo5lqzfnCa24jrddzCK2ys60m0FvuRQZHHOmB3wKvinQlvifpN95iPXSkliZPWFz6a5TeG4AASypuGWO%2Ffj6cX3d9gbTRqnRVEgw95w7sIoR%2FC7ODqhP4qRclgQsAJZIybOR70mF%2BrSm8CZZP6QIgr7WISdssEGeYR9u2Bec708n69%2Fzu5lAxu%2BBOQtLuw%2FKPfmSMMq8%2Bb0GOqUBU%2BiqKKb9ae42My%2BpLUhRqqy%2FtPTpB4mlBwG4JXwu%2F64mI%2FKd89moDSehJdWO7z5H2e1E74V93gfc3%2FpLKOsD8DC2I6MqjkMs2H%2F2UYAQb%2BfopdY45bjBURZOQJkcsOwR7RFNOIcC6Vcbvb7u5UeRU%2Fdnb2sC%2BQUtsbY7a1NyO29nlhlXNOVUiJwEBZ9PBqPl3VpUe4tA1YGgk2KebSIzumnFICyw&X-Amz-Signature=64af6d7883a5f9be51656f38277331eaf4fdc375d84c3cab2635e6db5a71be87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
