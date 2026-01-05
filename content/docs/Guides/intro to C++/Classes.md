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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLILJBI2%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIG3%2FG8UCL78KFcm91A2naS3RJ3uwbsQL4AkTzd6DeiOIAiEA%2FF%2BzSgLCeq53FamzlxJQwkPnGJpxcEARg8JQNlzfieoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE1SFcP656gCb0NoPyrcA5Cr04999rrdICr%2BhdqF6leWGSXotyO5o243oDw6Gor4D%2F9J3ViSJo2YH4bhj4gDPdNw218Objw2CLMHfTjHXz1fXeqqsFeH6JdQKNn0HvflBzV2GIpiOp39qjaHnQbZdFywKsB8zYqXyGTBq6oqCW2fAQl3wUD5stUT%2Fcv8kKaGvIg3VJ8Jn7h2QHxTnB7WULEVwk8zqekVzEH4lKv4DjGbBvu2R%2BDXFX8BRS0k%2Bpk2ZrHK2tWvqreeyKaMVZOxfNTQg2Z6R%2BGlHuF7yffMF0b74byitQ7uoq6EkQlJ2OeaQNo6Vq86UAV%2BcuQhK2gxC9Ieiba81VpUjv0TkT8iTnlXnz8vduLdE08NvH2YYeaHT29RNY54QQoq9E4YkTWyYwcOguxLx5b0iujiwA%2F4SqkErJYKoleB%2FEgvI8gd7wd%2FhX0Y43W6XzChlo9TbkXb1Njfedg6A3imO3m5CsMVNmR0Hwkd8cljQ441U2ssDgTzDCGz0NVFA36I9Atsae%2Fubmi6kkcZpYQBqYU3ZE8jgtE1glrfWiUzVIaQMYp1%2BdnI9%2ByCMEaSz0E6anDtZ4fEE4SxzeNRaoxaKCz70Olb%2BqcfFGX4DHaRPKPuXG2Qm0OYqCz8dIYif%2FM%2BbT4eMLOa68oGOqUBSglx9GlTsNtVOIh6g%2BsfhIGzq8UsAkF1vv8tqpYPXGwLkdbtWccaVaqVp6LF%2FQo17kwHR7NO5BuHTBiPcgTZdiue%2FH94jxvgYD6fmwRSzSS%2FkmRyUNCv%2FXHvFbmNy9dYNqYBzMvhqlIXkceAAPeYjWrqYUeK1dhPafpi2iq4jAlqgNdswMFe2chKr28WvF5ZcIAJCOCPu1CXcP6jN9%2FGMjQfloLL&X-Amz-Signature=d08f403562025aba634ecce4996889839b7e3e9dd1392fb85ce5cc6b1385da67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
