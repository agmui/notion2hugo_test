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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TXJQ6M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGleBArmDxqzmLyie0wF%2FulRTCGMNVsdjpkefn%2FL70cAIgF%2BU%2BgOxXXp%2B2aRvTvZSpYllxDp96AFZxddAbkoGDSg8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDu5OtEGNpfok5QddircA4aasy9YH2f9sd0K2zwsqSU8v4KmKuEAZLd%2Bd5u7524Bb1eOj3kIsEyjfQPuqvRiNW2AoLkYr%2FJBrMkDNkrL2cBRxX0768xjqcGPYGPcHysUK0Yb%2F%2FDg%2Bnt%2BDFVhMLMJGA4FyTmBA458P69NSm0lHlemrL%2BR9ymPQQu1csZTeMhsejQU%2BkSUy%2Fj5KgUKEDa65nJsFH5wotdCE2%2FSudf3U0jVT81vVrZTH5DoKPK1XvLYjpplhVleiAW7C%2BNo6oimTKuOj1j%2Ft%2FRW7Eb4Vf0u6W9VTNBd%2BSon5QF3wWCNC2rGiMGsnZWRz6XytqGIqYMoBx2dZa%2Fn1qvYn6uhYi00TFInb5LSTu7cFk4wR5K5V3M8XVtRYqhQHvh6FqXrGUUGm5GKBdWNGfW%2FsFVLcYEa%2BwTFcVBw1ULzXzj15W41btcldtOsHlKpInkGJ6rsSLX3yRUxOcKoPvyh3SxkCTkkbo3IMrgfw6EsPPBFnSxvy%2FZG56D0KuLIDD5afN3pYXBcFo9aUg96fK3kLirBLkyl%2BJLaD%2FNpYuRxZ81y7Q5TMKEZ3uBnaKlNX5IUF3neVoxCD8lwyMvjw6wc87YKwFz1Il5bgVXEo8v6KGqKfBR0Nr2OUe5wdjnzUIPLUJ7GMJefzb8GOqUBwL2RNiqe3es6OKOrPhaEIhuS59Nho%2B6UmZYN0xbZdgv8YccMyQtB8W1y2CTE%2FGIDWckmjBA1BG6AKK2xsbMxfGnZrZ0WDYKEZrrItu8Ucvp4W7pAjccwm8rxwMklon4DkFjQwsO4fxCJHJO5ticY%2F2Ed7bekMZoblEZDn7ZTgbR%2FZYmGw9tMi%2Fz%2F1RnmvqrbVGW9E3CF8zLAMH5i1iGuEKat0sHL&X-Amz-Signature=5cf3af10bad91b77d76cd948510bc7c5c65488f3b817e1284efa1e1d65aa7935&X-Amz-SignedHeaders=host&x-id=GetObject)

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
