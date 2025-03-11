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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y6MK4FT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGfxxeXYQOtK4bU9i4l%2BOT9LA0G3ochoRHgaC6RN5MVeAiBAi8wxVqC6KeNLSaP3%2FdPirbNerbLeTlpuQDVuoe1dkiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvd%2BUOc6t4CwBE0XKtwDV%2BU1KabiRYaCIELe8lxE4DBY7PCO47eeYc3N1onTP2B0CRfVWPj401%2FQzhTAXjxLuLGbWedCyMj%2FF0p5wjQ8Uabx0%2BeFT2GrkrFIPUQF0bW4aOEltff%2BtEHL9Q1kr2vbnqKKVqeeMeneMcJ90zYN2bxAfkeNFpOBdU1X04BJOVTBpvmGr84xaPOsK8eAgpZCu4uQ4VymsIlPUG1wO2Lq3yEBMplzYHU0w6z%2FOeBTyhGoUTYhQUpt7ygLk9sGZfxGvXLFa4QhznZN7MeeFtohHcErB8Z5Y0OJr6iutHzjKy7ayhy%2FL7X3Zmp6WAftJVJatq7HJSOfRN3VHC3RQq%2BjcN8o3OgIdPPv6r6CvFTvm96vw6AUcioOwIqlbNh3Mg9NDmkWQyNXV7a4OnbeinCSfLd6AJyynRUb2KljLA4J9rQqXJJjyR3a75Np9obDqyue7SNQ966yXmBVjfwjZA2rGX8KirByZzX1pv62QmKDyiM0xP3bYKqrxR4UHArUWck6tf4xW8xH%2Bk%2BwqzeiHO5nPpiXmPR%2BhrXqyDAtykjuf3LeNk1eLpOp1MmBqhPCLjn7DgqNlftsOdABar5ed5JRoESiO7QDjlGuhUaY84C6EQZ%2ByCCF97bk7MMa2eswxK6%2BvgY6pgE2SY5MUKTrTcDeBAECWjSWaou%2Bt%2FPdLRmRdWlX3L8j2SIDQg8ZkDzwExz8oSRDxK8VVcDKssD6G62395YD9c6py5x2Xz0SAt8TcXFeoXNUDLf4GnitRyT22QqGFyk7VDJSMCMS8CH0q9%2B4G6h3lRYCgk8WbpfzuOlaFKEn0iipWO%2BYiyxFqgv5DmXJVhJpDOAPM%2FX6l%2FSgrpIoMmQNLfr5mGp0hqkG&X-Amz-Signature=a1aee80dfdfc0d9323d281f7e3ecbdfa4d162a04dad9e1b8daf23cfce0e23025&X-Amz-SignedHeaders=host&x-id=GetObject)

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
