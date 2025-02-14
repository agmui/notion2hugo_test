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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EEJKDZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsplP0dl%2F2UKZdKT2nQctIPK%2BDN%2B5tfnSc58GtDuV6VAiBimWJj7ZyAvKIa8uSSY4W%2FRKYqx71ukYLYJ%2BW0Y8B9Uyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMpgPGBtnbyi6RSIltKtwDNnxvzpg8ZMRFTdKdYGpiQZMw2%2F3EUF4BJANtfUWAoiStWm765eGX6GEsersENJYCX%2B5jC292xt1ZlZyCJ1Hsh9wWviw7U7Hr3P%2B5QLyUTX6OStCUPEkPZzbKflYo3iKK16QPyBJmJ1H7i%2F9%2FmVBwmuBmajx%2FfMVkGv40aW82r%2BSNU1gK3i7NQn1FQdE4P94%2FnUM4TRmRj6hlcbzBoT2XfSRg5KKGfEY39JWF3Sn4whyn78Ky5KllDi7dbJFnms75nv9jaauEUbuEXT4oQu3q8mCtBhT4ZUOEjQ0Lcm71KMxsv5yL5tsUrVm2%2FzzXX5x2hu%2Bg2FKg7R3zm0AFzn7S9ZJt4wDBem8obOLCkENUAzY%2F8F9BBHuIFUuKNBVu9yrbeuXY2BSd9Zr6fEXFDTvy%2BhFZDfk%2BKasacrExHPEBc6pLII3J1BK9wtC%2Bjj7%2FGCH2WGGWP4C%2F6PYogwDEE9mPdUVfQJ3f7lyKy3vJohP81Qy3cbXqWVJvetUQw75RqbIzsp5hxuzhYMBYYGRa61xW5200xTZn%2F0pgPYtKHdF%2FQpQFQbqf3K2L0qDhWnOoA6URy0NOwqXkhYfCpZ0LWznAuNOlULXMXgZDGy7EtGzzhXo55izpS0t%2B6p5bODUw9cC7vQY6pgEAXAEA%2Fo1QL0yMkJM%2Fe4mM9CTfNt6pqi9qv0HYir7o1Bu%2FXYAUOr%2BW9wr88Ijt%2Bpf%2FsiAwzxgHaEdEBfAU%2BLonxyQG4Wv%2B5g1OV6jl9FQ5lvB7u4OSPlDU5Tozdbak2y2F2yu1lIGPzIKZULj2I7C%2F9PL5DwBETcK2RG%2F%2FeFoVohXzbYigbzMNid2D3%2B%2BRPQEiOPO5rln%2F3BwKDqpoa6pSBxwRWEmY&X-Amz-Signature=99edefcb5ce2eb8acb2723c176a67877eee3bd70cd9327e24e6b77f48f263c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
