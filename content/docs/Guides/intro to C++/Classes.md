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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE6ND4O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t6pp3XQ3FgL7cLFGo10d86wuvrHkzqJqjXZnfE%2BIwAIhAOCWjgHk%2FVNhT7plvF%2Ff%2BxkK7O1uFe%2FcDmE1YnEG1waDKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXO%2B%2FNVNKXYyyTHzgq3APQNwKc2zoJwzxZpIOSGhzHDBHTEMpc64LepPcuTl56%2BQ2KaSoGVa0KSQwbTFXvS9RiXRIo0wFHbNoQeoZ8bK%2FHFih27XSTY5AwSVfzIGz2NX80QjxJnp18k9nHPg2mh2c2aPD%2F%2Fynm5eClJ04yuj71Sm0%2BHB%2Fl95zlxcKZgHC8d8gNrnz2XdYNWz4V1o%2FG47xn0Es9lH2sS8t4xwXq9knYJ2XnUT63dUWE6ceM9xuViApJrhBKLNt3Yx3keU3Q%2FJ41DyzF7aj8aBkmTJq%2BDIT4bAkC57wjmtCNh6pGccd1jHCjhZm6MeX4Hudqdxqv10nDA%2Fsy4u921ovvTIgICKiFbRtAXOFJ%2FKNt9qVSyhQrF9B3Tou%2FhDUBbKbxpcEb7A5hMpFxKL%2BtIiIQwoqAfgk8xllPdq31TQeo3GqQtrm9C1pssuQHqTlASWoue4HOIEAYisvc9XOHnycumdTJRNg4DmC1Ov3XJEGruDGKwjHvscxNi6EnYCiL%2BZrSjWJiPwdMJWaxYj8hHvwBzaxrBcdUKzG9HlXTSJdD%2Bj03ILvgnRjcleB7jy5gsEmBept7TQ56o86RvucDzWJHmvasiaaQ5r%2FDD4nnmWQM5oS9GNe3u%2BQlIZVOjZ3f5b6TGDCCl7q%2FBjqkAQLIG7u5aMoR%2F8wsoaWM7wFEmsPZ4enzYWkRWZYlkDk3tIBj5oIO9IkDcdk8DpPr9p7ISy44HvgpS09lcP9Sj3o61X2%2B5O%2FMYe20RBtko2t4edRPeDGTJJq5XGkyrh4C7hcehZGufaW6Z02akwDmCgt2DyIbH52vVVn723wYjIyRJX1SibLwpV4bs2xN4q9PNu6KBG9hMbSYiul334tes%2F%2BYkmSr&X-Amz-Signature=be642141fa59a5b16f06d6f92ff1725fc76e8c4e7466fdf89a5af198ea87de99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
