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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBJQGB2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDRZ45dfAYJ1IkjitVRFr%2FAjOdIxbC6YES3AXd16EFn0wIhAJTdORrF%2BpZ%2FocRIP%2FUYL0YLl6SHy0cf7J7GMW3p5xgOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymwFwscuW0g9KlcM4q3APnikjQN4R1HikjSa3cBhQ8ZDxRrNz4KxB%2BFdBQfzXvtvUeFqGi5HZeHqamInkzj46LZ2l1DDSSSGZhWjG76hzySOLvs36yL32IsNstksBAthQ3%2FzoPKOnIkVmN3tJ7%2FFze2QhYfnHwOZ3YK6Pa%2BqKBFtg%2FC2Xv69JGYHBIP6sdnQUfpGAztLEzbmSJZjdohbGeD4%2Fx1sNLnLwxT9zIbHZKn46smcejyAmZWfU68rHETXGpKIX%2Bm5cPP1cXohdVDEOCbGAzKVqAYArXuWh%2FNr0KWEuwh5vZJDmImUEyUFeOnyuqJ35Fk1Jd0Ti6GNWjiY96%2BBcfkrsnhzxQxENug4%2BkhHSPsaUi%2B%2B7afDNPsjzYc9AF2nkpQaSJZ%2BPNNmyPvpy9cbAywNYihI%2FelYWUw1rkW4cTfoEMeF9L8vnYVZg68SZtaPcZKuu5utj7JeksWlX7X1Q28XKwQjytHa48OUPhMwe97AS3Ik1OZkbko%2FsVlG%2FHErAXuY03H%2BRYPl2Et9A6B%2FckK2EtNqvJhZsGkw1byzzWV62ap1wmRaD14V3789q5hqzw3d3BT0IISuv8HdfH0eyRrJxpDawNKaeXDm7ziO3VVGcLjGg%2BzGsUDHWBmT9ot3SUTAFU4CzOijC5o%2B6%2FBjqkAVZekyO9DvpP%2FHl8n1JiqCLHKG2ueXkFZgKnJ9e4l9v83BYskgnSfKB%2Bsh7vrTreQh3zfmX9%2FGbOo%2FVQZTbk%2F8tqyQikyxT7N1UOIsrwUGdRqvtoAQLwhSIpVjcGNzPBuAcXQOBulkOtWO%2FBbKQ7YcKNWiOBwe6jWJ3GsTi4FBcyNIvfZQGSTBzktBx7HS4RaP1NBtct1myH2vNDEgnqbYNAgYSo&X-Amz-Signature=92c0875cac2d39cbb40196b1742403929a178db11078008ac396adf7c5cc10d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
