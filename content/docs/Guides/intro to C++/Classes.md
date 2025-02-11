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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FOOHT6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCztkBoDCKp2zLcjpgXlSfAvIVBjFP%2BB89WENgOnOqVswIgWuHn%2F5ZwcYFyhT9lUyY8ZfeHNLLm8DbtUOPP6XDAwsUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXXDjNJhbE%2BusNl4ircA2cXs%2FydcSEuB3Hg%2FixrkhjLulypp%2F3pC%2F2JsZ6FXUFlFKqtYmb%2B2Z26lqQBxDHld%2FmM85cnFLy6%2FYsFtIbX1N%2FBSauoRsLwzBhHFfcBeDmYQ5MtpXOlSbsF5RqA%2FlcB1rYLeavlwLp8YG%2Bf%2F4zTcjMSySHUPN7B2sETeHQxl1%2BERJ%2BfUIRbyr5yX2eDH0zRgTFIjbvRs6qLhVZitvgUw1J5XT6%2FmM7Clsw%2Ff%2Bu%2BByONxkGcJbputNyUcrqd%2BZX9rOJSzJC56QbzTz%2Fy9Nh5cNSimzktgk4LyDPG%2BLNRA8%2FmIgV6v6yh3u%2FJNTB%2FjIHPD1Js4mVdhk1ExUFlllWHlGZP88Be1UvkLgaRB89UcDN%2F7Oa0vGXHmyLHyunwy3Yep2SZGFbQyRFiAqUQrGXd8u0ij2BblFblzu8YNaRIjRGzw%2BmNGDEDCreNsS%2ByFJ0yBozwd056BJMIkQ9k1K9MQZ53OIxmLlMcRUlCmxT8Bm0O8mCzxaTbTaKP9Wmw9AM1Tv%2BaMNEtsdAEjcLD9S8uEYOJaeubRYN8HnLqtcPVQs72jlphB2xtzaSIEpvkLQlA0CqyV%2B2CjbE8EhHiLJPjaJcLh2WJ8B8rZvzOKZiMV7vStT%2BoXZYgoMvJ23suMPjkq70GOqUBP9xQIIzk%2FcgUp4QUtE7qNz4TVIzBspxEHYnCReU%2BLS%2FSRtZiSnFUAeTJGZ6rqKfAlUKZWFddq62%2BqFeN4jbw%2BkThdB4eqOCp75joAtVnK5OW%2BHJOgIk7XYeKI%2B9neouYjb4PhkmjDpQnP7EWUf%2F0Ppf7POhRBuH8tFFi9WfyMFNVHR%2BZsSlAp36oxKtxePwk4cZd8djODB2vUEGJMUztcfBIPJgB&X-Amz-Signature=8f66d8bbf587074e267576655513835351c4e2f9a6af16f5010a2acd93f79067&X-Amz-SignedHeaders=host&x-id=GetObject)

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
