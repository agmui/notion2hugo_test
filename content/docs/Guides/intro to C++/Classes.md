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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3X26IVH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICcbttWLwwLg3CxM07DlmDv7wCpnXAeawsfLvXxxjHwBAiEAuzg5neNA9qclvJQdYNIRkYwO6cdajQ6jg4qDwmbebZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHGL%2BvZuumpi2XSFxircAzCe4lEvifxzli%2Fh9JaWA7Xezp6JyYMIgn%2FRgorsTWJfEtAslzqPfm4J%2FtjYraNKUT0TedDrxt%2BxnamwohxE0wX%2F1UF1XhN%2FJQhHTJj2Jc9Hupvs31a7pZjCerTmFXFeJQbufHtb4eZ%2Btw6jRO3BDxpzr4fSQFjpoB3vPy7642hEsG5QwIN%2FJ8yO5PWg8wl6wDHq3pv%2F4v7U5Fl6JKpi145EdwDY8Ycs48PaxbCX%2BGZbpuTegdtB7sj2I63emFjhLwMNfgNwExAxVrERaIhJzj7RY2UyrDXy28WP3qHZfQC4Kr9GeFL0YkJpiMGZHC9TSPts71abLDRfRpBroyPyg%2FwqZXfsDNL%2BNJS4y9ES3RXtuYqcAFs0dl1OgoCawpVs0PPbYAi%2FRbsd35Bl6Dn%2FCvpy%2BhQmAuCVr06sX%2Bu9ghEP20WgENPMDPwA0fT%2FW2CxKDPnZwPIPY4mHUJPh40hnUzPGkborD73dupZe0U363vhMI1QtKNBzME5W1tXN%2Fy%2B9P7PTUnOrfaX0rlEPHswKo46qxDsrLTNUMWzgBoJBF8zSUOMyrAS6aVoy0fKZz78v8BcjAqnr5zCP5omojCTWxNqj8q9WT5JEkoOjZhXNLDxy%2FAwLs3GtYPUlxSUMKuOwsIGOqUBJd3gpEBO3BrTDhwm0vb1tvDPT6q345PNGmIauMDmP3bq18L4KD7bI1jegBnc2Tz8uDJcPXDbdRdHG60amcNwNpbSlQUYmfbmDILfJjx8JE8WRhNZ4eCcR581DjA8sqDJeqGwOnyv%2BSTqYpRHfuCG7WVfu8Cb%2FDn%2BjQv7ERpCTcFs1H%2FviSjUHpTT3MYEWzBAnsJqaxq0rQY2rmzUOVxgYGJiQ5L8&X-Amz-Signature=1e58a674168b1d19c3326bf904eeee82580c7f6168314a85b3a1d621bbf1c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
