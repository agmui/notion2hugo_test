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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYW4EWJD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfJeV8OWO9hnvCcYdxNAm31WwOK8BubO35qT80yke2EgIgHOOL44w2qdMt2prnTJJKeDtyFj3wknEV3YBvKJDroOUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvbePDvof9e1398hyrcA1wHWwVllz5u3oo0EQbhe5EbfWYQOeq%2FA3j4hGfmSDXk7TpCPHTLjj67ame4trdQwumsIq04yKWUl48tVQA9fTHMUMb3DnaXd9nC9CGCWdXRNx5%2B4v%2B%2FgwrGnYuQ2ncErMVVjoBNUL%2B05CMXJk0hYLlFwBVyRvc%2BP1zTynGk5cJ%2B%2FEMde20H%2FuvUB0yPp8MMPi91w56the9wVcglT9L%2BOB3P1O0CGA%2BQ8ti9OhEleHhsa0W6eu9J7JS20HRRYlQnt9dAmuyLZJqhiHw2VrQC58zef7jOEE4GQE9kNwASs6hCDgZMoi51trTOYEve92YiggwzzMsxG%2BKp5IBrjyiRizIzlw8pgFF0y6MKXpGmWaei8Jz%2B4f6GOXb3dqXQVskz3v8LdLECQotgBfAZLVoEUIBY5ghG1W55lt4Caf54oS0BBDx14Fj0ty7nVYIzH7xk7fQ6wLKRZ%2BLtJv3%2BT4au1B8zfjrKxZbrlw0%2FcjFPI1JAzkbfTzMaVuNV9chHwg0xPdZWv412lBK48Pl3ALKposPHdrbNjz6FHrX4yaNy%2F5qHnjz7xCPh2Lc7NOpWnBfChtoVHYupoy8n4GxAqLbwGhjhDdh%2F07HeCVTTx1uygPsp0osfOu%2Bgstbj4kZ3MKOancIGOqUBLRtfJXF5a2yXy9qfzJcFNLj8jkqRkxs1YcSHr2Pd8mjGQhtp1mOpa%2Bb%2Bvu%2FrWlgCWnmimBLVIu1f9X%2BHG41eiWtYHAxGOunJiNkWNuHyu6zufdUoQqFF6fHGUO3kkgBz416OvfL%2FAaFsMYsGjzUmlPvYqkr6hXAZJgaxZxz%2BcYjsfj7Z%2BzzFaTVnNgGWHFhwB90aJMvyNdzCxPXS6DvvfKOfDY74&X-Amz-Signature=d42b4dc265dfa7b8b47ed3f9d6ff275d1150abdd1899b1d358ebda1c20f6ae6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
