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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNN5YS7C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlwUJwhjl8dqVquWQJ3uGWfob8htKk0IuojZqwWhXbQIge9gUD0zZpoZWEtByBrz3kh4NmUNVSjd%2Bhq4j9uihSb0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbcP%2Ffg6yuTW%2BsKPircA5EqchFRFihankPO9in7JklnlkHym8gREsJXXo3Pvs39kaWuss9iht%2F0agXa%2Fy59zI6RaKS6jZTsGWyxrsU0r9BHxstz0EgrzUGJOgrDgdZ%2FetdQdhfKeR0iw9xR%2FRO4a34bkALzH%2Bb6NiEQnzyJOaHEhAybe5hZECSL4V%2F5fB2Q2I8d8NScLrerraMgH0qvEex9Fja8wvy0pJjClwPN4s%2FNKmhsCe3utqJy79N3joHD60aoWlIbRbY8wY1qptGxNbtyjQzTj6h7hYcXtWWcT88qjHL8s6TAXBqNk2aa2yrkuvfRuVFz6lKUHSqihF35Rsmt%2BbFmkXDWt%2BINgv0azBsJbqOK%2BPHi2Zr%2FstdsrtHCAM3DMuOYPuq8LOZe4UDbkbeuequQ9R%2BNtBO9jzpTQtWofFfTSCGjtTxpWzVBGQLhe3bSy05AuBrzplHixi2McEUiWD624S%2FH3miskKIvTeAM4y91cvhvaPtjeu%2BN3cWe3e44HlYu%2FwcMbuu6q6XhFUj0w3maY67MsbD7A4Hybnd5tc808qc9FaLtIZ2tlFn8Cumc6qW9B1HlBQDaOZSTgnud1mdW7YPk49D32WKOteWKp5AMwiOvZmInToIdjJt3PHq5Fr6%2BA7lZu3AtMI2NysIGOqUBiTFRBR6t5MRHpl%2BGpuj4S0kv5RBE7087%2Fo4PrR8dhqvGOZd5YzntTTd9JGKgtqmGy6dw7Ldkz%2FcJzBsnuG2Lhr%2Fy9vWC3LOij4C4be%2BhYbtc20vrRHxsYrHQaIj4WZMHgA9D9uQ%2Fvjjmv2Zx5Of3cEwpWevYZD%2Be%2FYYAkJYAaVlP887gu7WilJtt7ynCfZws%2BInmX6glOLcS0J%2BKlhdE2Ik4uyPY&X-Amz-Signature=95ca3c944a1b9f6a4507a25e4d8d6036bc92e7a8f20c15fe5bdf0c6b85b0396b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
