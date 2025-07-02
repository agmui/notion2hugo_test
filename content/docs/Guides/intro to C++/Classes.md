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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTS37UZQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0fuMzbQd75bzybUPIzaKi%2FadwT5H1DBMHck51Y5qPkAiB%2BEofiSWfjpLw%2B5ysAxU8S2lWRDPomy3WfrwDCIA%2FbEyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31ifKxCyUxsbqoVbKtwDEXu%2FuJrw%2F0HI20a4p5YkcpCv0CzyBTio5Tqbz61L5euF6tasEr%2B8qu335lKZuL8cnhhdAUJHDqlx5fJz2K%2BDhJLuu8Xlo2oxinoTWszLjrnNMEtACu85yVgFD%2FPY7ADPRsj77yigUEFFGyZCku7pZCaSXKZPl%2F5HjFZ6dMjgJlZMBkZjUnrmwvC3Zey337fHP3vcCE2c8K76Jo2VMV3%2BUCLVpFrF3vHFKu6W7DO6xt2%2BekzRJhL4Rufslr5ajktb3GdsD8F3BxqRBQ7h8Qfb%2F6WeTjA9y1V6D0RNEPFMLfjzIbuUXtZSWxOxz7nxcOjVA6cvcq2sOhPydQIAFPsPOqo1B5uQd4dKdhI%2B%2FcyhBvkW6mvDGRAulZujTP38Rz8TPPN%2F9AxrUhC%2Fnyqf3amYsOs9UDAM8H5HHAmzmLnHXaGfxXHf25GJa1vviOnKIvPcM0EP1qacD4sVx9TfDwyVQQO6xh28ynZ80rIoGw00x1tTYacw1jXn0xGRAETP%2B7EB9Rofm3f2P6JtAAJsBEI59dDBlLgyXWmYGllDbINcFINeTmCKRtkZ6FDcdieBvGzGpXVenOXDO5yoTxi5P6qX51K%2BI%2Fr8GNz4QWYWh5xRazyMmi%2BZWZOBq9NVrZ0w5ZSWwwY6pgHBpdVMZIKl797NnSt02mIm50NgNXWLSXZbEEJJhXcClnEGUaLdY66yPTwfkBF9oatJq1a9LG0iUJHmfwSJ3QTlWVtt0fNgF7Sg15VSjMqeFBpQdUJqFZQ63gRCV0w2PwvEDO%2BbjWKfXt5UPLwt6BGy0GmoeOawJrJXhvbuOsdnTpFeUHy3KOfkoVJ1Gp6LP8rTUeneitb8NT3eGI%2Ffwb5jXFLNDb%2BA&X-Amz-Signature=ca710eff175c0c8e2c7646f9a66264c1545b64dd03e268a6d25a154d2d0b5f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
