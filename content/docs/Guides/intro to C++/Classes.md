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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVKTXIJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDCZikUw%2FJH6clyi8IhpKVayXKXW1h4UdXDUB7pQj38EgIhAPXy1Xc6uGCxaOb1B3RFqK%2FRIz%2Fvn6zB9b3KuD8IzwBgKv8DCHAQABoMNjM3NDIzMTgzODA1IgyidNuzU8wVKsW2f0wq3APKIVy%2B5KwFQj14%2BQg8N3Gpaw64IgcEl3%2BfWNAReZ33YxaeCNokeYskR0hf%2B1nEglJHKSsE810zT4JRCv5vwdpHEiltgiUNTGZ6nBuQoObBlaWDYF4%2FUmkqfiKvM1w5BR1bpOMxrYyD7i6LXWwD4OVROwHtF5r%2BO4eEFrqy44l3LMEX30d0MSduJNHi4YG2LWuKNjSpNagjIuLHGNTHePhN2hWcdENvbDgutVXTt1MSi1vX4JyDl3s3Tglpgb3LliQj9pVA9O6nZ9TBOpeG%2Fo%2Frt32ZgKW7UcgeCz3Lhw72hvdHxNDQ5r3MwMEPnTyItfbV3ppU326iAgQlSEYOwHiBlED4WaRANfhFWOWXceMW8WvZ7Fvhps9SSh2DYu5W6HzFP%2Fkv7liJJzc9UGZUMATSu9ZNeyp26%2BFKMZjXMGy31dNyJ4%2BkxV0HihN%2F6JR%2BXPzFdw5pEdy3jzx4stS4ahk8JK2dGtbhnPFuFiXAsKPDQb9dJttgIwNdgB4kBJVxOOhAkfJ6duRXsew6Hc6K1myBM8Xlmk%2FKAPbbbuJofpvepFrhBAtHfmZ4eLnn3H7sEI1ZTAF5g8N53wxVrO9oJRt04DqaR64fFkewJ8QJqbkG0eTfbKsTTKEJ%2BUlJMDC867S%2BBjqkAUiJWtnRjgGevvZhHxTad6PL7LfI9He%2FCHrZTgrbe2l9cR70lD2tG4BhALc4C4x8vpj6uHO%2BsEWMpNKpXiQhubxb8hVOJPf8R%2Fz8V4k5BYk6KRVufN3trI47Fvxbu3bgMEgoVVyIhxVrX6tipYkKBfhVpi%2BvYBJ7CqgAsuDNXCM1%2F2Lr8S7Td%2BXiYYaK7b9XE0%2B1VbIyFpw6hbwZ1HzrD3IdChmZ&X-Amz-Signature=2df9bf29d2d2429e52e7d86be0379e395f8ef90e1c4b7a3897bf3d163cb6d486&X-Amz-SignedHeaders=host&x-id=GetObject)

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
