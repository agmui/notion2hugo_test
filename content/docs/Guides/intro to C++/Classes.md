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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IF66NWS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHFQsPssYgQWY9UH5TJoB%2BZHNXHOn7t%2B1mWdDXpxFItPAiEAxFAigDPYl5eva2ci9wUQe1H7uETd1voctu6RJ2c8TSIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJsUkqsDzandfBE2bircAx5Gxg9HV5uhg6nVnOhcCZir66BZRerykjb4hiwW8Zcfk1FHWEyXC1lBbwG%2B2Gr%2BmrGLhLHJ72%2FKL3UkvhOHP7%2BNeHDVe1W6yaTfKD29V%2B8YBe86lLb9Esy8LwUPC4DcU3n2mBcDDpCrbFeyRrwXUJ4oLMiqZAdngvpF1ue6NNs4BZ4PjZOUV4c1LaoZ%2F0XVm5QfunaicPhpyBvKsZCOWxS%2F0GQfDFX5WOJTSLwK3i3ZdmeGBPhTfgekW%2FyaXWizx4q28A%2FYiNY9DHUTvVJe1v70KtJIz4IOSKpZuMjpLvWqjfyqhrNZQMTUL9Cs47QfdVg7vdN3ArxyZrANcHWIYwlLHyjh6StjtPl3nlhAuqtHCcKwvo%2Bo0Ic3XIMMovz8oLOk%2F2wsdV70%2FwOw2o%2FcFZ%2FT5Gz92GZFmJkH1B8v4cH242GsjHslM3XuHJW3epdwgCYqG%2Fil1GegM1eDfs9MtisSONimaICz%2FN3LFI0YbcBRgHclYyjZXgq51PVrnOUmRLT6v60%2B9PcqTUgYyDwLJn8rZtU2YYZQvOamVRLZI10OFo4mh3WOsoI6G9jFO4Ah2WDLCUpH8XYPqNjNTvXUo%2Fpgg%2FwLUkdwwBKUWsGZQ05SocYpLN%2FZCrYZ0OO9MOWG1b8GOqUBfm4YRtLJESkd%2Fffny%2BoZmEunDUcbCvnEl6hnGwukUjrd%2BYFakqZGauZgWD7X3A69noSDed8FlNaAW2XdjXhVVOYoFFGYdXsYlqKbHOti7Kya6IIijv%2BAahh5nWplp0bWoDWm8nIqRzSb5MCTnvOBE5aJ6Pajhwb2At6zv9cbOhireVF0zwcX71Gx6VeQmwmRkgWLUC8EK7bfUKgWKNu2%2F5kLHsGm&X-Amz-Signature=6422b11b8a3e37209b6d338f7f5a1306dca076b0aeac3ad6e8b54e725c3feb08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
