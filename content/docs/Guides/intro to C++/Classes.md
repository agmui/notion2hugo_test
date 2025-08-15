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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPON2ZQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCBYsbF45t891WYf%2B%2BYdvFaNUtKJPGt8p90qTVxat0mLAIhALA8dG%2FiThdy63tXK17oIa9EcmLwpq68YMPM5NDUEs3gKv8DCGMQABoMNjM3NDIzMTgzODA1IgxPdd8JXhiKE62FKlkq3ANd%2FsHeGxs5w9mjvpFLQOJWpoFsHs1UVj3152xtim%2FT%2FiUyqtE58aZt0Rb6D87R%2FRyjH9jPeR1uqkcPoUoVht3phJFcaVySCLF9Tbn2gkC5EdWpohYBF9VxM%2B01qBFyNZ8OA8xSVDG%2BIJafQPGzQXC4xeLDJ7%2Fo483o70oPjyuHp7yyrtgzDr6tbhx%2BnhxBmoaMQqqRR306f3%2FjXp%2BHiv2p4kFouF5%2BUPlRTIT3rKXAsPPOHSRlQ8spTaKdrWIrg8uXjku3VPiyLDL2HljvYaorS3wJCX6s2iZ1VdkI5bmimkOJo9E9semHdqKevG0q33EQ2lRX%2Bjg8KY4VcShvBkubGfszIsW1lZlPbipfkz%2FZhV9OdD%2FLjn6tL1AjRZPW587RqJ4jYnPOJvP%2FgW0Lh%2FrDCzGCAvkq3%2B%2B%2FuJLjxHZNAUhXOZ69jd342hhwymeJeKoLjPKExhd6n1sKsHHoXk3fqUrxx2cXQVYPIG111nnXxiIdM5S5qH9ygETL7ZXE9i4ck33D0vfCT%2FXtQ2R5kYxx8%2B9JKamuvpl25Ch%2B6EqgXhvj68yn3U%2BzwavusWJUM64huEZtiRU5jT3AM1cpCP7TEEppq0l3lnSnjcaRa4MzuZSh0c8eP3Si68xmuzD42v3EBjqkASFet3kEK5ZregXcPc6jV2j%2FXNt0PQ3VismWsocZ5JV50y3PSd%2BDkdMTwCqqcoPEwfEaGWd9LfWkyjOe2Z5GWTFuccxNOOKt9bIYBM2izV7XlFJ8bP1SIPb856uqMcOrZM0SO5JGdqeJUM6pD2B95eVVgNYXTHx2nSn38Fsxsf92OFQ4VP6vpfdCynMdbBY54Jbdj1HRBrWDxc6HwYCdrKc34eSV&X-Amz-Signature=8843c65964547c331ff92856561d64f8db5d91a2019a3ec82a4d48a511ca9787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
