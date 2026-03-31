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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HAHPTYI%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIB3kavs0aBuUtT5rr5L5TwalUhpMhbOlpqfjSgXwYZAaAiAll7Ar1yA5r%2BJmVqmkvkyOXbCaB3omAeHPwvg7tEx96ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM4ES%2BSjqyBwKRk6%2F2KtwD4%2F8mqP4ycay1R5v2ibWKlmGWOuqlK8QhoIdyPC3kdBMIsJW%2FNlCzr3s54Tn2yBVvJwOlhwqu1Pb5RttFkRuamIYsetFSXm0yr%2BJoCWn%2FBgeTazidbQuDq2RUND%2FZqxAeTP1uAXmf5aEVHssMakQCg4IgRKafd2XHSIP5A4Ji%2F%2Fmp6oWOk%2B%2FLPyvw9efDmSTyxek7XjN1rD9UNmom5DB1UhRvAdALj0rCpkrHw0wvbEE7aTM0LlkZp66mckqVazUtiFIxmD1bupL%2FjlV1SYShxT6zA7SLhr2AiLT0ImK%2FNJTPmFJqePyaXCn5sCbgVxeRpER%2FLSGLvipV83Pw4DXI5PRh8jUaSze3Dkd9ll83yrs3bKm%2FHT98fexJkhu6WwBC2ZocmDj%2BuVTMiiKXmGw5SB5bwKdK00BsIJzTteZAAIZ2mEJu74Sna7T5BNaru%2F%2FHWeRZmMjmrYKwIs7kxjehmO5R4TWPDcxeaPS2vDZZbuXwgGtJ0aKkoTjGxbtL1bwoynTUa1ipTimYrq6eREcvwZdswt3so9UJyEd7O2Y8TgdHOfNMgKWKZbkvWm139rYD29TDd3xuSVZn9vU4jg8ziudaHjJOxmaesGQSmBVkxSbsJQD9EquLjxE%2BH0wwkbyszgY6pgEPNc8ZEqFmja3F36wkJfZPgLvKS09njvxgI0S%2BzcbXu%2BNqz5hF2DJeyplctR9bMc4DZL97ondusUyoC9Fkmzz6VmZicnQgFj7M%2F9KDRqSICqoyQdhJXs8%2FPML07z8rXcnm02ryzG32%2F%2BTvx%2BR8wAwyPkbPJwvtnbdZCJtvFLGucamxZv45vEDX77k%2F6T7o0Q0SDIh1DISbSzDzrmqPZvuk39HUzBxX&X-Amz-Signature=d0b2cc9712efe92ba7981555cd7d3d3612f9e34762f2d9a8845f50186de0b2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
