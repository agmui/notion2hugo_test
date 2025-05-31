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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTIZP3T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyFM7FccSeILA7Y5r6Odyr0dxvLk2beEukAZXUUG1vmwIhAMajgokGhKDdikuYZ99hkHnnT8K2l0%2BJh59Cm1h%2FLEr0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMn6yvqH9Q8DhfAfAq3APg0Ouuty87HrrQKSRiPLB33IKZKrKkX1ErCxKgI6mpl4x0g6mNdZHmMka%2BhJMyOSlBg80UoGzKmYzZ9Nsaw%2BO1sE4BXKJaoITerKa2FdjnmOHZWqT9Y9EtF5RTgcZWr4%2FfqLBepaMCx2cWfDfbIXfesWY08VQ1y%2BI80OrpBZL1Pio1Kt1T1uKHVLLiMAN%2BTQ7MuTfH5DwmwY01h4NI%2BlXdsXc8q6bz0ngVlPvigSYY4qY4b9pErID3%2FlWy1s52438vhW5zeOtOS%2FEY8Q%2F7yUZPK6AwFlWBeIOvi%2FWDDBg4Xykcols7kN8SyPlMNilNqG8%2Bi0yilohSsCU5lXkBXxkZQCdZvIEVadkQVMrqDclq%2Bp0cIJmrKHTg56yYGJbJiQXTNYBJ43gJh1BlD%2BYVX6BPG1e2gBiAlQ4Egzi9YsIKkWzETfzw3c0%2BinhQ7lI8ETTXZA7iq7haYWH%2F7hdjl7NDgSpPKclf0jYX9XfXczL0nXRcwgHIJeIWbMnVl0M11NlBXGkM0lQvIe%2BvG%2F2bp1XrZrPmA%2BlSkBrkh7Uiuom8Ra6ckG%2FEUoZxLxec1nqjvqyUypX%2BrcpyV8gVQNplqLTfeAz1EbjkUwbP%2BdIKPV7wyauVpFL7omOX5i5lZjCRhOvBBjqkAYWZeCXEwwkYn9ZGG8VHcHjju1HCTihOHdUkPBCzOi2L%2BmSzKg%2FLoUlnt%2BJSRJChPqxz2g7DHjTxHpXWBItYXUGs8b2xYEB7M%2FrqrW2r5LtqN3oUZ7sGpAe5V75NH3iiAWHSXxcPRpYDBcwaBCelKb0iwEH9H%2Fzfm3dq%2Bhc9DkFgu80oYB9a5rxuswTs6XXitHNScE8Q6J4AVmo1obdnhaZ0J3%2BQ&X-Amz-Signature=abc9b7476884ac667e0ed244a2f96267141c7d8fa86e1161c028584a159b083c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
