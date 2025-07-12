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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UHZNIR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhxCS8Ur4pMkhypitWHGUPIvmyLuD5fPUZnJCDe%2BYhjAiBFn5rr17oZvwLr7kV%2FBhxXs465tgLDAr%2BrNpSubdAEZyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7jEFHsdGPj91VtpQKtwDaWSqt9msQfR6wQeluwrUcyPxB6yz%2FzqDQBmL4t7zzvkT0SNy3x044hO4CCo3YcYrLBxhPZIIvAfVQM7ilfaLz2o2mJTVioBJE%2BhkjFni3jLdvgGAwPQ1R19HgBIaUPAMOZeQeUzZnw8xVBS1LARMNe%2Bsd%2Fu0Eat7t%2FJRad4qwTds%2Bdr0TPBHup4hjVOJ0kbU71YCf87PkwxV1IL1KqDVkvduiuV7KanZqEzCPHt5NN6LXH9yiIR%2FKd0r778cFfJ44suORbBHGYDdifEwZ06Rxqo3NAN0DRQkRGT%2B51HW0H6jSjeHik0Qvxv1oP9kUmG2rm4HXlnreCNUTMCv%2B0r42CzZhoGwGjyKOWmwFNjxDaNzX94lwwbF5hW1g4VHvDySLlqbkWVfhXGkDxspHYJ2Sa23Pn3bE75bGPFnKFIcbtd3ziDLmBj2Py3BDddZzq3PveHnGO8TnMGdSsFNdlgTS0fsXryHgbzGaEDF%2B76sKC4q5W1dmsNro1aHOF%2B8EV8eaUD10YOeDROpCNNwX7IOcqVFnYD3unqQ910epkCb9qPEs1muDOqA%2BsrlXpY4mtcPUAgclRt0zuz2c6J0oPwcirFbK4jIWSiEKLumoV2FZrBOcBejZxHsX%2BSU38kwkv3IwwY6pgGUWYiZQBCIHMfEcA09OKPG%2FoPaJPuMsce%2B7Pqu%2FSQkoSYAFgNZra8%2BK29UV12BWigLABZPmpwuBi6SLv%2BzmSazY%2BBjTEEC4P6BBf35NUA7jzJ0hAupef%2B4Lz%2Bth0mw0WlEwXT%2BxTXHeoDSD%2BApqszRfFcup5ycx71Umgfk9TamMrjxykle3zy2fuVK3xsB0Y8BXVYv1ZJNawl58qX8%2Ft12IBVVIrNF&X-Amz-Signature=017c1b8d7600e34aef2fe7ac249360f783c540612cc00f9bc7bad3d95b67532c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
