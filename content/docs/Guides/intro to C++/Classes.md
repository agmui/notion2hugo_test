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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65FPOS3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmhHbHRbewH0iC0OVWnUsaLh9F3fZjn7VnYp8hMIt1vAiA3Q33jrsvpGXcjUF%2B3exw4w2H4pH5ey%2By4WNGc5P1JFyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5MF4XWL%2BbA6TvPKnKtwDrx9LpbLR9q33e5txbXp6iSfZ6CXbeM32LoDFCzAqHFKRUhEhoDTIJtr%2Fd4n2YvpeDPv28KED8oeaaf%2F%2Fu5%2F6aN1KhlIXF91ry%2Bf8WDRBAaJbx%2FSWrmBLoCWpBTKh2c2BApES%2F8guhm9WgE9AJ0MUpcPwm8lx40u%2Fef%2BHRlte6KBKAGESfLe7ripSsyCwQHkcrgq2ZNqxjc2ahxECYKZkJsyzYhcKGgU%2Fj186F5NyCZlCDS4YZRz8nmELnJSk6h0K3DePcKxHy6dnzh%2BBjhcA3g8FBrXlNbjEZpqGCwOTeNM2qUMJMiBpxLtX01s%2BEMyOeb0ncgMa1urKmf7QdTs2cqN6TJEWACiupgNHH3kpyZdXUiiNzMxhd9TX1%2FPkp%2BShT879VbfSHF2EtehxPfB%2BQaUa89hwdGwFM%2FcItY6yghQZmA852VfB6uegkPX1mQXgOc8gqhBYof%2FDKEqvik9%2BmaF03T0IclShhpb6QiiHJN%2BWBHI517oySsr7Xqk0aYSJjwe2umfweeswIdsUbBPHrOEd8GUholvV3E52katMFpaGFA700rBQGjnqIYonk65wEugHhMH2VJE9BIG6vqTOU3wNpMbZ7nvjKBjp6tuyJP0W7CqV6Esp8i3feGIwqq%2FzvAY6pgHypK2kbINfvHJySB%2BKjvYON72d8PpR%2BfSePu3EzruZUS2sW8qTXqb7K2ZfvOhHf0itQ%2FX8D5q%2BtDX6jgmSsDmvqHz3uINRuJci0cT7rSlCctPeww%2B5GM42K%2BhiT7%2FyrxAOy9MKR2ZrRqqdzPAstTQrNgRLrQWQJs8N2qZmQdphKH9EMmuZlmrVg4XdxPjk%2BJ84FyIeqK2BlvzXIAkD1dxjut8ope0A&X-Amz-Signature=105367f61fec7aa65c750f381423a9fec7c21f5d0c977336f1091f74370fcc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
