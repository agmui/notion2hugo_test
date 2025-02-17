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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBWJNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCmsWHhTjjD8vb5Y%2Fala83bR6HxNJ2ss%2Bxs4EWuPBl7CgIhAPcQYkBSbcigpR2zNhhIyYnym9PrjeshBUQuu%2B3iGFb0Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxYfAmfjfU9Q7HMVf8q3AMhldhHim0HRfnjhMogWVYuujsJ%2Bui%2FsurycZkLJfgsv7UZow6CDz%2BEYdvVfdDOu5bUBDpa2eMGeiyhDPRdayYMlkGPsqDOFdOYqbcg2B9CCN2Q%2Byo75JNMPL%2FL5K%2FapQSqRkEUpRrHR4mC79oOhayew5Nws2l8RN4mPZG8pCcLusY84EFdYaCbiTbUrjlEn4NLKxGwQI8asSN5rY4PN2sz1wDxeaLJaEJNX%2FF3smD463FQEgWCRIi6Q0wqg0WIwHLdPhSQ57%2BH4De5hHFiQyWdv%2BPimZ6N3bihFe5%2FTmKsF2PWqKvvJJ%2F%2BUkqxOeuolBv04V%2FPTMk5javFNPlVwTQArXahkJ6FyGFWjG1NYMW6e1TnSkPBuUUGNqjlnhbeFRR5gni1jqEMNYQlSBNDIyos4%2BGetvjlrG6YTIDx%2Fl1vsEOynrLxKRoG8%2BAXg5AEW4%2FYHqz5l%2FHWFg9C%2F492ykBtBelqFkpBk1eZ9Y5LpQIQsXBrCy%2BpjvoSs2pVke1yEbhIhDLsC6LxX%2BqtA4X7t2a15Ui9gvqwErCrq458mfg06Rg8kzFRcS5a1Ra1s4pjI6CzjzvL0soEuj6j1kFBNYTOgB9TSV0rax69cciDSB%2FusEYe6V04ibDU52XfCDCvzsu9BjqkAYYznbtS%2BTik1sV8ezRfKIbUyPjwi58n4xoN0zUUII0XAcIiGN7AkKvBxpEZ7b66l8er5qAprNxfTgSBZH3ByktdsSJ8ojCi0YJp73rF941wSEewGF5ZdJyJ1VaeAMqg9ExD53AHRatHgeC7%2F4wIypVbqmThdL7zyzk1%2FsSfsVluC6Da66%2FvSPPoS51T3%2FeJ0VxWaD%2B5vsyrp3UBSdMh0g33fvms&X-Amz-Signature=b23a254748fe95c853c6ffa2b5cbb5c4f918e59b0cd6cd3b49b6942a382b9c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
