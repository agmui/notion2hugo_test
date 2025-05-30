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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG6APKY6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ScB7%2BlOuQA4FR5YxOxJhAjyEQi%2F5rnpNGwX7rHOSTAIhALUBfU%2BYeiXwrWfblBCbF8Yrt8OUWgC4zvJAtqTHAj6GKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYHkLxB%2FW38GDG4gIq3AO7Go5nnGYQWyhIqcLMHV8axGfRb5yf3XtHFhzIg6kYxEVE0HNNiWfFwFiAcywF%2FFBUDd0JawC7MnmIOFkrX7sm5E8V02m8jfUmgjNdtQBCnkeAZD0Dtl0ZmO5hKfmqnqn5G0JeeL9kqwCxjXiT1HoCic2E6EreK6wCzREMvOP9IzRK9nmwk4TV%2FxNIYgTMlduJEtr2xNOfFg9KW%2BkP0QSgM3QqzXtLjy89Ffln12GH2bGg5T5tr1%2FsqZ0oC3v5STDROMtxfDp7UPyEJSCGqQXsrVbOUfFyR0e0ivLyQARlPMxpvvV%2BSpVjYatIy8ItEJTPcoXdjEUcTQgBOiWTiWb4kAaF3vvyf247EgUBkUcEUxuFjjYEvMcjf3p87abjuP%2FdqkGwRnFIUUZVv%2BebnKqk%2FoeO7d7k1E%2Fho6oxL7KIRg0Ks45borm8ih4fBNgJTcGvTfb8RGP90AOdNYu1fGVOFv%2Bm7P6JySmvpqxlj1jJMpjIAcyoBLogeCs52dgBqbCW8WBRYgFn%2BLh9HE7epRBy2ThmP84HN4edK9jY4c1IXBZXRgI0bl%2B0O1wd5tbyuISeezUPmx3MHRkgcdbko%2FteBTyu876mxukqNbMqGXZchRen75LKphtb67sCujCCguTBBjqkAb4nf%2Ft%2F5WEAt78HMQkhMwJ%2BM08%2Filo3BQ5wem%2FukGh3ivRzeqR6Lak2N04fLMXjt%2FM9dTok%2Br2fyd8FdKmqwYmm5ZfEOcVBg394Ca%2Fudq3CIugoKyHjv%2FQ0vawOf99wNO7%2FQ2pU%2F1glqJLPjhY4G8677bIj%2BNi43FzzSrgvpaUnakUATPthbafVcEGmmnIwMsES34PpEddCysU2DjvSnC9Ob9de&X-Amz-Signature=a44837316f76a7b37ac4aad99a17e9db0245ab5f16f71ff35f1e73bb632ad8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
