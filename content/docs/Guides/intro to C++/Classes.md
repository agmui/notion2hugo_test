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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6IDKDT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoY7hT3uDP9Mw9sZCFo88CgRx4jQ%2BxwyPO%2FFylAM66AAiEA5ZQCcDu096xDtV9Xm8o6E5eOKi8ldgeCE7KIuOIRW7cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHaRWy%2F3pR%2B9KIGeHircA%2Bzu2NDO6t8FTBEJLNPJ0xm%2BiiXIPh2vD1exViDV3iB9lMTBVIEA4wuqm7dOhRIu98FtDWx9usAR%2BhOTW%2FB0d7c0fXq5scthzRYTl2Hz2hVNDC1iMYJ9SAxQKGCnuM6hIaG44KhXHHiI44xycA39hiIelewp6xchmx6FpAkZuf8MsYmwSG6ejDaw7zaweZydxTHylpxMg%2F%2FV8TLxmrVK8pPM5JFe6oYMD6gdS7tVWfoyaW%2BJrtXMAm7eJmHcF9MHJOMzj8hAOuIXqqyNxxkFKMXqu7cE5Lm5YjpLj78X5ndvLN6xDnGr3f2UJMJ6IEwlyFpiDmbXXR4ED2VTBcHxhDrqUF29QdQeXfPG1QfbyBaBa4RTojxvAqUtscMStVfxF%2FhXN6oFq5%2Bw7GCmvqDcU9cKCIkDQmr8KLnPXplsgHBoJD2gWME3U4zUS5BbircBXYBKA9zn6P49OLR6CAPJld1xlmGQ2trhSEURnDbvTuKMFCp0%2FkZKZZ8Dwt%2FOrieKmomIdfhKG6gHLGV0SRKdL44d4P%2BtFgVJul0NfLwM3xGmrnQZBW%2BEy%2Bho9HLg1vlgaep8isCHwjRdHfZgV8afLjsIhCKekbwVmv4isH7fU4ul6YgHtigNHqq5wQp%2BMOrw7r0GOqUB8bBhVzEvKjD3tTBeWEXu1qBSEnZuG%2FTdtJUoskKmHDPav5T5t2mptcY2SmJuRN%2BOyM2LHNo1nanqvAEHwbj8CHsp%2Btf1fAgmVReHTPk4taYzUgtNFQMn9F%2BuHVVWhLpslWEUDpZNiO5UjExbc%2BrBxsCwEl%2BTSUZnUDwzwx5iJIj1Iya%2BkKY9m36uXnYsUZ2eRtR9sncxw%2BvdWl09bIVD90hRO5Ou&X-Amz-Signature=c71025e7c8e09309a1bde1641cda5d677a14e7bf80b76366e2aaf044251eee76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
