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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGKVX2YC%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAu%2BEj%2Bc7osmOzjDBtoNeFWjDgr5%2Bk6LHdOVNX5T2jMCAiEAsHraNKeU1RG6wIFmiiXaRlqWhhc7ebo%2BxWYVy8TSv7Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKGCC2N%2FB%2FTOKvJ%2BnircA%2FtKPRH8RZqZIb5s%2B8Oyqj91wB5QnWCIge%2FAhavTrmRgDtoqyEsX6Q4wBvAJkydAH8Y64ugKPS%2BfvNGnVtYwNF2sKg1KUd1axI3zTiHIUq9R%2BisDNI3bN9Np5mlCQzY6Csfl3cFZtrGyjhEuYc3bXgIzNrAsw%2BHNZc7eR%2FsvuwkqAgmsjNo8iq076hEzZpKvvYpqZ8bUsXJmVdiA8ZDH1FqrxxH%2FhDjxXdV%2BKGeZUG15wr%2Flm5SgskGOup4NGf8KYFfHhjNnPKbChVxrLkjWVAWT2nblsHrkIXD2MM2xVa0M1GE1De0pa32uhu8h0HoyyF%2FonxBY4q4ABwJNn1oENDsFAXZHDMmHXXjwKs9TuJI3SAr0Nx5iYRRat7qKyKksAY%2B4%2FAUyzJUSv5RcED0ooJZDcbLYyZpofF0PxXDPcsByGq4B7h0%2FwSsj2ocalX2YNbv7quiA5SGhLua%2BI16ZDRrjYKra%2BEnY0vGgTnTqy4S3llbSWpJtFywoRV5ecsEWeEAb%2BnKjl%2BYzhcRBm%2BtIyQ6oztiUYs%2BM4tu0q7jXAdUkD2CV%2BbJ2K3FMjryBJsb4ov3R%2FE01aCv6pzBxdcEUYztNSNgN2MV0PLo8wAOVnebl251ZCvx79qVRRM1bMLedsMsGOqUBZDR%2BYPlhs1aNJqW5MnY0aET90iiE%2B7r2L9gtjVm3gbL3Wh9s5YqH8xfGeJdKy3ciSMe2tHTO4VSEyn110q%2FMJHokKnrS3kL2NAw4OnILGD9n0GcNrtsdyZ9URsF3Afesvgk%2F%2FmHCvFXfRE4B513oXgGj1G7Dto%2B5V68dMUDwWnhgB9xmUjBAJccVm54LZW7FEnG7hGnj0kjPhJNVJdj8xQBBJfQd&X-Amz-Signature=27579d0d931def062501f918f5d71fa717462cb8b632298190b62f0844e1b8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
