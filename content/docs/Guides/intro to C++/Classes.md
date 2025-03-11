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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SKCCNT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIA8jVa5vTUQ%2FSTQStL4b5VtXo3CwIhYMyTJ%2Bfl5QBM02AiEAxrFKkmMgSzn6OmSv1X0I%2BL%2B4bMlgulNtCBJo5Y3m6igqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6S%2Br%2BL5wpmsO1FxyrcA6%2FijCZLEZBhXu8BJbfhKAlnr7eylJWVMIxyeeoBfHqV0OS7Se7frRkQihBAOc7MIr32BlCB6QnAo3v%2FaBNffpQTFVSCo3x31ZjeVDUnxv5KBydUFq5BeEGXaKIQtrxT4ebKiy7boxQVD0RZQsRJd0Pz3nz69D3FRQ8LpIeJzWETetooVwkaVKQFEH740yGBP%2F9hdJHYWvBjj4GQPeVbjRFIu%2B3%2F%2FVWe0ORyBCWI289j6e65Cn%2FvRw0%2FSTmwAiRmHrbG7dsdOKnIrtxSSv6yslmWGHPtV9WFmtgruWEOfxlPu681DJ1EspS9pX46US19CHRE8oFdl3NfpujmFR6Nce3nTYazpvqqDyFZdd04J%2FMpzdzACO9Jd4k2Nf%2FO9zS20pjTFTFjRgDX%2F8OViNB9c2eXSmuDR6LgF0WN%2FVaMuXF5N2ddxSlbxzoV2%2BdKOYplLLcL3jz1QucfdNNokJJnHypyQl5WkuWZ068htmWk%2FOwAFvBr9QIas%2FdUQfMFvKAbv72HQt0aT9tg39l3TvkGnF9u%2B5bVqTzhpqVt%2F%2Bjn%2FS%2FecsDmVbo8yGY43KiCqgmoDNxSXQ%2BBCVTRtzw44KEvL%2ByNShCbNjCzVlTQ81lUyQXmWJlXdArebm4O%2FQY5MLbOwb4GOqUBW%2F1xSNHKOXXHcB2kEk68b4uyObQtTAd8a4lI4BKkdx5MZvuy8oUF5zJveTukRidLetoZIafLWSCfpTqPqBMVUmcgTcbwQ4CctnY8DkS2dbZyaVbvzN3jl0pPz3k7FD9b8UK1hAwD3kta30cxa%2F9sKLAs%2BacuAaTlTS0CZVDwK4hWWLmd7p1txnWJJkUjFnvTX9HBS95hMIyRi28rfbH3euLVpLdc&X-Amz-Signature=4a01dcdf86897612921aef7dd718a2956d9d7597b5ff2bed356077d37e1e19f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
