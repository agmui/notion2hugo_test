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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPRD3FE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuQm1ymIlYJQhNMrXkBVkyYgVNIardjSPKgRIa1jJniAIgQodW%2F1D3YIwzXQsrIrIw050ONmfVa3MGbHmaPpJ8AmQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYDn9NUpIsrf6Qs%2FCrcA4nwRhvuQIlkrozjY9Re7%2FvakvR5ift9JnkntJyfi6Oqb%2FvyJhwfJAKcWIGfsoCSr9%2FZY6EcUEilWXu%2F2aoIJNTFKHwOFNS%2F1FEMgiYzhUSBiJaKRvhBWvoKApm40b9S0AHWnTs4SyuZ2%2Ft8QY3y7bx1d%2Fv1ykNDLBxToDn6SGOkXk0b2bI4om53QrzXJo0gJTxBaytYuM%2B0F2CaYbJGpMYd%2B9%2B43LF%2F4Prj5mwLbPj6jFEaAK1WH%2B7MbBVv%2BW0yrB0sfXAgNZn5bDNBoYaRw0meo2BMW7YY0I1XxXzhixDOxNEcC8l%2B25mvgk5OXryY7RNSGyYbG74uzV%2FY4LZ%2BUSZjH%2B56UFboP5Duhk6eM5omNlRmwqcLooXu4UufLNqtIOVQOMQ6QlTqxRAZ1ypWAqcHrQNda9YcLMls0qEQNFzC1Yte9rxVr%2B9KwoB8eU6D1Hiy1kHnf6YlnkTvQL5HQKX90SuRexng6GdnQQ5V4I0lROGSJLc8MiMfqnSrmI%2B0o8Y%2FfR5uSDc%2FNY0xDVIIS6Cxnd3kyiA6p5%2Bo8Je4eB%2FervzhZU%2BQCre9j6B7WqYok6XdMvOKtprHzFC5IXYOhzCVUEHu%2BBDZVh7Q73AG1%2BARyPe7T8CtOIEs4eHaMLmm6MEGOqUBf1WrXaNcG0Zkik0QWDKB2XRUZgPeFB%2BY1J51uktzrDEgYY%2Fc0coPIaCL6cwtoH9xu5%2FroCIemu4Nk1gQtnkNo3apd0Ai92oeKgJD3QGnzRuHdrIzRT4krrwCIRwvCv5jcHV2GE%2B4dWvsmTls7GzLzdk5sox0H7tjROEYNpYnF04ZYpONHR7Z%2Bno6r9nr2XbKMGI9QSciD%2FMslYqrit7x8gpCfp2a&X-Amz-Signature=800461553c307ac37f62bd356f4609dff57f6c8096d6d8f3293c980112208d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
