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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAR6GVJ2%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOOnkhhR%2Fr0VAJ2qYKze72BnTHb1SgiOpm4h7nI4c8AIhAI5JLk8JBnGzKBg85BU2CjofZY8hnfie7Onwhqfr69YjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiNOTYeQoR%2FSPFGAEq3AMF13NqqvHGW%2B%2FU4qOcnfpKXTtQHhhgyr%2F%2Fa%2Fv0P3z2sHEqRoUaj7WbO2N3Ea1aXtKDNkPHBWcg9v8jDOwv4huk%2BhdtoNKO8Dqn4skakquSgfCoffvv2hZOZaZRN7Xlabru09ersEvce8wM7NpwsYZo%2FczBE6k8Sq0iNBZGT7esVsQE5hlFUbCxyvijMMyfLCOuV6U5%2FpgS1qNfQ8H3Kyf8eavVqlAWEg%2FyRb7YbKV3vV3JRNOH46CVjQ3lh27vK0w62LfpgxLIVZ7rDUscarm05m7415u0Lpl3ZKQainOiQMh%2FlKQ%2BCoQf5N8So1uZ67LqwoPTBYiK7W37xUBwHg8DhVsZgQGmqY0daVguywMSc0HD9zAwVYYf5O%2FZZD23KKhpAfckQEAEXa3g4gdX9j28YCVLsxIF1IN%2Bn88qwlkBxLcNYURjkwqdpdqyddtjAKwMpLoYIcWcib8bXcG1apBBnOYYBXVz0ZTdTcfH%2Fb8bHlJCh99VVtHBu3QAirtC%2BgNxPFVT0YwaY43tXlCTWNCW8Uf57lqxNM67Ad32HzhP3EsYYhcSuXbHqUfmLQP%2Blmn8NT6vXPWZKBo%2FkrIVhFO%2FCL1m%2BR13MB%2FVeXvUSO9JiUBo9rK3kcM0rB28tzDX%2FYW%2FBjqkAeuSk6BW6lgu1%2BEOwa1S%2FEPldTxQMIGB1gF2evjQRFgO7zR7G0Co6u%2FqwDEdXKoPZTeeGZcywJH3TDh%2B5d0ufv2Aoq6EDTt4QiuZyumzhsVLOjkCPht4guk5%2F6vf6VRTidBsjucqjTrfDSA7CUvbRIOV%2Fav8EGFHesDLkPQFUNHVosig8ju7t5y1g5k0gN9a9eT55zXGj02mnwpoDm2y7nbMGhWk&X-Amz-Signature=394779ace68cd42a964f299331677e3acd9a70574ae073ed378274b3c1945b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
