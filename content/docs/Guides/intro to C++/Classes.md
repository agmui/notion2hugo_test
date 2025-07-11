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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYA4V4JL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsUCytHAKZ3QnOH1Um4HXnonkfOUEzascemAF5%2F8mm1AiBSpddt5KG2kONcIfX%2BC530IdhnIX1fQtPz0yc0V%2FykTiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GfDVUm%2F8zrJld3dKtwDUD4nuxFNqaj4VwZnUPiGcH0YRVaeVIiXTdErEJtbaSCnk4klPNLa4LsQUpbZk8xfRBHStbPV%2BnUcHwhxulISujL9Sn32rhlCqIZoVuWiNAJS9Vb9LAiTJCjT8Lwv1TIH9CXaf1%2FLkv7y28qL9SeMkFEs%2FOI8k2eeQlv6ZSmkx1UC%2B2Xh2ELGd97GzrsApVzPn%2Fg83KJNjCUrt%2FhEvvvdi1bemwcBAsNnPI06JeBIxqSrPu7PNQpwadaXxqpIsJJDQjOz7pntOpoOjwyWkiLZybDDHGt4zs8J%2FWbekVUyHN%2FznwGYccBpRSTF7S7Ir7Lmd7yEe5pSScjn7XQQKBODWVdgaKUeao%2Bpx28j1fxkeP67TlgrL1yWp2SXk9l22X0n%2B51zCuzY%2BgJTjXosD23qXKN5y0tetOfHXu4%2B48SK5nDdpcREBbDmldhFk74LWQb6h8jB%2BjbTdCOWBQEG3oFg3%2BhXqdIUaMXfajDMMWz4aR5e8hqEfgqmaXsmRb4LAH3lQD3NONNkswnlu5d1LEu9GoC55qwMUxrS3cdQ3QorOizDbXxgc3H1vzS2N6ARSDFmCiEX1Pt1dJuPi0LDLEugN%2FOnMumypcX5%2BYYnAG1rrdhbX8eiEQ2NEuFny3cwoKrEwwY6pgEj3nSH0ngWi07r%2BrQ%2BuCvfkxyG0yeLDtxDhCqOOIzZVDlRMuJ977JiOKotr7FXiqrloEG2FmYNUHCMg9rhHWdDTPoImM3jq6RrR4GWoSvqc2V3jliG0ymy63H0F6mFCRNjdDq8weLgvdrHXhlkxLHgOTaEUNdTiKe%2BurFhuuNu0IG6dljX1bdJ3bBhX5XORh%2Fn8hemOUg16qCAscRjEzXGrmTv%2Fge6&X-Amz-Signature=e8961512f5baf0e8b6f42818c7edb6d6eb8adffb0860547d9bbd33ddfaa7aa7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
