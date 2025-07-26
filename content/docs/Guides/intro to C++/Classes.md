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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXN7PIC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDbwnbJMRoKsxqMITkkiF6rJzTSTecEwZ5TT91GFXW4XgIgd1jTpe9pbJaPiW6zhfnphv8szT61nNkb3xuhACoj6qkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHv3sBuouNPn2cbeeCrcA7GIQocOYFvT7Hsvq%2BOQfRtsO9o71p2FrJ1rxdHjd5RLl8k1y6H7IfH5SIUceIEpBmDPgc2MWK2GQBqC8Fyl84pwMv6d7g1%2FZTzha6Q8%2FuL%2BvjmDG8QrjCNa9mOdFNO6IuFBU23YQmEF8cq9MKGHVNsCtFC84MbdovIJtrFVVfRhhcHnmV6KHes9M%2BLo782K18MIVuO%2FuDQ7GCDR0plfN%2FutpYM57k6KiLDBViZF8xGH7%2B%2F5rHMeDtC6Qs%2BXWsyoZc1MjRFzQkrRSJpnUiKNp2DBCHfHNA%2BknpjQCPxgePZGFyaZjtOuKUMG8qCIi%2BGy8V4QyxLAex4Vurs48eZJ4xNN%2FOpTSmFabrqvYRVYipdt1JOeZykTbyufznH5vzO9sONmkJKhOKNLE%2BRAxv7fNPx8nxSq6JVv1iR875SbpUvGOJYDNYjeMQ%2BfGE1KBhkVNta0x2OeKsOhZurKqGDTCOE95zE1pyRr7RpAEcqJytEUqgxXdSlt91D31Sx33aIrdKl5ThL%2BA3F1QeOWcZJvyn9Bj9zEDq%2Ff01n%2FN7%2BFSSQu%2Flx%2BtVtY%2F0bk7QQb6626pqTmO0O01tY723LRC4XhEsTkH5a0giPIwoMKIB6GZVHFIC0sooucHWNfRBXbMKzykMQGOqUBYmfvMKLwLZ2Sx2gm72CE5heWGcQHJohzAW3jfJpqlhje74eq00feNzaumsUpx9DY8RDd0GWAsVIxxHb4HQk%2BEC31UipTdii0MTdMOsXAgIOWIorYbbVCr8QCZYyC5%2B6KMwra%2Bv9TXo6eQNd4If8GbcVfewOFkS%2F6HoOo4WCtt8nEWBcrp54Um3zKKF2S4wnApFhPMNLPyShuOWtNelzbqE5QsPye&X-Amz-Signature=7572c80982c5570d88cae2a78578311c6852a9e1c348e1f49e76fcdc887acc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
