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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIACL2FU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsOKgS%2B5ZpAMzMI%2B42EYoMqxsSUrnvNB16UXF4Qs5IKQIgPRgyMiQqLdQAgLv4WCLnNWz%2FY7tQW%2BPyazE5ol1NqTMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOthg03n63rAFON3OCrcA6qX82LIVXB8%2Bl5eBaCSNM7%2B3ShW0d95jtOyp0hlBetwOP2TqHMhDb72EzB81UDBMn3h8uIF2gHX91XadUdIB2EJfApIPlguQD9yyuLa0g8y56JYwALAw%2Fgydcql4UwhWPJLZVAFKIg4wDLDzbpIn1VZB8YIlvMaBlsc0suzKW7K1TF822sAV22YWD8%2Ff6xnNQtYhY3GQVhK2jQeSL2z6uW6oZulN01EcN7XjPA2PHo65jy3UPZbeZws%2BKQw4hGz62hXk1Vm%2Fuk0gimaXY1m2QAMZ5UllCY3xqyKlHYS77PhHhuNNsLrM2WK8nQYy3t%2FUHdzeTFgD1dkE1h9jdRfQJpXcIWI3Duo6ZMqiPtDIR9It24YgUpcFlvE%2FdJjK5c%2BHb6t%2B0XoturFNj8aV4cqWDI3%2BT68AuzWj6R%2BKI2T6HlBNvSec%2FyfRwugEfePvlEqQm6E82Z258uSilKOVJ%2BkSYtcxxd%2F0s%2FsN7DRXbXNu8GEJHU078gtpPSOiOWrP4okNPdDZYS3DNwHvUB%2F5bmah5iDm%2FnW43S7iRz10aGkDRyE1QfyilRFgiu%2BTOaehM%2BX87bbNOTydKc9vCpEOnE6O5mltdW11VDw%2BGfKEK71zPYKewQdJyO0ukdNP4QpMK63hcAGOqUByd66nK7zclfuXGayrYy2Yn%2BMSI67AtZKO7UHUC64zImyJ9B0XtNg%2BeM51IXDUrIrfAKWT6oOcUFi0uolPUvZ3ZSbs0FtmEL2RgCnd5BXfBNleSCqc3Jy74PT1v2eqkyEsour%2FDIZszmzf1knyYjy2lRWWVWeVqbG2d2M%2FLj3WtIuoq7%2BO9qNtYUrLQCxI37c3TPbQXmHIy5Isk5Ubz63EJ8uHMcM&X-Amz-Signature=362ff27e3aa773e414705cdd0f59be41e5b4ee55d50ef3b00b7975398d6bf4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
