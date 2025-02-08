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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4TQO2T%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD9NRdhO9LZY9Pe9ONXwtLmZMy1ez%2BLjeQtVA4Papif0AIhAMFyGyprUzXvTpxrfXRVyNIiMx4q7MjUjrGjBaO4YF%2BRKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAMLsc8JxK%2FF3GJqQq3AM08NPwnm4sbA6BmXu6Hxpep%2Bg6GZL6nvQGPPEx%2FH3ht1tHk8%2FjtnUEsElCKLW6bWBaRFTGdEdxON96w9YrBkyL6%2Bf57pRKidlWjWRR9zs%2FecUM2SMT%2F93zPjFcezoZHgXrS%2F45bZnV%2FDcJ7gy6GvhaKcIUoIZgeTwX0bikZK6HVyBHneY%2Fftf35JMQFe53KAhwO8l5bTJmIUyCn0qmp3Qc8ovPO%2Fpx7hah9MENWML9RyRlOpXY4PEAJTtLHeleuFEJpAB06ZhG7Nvsp4JIKlFQLby9AFDo67ZsEnbunqxQwukObcaVmlKG%2BcJ13EGbAnF4bX9T0jFQ7mTk8haObKA6p2mpyTab2XyALaqHVw%2B35ItWciSha17mBprdCO8R4sZD1z%2B97Np9vgSsfuCgRQ%2FF5ITg5vfMA4gZEWD71B5A7ben6KAZqVzwwtN1g7LbclvkcCkD5WGKj3t2ZIj7Ats5Vr9yCeyc72ShLUBaaUr5XmZTkCuZcolddCGxLDOhyBqa7fBWre5lvMGZ2fbyl0PzE%2F2iJFGnvtFt%2FXbbjRbPd4uWrYrHj0h%2BD8e1wHdZI47OWM18GE%2B1wIDOARyhPep1yL6tqZRTSABoc5aJO19twOJx8d%2Bo5%2FrcA3DOYTCxl5u9BjqkAV2I3QcwNOopbSRQGDMIVBDdUTU7o0hWwahrEw9mUiNCTyf%2Fy8nSYgLbGHDh0oPpJa25AjxG5eaYFwO3QhA%2FyVwRvlkJLMvOn3Q7643oB%2FGBR8iTgMrLFvp7IHkYY6fIT67q63Vg0r7TszApNXdVJzrhci7yR7nEjFhI%2F7O9cZwkrZ7vQg%2FVGpDC46%2BMX0Pvp5zN2NSK0YOqu3h6HhlExXvSEoyv&X-Amz-Signature=8eb3d95f3542e513e28da00cc274081e4de5dd2d7d04325edda09b7db00b0487&X-Amz-SignedHeaders=host&x-id=GetObject)

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
