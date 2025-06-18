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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AQABO3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvBGruq9pWykdM7AJMs5dZEwq3%2BzoZRTHm3n86%2BG4LRAiB7Pu6CQ2mTagPyvtlE0XZdPmHYAO6oGhkK%2Bhz6B4rtkCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXsOXkWcfgeemKQ63KtwDnnn5vfrkgplkQMR0i5JWCHgkY8mftfWoZHBDhILw8j8j%2FXKDE3Rwq7bOm%2Bqd11%2F7KZa92UW7fE2cE%2BIYrKYjCqsJAqf5TV6rpUEbkxW0OTgtYlP7Sd9Lb4aNiVieCurYnS2woKt%2FbvTVu%2BmhZnK8UBZgoMfxoYcrzOC0sb9YregOR3DEMxyAlBoNQItE6woW1COLJ4ConLCUwuCGL5%2FtbAULcE8XTMUFC1WnIP4nd893quWYWR4VVzsWYyOWJCfvrRUeJUefbdy8GnGf1FInISPdiMgKAlvc5Fs96epTwCbNex2x7Owuqdf2wNvj6oc5F1F%2FsmI1y38p16IL2u%2BKiXsyBXE08f3ydgbPBkxzXDMiZ0YHc0KJrM0yTSc82uVKS2JiucQaBENfL1Jb%2BPegH%2BBV8SZi3TPBaZ%2Fhpkee%2F1jhLoIxvue6Af3ejNuzPvkUtzrFVVXhZ2wtlqhmSrJYQSIIFnjh9FzxYwt6JvafKKkC63sXzHV14S%2BIl8GkGHJk2u8DlEkBz1GLuHPwDqhvGLCtXc8xVpq8q4A6U0B6YMMbQpeZxF87YfcgNJJVgFlDACLdHY71G6ZmPxVUrFEIBcQih7mxtD7mGqX4MpD9XvqePOsQh6YlrfueEbAw1dXJwgY6pgGaieKST9CP%2FVJrPuDZv22w%2FCOa8xViOpLdB%2BijJURMY%2B4V9%2FAxTptlMz2CgAexN4NRE2lbLqMF9SQq2ywuk8uug%2BMy%2Ft8BsSKdYM%2BVZ%2FL9HccoYMiTBLbTqWBNcTEpRVB%2BbazVA0YNmFdeWGz02DuUQpWWy00kkDttZ03ehckTzh8as%2B%2FY%2Be9pMWI8cPc8tFiI3ylPon%2Bf4vZOZdyFol0dbQc5QClH&X-Amz-Signature=b3aa691b7fff413e3165a838c75f46bf4c6c571cfa31e36a482a07a1ca9985c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
