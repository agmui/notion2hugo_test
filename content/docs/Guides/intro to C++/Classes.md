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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HI4Z3KY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIa%2BRCE7n%2FsTdwIelzT%2F%2FAgyFYtpvtOglfmz%2Fd6UwNbAIgcht2D018lfMHtPus4FQx%2BcadqG4MhDyMmNC6DrpK8bQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNQkAmi4fczza3yQSyrcAy%2FZ0FVTclkYyvc6scPKRz8crdtKYyhz0Wy5hEWXNjuut6bAKN%2FhPuuVJgJtMMUZzJBYWHs4cXNUMg5xTKGRPD%2F7UbZQfDzA0qa1zunjPCHHwqcLFMV8FgTuN7M%2BeuoSSmBzXe%2FHRZf3enOv92Y5vEJFXbyip7dUUkFquIVMwzOaLbqEyoUueExet4%2B4r3A1eZsGIqTJKR8GxD5tTdpecmIbX5iC6iQoY1aLBJLn7yUxPBy4XPc%2FikCYFhE2K2%2Fr9JXiSzMxJH7lcMCobvtMPNCSxMw24NkB8DGAscvS6xBD5yusPoN%2FpuPHau6paFC%2FUkZfx5y0KRYOl9Ruf4p%2BRS5%2Bs3YoPjqBRyqg%2BtwMXU1jGY5aGvRwrh3dVdrfukgdYoBta5SopAmkynSKuCHXTiaCJzh7ls7JylZTWhSqgwfV95uGB8HI9XUq%2F9klmlxQ5DChYeqb4Fut5pcFAGvGdiA4VIJrGBDaEejqMgFDA1D8TbnBz73P9U%2BNcK4eXauXt3fS69h%2FBkPSmleT9vh%2FImZT1LfPDMH5rxgOlqQgWbcQm7lCJretQmh9xI3ng7ccLRbScI1rJxWFJn0v1PsiyVaAqlNmZQzdNeR%2B6RHLYx7Kbix%2B7TzovCnUNoiXMNOo8MAGOqUBs52rLcCvMXQnD1uQnFHoQonPCgKJO%2Bl5te2xdd0VinQExwTJKVSvQTd5M%2FVU3eRlM%2F28hRKXOlRPW0xxd%2F7tIjTvKM1yd%2FrVJBamwm3T9Fu8chNDN6nA9IILwwAtEQIVbU9Fh9eR%2BWdLM6CaGoV4zJIvykvojv%2B%2FYOL8Wh8vv0ktGMHpivNArGt7pNKnHmC%2BJh4PgQA1LfhTtLWF%2FjNXfFgKI1jB&X-Amz-Signature=42295f3d9f60f76b935138699fc21cb3c7f2d95a8af6dc2d60a579b7981e44fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
