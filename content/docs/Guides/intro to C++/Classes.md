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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H2752KJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtbZcayvvo1jBgRSWyqm8w4jZdAU%2BS9JWWxS6BYqoOqwIgD9X9OJr%2BWzZBZYkxyBGZUo%2FUG%2BO%2BiVuqrRO%2FyhDBjCIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMy0RKjpPt8bQS0%2BTSrcA7LB6tkckndlaSG3g4cj2Tl2rtFH%2FAZwbdulp84Y5mlhdaqngmGYaTQ0byLLRK0pFDJ5DTjT3OEC4Z%2BHFLXxltPs9w6Eg6mpNjNCqOfWJJe8mZciT7RP3DG%2BwW4JtgcC371fNu9D4r7KxjXjLgmq7q7pbT5V2jBemCRHD0wz0gGFHYradrUjYESKmKv05pM7lf6az%2F8u939PW%2FzwCRr2zkHXJupKgEqBTP9Z5GRFPG%2BclXcQFp20FSwT5Q8Wri2rKUlpyoAWwnKPZwepERM0U7WavuaKHushO0sCFLxJKArZmxXyiGLWTFuVCxxt7%2F2UEpcyKuyXJ5kJL%2FrpKf6nGYLYdYRYj3B5rXiH7JsNoEKnjA77bTHjAWjZ7GU%2FE57cc85qkJIBjHqVM2ayjSOzErjjFzDBA5kxk0kEu30CUSyGs21HhjDjlgG0jBdRUwwxHLWOUYTctEuwXZgbvhofeb3yLW83Hh6ggBK80dP6QJJO9VTFVoTmPHUxeBQZaeHjHnRL9EqkQle0w0kUnd58YT2YRFd6lC75nN%2FHJB%2F8mAeyMMUmTUAeoyhfu%2F5NpIOjKRVW36EXNADDC7tUYHmpgkxK0OvT%2FqnfwXU7G3pEoHY3BxX%2Bf6vM6Cv%2F%2Bg9ZMI%2Bx8sAGOqUB6ektipZHk8NHOpD5wN%2BIqRoHpmd8pqfSJtaGm8pO0JopEVKxKCLKcnabQnNKnRjlQBNpKYOw44VWHsaMtvTP2f3TKgt9C7J9BwN%2FeJwu8%2F78uCDZBzhcPBO03tuoDSWl%2BWO2jEeTS7cjPUxsiKs6eVfNwlyZcdqFc%2Ffj4w8T%2FvfizdVXvPnXyoELxs6HQw%2BqiVmjUjEazueLfOpg06vONlq244rx&X-Amz-Signature=0b8b9bbbab653b1f23210fc3e35b7fd1a602084185d995edb60d928fb3d3db79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
