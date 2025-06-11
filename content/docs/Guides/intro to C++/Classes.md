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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVH4NF7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCNsWuruYPfOijRZXRvn3075oA0p%2FL0FUj6%2F3Q%2BMaXR3wIhALoSJXGFjilJK2f%2BwLaVj2v15geFVd3dmOJTpO%2BYJjACKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHIoqQ3v8ZGfz8unQq3AOYfMCbpQ3JbW1WB3UY0MEVpbWEwjMHdUbNxbkmk%2BmGReEXXFMAOH3y4KwwvpcmzhcxAWptJhJypQtMtUfvtpRZS7vGGu4SspnCCpA%2FrzS8x7dUoaQqAxBnnaCYeDgnALuEmJJ0pxEYqXEB%2Boad3fS%2FJ%2FrFpFpQ8tzVxQxEiqb%2BgstZRjQP1yTe4oYUZsVnLqrQ3l0%2FvbVSsJO%2BKDuD4KUa5QOPzlGSbV97TQKDEYRDjnlkduf3eUWKIJT%2BQqf7YAfiqDILKvoEFkInFEjW8Mn54FGyvqEHOyHNkaNQXfrUIDwA40fJ7Zc74cwL5ImxuvhotdZ3FIaIcJSJjxlZM3nhbm6K2KbZ94uMXLY0pAxjZCoWu2nENTiKNdytumzcjIyDkMc8d794qgIUaUBcbLx7K90Bbnp5nOz8PLMaoHN8zEQblQap3FZuwRYMyMHuiL6MGiymsBvw8g6ZNCrHbGEZ2sER5%2FZR6CpFVx6HOU5u8rQUidibCzaRNRpHa0jwiWGBErsZnnxf2SSKm6cQbeku8ZZDJQU9H9t1WJDHLrDhBq66ctY6OwCRNcZwHjHvKkCsJKuDe%2F4cYPSBFGcw9HJKkG5poywK0suuiCdkr1rAdyNQXr%2FtlOUkJTzVJjD4yKfCBjqkAUdQMvottY%2F8Hxq8nrFQTGYw7KMG2yDYfwbNfJAOkyIoxAj%2BRqXe4xWcGHGyiiBoLBk%2F9FBrvU%2Fu8TaPiGvUJnceNGmnprvGeHwhW7E9T%2BxfI9dncH%2BywEL48lagwrGH37ATcAphUTShmBkfQzLT05mqGnJzNNNFJImm7xzlI6IN2v9yJj1NwKkx2Kn4z0CHmigiDdb2heF3yld3MYosqWAUhlp8&X-Amz-Signature=5dd3188c3091e5c422d90e58325e080faa26a8afedf1958e952a300053054d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
