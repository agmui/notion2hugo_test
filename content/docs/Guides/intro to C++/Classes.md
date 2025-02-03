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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYQ4SU6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmBPzRzQQnuUkKQ6B1T9roN0LrvrbvhipZtJNl05oHzwIhAOTUx5Xl9b%2FRR%2BFy57LwL1Id7UmL9oIdmfLJnTQgM6z3Kv8DCBUQABoMNjM3NDIzMTgzODA1Igz8sOI%2Ff8d7gJIFCBcq3AOEHDbUz6nTmlzrK%2FR7RHjcTxNfg4ficHK3vOHpreIwrfQG6UevijniDBHOoLUMiv1ef5yIB2VY5rzlFTO5htnGqXkYV%2BeG4c%2BuA5D7X1l6qtZQFeIqvlXc5rD0%2BIQEStCSRpiUQ9qYyXaLZRajeH7hf9KlobCbRT0I8puwfDCqoKPIHU4tnadDFM3LkoUhXzRxZj0Tagu3pBIU1WkKNPEMn9k2QnfQ3RkqyNLE9fJkgKnLHt%2BVv5yaMre2kjWAJlG2cJoDENKwp1rN10qE2iCUjsd2XZBsgh8G5mG1iCACe3BxtiwH9ZVKlrnpQgepUah8LgUZUjPosCX%2Bx0dn6QR7VKQT7tbEsNVHvYuxWegwKWhdfHWDoQe%2B8%2FMwNrFh7VJhwMOIyUzt%2BReEYDxDtemyd7vMUTzMsiZccMDM8g15V9DEeM92fWbWaPEo6Sju2mTOTrjNsFQEinHFiH%2F9dF6aQ8iTIiHzcuqmLAY8n%2BYzvD6hyIkLEOdaEewoqGBGUrn361vlCrQj46U8wLTJB3JhZ8GPDzlUjluG3yQLc45N2CJSBAILs7PopLJvo%2BhYf9qfgRESEcurDjALtsUw9bZDLaDuIxv%2Bf0Q%2BkOiDkA5f3xfVF5rvtTbawvj37zCW1YK9BjqkAfhG3OLd9SdIA%2FMUyjOJoHk8piudemESO6jMHxHBFaT%2FHEv3FZ2EQn7RmISW8jVKkzjrj62KXOY9LpIJssHGb%2FmTAGfz0EoI8FY1dYVisfFu4pNSAEDWf6sK2gIZYfVGsOUBoGvQkoTWvX2qtLtJdiuLVdfjYJp85Pi3YWwp344oKNI7UR06iFzMWt94AO1bQUJITJAzweXJUVz%2BpQF4vabBJ07x&X-Amz-Signature=fbd23b959fb307d616dc9a2cc2d2606a579579db39b26b09de8f6660e19f49b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
