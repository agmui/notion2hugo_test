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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WZ5EHZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsxuExzF%2Bml9HGKy6bKcJhRTRnjIs86f4rXaZVEnURFAiEAxA7X6%2FdiGlK5JDmrFl9e8hUihhjYjN7Q5bT6B5I5jwsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJMlMu8QifxOxdcUVyrcA2LVCO2SeiV%2FX0CTf5amzmJyaqyKycvuAOqrMg0761TK1Ro7mDH3DIrWcdX4GuL8lgr5cfbUE8q5LX8U8gDqg5%2F4nfQ0VpJ%2B028Mo%2BHvHRatpx7j5dRuGm2nnuMt8QjPa%2Baq2uEYrncNs7WWa3SZUhRtJAYYSB9%2FGofvi0mO4IQPReib1y2qk%2FOSgLVEQDorGkhbQK442qUjpOH%2Byc5MNh0QGWbRXOY27AVqtP%2BJPXwuGoJfQcXnLNAVzY9qzeS4bfzcYgXf5bIRQipyNic2yOXSNrvn4MkkHHqjcO%2FzqSYDD%2FTfePo%2BMbBfkek%2FZT1KNdbUPj2BFRwO5cO6SkkrRNaBJukrQh7QVEfw0gjZzBzmINa5EV58Ql8W%2FZ9dGBfc7qSo3qXyw5Ij9xC8eRh5JPV%2FsGUCk0sLeULltcdN8xmeAbZWEtzZy1ICCUYOiSOLKLIwLIkp2pxxU7P3r1donIds7jJn8pKC6c%2BY715ejw1%2FMxEWZuHi7a4m0Rk%2FV6%2FNqeTV%2B0e71VyQKbTkDcrrVY8oqcYszGD%2FtZsBx0EOe6w5v8ZvcpuUeIuOEc1jtz4iPJ1te4vFdUPE1d6%2BQi9J%2ByWCYe%2FVPt2EbC44t5NwdeM8c77dxwyM73h%2B3U%2BnMN7DicAGOqUBxucfP1dSAlkmBxnKPcxgaSaHJa88pWBS0hLs8yY5JpFc4EKTQi48ghUrvWAjEhDzLp3WKMwSDI1TIhfUnNyUg0eBvx5vCknVpK5TCd7paWmcvDAVZlGsfELRg3YF2KjKzNBwAk5B2VO5kcP0nc6Ob%2F%2BNOgZ1DJuKZP0wADi8AzXLkU%2FcD3pczo0ZF%2BrhGCEUZdnEmL%2FR4DnZYVbf7NL8Z9kzxbaO&X-Amz-Signature=388530a6645c538b0fb20bd48665394ee385d1922dd533f1f26d56279ba13e20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
