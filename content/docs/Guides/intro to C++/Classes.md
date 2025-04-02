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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5JKDQW%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC3os6bVXR%2Fg8H8wsxjiv%2Fj3akoNxCp4ZjhER%2BYioWvjQIgLwSzbyiNqT4pDrBqOQoMXHpia0Cp1n28UqZgMx5L4YIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDni0bWgESWfBlfBeircAwy6YKadXH0WC%2BzEjxRY8%2FZbr%2FAzT5ZNTmzP%2B7lF%2BoglGA8zFkvore05YepI1zeonEuYeu6G%2FpL76e%2F3ODb2UgpWr%2B418cJl0cdKR84VZwjs03eM8q%2B3Gpvxvry8iKT%2F63gzNCyf1vQjW%2FJCESuaA5Re5VTNw0axxmSX%2B8zUu4ixPGxRuheqs%2F8w7YVFaLsviTdl6dtL4adZwgsxxF1YaqC8KCVhu6AMoTUYxbZehRUiPa0WJnzynh6AJ8xFEw%2FbwW0LF1hTVDMEj3EMIDtLJcPetssVDm9N%2FHeoWNeLHBMSgcsk62FvqqI7w1f83eSV%2BjW0ZwJsECYmiJoYr4RNBG%2BbzVMaCQ8B2Q%2B6iMCKFZnrhP%2Bx%2BDOHPU5rebLHjnj02XZ9sd7MpaEPmxYDj%2FniLpiu9wzCLg69%2F2NcAY1pWUvm6kE%2BeNsVjhmcIQAm8hleQGpb2%2FUaKuhHoIl9l%2F4cx2J%2BdoGBjBb2%2BLLggU2sFlIn%2FAk0U5nFJ11XqCS0bXGXjR7oKKa3Ehz3VDawCKf4RiTXc4cqXBE1Fky8wDqn2z7E30NjfZ64n5Ue%2F4I7qtRaIzJtGzd4bH%2FFC3MOCAV3jf%2Fy7yy4ANMgly%2Bzyvg%2BTYiJ7Wq%2BuOHFarKuZ6OOMKLvsr8GOqUBiNwnV84Kn3W7ZQereg4Phc%2Bw1QdG4EJTK5qSEH66XXmiBkhhBFXxVsR2cteKYMQYGMcjVUETjkR7ko9GhOvFUSHzLuC0sMVMMsC%2Bahk%2FecOVX6fL3JmSn9R82rQ0z%2FikDygIkjCUqUvq21JXimfkCcPA6wgp0wooYe7MUQpQcx2RKh96BPk%2B2BfBU5FSozG%2FLI5DhLkyGHN2ziGG9dyCiBWla06g&X-Amz-Signature=a9dbfa8b9093068d96eb4b49bc4f89fae6cc3a051ac7c6303fd456d8bcf99e07&X-Amz-SignedHeaders=host&x-id=GetObject)

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
