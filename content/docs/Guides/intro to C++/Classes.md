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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKPFYOR%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5yDpwgxP3B8Gczk4hMU49NcAezVn0BqhwGD2Blt9%2FQIhAJRY7vjD471uckniRXmAB0M1732gyyOYTMuPDWVEZUITKv8DCHcQABoMNjM3NDIzMTgzODA1IgxvrSBhKogHIWCSI%2Fsq3APZOQ3w4G41%2B0S%2BDgERWgkuftIxBrAvKByW9ENkJtE3BUte2RpxNrojz%2F1mLpPi9XIuJTtxEznIQ3w25AM6sqyjFdqFurZCeU2qI4jUXtqg5SQYOWGX%2Fz%2B6xovUOFTWDPOlsMRlnAsOQqkSxpSbQFj6pw41K%2BGvRaq9TlP3sgND35b0ng4hmdPmyio4v4kRMqTvzlmr2vE%2FEFepcQUtHbsY%2Fq8mwJdilGHjZ6eRYUsCkxD6VYTvyrqAPqRGCDGC83y0LSr%2FCg%2FhJdGMvTZFT7ylfginHYn0jOzCXtbOwUg%2BdiwUsuumSPgW%2FZqb7U3R30%2BrrECpsJGZr1cpB4wYH%2FUROspXruaorw%2FAX4HTe8F3qtIl17qTcbluBRz4DO5%2FISDWp1pSkHeICXHMNsLG%2F%2FoOWH5CQ7hH1Gn5PcoNeWU6P%2Ba0DPZhzH0mFopgUY6ow5ExUnJBGzeWw1mT%2BQzHliJNRRJ%2B6Bnkt35ezoWIvh7RHg959XXgYlfulcw6JKYMW6sFQyqzVssmBS8Ck%2F2I%2BsKNqwFyMlfinV8dEdpRiGUHeoqqICd6j0bJRvrviOriWk4GbJnboGt%2FqyWSMIVgoHlaiTWbnVkI1wormyolkIeX9gxKAbDtvn1CpJtSuzDR097TBjqkAdiHsquPuKcrx14ad5d8euanB9Wk%2Bx80%2Bo7kacpxYw%2BWOj3NFfvvmHFr4s2KxE0ep0ot4SBxA1gS1Su4EZdnKgmKcudlpXZMYOHVuEm14oJ%2BpAe492c2NCwnu9AFpCjzfmZdO1XFRlExwAehj8qQKyUgcFJupjjRXlOJo8AXcLYAdbbHA15L7diY6etI2sXVQZhurAMM58NH4zGGULOr%2BvQFG8CG&X-Amz-Signature=cf8d4575b19bd6d6954bb81d84305364d0de012ef83237e33a12066ff4d86727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
