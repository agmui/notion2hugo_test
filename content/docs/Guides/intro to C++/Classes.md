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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4UMJVT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDF2wl5jmxG3l7SbIAji%2F8EFu98TLbji%2BxfqFTHGFoXQQIgNTyI1y0eaFUvSf11Foi8NTVG3P%2BAzd948uWOVX29jocqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B2bftOfnb6mAvhIircA5dR62ViszOQpcTU%2Bdj9if%2BpO492noAIfXlE7WTj7Q%2FQX%2FnjwWIpVvZavE1mJB4JKvyJ992TLcxaR7UzeHSVwIV98wpTmGkpSmK1ddOLObvYUxcVBiDt9uQ5XhGdtgrvuzqWxu3TaMB1t7m4JizYDmsj477GdA3IErzPJudEtCf8WN1uTyKuJ2zt7RNSN44aqfR973njdVUwIt%2BRSDa51ihXZLJhKsBD3jB8b4Fxuu70UlqDAoLtV2%2Fw%2FxBEx3eTPID6ddNbNFcfxjgWNJksl0Jl3BqvBHSXjJQnChNcRmtJqfmaOyuMdXqL4xwAHF%2BP9Q5f5LZR4t7P%2BviUu%2FXefYgbou7pCX1pzc%2FKmgjQeHfxXBZyl1rZmEY7TdD6XSOuDsMZbi2IA1rddg2%2FXVMahqpc8uO9NhQqbRMoSArUAxLpBbEGinUdhpZX35WRV8zXU9qbSxS6c%2BV40712av%2FkGRw1eGj5%2BhKidrr4ckLs1HBx93el7yutn%2FaoVWew4x67fJWmVZajiYdx2GiCytet6FIlpwZq3qp4eEWcut4mONI5arUTLS0DD%2F98r4Rbt4WlzaNk%2Fr14bkhNNiwch2qLA6kw4CbiSUv89LgW9QTjrhZnAUAkPVJhChrWe86RMNCgj8AGOqUBxKwSQuG4x%2FlwzUgn9XXI9TdcPaTj3vdu99t%2FSIBVx6QuQeCVSaVXA3RmqIgYTzSWW0rkO3mIQOj5tG6xKNDOuPa2yi8LtFZ12gvBPBTATjKvgh8fJHWFoFqYtSIk4MuLzFrOrPo6XF7%2BC%2BBjVkdBurrkoGw97VZbUsqpcJspZFwdUtP5G39EZrWaUZo77XkKWj%2FaqDXHVdqnPKcorgZrihzQVDBS&X-Amz-Signature=59ce7e49883b146d6c3dfd8b871d9164b173d9d54c9d9ead815e707701f0b813&X-Amz-SignedHeaders=host&x-id=GetObject)

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
