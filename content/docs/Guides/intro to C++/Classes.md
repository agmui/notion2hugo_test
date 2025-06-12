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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4KYQUT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFLNwlpZs385ZHraQ%2FxCQVJnCWU4gtqdRtI4Nv1%2FJCciAiEA%2FN%2BolEu1ifvEucG1FDZqQ%2F0%2Bzjskk4imethzhpPe8isqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwOm7l4ezpgUWnQiSrcA0Mb55k9VZH%2Fo7UweiMKGu1tYWW%2B8witniMqYmUt3lOd5FoaubhCarCZhneYOcy5whMGPnuCU3oPkpMRZ%2FG5qyQobojbBRRkvZAzvFCy3YnRedMDzJkX%2BMAw3jbtvK1OyrE7NBIhUATNd8FJXL3%2F1YFoXp1m4N73fIS3jKr21K5PmR%2Fo9zVwRjVMJqw6LSDNQeCl2a6xqt7in0teencdq%2BaSuKtnMPJVbd3zRHb%2F71%2BBFNwcLn3eFHiMRf8h0cX0Mzby53RQxJrN9%2FJTbm4rHWmkI%2F3GXSPuURssdjlUOOsorVPTYj%2F1%2FqQBe%2BLSuqG7EhBej9%2BtARAQVZd%2B5cgJNguBVUH%2BI7%2FqitPr824SrfNrhet0aE3vyokaIgQqyNO7JSKjSvOFpkMpp2dh4xoU5EeNO%2FJgflr6tW92q56s5e%2FSa2b%2Fdpo4HD6qUEMlL7S84W8hRA6Jw7fBx8MHrhuzx%2BmtEaLnj6qUnRLQ1aj7ZT5OGs8Ciw5GOsq10SBh57USXXTH0f6jNhJO8mX18aCl9xP1LvCLkirowfJluLZggAf5JV8OPxI6E27F24CKsf9Mg154n1RMCyIQHakeC%2B9BVdvzPX0WnPsGy5OZBuTldUKLscssO%2FFuEPEnWgY%2BMOjMqsIGOqUBikRv9AAgRAqiAjLv9mrd2OSNkq%2BBgrj9X6dBwLWuRCMwES9bxV5qO2iCe9e2jNna38cPojcxonuaTB4qnb2rm2%2B0OvVxOwDLu3G038eAVjdV3z4FuuMcTYMO6ANDmnqY079lN5glyHqceit2E6E1Fzot2X7gyUyN6qny1xLGm%2BiWAVdXH%2FGMAZ2xqW2X%2FgbsfGK9KHazDK8CP8ryObJzN7IQEq3f&X-Amz-Signature=c3112b370ff7ee13b47d700573f2cbede0b63083dae4919b74d4a4a6960bd315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
