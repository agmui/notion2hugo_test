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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUA7WPM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBLlu%2BMB0HGZQlWqb7e8T1J2CefrLN3qx9n%2BIYFqfyApAiAqDfsXgitQm0bcH4HGl2%2BjDbnpVX6ehTZ8KEeO%2Bv3oDyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMte0NIvsOXWQYrrgBKtwD2eyOgO%2BTMte9vostACkHKDiwGlExRlLv%2BsEC8RX%2FRFyaIaccCyszTCAGwARGS2C%2F%2BjCcGywjf%2FmbQPDw430vnk2wpDLcEcJLVONomxXBklAKujMZ8QphIkqIrPy8rx7eFRE42gnjGf8OwceOH9Fqu7EnC2jl12GcIwxhKPolhitXGdKr3jC5IxETjPH4PdAzGxp%2FdkUrWS3EucODSzId2y42ayibQDOGJo89ccWGF9XZWlJj0HThKKPGRbsMskmPmwXSl6j4DvO6q7QyvNmPVH52YDklrkBb00QN9WJUZFomzGLkF7xjvqFx%2FvLoWbW%2FMG3GmDKyLLUI3m%2FEtGC4JMH5xvTOqRahOdqRA%2BGpwtZpLRvw0T0PC%2BP7RseeYFOhRVYT8FIY9VkAcnT5TCLwLj1d28oSqkAacuiy7IvMVcASdlNouXrhuZS2fE1qflchOmikFXEgeJy96gV6CF6jdIdr3qV3R0W3BHg%2BoWdGrm%2Bzivrc76XPzf91FzNlAk6KQxZEJXiZkhG%2BJEM1t38z3F14HPOS71LyJt8iX2%2BNurx45B7VeWWYsxtXkauZNQgrN0ITOphh5hNds2X0yZOswi%2BuTZr%2FdXqvXsBJv8mbLKsW0VFxwM6tI1yuSnsw4ISywwY6pgGTyY%2BiETQ8SQ%2FpZAXucG0OU7bJTsaUKCXeiqSKX55J%2FIRLEmKsxnwDeUDu8cDQ3IILBjEsFDFIAR%2BseQJhzVmGQMZtc2B7PR1u6oNYF1ZUe22im2g%2By5R86nZyedrGhgOWA3FSj4k%2B4%2BBk4wDL8b3k0A02d1o5vfBtjzY4bDOK4rc5ssCe%2B90UVHjr6YIlQCI6Z8DUpw5nI5%2FNIADoyfOEVEJxdQ%2Fc&X-Amz-Signature=927b52ab12667979d4ed3aef793db4dc57bea47a77915d13346a0038b0723972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
