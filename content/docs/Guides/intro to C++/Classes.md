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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXJWFC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxhBKtdJNRjJa0CYtHTJzzedgYu5UNo%2Fg179f3cnSgYAIgJ2mXk0rd3rnPxqJbRhnPpg1hsHNgFQR2%2FKqImZ3LW60qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnfq4EYWEmcVeEZSrcAyDRwKz5bHHYmMW%2BLr786ct%2FTGoMLaujEKcFSWbg30FeRA8q2Sg03zhOEtnVqFdHUyUHZtvh9z4D798Id0TaK0z4%2FOFTgBGTplxOtx6slUOkjpzdaXae6AJuTyTJ14b6XyLe6b0fO0olxtP%2F9rZZSXU4UnL1XduFfqiWUoNeV3ScARXltSolRci3DltFKltCTesHWSP2S15Lu4xkEJaqBASilYqzY1nwMwDT2wGqoe1S913Dmtb00h6qvMiH%2FkPzyTjvVjnZ679FpoC8%2FF1SK%2Fom15PuvyMsXHSR63PAlHhasMyhEo3p8qCiQEkO2h0rO%2BHDYUlIped6p32tgZ13oOFWkIJCfEj4n4XQb3c33V0XuNM3xhMtsbtq3IIU7CiEAyHPD9Tlcx0LWpE3bLzMa%2BO9RMk6nVBEL6P5BrnLwzF9fl4HuDyC8slcDnBjZUT3MlGBRMeAggJBV5EUpWdmunNKYpVjOwClx4fWPNCRzg4t2l4oYE%2Bmno266Gr%2F0hEHjQZJwQ5fDyuIyOLP%2FDNUAARqfZIrrksiXvJ5rcDkse7SZs1cUMSJrx%2B%2Fqs6LEv36DNCKQJNAFtd%2BVAl%2FOuz%2FLd8Jc7uqorh29DpsXygiJX8AnLNDaXSBJ9RRomfeMMjIzcAGOqUBOq2xbezLK0Yw6bla6RpgJksFrcYuUV1lA%2FD8KX%2FQ0eE%2B%2FdgsBhexgoLDOSMQnfYU2f69rxYXnKnBq%2FbWIxUXb%2Ff1V3c1goVC3Y01OhgnwgoBJZ3s2FrQg4X8uQ2Wu65PJgLt3DoRj3MZMf9eOM9%2FeRJAx0u4M73jbCVvMfXKH9YVDZsJgvyawXKsOWJBycRuF2L7NEpAg6GPVvVsNeTRc7z%2F2orF&X-Amz-Signature=6ab1afb5dbdd2a0f8c4fa58eba09303c92cf1bea176206db6ca68385805f942a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
