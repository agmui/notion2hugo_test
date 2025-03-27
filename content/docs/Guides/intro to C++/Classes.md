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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPRLKXN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtMni8xCScHqdPjMfGzGTuAbBp%2BdG6zeDCazrxvxd2FAIhAOm3TB7JCaq2H2VG6kq2cSI7CHUWhkYXPrQuAhqUqPc5Kv8DCEUQABoMNjM3NDIzMTgzODA1IgxHg4gOBXqS61vH21sq3AO7aS886uglM%2FD0svYCM3ZgOaApYy55vByDHgiFQPvA2xnYzV9WjW9lHbWfFPbqEpGvS8dIQU2Adm5gZGSbZS6Z1fUaP2qp0UszvkKKh4rixewMYrUb%2FZ5Mlacf2Mvz60KQgCkBsvRflgUFuQd4PnUBlqJpBBdEE8KZ79AD5p%2BxmasU2IifviaqU9C%2F13bpqRr3pl1fDP45ooQV%2BzUV%2FdIDc0erRG2pWaG0ALN6EGUDTwkWFqRzXqsogrULwe3fS6obEUc3kbl1bZIbc%2FQZMMUsLICmVIZOqEfgeuCmWqp5TRrHjOsySFvKN72QITIHVrH9AtfB8lZgI%2BsnX%2BLP7kJQ6htEYKGWfOhwDYGAPihsCyXjgJZvbg4HOzmtLF2%2BIVV%2FIV3f3p1PBUU7TWRF6cETl%2Bbzb31WdC67v9ShTRASIiU6cg7w5WiBiiFV2zz%2FUHxoYOycdq2j0f%2BQRumadMZhbaQvXWDWpHMhAfBNBMprTpud%2FXQaz77g5XePzKwepAPPK5dwvAw1Yp9rQXM3xwpbFYYtHPJbsw%2FT%2Bxa0u19T2%2BDW%2BvNPjtobo3wNxfMuwBo26RYFUenCTrQ585fL%2BjKxgMQQ8AwTUnkyUL3%2BvWLSz%2FJ%2FbaZNkVpD5EPTRTD19pS%2FBjqkAfNi5vT%2Fb2ZdwK2nTS31Gfmwd0%2B8qEIzUcnkRPQFCdH4WWPtKE2yMZP2KLoCpMfN3gkCz%2BAJf5HVFGgEFNLBdnIMlNyLGCqwupEUAskkaoGjfVTmLmkLezCE%2B8OrxYrXKPioiooGE2jZRJiM2FoF6KMN5FJEQrvsF%2FflGxLVE4br5uTAuK%2B5JR9H5P3pA1LsdUMUXPLnih4zWn9AWUzUfqikeK40&X-Amz-Signature=9b9f2aa3cc788ebac6961d8b30456d1727c42f209294fc499154afe03c3c39dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
