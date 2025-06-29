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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VV7F3MH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhuhsjd4GhqDNz61ABL9jbFMfhgiV%2FdOQ2%2BAzVWYa%2FQIhAI8gSVHAPgtx%2FAwQDzXOq60Cd2ByuLZUEEFuKu9arXgUKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FhDC4%2FS9zvRoEUKkq3APeWpCldDVwaNvVbGh%2BqqL0YRWRGs4ZIcOJ6N0DYV0nAW3SOT67yDu138A%2BxGgayJoeUZZvTJ6vJuWyw27CFXxTxHnm%2FFoa7z%2B4byrgWb%2FJ6V9p3ZQg3P9j1fz8QQejWfgKuUJPF2N5WcLW%2Bi06Lpy0MmBvkxCoIHT4GcSA1VFOZnqeyA1tlMpv1DBHgPNeB%2FfpRGjafBd0ds4p2JQv7DwARa%2FI%2FQGV%2BsdfwTUTIVRSKohAmUe335rDraLSmOjT8HMaqS8LI%2BhA2lPLJ1JrKKubohGZuBZ6LavXUbNSdDo1ixPKVZ4122WggnNX4NdlY%2FIiLJtlz4rItUk7jZarbc6vcVrIsxOg7aNSrxijI5YaVJlKMoplk5X5I38WtTF1pU7l9ky%2B5VtQmP92Sq0DLqcuM1TqopaLNZnZivJ2QRHAaUJ6M9KIyXa7W0nwRJVaOHRmKGkHoacLyhLsH91Jq8vPMOIomor2E37NJaGn0upvc5UVzgZKvAFzdpj8%2BDphj%2B%2BmeXfHxLnHFN%2FkZS27A%2FZafLZ7ClBz6x3UF31v%2BQvQYtiYh0peyPKzz36mirYjDXxnLxcByGx%2FetHpzPz5I%2BRqvBxTDu0Ee7rtgshOpndCv1hGtIORp5pxWhNCjTCJyITDBjqkAfr6n2TzbZTx33CcbnXQp1Y7ypCNzvDkoL2BKyP6DPHbSkw0P0k26X%2BlkFSYJ5jX4%2FdCEOUdxoqtW72I5QEoOkquogsyDoklAeXuFl5JgXs%2FV2PPs1QaTvaz9US1YDoYCnPKOY50npXPw1WyV4f59UdGlgNziuuVfCauaSGevCO0YWXdA0vXuxGdusro%2Bdh7GvNlaQe1sVoRf3lxM2EoKmjC2oGU&X-Amz-Signature=3621c1883db2d8f957e16ce3323c4832912ca8856f0210c1c4245b45a254240a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
