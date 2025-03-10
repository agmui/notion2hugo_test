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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICHRKNE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFBcYbclVROJEZc5yYeSxz%2B3z4RGr6vNO9rFo7desiNRAiEAr6JssFCUscoRNwOUMLI8Gx8OEIImoxvNZY8PDmbIj1kqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHweWQ%2BhncUBTkNz8CrcA1iirF6hwPkQg6TyXOi2iSNbZ7RUuep3Rf2LjLo%2BdhkuCT0Fm14VFZL0W6l9uwa2ADvfBWZjxJm8nOTyINzvozu8442YPWbtCUCu%2FQsdG0JYO87oKXcbKd3G%2Bf%2BBi6L2IC6Ydy2CWa8Coa8%2BBljlw2w3PqAhR9vuAwuwR8Ul5epLs2Nvw%2BwV7jLG%2FzObMbuDWfv9py3xx%2FOblZy7dcT9xHHDaIcWEAIRKadp9o16PvWMipTS%2FzK%2FkqjBZ429B%2BAslMzar7DTDqZMmvCBdQhyGAP%2BoxZrtEiCWr8O%2FeZaAnUFdN%2FTJ1yWqgLcyfqv1yPhV73dliDKHaJzV2Z07iHIdKyfaS0w%2FOZW9dOjgp06qGs6fFQ4M0S9%2Fq7mUnpWsGk5eV%2F7Bs0KPIhSzQpd3drJACKij44oAjnHTZ2WtVIAxL3Fivrh84c9AEWLy6GHpp2gilzhOyF1PVEcWynYLdxdHJekSbTpHz%2FlMhkWkaOw2jlWbqgLoFJP8zJ74G20Qs0XOkfC64%2BsB9TwrXjw5vX%2BjK21LdgpQF5TASm5qvkVo3Vxq5RkrAHEMZGlpbfdBNV4c9nKqbAmIl14PmDDRnDgY1zWuyS90qI5rUU7jQUfE%2FLI1iEJP4AoDB2DEw94MJr6uL4GOqUBqqnE9ieeCSqpUfflRO0%2BWe3av9MhID%2FoxX9k9cqMZufDqB1rxus0Y2ANxj31bvEK7vQE%2F13kBdC1%2Btsf8ajjA%2BOr6TudQM3c2dFMa9%2Bq982zXqr5kOKHrBewZsuV6w64Y8NyePRT7bPLbuxW5MdILlx0WNOZTSov3HibonkbzpvOYuIBb%2FgckFYvIKbEpTIj%2BdLGupjvAG2mWLLKLpVizYxwvK5y&X-Amz-Signature=c12dbd1b825f55f5c4d847437c852ce0056428b6cc7bca8ef5591e7617a5b82e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
