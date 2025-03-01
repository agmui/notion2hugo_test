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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUCNN3H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICMGjcr1m6DIMw4ML1Q4HHu1muZa83ZxL%2BoVO08Q8X3tAiBemK1Pewu8Bu1gsULX9D3ugUHef2iR%2B5bNGYnDNOwb5yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0JMAU73MeoVz%2BwTLKtwDDpb12ql6qfv0MDcKkqJakkTo2NP6MaLzaWw6TOrZeVnIuvl9s8PHhcp%2BtUpxy26dpbTY4kxWoQ4dJ6w0IUhGtsuq%2FjNn1J0C01BsVnv7wUIgUYSWAQ4qPdHHqWN8sdERKrjvkK8ZA4zOrivwR4km14zE5h%2FzYf7923MkI%2BW0wr3ORvLfgvJO%2BY7Zkn%2BgCdr4wFMub9GztVEf3Maj5GOrT7owMJYqHBhyPcsc0WaZLwvlhKZBS4xss3HzGY12uU0hsgV%2FcyLkXjfCd0UR39QPYL1ub0isuCuMYLqr2%2FtN6HIfmrYNFdyxItfmC6hpnMRyuH4IhX9%2B9BQ7j5XsVJIfl2dNVgd5vW45CbjSr6A9CkLTF9OkcP%2BE1AVofdn%2FQ%2BtDhr62RR6M2u48jy5Sql91l8ypabjKCdIenJ6CKXl1kq4ynVcVGUOxiqENtyp%2BD6b8pL1jn8vWAarmi0qG9sA1elzPZXt%2F9ALwvLvufPdvrl0PJ3fQn0KDd%2BG8%2BF2iDBxyjEu%2FX8LwHhSl7goL0jdqUwHFDvejIcFfZW79JsGUkpJ6ApxfhppKJy01E35QXalvsjDggWQXM7%2F1zcCIbwccv83q3JhobVg5cqGGdllVlPJyfRiXp6O38DT1WR8w7JCKvgY6pgG%2BNKIBSN%2Ff4V4fU70bKtGZuwGjFhCQPOw%2FeMj0EATN88XRnMizSubg4gkxFrgM3YvFVLZhacp8HVbdfGSO5JbLO8KIYcg4injtIw9H7umWBE99qE24jceMVLCw%2FV92AZHpxxLES%2F0U9RPNmKx0H0o3IefnAXvgspytNnQeVTVvBM5a%2BCpwB%2F7nrjdBCw%2FnrKhU7%2FWCE8yE9pQBRvdNe1tZjE48We0I&X-Amz-Signature=4934993edb1da26793819e3029828d012ab1a7e793225d6e2b5951518220da55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
