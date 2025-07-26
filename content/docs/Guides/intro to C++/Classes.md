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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ727TKX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC6CK1vhaZ5B%2FPCQIvrPiJdOs4ibvzyT8v2IP14C0eHGwIhAOEC4kGzFWd2aJtE673agdBFEJhloQpB0c1OtILVlZq5Kv8DCFMQABoMNjM3NDIzMTgzODA1Igw9U2H3%2BUnzzrI%2F5k0q3AN9qHud3Scr2r0rOGIegQqnnK5wcRyu1rdnta2sWZ5wZySKTyaNyq1dyKe%2FjZ2MvcW%2Bmsv19cN5TctFQJDEwHuFZASeUF8CK0xQrVNXSWLH1IgOtva0To6DS4L7nkAShGSRYzIrJHJVNL4y3mkuSh2WMx69%2Br0JrX4vyuhbvmih1huV5o5ea1Eilsls9Pp5yHWUVejlIbCJuAUskP82yqO5TQ0bFw198AsIZlVUDCkZCf9kxoPtmBzC6doQTRjT4iFmiZX9vxCU%2BcVTZ3eEMeTF%2Fg%2Biwaqs8Gy0DI8MmqW4ZPzB5Kxk5a7lpvxdmbFGd71Cp9No4T9I5T%2F849tj%2By9OE6yuYsmnygOblcbHz5Qre3Y5DZNiZ4AzOc7nTaBc%2BLz%2FPO4aW8q5j5Km19Z0V%2FNblPXRQtHAc1KFdhY53CoKK%2B9EYolUHzzGjGlojQ%2B90tS%2Fb2XZk8%2FBWjdfKj5aPdwc2XGbhXjEePyaMlh4UkUlzb64L%2FNRd9K6kIdulc3hRWA27kqQWmH0sEahXxp3OrK%2BFuRXWkVXgVEEMF9ccYtwMK%2FdVCkoIx0hmEPYpMyMYd1t%2FFYee3oQSWF0251IvVNMZzupIzDg7I%2BLmO%2FuZsGYi3y2pH4cxPEW2UsTwjD%2B9JDEBjqkASNNdKACb3Mnlvsq%2Flmz6MsxdGPMt2L%2BXy9B8OuCwab3X8UGxeA8HK%2Fy9STLkzs%2FsqWHXP5ed8SfuCDMJCxAkNmzMnuTubHmI6BYr2qBIipkW2LrBUgMKSJa7fbxfY4oBOFJvXiCoUU0EgdetOmt7apWk%2B3JGeDKrBbL9rtfjgjHpbJV3sCR%2FFu3anhxLurXsyNSr9Wum%2Bwtv8CYkR5iLOuxfUs%2B&X-Amz-Signature=e246499406a812e4da845e1935a469009a5a70121999ebeff9a5043a4ccb2d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
