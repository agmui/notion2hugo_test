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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLIDWVO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGY2r9TLDF6YtcJGBkom2rfj6eGsUGCJ89q0vcZSbR8XAiA6bGZsXDxZGx6v47MsLMrBFEXD86VpYjpMcIICXG%2F5oiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJeB9kAAN0aBJI3zcKtwDoBxHWRZ1rhrlEIAZ%2ByxofMAi9V%2BnQe%2Fm%2BmnG3FA2%2BYylIYB9WohwA7Ug1Ctro0W9Vgn6vTIXU78dP%2FvvlfemwF5%2Ff30%2Fh9h44HqFdLNj9MAkp7J%2FBaDeukjK98at2z8Fuc2iXsEu7TxHjrWej8JJ2yFA4VvTiwDxcgNKVrMp7FNicFKm5noriRhsT39yJRX3jBDuD7wIQKpbiBuA07xSenwTAFvOle20e%2BpKmJUrfxqyFhUHw0lLkf4%2B7Z5QW9D1VkzG%2BxnvTFjlw1iAH6acAMgbtaa0i1IXTy0I4N2diHK5xN2tuP1i3RDNMrGGIZ0Rgdq6rPF3OikPgaU2zEdKrzvvrAHtFEOAHHp1g3COuysGOsEuwoO%2BKlbBysqyHXtUD7VpUVJtH9MDS8uxJdZTe1DqKyxb%2B%2BFkSByrWmTUnm13bfe19oOmyB0EWJQBFUtRAbuRQGsi5WjDTZBtQwM4QlAgCzp8sJyvJkGAsyvmZFyLcwl89k0VoabhaypseE891wuNbjb4bm2Q6%2Fyl4B6brV%2FFYagHE8M0kA6HsXSuJ8JZfFppjBLw%2FCqac0p%2BJBDUD%2BqtNjPepFSBVDrtOHZCH%2BNLUqKIyR2iVfbQxOB1vnnDaDGDm4WAzZrGZ40wqKGkwAY6pgFyL%2BkMHZSa4OpXvU2sEn0cBXTIYSYkgAVrhpxJ2%2FBzZ%2FkKYawbiXPBOyRSClS81RRPP9X8bKbxpwJKmx5CLfP0st1eNk9DNLs9KXZCoY9ygeam8G855dkl1NtgRuIUOTnYtwyJgP%2F%2FlNm51pC69jbWYHUpjYMb%2FBKRqXP2fxYAOLMJJ1x53JayRPcvCmprdFZ9fxUfbRwDocc2vPvsa7f0z7rHTA8e&X-Amz-Signature=86251d692e940d35ae7d080f11f6313b5949cdfc9ce0b100326c6262dfafb3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
