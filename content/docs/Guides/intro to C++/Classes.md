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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQ7UGVJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHbreNmc3v2HrHHXKGta752hWJJZEp3qDFpDePaR4YmdAiEAuIvK8DIsQ7pSXROizFBjBfCYPv0rgtdBFU0JsYkRipEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqD71C8UgXBHm%2Fx8yrcA2tOKsc%2FE0no4tzhxeWhE7Ix6KhBDUSAVMN5gxdZGrMXvIKpL8giixGBudW9x3xs0JI5rWAjh0SyuZe6yWD7vMGU%2FSso94wgwKIe8aaeBNW7pP7F6YhSJqtUj3buUJK6fIzIPQ%2FmmHmJgRfy7xYDAHQ7xUldWAuFAS0%2B4eIj%2BFWKQJVR9Zrb0m5YflSX2WZ%2F8vN%2BkE%2Fh31Ua2Vvl1EaJ4zXsMRpQ4BOPkXF2MVDazDDu76YzUYPt%2BvTjLBfkW4OVJpG5RzqTok%2FTcdWx4mr1jPQiM7v4TUCFS1NvuZ0tq3yNquFpqbYJZhe0U5TF6nJ4x%2BjUmhnelgZhSgM0cHJOrW1oAfOZ9zPHSWxIlqwfJRU8R3zHGGq0CplMLcJYVPSWNm7w7vhREo0yz1D6yVmN%2FzfxfdAwJL5HnhAkbjxI7vWpBo0RqhR%2FZLANzBGHm%2B8mmLtfV%2F4BhDwLfo%2Bc4QtYpyyBcJacAFiQRBm8v0uLuO0bdeOmwdH8TaqyEVnTqmAGrgmktLf3c0HXNA77u68K%2B01OPxZH2XtK%2FXFnY8DXWyr42MqaXvh2Yzj4epViz%2BjUq7R1PXgAQAAeaKoXiFuKsYkQNfD%2Bu9x0sqTx5a0tVzQHUcN02DS3oXn0USKDMIjC2cAGOqUBOZMIVWwJTf24nfdpAbE0mCyB81nvzgZw9gXKmFXgRM772aZX5EyIRfupNTVkEl87kEqhPr4opYL8RRXR4%2FTZdtXKtRm%2BO5GVN86vjieav0QdYtOaGkgMK0dmtzIlakLTyRbELFjVu%2B9058%2FNX3Zy0dnGKHuM9IGdOEPw76yIyCfv6Cwn%2BL9Px9ad6HRlSqpu7ry3nLvRbzKmd04TfunCOg6%2Fj28M&X-Amz-Signature=50327553593127b2cb64d52542163466a577b88c313ebcdddcefe6dc9bbf79ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
