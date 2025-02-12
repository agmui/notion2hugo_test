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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AAANERG%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDncH7fF49O2yVKJNbHbNOPfKoSF2w7QmZD8dduSjAq%2BAIhAKAFv1UjovU3xPUebIDPdMP2IiMKRxMwjqvcVSiQzwJpKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ%2F3v6xzRGu8aLWZYq3AP60NfJpMiNa7rUd5aZTnlT7YARgrxL1myvDIYjsUikdeQM3rFc0uOxs2YVza4WXTDdR%2Fvt0eITySks6DST16jobBUP1J6Fh2j94ooK1lwxMrtzE%2FysA6pGzj1Xr6K06Q2dEV9tOAzWQXFShTbr3zyGy8esN3kzgEF20LRpDhFtxdbIcWYZFRuZdJuKsugk0yOuhPSlO4yq8Vj7Nh383CJENDzHVbArCcP0dpO9E0Roz4EFbwBvVEfiIwN2JJE085H1PL%2BA8PUcQQz%2F%2BhQpI%2Fp1WoODltc8B2YHxIvgS8bu%2Br8vWmDqWM%2FgvAWgYWIc4%2Fz17Th%2FhIY04tFeDZvoTVrjo5TXt9qMRjhUafb4UNOqb3Ew1o2YTCkTEDEywyYx0XoEo4eCQ4mfFhCbOakAtnC4qHdBMVQtTedgCyaQoTmMLHncRi%2BxGrGRlwvNg7Dyk1cJK%2BMGjpHDOg7WiULLx2yWBola%2B7GnZyr7sj1E%2BOo3gA0Lzat00h80N1iVpwuD6C0LksGUq38kLDOtJlzywY26JAt4PunCzxblkG8FeP6TivhqissnnF2NXbQ1Ra%2BOGNBnEUarVKCHDXinGBTSlvqMXd0BRgkT7yD2grNhGdKMzu%2BmSV7o0q4OZv%2BJlDDbi7G9BjqkAUorBnNI%2FOTX9ZNsL1fVtOyxOF9PVsOtfVpYsByXHfKM2tc%2BEC43GlY3EFOgeDbXvruPfExj5RU4AivOW5nKZV7TF3B4tuBGqKtG05NvRDZGWIGCfiANWZ2A%2FmlmRuDuzcZIPnW34BjwqHd143sHYIHcQCKsUB2ftTR%2FcbP3lgP9RWPj3wKcqG82JbF6Gr2CrOIMkBE%2FweSo24MJoK3s9SA%2Bgdyq&X-Amz-Signature=9eb91e1ab8d971b5899c23789f05e960a0ce5bcd95dd8d6b32fdda89a38afdc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
