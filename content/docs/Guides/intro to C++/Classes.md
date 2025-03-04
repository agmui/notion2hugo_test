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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL24DNJJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCNfYFa5EGbCCWtZHhyVgTQAGDJ870kfWGn%2Bz6XD3TwIhANol%2BT37SVI8Akmr4fusBs2L1Ti6G2opX5yElbocEkQwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkccoif9QXtso%2BpH8q3APQN7lvcEIfLktgl7viHLM%2FRBuA55wMXSgSWAEvP87x6x8hW%2FBfTa7FjdCCxqFucD7653rEkc%2FY3skTT%2FPerPy02YI2LPmSvYy2D9sOy0vv1%2BgZVGF9jqTQGTvMYqLx%2FyNozZ2gZTD8xC4otmANO4jBeetRhyMLfpwJ%2FZVokJscZslsOoRwA4mAs4aXV3X5Rq8PqDpzROtC90ialAytyS2h5sU1q5yDJabhnjv%2BzQsARq1NfSp83E5IKZp7cmX3yUlSbDxO1O8mnPT73oeTrcxdCDOYjNcBKkAEW1Ae26HmT598EvGE0AkFe0huRTLIROujwVNt9AUY5iyEJN%2BaM6sJl98m9fao%2F7JfNx3nSktCuo35R2UzA6HgSN82DkyPWypGiYYx%2BZVJw%2BRR6e%2B589P8c0kbfGh%2FYQVI%2FtQjI9ou0%2B4B5S4ofU7XJB85ybYRHsk5h1d9Gf9CF4iV%2B5y1Nb1goMNHUuD%2FmamWlOhl4ydMGhLISehwf7nPv%2Feu7C4RTMgIOoW3F5ZM%2Bqr9fXMyB4wnpidPCchnkjZgfVQM4k03BituoixpKyyOUEO%2BrNdk54ogqohTTgflHbmuHBXssbXGhI5cDlX%2Buj1hfXGLkXZy%2BtOQ5X1mKWM%2BwpP0DzCi%2BJi%2BBjqkAby19BHDy6LgjGFnR99Vik8B7uFr%2BGeEXS8ZD1UGPJTmSsqjKdO4myvbSBXJPF%2F58QunxzmVvYIKaEyvhji%2Fcrfw3r11N9gqiCzVDuZg4O5Plae6jlFILNRvvLJS%2BJcY%2BrKy3f677YNVaPP7wR3iQnaaAH%2Fevm3oNB5qLZXDbg6%2BOY1pYVWNojVCdJP5syC8zyumJM3ZjGrplC7Y7DakVNZq7rAs&X-Amz-Signature=553f6e742541adbb1ac09a951f29517448c89123bb44798687d947c83363456f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
