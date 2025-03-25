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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3OJB3Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFceDwSdmzQFegOxEgazIPMWe4Poamd2n6D6TyPPpvyCAiEA2HDeYWXtQfKoxR%2BQXMgbtOfrNODOnFN3yue1Quk92GIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJgXkkwxtJIhUHkSuSrcA%2FR1M9gOuOA4DYO7APb6cBqS27NQSDFz1EdoEhQThaOvwOZDa%2BA%2BW%2BIDzXC9GskJDDejPVnKhEG%2BMWYMyX8pWiNOjHc75SU7PvAb5nlO0rstV4GI3XOuh8L%2FzK5z4gecWbKkTPwCZ2tYRBea1s07kAr%2Fvp8TwTxABi2f3o1p%2FtONFhZuoLCCA0kuBWFZ6NWRC3mtyrIG6Y3V%2BqdwcxULcWi7RitdWnqylql6O7%2FWpirAoL8Pgv2IvvQcSdh%2FdzP19vO8tINVICF5n1yS7WWENHLFJqKC8wbNZIwWa8pRWvHFNvB65ylS6Jk6yVaewGbNHQcHatWn7hZGXBbQe19buJzpsh9K9YnQe1VOTfJlU5RWAIAjQADcAPgybxn1%2BtHsVXr5sQHuV2v9DhoXpCPCwO2gbhdNhTUVcupAhLZ0Rzi4DQb8wkXLjbZxzBYfZdNlo%2F2rw8RF20q%2FrmmrdWLRIGxxKctOrs15m1M0wdxoPIz1T2mKswEbhgslJs9POtgkYkfqZ5rVDWQbWOjmj8dfX0ZvlZhLwQlwzh5vZ%2FO01xfT%2BJ1fViEOJLz0JAe3uXl1VyfLbBxBG3AsQtADmD0e681x5nBLraw888yHsKJE1b30OjNBNNp0IjYN7ldyMKOKir8GOqUBs9F615RTVq89%2BjLoFyxHV7F99n4DDReEAHF%2BsfTWk1%2FWRuXQJmwf8lGy6DxLB9vOG5GY7tDve%2FxslTIJj9xcQ9cWI%2FuBUobvR2O4X3dZNqeAiGxpTF01lGj73ou1rWZsCNBgs6kw4alDuTzxTeqMtncWEM7zI1XSBb7K37UZgTbWhuCCilkwXo4YcVFpqXtul7Zsq2QBwkHw5bVstyHSrIfVj7Bz&X-Amz-Signature=79a02827cc24abee84f82296f9107b12bea376048852882013379885bdf3238d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
