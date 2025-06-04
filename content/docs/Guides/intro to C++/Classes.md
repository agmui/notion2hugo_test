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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VABRFO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBffGY9kqtiyq6HA8OtGEYAREt%2BmZowLTTofiA7a5ezlAiBDQsDE2uugXmF5OYNsXpYUKvruuc5g0HDDyF5aDS%2BMKyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMmAilvQR88Gv%2F52RyKtwDsVHgt%2BqliV0Wtcp%2FDhygbbemlARtM6Rfytsq1ekKwoporTyF8IfcD7g3qNXb%2B9Hs5iP681j4ITFOPWiWREp9R5F1ygSXruNi%2Fywh5DVjFGbTaksV25CwjdcTD3SGsGDElCX5mt3lT3wFhjUjEQn7pS9c7oycVxzRFTTWrTqvl9oMqY5UBrLnUVQfEI7zbg5nryJVC9YTM%2Fpar6bK4lFSnjFWdk9SnyZfOoeAkLWvPwUr70xCAb4OFnoaF8HE0%2FD%2FmXJ0DFcQ%2BFc6L4LBj5ka1HDkflbrLlWh3sr8Z2%2Bdt9IByB9Yx7W6KVhcv6%2F3k7e6itcCtoWfpwgDpzFQYnq4owz334smxql7%2B8fSQXkzntqVM3kf2wOGcxXMWaksbFV2wCyQaZc%2F4z6sEXIXREjxv3CUcb0NcTlk1U6lYsqzmY%2FQEZeJH%2BqQkrAdMaUZ1AK64MPHv0z0HYOJ%2FiEFHiodv1MHFoXvQ7itrgvVaDV2EwP%2FCLB7QKsxLKVPmTCtWQxU00SjJmLrsljlajNm%2Bv8kuxvA6WVJcILs4PFjEQ2z7e6I7JLqkWXsDhSHXnQiLDSfTV%2FNFP%2Bq84YUstClSPTlEnCkMWgDTomSt8pd7TqUjI5hhaSQOb4s3d%2FL33Qw9uD%2BwQY6pgEyhaGjZV9UAjsKBZxGhaZB0jP71lwy6hAiNYxjpIBv3eVzlzkVavlHzD26DMBUi9J7nvWj7hpuY1VpEytEissMKZ96feO61u4u93%2FWhVi%2BEYbO6C7D2sLitEFbQzo1ejawD%2BOx7b4KWPjpimPMUmAnTh90RAPOue287iaK1u12yF819PP7lEPktp6nj%2Fmjkq%2BWLnVKS3cb2Ik18xsqG7%2FzLmoSDonY&X-Amz-Signature=7e58e001f903e24c11b7cc463c438c3c943f2803691c7d58c52e46301d365a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
