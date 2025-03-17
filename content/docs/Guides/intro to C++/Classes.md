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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQ63WVB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP7Pyf5IbMZxtLCVZJZtO9E5QpZpQGKIGZe%2B2s4xJQpwIhAOI%2BpprO%2FT%2FrJhaJggMpLVhC0tS%2BpfeASEpHojnxFeBBKv8DCEcQABoMNjM3NDIzMTgzODA1IgySGo%2FEm3qeZlZIzmMq3APw0qmkYSe8fD17Motp5q1ovyW42WLhLSF7IW4gUPM%2FDmBrIazPMvWPNAC9TnIkCj1aDnV4bINRqJVLqrxYcF5DCp6XaxAwifal%2Bd3IRKXVIvbXmINlJkDY9msqhDo5MYqoM%2B0ASSiZdxv3zvu9u63VV6Iu%2FHzclikByAeXKj%2FLGa8hk3d7jzbNT7vDcKG1kL5NAY2PKxyRbUMsLH27pZ9UM1ukzVfAEKlVacPitWMJk4pJXWJsOkdPHcQtD2D2P5oO67ol7CjKQ1M1kDhsrx9nCfJQFiroI6HOUQem0gzW%2FgqVtXc%2FXLF0CWgAmFT9PNnN%2BNYo8g427%2BHXhKQKSupPVGnGi8rE1Vd%2Fm%2FPYzP8IlZQE34vw%2Bsuht7JFSMDbKGFgoq%2BmJ3lY56yiEeZRHoU8XpHdPFW7Nf03BbxoFH8CFdqSpH%2BluqaMFz%2BLpJIm7X9mjElXIQ1PyccjfQLSA5S%2FMDKgzims6anSd%2BxaK81FQ%2Bzj15OJ2sP8PDYQ%2BE38s6AIzBbYAsDMrIbjc%2B08%2BmEmQTgjvVc%2Fzm93lkXYL%2F%2FYyX2cxPNm4LABpExjcxzTpq%2BwrJzfF8EAu6bSGh%2Bs%2Bf3lsf%2F0duDe%2Fw7x6vhQqVL1YhKHPhmiRuOA2beFczCSyuC%2BBjqkAVwLIzmGu0TZBCEaBTVrqIMWHKTBbpJLJNT7ly8EyEDE8p70fAAPXJD3UjK5UBJ0JRsEzcs7CBfB6RCI2%2FSdDqYLQmCkT8Zb2JZYCgt8ufuOohzSxNYSgUKSIZQMzgghotbyFB%2FtvNqegEFpAlEqgQLsq6m5F57nskgJj37Deqs7CYpzZ%2B3pyzxZnx0kfonE0wzRCZgwDd%2FwhzeZmMGbAHMFYL4k&X-Amz-Signature=870ddfab19dbb441ced084b381b665612072e88e4efb75fabd6c629e25d22b03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
