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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TQYWXF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEuyb9WR42KRs924MQMxRlvKIuBUUiiEyXiLVmEW7yZVAiEA7S7w8%2BOT1Rzg1r9xPDPOCg0YUCzvlGcvxddJn5ewnnYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcHi5lYIUt7ZnBEgyrcAxTs%2B5kNQL8RnHt0uGxRqaHbW00xvhJRGwtdIcCt8LBEhl7ZZJiZWu4d1EDXqmJq8CJwXGlpDDjmI39VOA5aATt%2FQJ2TA6WEmU5muL%2Fs%2B%2FJ2Ce7Zcp3kJLBn9qZxhWGPJQCIV8GoM%2BvenL6vP8%2BSa8KYEctsFmmfi5VWO3Ic7gMCPQK1E%2Fzipbbbm6XnTFXbE9IYU7Tr5pdW5bjdUwIZwtT%2BtY8HhuW4zJixHA7dWek%2BfVTOsswGLS1shoFGhGDIOt9EkctlNtZFo2Cjkx4tV4J1i6Nfp2Juhjmwrw%2FQA4JZXSvfZeumHsoNOJu%2BezZ72TYbjvAWwNI0FdQvI4%2FOgkAwpXRMwK96rjRywQodqVg0iBIHvICGvMHDkaN2wmBeX4rcgg5dggWYyVUVJFsoR3T%2F82zIWdi%2B%2FN%2FbV7Onc1wK90l84XHC3vU%2Bi%2BpCQqsd8TXkqpOW468Qqjy8hlsaTna%2Frirx1A8P%2BAebRrCHt6bmCV0aDkcQs01UI9sDvDw2yfJ5Stmyd7SkpGqPTOeBcd%2B5OHEym%2Fq4gcM3VzuEPiy8DRODeNmkE3wcovnIASzCi%2B5FyXdLVaD%2F8d3uSpgIeGqeASdH%2BmXD5LP98VZn5uXA8KSVAPSPuZi51crtMMypu74GOqUBUF30kI9H281qhJuiDsNwHv4dEhGiv8c135sWY5B3fRm2VOsCe0%2BXKrxb%2BxkYD%2FaGbgldrZH1nWssVxvIz38mOWlgRP%2BmMja7WLTnH8OQNDR%2BQyUStXPueZIrey0tyFQbrCSgdVJXqVH2qDxA%2FI5i%2FV796frxJriKlrU40MSJ7OQ7L78Qc9ISg7b0ThLpNmtNTmrjYUBYbPQo92E22YNAGtycMWOH&X-Amz-Signature=36e994522bfc0d84fb96fd2e4fcdf812807db24f327b6c5e24f6476c208a72ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
