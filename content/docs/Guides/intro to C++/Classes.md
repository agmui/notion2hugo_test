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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBOK773T%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDVhYnf3cpQFKCYPHHVi%2BxuBqLEoopBr2xnhie7%2BubGTgIhAJ48e49NFr0MS9e9f3xhigdKrtvUq2nFZ0oLKVlyGj7WKv8DCFEQABoMNjM3NDIzMTgzODA1IgxegBGJQZAENBwNy0Mq3AP4I5rZxKATndd3fGy5nnvS5X4lojpu6znInE6rfR%2BmyKP%2FXlfJfOLQWX%2BQ%2FZ5KzDovGd4wPMMJYFc2EeJjKi8i97gWpCZC2KAsKFoWQR4Clw%2FKN2apgyOdXRytLTyoPrugsCVFsw4b%2BLrTQV9UhF9qwCJVx7xv%2F6ws716OiNLE72ZSzaIKxuuwk4iBDffQfjVozx%2FFQHtmCaoOovxUk0kxWv6fJd836QSd2sYnwS6eJS%2FSXSmh7o3siqsXPBd2kEtaq3AAFSBynu00fxpMAaB8hBJaa94V0UZ1odL2I1Lxpd9jgp7l7MTmV1MuagLUwsiLZS2%2BYmAmkbzc7GQGbr8iBSgsz11bcs%2F%2FyMpOlLSu2beBcgbSlB%2Fp8PP6KkvScA4%2FQa5RAv35raf1nL%2F3VavhUkbU30uysa%2F6dwBLuPRtqbdi%2BwMz0FYjwjIoZSHf0FL3vI%2BsQMgcFkULvV9K1Z%2FZlEbese30NZ3b%2BRu6Av3q0iL5r1e6ebWlJ%2BIjF%2BfqWIHTtDSm2tM9fKEFugw11yeWu33E%2Fgc%2FP%2FuXEMIHBYQ2QZB2YberrC52AAd1Gej23XiO5Wnq4qpUjGm%2FWHpLHfJhdDNjdf8Qv6Te919LpBxmPdyX%2FUtLS8Be66nI9zCIvfm9BjqkAUDvAQU%2BEKDiFvo1TedQmc%2B6PtQ5qrXKgxPHgia5rlIu%2BhHuCLy%2B2qjdKESAwpnJ7qt4gZ0oJgVoseoR20HfOb2QKe8Fu9l%2BcfNm%2FkilKDfCe6sqjSlAkT2hxqkXRNLdQOBqtO9D7FTCf8Pw6hmwgmh65Y2ykUN7YUNegKoSfKA%2FMJDT5SD6KyN%2BHrX8k7Jpr9TZjRRl7oXWzjd8RdfvAyIaWCuC&X-Amz-Signature=a8faa73186c57935797bde553d086d77e290c6a08f742e0e5f3b21094fa7b2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
