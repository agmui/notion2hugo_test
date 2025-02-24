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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2R4R7AX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO%2F90P3B7zHlSLJM181BZgk8Kjex%2Fvn0mYyPE74g06sAiEA8FXlPtIwfvlmtMGZ%2BtWXQMusSTAACWaDWe1QktX32x8q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPAb1jQjlXwN%2Bm4%2BACrcA3aIVgFaCzLDzSoPuDeneYS%2BUfnkZmZdW6jEn851H6aMWnNZn4po2mWMDAX4BZIASCaQLylXOcL8ABVKwsTNU%2BuU501tr8zOzv1kvpsWgHMKHjGpOUCXg7WCWKePP1MyXfNEn0PTb7gpvAO9xiAhfs8wygNSEA9SHW3w1yeghlwb1V5OUgMpYnUgilrGMNB3ADELX3Ednc0%2BR6ZiYBJ%2FZLEGmCFaTYMCYASMY%2Bb45ZlMi9oghsGBayspk0GfT%2BXUyQvqb%2FRUfyNHMCnYu6hKRH%2FsUAZm7RGiUKv1M1UqMfPLZEqjhLPNyPyypbPFIr8%2B0vvuCYKAA0qIjCwkzv8Bz7DA%2Fr5bxTR%2FFnnX9mUjVxVTX0vq0UCxwxv5TP5XAQFK3HsPAM1avZnYOrsExS9%2Fkk0NhvoLGNnMvkqL7%2BhoSytdtinsR0ltXXoklyIUP%2B2DuhlkN9yi6iaBi2Xat4JM25r%2FIJacHlQ1dYiOI9L8IAIhIGmwj2cVfTQJ3ca0BlNn2euHSXoDozJjE5ApsNWI9aJ34PmvXLFMfBcCwr6MKvpgHOfOVer7iY4tQyhQ7q7DT6Ak3n0ZWSDp0NFJA2Yr5SVUqxnfoQOH8LInEdixI%2BXvKsbqRUBh0ReQTmB1MLmc8r0GOqUBYSkSvXycmHhEhGhF3tlJ72fLqS7l%2FlgUZBAHFg5XWQQa3TBsXm9pB1W1lt1MisXoeRknCyVMp%2F%2BNi0fHU4KhPqBMDSrrspsWU2kn266C2pDqJEnyB%2BGU1MfTvGbplJtX9B9F0Ng2JJNc320nRi1SLUNAeLqfcJdplhmXUMFXwVZTKaumIMzGDApnwD1OswaEz3T3acnTZVGnZoZOxlYcQcpzoQK3&X-Amz-Signature=a06fdd23ad70d2fefab61c37d273ee5887c46840d18cce757bb6c814187d94f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
