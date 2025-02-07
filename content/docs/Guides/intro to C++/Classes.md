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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CPTNUH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIB0qwc6qAlCImhh9Q46r5AVqniE8FyVCYF4hahCD6XqzAiEA95qNo2XlvxQJVesMbUujosnYH43CmAsTdSw2d6m3nVUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBlg4pm6%2F%2BPNBumz1SrcA%2FlPHAGLhyhsoTlU3alTLRqpebYTbfM7zwcMvrXoVtucvgr2YCDhhLlulkt0940DzbLcDynkTMDB60sZ3FpMgOfwZ%2Ba0qtErX8miQWHvIJIBvQHagqHyZzkOU1uidvZR9m2VEL%2FYP37YW0ncg1Who6WmwnPh6pVIGz9aAffwFgiAe1HbU2%2FpXkdGiGsVZnw656zkPs2zYTdFXOeaIQwbXi2tjnqnG4wvQqf64SIP2Lkp%2F3%2Bv7%2FphsJheRARj28t2sJX7ChtJTuBF16zgcDQOlfBaw0aDPy9JBMYo2NBlyUZLJP3s93zXaPmFNZBeJ9sVOCe4irSC6ZG2TULwOXPhJ3I3tZl0ZJRgN0d6eH8qmFml9DxtTZb%2BANbIhU6j%2Fx7srtEPc8TPDXmD70tcBZwWKL%2B%2Fr9gEmffVcnV3%2BafD7RstvrnUZ6KirTZ75ZngnyU0AdcpzHVbg76jHEt3ncvz8QvBA3%2Fo6RvHkmDLRKDj5tdue1T2cqlb9dRMzsuk2gMIC9jSowPNBsSSxz57rk%2BuVZf161iCOFVU2ulN1gaqDTgL1jgZiuX9BSaxBy8brc2fEbqtfQUHnyKEeC9NXUbt%2FGgoIUuFFsgvhXfAWKC%2FACnKOQN9Wr6cODy8uw3vMJvimL0GOqUB0wkVBoLYFd%2BeE4RArhPlQKoeJwJvEIkaqyFR349UUZrLLumtGlKo13SIkVt1ZtYwK20sEp74gOzTd8KAoVtkFBN5NtB3igO%2F%2FX9n1iaTuR3t11rSOwYiwheY9FXXjVMrGgFfOw5ehVgCDO2J7s9u4wFGL4ai1Hb%2BKSvRhiBxirNm%2F4vyN%2FyArP2iWHCI51WTRM4F8IMNu7FWp2%2BbBJfRnxKPlbdu&X-Amz-Signature=10d631510fcd2efe9e735d206f584c6bc8c7f0143a49a9c8b3222be6a77da743&X-Amz-SignedHeaders=host&x-id=GetObject)

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
