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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PLBTM2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEqLhKplqkBjQNzdm5YStnx64g1FekuUTxsTUBRuA2gLAiBNUQsZugYXsY9LbitpZS7jPQfYeKNxhJEEEPQhj2Pl1ir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMOv4it4g4hqL%2B3JqCKtwDcBsS1N7sn%2BOiYs6hezdmfzFnhDPtWq9a7ZUg5JHXgbah8VJ8UTxZfJUemvQoqmkjYn4TtWHpHYklRJA0yB6OE20prhTeXo2rMMaZ8S%2B11Tz5KJAALYHGgTG5KuzNPkyORXb7%2F8wSaFZTnPpuKEPE5Utd5TyTrrwrb4xi9lLqUIO1ae7%2F2rJlTWUvnN6IHbzx%2FMALWvx6x9Wt3%2Frp0gqpx8XiCD2JsjKuwAr5oZNolpXAbAKcz6rj6HL6arG%2B%2F9RXpyT8wICOtGs4QjIw3v%2FtXc0v0E4gZrCfGpPgitWgd%2Fz2nmX2vOk6hSCtfmuhE%2FGlyqhkmN82Rl3uy6XzRL1GkqbrLId2IdA6v2chNkvnbvs2VsIAd%2F3GflF5FYdH%2BzdqGMzAu0%2B7dD0tCJTaRpYEKRNwcvhRlwIO1nT%2B2G57VcvwDtqCKfHXdIspUu6mZHKgiGpscPcSg%2B9kr8fS783q1%2FH8R4185VYJO2RflZ7%2FvWtWRVKfDJi64QSZ%2BSkFKBeaIJq0C7tARaJTYrBEaw0hXbzmF6S7DWtAioFso9Vtnbs00Rg1Vx9WrZOlQ29h8mXrZCZQFaZ%2F4yQpj1bJa0BjRAlA5tSNxpQYHzlA5j4dSEsiPhfJ0vBHdjtffMowvdGPxAY6pgGG%2BatPKhCSxyzSs1CCkpIAd1WU7%2Bq%2FvkTcjTBBZhSsKXy0qro2G3vf9llVKeteafxO371Uj2Rp4V6Arlq6HhGT6NFWonlK3G8Cy8uxZGnY5uyMWXProlNNy4vi4RejxFMuPHknZx2mkMgBws9YMoLmwb%2BQthK0PJKFqDMeseVLfGWN2I3UYR%2BYHNZo3za8G9cdYFj5TeHEGc4Oihbu3V3T3ggj7lXM&X-Amz-Signature=ad95eb636adfad0f2bdf4d10540044406a06e31e1c92f3453c2908aa622a8820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
