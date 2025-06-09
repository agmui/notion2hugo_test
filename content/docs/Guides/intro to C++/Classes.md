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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657I7M5AM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW4gJGDnBf%2Bwt%2FtsCRWZ8Y%2BL1CdCKyrMmeoFJAozdw0gIhAKe11uyUMVLf3ANT8cAaSn6%2BDOE1IkAUF60Isyrvm0kcKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FG0WQCyFbfiUaNhQq3AO6Kq5LHzJ13h7dRsBU2PBFUfQ27o00TiXg244AhHNMbgChVizEIXCPNxy4lidmXcByyuYEZyo%2BR1Yi5f0QKUe4GI3W10tATmlHHpP1TF7vixvPgSLY04O0KH%2FS6hR3yKdBkBKk56KQCVF8eOomKddABsf1GBWc0H8eKCEJlXGeAYYa2Y%2FKTChYWO%2FlXHu8UnNfzhHpqaQIUPiKC8QCBL%2FYwPnTUNAwtQGz8AYrnIaJqExVViktXMVRqRq6leDNm%2Bs74ncJiH5jSBuoDKT%2BtfXCHWlsgwu4FH0VO%2BlgDpYwOk2RIZw3%2BYND5dtx4Z8P%2BJ%2Fu6npXbzaRgPYoSxbOPrYyOHOnYra8k%2Be7XcB3cyd9eMJ06iMNzdQS%2FMSWvfs0ghFORx7PZCqDaSFvBPeo6Ex4YYgtFFVT3pG%2BaTR3%2Fndx3MHmkEPz8m%2BWTS5ky%2FOqS5JC9RTbiBNYauXhi6pHlzuZGc7P8HNM8dRoCKWLmmju1t42j0kgGkOZGJRIeC%2BC%2BS1dRIjs%2FArVRHSOKSEj%2BHxMd9bk8hVeKeERnYzfvzraSDAvxH6wtOX4WFqiwR0WFB0hY823he0fbHi2YpafL9skK0vY1f3lwGPg7wZnkwKT6Y0G2pHffkfksoZdujCN75jCBjqkAauNKAp2BTQcfbm67f35tMmSgXDGqFpnH2SzHlqWp1VeZvf7IpQrvr%2FG83dzU3%2BWgyhohDlNk%2BxkK4Pzzoj0ZJyDaVKLlswo4Dtu%2FJM3GD0Bkeghs1S5Y8e26Az6bkUVoSNYi6PTFkLxzqthX0HNS8yadkljmxe6HePxBFbWhl6o%2BJpdCboMomrvWl6JE3gUfAy5%2BNzxH5X9AblCH756YSVPXo3s&X-Amz-Signature=f0bec7527014e92e9970114d078a30aef1d509d1b6b8eb795608b9735a6f043f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
