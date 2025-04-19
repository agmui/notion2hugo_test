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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHG5PJTT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCizxXWFI5nDiWVVSEb2o%2FA2dYUxT4FUgN%2Bwdqc3Oj%2FwIgJic2YOxcuHr%2FaX146PRYVtmpRq6TmXVcVNf8TEM3UjQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7EoVof8uZWk4qh5yrcA6Q2GjD%2Bc%2FKo2i%2FV5VikinyDH8sKtouW7K5z2OeNR4lilClB4WDjtsA0UmjvQPu0pTq86v1WhdK9ayAeMEgvN3Bp5SB5YLn87kw9WRzKdC8tafKo%2FlYhpuYV0X3I8Y%2FOUXHKqikjQMppShOUVGi0ymkYXnevSGoPwVQzozJDC2nOggm5NNMzqg4MVFYWLGATYp8Pe6zG8UMk0LLWlMEhqWwxJyksiEcgTfwX1qluN%2Bck%2BhE4KPYSq6RAM1vgfgCA8veMbQ0vToRcN0qqtG8lFRXm9vGWEMBmtdN0m2RcrmHR6vHLkPaUehtcRJUZCJtt6jmbwrBJxKRTVr6cFL29s7o%2BpniUiawR5gR7FP0UkA167iltYvZRZxIzVVhtCoqH%2BWozYXajXhWdONCypQb1a5j%2BJ6yfaCtLdkAMeA9yBy0RDGZ6D3X8eD0qhTu5itgWDnHHLKDTr%2B4QqIXiSqRrqyWSXwFYDvg4oOEL0SCYq49Yh5%2FGN10OO8GB08baUnOYJrY135hbEyUrfCDNi9oBabyvuW8gyfINN%2BXjOdfHP5SLc2%2Fu45sk7MxlHYST3EGOjlgqzvwxq8Dm1QhkfH%2Fvi5aYxPJ2ck54LoP8vFeqg7HGReROfwbgHulSESAhMPz7jMAGOqUBnMOuMsSpmL7wgfVCSs8YtIVG5Kx1ZyjsfyWxos4ILaNT3kmj6qV81avQaZIrrLqO1iRT5QwPH2QR9cU1ci%2FXBHNRDddlaHOzZJJt3Glc8%2Fn3er0xmuMGLbGPevvUrlfxs%2BP0HOgN6BUrAh%2FGOTKTRK7JMHP4bJpOBYslA%2Ft6BbxO2BeZPbZaxZZBwArjJAw1IQ2WzWLxsZQF1Iw%2FjmnV7JLl6bRM&X-Amz-Signature=a3c748bf208864226161fe0ffd91ba98ae50417fb2be013644c2fbc52f286d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
