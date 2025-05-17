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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOMPU3C%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJNtYlobTBPTutvXn8mrAsPub5a4frOSuzGpi%2BwEB5wIhANj7IXCA31BSxaOJz8uiwizYP0jBzCKlvHsYproaKVr4Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxQniLEG6I07FJptfsq3ANC5lpueeLsOb%2FKZAN3enUPEkzc%2FcNLoifHEb6u5qVgE6DwL8apPsm3RWKbc%2B3xGcR3jK2ieftuCzg6AU9%2Fu%2FhxLzEqksM%2Bq1tv2nUfs8Osn%2FspmsCWhs3EuQfvoqC9aROOB6KpjuJUsAKiYR9zIIqbDpDpLZz%2Bm%2FdUe1UiUxY7RCM%2F3fUtzty5atPnThJD0IF96bCRQKiMXug23if%2FJbtvutchbI1upNt9YF4yfNizNYutblQJolRJzMzy7wo2nT629NZW6lyk0vHZZV0hgXRHFpLjX4H9JADSKfbPKg6rK2vrz%2FZZjP0sSltyJyKqtqv2Em1w6Z87946UunVlQhvWjKKXzVGB4Gezj82h%2FfZ3pb0QsOBXfe9D9ebX9pdg7bOOzvOaBDj1rgd%2B5HSZraVWBWyNdMfQkn%2Bz1Wl6LOo022nDNU1hBcLzetQnhvpo7qVnvHDHagTUdsi4RMfFnjjpttKsyxcF2AXIrGfxejo3Q0ZGsoSjNdIE7BlG0%2FdLg4B6yKvYChAArdeTWRFWkXPRsLxIjmtPJUKH1byTbgnz0TEVwokEtbz%2FES3IO1B7Z6mM%2FSVIw1jFuXzXfCr3yrdqiZTl3N%2BYF1quoPv0SeH%2B%2B%2Bfl3Mg1ZzqKye%2BbojDz4KDBBjqkAVmst%2FmiQMW1G7fjY5PHE57lKYh%2BTN9Ls1CBYMzXB0iQfEWql7FhuEigwmDe0WHv9XxMYAqzFGSgHWDsfgv8njTwXDMORnLKzIskgskD2acILASkWebQAXWnOF9abzILTMvSp8YUwvWI3vkcnCvdjM%2B1fM93fDzS%2B7v7yo0lm7JVL2y%2BDERisJ83odO1%2FN1YwgLUINK6Re%2FFlgtR8iVZy2aF8cI0&X-Amz-Signature=7b735515bcef04f4817e29e8627724167c166743798deda96d31738e243e9126&X-Amz-SignedHeaders=host&x-id=GetObject)

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
