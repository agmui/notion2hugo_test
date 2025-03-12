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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5NJZ2CN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA5L9oa7Q7RdhcMsW8jTopDuhftjyFLVO7A6Qj8FbxhwAiByhfT%2Bzn3oqjzPzx2aRPNSGx8k4yaYY27EXS9QGIegpCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXPWqYZHlCKmg%2FbMFKtwDb1uG0%2FZxg8wZam4YVAtuZWyoQs2684cXjwiWpTSYHaYTAfCWLCHaFTWA2zzpYFyfUvYhjVo%2BwEEwnbfydYKzKV8eVixLX1klZhnkNCe%2Fhsy6LycWkEVRXE1DtRTY1ZldBJXx30jADtQ7Ho1Ylj80c%2BKFIO%2B7XKSnkwiogpiUfHBEGuCn8l8NIlY8lhEfj1gwCLTT%2F2oMLT42oHXiQWXfD3%2BZgZOZdnzhUdPrD1%2Bk%2BRyGkxk2VjPuQLxuKZVb%2Bhs1S9S3EEsyYYwE1jI68JetH4Hh8FU%2BWcrVKuO0EBvPIynOl3aTTeuAq7KfA6cCv%2Fk1W5HV%2B6ANmujlQ7oXY96jcK6jYb586hG3VlgoODnTc98S3IXOLQxPDn12zhSuyFfAHizXRf%2BBqwTPVIxepqh9II13iJjTBI0Cm%2B5hPY7wzdBoStdGWpBQxV%2BiquczvQJmDSu7ISzvY%2B%2Fg39vPhDix%2BOYq9uwmcabMIPOqLWVCdIn8KEy3axdb7iO8c4DWIhHAazs%2FSHOOmKSVPylhxwhlCJIyl4OeHaGZJaC7XY8m9f6f7TjhZNW1MN64uZH4rE99kFtFjqP5ddgLFD0blkRUKQqRIZZ3jawDqjvETywOVbTxtOm26%2F4PgYutxjAw4JzFvgY6pgHbeQxHLBksSnAgSsj1qIJIVdo9pftKolBoZvxWZSFoqrd3kKRbLNrI1yLA9H3J%2Fuz2L1p6xYYGFDodGWGLOYA4ycMaBvzzcL66KU%2B5SyAan0%2F%2FlrJsW17Xg4RWC53urzpUl1j%2BSVT4rhWtM0FYtycfnL5UQdCGhZ5nPVCPIYCqgXABzE61WRzqpcuiAVXw5xte8ABowBXhBQZ9es%2BTmY9DbkUwHWb%2F&X-Amz-Signature=bc6ea1c35cef70df151bdf6426f4cf789b964fbc9d9df85853f9484728f7fe6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
