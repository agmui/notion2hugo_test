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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPGWJCD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvdsQg6%2B0bQ0yymgFYJLRKX02SOmo23TPSgrXabD5UVAiEAg9OwXyLcdg7XoOXAqcLvC0OqTcY7T2fIkEvPggsHOpsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8SmavBAT7MbxoZRircA3WhLXhudM8ldSkQgfm5dxwrjtdsq91QD9UkjFfpaabOrxeunDuaQLdYjqCZjgaJGLqPQ7xuXIIsuNRCDqu%2B5hObTQgQsY%2F0TG%2FKKrXdAnxTBOORnmkaVKheZvSKGOnEZEcFDcu4TqneiM9onftPuYrrUGyKyWSwjisDaGAShguzOPxDjc%2BtszN%2FMD0RlBv4422tDDA8NcF5HioquAKjYsCkCCG69gUELPXVsRvQ3Dbsd%2BbP6F7dLGJ8T0IMJ%2BmkdVLRml5wAMM35hjJDi51MsPP%2BAzaLXwhaEUnzXmmNuPFEDi3aW%2B2sf%2B43iv%2FdogQWt5NCcngCh9q2YOprkfm8GqYoHL8%2Fsq0e1w4xHZ%2B%2FYzMqvfQf%2BXYOVR6MhU3Q79bgScD%2FvXT%2BzSxwLSqJQHCWpv38gkL9Wjt5Otdj1D4b1Fxf7IOlnIPzn3GHZWv5gZO16d0DJTqzFWN1Vn9cLyLNSdAbOLpsU1zF0DNzRSBUgEXR%2BeJavq3UZimUT7jPuYFHCFnsY2%2BZOWwuH5hNu4JfQV2RQh38UpCESHNRSemd02EJK%2BYGIbrqIb90OVljg6G65Asro6bzh8Tt%2BF7fKQOojX3CKnHmqyVtku234byXw4TOjg%2FWo4GSFXISVg7MMHcnb4GOqUB3sn0DtOj0UH5Y%2FnbvirltF%2Fo5CAoV96eRykeW2NQixitg%2BqhZUoi9sEItA9qiMXATq3kuzTtlpVqiN5xDUYYV%2FRaZiBsHNCk9wPqyv541jJxuXti%2FhnB3ElNpgGDX%2FZ7suIBt7TFrfSBwfeskCdMsrJNlkEJbeTfI8WH%2FJGhYhETbFFvcmFdBK%2BKT4fp8N0ekhi4cC6ySwkx%2Fxua3G%2FyrnUZ6pV2&X-Amz-Signature=aa377b8e19c488023244fd9f4dcd5ec120520f1000bc8c7dabf03bd72e48a857&X-Amz-SignedHeaders=host&x-id=GetObject)

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
