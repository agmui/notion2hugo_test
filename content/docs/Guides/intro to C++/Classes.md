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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDL3GXJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaw7w1HkFL4C%2FmGtCtjZgEHJownH6Pxet%2F2j393DzWMAiA5jrLxJaoocy4dVHf1OPSpnkNuRXEy7UTUYkIMCM7Jiyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMy4NK59xME67Oo0spKtwDA%2BWeGFdhsEJh0okSo%2FTqNezKVw71Od6mOwnJi6XWZ%2FFhKWc4o9%2BiMlF0qscS2M3TE3xsanKeR5DPH7ToS%2BpR9JzpmeSPIgfJier5bH75SzlG5OwPsRk5d3WWMsrGA4eNEzNQR6Vvm%2Bq6VuDZ0iUEl7xaAPRt9yKq3wVeUVxd7CMUR7twaq5V0Z6QLpb8Vk8J75D0VnNuRLTcRRkvA%2FNO8aHVdpJxym5CBKpTvAqnVEXnOa9I5tyEqvtNwBXVIdm5Rnb3Sz7%2B6xlfkn196FWtgPyrBhx7dXuF%2BfSa4YxS3VMAI4vGg6dCcZr0JSmfGSzPkSk3x36p%2FpVOu80utOcbz1ahFQtu9PD%2Fjr0o4TRaJLr%2BmJxeACXKkv6Q7oMIg56cdYsv8KX2cqI8vpyWZf%2Fpfn18bYrwd6m73tK65nb41KsFEISQfZR3mbM4W4%2F%2BwjqRwBXpI0w0NglNHotDjiYpJfFpWfnHWD%2BtlcpWJDYDQX5jzpm6U8izKPCfNaN3LKN8LTH6fWmd6b08OMLTpUA0UUkhqWwQKBvlTvG%2FiNfHUEqMBVpVZyDhwDpOUGo7ygfIGC%2FcdbaPf9YDNQz0PGilkT1DIpkg3nq1rdjyBxzADI%2FlXalFybLX8YGn2g0wn%2BDxwAY6pgHkSKpjF%2F4PRB6irAYyfpFNba01E2Caa8iC5s0wLOI9lQE507K6xJSs3bks3Ri0iRSL3oILY0aolgjMp0lVQ%2FPRYkx8U3gfYACn8uxxOVksldoH1cCMrhYy9TmJVIspsKmXtkX4QRtQGAR9znPI2lqv%2FVgDg09b8LKDfb5GmFVqcILOJ9s0NW5Sy8yqLR5ZMdfYPqNh9KIbXoBXYBcP6pukKWo%2BRAOe&X-Amz-Signature=ef95135a3a3f9ccb42cbb25e2d82c63e5cc98286acf19f4396d8d63a7ea2fcca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
