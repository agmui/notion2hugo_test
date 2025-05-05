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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL6PK7YV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD9Ma9Qm85%2Fz2jExx38gTQNB9AaOfGyizvObsEYVQ6rVwIhAK1LR4hahKr01lLBWpdvuubXOTpWgjOniKiwEZ5puYfnKv8DCCQQABoMNjM3NDIzMTgzODA1IgzOxn0V5dQi366FpBAq3APXNs3UMW3JLkCZSjvCLN5T8f%2FKmrNlijRO6PIa3MHmACU1MCQEJFF%2BsdG8ujI2W7Gy3j5zHrik6pMtyUWBuTgPQszv6%2BU0a5k4HNvA0kwVw87FZjgUXEhZeY%2F1jbVSbX8F3yXYxbhtxvGqVUYGYfodCWZ6cfYF%2BKLYkQz5AKX%2BFgdVAhDQsevV2EHLFZA6Tv9P5vjTnwh81%2B0UtFexgIX2klc5chC73s0EmMVRtgWNZcjrrhbv8R0NPEnitYyr81pUpkPE70fLF06xMu7BkCDKcXOqOimmLH%2BXm7smUcskraot8rHGQdokEjjHBEhVy%2BS4lKaDCEF%2FZzEe5sKyirubZY7WzC1cnGI3lT9VWgXxAMON6PQK9lJIHzGg3DBKVndz%2FpptT%2FSYBXS%2F%2BTpxX75i6DcOeY2Cp86Yd%2FtE3Y4GSzyC0VXSLTpD1EvP8Zb41QEIR96deXXHUwyZFlnIs%2Fco8dTs3rzHLiv2bkGVxBb7%2BQlVnv9aBFxE9SA9BjGP9rpxBzaRfn%2BXiosDRtgxJ7gelHakjt%2BQ1jwK6tP24Vm%2FXK5TliqaU45pXov1xf8FnmmsHvxXCQ%2BGlH4Zrw%2B6nRI5mIdEPBeevfR0yZIwqd%2BzRJDSIFcFuigLgqJ4GjDozuDABjqkAeuOGull4N2xbUR0TxZcDsQg78z7FjctoeTcF7yZ73epO5WzQUnm5r9MPgiarNAb15uLFawEX%2FlYZOkaENKPdtHSUYTFILZUqLdL%2Fbbqud5YDk%2FGRzhZ2z4%2FLLLcjKGccpvrqIBsS78aG3rt4oak9bv1VpUkWE6vLK6GdYDycIA5swNEYM3qTapbb%2FTKFPUm5kJ7dORmU2iu6Gym0a2BFlp0I1%2F2&X-Amz-Signature=a991cd0a99e705a67e423a8596e91b9c10226b1f709220776f342f18a29fd049&X-Amz-SignedHeaders=host&x-id=GetObject)

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
