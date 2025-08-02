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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCD7ED3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDojljej1t2KXvpNK%2FM7Gp3T0Jx4z4TDIQiqkN9ACm6WQIhAMsKZDTo2%2B6zdibpsiUXzxlohwSXr4uJRc25EktY2kP9Kv8DCBYQABoMNjM3NDIzMTgzODA1Igz3%2B3XhNzEE5Ttpyjwq3AMYz4VyBc3seZJh3q9Q6MNx6asG9Sk%2BKOBB4Pmlnpqe48Sa1sz09PwR0nGzHh5mFf%2BHY88zfT35EFf5WbA2vsbD%2BIn9vbTRZUkWWOJyKPxpWgV5re2wq7X3YrCME09s%2BYGvOUK2HJpvjydWtp7hwyb6K655MQ11aNL0iBHUMwyI9OTqHzPbetYmj4qgqT56krnW31GHlorRpjP%2BVkIs5OJS9dE3OYpgrHWYDMbKzUHp8UEXrZ5jI6JPo58JciqJIi%2Fyq898tJxo0CoRbNVnJG0xYM%2FLrqYI%2FAEK6cfhknPZ38MG4zRzN3KJMnavHeSeQaUNq3Sm7QwQ9uKF9Hj6YPrsnUwhP1tEGyHfkQpO8VOacVNEnR3CIvCewVcFFoHyIg%2BV%2FeJ%2FvowxS4RkbfQTdv3cZ6L7vPoszAxqsnE2fVMB8wvWF%2BjjOupGJStdjOnPkABWDBE3tmkima8jFooI5vnBMSafeHJn14Jnq1O1SmaTZsjOR9RlL9%2F%2Fk2E1S3jZL8n3HXhNh0oJEv0LcOLEryVPSbF5mgzliyNAtdb7KQK%2BHB4cOWvTQ5S8xnGBRSdtaD%2BxUGOsx8rbwJs29x0M8bp5R8OmKg7of9XfXFwK9uZH%2FM6zJITbKRqClNf0yzD5krjEBjqkAVMzvPB%2FJy8yXAEb70%2FmLmZ%2BqmiWZvP1%2Fxe2pDl1kWnboMZ3tupcheZ8wr2ou6AzQXYmGT9zeunjUSn7YzFq%2BKwoPQJWLsIuVubTUlvzNkedgjoc1%2BZoSWXsfFzHqckNWxbvk4VWHTskYK%2FG2vH3HAb0MLL1RWlkMS6RvMYKI7%2B7B4lEJKnMQMI%2FIVtEzhP4yAK0%2Fu%2BmasemINBD4yEEPgD%2BcL0%2B&X-Amz-Signature=0863acefca00b7c8443c2beda810ba8c4528ab8d0e3a356bfd9b9c1a7da8bc4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
