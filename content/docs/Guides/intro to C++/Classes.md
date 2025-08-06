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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW7UMYC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD%2FGUCntQXS3AWvcg2%2BejxGiV2Bw84V3QlqgANVqvjFqAIhAO9m75DwRIz777oR097FA%2BRT4HS5LDIhVHq4BmLYZeHjKv8DCHMQABoMNjM3NDIzMTgzODA1IgyIH%2Fl7iAiDAUBEXqUq3APfx4fozRYFwPCTheGlQb5WE5ZFV4LTvfI%2FWikSB%2BdOn5kdVTqb71UJ5Fo5OqQTL5rWOQKex%2B0bbthACSOeWrXTPzw8l97WmSiX6ctQ15tsynW4l7C9dELKj9hPUx%2FlzioQL7NR83HNHZBChu0tLFJ20JH1uxeDuGNtYPTMQfCnykVkxjHl8%2BW0EmXAjlKEU3eHpyAEu20doJdsZpXx2QpYMzWECBxWRSzMGf08Nx%2FD8nQkfa9AKcIsaBwxxzgjzFtPY%2Bvno7n8soYaMKP4t%2F%2Bh4YVTeUG8dDL24XiBdK7ghp7r3tSfWLvwONS0YPgMniUXmREdPJAwnfv4A219Cjlr2H8B8ALrSUzNt45pH3BeQYI%2BLmsmei8C63oKWF56wEW57Pk%2BkRydF3D1MpauEhvluD2stzifPgAnp6hSHE9Q3D7tu9LF6Xco4Bs9gBM%2FeoskRfR9qgWsHiZDt%2FLro5oXKw9ELovjF6OHdxZ3fNtTRGbw6VtPk78OluHk1yB257Ra3G87qAUde%2BvDuiVhLNGGKuFbvhNUDqMkV8mG7aNU4qYZ5cItz9vDzPt4wSvrUldRDaZNHfdIA5P56ZKNQizTfalTHxMeuiOF92zrkMlBBrmQJBTbru3WKCqBJDD6zszEBjqkAeT08sdLym%2BEXEFIF%2BfUDOSsxK4zGYtWTrY5vIGQFRWbNmoxNAqtLzCI8bBOWsCX6JXVcPvB9i2Q39saEUUD%2FfDq2SxqoEADns8c1eb5B5BVwAYckIYZe3022zLMw2Dn%2FBEqA3uEr59dksGW2hPH9cXX8%2FdDpjDQ417E0ca4Q0hZKtdMjO3ZSfDm04BYaWVebZj%2BVaR1KCGT9qYZ0MHXeZZlZYvq&X-Amz-Signature=c5787baf091c3d513a687b3fdad6a35fbc3a7a5275ff853c6bfeb43ab43c7f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
