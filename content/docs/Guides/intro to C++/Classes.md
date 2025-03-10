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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNUYWBT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICWQu96jKREd2MlB94NC9iprSkXeqEDVHElkiFfpm7fzAiAshZCu0uYExLi3AZTN4Wz%2Fg4Mn%2Fn7sSy9HyMOQYNXlRSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKQFjY%2B6hG0hlPu4KtwD5DbQvAQZTzInD6jUrCHfmT%2BkRGSflCGNwznpCI%2BhDwGNHE1g%2FBYw%2FUb6rA8K%2FXzrgb4I9%2FTlLNt0EKHyyEWB6GlMsMMzUShYwBV%2BVSgLU9SUmH14jj7PZoInbjxnZbVywIz%2FUN6OrRZvgmHIPWlElu5zrJTpqAfrtpI2gJg5YRqGV6nZZGjKKtwCJ5SOllp%2FU8cmBxMu6f3GQW5eUQDWqSUAuaN5XEHsA1i%2FtyxKzOZD435A5LFCXn69IP%2F9gestOb4i%2F8W%2BKQrGnvNCo%2B1hnAFF3rDYufDH7jPFi2FHd9QlqZj6ImsVSp5snC8j1cKbRYrFmD9G9MTu9nmd4hNTpMjX6NeptljgpxxzOg6CHcRF55EAralgAG6GI48S%2FmuJXOun7qyl6LxI1Q1LRy8qxESaZTR5wVqyT9W7NilGntZI%2BQ24oyu0XBJAlOuy2Z1CwlfDYG4AYDXDmUIpPNLXR7%2F82kYKdjoSxRXcq4MzZ2gAXpl%2BR%2Fxpl7FFGwwLjJte%2BmjbLDiTV2cb5KjKK5EZFFOWnxX77B0zl9ct%2FPkgBeaqZi2Sy7vKKZzii9%2Fna0GEarrQdn%2FBtCV7saVoMH6HxHV1Ffq2YERdvdFs3XZ4xwbKK%2Fft4RKB%2F04DqwAw7qq8vgY6pgHb7gVL5mNsPk9%2FoKPN28F73p0cUDZzn29nUhdDM6CxHt2n5FDuIBwt9XIdaSKAncgsCVYnH10QfhLZR%2FuskYp1uD6898CYbrpsWlo4dK9i5K0YdUFoNxaOsPd3PpVEDSEIU%2BGfwSsPWXxJmjpDx7aG5E7m9L21oSJZanT04hQIhf2LLNSV9XyKx4fajoau1a9tIkXl4QhNR9%2FICBXqkvDMgGr8cxga&X-Amz-Signature=1e4ced5bf78683bad20c62af146736079eccb341259401b7d9913ccca413ff9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
