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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGACWYKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDbGbLKb8GQMWNmKH3MoVXOsYbVdg%2Fq0YRZQ23%2BFbQPbgIhAKwBhRApK8i59nUx7qsBI8vbawTCPoF%2BwuTSD5j5FKlqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1Qqz9%2FdA3K5jazFgq3AM6U2BtW4VvvA%2FLyvRnJZ1G1BvzPShgiEN8d8dLRKW0HqEsDsS0st66lEUiAWBr8ugxLUn0ru%2FN2dZ2XPI9sOWXXzd%2Ft%2FmKQBwInM348PY%2FCGieR5utkkPVGlOFfnX%2F81dvJkjPMtTXLLyLOgfSCtYi9wUCVWbLmn0%2Bw5Zm6e1vjE2DD1M09uSXiGYl8J%2FrFueMJYfkLm%2FoYq0%2Biy%2BRr3lZjGqdJeP9MvE3xlfuiyb7oKvc9ppGNkZjYIHOeOtFYiSzP9swNx01aKRoPgUMzUdNYRFAbyveovNggwMp%2FmTXCUQND0d36ueNEdXq5Owe4SmW1u8sUCBoNXUuI1hSWVwHho8nEkLfuj%2F1hX6Xi5J6B%2FFhFxw82%2BZc5%2FRJoKEu1vJgveXYCjX5VzrQReYEG5CtHlO6sodsnaQF9J8eAI%2FlMStYcpbOdkRw3z8xGYogMFxE1N3a2VriESpWOhxPbkbsofS3NZLvtEBSMqhTU9jJ%2BDhCwOp8aTMO25wgmU3%2BGsyXfXtiDPZneF98KPnjJnBwLzmBf8qJi%2BPnXN6eoeIuz8J2zKlgW%2BIVIgq5cYC3RTPtv9XuuBhJzJHnJFww2qVZ8Xl%2B%2BJ3mVbN8ex0lVmGOfuxbRWELS6CCj8uQiTDEoea8BjqkAfbt7wNmh6ijzBimPu7x%2Bye3cueCRi8lkOEBPNvn3drjHbjksjYTsgCqYt0%2B6nYdUqAjXlXSRxj%2FUidWcCQRc0LFkAuCz9xKMZ6s6CwU%2FSeLTlSh4sh0wMP8eDLat9Cyc7JNCmyjhAjNEhj%2F%2Bxy%2B%2F2MbRsble7Eigri5muvR0XAH09WNOueyv9yELA7IDWqN1AD7M6Oldhv44T0jM1GvIIM59dA%2B&X-Amz-Signature=bf5366aadda089487119eab6b6d9b640cf990949a9ad6af643eb94334c541bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
