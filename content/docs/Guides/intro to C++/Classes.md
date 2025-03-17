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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7Z5M73%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLU68iYkTzaIS%2F0qBV9kw8feg5rxk37aToaE3uKFzDWQIhAPPEEwGhOCQv6aiKXsT3lWVtckf%2BYIlEFrdxo3UqgPCDKv8DCEQQABoMNjM3NDIzMTgzODA1IgyVca1ffR8IdnLrjv4q3AOzk0RDnuGW1LIC1G3NKM01xf6fGDZ3nFzYqqHrJgifKek2dXnja3eEuKNmtjo5k4Yq0D6TaiP3rDtQFsdaqL7a8xjGl4sbczW3G5ovQyfXqjmME%2BWjgMIlMhKsqKYwYwVgL2620fGvbQWBkiVv8N6DSUPVpUr9CPgXpKxbao5Al310Ubz6cbSYRnTVbt8etS7Csa3P2gT4ygZlouCYKQGyb%2F1JTeIAbB4BOn7hPApWB1C7JMOQ21SjdZMgAKUDr9qm%2FiYdJk9uDX8WBDkzc9C3D6JXV9r%2Bw5%2FpI9YMgCGla%2ByNiTjVsG%2Fbf7eoV%2Fb5sxahOQlV12DG6TJAl0MDvBOsRYFQcS%2BLppMYzXdZ3pjMz7iPfzDY%2BRjaAnb75dDGnq4fIYiR4PORqeTelBcONl5%2BbpYMSCEfaeTm7u0opYw0M1br0w7QqYZAbWWsQMoyVwnP0TTkO0P6VnS93h4yMsVXEpqiMuZwJIW6B35xk8QV%2BiUAg06bG9G%2B5OgOl0z0hNtC2DTpp5ZbksCGh%2FKy8jtprJ7cMFNm2J2YaUCUgOJPTUEiKTUCVZ3FfVn0YlQwqDeUCtYdn2H1PduLJ0epcg18hg9KHlR4h6HmHTCl%2BEjY2UH36H7UuwcyK4e8eDC%2BjOC%2BBjqkAS8vvoFWyMx3mXiZn9B2pR64XzSYqcf%2Bd6%2BQrAT%2BYUl2pN9vh7QdSnAgVD9lC6h8G4S8GhCQtCQWRCJIA22g9AoQvetUdXQs1VW9qMBeuMzD3GIvRThlIP9GoIjGdlQsswLy6NJIK2ppBIGbOu%2Fed6hExeZTmZMpk%2BxCNvlOWdI3UztcFZIKotOdM8vAe6CpFvOe7JPJheydVFG14OcMw2BY2SCK&X-Amz-Signature=59b83cbb726216617787b0edb9394904137e904464b3e3e6bcdcfc14a1c4886c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
