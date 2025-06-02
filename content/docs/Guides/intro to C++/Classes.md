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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDJBYPH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAsR4IU0MCasyDiCZwHlbJuQ0jsQlsTPtFtoifAvJLMkAiBwn4fLDMtZfrdUc5S7TyduErKcIGivH5wzJN6QtFeOqSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzIyUtaZP%2Ft4pwO7KtwD3ZCwNOIB8mNRcwY9OaRm9I4wO06bNY40J7FwTfIgVUZq4IRXBh3qg98ENdLQaEBf8TZ1pbg6xewPe2I8%2B9sSxQW3FR1R%2Bwd7Ay4YTtUCO3OVnVm84A6ORbDfnClA10zTDQzMgb%2FRuKEQrUMll0i1z3ohXtSLyfyPkfal0P1xxAT98nEiVsidG%2BfeLDGHr%2BliIUqFtVk9ZR6wz8NojcFFvsdQ%2BdlxVO4IWPXv0%2Bh4InR9C5eYDIHeOGRGNl1rwsOrlOmTlSgmk3aqI5Ilf2Df%2FFcfzhNw6W329oNKVQpYowIwizoti1BYua%2B%2F0%2Bx98t%2BGDyasX8R1vZTjjv8FrkzxLUl%2Btj%2Fub24jWVYha1FjcX%2F%2BHYjaY9qbcQVYRqMHE86%2BsPq1V2xk69ligv8Xny7ScaAZXtthGCjJ%2FC6VmvUwNQP7tb%2Fqt%2B9uEa9lx0VghS6Kvmp2APs5nIwdLqKgEpMeKyI%2BgX6YJYJoi34ZtqadzGPXC%2BC%2Feov9YkEmVXbfEAysYxecltaXV4i2XUthqpLDo5N5EOq6yi1zVvEKAetMQqEvGttsp6P%2FnLViKr5uiPm6D6f%2BSSpv4fwZP416stmCI6fPlJQISdRvs2yZcfrcjXiNhTTSxXduY%2BrhNEswlLX2wQY6pgFg46dnuTEh5bewFjTuzSbw30W1y3PM1nAGgxnF8nK79c9U7SWGrDY8JzQzO%2Fa8xLSi66Hh%2BJ3KAG6U2Jq5D5PtXb7Rz9Ix5GyqD7b5yYxTQAhK8c28EgWzLOINuG2V3ZRP4ljSGa1GrIeM3Y8kDefpyBa9Efe7hDluGiEIAXA1%2BJbZTPoxirAAsV1O%2BrcqVun6xjPwMcw2OX8SoZmtR36divczsIQi&X-Amz-Signature=ea464a97105299588e974afab98a83279c11d6e73fbff9a5addf837a55ceb235&X-Amz-SignedHeaders=host&x-id=GetObject)

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
