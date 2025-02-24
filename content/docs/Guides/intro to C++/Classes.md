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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQUDKBOX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA47kUAq8%2FgrHcCYhE53xeWcgZqR251tgzZrtMLThEEAiAqUNhYBRYnzEXNZ38cvXSUxm45sAebhaNeUluUnadRQCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM6yPq7vbFGB7CMZPbKtwDhWBD5PHjAwDiDDtRp8iDLmcJEFCYRi2LGM2h%2BU8It8%2BTLzZImvidDRDROX8keRfS5ikAKey6QpCc9hzD6VWh1ZBLlbLnkMzYyTiH9sHY9z1cNiNhlp9FCUOtKDx68syZbcD4AAXX4xtNilR3s5ySVnUnbEpHZB91FhmOOsfhHfdF12%2BVqhqu4UV5D2Ae4e3mUUjI1buwZQoYmCeVoJMF1coOoNNwubFizq0ZxyGWZ%2BLgoRKXvokExlUE5Hdi785Kyqs%2Bkx3UKoSVD4TVa%2BE%2B3KPbw7FJQxt6xdh3h%2FLpGr1dvHWy4JOMt4idX6SiAu8I1bkd1TFZTQRXA2odYHU%2B6li5QXpMjLc2yTM0OZ7Qj%2Fgnc4vLu2SbjTUL%2BVkg9yj4%2FE0tupQ%2FHbFsKc5PwK3imNbHZ0sZItSsPq1umPnknLPFpuipi1HFIecXOp3SkQ1RIihMAXIcR8qHcobGxxt2aWRBDZKnsbAbPTeVLJeuw%2F692n2On54EMJ3aiFON7ONf5wuoFgoQ5Khaz8OD5Gh4u1Zg9KdN4yVyrB8TULAgIdpq54Bq2udokjdrZ6SjQXRtOVhS5%2Bs9mU%2BmeftBm6FsdPgUUAjrM7W7Q65ln0tpYFI3C54UzxxqvC%2BwxccwqrrzvQY6pgHzcn6JQBXMwMzwGImPzP6JktcP3Ktt3pb4l6l8u8jdATv%2BvJEt3PUS92ZxBEcLdX7O12wUVNkeCJ8jQl%2FaEYGzCndf1Kzff9JNC%2Bav0%2FZSgEzdPR%2BBRECUaqos%2BAYNDKXeeDOHN97kLasiKKHRleCrxHth39aDHObnJd62LQyTfkYIc0Q3nMfxO7fPGFQtmeiVhWaMLXJaIvoTxOC8OYAjGJxieOmF&X-Amz-Signature=ccf44f01fb6853d99674e5a9d172329bda75dc1659bcd542286c9c35f566f7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
