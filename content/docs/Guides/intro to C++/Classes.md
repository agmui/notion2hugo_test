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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTQ6FDD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7sOOGkkpbTRBiPCG3KaGSFH9C%2Bou7MaKcKXvV9HY6nAiAHH3IZhLHY%2FTA6HF4dZOodL0bDm4uNFx3Oo3FQ%2BHU0EyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbZIR2o8MzYNOgWcKtwDlkXDAYWoJdsrYiIeay%2F2LKPMBfavRmKbBDLpKDDneZCDALS8IgJW3CG3UIKYLb5idKjOo0%2B4KCwS8fY%2F3dJUZ3Zw71Ccr5kCAROBLzxHyzREO4WmWnBKqVqH%2B2OV%2BTTI9FADwbX11TPogRSrO7OluxlXAQh8IiHFVqm3Ge0IUZVCFoyO2DVPL%2FjEolI5ITapqnm%2BnB3oQ3PER8OFtMRZfLDTmyAulyO%2FiBN23kPL%2BzR9ZjUtOwtu18mEgg51owsmEd7Gj9kFmE5Iypg2h7Vr%2FLMRLhut%2BogFpOUTLnrLMPg7boAdKZl5SYARWeGwQW0Z5TdPngGoBCPwvp7VdGDNqxNsRuFUE0EbvJkbzpFHKLMsAuKp1uVOii%2F4WVQDF8%2FCwvjybPhE3UtJZ7f7pcfCrq24yOSfneaobnlfjZ6C49oD0nBKdX2uH9FWFpRfxCuhrcSeQUeWIlfr%2FQetSUC09jzZOfQytOl9OLKUWU6YP6CXk1urBmUjWWXHYA%2F4LYmP5QAVDEAci4qN4%2FQLBwkF4Is%2F5Lws8fLulrX%2F83DGR%2BcIRZ6cz72RPzTgyQpG3tJ3gS8QI7xCednZSVgjTmzLFUJgPG5xE%2BIos8Y3zCzUoOuO0b%2FOzVv3aIuYzC0wmpyxxAY6pgGYPo3LgMj0hCWoYn2yG6i0ekfN87UDJ7CSLz3Vp1msjaZTAhJtC3nf70MDbKHAsjHq6fgSiZm5iSEW7KD9Lrk75vl83YZEzCeSe04hJwOdKqs4F6MXTfDuN5e1DYQtttMaez3%2B6C3hEbOxSe%2BMSP9pbrOWFLGFMYpOz4%2BfgSm%2Bd0oHH%2F3%2BkCFM5n%2F17iLjuG%2BxUT8Y0zqWWlfzzxVWIuLgo%2Fh2TvYg&X-Amz-Signature=a6538d64fe55becaadd7ce7aed492bee5cd7eb82d097452200fca4298974fa46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
