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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQSK7PN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqqBG3jtQYZ1uhs3U%2Bl83GXMfoHoxFZ%2BEN76vN0y1UPwIhAKVFdUuay%2FW%2F7ND%2FmbIcqbMLwxgayBuJvEKudLD9UFQwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX1Bhf0xKZpJYZtYoq3AMg4mqEQlAuetOr1Nm0TBQKU%2BAViW7bt06%2FWBpbU4c05P%2FvTq8ZDxmrIinpSQN%2BBsyYWGb%2F5h5koK%2FUKzLPBWDQIU6yWf3xAqwWeUET%2BePoEVthVIiOU%2BuvlcfDJld5YEJKh%2Bb0WLt7o3mLYRlMCIdTfaJXVz3iF76WG9w7cEgwc8xA%2BcEmjWE%2BAPuFPQXRGif%2FqMYWuRGbDnc48igK1qKTEZz7ewLOlP58PevToi2MskOV%2FUx%2Fzhbr0Lt6lucUhn8ku5mHZrGgl9Qbe2Cw3tkh4we3S%2BnC0W0XznrXCZRA2q7H0J9PaBv%2By5Hx2c%2FvmPMXGX1b43JJO1IEg4gyhZpSmDLFdY4B3q7tOGC6Uo4Arv14IQRT64Fl4MYODlwR6i7zPt%2FMx3TY%2BcfnS7R3nSbP9gjnLQP9TpDq%2BK5o5ue9sZAGUG81w7IGtLy6QZ%2BoT6gG5JFUBvpyhG%2FeILsRWSfGS2RLiVanPiIJFveMXmQz4NwVO2JfieNKmBaKXcfXx6izEG%2BJMvyZtgVATzEvxoUCn9fMTQVmT56EqCg6NOoyqhaT8%2BcTt%2FQzhvN9vjVAyUZPfP5J6sg2mhT%2Fd1odSusNJffHHFrFxOj96qG9wIWIB9ER3Hu85gsJhOD39jCzj%2FzABjqkASV6p30IdgIdopgAy1c1nAvKRx4vTsplyyvDvLcsa8VJHs9Wwx%2BgkeKD1PxdpvyMpujNLjqu0aqeKmUdJXJheZihU3%2F3KmPblG99XAE3u02uQULhL7n8rojT6KGnYtnXlX%2F%2FmWrLx7SX%2BYCGjLRThNGqt%2F4VYs56zjaQgihI8UEeB6AhqqyzLKJKDm2I%2BTl%2Bi2L4q2CNzza59fHvCF9jJX4AXBsQ&X-Amz-Signature=700512b5ba65ff860da8efb1ef4f69c8e4fda585b5179a6777425f340f5d2d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
