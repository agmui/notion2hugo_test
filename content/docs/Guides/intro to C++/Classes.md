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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMMOWNNC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe7Cqkiho0bZMJT9DrPOmFeJk7VgJd139toJieBT9AUAIhAO2if0Zbq1sb01%2FCMNk5e75bOrrvz5ajiEa%2FQ8FZ15AqKv8DCFYQABoMNjM3NDIzMTgzODA1IgzPQ9r7pT%2Fkawvecu0q3AMVlJuTQLsaKVib%2B0s8Ro4v9bvcBGTo4LcEQyd10%2F7%2F9fOQCIFCvxNpcndGZtzFYsnaU%2ByytByTh2cdsKFStoZgCpNZT%2BOL65hyzpzYR3B5Kj5Jbtq%2FwCkNha1Nuv1DUZx0mNsYX3zqZhpRc%2FuhJzI9pBjSMV1qpQCiQmB%2B0b1zn08IOJNmR%2Fls6RhIdhrtpZvIiIOCnqMEaY1t%2BV9qdfP61QvIT%2BACpgwMfRyC98n3973kb91jZwkVntIfjbCxqG%2FsAceoADuzSAulzlLoGvZZ7SsrCUnO98rSOWjV7GRsbQ8HEqe64txXKcO337zTNhtSp3dRq5M%2F%2FoLnbZ8AVPITqV0%2Bqgs1GFxclj9UjQpefRQquIz0GsvChfGT5MURnDb0xxuwZvmjnOEqsQLmBz9lb7%2B%2BFfVgzegUzAjmIrHMCabRhcAhJ5Xw4gbBQRKvFi%2BmazlZCaTahtD%2BRhoGysGUJ%2Bz78esW%2FvCLEc%2BUN%2FUxkgEfLLErk8BORjAIeXkg5icvGp2u0WARet0PF7elCfw0dEaa%2BOKthMG%2F%2FhbGKZuPngP1SNi7LMMC73A0dPKLsbzx41HUxONXQH2FhCvv4nhU4TjZAW0phAtnOcAXEpQ8f2m7sX%2BA%2BAy2mbraqzCG7bbABjqkAbJNs7n1P6Z5QMz8VKD2VT6ckMs6ATt4ZX2ELMJocaTXrjarFZ84FxqgNgsAZL2feIy7Kncj4bb%2F04%2BB6whJd4gKKgUgBEI03LgbKZRLQc8g%2FZE3vpOPzCDlFZ3kJjYo%2Fl2jcEyWVi2T8PEhyb2NrpWXzxqAt1wsrrRAyZorrnMgJBQyhDsw%2FDywV4JdeOAS5ery3IUP0ekm8enKqSM2g09kF5vw&X-Amz-Signature=14911ba98ece7a91a8702cbdee601b47368c6d9e14d8a8669e93dafb690c33e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
