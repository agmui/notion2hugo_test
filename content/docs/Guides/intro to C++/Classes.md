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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYYJ2ZX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCNuaPuidcMBkStDz%2BlTeYmBDJ3jW0r49o6KRDcmzfCwQIgd2A4hlAf5rWCif0yrON79bb9ubf8FCKApr%2Fip0McPNoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLUDMPUoTOdsPpCJircA8yz%2BhnQlEMLSJwPYNGl3eW96Oa%2Bbip0tS9iwTe8jpBVHZDfqhOlaH8ZVdBnEHoEsSLQsocBl87jkfmQ59VmxAIFHuGDVhueSGeh7n%2BMa0dCc8GEi1WIteAaOjdvb%2BCsj84Loe7xdR9DdB7mRobUdzSMpyRiKOE42nIwboQWmYfBCyMRf048VIjIXvm7B%2FeCf8RCC3ZSeR0GpK%2Blf2fCJTq1ygMuSFjApSdfzV5TnF5TgdD4wHBDZ68%2FX3u4XJ5Um1zW9IKsmbHQpA97ZdGaBZc0Ej4v4whp8o%2Fi%2Bp%2FHyXUGKTcmnLl3GnzZnqE1k2UvcIlJ%2FqsnQX4wsFm%2FVZnUW7brYsDrije5PbwcZh1ZsxR8Dzk8kqNqyOZNZj5MaQ1%2FrIcD5FpThPl4HlHVm6b%2FkHbhIG4TcvMi%2B6WlDvCAk2%2Fqk%2BbYDhPAmAjv4dY4bEGmv2M4Vm9sNwsBRl47IStNLEdMHBONiLiJz%2Ffoa4jonn2wazQhZf5WmzM2UUn54xDeODQbMuuoHO2UH8jfS9ONFJcnJl1SSo%2B5rSDlujhxJpbCznqeNgIiBP5u8fxFyd0rdfDjNVDYaDw4tgiWx4%2Bi1h60oTKC6rBrmQRAfTTXlXN0A5gQ4qUD2XqNtw%2B%2FMOTajMEGOqUBN0iJQZ47RJbDbB%2Bd7Xuz0HT9ueWUMaD7gzTCR0P7PA4bMmdIWjJ1G1tZQvOokibGTKU3offx0mk%2FNdIEho1u2GPnUcIUBzrgfgckesPnhAitVpA255uXsWizWu2e0LJ45k%2FW6rzflZacUh1F8hojcTivWknmOPT7PheivF3lCXsoxWAki95aNGWc7SiCzFtPg1m9Ebmlp0cWDjpktZCIyjq2kXLv&X-Amz-Signature=af6fdb79e8c9c87c312ed076a15c66200b454840d00e7941056fa3ec250cc161&X-Amz-SignedHeaders=host&x-id=GetObject)

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
