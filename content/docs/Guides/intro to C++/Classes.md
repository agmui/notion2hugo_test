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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7SBMXH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJad02ho0BdzcopUej7AjtwndIIZVVhWg%2BssvFeIVIzAIhAPjUZunODdJv%2F0ywMob0BIwgD64jN9FUCw6TtnhoE6HFKv8DCEoQABoMNjM3NDIzMTgzODA1Igy44HI1AO%2FgTkQXTagq3AMbn5%2BB1q3PHG3PyZMfDfwh4%2Fz%2F47dLpdR0EKlp0ChRq%2BX2iOcFA0YjzhNS5642hwWEnofIwjSlUXGj6hJ%2FPTIdJQVN4GIBS7xR4P7jcDG719Ah94cmQG23L3zUfjyXVAvAhHC5dT9xJunX3sYwnWh1r7wiIbrYCrnOMY4dii5K7iNP2okWqGffc55rwdKs6x%2F8kdWZ7%2BNjzck%2BG2xyJjc8fMLmdWKTH1r6YvdxGMv1TjgfSiGqL75skZM5mwmwDt353z1kkXPti6VYDqtLQafdbslvhKDyFn%2BGdxHUeNWdzLv74C5F7tfL7Z%2BcNFT4EUi9afrZSesVHNh%2FkjltFHXTgcfH%2BMERpbMFE%2FgXOAIeoxI3C%2FR2uvNRKXsrwkTct1OEnS4xGpqLn%2Fc8wGcfgyTcyT8wackA%2BZ8k0ODi%2BgkO1JlOMVJInsrZQ6zF8yxcBMrGJ351eRuOWyGPRfgMJUyO1rtYl5qxCQS5UkNZZzbbWohMONM0kxYu5xdiEHZH1IitpvZ8lexMRdUyeAw2oB6Rtmwk5AOvUZSQHvf87FdJuZCUjhMoa50fOSNjXyU43XlbL7St%2B1xuGNbt7weQMpX%2BhKFN6LzwUtNJanuWNNn%2BpvW0SPbw63SwI8DdJzDQz53BBjqkAZjYC%2FYIBoV%2BzEl80rqkCDPDPIb2cpdWWrQdjcLWE2xLnRYwxqmZpgm94fKlsTDyLrpVAFZqJ4N8RF0HQMm9eYd0q%2FmBNWvmgJELZo08EefsVpDDqDbHPafPl6m%2FGdt3kCRvSnPiXOVucBsDBoyrSjBfdnWEc1ItyxYFYkcdOGZVfMlp2J6i%2F0DqZQmRKIjMKsmL%2F2uYG9sLBrY%2FaQRzeKyCXwhi&X-Amz-Signature=a572ea4c54ffa18840f4150d3cc69b9224ec7f093b57dbf7aff70cb5a1034913&X-Amz-SignedHeaders=host&x-id=GetObject)

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
