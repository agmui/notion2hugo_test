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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DM4L5SH%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F0neXd8lADOJRDiwMSvHx9sC6kdh6KCQiMLMpanlq1AiA4P8JyxAZPZcV7edva63eC84QPSi59SJwJ1qeUxBQvQyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVR%2FZep9%2BJoenN80VKtwDGbwzENlOwttRbO2QHDPvt8y3QOH9YkkhmibWfUIjcH8D%2FMSOzyazexNiYr6QgdDecHevVqRinXKys9DD5Aj49hrPbEb3d2W6c9BIkYHZRuPOKe5NRYS21ONDt5l8vJyZnPTyKIz8tnmIDpto3%2FF0imePFSJozJb40jU9g7G5iR%2FKTC67n%2B7kqL5SDxGpjXfvkRKfrCAyYXxO44EQn7As6PpJDsN%2BUWYNe%2F3shZxquaMxXOgl4yXm8dC2ga9NeMfLvx9eePEoEhMNb%2BPW8Jfkj5yrdgkhEuCn%2FaDCPKODXSo6OIMb0nKQeK8k3VhYqmZgy99LXo8cr36A17CJvfEGvfnjBH9jFOAUJFh2CR1DhwUn8oPyImxh3bm%2BYswilSdT4%2BQt0Rd%2FSpDoqmSY3WW2SuWr74FHG57SZa9cxbhrqbh%2FtqZpfTZEs6C4XhT8WpcnTerjycBvkApAFyRaGKI%2BhVIUNUhfyyiTkT70hI07w9ZCPG%2Fbqrmrp1%2FxminUSwBJ6SSsILCItNtjLdEes3pLtL4m5q7QW5RbR3m%2F5ZLCmNUYnWQ1dWxsul7K6BxNRMDuklNWyWkY7NTBPSoCWF%2B0WgtECvbgRXIbei1sxEHBM%2BCH15rnuFY5Lky9Yiswnrr9vAY6pgFlQemGy%2FQsk4ZIkkNbb22qfoYMRrKoCuj60jBL33Z9hP70AvzjXWSSzPt4UjCiBCQcB5weGmz2UeuCkjJMqwDRRn%2BZ9DqwwE%2Bm2spfYoioRnS2uosScOYuVTboR%2FnxMmlPOrMj5Uk49gHqAxXfGSedyWMYqIYgM5yUzG0nzA2H6y%2B78vX7jBN1wRAry0OdbC3ghWnyXk%2FeHoJ5q24lY%2F2UyoSrnHiC&X-Amz-Signature=f4f72b52467a2557e0173f4baa125a903176530c1cf199b617e623c1bc777a28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
