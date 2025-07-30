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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ILF5C6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTNOGIPOosvEaxHVc2BB2POwNpe7BW%2F6nWV8OJ%2B2fXQIhAIAcRlUHlkQPQaIAxqITiuybeK4sivTXU2AC7ACq1HPUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvi%2Bod8Vp5h%2BOWGIsq3APlPKHU3emC850CsmxYMSXfyiy%2BBahPNgVHSo7w0Mn6t0Gz2Pana3Wcq5JT%2Bxam3Kbv0iZZ97sRnK2tRlnWXM4xjXzyDeH69DJtBjPm1knlcEiwQQUiI6gkojIyhnO7YBHELqziBTWVGqk4P58kf0SYSJii9TkmlqLQJMJc7eZHSHxYbbIlcaJWuZePuFgcdZ2knFbbVEYK3d8rMtrjFzxjistjGpBDInLCXxynY22kBGmNpK39jLFaLdiJ63Dh4NPOkzXV%2BfaODIaOOr7wJ%2FtrZQGAIarVE8Aj7hg2XFUr7k%2BL4VWzGB9on5yvHvgrYCOEr0M4ld1BfIZw3oTtBqEp%2FfmoKU45cTqpb%2BSvudoVRiUNPI8ZYK0I79%2FmwfShzdOKaonyW1sUOPmV88ly6B5wUcg1dRVBWV3QveMLsryCgql4zCL83Myxx8jvvwXcBF7zHOBLdDjuADU9hkIc9Fc%2FDtu619W9Fj7cOtAyeEZ4mwprSZHiMy9tB4Wp8FBDMhBU%2BUjxb4F0k5G%2F%2FIhK0klUZKUvNz6sKrOmRaSzuWJszUSxeifjCKZ91A%2FuPnKCUdqmbA4FqK6hrUH%2FQPgqX5Kjl2vaLjKY3pEScF964IaN4IRiVZ%2BMZSwm8rTKCDDeiKnEBjqkAUpaQA7zti6QuxxcqA48nrzxQYBWc0OjbxeMtBS0fDBCzoxdI%2B3PAlNll4gR1%2BX%2Fysq5Yp9ekvD60LGxgIeopldXYT7PIAWlgerAmUiTkF5M3OuIhUPQg1MTzYFv2rv0AmP%2Be6pRU41EOkESVqqbYs9DgRLwjhY97gdozOI%2B0LJh4nGaUR1VCYxNPC%2B2eylbSg89TG2GiXWQB2ExO8f3RnaxvO66&X-Amz-Signature=92db300be0bd9d67e99f80ed32336517f916f6e58247d0f91fe66aad13ac95ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
