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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFGRGM7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBQSYIULHiEPFiTU%2BsKDue3NeOnLLg1mL02fgD5swkoAiEA81lmIDFz2CZKXdrSrjgf3gZfzWuC8Rs6Xs74S678l0UqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl0tIvsOnavSoJDJyrcA%2Fy8DnfwsfmBDxFJWe31TpS6LHe1VQ7UoU3WYmPg6IEWq2c%2FsvXe%2BkKaYo8rMg5c58UfzY7HoRgQpEA8f9BRYkawk%2Baaox3X0YZS2TqhXg2VNa5zKaH98MN%2BeS3Qw5zPVp6yL9%2BeYTH0YXPE2e1%2FYL3MjDM%2FhoeVdNDP3ja8tMTATMNFTZK0STJ1aJdKk09R0tg%2B4FBhuVw6Sa%2FKUHggVjNWCg8cRw8YLn2qI%2BSkdyuY9egNlv1rP2I0W8xy78GxzvEbTdt0OHVEZQd1VDklU%2BtWkMnHhwDKXj2ich2%2FVe1CmPUvuwVxBsBYH0jxXk%2FIG8zn9g1KwN7z8o4d102swRIyibboXm8DAUs%2ByEW4AAP%2F2lUBVgBH5ffVjnz7yTVi1eaTTQmsS6SzPOKk0xdFIJSCW3HRyIj4u078Ev6jZWWX3mteFJAMwFur80bdkiBnQGc0ye%2Ble%2BFzjKkv9YEAmhJ2kNxDNv1Zpo01fkEoMjajEqezuqknkNmRue1cdxAf3XUFjNUCPau2s4J7%2Bj1bVy39kcB9joZP7T5mU1bIq45yxAEPr4FGnhtB4iTPQl%2B2kJGw6fnpVawvI7N5LDsUY1QjW94kUSlnhyQCy5u8X4hI6vWkIkV2wTcMHiBRMJTZlL4GOqUBPLkxE3z2KFvkDGIeQPF6h4UDhkqIhamhZngtxTLX9EDWOkxpINdZeec%2B8sYMJZ3%2F%2FFWKldZQueQZVVKuBjMFVKsTIwpeJ2fc2AXP2tiEXK61WI2j8xyAcZfYVrTfFpJMRk9AfyQlPBRsxhL97Sf1gkQxtWEfqoZ0%2FV8wAuYhUdg9InUIlNC8xjNerAFi94MQanrGOQnYxAZESGkOhUw1nk88rGhw&X-Amz-Signature=45a396b345851d79c2b6811d46a3b15eeb8da534dd138ec3fb78c4e428c8ab4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
