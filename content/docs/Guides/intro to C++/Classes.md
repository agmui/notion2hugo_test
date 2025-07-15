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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5S2DZ5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHFG1nHPel8btcMjNuaRW0%2BVXSKArRmJUInqUsLE5%2FLCAiBZCa%2BpewgvoyhWU2%2B%2BKmRp3g2w8ZUoE%2FJga0YGyEcI7Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMMrbHgzHkznHC3DUOKtwDJUHwca4wOlcXsIER7GwRbj3f4Gyb4ZUT7XlIM6rd6844SKkevNvLHqKRMZwxRPpBl7cyOjYJfDWlODeiXKzrgqkkzywLdui9%2B%2FlSV216tqDqz1Vx%2Flg6ontfiD18gBQDHNbyMYkTcmZtF3OUeA%2BW6A6v8kPHTYDqqK7J1aU5VBnAv1vPT2idXR5jjDENSFad4%2FxD59xQH4arXAY8nskDzLHRU%2BM%2F0PTcLYTYipoZe0o0lqwEEz5QELSwaNhX8MoMlQQdqkrdob7sZgZX3SnfsP1ExCYB7ix1P%2BUfODqmzLd4128%2BuFPWqSd8eojRNi%2FJ%2FrUcPKOcR8uuYzcCdpijVM4vZFMKsL7UMtK%2FBIHI75YImHwN1RgtGNcguK%2FY6b5XcCuFdRZ2%2Bani%2B0z6zZfsz3%2FQp4SLN0v%2BsY6lzcRRoXFhAc5ZM0aIzur4uqUHEqYDE%2FGUe%2FRKLWgU0v9mz3tvKOxKxbhQeRYqh1pAPgoNua6VQpo%2BU0Ig7tkBGdWNzQrf1r0r5%2BhOLntpmRw5wZ3Lh1H0cIha8%2FDIMSxhsWAzPQmxGPyXn86ADeCF%2FxBUdtL7txgXtvowjq6qotDv7yYE%2BH%2F3cFME4atKrjeL7Iw%2BYDINdGKq%2Fu1UnGWVkBwwxfbawwY6pgFoCDtvVywaZ04TAnigddl3XsZHz%2F0cQrL8oOhpK%2FAtM8D%2FX628N4lxib3yjHZ%2Bp7PvJpeuQvKdHn5w%2B6Dga7GAEpMPxpSwFAf9hGssvnwD7Nr6qqDe2vlWtqWmfKt3vkLYMl%2Bs8S47Ndz65gQ1oHo1cGZsCiHhse5VkPRhD0wEyctfwd1wZ8jn1uHV9fhgcRbtEtJPyrywZDO8hf4Y5pqXPi%2B1qDd2&X-Amz-Signature=7f6787b304495efe4cb25d2626e6bd22a1600c6e8d5bfdce53f851635f705881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
