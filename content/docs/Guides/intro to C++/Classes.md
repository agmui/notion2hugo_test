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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKC2F5E%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFQ2yuwrrMjyk2tSN8k7BmHIOmRUxdVPo4c6QEtPYFYAiApPhmT89pLYC6phMs%2BCOx4HS3wFi3jmWmXy3YlJQW86Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMxzB9wxhqk1P%2BJVrXKtwDBGD%2BCO47RA%2Bk0aXzVB%2BMGxqB6dgm%2BelQcfxx%2Fuuak%2BAsB%2F4AjkTzXp5hzSsME1aNUWVlKXJNoQlsxXwdglugm7CQf5zY8wORM0Vj1BYV43oRPZpbV7A730O7FLoYmZgm99ojG9%2B11OdjWniAvCNR4rGJ2bNjpqGRTGKwYKkygCElb5pHiBYBvQIpSKA4qWZ7%2Fv7whylcHzol%2Fd85D8eWNwyGk8pilXFpcVKX2accPXcuomRhy%2FbdTw7e3XKXc4Kou5soUOVjx1AOWq8xpOjNzQrEAKeJ4qchBQo4KhdH5cSVfuh8q2m9XOCIN7lV7xysidI64%2FavZUldUrC5eerPylab08jNsh4udiGrOCXl5oPpdrVGTZ66VIsI8rOMpbTIsLHdkwnKz19yYK0Ix043wQ9sMpejOw8pfjlCMzmzm1ZeUaB64UnD4T37CXyODORdYWflaS9QXUHhwyx9TAWKez6TTFx9dgXDeQPJJEzgsXN8sYFXMXdsktGzTqQRf2T0Dn%2BRTIZYgX9kS1dQB7du4OejMF5%2FcZV0D9fHJFdvokFGro1iGwlZp6YwCfjaDv54I%2BXqdgOG5DBYp%2FdvpBrW7FGObBEVPgUpf7vJqzu7yMLQOxCYlBToBQyBCD4w6PXawQY6pgEo0Mvjx8EfLX8UkMdRV%2BqSHWWCTAFPwB2bLFXZtuOV2qBHPfC76cqpVrpKm8zFB%2Bcm8I3M5C9XMLLrzcBkWLuoAFk5990E3FM9SiBcvJeWxe9H%2BydigEBwSMi5s7mbFNJcwoLQA2ZA17fUZ2BkIlP200V9w%2Fuc9fhq1xVQkQ2eWrZP8K2pJb4tqRqyFpAxbv1dz66GEDbugN3aiprGFSIbyHqAdb3S&X-Amz-Signature=71db6d3de39ba0ea9e858c4fa238cd8dcbbca406bceea67674f0b40ccd6b1644&X-Amz-SignedHeaders=host&x-id=GetObject)

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
