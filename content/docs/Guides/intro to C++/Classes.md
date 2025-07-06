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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YETPSMAJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCju44UAAfD7jJnURIfBasXblKDS%2F0fFKgNck2mpGSHZwIgYytf2mt7pTN9gSu3WQBmCZdG8DkkXowrIDNNYPlCIksq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDD6oivNc1RFCsIbntCrcA%2FtpHVcpN9fhF8xtMXrNwPM3KluITZ6h%2Bh4SXic311qMVzT60dG6d4geIyrclrv0jXs9Ut0KTtwVJ5z71ukWMYXkLhp1ymlZ32DM%2F5I7IgUDFsVDL1O97msjBS9WI3qjVtX6kQMs7sHO6TUeiPnmSdCnVn6aABRdjkTfrtRxb7vcLu4EDerJwRKPTc3zQU26qmi8fkwGK4ITBGHrIBondyfiQsfPSJtP4iAiurgVMnBvy%2Bh6mkwDeXVAg1JCMDTTRphg8WqPrKjBYA7okXxZn2yN98chaKOqX5Ln8AHCf998Oo2smV2lz67nqg0mIDA25wHTXqOb8czglZtW1%2F%2FhrDTty3iO7cbPlJZgC9lkIG3FIuBE8%2FDBg1ZgA9bA%2BBz3LTVArBG%2BjDeUpVOYnqNWJOz7P8az6M1kbj0khXetqAZTU%2BCPrqeLuv4EyyISJWlzsy4OIbx2NfvQJUCwzQXMnz%2FZFKiC3wELsa48U1VuYdRH%2B1Kdbn%2FNGizeuruQjUl8qxfU0W7q%2F7NFvipj%2FcQBGqgkaXSeqU1uJnWAtVnkAF8ZyLYDQHUKUrBq24Dj5HS7PF%2BKPISWCW%2Bh8PbtRA6hx%2F2e85FNhK07waoizuS8TdwpPq5WMKMkZEKX5sltMI73qsMGOqUBFtcgtCEJpKbZkAyxRgJKrzrwavngwJa15S9ZZcThTBXBMVIko6QA%2FpU5CCppBio1E5zXPAImUqyG4qcMmS71%2FpX3May0%2FALFSi2eX5CYlPO%2BZox4SFApVBCnmPuje7VGr55ooaXEzxrdKUyTDZWPBbqbGIFPtLmc5PA3en%2FBY%2FUVuZva1%2BgTvfYurOTiGbzpq9FNHAcZucZJRZ7Xh2Flt4GhE1RI&X-Amz-Signature=5bf125081c7c71cc15527f93217559ece370ba62067fa16a6327f8001699fdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
