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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTI2O34%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHMkfWNJq7y81YgRnHBiiGThBGhaxvROTj2bP3IkIbJLAiEA03Lndz5RicdsuoXNhIhIuSJrwXa4IEF%2Fr73psftz03Qq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPWx%2B7mEeF4zk%2Bnw9ircAzMO%2BmkQc47uH93p%2BzLrBWcdjQNSmDgCDrRB6PaN1%2FgsftK1u3XMqiW1tkUVnEPOWRHLd3roSLqD5st%2BXxeO8VWQfBSQyrrJKxpW5wfW0fHDqw7tvdQmNOAmvco8OE8IKN%2FSwPPLCIi0GnSG4Le%2B7Vm8bAmDucOZ9fWBsXMm1YdVRedickjY0DO%2F7UU79%2F5qEwXTcwuVdWp8iiBsMoaQtde39SwgpfsJxMpMSJ8qma9Do8jSDHpH6FPYRcHKQzC3k5WO1wmpSuv%2BFZMAJeP4R1ayuAy2cqT5iglcD0at%2BOs4V14F3nEGXJuQZINfiTACTWwDWrddyp9MSr1w6zf1qsxyaurScVXPHAVEjhIlJGja%2Fcr5idPLoVb8DnaoKu1PYCgQIAQ7fJbuh5AxDkaowcsUOKgtsguB1sMAVnJ4Ttw5G74khCXWSDRFCM6x1E%2FFZdHwA7JQbTUp5zR%2Bc2Pk9vVrw73FdZ5bBzivdVFnucFPnPuGM1pO8ZwAIvdxEXz2F8Wm0o427M1SByJIM7k0%2BytkKFg%2F9K1Wnl6nn6dKsSQxfAHfsUk6%2B5HX%2FYvr4ZR%2F6x%2ByEXMOHbJopcURBxSC1roKdsXyi2yjNMhdcI8U%2Benytlu9pehAX%2Bze7CiWMIO4wcQGOqUBf%2BPj6hztMMfW651PiKbGEmSi56yg3sIKhOzo29nNCK9BRsg59sLJR%2BsvpJnFpaknuGdhn4t2kiLvmgs2YWYrN0m%2Bq9Ni5ZQpo1J5Gssej0SsPkrxfePlr%2FMISwbZtv3kfK7%2BVhILgHRjNsWB1EU%2F94KJaYI7YCgcmwTPfPZJLD2RWIUo0xo3%2F0CPFSwHTXSOnEGq2LbJ6p3tLyUEhfygV6A7S0Z6&X-Amz-Signature=1c19727ffcc617732c4844f731d0293693108da1d7f614864ce1715e08c8cb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
