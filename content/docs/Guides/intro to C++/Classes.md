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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3VFTAB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2FZ2gUhijH4YqNpEoeDNy3db5JAImVlejHNO3xJBCTwIgLnW8jqWGW0sFBY5%2B8gp4CkyVJWpnYvyJsv1hqq8qkdsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMDVe9CMDLYGEgv4ACrcA3j4qC0XkL48vPUJwk7619SRGYWiny6qbqDvYfO7P8BMUjQ%2B2Ncv0EpgObwLBQl9I1QHsGda44RdFs9T8ucZNeNzTuH10DCGxh%2FON1spSsFk4IJJHl8Kwv%2FjKM8LBFF%2F9LJCiLijrVRKNeZ0ckEcyCSRG3ysRskCaDdMY9aIqtv8%2FOHBZqtGNHWlCD4AaJFqp%2BGo%2BshPQB9pKLe0qTLPDp0N7GSURJjon5PFLUaADyOQPhMqRZgbbAEUJpx%2FMpJu1PeZnmK15WHypCTO%2FEkFLYxTXDuyc0kWLoTJ4E5e4EAnOuhu4vjjgkiQYOR%2B5rsu8C0Oqg%2FBGn0Fl716FUHVGXSobMtLtsqiyi7NYs9bKTioEa0mK0rVyQJ9eptqzZWFN6G2xVDkPd0LTqFnFWQUXTjTXq9BVTR9MJR8XXqLtfHLErnTIp%2Fv7JjvwJ%2FZzbctvbOEF%2BALORW%2FVNqWq8b2OnkqQFTxIfJwerAXAnK1NlTvMxEKTXIsHu1icjCZd0Impfdmq7SaVH5t24HzXxeJ6I5R%2BMkUFI6Fy81bqWVSljLC14pGy6V9JSAHyA0iCtLZVgpf4RPPoMZYP0jb2sjDTIgPWifG7hfxF%2FkE%2Fv4a80U9pfzuZZHBSi%2Fx7H36MJWV9b8GOqUBY9O%2BdVyF4CsNDFmMEEDbb9KGmw4RY9qETs2mfMFo0ZuYYhGr8deRU61nreRNlmsyVn9WpbiCYU%2BoyPt%2F6%2BQc%2BvBr2m9D310PAbExMuQwzfV6%2BXedpE%2BKnEspktUCcrAhzz6VzmZm26jV5VFKeO0M7dhVogqs38cMuxa4QXOhRkshuupfbDwGsWRksloxEtrCPBpzG%2BBinCV%2FbdymVnXQ%2BGReg4jt&X-Amz-Signature=b6708731c3fde3b4afbdf232bdeec22110dbc46a7e64637b1e30925cbb497031&X-Amz-SignedHeaders=host&x-id=GetObject)

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
