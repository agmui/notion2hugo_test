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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZI3CL4D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhuPiyqqZsxhES4ag2Hbb8KlVYQNhs5D4rIBBPuC9UQAiAaRnby11%2Fp%2B6RVi%2B2l4Kpss1WQ3TcHWXYlf0x%2F2YDKmSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmCB5bI8YJniujKqzKtwDI60%2Fxs%2BEdKdZY%2BSyQatRjJ3PidbFZGxt7SXznCPh9VI0KtXuawgIXkrvO1KEYi5B15aLI4TWz8z4BuHiGcpPj2sYK%2FAmniPDd0tT%2F2precNz5zEr9GWkXsUVfHVevqrGWrIHVyQs2GMCFFQOSKpE8pg%2BAoAboVlHQA7QJpPvdhhwFclAiNKFfAneawJ866RuDu6pIQ%2BMmY8pQX4T5y3i5XR5QeM33eixfLlr1oxd9TVBmv4oD4bAAU0yrUQAdGj2CFGIkzrf24VbWTUiAE49yGrdNOm4PQeavLRUotoXUWASECtEBmDpRSko5Z%2BlNmxnly3bicx1N0HeV6%2BPVAu499j1%2F3sGp6%2BfGF5g9q9yEFtcc2uofohhyzCADAq%2B9IoqHaMjPrOz7KPsjbVcsxLIGIwTQgJIvCXN3eHQHMAXzv%2FZQTbvBc1MtUiRR0IawsddoQMk3g7EEfWIQwLp0EhyKeKUHqgyvJDSE0SJj973rJHo7YRAhFzvW4OoBYROAPIToZH316jCiRD9x6E6lJlLW0CW%2FXCT8H8chcnn38ntO6VRuED3W4Ik8vDdmmXgU%2F5b0L6bHFfn5k9WGOIVyDUXUD8s2quwVnLpXby2mWqVqouryPOfMJbdKm8CSsQwr%2BDCwAY6pgHJGApqt%2BDS2a1mgtOZ%2FkgA3aoy4NVeaBi0UjOnFJPSg9kRZpD0EKK%2Fr0e1o3rtBkLiAqQTbZEr1rKDrS8LusXIW1WNqlk45hfrvJTv0QZrxhZmeamC1zrCH4JG99421lwPgoa4qgDL8N6RHnoTn8CjM39LHPZRqFp2jsXF0jWQYDqFhI5MzIbI4Jfw9LlVWprPxWXJqIpWOUUwdWJTLQnZu44gEvoa&X-Amz-Signature=be5ee7be07470007a983d4179420fea1c2a892649285abb53b1fa54978260075&X-Amz-SignedHeaders=host&x-id=GetObject)

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
