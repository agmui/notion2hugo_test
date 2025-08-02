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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI26TTLT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BKIMvhFPQY8pkQM6FE8%2FnlHVcP8ZIhMakK4q3tQK8pgIgD7IaB7gYm32k796ZcdMyatB2llwtg55Aeu%2F6XjPq7dsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDJx0vH6oi0hS1VeULircA6ZVpwtRzoT8G60uSczGn0BRwrq9sF4lVoWRYJQ%2FIByNKqLFAhPW%2FAygcUbY6%2Fqf%2B4co9nB8jF2K3LQeK75JH6xQkrGOfVTEQJ0lbC8ZbtqipI2oYd0LDR2qJBU2wkQplYocutiJ018O2Xb4m4VHSgE7BuVHNriGxgn8m3t5r%2FGeYOsfd9mxKmX%2BvlzCV7xFvOygnjKgahj%2BEjRvHYLy7iPCR2T5lB1fM1Mu2cKE5KHnVuQgGzOzPG7EzS2R9FPAW9PGAAlpunXpkGGHbv0uxllVUHmWZHbx%2FfOCYV35%2Fs9NEqOP1gokcRBCJSJpymiZnSWTevmifNzVoBIVESLIuVnpO7IUjxZ8oHumHDFeHMX4Gc68wdB5zQlR7Q0XcKCjsChMWzwyzqXc1l89QRMCroiLpXvQkFKHXgKg%2BJyiwXCRwvPunoxmxP8DglMlh2e9PeRjQ%2FIbN9gMvSpmlIeELiTgItWheQMxZOv4Hr5a3mg%2Be4w8Rmwj3aeMhTvOVDB%2FVjkh2tX3QLCymPWcsONK3zlgUpcBmsEJkd9%2BvpLS42zxeIan2KWZRRkKzcGZkOeWwDVVifzo1AaA4UTv2CPhzTNh10kSppxMeuPJKcXgxTTguMFzTdVz8bbKIfb1MM%2BAusQGOqUBb2IUkCCwBgeSg%2FzMzbw0Yz2i1Z3JteoPJY1lYv2lcIodkj2HtA4JiXi6yvuLtQnKbLs%2By%2FmHHnv7%2FOtD3MujtB71ovlgQPw41FSc%2FvULNYG0l7tvxuDVRrIG1Dv3p%2BMQsdwTWrKZUAxSwByIkTyrs7MlnPEhZ4QQyjJddlSnI66bd5FcRBEFJIbdknvR8ivHE%2F1%2BNN1LHil3HT1brEjtqSW5hPxA&X-Amz-Signature=e7c609b8940fba223a11870c84eb7f29cdb7b73bcb940975d15e1365d3c7b155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
