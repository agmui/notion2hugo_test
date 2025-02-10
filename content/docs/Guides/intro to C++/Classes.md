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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP6ITAL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY7SkcipQIf8Bv5V7H%2B8%2Bqmy915c9oIGnVE1o7jDKGGAiAsf6DwDkERzYhH8xPLs92D9k3ySOr6xujXMzUR9f5kOiqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79RU8nbwuJD3kz6UKtwDudOtzfIvr895raddFvtnfdhI9FOe04N8YedB7vHDIc6bTiJ%2B1NjpcSQdCDy4XJO6FMhBcbZ%2FggxgEWxwKzL3Ow7nKPiURYukUp76IsXenIIOfvMLPKpyxKeC%2F6QkmIoT4w0JCakhk46ImQaMMdXyvA0Js%2BhcsNvAhr3zmvsIpviNVF289txbnjfa0Ox7EnRZnurBVqAvT0AVIcFZYxblfvM9Y%2B9A9tjcLpwzhrAwB5ZNh5tH40IOOena7kDfp%2FOQgBw223D0A81YTm5EsZtOtZlgfyYRxtOugWx0vFy0e%2BkqXGcJCFktKdGcO9%2FTTzVojJAMfHvClzOPGUcjZ%2FGsU9T86kExC0cWhDz7hFZzQJVYE%2FiaIIiQ56Kry6NkFckHR0SmzKyNHxlzelTeuY3uvjHyGmBNatYY8O92NDBomBnWUr61teDMzDHCaQq6bdV%2F67YX9cI0rEs5BMFQ5fKnJ%2BwWpN4KmSB6KsVY412JlhhNSaiALtlFSD2wam75ILZk6a7dHh6g7ctpPZBSm4YoXqIu%2B2nt06hf4W2W%2Fpfr5czWw7XJj%2B7xxwGKTLoamSSSYGtGcf90xMNMt4FQDh9ESMWDs2Gc231tfdB1Dni270v%2BQD9BkGFlc6Y78IUwmZKnvQY6pgFJh0Tx%2BMoopzUenfM1icYRw0Sg7qeMRXTyICzRZikl0FlBfSNgVrqYGUMvqck2I%2FWed3vv8S86H7x7CjVz4HjCKSNEs%2FKvT1bCL3yNcP%2FJUyBzTWT3y3hx5RbeVtIL13EUrceWkOOAwMJqOP4dZ0Bt9ViqzWrmPDT13AIp%2FttTP0TwWJg57UKTYqcSeI%2FbryTO2P%2BsI5J4rGIbGzkwhqwjU3Z6tEcS&X-Amz-Signature=be20fb1aa9d2121d9271d1c7221c652f5d5fb9b66978968955241f95576b43c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
