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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WICIDEKC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDvlaLiEi5IEaYS2laOJQlGJOlYleDtlJ6JmufVgTmLdQIhAJTs71g%2FlOh4PpO0Lhf9gNJm%2BHfohfqUvkhsACYgqGpjKv8DCC0QABoMNjM3NDIzMTgzODA1IgxC0uR24P9F6KPwHPYq3AOpki3FCSmrFxyZc0BCfbGl7J4X63E2OeWcEsTAga63MRxQsmQFjXLWpAaXFlPoFqnsS6HPL1EK4WzuI3EtKHe5k0lW48Xdc4n6AI8ExDKfbEY1s7dn3CZ8sOXKhUKF2uH4wwbPDupaLQmQMVZhi0bGkDTNcWf9%2BGK%2BGEyD4G8hEEGp2s0y5XLaqsaMEBRqZ4fgkcNkN7BLGXlscKX5X9zTYX%2FjF7U6rbThF1CYlRo2xAIwHkRCTKsnf9XDKIDzI4bA%2B0vrLb9V8YxJnOWxP0Ba8Xl7TeS%2FS%2FQGnitduRGLbrmoSWW6oO4LIueR1KSlwLOavGkatHKzALB3xVZtruxMRSdfclXYP81iMMIJPuIRbTu1d1g0s5qb4luAGrBDvng9GyS7q7SGn2NNUH5ikd3MwvNIn4DH7E7oB%2FsolXEGih%2BZ4PDN8k1TeqT7pLd71icWyGxjnk4XiTTp2MWe%2BFi9EarfyQ22ClnyI20ZxyE8ofD%2F%2FbPDOhSOjfid%2BYEIF56wXM89wghQU0VDdfYJLIpZ6iTnyoi13dlAp%2BatPns0OFTOo%2FP8SjXizRHz3gakKQYGPoumr7djY0i%2FnQ4xcM29dHTb3YB7fteXF5GBQs0YeWItDLoL%2BcAk76lMfTD0ourCBjqkAXR1PJnl%2BNIAkIKbSJ7lydU76jdLrjPTMnDWsxQjX2NEKcE2EvdanRNZ%2FQgTS6EZNNA4CNz%2BautKhdgxB3VkCg65aQXfucoyk0Koaj5dKzKUgtL5aaH7gB6fhhhtu%2BCl3TPb3K%2FuWNWSZZEbw5WybJBEZpeE9ocYnAeCEC8HZvys41FPB2O4AECZOqm%2BWDVHxUPQ1wROCQbtUlXWu691AQJTt7zh&X-Amz-Signature=c409f6b7bd716c3f79f912f4b9daeabcd232203e5b9f975db7f7057c0bb26f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
