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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFVQ5G7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqDSKXMjh1WVs3KhgGk9WZQq4uNW5Fyi6fjk%2Fbr%2Fb%2BmAiEAqeSTAkWq19i1C6x0BlF0Sl1LSUcEex6C%2FiKxCzSICVMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCVs%2FcTp%2BerN5ThDAyrcA9jcTR3DYYJdX7X7XIUIpEvnCZPR11%2Bd8C16PJvwqVyihYvR6SEWEz4dkxO8RZb4KlxZHgLjz5nbr52QGQQcO9FBwvJh%2BcSD82RvPwW4nb7X5vqHnFPgyrUXFwRlbgx3MP70%2FISkqhzwgGUgVfdJplea431pLHRNmLyK4wJS6HaGVVHJIV6BgfA3qCfWIjGf%2BkkqWuLzoPFnZtKRJHSXBKynxqDsQ89%2FBVCZ5CAh4%2FRirH7fP1zzi%2B1w6T6g9nDG12FpxATnKUP7BArMUWvZPkjNq4S9cSZBVGuL%2B3nw6Ue9ESfKR7xGZQsvITktZyRCUoh0mBjhxklKGqxDdmoJbNVxcAM%2BCJ6tvtOYnqwcAB4PnO6ESnsfrd7kqYlQlQhQ5DnryqL0mky%2BHmjMhgdooyQpzCVar7qZyvUVmH6JvgcNuP%2BwOGvq%2BJkjVbVa2DGXRS6gfhs0HmRfXqIiw9hHJYNm%2BsShryfO6JSzwr5wwvzcIjrIaysIcr9YoeTwzR0LnVY24nprB1sWVRRglzEu40P2v%2BX8EjGRPBwL6GCm1%2BzfasSESYN9TSZ3pZAA4rXNvLlaOTiRqb%2FQeOQfp%2B3hpWmrBy1WUzKwXN%2BtuKqqvMYxVRYNYk7YkhjmyrkfMOCXjL8GOqUB8CSFYcNdE337ShcJ%2FV481EdoClhPXORrWCBWCWvkPSunvd1kveqBIer70TcQuU0%2FgfPpYyv4FIMVyPRrOZdYxkT0QluiY%2FpTZILgt4zxtrT5t%2Fs80CWvylSlvtHEZsYQv512gOfMmiyuxjEN7vlQhLkzwhnFl%2B%2BKnnYHT700kcLWLSMIdVfPD4Av0SR%2BJ9WJDwE5eTk%2B%2FRDWOEXBG4O%2BWjHDvPnk&X-Amz-Signature=412538b3743646098daa654fca3a595fc8d7e1bc32543f0abff79c86afbe0d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
