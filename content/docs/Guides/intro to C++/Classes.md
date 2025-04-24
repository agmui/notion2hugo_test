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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPB52O5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG0hJFqKw8AhJR3FFjz8z3GPuDH7Hc6jZEke2t6VVt%2FuAiBvwS%2FPSOCGVbLW3t6AGZmh20v9p82jZac8ThAZ35XQqyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMynWl0SXIUwTsTurcKtwDgwOC8D%2FZTMsnBqS6eo9h7PcvIwVu5iW1NtNhRiXC2Hc1afkhfZSMpVdUGK2ef7hXNknCZQ64wemTuolx4uCnc3DyDuzuqGtQGERODSe3clPeUVXxUVjAy4bO2Bh5i9lBjdoCb%2Fw7bQH1W5g3F0NDK%2F9OyrnwiqN44%2BUPJdig%2Bo2zg5D5SnyAbejMw%2Bkdc34TOFrKY%2BEShQrMUszhhtopalwx4YPtmO0xR1Mbd0Qw%2FJNBlDBlk1gUkxmpkhtzHqrpUfJUco6lmEXHPdHbam0BSMCcA%2FpCysA7gGDMLzQM99vhsysDVW6wzZBibJwJZdRyk5chmYhNNP3UnxH9EF1ztvfeJFHikRIdRiHLueSgH%2BCKhG3J0dX9RthinTgd3xR%2Byuq1ZKEXh8gD7TNwN8En9Bvp%2BY7I06P3qYA%2FUZXc%2FPs655MPbNjTl57zLS%2FjuNtLFqt8WOwHLX3clRDPQddUNRrx4wVWswuRBjnxHKmv3Jm4sLFUoR4WJWL%2FyAdZIuVnPNxT5dWQxS%2BZpBeec8ZUcU%2Bk14kulNN9rANAtcT%2BBfsifC2%2BgqRTu2DW8iK9k4sQIPZlnVTEzXCnxczBrdk8n%2BbbSmchjVATJJgdyktM7kCTk5fXIbfAnsZCYBEwrc%2BnwAY6pgFlDoyCKSgcz00h7BMUb8cg%2F1u8Vsvg%2BXHumV7DG6Fv0Uh8btzEFVmgQoombsGOXFV095sIg%2BHqzBkudu7clxX7da7OCOwoP5UygaEalzKDyBsHxPD92Jmfs9ZtQacY%2FjAUb8vAQ5STxqZQ3Lt056krRpOn%2BDBnhtLhMK1gRRRfKjsV%2FPqx6o22oi5ucTT0apVX%2FMCR6NVC7Ko5x2DgAHMbmN1Ep7rZ&X-Amz-Signature=2de3f2879098d67d840383bd0f9deda5621290d509b5ddd90aa55845821b0666&X-Amz-SignedHeaders=host&x-id=GetObject)

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
