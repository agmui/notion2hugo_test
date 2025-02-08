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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSE2AHQS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDZ6w77ijQ21terq1czJKzj8saN6%2FViLqtGGlb4T6LMiQIgK78GA2gtfT0AX6ozfusvBmkC2bWkfEfnvu0XK1klS6MqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhhViOhPQqQAIPbzircA%2Fdz1ayseWn9XqJFCo5g6F49WAdFgj9gS71%2BEv%2BR%2BolQHyTSwIofx8AazoQFjLTJZi1WSjEU6ap11gqWgJrJS%2BhdbsQXzOaOFBGyVuMgiNtGTre%2Belr4S4Z7yA3Xf0UkHwv6Q5xxqB47jHSjy7qRNbzDjEsOuh7tVzI8OrNSf%2Fi8WG76TSHOeCr4%2BJPInCaDz%2FTJyDG5cFOnL%2BFqDV4B8Gfq7o%2FHcdy2p9tTupLu6ubR8PTjhNtPUa8Q3pwfshLo%2BmWw0ZOsymI8jqw1WmGKACL8O3pEwUrUjFMaUIwOAkmGXxhC6oPRjgish%2F7eKwGdgDKwdoUAQCJ357fMsNWpW5qzFX%2FFarrkThMMRB7O6cUm7xdXsZLqdVNuSeBP53dHPep7kfgZtkuS2iQm7Sg%2BTuK%2FV4IY49PQHeJN6DwCTZd4mpXZQYlrNSQhNOWNUT1XfOlfrZ7%2FkJ178nMfkcDcI0Gk24snveDjqw7qdyq2exdySsms9UdNVOByIuhoLiwFnUje19msSeLtX0uOvBKF1GExSi4XHJkpdxI6yUHQVxrlv%2B0zozIUshksrOdRcNoNOoFXLHSTYPwMOvtp2fZn2Spnbf7uHRG8qE1EqKYA%2FsNFIivgkRVfE8aDUF7oMLXBnr0GOqUBxHTYi8SWvCW%2F6MQsYNkJwpR3C9k%2FQsJawJYxbOwS9o1I6mHx1f5%2Bd%2F0fbBs4oMKZpw9m3GZpAgpzv15L2yXLGA9RnjBmbNVOfH9VH6j4kD9QIoblkFd2%2F7PTLGlvDnZAbDN8cFrBYEsIfEelIy1n2WPVorMO0o64wIuNF8dJRG7S%2BlcpV3o5WCaPqdx4x527VP6wUAj7nlXzxmEND0MuHx1whtkN&X-Amz-Signature=f982f333f15ef549f75deb47165cfe5e72a101bdbc8a23d5b320313b05d5ecca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
