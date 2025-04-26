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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JM6KRMX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcmhGaiaQyjATgu43TZPTcpMbr6GKdD4Qht2E2TAsPUQIhAJUupV0cMFyeADTpnXjpZ1ktxKrXywZQjUBS9kvILGJ8Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwMS0hDEjZrCP6RqBgq3AMAEc44A7nXMGVczZqiT9NWEHBoODoDTMCTdnNqgdL86UdtyUif8TdpEkGGqP1bFMn7vAD06T27tA3oOXsj9jqAtv9OAHbyX1%2BD89xDjmyqk832QuYOgZOPsHSkdoFHizE9A9QkgzIWpKZc2Cc%2BnbeHUqY43JUlDzDfTW%2BOSchgPQdW2KDwNC75psemutqs6XuqY8QFCStQ%2FqUWMp3WW6LlG8UaHzl0m2axsZtGnNSN2Yp2kqIvX%2Fh9fteOHyF%2BtkL3NBNSqn4YZZIzBxpiA36tNdv8o4fSoNEoktm04EvUAQeB63NKLjDeR1lfVThP9N0bc7HV4kKgFAE7vKaEpjl6erYWfWsxVGWpAAcTwr6Qp0JpuqPVmK49pYv%2BpOFgS0GE9r5q72GfpNV6JmFlxcS5Ayc7oJBxCXeOBHNdJ6FRjvPGWGZUO1IoesbDiqN7jVcmf9qfyi1FLpR1YUjS1%2Fn9Hz7lctMKmy6RlXHPhPg7%2FpQx%2BE8Il8dfZWYSzwPIC64icbNDGDbX3OX8JxwHxdP%2F0eXIIxHhusU10K5gfwovidxKlorGSViucEA7AQnhtPeCtiF1Ej5OitVbjqDrLySdWn3VoSk2mKAxJDtBDUoiI%2FHPmr2lZl7WpZPqhzCyhLLABjqkAcanXnlJREtupwSQJxl7zPAfL1TJotGknqRJzkVHGJa%2Bv8pAxe6gaS0qiBYjat1maAYDqiWvRBlEOMO3ANPofMPQpUaLAW9SRN9ioYzCk4be1aFV0ukEqqZ9NDVXxFiM6QDNlNKO298ziTDCkrX76Y2NPEI42VM3MV%2BHkwRG%2FfEHMMEenuCufXgRz5WRaoBLaYClK3fUvJbQEhWpR%2Bg84%2Ff6zygd&X-Amz-Signature=2bbe0e379418deb9c008f05e3f0c854527ee6ebb907c5e726e81bb74e435f05b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
