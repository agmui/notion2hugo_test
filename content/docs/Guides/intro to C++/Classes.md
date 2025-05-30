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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDG4LHJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwu1z6F4ORahVvaoClhV20kZlQ6MYeLbfkfGIdgFzHAiEA0zFgtREvEOmzDvSlrlWbdFPjSWRdi04WOCNxZkK7CkEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO2T9VmtTGIJMwx2CrcA7RytSGjV7rOzSI65qcry5yEWRwHsyaXSBxF640mLRF6ca%2BYGjdxwU3Y4PzquvWTCf6t7ju58f1fajTjVA0kkoC%2BdjEowvDPdAgLkyuShOJ5XrXx%2BxkYWwoVJR0KS%2FANszhI0tjY5VkcmISESzKhbsvxlyhIkbM8wF%2FjwJDUxUogkmNzaT7f9aX47zkE7ht9FvHdx7LqksthHAkD%2Fyjxx%2B7RRE6YsWt31CBXCbeVMLr63RNkx2LU20SGm25GK1xMrEd76PM2L77SlZ3BQuRjFofmu%2Bk%2BNhgy5DEY9I12cXlPNkgNQx3eDMM4WNANCEegpddxkK8s7e33yKqgwN5%2FysTaQQN3bg0E7TBa%2FH%2F3w8nf6q2Peox5F12AskYJLNj%2FUu7Z6oU1mbtHBzL%2FiJuZIGFEcqMZ4o2neswL5cpH61bQzmnfZ6yn4int%2FKl09n53gr4NJHYJPLrAeo9ydP%2FMIhvItQADJ9mkM1exO7VvtJYw4rEwnOP1rXrsdCMyKfLv%2BUhlMyVvl%2B1SElOCq%2BtZfGL%2BkwpXy5ewt%2FA7Kz3otm6BMbBRQf1Mp0PRdML253P6b9%2FuucpLKIu17X5WQfFnnTAi6%2BiPpqBf3xQGC6DdZ5JAclKZ0X5fPuMx1dMiMJX958EGOqUBRpxiHyJG%2BciaxzGEeIwMkAnja958%2BBdaVhRz6ayK6x1kxuXZo0BSHCN0XU11RMWQm4hIjEeAyugfDSA7Z5DBM3fOg%2BirsSUFtIcrMJ9NXj1hsct4Emfhy58u2JTuj2DXZE1pMLIz%2F8oZDxMskXxU9jFPcDHMEqe9vXrAmf62qwMjckbRRMVBqz1RJ%2FBqvGHTCaaXn3bXWHWe%2FzbvVrwN5crCP7f%2B&X-Amz-Signature=11b2433cc45b324f56fa1bedbda9f959a00abfc475c6d0e93c9ee3b59765af43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
