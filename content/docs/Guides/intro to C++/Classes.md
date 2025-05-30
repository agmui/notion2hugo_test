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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCIBZGX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl1zI50JT9939ez0cP2lumtHgjtZblEWI0r4BOZQPGagIhALnz8Xj9IyKLWG1RRtraFJVQZoe8gvG1gZbsab1VzxndKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkGq8naaW2Jj3YFJgq3AM1URtet38ToxxgcRPjqlqGfd3qxzk4yWYZCWS0BD3CoqPv5bOzmzZS%2Flf%2F%2BhCdq2mMKmYwExaYILfmuM4eYu%2BK39gJz%2FLj8pR4Y4h%2BNBJJMEzAMlN2qVRNiVdVEgYoipot25awKzDgeu4tYdQTgUzUf2TT%2BCWq1P9avnUZ%2Bv8sVw6PwRirf00l7Eq8sT4VTYf%2F8DamdF4UPm%2Bf3m2FmZGRXW8drxQ8uqbkf%2F0nsPq2wkKbfWT2UrTMi3iAp4uSIBEolpc6uf5rqmrLi5fycda9iwrpmyD%2BLUDaRi1H8XghlaN9hA8bYtHd0ay0FnB79NHpoxxVlVFdUxho62v97oiPI1jNv9VhqUlOBGR5JQX1ee%2Fw%2FvihYMtDAQlOPc4psS7mM3m8WvAzbU3p7XiXwDQAWbCJN4zCnPl36drmV09QJmu4qO2f40Xo6ACZtgyhZ%2BFz8bbkmWL%2FYAjQbd%2BA%2FXQDWLyUBHW%2B13ivyAsFB0lQRqME%2FJm9hcwvE1HJ0ya93aXZAZKTxGl3ZMBoKj0hXSY9f9wboKMHt5EWimKr2aMTZ7ceHH5zxENalm5bpl4flS9YHA5AGnOKByb3eNHu%2FligyQxJXQxK6NH3RMFfaVq17k13FKsgZoxxh8n1izD21OfBBjqkAbwfNylvlDP8JrM%2F9gK8k90UbTRcVpZWwq07lFBFBf%2BwVmMl%2BxS4Q6EIjR44tU1x9hq%2Fq6bAlGLG2iO2q3F%2BuTEFGbRGeC5mi0A%2Fpp%2Bi0faYrW1V4fQqiWImZssp9fbrrG0LHw5I27ETcYlrue5MLBTpq%2FtjLWpIlJ5KI4tjkz3hWNddrrzUj169JXGBoj6qpvhKtprzppQBO%2FprAQDDnmUt1Qv0&X-Amz-Signature=8417a8ae94585a4024ca783f6ae73150fd27d195592d1b34f32b5785e6d3e486&X-Amz-SignedHeaders=host&x-id=GetObject)

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
