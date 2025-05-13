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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YURXMDGR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCjsU%2FVm3UCaMWvPnMG4ckwCQEO1BI0UitPqSi%2FpuzEiAIhANUDsiIJxZQu1mwj9ChwOhVpObJ1sWeRTDGZSYrM1I8jKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXc4LUeQyEy2pAm1kq3APGL8zn66BSLzAq%2FIZRpos2aNbg3q6QZ060Ipilzm3g6P5ShYhcmbq5JSrdUSt994A4yP8P0MBpqkLvnL4NRHCgtmNFq%2Fy2mUb9BaHMcSO7%2B5NEZFgUH8FwwcVqPJGyvfN58TP5%2FJWOzh1%2FOB8FPfQKuiVb7aLQ%2FrvuYFO8XjlOaRAHHQDlg1UaCy%2BTQF5FXZHJ5OhGtaFnyPb5AJ2n6G%2BVqgln8nTlWULUhziEc6LPY0tSYpZvhjoOyPyB%2F3cMnaZOpKopOFknYs%2FJyJ9ZoV78geugc4UqgvebnWUziDDJfZVuXxgMSQMlVG1tcQx3ytSJW1dZHZI%2BTF%2BjVicOGu4OC17ynoA7%2FNWOv1kz01ZuqWBPY324zNlcVpTT4f5XLKe2BhVVNz2BzjCd%2BoPmpnByVern3amGB9%2F2pwqSoJgDvqOlQV1CXKHmqlvgf43w8gWqmuVRV4sklrwk31sDoO2oiS%2FXMLHKNMBSky6lEwmcQqJ%2BYi0nlq%2FF5%2FVRzh7De5T2fUewWzZUUNemMYPU3Vu8iqQL9qHgB79LAtMWN%2Fy9hoTVeM6qe9jo6NEtiYlETBCoHv7qZz1XOT0An%2BIWd7jnnw4AQegwjFkxmP7PUaQ4EIrvafikTNjqVkuB6TCU3I3BBjqkAUJuI%2FmJifyEsI7mrgDmDNgSXis6FAMdTmu%2FRVuc1Bqa8NXOosAYQCUyRb%2Fq0PW%2Bunt8Klog6pKA%2BWoSZHwdJ1XFA91pZbSpjzLiisNJJOluPdwu3eZXy5Ogero4yJ3b6tjZ4S9xyr%2FRybu5vYMzj4x2hFT4zVgR0Rvz9NXY8YBzXmTL6ouPuwlJEGSWVFxxUsxsV3yqa6hTfLL6ABT79kPfo%2Fir&X-Amz-Signature=7df26d7bdfe09daffe15f85da8c440b43aece9bad5c904c3f552475c68a0626c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
