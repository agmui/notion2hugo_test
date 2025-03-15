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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVXMYZWL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXsqd5E98MPW5nivZRS5wHDMmqjPwMiBqYKI5X6wUWtAIhAKkcy5skdcQWPL%2FIlm1mnUMIamDfjgJeL8e1KrMRxxVIKv8DCBMQABoMNjM3NDIzMTgzODA1IgxFAoGxEvzqJ2g27wEq3APoJD9dqb8xjSPYWtHo011BoqkVbra8zdh%2FWaF%2F%2BoINsgsKADcPgI%2FzdeljvMSis6FbepnX46iQvaRTdfjmWNEgXndd5i8w62oOni%2FUuFqn%2BeO0T3V4QNCX8ugw8OV%2FpY1TSc%2Fc%2Bo6mF7MICW0ZJUBAx7%2B7uHhjKdu%2Bqu3mdc531BpeVvzVHyXY7KbCbcEHHPPOfzFPBwHH6lgojczGiQg0GA2qrduvgcN8jUpYwvMWXnEN04UwlOzDbo%2BXSFHQ8C%2BwchYVcTbr%2Fef%2FPt8aFgMWGj5Htj6dRCUSzn1R1wmH0PPqriEZuDGiCQlqp0EsQ8gWen%2BP4N2nKBtpObVi6Sj55O0AxYktrhQubrcJ64JLLAqjkVk8IYa7UjZfsKxSzhsqakkRp%2FC3zkcQmQCXcPz89Qy%2F%2BHD6DARb4K%2B%2B497bbnIILu00UtdT%2Fj3uQd%2B0V%2Bj4F827trQ%2FuKqbB5%2FPein1BZNoLntAJP3208eTKhidf%2BqWjdVN4Yv6uO2usKdchLC%2FrdpX0%2Bly%2FTaYVAaKF59GC984NrZm7jnG7Y84gQO3LRgtqwTemXUO%2BIBUWrnYwh8g3O40W6vbkcr1huIihO%2F6P6D3ycXxeQuUx56ajfWn8R%2Fgz7i7nMqeX27DpjCJmdW%2BBjqkAUJlpwDLs9Sr9b0cnuYrzv18ygIJvJPH17Jpyy0PPjccHrJBjZ3wnzXYaEwhrTfY7CvdX%2FnzNMnE6UQG%2B9HfnAxC1YXXp6q9JzuorqgN1kfR%2FDT76lqXMFF715L8t4fTqD4nIG1B6jBsNY8hl8F0JbZXPSW3%2B0xyBYsijYYQ8MkcXYVn5WbpsqD2zEbfdDp0%2BDUL1QvajKUvi2L23nFRMoD2MI9m&X-Amz-Signature=07fd016f943d144120cfe8ce2e71317519fe30199ae3fe74395b0f36750cea5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
