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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOMQNGZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDC1Sa00pYnKoGTg5kPPo0MOGOFQGf%2BTCMzZVWgsurs7QIhAKMMGsk79ChI7qKOz%2BUuW8KzSV%2F1FztOTMlbKhyYfGZhKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk8kgbl4mXCGB2rYwq3AP%2BNgtej85bqyp5FwjRIREa8RLY9l97GNvMXD0tQoU5PingNfMTxhvLHx5jCnYSxsT8I8gqqTIZgOiEjPtkiv8ZGeQTBqPvperYHwh9IR940rLmX60ALj2LRgIzuuwqAo1f6F3Yx94Mg5qQ4jrNygp78ujBlrVEUN9UZQ7Logpl4nv4CdPwJNdlF7ap%2BnOsTZ7Ml%2BvSdDdJ6sJvzfzN9Y1hk%2Fs9brIEO1T%2FyIfjl4JY1JziVQm0vcrZFEPTBJOuX6bjqjNU0Qng14toPmR0Xz8KnLk1imic7qezIc2jB9QwX7nVYiqLOlZk8Qs8NFVI0AEz68IT28FMhk6m9pdKP81Cy1pWRaWSzKXV7zu4rFSE8LCm9O%2BexWo1yJTkae9M0Pphl2fEZlmi%2FD3OOC56BHOoq%2F0CQj3cIhXy4mcoFvOyTSWvHkgkujgIn8Zy2z6pYQiVsPZsran6cW5nMCz8AWwJut4I1ayh4yRtWuBw8UbZWLAeRzFp0UTOO3GZNGUbkhiAMjjK00Izu61P83MFFuT%2BkbCTUufxQwIR7w8KkyOsXbHTixulgueQX7EZHzxRBR89cwqrYgajSyehKfvm2cqvb5DCTrbCvLq0VYW1AuC9bmdiRwYrQCW%2BJfW4mjDkqN2%2FBjqkAY5uYznLo6BHLhICQXpOJMHGa3BFG9M6nMumyhKZLXsnAwBAm%2FBisOVcOZA%2B0QUW37eb6M4Ma6roCnSX%2FfR6DK6%2Fwa%2Fv5YK6L6J1%2BHKfuw2EpjmZI%2FpL11LjM3uSBanmMFcMs8B8jdokkXNwka9EHSExMG8z734202uwtxYCS8%2BhHUEVz3zstIF9KAmUrk3xfEeTp7wd4FdqvlwamADZP3TYllqg&X-Amz-Signature=1e2c5063db62d6220d68e0685110a06f6ed5cc81f092361caacdc11c84816a15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
