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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OTYRGZO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdiCltNcLLpPETouXJTtcoC4YrNqBaeG0G%2BzmzRa2BXgIhAKmie%2FSe49rve%2BL5Y%2BQ%2Fg%2FX35nzj4T2dBY8dT%2FLTpBcoKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoG1E6bt%2Fw60f6mWUq3AODb32qtfzX6lGltq9SxCy%2FfPwAvdjeYIuexjIderiO7EwOJTJ%2FdWjvzM%2BrTfh9dLBvtfEG2fhOwzg%2BqeEy9b2jfQrWFu%2Bzkg53%2FUcP0nO%2FNyFmyxIxa7W0SS9BkFv%2FzoQbhoQU9OALwh0%2FEIRG784ZjC%2FlUAH9fcUHbqu3TXQbdQwLES3Bvz12%2FKt4jrbDZ83Qxgz20GTRJQGCfKh70YZUOqthUDzFC6YhU%2FIFZwFvZ7TZhP4X1vIzmP0NyyEYwqjuvM8i3ZpSUJhoIEAxcy0gcRQE79thaCQBHp59ZpBr8Rmzu2pfo0U9ZviSX%2F4H%2BNRMGQFOiEUZI3FhhCuEkEXKvAO50pA4yEW4KMRSAruQuzzCIVni8wU0DIDGv9hbwS0oNgjL26VEwAiBHQsAdnBXzpq4zCuru6xAr3j2F2j6mmh4gp9xg8alneQkLEUUjyNJDS3WzBfqibODnqvwvXU2g7qFFpWOwEWECjjDNIxzq7AfKjYd8VcZsgZbPeOh4tgPrNrw6HRaGVLAgzbTJ5dBITr1d4AJvISo619OblGoUAxU3jFffFFEELol3dYTV1U7IXPftPJ0dnLPERy%2FQ%2F3%2BbiLfBIlA9J2%2FWETuTahqAWXAmdQ8EN%2BlPjK4gTCBzfXABjqkAbuiDWB9pLiFdsU9QBWUGwkhoYU2TMuGUvPfABjpVpROOFrTqtgGUyL5EnIZ%2FflEetzKAO1kPli1lKvEyqgdPgg1UVdNpmQNFPxPG6KQJHubdVqxALyHsOBFzfXdmdnS3M2ygnhU023uLI81BbXxrTwWA6AwBeHgWex8oKWT8mEGXrzeTEbioz7Kb5u2BrB%2B0XFhEgdmMiZeqkmKtJd3%2Bb4T%2Bj%2B0&X-Amz-Signature=0f1a1963ba230cecc77dc0029db6aedded8c392741a3bea1a6e0750308eb4789&X-Amz-SignedHeaders=host&x-id=GetObject)

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
