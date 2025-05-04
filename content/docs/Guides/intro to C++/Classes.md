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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQW2MO2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCwlEvfXhA9rz4p82WSKHB6H7Wkb5aKnhtrq1cGSFqxswIhAN6uKGY8rNv0G2t7kr%2FuL4faWh8RSg62YySG6sfvlDozKv8DCBoQABoMNjM3NDIzMTgzODA1IgxqXLwOHM30fwS2%2BJAq3AN%2FFvT7CdiznQzWi%2BPI6h0xKy7A2wxXmFYKRT2o%2B0TtU%2BbqQ167eFyVUFdswcFN%2BSXAHf4aW53CL69Hfa%2BEK%2BnyowztUWf3OwuzgFMC7S3ySL9T8DQlKNmnHUZSUsvlyqyl5wwnAJJanoEz64Oh4%2F%2Bbwb8AJAR%2FxRi1RAiMYcI%2BRPG9N9cctqGq7tfWgX8mvsZixbykHAUp1XvN76FsKH%2FmuTQPLakThRhlcY2gTy2lVvstHEC9VUhSRxJ6xmemIsyzkL6Htl4XJrG0tWO1hMHK90W9JIUuudnXrjBb5AEzWi9BJ3boGx04OuLc22jCPr5VgmPyQwWMLotlfhGdxZb3Wci%2F%2BLczzlxMxSTLh4wYtVq3JisENlwnQMyZOPAv7SVnIbaaF0oyZ%2BA8bY2bVim%2ByG%2F2dwTAMMmYUoqVku4d53R41FL2EHjg38fROf2SnRahxoriArTYOASYQBqAQbdenciTlD8AB%2FdlBjq%2FOBrDNnbidax%2BZ4fn%2BEM5NCe4xLnqg2VI4JXqXoaLLGVuZoCee7Gok0rOiZZrkgghvW34UgHecpGlAHmEywFBx6Efld2gkDzzCcs%2BRTk1Iaz%2B%2BVtyVMhsBa58dpMVKjMbIsmJARZQKobqxFXg%2BHGusTCPu97ABjqkAXEMvyUSnlUYSaamgkdVNuZhZoRq2Zx794uL2z0V88sAggY%2FxEDlGDZ5mQrcz8tUC7ytHsiOZHjZdr7YjwkY69Fhp5VxYpNFkVd8njo9itbqnTDpeFFZvG8s3JssRjZoieIHsIV4icDjzP2SWsRywZ%2F3Wj6SRVEmhXQOIVObU1c8umetcUyBy%2B9E6YszOiQiSZz8%2BAQJjlWUEoSm7UPjAoK0ry4G&X-Amz-Signature=bd7e54344004a45100dfad13dcfee3f485f21b10e0a9dda7a7214f89b962c6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
