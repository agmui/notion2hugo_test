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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJN2YD3O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGosSnGP%2FhtUY7zg1XvYJJpHT3R1yPj%2B%2FODrC6B%2BnMuAiB7xbXhi7ySQ1e70ePPCBmL%2Bfghd%2F2iztLHqFCKnTeAPir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMEhC7IgJhTTE3u53IKtwDgXKH4LaKpuIuP3JT9OUMmdzr5jRh7cCDo3j4NYU7q0Uf21TNEGiODRGzyMYhqX87U35TkNHVlqNyzDx3n4htYKPOqqOs7ZSPwxRa5Nm9u9yqkIfa2SL%2F78X1koSdDOHpGXccd69rb7fNZhNRaruV95u%2BSzCKWQ9Dp298H2CUcfd6rHaypX%2Ffk%2BJqhOXDC%2FGr%2BVh90hLoTT01FCoH40iC8m0lG2Hh1lQ%2FEx%2BI8HGBgQ0a5a1XD3W%2Bt9OJkf%2BAIL9TcUdmnrtL9v19kmGwE1Yj%2BBmpTZdw%2Bkfto11bQtwrt9OfbDZQJkV4I4i%2Fu8sMky%2Ba2g9vvg2db6Sjkzx7OYVusINcABMAGNHnGAWFku3jp1koQ1wzFZvyfxGS0%2BXV4o7D6lH2B90SPcFYplBffsXSk2Io4m4fClnjLg0Ex8dE0byQa5D8mvMSKdlmMGPw%2FIJ0I%2BgK0rBF7lcjKYjtU4iW%2Fce7jFGnhbIL%2B66VG2AEhdxwhZlfxkxezIhFMk%2FqtGMQbEGShSs%2BXDgitjitTdU3x%2FtobKbjijm86KKATyuaZ6a2PZUnMONVSFRPGYJJK4jyLWxAFiXv3n8RfW1bgD9od6GYMMZUfvN%2BGzVZdx5Z88JexQdGvhhRob%2B9KEQwtbaiwQY6pgFYcHWc8mymoeeCnDwGfgEbnPuFZKnbGl0DPiPR2aYTP2JfV6W82EnUXfvBvOvNxsD06MdW06qTTSrj98OoY9kPYMTK6u6j%2Fd89QvjAt4rL6B%2B6KyfT7dRYlmhjBM5ZtZrWJfKTdVtr4DkQN2KCe%2Bl7W6%2FAJ87ZSe34304PA2c614ZhIMSefNIvUk89EqAtHU3omBXdgS01KBEYq0Y1eCTojbAnlGQ6&X-Amz-Signature=c9eb69c9b0baa82cb0d4e297d2de3dd153d25674a5a486e5cf2f743f126d759e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
