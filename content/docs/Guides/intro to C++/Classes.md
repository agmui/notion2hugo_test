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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFA3TGYS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICyaIgvpjE1aWFARTaEwMmxpcfmehBbakv9hEVhp9BxHAiEAm%2Fi3CziMwoPfzPWFF1pr8So8kie5CUDC7M3gGduuMOgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITQY7J4VkUwmofLDSrcAz4HVy6x0x1YO251xUXzxZWXOC5uM7jQVmdHOv%2BdcnA%2BNg7hI5Kc8cDfuwURwAy%2BbTTuWrDPzlrxhs5INl6Mn5F7BE%2BhcHNWEAt5Jw%2B%2F4M5yac8chsfnqA3thK2niaNriO2XrkfbV5yw8TJpjbrzkWeek7B9mFyNPlFqAtWq%2Bdi0bNCJ%2BJrY4CEawvF3p3QJ%2F7tAj%2Btqy6K5V8nTAnKphy31Q3pRAlEs4RNmrPsvyvt0g4DeMjbe37QV6dj5WI0YoxKbmfOL4PDqs5Zl25V8c4gBRPzojGK4dQ%2FqfbfkQZPnIm2wb4UTkpuJI6BURx02kWBAyeeUe1qYVtm6SRpSas2RnSSOrvYg54vRcinmSFZSHRqB6HxWcRyT2%2Bl%2BGQKbdsvjfy4W7T%2BulR4vbIA2lc%2FCXwTxZkxdLjSh1mfOYWRoLlJhm594005C%2FVaVkFtBLHMNKMvNUTjkuWFUO8L%2FHBa3c00zFegIZqZLj8ZCSg7guW%2Fc%2F9CJwzU%2B74Q0TmGxrjJp7pyt%2F0J60mCTkbGeu5tKOBpB0MmIeUE4336wOOo13IBB63kFoPFnHcStKWVHaBPhgIKUaBsFV6XHX%2BsQUb3Bqh9pJBnbcDYwPnhc%2BPqm9Q2Q1d45ZegXPFesMI%2F2jr4GOqUByhkyUIfq08OQCtwQ5GP8nX1i6fFFfVHMSPE%2FYAYWzLP4s%2BmRL0tvcOXqVbA0zcfH0%2F%2BOB2kDgf6s3ZeAew5TUEAqaNWPaLaOmwVsF%2BTttVKbutcH%2BdnNR1%2BUjRzgSR%2BIHXBishzDCzgKHEUqtdQE9BmPPrLx2QNJqUILq0iPYnpxr57VPF62Ed9qHyaN0llsO3cKRXgUxb9AXJdh2b5fr40yxYe6&X-Amz-Signature=adaf6bb738dcdbe0e0eae1e97e90374cfc2f04d1ab32dd32aa872238366c7af5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
