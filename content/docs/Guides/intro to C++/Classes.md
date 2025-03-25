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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E773XEU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3NTRqpkPozMtQn8q90tQdf5dVGLQXoPykAzwl5V9bwCIQDlZAE622CtZSyA0xNJH4fivKC3U4oWRAhjzKIMC1Bf9CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc7ODzTKVMI9WX8FKtwDkSmPIF%2F4fwgEUsrYdO6hHl52ttatQ4J9ou1RU0EhNCWQFOe4pi1H6CjXI0t8CRwZvB5Xk%2FJ%2B784e9spl1BLak9BWMq7uIT97R%2BV28cleZjFQSPBHm1d8BET7cA6vK%2FsXam86a1TON7E23%2BsGWYA881v2n6uoj5pNgCcwON%2FczgYjIcdb6ipT7WYuvNLrVLzVXQMcJkPreNPRud8US3bcrcGe5ujzAvNY8sfjD4%2FGq4s3vyb7MvZkGXnSzP9gkIHTnJYYQKXd5z0383pejZZaWZor8TNVozpeouEii0RO9p9mm5QauAbkV%2F%2F%2BJOlW8zVdDkm%2BCyGHPpSMrWasBs82LWqNXEQm8eG4e%2BGJgHFlCXPx88iwufJnkk2QD%2Fgbm36lDgSr7HHkwOUmtVo%2BOR7SZ0hQy%2F4XgeSgV3PxzUwKVd1WNqbke5g%2BcrFSGfKUV%2F38FVOIPDrP54nUOE4907ntXqA23%2BfNtkwyEEjMJXlSxTsuZBDNSoqy7e1v8dYSC5s2BZuHBHuEFkKOSTgUZdfvZN79RFqAjsOAZNPDfV2SfY806hJvTyLfUz%2FyfTfhVQIi%2BCSM9SNilyyBCMag0G9YXMTbQPFx%2BQg6F7FeiCASnJ10wiEunCGaq9c6Cl0w3bKIvwY6pgFS%2FMFc6zH9ntQtTOSkl16SWePr70NZr8cRSt0SVSEqmjtqDeHALgSIaVaEEWplpGJj1Dl8MufZplM%2Bz3oxsHGbwoYgiWoz0ImN5FZUHTFero%2BwJJUgAuqFz6ueCMYnTO26YdIScJWeZJ4qkuawyg%2FCk6k18BlwjHTR7%2FITJOMiVivWgk9M%2FeJDc4q%2BHYfOZ7%2FLLpK1mTZ8PHDJvOf%2FYAPqeS81xXHh&X-Amz-Signature=413a235d984a63543d93203038545c054539f254f0ffa6c04f83f7ab647a201d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
