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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUKXYJL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5rbPTjwZmtojP1qLG3QUk0VjpX8rDmp%2F1CyzEN8cXLgIhANlDTgIngIDofnHrrWAWdKWnKeTHXeGiw3mir%2B%2BD1DGGKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx051l23pyLk9W4cs0q3AORBZEIRjm94PCUNp0JqionYcNs895l9VHgjWABrSzAn1ZiIbuEOUJ4V%2BC2aAf2E2zWeo9Xmhayb5tDXengTkbox0O7gOD4WRKukDGIgNq0ZVo1gmtxxXnjLucH4%2Fvfc%2BlZ4Tfknrh1LASU8cQGnc7OZhVXKohT5GuEwoAsJoVrkGP9X52kNtIqJzVtG195xGaKXegRY6V0lw%2BqozmvnF7mZWHFl2Hyj6Hyg1Qz8SlEA4eaaWXElPd%2FZp2NPtst7ZrJHoj9Td%2F6oMFuvha4IBalDB6PRMi40PAUrBc9lcfFrNiGH7g1L3QZhaNYUzbKsSPUA%2FBK3FWszTKgrUDLOeez4HyZL%2FfkfylfVvrI61cPdu9H3G279GgztWX1GYAazs4zTRZdqdXfCFqfWDJvtrWSRASj43Z%2FuVrqZFCF8g%2FgoxsOa9n2TEZt08XHEC5FRA5o%2FNqcwjX8MC%2BEAeNeP8TDEwSOuCRllGXWXY1U7Dpj4keZs2VGut5M05oWYICkgE9DYs9FFtlno65DnlQN67TXHVrBFMIIPmD%2B4oI4GjOpwRdP8jtAy1vEwM3QV4aPwoU%2BdxmZVi7Y1a%2B3HRfEOPZ19IH77HFT6MIuhw5mbMkDSipXnyZTf0qMMpMInjC37s2%2BBjqkAROC3vAZWVuzGA8IfpCMQFr2c66NLElfCTQP2GUANqXrbua3By8gGy%2BOp99cPFFEPXaWv1os1tQ4o%2FMUo8wOlfKKAeg2grPRyu6ybwAT1bw5V8DO7Hpnj%2FadhdY%2BqlNVLjpyTQzmngXmBJcSsl1G3BbAl6TbOh1qMUkBfOg%2Bs728wBeurpPIaAeKvsTAd7%2B7TKBbednrqKwcgytDbEl%2F3sljrrCJ&X-Amz-Signature=2e767e06958346653ee4439ce9779fe1af5d415a0de26e765da315bf937abcd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
