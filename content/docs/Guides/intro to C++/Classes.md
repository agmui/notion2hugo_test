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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KLFWDY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFeZIazU%2BQk226xU0Z5zCN3lJ6IpN7NsWTD7yzBjY3I1AiAqQhR8IsIeu7T8RHmPVJxMEK03oDUsRnz90T2y1wE%2FFCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMRnFLEI1h0cbhVBIgKtwDcHHgnsHyPopERs69oBjm9Izw4mI6BRF24DWpr%2FS2%2FlVd%2FcLHzczWxMaTzSa8qBgGq8AEuDqdxKSt5%2BUftL%2B5OsR%2BpjUUlLB%2FW5CiiwyIJvCDnib7G%2FiD2gaIfCA%2F9G5PhlOpxKfmshCRbroGgZJPIE0IbR4ZsSChnk7%2BiIWn2wOKGY7239uCkgnvXR6errVB0SMykmGnQwPw2cL2k6cbYFLI4%2BczwwT1Gh5GvRH2w%2Fwuso23CUtAtLxiIQ1xYvNnPAWcL%2FlPpoycyitLXUhHYbthWXZBQnud0HIm1gJOodFUpe6rSID1gxmt3bfuQrBMjbX55d5hxJJwQeMoeBnSHsp5FfmesJDpG3lo8eoTBWetK8zTTH8epAq%2BziBqA7sRTFq8j6H3OVV9Qp1LWhezTo45uefhouX4XO%2BRSTpKL7%2F%2B8jtnYS2SbtNHHiH4Dh9cGj63%2F3v8aEMmWKWfLIA7Ejv03y9YDpdHvR4AlMvdq6F%2BblNN2Xw7CQxJC1mmlua49jU%2Fwi9E48QCLomg%2FguG1uLaz4NXwkVYZkXer6FUl2NhiEPqSoz4tg2x5FDPxxors9WW30ch5t2b%2BIoc%2BCDmieWWIh9s2ittXPPTUcNLTAoEnWu4ZxDRmImOe68w3ffowgY6pgFVKawcGgXW1pC8WZrzIg7V2EnkSrJpLIm0bJ7Qf9mYRCej6tYDO5QjdFNsATABPjMgHCUVK%2BH0N%2Bz5%2FozP84g1obitRKjCFJMUFVOltEC6PepybvWZNlBORGKXEru5ZrsnGtdYPl5DZ6gbEg9CQhb4FoXw9U%2F5hYtXWNyJ%2B%2Be9YGg711z0upEgfrz%2BtGR1WiK7WnBHtPy0lMAsvAlgxOOExwk1opU7&X-Amz-Signature=d9e046c16d84b27ea093d76bebcdf211981ec04a070d94931838fc1d4e1f644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
