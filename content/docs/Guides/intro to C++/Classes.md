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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A36CCJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5xLt87tEtg3O5TK%2FncMkuMBEk0yV0q6SSKJ0KS8wrjgIhAIADKOfY%2FKSxp98jOi5pXytn77dWVD%2BAkz8sKgCYA%2Fs%2FKv8DCEEQABoMNjM3NDIzMTgzODA1IgwXyV6mbaC%2FQ%2FdX3p8q3AN6IjctMo0gFL28%2BremYef86yy514OJkbRyxBsM9cqOeqKGL%2F8bcQs6LymAaQRtPDlbmIvnSXRMvdkPct8BnXJ5QtAbXXkZY8t5gUizBFftX5n7cNHBSyZxgwDYihJ3SZaQ6sivK5zBxyb24dsrRwqDA%2FqjvY5oGHAzLliqODM%2FmJTIN8r%2FkeMidsM5gef2t%2FTw%2Fg9lhVmVl%2BzXgVuZBWy3%2BlNp88M5%2B8rGdNf7S8UT8IiuvbP%2FiwGt8XHewDwoMtzZ%2B8tZM2bPywpd3RpdpW6BRPdasnGLMNT9Po7Xpl6TFzKSjZQ6WEY%2FSsoCxQxulhy1DRvQI71%2FPk7CtTfv5uOzt20zH1eU%2BwRZacSEQwvObuJ%2Bth%2Fkjzh9IH3BD4TOWHpdttpVcYURoGylU3OMuM6gpCKZIjHC1URSJHZw9%2BQQcbt2X8QLYnUHOTyAW4qLe4wWonLZ%2BKU40h3qytLK1TmVzB9FZ4Wv5pvwyP4g1xX8zjJMZn4yJj6Yss4usLF6XmvyqQXVl5I0luLq8XD3BMj8xXGNWGI%2BJ6TtVa0CZcXf%2B5XUe8LbiChh21LqTEAn6AvUIsUHjCVgmqme9nD3ESebqKJpYh7BLuxYpK%2BWXHh%2FTbcdqI4eJOET8BiCbDCpwP2%2FBjqkARdnfijv19YfLrhANMovw7ulVIKIieQlaEK%2FrTyMCAhUuweyO0rQCWoRYTwaceE2eJX40SeFmyUp13dXQqrI1gnCdB70FKy7zztu5u1QWm%2Fx%2B15h3WbUzAFrI%2FAlyheaPD5Xs2boeAW4WihopTZsXpqvEyxn06SCG0zoo66dXlVdY%2BOMYd68CRRTcytK3rWocDjgYMYyVTO%2FCrSGUn0etJlOhb6I&X-Amz-Signature=1d7dc5fbb6936d166a3d980c25940bdae70bd8139547e63485ce4b1290dc9f55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
