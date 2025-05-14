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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BURA3C4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIFbBPxID6i9UNMHorigP7aC65tGlC8Pp4rk7NPA223PjAiB6FPYNqEp2A7IxqNL2pZRg7MDfa1PaAhrrwOlw5CIvCSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMqofqFXpE31L8p3sxKtwDMShaC%2FaUSEjCSyRUqQfYu83wGXzdUk7jFOHNozB%2BomDR5BufHiB8nqoElMsRA64bo4kl%2BzFbZ%2B1wV%2FYvpHpgSs5HN4yaoF5AORhX5C7pQE3UjacP%2Buy7AoRkihrKAZy5LbNNLKwyi6cRADog9eJUoJqDOmY1FjtiPJu7s7YhaeT3CtpzfAveoc7ezyPCdcF4jxteaiqJLZ6pKnae6ml3luK%2Fo3TG5mUx0GdMgmOwr4KxHeFyOngCu0dwuBSaapkojxcFLCX2QuUUPKp7iL25Eh4gPe5B3wJ6psQTKcj91BJRA65V%2BQY%2Byb6CGL%2BZi1lETfNAlAotvCiVgej8SyLQHuNVPs0HwrXVHsnXOvRqCCbnVVmFYVpzwh87zOwwTt0JfzSXOS7kGcTbFn1699hNvaYqFJ%2FGcYgZtvL3o107plwTD4c5bM5jJtdUmlBgGrgWAgAJDeE6guWGUbUeFi1NUv0yp%2BU9AaLULx0scnWMtQa5VuK4hClFle7%2BAc2brls%2FfFX3IPWu%2FQMGmuxiTQRa771QO0fNTW9eQtfcNXSQmY8aBCCjRFPIUehuP8GpSWUTKp9U8skRtlWt9U%2F%2FWtzf0JrjZ0nbNpLACAAKYFF%2BmjKyP5QqGViI5nKkO%2B8wkNaSwQY6pgESi623c1AdrYNLBp0VAwRnZ8VqrB7wzTWLTki%2Bs5MTf5Cixp1UNGVVsqf48YjfEBgamRAz9uecpeNOnEZ392DbUXo9Rv5fKH2Eb2R1%2FUdkAtVx1eGGjFjpWzDGjjd7NUvmIIu%2F2WOnF0mK6FMJd0PmKknNgblyfEvWf0XSfGJj1oNKuVFZVoyeF2g%2FsosVJ8VraahMqTknaRqB6GG3SEZmNEBFE7yo&X-Amz-Signature=7ea37bf025ac51d049f363bdd63d25bcbfe6c194b8616968ca6576816f3bb231&X-Amz-SignedHeaders=host&x-id=GetObject)

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
