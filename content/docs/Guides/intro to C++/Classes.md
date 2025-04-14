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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DD3LTRZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXRYQf0I7hclebVCl9d0o6o9RGhxuHZoBgwFgG1m6SUwIhAJyJ5vNUgFRgAe7XRSzmz%2F6vtfOwyAfb9FJbPV7k2g8pKv8DCBAQABoMNjM3NDIzMTgzODA1IgzcCZjI00EP3XA7jF4q3AMqoAypQVgIbImmfWhpUpIajCVB%2Fr%2FHN9LKX%2BWdrPtnA%2BWkndht8FXc4nah5XvPZHPA9Lb9LmfnCajuGm%2B9ropqB%2BAauR2QAmUxHUuq8z8Q0z2zRne1TQ4XDPSlzDWiFtfyKJyxSZTm3uVlv2dzptuO63cvCYdARhvzcrQFln%2FlvCHFv0aPCT8ZisjhP6fOIYvuw5RfC07%2F8bmUQC%2FhaH%2BHv7qYnU13NK4Kspghe0H7sEWL1QBwSA8utjri5Gepz3ggjXO8FUVjjABpSJ0iNjp2SUBbYp1N%2Bp1EB3oNd5JcwzCh4U%2BdlnWcIE4XTVt9ik6dDDTSAbhMHP0%2FKxqGT0Ocp6IiKqf7yEbasLCanCZP4kM8UjxsVEsuevs6T475ZtKfiQiUK0cNh2m0I%2FP7w7nSBEbGHrKPY2TYp7mj5TsY1eEqiu0oUyJk64D0zhFixE%2BzaVihqxHxpjmcfiuUCLiMS%2FlTfoCaMPAi%2FsgvRLI3TyLEZwPhWPZp0M0kj6PPRUke1nlWEyKezK0ZD1Tf%2BrWvXY6%2BcKTTMZsrJ4f3Q%2B0hZu79SaKGGfp%2FYqvvQC5jwyBAfuNCL5AF%2FpGPoCv3zjNHzOmiBXKYhnQWQfRp%2FK9BtCfr1G0sc7tuzhG8mDDQ4%2FK%2FBjqkAY7QdlCEmo%2BkQ6RlXL0r7HXoDPp7uN3LXJ5vW5u0jRC4uY4YttRCRPKS5j%2FZQkPaFGdYhTBXoYexzXn2gKw3ttEiEB2psXBwGSgdX5t9PKLQnnZZhtB%2BHViRX5PMwa7rzOJygdzDFEoyZkZJhvuJC0iqR8zDvgHc3DRHqphlUBCOl7mWJe8TiQe8eugG1fLl1422VEJ1SlzQ9osZuHvsKcPPRQqX&X-Amz-Signature=ac28bbab45ad5714c29fa712aeeecb635c9c79e1ac0e38a070861a40d0158414&X-Amz-SignedHeaders=host&x-id=GetObject)

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
