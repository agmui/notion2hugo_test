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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTETMA3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXMO5pyxzzWzbRJE4%2BGIzNh7R4xaqhGNBqbscMX758wAIhAOuxdO7HKqQ9e986oN0grgNmlnPLj07uZRnqU3D9yE7wKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7m749mg9z6p6k6yYq3ANVYHQs6qBx3kUePOenFxLmVWMzh8npkvy%2BD5M44YxHqD9Di1GeNv49EyKAf5jtPB0PApPRvTndq098uX%2Fdaph%2Fabcs0QQgtWYbaNTwrx%2BAhntNAbwOvVXASoMpQo%2B2zhXP%2Fhw8ZWljwbDHvqB261GOXnLIykFOTFyezegPwUKSczCvuvU2YAyg1rjw3JADWldzjdJhvdW1jicRsIbwv%2BRyOShpYWVEXD8YKdcZkZ3dd3DiolJUF5GzmJoZhTQH8oXMwC9uTooyBJgDV3%2B6rORZRvzcRoCvDFtqo%2BZGCfMaLUJuFqmC5j3R3fzJoPfXtUp50pWK6mUW9RJTC%2BPAwX3gazB1GtHINOZazEC2jPmlacpnGo4b0l75keX5Z9zeOTbxV3M5WWThpk4mFz3LZY3V0Sot9Tat%2FHwEnen2XWJOCzmnU8n7cUrKoh8xnquCbCFmUReKibnWdwc15RaOBCExufGnj0iJQO6a0Me8JuaVZ3mhmjeLqFdfevnPsxgGMIK0rHSbTTIlPPGIofFdGJxW2rn7BcotoIZu3PLTU6%2FZv7i%2FZfXkNVhOiy2NdrwzI80yAtpc4Ke5MJxz5q9EkOV0u%2F3H00iEpJCFoQ3KcI5XYvDmzBqf%2FUQeCEuwVDC7pq%2FEBjqkASm76vLxiE%2BUubsWONh%2Fys%2BT3itxMjHVGkyj%2BhJb%2B8%2Be2riQzt7Tj11b1H1stw1VKXzcSpzoha6fXrFg4CdaRiLvjHxuk69u0KK3ZcLMUabpqdUnIc3n5b22cUz71UjBy5fO60p1H4NKrD2ZSt2WeURQBcy3QNH%2Bnne9UnvvqitypN3%2B%2Br3s3v%2BFg26zWaPqZy0CPdUTO0keIjzQ5HCpR09bzICT&X-Amz-Signature=e657c57b3a712f9eb8ba19650dac7c9750af79f30e5378ebb6d474f32c52a310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
