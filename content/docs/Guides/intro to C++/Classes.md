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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIKITX7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCHAT6gtnZ%2FgiO83sE9m63NAd9uLC70X%2FDM0bdgNMq%2BHAIhAIup%2FCCYouMSkcQL4Qzd7lAnjj9dH7%2FyBJr0ern%2BAHtRKv8DCF0QABoMNjM3NDIzMTgzODA1IgwefS6UGtm%2BzC2gSB0q3AN25mlKJnrouy0RAmft3m37RdNPtHHpQeNDACW%2FdNGyn50eRqS2HGDQYOejSZ9FrwiMSIzX8eZqFI%2F17IOctsa%2BEcKF6bByJK%2B4j8nXWrSoFt0do2EYN1VVU9UbqEmZt2mfrqEa2K4qnb6G03aXNXmaLmUsINjiU5IAGK2EdhyQ4vhOdwQNhV%2FtDccATjf276edgN4M6QKiHV9h0cvFPt3jYqhLC%2BLecDyjlf2a8ivq3RkimvZQTggbGsj4V7B3Df8kkHvM2BNwdAgkK3FokIQkjHEUV41w5EIBxSuhUOGJlvnjE10Qaq8xzFdfFbt3luykOBF3ZpXtyWZ%2FqEPhWcsp7dv5hSDPHXVSqhc1MPcNFx0DW37uV%2Bv1wpIk6ybQ916uql7bZ3wNaRdevmG%2BlkJfOeqz0dG2y4LLMAlcAUdvAgoNzSoJu20UKchCCnhSwuKJ%2FobYQnGIm7TSb3v7uOXSUEsJdsJ0xFqBvYVbS3KOUBQAzN8NGG80nGbKnXlgJcWu0NYv1e4hQvy7l9K8yXq%2F4JppZ%2FbODWiIgO1Qrm3U2XnPh7xa4t5Dlk8tpmr1R8K7BrFBm0MWIuXWZHARzRJqAnIUoEAq%2BwZPvHq2L6to172aJqKew9dPgcr4wTCciPy9BjqkAUT6cgsjtnFIZ9vbd5qUyvBDE3Zyh2HABuSxySkLauaWhlr3zwWZVqD%2FpoRjzsxx0jNhwQb4aHjyIG5v5p53OhEBWexd5hA7%2Bdgl%2BZcYIi%2FDhn87lTUPNGhqIPZEQnFZ1hE%2Fo3bB5JTyR5Sg0yc2M2yc3ijqNSsSzP%2BEvyyPA1bxSgoUjzArl30NM6VOmJndMvBeSbX08vsQ01jLiSnDuWwzgGA3&X-Amz-Signature=45aebb8d745d08e96ab7529b6d0549f19a9405d372378411ead66d1b3ba4a453&X-Amz-SignedHeaders=host&x-id=GetObject)

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
