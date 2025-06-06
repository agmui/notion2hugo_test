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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEGGIYW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEzOuVTYFhL0T5AFAnDogmfEeOMiJBib4EYadjMrHwuAiEA4Xnt8oABpJPM6bdRQ5b2juOXFNgdyi9SqhhVhGb11VIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOEKNlPLBk0mdKHXWCrcA7K5UBmNfn9Fq5yqKICWkXidQ0XHeUMGBPWMeqZ%2FNAtkb3xZw481CSCJUcNaSjEDLesYqAFjyM%2FcQOynFwRyF9A%2Fzs2h8Hi6jPN%2FjXG1whyUsc17BrFxdgxANfc2Y1SJest2W6wzs4ZxP5Nw%2FXWqNMQdDy2VTJ31AdRJdL2x9dW7O4N5rTpc1vat135SLHMLrC1VAGLx2oFj4bbmrBFcob1Wk1SjTiEWrdRb5YOtBjYB3Lqw40MLJ2vfFMpBf29ZAJuwbkbVsaJhF2RMlGSwJ40YRscokg4WvoWTAZyUtpH1%2FuDStjw5G%2FGeumwhlqqw%2Fj9eWVCxYLsU6EbRr3mGEdTGYnjBq%2FfXRQVsm5C9cDbcpx4yZzcNuRmmLr53zlx2butk8n2xHvAIbUsZJ11FOKXhYLtX%2FoKZxtl9Vzf1n7dfdIHgjKgkk6bUr%2Bi2xX0lzQsHJa6vmXiogmuy5WFossZNCgegB%2FB8hPdi9F%2FajtfAp%2FGC7OM3BgxA1hEuiq8CFFjd6VaU3Bm77uSRqzDMJos8aBjEq6lAt2Uck8Br53YrXZRhj7esjLoC87o3sD%2BN4Qvr8KuVRdiJpziLYzL%2BhNXzutKGPUHCzd5dFMTfmn2a8a7JFwkhGWuEQOEjMKq9i8IGOqUBebjDReTCDP%2FYouVLH2CBP71%2FFlaB%2FIpupfAhOQUGlPXOD9TwavKb7nHeCyF9AbjJq9V2lNAYK7d6STodwZjrCCA%2Bz6pfzCnI%2BadVtciYtGBMf8%2FmbIafL6lOYs55iwAVGm09YzZcrjd7hom%2Bnyan0Fl33DI39CIJWhcRlo3eItvGybB%2F6qL7%2B8yW1geFYv4H4jaSb2RgnvO%2Bj8AKYCqTz0IX2UcK&X-Amz-Signature=ea665eb447bf1b4f2c8c46ae703180b5bc62cea67495302200bbcbd5b8783163&X-Amz-SignedHeaders=host&x-id=GetObject)

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
