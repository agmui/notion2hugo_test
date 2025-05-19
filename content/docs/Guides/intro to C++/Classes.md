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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RST2XUVU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BobHdvXM6B9TzpZkY0XF59LpPRQJCD6iB5UvtjwsUdQIhAOwxWIodXKjjzjdxCJC%2Fnh6JqY7n1WWt09dx%2FXVR4LTXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqSwJyjWorYR%2F9oL4q3AOtdaoCvOlppKazqTdpo60PJj%2B9xLTkmQ3Ug5LizsWmpemhFuIqbi3pgmv%2BimyBHxzsImpp8TDvEezqq4HEKAPkFN148czEImpawbZmeo7wWSbep9%2BwyW2N9PfHJG2%2FCKFwlXMRAWIn2R7YBDNLOBFE%2BvyTxRtX6fup88Z2TzRDXugZVps0Kr0o9LKnqmSTJQyzYtB7SqQAK1x9usTegKICqyTqIzOKedEYGccS8PkHCYvG4jmRNNs3eyMyjMZFkPheFwo1CEp13iYChZrTEqo8khQ192h2Am17C3nt1MJNGyr5f3NHXj6%2B3tNF5fx%2BzN5hgJOpyuUCUsNxtNe1PbE3Kp4KBpkGY0ohY5vAP6T%2FFLjJXXgAdZk4eqNDYwcI9W8ky0QjAPgAJvWm2biy2f2dEk8TiuVWVBAke6OcKkuvk3txo2WCdybNx1A6U3UyEl3dxeDZ94bZdIWe9Ia6oPcRsWid7XeZoE2tnZBGp7Rv%2B4BQx8xW%2BbpKPq%2FSC%2FUnyz6MG1Fbt9HJHICOGhFQO9dfroFRTm%2FWfm6tpcuVSVoxpKP5qYEzyEhOpNjLA1EJpnquO3%2BHiztgNW4Uulo54sYYpjjmOn6JV7O01gp0Elw8oCzyMmMLF6gtOL1RvzDmiKvBBjqkAdnaxy3wzwBihZmxSVbgrjxmiVgLdRMHpT9xnNO%2BF4IKfa%2FLqrN0TgcGdvHuUXO%2FsCKScBrWlXiuE61zuCazdW2NE7ZmhpfNBxcMYMXVfX5e%2BYTpFiBm3dD1BtGDV79mNSTlGssXNNkY8Zth1IXnBROaw9WQGCKvIEgH3I9TD83uQjydbgwU7JSmTnfhvXKUVyfA9vv2%2B0il5SC%2FOeHww7oTh4g5&X-Amz-Signature=3401b56f725649087c95bde205b13c28ab457ec6fe8ca4db17a0d7c6033964f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
