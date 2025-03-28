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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWIFLCN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUvnRIE04WYEznfz8iXzFCIPdrNyhLJLKYTHgTMhswOAIhAKaIEawSqdi%2FrC%2FKP4fsTh1qgm1%2FDBR4gTK2RDwFPAXuKv8DCFgQABoMNjM3NDIzMTgzODA1Igz%2BXNP2MIy7bpsdP6oq3AOBMAEPSYY1R2vOUPIAGrolKzY0nSmHLmRU1gMlUCydAiXgCxTTHyOxXJQEjzFkYcVlX1iCKlxdreBkMoEi7HcRE9JRQvjrWJDVHUkcVF7M9tUSntmPWoENoCXe9JQdNMR65v5UM%2FcOJv4XAq25oIVfBmJ2GwQ6OYBVQo84LUtMdGiP5kUrvT%2B72olUqFJVw0u5bCJQoiIUPJ5gQOBOcFYYCL3ir2oMyxd8BY0YKUoWBlwv%2FlRfXgsW5YSFX6vjaEYb6t5tDljwSSxT3tO%2FW2XZitYdHWpkv7tjGNYLA8E8NfU4sCRMCenfusfMzlvvHfpN0AV8NXHSI%2BZu7NJwpjdrY3RD6wEzxncOTTyCc9CKrMeEBHTIF56z2TJYGWVcD0ea%2FXl8pYcQeoDxOVMmm5W%2BBtUZh168CLfriu4sGELd0cFWvDXLlRJKYOYwREFKGcJ81m10xFyft%2B%2BawkTxVWTYWyC2RmDLnujKkaP8lfD%2Bauz%2BEDZZsJUXPDeKq6NJJcimxqSXtTzxAzNN1Zaxnq4055g0QB8u5bjiOq04GbufdGP%2BspbNyy9KHGPORi3Q4k5BZinVZxmN%2B5qtQkZ0pZcO6emS6P7YdZXXmKyEk4qh5WJG6oJqd1Ag7QzMHjDXhpm%2FBjqkAXs2ir2z2rnp7%2BwIcKzqsKKpI6GWd5lM6XShcWqGUYmlW212rHyaoluaT1ByBvt62SdpyN0EVCrbfkFOhXFsfLJvuiHSnxUEpMwVl93t%2FJporymE%2FHiWWtrjA6iPXTU%2FgOS7TYsVX9CraEKcdymiJ7U%2F1uiSpsU%2Bp1zJ1R8siM6mqRAvWoQASRjNQlOvILfdZakCBNUWJIu1vgCMVwlOL%2BiSySus&X-Amz-Signature=182275ec616322490774e87f75e19b4195eccdebf6753b63221d5389d9f00055&X-Amz-SignedHeaders=host&x-id=GetObject)

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
