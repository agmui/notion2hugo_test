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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAWZIDZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIElyoJoNRNZqFKNiecWC6vdNfkvU3ZTKxrZU05900NTSAiA0rycUNgiubEMohJRrA6HfIVQeWDtprx4BT894X%2BVFaSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2B4pndbLjR0%2BzA1HjKtwDNeUsllZ0DpvM0UdMExlJXvPknctEzZAEvqUEFdxSwLZr3G5U2vKF3%2BUP7m%2Fuj0YavMm6XBDOQDY1svAQzOLczJqmoxOOeY42rHaq4tr6PyG1BwJpRuZzNBWZrI7S1QlkhOycKzhVMZHDgH2tDDZl1NyHg9XUiaXLW%2BZOmWXkyKPeQGFftc%2BfbobubHWQj4uJfZIvhae7VvJ93sy0ecSy2cFkzWANO6t8S%2FtT2FZ3OIdGoT5%2BtqgXm12vnwdau0oTGkS75zXojTepeie%2Fc0IFlrPMOEduDPsHhe4SrZJHDkQUPepVuvqpFZwfA%2B2GSIZd%2FDb3LCBQF%2BpTxpdzmyaG58lx8%2BMVFMgCw8hsl9tpKSZQV40XsR3J%2BeAr0rAiwbQIhzHpWVVQearp4YCNpKRmp7qMCX0AHzNrY0viW2il7IVvhUg93B2OFbJ%2BozKi5kwmqU1HGmMWq2Udxo7DNJxOtwoJ0WVPDyVPsnfHFPFDTGdyuy%2BJ3ofehuNg6ZedPgDB%2Bn94fKVbSmDVb4VjACvcO9scIJseISwik3%2FSvAszTDTdy8OhrxH2RJLZSH0g%2Fek3DoxGEA63nXNsqHUShg2%2FxdbYbNbWt2qfHrqQXILw0NynLMN0MXjB13%2Fl%2FNYw4rq2wgY6pgFGU%2BwLjOen0cyWw5DeYMmC7ZVd3vj37jwhFw827b8co7yCMmnY8VS%2F7C5NHNzVRNTkR0HfDnvZeeBF0a30mLsOj52OJu5iAvWyGA%2F09F1wFfpF3OP1LK7s386giIRdasM3WSuORUwCzYCdAmdwPBJ8yvDulHCz0YTpdqaW%2BafMCkT7IqbWp9oo2AU3UKuoxYzVQCA38b2R8Ve0Bd%2F2wZzi5maIwQek&X-Amz-Signature=69179742201c15beae101c795a19577e698985fd38b43e9037ea6e6ad90ae8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
