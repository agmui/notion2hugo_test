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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4XIUYU%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCleJDWMi1dgK3auzNvdoEzz60DIayhHK%2Blj%2BKEyShPGQIgQYboaSQ%2F%2Fm%2BDvQIi041WfFpo7ADZqXh80mWg59PvYkkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FfisCo1u7O%2FsuHLyrcA1PGyjoPmiuVcbAZSBvKgkgSoK7%2BBcuCfjcwcDV59vybkDAN8bb80SIxPRaOTFkWY5PUpqX3MiwYRk8bUxWxdMXy%2FpP%2FOg1PnXG60CChOZ99RBh%2F3oYoWms%2BspvT7QwMBspK1Hb%2BjaJwTcVdCZ7AYgRNJDBjbr0JhaBB3e0Caq4dDvQMaUb8OV343Dj27BA9ueJl9t3WfJbwY4bwdfmy44Xx4k2q13yc3SRfZ8Ur0hiOYxdPa4Ma%2FSfDIw0h8xaf0soTqIhe8Im3%2BWRYz1t9y6uXNDFgbv1faLYJEAw5%2BiW%2F%2FFnskoqI9ct1BdM0YoxInNLwGIDXpgC4PkdC9BNp7U5Dd%2BK1kuxxqxx1zUq7hDwkU1t4O9FIe2Vx5eeaL6ZgodpOleYt%2FjrqyTo3ES7u0%2FSniIf8e1g8OhZ017A%2FyRj0kO0avOb5rdwppD3cFEXX3OTNGY9BFPbrIEbJAWYU%2F0nge6zwhKCOE76smc4NLdKJUEgRKqDgCC%2FJ15rUeC9rHVi5ur%2FXrfS%2Fdj3ZgFKwKlyA08KMoBqAVwnq0gHvU2jq3CqtZyIwqI6c%2BV%2BNOiH0RzD%2Bq5IUkirvhX4xYavEBoUNc%2BSZ%2FKFf2Gn6VO5nzL1inpNB447T8VGBw%2FjIMNO2ysIGOqUBWJhNkCZ1e6WSzzGoDY519CH8noBUJaxMQWfav2xMJnJtWuNHfvg%2F9swdYHWZGEZUPC%2FDsxD7%2FDVJTqbpyhPLzvdfgdXeED5MfX72uNl0%2B3JBL3Eaflr7vz%2BstLovoUcVvQfw%2BjJ94NSKi8XTRkyg2T%2FjD7YAaB5RPyT1ZKhvsN5PAQioAo09f%2F6qnPrgcixBKsdrMpuG0kYP2MnxP8LIjazPs3AI&X-Amz-Signature=40a77b3d5ba1fc70e2ef9d9c2d036604688c5a3b7e14eaa41b0a3e1ec387a71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
