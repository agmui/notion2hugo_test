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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKT5JFM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDPsOuVzKkGkgnz7uh5lQp8yBVxF8z4%2FF3wizTcS5dftAiEAo30s1f%2FRG7NrSLfCDoQplByVYkVpSMReC%2FrtvfkB%2Fxcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDG7niodyY3Mi0%2BxRCCrcAxmQF5Wm0WgXZjMjPYnamA7PQQyFBS3MB7CI3Sl0RZLyWh4hbOH1OpmM6O%2BUQJ5bZfoL6bNCP%2FhPizklLMAorxS61QVqUa9ZUy4MmXeXHe58ioc%2FHN6WX9MCJBygR7qOY2%2Bg40S4zy1urj0fTb5Xc%2FR8QX2%2B0QrIqNNRXWNbOMTjCu7ywtWtrXOK2wWklaFQLJrB3y9tqPJwRYPNVe4I9XKPwGiUhHXvfSueLOBjMRgDWl5MYg5AuweWBJvllmPpMF7VPPE6L%2BuE9xSVortcM3LknyvU5Ce7vuiIqr4xQ%2BE%2FdbCyRWE%2F6DzJbVZQHzRGqyIiJRCLXyz0bHk1gFbBFoDhsWwllUzSyU4P%2Bd9R5DH3Wq1Fza%2Bgfvh%2BTvu%2BeHN4wH7HCaY6FumytZOFox%2B%2BRAQyKSPO%2F8H1WT3BMyz%2F0TWBvbYBvELuhZhpjLZ3SKI5dqvNQx3GNNuUPSm6PXa3L00OhMH5JP9dEf8yk1nwKwkFJUPGJKmBvROqkHn0zPSmc25lIqJWrFg8wT0f3qwXW2NDeMB53L8a%2FlA6i714VWytnQhBen8mWnPSRjFUZ1J12K3FJuI5vSXKFEX1eG0nHmMK4OFfbfCx3AW4Fr7Z3s5noZYmKF8qZ62CJdCWMNWP3cAGOqUB5GKYlfDohc1oKte8t7yMOGJAqAwapj2g4p9u0NBzihCCpn%2Fw%2FXpFMCUTK63LdVKqYOJds1QxYEKdtwHb0S6cQgPK%2BpJ60zDLKbjDzrThtOFGEVdOI8Pje2uCU92dgbmE3R1A3UJ3D0iO%2BnaHUV36t7CWkpprpbjwIvxVwpL0i0GCNChaV%2FVvbkArpyo6jNzw%2FV5cjYYlYc6oAinG8P3dxANxhlge&X-Amz-Signature=affe33b9025bd01d5aed72f1470ccf71dd771570a6c35ab3555452f8558a4c20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
