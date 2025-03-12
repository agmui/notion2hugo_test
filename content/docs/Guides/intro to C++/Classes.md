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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJUMJQQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDgPgT2%2FLoXen26QLmfBfaRfA%2FF6QIjfjfnw6m7ED%2BjQwIhANbb3rJmS7vauHripPp59TFsGstvF2NszSY7pOwMr6aUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW9g8MbIC327k0Ubsq3AMW3Ief8zlRqCA7m%2FBotF1oMv20DWRCI2BYrRmOcDiYL2Bl0OUoAmxS9vaNgIET0Ua0aaiBZ1rPXr1GyMyaQ2FLGoWaN78eqfpBYOVoBecWbzgfziGnC0Ho5X9WJFqEz5Z3OY%2FH0O4tr1x4SsGX5nDdPaCFOanSNl2iSSH%2F5a%2FQ%2FyakJDJUcJ95tfBqs3DpRPtNzmeBhnkNGZ%2Fkm9lpeSmIz2c8K5HcmOhwgfu1Fv%2BKmiBUSol7b9tllSI3wq3uyVuqHscrT9FIpmFzsKrjpzU94zQxkcMz3HzMKFT0D7eFmdfdORo9emkW3NSsIFTIk5xcltUORBOw6WmWAh35vxsTfOn7vnKe%2BAdRAQ4W1LS1bZFPpHUpPgyzdnbqZ3VBhZFFXac4ls%2FPIBwaAjF3OrcqA2aYmvuLrw6qPz2CTe2AAzziGy0Ls0MDbGH0aw85YR8SOsFkqaE5faS17jgfbHy%2FZRjM4Guuydw7GuZ0dO0hstAlNUjdPvL0WiZa6fVnnZtpctbxBTjpgmBddMVsZAe3TSSm5tJfux73BAVlbappg2BHoxe9clUK6NcJwUhQDNH1%2BuZBNw5MBkfimFsZhMA9Ur4uz3a6NkPm9HHlbMIOAHlqucdIpe2uYUkSyjCK4ca%2BBjqkAfFn2r33Po5AP3EKDrBdZeBcWnL5GH6bxCSVdJdlVFqxhS2zjFZJIaJFLivzOXk7gZWFMGAleZ5RWKPYXQYfAzhkq0B1kY5Rnys5qP%2F4eG2v5ZifmhjBGHH2KnqvHRY%2BGZLybHhg5lZYSygPbs%2FtdTaCg2Y9oi6dEyWQFmKmX47a4woPH6kQ3mqBmugU1jh6krQGApI9nW6%2BPkusCvBs8K8UD8Dt&X-Amz-Signature=8da9514307fa02b4c2258af0c6ef90f1bb87ee142bd92d44da9469a8410e5d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
