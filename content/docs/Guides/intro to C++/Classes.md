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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAS5GWO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzhpB2VdyPQYX0JFIXXcxOsPRJR6h7VCLsaZUNO6UV7AiEAzV5BKubQxk%2B3NdFV%2FYKrItgaepSGfdAyWukep89h%2FDYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl%2FjC0Bu%2BE%2FqMlIfSrcA1%2B8Qld7HPVFAYHAr2NwmGk7WTrt%2Bdr%2F1%2BcwECqv2EH8yV01cNe0KQnFnjPyK3Tjj6LTN2W44x%2FyioOtSwHOToIbDBvm6uN2%2FrYRT7JU3kQauh9p5ass44a52JNNcyFlCjp7EiR%2Fe2nG3XQXVhTjxwOeo4s1f1xlkqLSJW9JY3CiNPQGgjBOb1EcK5broaQwkJ%2Fxp7efPj705MnpACq4ZUHL539IW891w4mryjaUgOxdcNPIWNjmKIJNKEwmgQPAivSXP1YnfWsL%2FdMye31ukjwV0XcXuSVYSp5NLAsio8zKYPb1pBXVn3kchD9gxuEpCxF5f9YW42EdWkP6y%2BXZ0ggxRHgn7ZDT7ejow5WCKHgaTLIct6Zcc3JIHZyL615GfOAcFn7Elr0ua8RAwxTGDeeaB8DZn%2FSs0IlPM%2F96zHb%2FO02LjZiA8BCYeo%2FPsTR8qinYHWCMlF2E5x6gFD9ciBo1oK927GKCXXiBF5zglUa84VrDqjx9DZcZrjW%2B3DZOCNXQ1UidKCSfRLiRQEK21vbGUFHbaq%2FBHp9d5wgmE2SEaZqd6eUtVUTC%2FGvtDhcv7t09PA6VkvdVNiTDsmZk0gHvnkhkLnvRUCKcQfWBLvpuF3wbs1XTYQdW6H2zMI%2F3tcQGOqUBLVx%2FroH6f%2BaUL0ed8Ny6qkRBHYY8%2B5aWCXLlKW9B3%2BfkHpgxx%2BHoUBVJ7ucDZTAKFqElBO8k%2FCUGMh76sqF1O5KjhiiYs5dYltmEubmg8lUlEdjTeW%2BwrCLo0ftomfiy5rAEG%2FlAF6se3HHdvMCSJGKHZ7CifV2jTjbO4uLQwGDVLuLjN%2Fgn%2FQH929lSxfG16QRK79pPN5fDtvqwtUBpaEr4hKsK&X-Amz-Signature=7edf4adadff1c082dfd56c38121fcdfaa9737d2dea32ef47f65876e14c384746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
