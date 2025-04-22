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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFNJJSY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC8GzOM4Pacws59j5t8P7aPO83CCCQU8GhHUN0dc7E%2FXwIhAIMB4VhPfBaFxtElPbvS1mk%2BLDVPG%2Ba8OSJ5Vh732t34KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY5UKBfe8poGkXYP4q3AMI%2B5wgubJN0ZEI6En2SHQ8SFmIUsLFeUm07xHltLdiC9k4jlgrd5y1b3d4cAtID0493nF01GdLAEI7p4CofPt3BHxCgk42hFzxHPKr%2F6VVM4RWLM52d3rqZHsrcfoqOc8QFzfJ2zffeMQzr%2BVapENAbxHWnjrOsiYJv%2BVwp3CZcbq2yQbFzKsNW4r5kRdORnYZg9l8hSkn2GnypnmHhf%2FZj4KxmpB%2BWbNHVL%2FMMlA1SRoIGLQRxjMZZax2mbuWhbMUrEWchhM8msiX0UxEXngMLc%2FwUnUfRj5cYS%2FgQ%2BGOWa5WDKW5Et5JNrZSIrmBq%2BYhZkBKXjgUYaO5aCnnGySPdLa0OdNE%2BhyMknUUjLcRVS2ejlai5%2BuXqyvxrpZ21uiURTKJCSwuQcD0aLjoMGyxWuKgLcqgCdKSpSmnaCDCVJxVthpPgHN34KLg%2FWNere0ZlV4m0r9ebAH6YuigVh0aD5AZLQU%2BJd%2BgOVwzxlQo%2FJwm9HDBY7fRS9RmG1hUzGGX%2FPhjrbGE0fT%2BzkkzyVam5MumFKgA0j8Biju6psUvha0WiuVRXK0FBeJRCWbL06gV%2FWsHn8AF4v1hfnrUG%2FuXkwa8%2FeJ2ZZrWkzRn4doNZo8f4ZZtkEsSGVrwDTCIwp3ABjqkAbY%2BGEr6c0B6eE4qQA5Du4%2F7yAp4YT8jThtdIZ3N7EHoRqUWYrG4YTNro9bZavtORSvrSMkHxdWF0o%2F2saBybjIgH2Rdm9flhUxUASBMwmP56C87MYAyC0fsaVluJvtup1nmgJ8Z6zK0uBlEHmQTDW82TpbhrvP352gc1sPw9nZXECYV8KlIqLzc8Kc%2FLdyVt3z%2B%2BrVA4XSThtwAVSGH22nNkTP2&X-Amz-Signature=696dd72e79aec2f7cf839139dcaa796dd2c061b46490a60168a737bce7f85fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
