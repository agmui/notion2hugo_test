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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVU3WRB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBG3g8Uuj1bUtrHJ7MoxSVzfoE27SwsfMw494qUbY6BQIhAOXQyd79cBhb5r2Rkbs6vNimv9auls5DWy9Kirbgh6IlKv8DCHwQABoMNjM3NDIzMTgzODA1IgyfMuKcqZ3bT1%2Fahdoq3AMFREj76W8O0fRaXtZd3sLrKYNHMUhMwVvzuA7H7Nfl6pZofxNryjPZ9HMrEgUAO80AqAXMhkXgPIOuxTxkAAkbMG8V7MLY103%2FRDF8n2HxiHzrJxmkTcnoPiw%2F603pjL%2BH4Fq0EEAfUY%2F0yCxhlW45G%2FANL9EdzQZcUAkcopJ3p36d1lfltCg%2FjObEc2wwpJDuTIZTvZzrj249%2B4AgY%2BufLBHIVYtz%2BCNC6%2BYvQl0WgIV3jwNlEcfeoa4woNHUDE2%2B5vTR3tYZr73TKL6FdIs4f%2BUH%2FUYOyM0nM6kVLqT0Sb8XCkNwB9w3Ec6PKKhDG00gOnjcRdBjgXO8iCZR3HZzYh0qyOi73zqur19I6OvN33Zf4JLErbGKdB9YN1fC0t%2FfGtwWfnqAETydDflPDsBvjrkWbsA4sZQ6bkjVdUOu0xZAsb%2Fg89HBp1awPJkMY0hGOm71rJAT0eXogJwPl8VobNS3AVw5G6P5L%2BTF9mVHH1kqq327yCEeq0kNEDdvYDod9V31tf17hG24UfCcYHi4I6LmaVkGzPpSYjAk%2BIvWXWNSbRiY8W53Nog8UAYqhaMQrcL9cTY4vWOiVtSbq729X9zHTk0EwpBIrkJzZNHmF%2ByBRhEJnJ%2BhX82yCjD0lZLCBjqkAeOgp7AN9iizJSggz%2F59eQugltjJu%2BzE7Y%2FyksiCRpf57E1nVqI%2FbOdWKgKMKlUcYrWDVpm7%2FapLYWnoLBkPhTDCqPHiQaowUIb0JqMgUsWUJ81mtcEgin3Q6btyG1yNDjPFVBfR5GFRnw%2BbUuCqFK%2BeGBNaHH3jvPDiWJS2WLGhw4iRJMMROI5vEflmk49Fyq5bEnfXzOu6gTwmNxs5nLdZmHuF&X-Amz-Signature=2de7d91badfd0e08ec904dc490552e63abf227133448b4d6bea41961c4e94ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
