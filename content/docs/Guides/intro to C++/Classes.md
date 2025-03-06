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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFMZ3IP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu96VBO101YFZAyEWUfPzT7eQPGuu4vHr69FutCjUhoAiEAyUd%2B0I5%2F1L8NhxU9h%2FR%2BxuLavnxNundtCY1VGYUZFgIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGK%2BqapeDJe77tfCoSrcA9zfy8a71nrtxCQJ%2BGigMapF9nr7Qg2cBzw4Fl0JRV1lekqDegNan1QZB5sNhd7nUWG8iHb8pjtvPejoOS%2BW7AAfsoU4%2FCbLxy0zI0mG0HGJlTNyu8sFoy7MFmhqOKlrFZh56gWeNxj8CX6k6%2FNnHkyPg1f7L9dtQvAK0SpQ53OYXdjn92vfFHLzuLe9FpD5ZRSJnSAEGCOe%2F1%2BBulpFoZ0sXnZqFfdAhp879%2BjvFhdkaYjR86UUYGAAJGynxN26GgiU%2BBwIbQ3upq4WKnFMPVuClW4BpqCBJpvIKD1%2BW7a%2B0K1BkW8XMjGTnWWM5lMANhsLUPdzJpsNBzT6amEyx0S9a3JJR50vHt5xyfVgwPxim4CbgIBRNv5oOBxIthL4RMZwYItYnkCwBxwtCTm8q4BJHWyFcDDzgZ1qXpovhmcQVlq0qiqAmalHXy2q8wXVDWfI7WjNdV4hb5%2BhkgqspHCuP11FLw6FRSIbOlzNMx6eCZ9ZvFHsqCkjbXzwQzlImddy3dkoeU3uQP9S9IwM23EnytdD50plz2JGK1q4jIZrcurd2ICv4ozeQa4DXIFuZ%2BRwlbR4JaidwImRs%2B7bUz03PVW6o1OM0PzxGR0%2FMxw8o1S%2FVWpvUgfjK8RJMNnGo74GOqUB6wosqHXjG3EVKAHzZDRDtPMdrzpPRnmta8mcFgX%2BOqFyNlrQx7W2qXdl%2BZCeCWuITUq9UmE0L1zSW7IJYGi23a%2Bt%2BWYFHj%2BXEFC32Y6PoyNhfMxP4%2FfKW9ndj5OcGxjKcLhYyRQsw3KyHL9WKLm9DJfsbHhYu%2FoEj1aePmWuGKw6x9Ja83qYw%2F1YIKQx98b2aAZML5ugGpHx8QUr8qxoB3QGwqQ6&X-Amz-Signature=9d55ac8b1bcb585529eb59961d780a1942fe55197569b27a9043da13004d9b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
