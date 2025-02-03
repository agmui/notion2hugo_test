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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLTDLBM%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF6J14SKaZtJLYrjTASWn81xLHtWk82aqtJYF7%2BYw6SAiA47G%2FXg%2BGumlGnbT4xPA2eIQ%2Bq1zWyky6sfArJIE9EPCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BBoWfwR%2BDh0tiFaZKtwDpJIAXYtOrWAvw2cRsrvKjhKB%2FlHiaSvssTsz5tqRIMW%2FshCl8iaWA%2BHS5Fj0BY6N9cyhVqxH8dIE61BoKFarg4%2ByvLf8yfUF8iaQt921BfaoFVpQchymOtByX%2B5EouODYJRmBR0VXNBAsb6LD7deoXOfNYaCvHt7E63ri9%2BQEjgX1kGXiY5CbZPBEVTRRf%2FC9svGorvG%2BDvJQ3Wt5YzqJIFDur2CnMTi1IsB4oY2Aepgp8V7FKTiXLTq9vR3WSEyytimeBcbnIGVQBhMK7maab7Pz%2BUSpiV%2Fab%2BcUC7zWCLQtZWnFUzcpBGa934Yq8uxcJRNyq6fkxsCAVG006wDcEHXfw%2Bh1OrXcvwodPN5hJ2RXPuAgwpqPZsEHJDAmuMr%2BrZ0kftfeE6kq%2BcG2d%2B0vxP90inPXnUhoaZ0hMNLEMiZ07WmkW5xvMY9v9grSFHqOZ3iVd1meX0E%2Fyd07A3Qp%2BfpFAWuvecZJGzWVoSZGUV%2F77QrBwZLGxAYgpGupoLsLNIsJ%2F03YswMYMcZ7nBoPfmaYFUZlPnJhMtF4j1DWp7UDHdQSqb0Nzjhpaw5VmlplCAQkJ5IM8mSaRq2CpXQgkKCLFvss05VVU5p3XvFG39XbFy2wLUbLXRtGo0w37uBvQY6pgGPkA9LEb2VHoOJxWADvwy0D6ddiFhBMonBvdH17jnGgB15e%2FAk4yXdraE5yx7kqirwU%2B%2Fx7AlHctZSN%2FguSYu9HmungPEkcHH5eiG0kQicCDq0ns7oXZGNrlWSLVyvcsacphX%2FX%2F2K%2FUUFQfxmyNacxEHE2U4v6gUVlyq8f6lFJwJYk8AWkmSQQb%2BoYMtaBx1J6To4r1nO69rblfy9wCSTP5Z%2BLRht&X-Amz-Signature=683c0db189cebc59c4e98a98ec37d1d07de745f38ea1b56eab04f5d99224d9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
