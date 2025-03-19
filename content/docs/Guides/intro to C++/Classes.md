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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUPVXLT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC7f2bsINnnUM7xkilu1RQyWO2KhvpSSnerbO8pufHibAiEAl6aTC%2FhGCJh9VPZAKNMhXxwCHA2sjXTsW98rbUjNIiQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKr3PAi0RBSOeCMPbircA3rDr7LVLpuB1EgdQsC5z8mbXteiWyGdYRE%2BeSEb4yOFX78%2FphppOt05Hsq9ynQsmOpNushN6mohAbeSkq3fjxd3i3V8K8XWvuyqLu5bE0fj6SD9ETSpRmtX93NngNCT7JYdLs6lgQLWiZFzjIFAXMHa%2Fhm0el1vER4392K0KiMhkKcLI1hsDwzjQLJGV2ghupGzMSfcSLqwmZbrVxwx6zRaPkACqfbuprmTzvES%2BvADwhQjUdT1xRexLl%2BarFv9gEl8EWTpZPgukfT4xH11%2B35l4fqL%2BU4jfYbKptgJb9JVQeHOGI9ghmp%2FHF%2BV5HiF8Q1Y3IKXt8%2FsAB%2B%2FBDzqsFclXRkXJjtJVvNidrpm4YDwidAx%2B%2FoWYWC%2BpX%2BxKcXcw4fN5vj%2FKOYDMOZXcAjIX9yZOB1OLfOnhLekWIwAJogmEC13jEW5k9TlD2Z1Kn80fkX76qcx4DlOWvAsNaFKPEIiGqpBb7nh2dWAkJyxfMWLf4fOCajg6JZLbXMnTlzSIE5txtAvptFNCYJtgyS5B1sxBQi9%2B3ULL1%2FJ3KMxz%2BgJ8aRWtE9O6yPj1w7vEFC3%2BcZOvmMEOkveTKiLgzgX6Ju3K0WpWwgBei0WY%2FqDAC2MvqOG%2BnR3ooLyzZ5mMJ69674GOqUBqw2%2B%2Fh5lYUfDeUnUxlERtNTOH1Ex3n6NPho1E4wgWjbopxuRHngf7WoVzqLm9KL3qhntcJ41sEKl7PqLQohelgrfzAV65SpaH3aKGjuqEntMbMlA1wfW%2F3FxY5qndVPwfGiX9anRniaZLtP40NrE9WEHHe3OkQ8OH%2BJj2ALSNfjUExUh8DN%2BCeKdQnzf1nqAC5m%2F2tEupxnLuMbzoDHlyT1q9VgQ&X-Amz-Signature=a5025149b938ad70ca65876000f77a2e63f9571b80713ed051906a08f6d279c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
