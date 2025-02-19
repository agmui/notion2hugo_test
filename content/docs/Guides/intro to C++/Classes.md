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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JG36PVL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCAo2tBaR6DSpnHzl0bEOQECo8JjMxkfZZxrT06GasaOAIhAM4jYvT8gqT%2FJUN%2FEqXyGDUA6IhZvENltt%2BRiLYiD4v7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxziEQ%2FCDbDUakcsbYq3AMVhjE4XUdhcldOZ6kwAZ3nLBF%2BbRbtegcOiQ3dSyMlOfodexnu0jWAhmnIl5UzWD24V3Vafn3Qqd%2Bxc6YY8kwpasAgn867mdBC4xslqLxv8wa03KbI2xultTjo8KWwEYoPm%2BAdsYhjc05bjKlXSZpviah70Ixg8wqdPlaCL5v%2BIHcgdQO7T6kRj814Zx0oHft49o6fb3av4gI7bC0IjTC7LhjzS7cI51YZTIUFgjskD%2BNEJ7cP4y1VISsmQ6SuTlCRMfpzBmuzuBjFXuNb%2Bn7UEqy56hSTQ5mjf7dYHTBGVQYFp2M24ShjBNp%2F21ftAhynAiAlzPC3fZS0MeOlcLsYP8PV36yt7r2HNik9jYRfVVA5gbvFFW7WdNeOD3uGe0%2FPL8NhEuq5eLbB2pm242Q8VmQiM%2FUCJ%2Bz2Gx0%2F2cKkKQ4uFYvQPEPgWbJEan%2BjN7grDfNJNElx%2FI4sMZPgFgZswz0%2FpH8oRxs5d3y7SLMwxPZS%2FUtd80sPz7CO0hmsH0Hel19iknLeemExwwKaVaxP5sMs7ZvhNLh2CNgbaG%2BfgFAwHMqnPNX56Ou6E3x6jcYwRG4I1jUYwKGmzGuz0ynBulGFGBg4emTkZ1jQrWKqKVQJGb%2FSjzPHfnwi7TCS%2B9a9BjqkAVL8tU6Gs8YEnHr6Qe8TrY1ySdzNpxxlp4lsS3DJiDo%2FsP3W9nhQLWDBnEZulahI4KMvcl%2BJD5tOUUoUkEq%2B0ccBUmfWnakeyBEK4vetWKZYA%2FYDdmCn0q1BQWjNLywRHU66%2Fphgv3GhMsa7Ha9Fxjio72xEFLVo63RxwDvLGivBxLt9Yju73wJ62%2B1r2nhfm3UMGiOveXCg6WddjHqtctARyvZK&X-Amz-Signature=e039adda1dd5573a1bd7839d47ffaa725c1faa7b1b5aa04ae6c826322f752dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
