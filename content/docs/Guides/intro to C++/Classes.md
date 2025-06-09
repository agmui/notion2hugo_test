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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCDZT7L%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcfF9BPWYuYEVwFCWMJYG7RNUIv443JQo5nx9KYdUsDAiEAnop0yx5k84g4woHTlSxPbwHb2akdwzYM3WnK7VTNVpYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwoNYYxROdltHYCMyrcA%2Bh4lqo%2FZw7Msur5qNRoXjnSBL%2FbxE%2BXj2YkNgJnwyl%2FxnwcHXauyj7pGKkY9zUE9KRV%2F1ycSKIuAhcGljP2AlMrzTJ6fMeQixvDRCMbqQQ%2BhJqDCDlKI6F1qp6I%2BCidPLc3KVwoeIv1SfZKNAoMbInxi07aSgXdYnq1jfJfpUbrJ2sXwdQTkSpnvhpSTLfundhNLRQnC%2FPxL4bnHGyGufd0sLdAvRsXIt0cHgIXX4U2yuBg3JljVrNgn%2FPkNcyenGlXBCq0JKoH6vTXt5lVsM6VjY4KPU%2Fdb1xQx3DhZ7XdLyw4S%2Fz53Wu3JWDowZc5pnCdWcyNfDUtVdRBQO%2BFsBs5vaqIi8fN9Lp4xvnNRkR7FTcPtHILueCuNz4IwQliXU59bKh3f%2B%2BjDznCV15A13ISSLi4Z9IAS12Piw5y97v%2FZ35wckAbGh%2Fk4WdiNVVSr66qKNHu90Mr8oIlfq1HrjGJq4l62fIhjJCRf9xYl2owA9kLO5drdFY1pbtJL%2Bbm9p5pYtEuOzlN79aBAn2ZVkK6OIyPT2XNyRSF0YDJHsWIZohBE0DSW6jZDUXihb%2Buad7pwUKpU3t5B%2Fn3AjYknk3G3T9XWTSguewPhzcRPc53vuCxdpSDqSuRRsvvMOzKnMIGOqUBeV%2BGoH8JiYtZ02NUM3imQ7h5WW1zMKZc%2BwvV%2FtGskPxEMnVfiPR1DJJ75bNez2PtU4nDy%2Bo9NWIc%2Bqc6eUdDUcSMYVt3md0FdG1Gn1p48FJ0IuVWwP2vW%2BhyLFOVFb0tbdiEowtPZkrG5QxRFqzGHpwDd6fIsh4oRFzCD%2F8EfKYUG2VW3Upi0tItq8kkHBGRrRi7%2Fw%2F0VklqnPLX2aPviogqOLXH&X-Amz-Signature=8e37e6fa845b44eeb89f557dd488afc974a273a76d31db2c92219607c76a5b30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
