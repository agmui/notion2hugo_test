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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K6ZEDBM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC6XPRPOlOjorLCYBeU0IsAVAUDn4BsR9JMKbXYpe0JwgIgN44nlsDLNuKBL3XaKV%2FO0ciVeMjK2%2FJOu7AqYeHA%2BucqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm%2Fp5cJkrYdoABi5SrcA6mI3gSxu21QCc5A07%2BBeYYN2ptIo1M%2Bj6SDjBndCGhxtxSCFerN1zMbT7fIjIJtWl91lL8HLwozPx%2FggSwNo%2FFTxRftEUbhKNNnUfiPntL7QGIKdRGsURZ2hXjegBZNOunsmyHb1IBEhVQloEh1ILUGBLTrfvvHwgGiJxfMvbyRP7Z5eWjQc9cWsKpAbBIt2IVgyIHkNeOdsfl6e0yfyyl93BZK4XdyEnckWXn4zFFksKFoUWI7i0ekR9BgEgO7M4VkmhDSzvWrFmSxgdGQVlh2S0y67XwMFPqC3b%2BnA8N1VVwPkMEmQrF7CEIxDAxXKLK%2BXBsFztnaGrmNVwTvGGQPMLK4Mo7XBFpVj%2FxrVFphD37iPveF7MQaN4njTG2lVgedFWwryHrkIdVAEx4f9Zzrd1%2FUomsX5YL%2Bt%2F9WZ3%2B0BJFQjPi1w%2FQJiXXLDq53%2FZvo10F7Zt73uo79kpqgscD3ShDjperjiMAAZYgQHYtgezNrVX%2Bx%2Ft%2FOwjkroJOvnHckaBoPLMmFFoD6D08yWHy3QefnN%2FJCizxmqMP2x5jysaW0W%2BfipIXbj44i3W007lYJ8rHMYlBD1qw5BGYTDobi41TS7aB9fYfsiPU9Z1gn7E4IopaC3zXVXROZMLvF1b0GOqUBWf8zZ5%2F9qp%2BJZC4NhBqljUTIgpxK%2Fq0ZDWMknFbUMllvu56Lq1bInwpD9ASmvXWOfXACheEriJgSXBcK%2Fmh8PnFLII33NIp%2B8hpz1lfNOIcm7WkQUhF%2Be842MEAo1llYgznhsXlFDGQM5bCMTeOvgoETRJ1KYaPf9gOBGyauanb1d05Huy8K9EntXI2KL0gVQqAeQAu0BZRTPvviNhTQNPAijMNy&X-Amz-Signature=b785c92a3927bd991daf55aebc22cd6ad4da9dab8ef662e0aebc82d36f488ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
