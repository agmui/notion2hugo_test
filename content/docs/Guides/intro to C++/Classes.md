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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG2T2J%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDxB%2BtOKlaEWhU8eMKDj48fNaLqz426erpa3voileOyDAIgQqDWn9U5GketnxGQM9lg4TcDKlpX0A2cZgm%2BlBltUaIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdTsIse1FhcZMWUQCrcAyT5YZchuX0MXT3CGM7kBjSFcvA5%2BG91zJEbQMeLr66ZBlNIjDqzqTDhZzz5xJ%2F3TTJRMkP%2FonGQIk04llU4x%2FEVVvLlDzKgwHqag9aRvjiE3Un0VE41Mkw9eJwE8eH%2Fvgg%2FMiGGXUmUxeQ4QbUIbkeSpnVnTkrcSyJBmYOyWDCyBJAKciYbU0hlLItPQf2JcrY55Sxi8Ip88b9kR9CL7f1nbxccdtIW3xdup7p4kHvvgRDtQmPngWDu4OInPDNcO7aePv61yEX3XjnSOrhW%2Fu6nRXmxn52rGJQbbIyHvgtvvEFlqhIfkSzg0PIoe9wfaQc74%2F%2FMxHQcgiEM2vWx06W%2BpFGxS%2BuSM2LCE1pl6ZbPRJqZ07LqSgisVL7UHYjMt%2Fvqx9osAMMJGANEqFHRtMow6II6mOcbB5%2BMk3Yikj1iW8iMjC427BVttXObRsWL%2FqrhogmNavhLk4NrDmecwTf4JhBiIy5AWxfmCqwp9iNyi2b1Weh%2B4AC40O5lrJqQhoA%2Fr8jtFzxXfVuqdWo5sMaSyFtUibgk%2BnHaW5yCi%2BZ2Dv2dn2nGYb72zMBMgFFEkVo5l03WIXng9vP5grLSQJlDH%2Bvoqk8FWfj%2FYNaB3xffODx%2FVmuFKlyumT5oMITXsL8GOqUB5tYhvpLeYNP4HR5QVvX7qsixBl48QGC%2Fzvn6hn7ex8OesvssgqSOK%2F0pk7vfTSjqDku54yhhv1Pd4NojqPAul9OzFyBF11yDl8kj5OpZRgA4uIs4A0WLf1e3mznbB7LACdSsJal0f1O%2Bar%2FqNn0uRkn7CJeYo9XwFE8dvX0asjDaLuq0Shtmu2I2vvTlAvJz%2BHxVOx3m3SsJcTl1GApL4H6ClEEC&X-Amz-Signature=395345b787c674afbe46bcc32ee083e2128ed20456eda074418f145d71710c71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
