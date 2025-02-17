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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HOF7DVE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4Sv1g%2FN7lE0BIrfCYoTM9WbqjTp8KukflNeDwmhYk5QIgE2IMehZEr9ba705SipCxVGO%2BL9USSxqtcof2cVm4%2Be0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDA1iElt%2FKMBdXlVbsircAyCK7pFja3a%2FObFEDxy88HNLFiKrMR9GwdYcKTs%2FxjjNHQJZ6JoTgBmsXXGYvuz6TRjd2ohVbStUDABKCPM%2FgwSkt1ugL%2BA3FibGRjqRr5WVD5%2Bb9gwra%2FX3%2FD52ICZyyfCkVmO5UwKz3tELuk8X%2F9E26nvP2kqbNlDiroHPuUeZwxS4ley0GWyNbRHXuF319c1TvCjTqF9hwXT6hx%2FsiF8W3YM2PJe4B2x0OXFUcBhTb2%2B5XCbBWUEhGCeMYSMNL6gI%2B%2B7C95wQl6NM84szbksfinNr2vR3KpslGjidgUdaZpCmf22iUBVN5TZCg4%2FzR7HBFsyBT1OF0CCJ%2BeWIHJi3Lc8%2BCH%2BWq78bIUR2hWE%2FQNTl41hRkYcZi9gG%2FQKxeffvXwfq4szi9Jb2PgMU00ESjQkUbYVWmyHOYVtsKMjgJE14tQOZSKAocmFzFrvTF11TqY15qlUjZCzodzjoO478NBGhxBu%2BCc6b34Oyl7rpgjRS%2BU44pqDCHbJz0JU4DJ%2FnGSy4m%2BCP3GF9d3wGMQm6TPGRaSvu66GgMDOwl5qxzyGJLJVBg4iYy5Ba%2B2cbMmPk7EgZNgK5haEkj6ZwOzFunEMyE%2Byvhk27e8DJHE2DB6D8dQ9%2FJkvNS0D2MLCByr0GOqUBRU4nhA%2F%2FIMp9mzJ4Dv%2BOmWhJPtwnFxzIt4wYJ4o0FNEtll0%2BTn2V39oy%2ByFDwjoyCa0qn%2FBm72Xw1sJf%2BX0kYrt%2B0ya%2B4FofbT0i4u6cJEzVlWiLDTzbrrhpv01LrZwXc8YGynW2N0rEBg6ETwyLoodkFgak8ihpitK0TTVmDRH70BX5KsBEkSWR0sq8tpUwAViEgvtx5qWy22FVUa0jOS%2BgYESu&X-Amz-Signature=d9d0164fe474105534782c107eb4b431c05430665f48c09801e5df71073bfa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
