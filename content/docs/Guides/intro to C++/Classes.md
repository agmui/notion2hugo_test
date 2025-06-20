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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C5QAJFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBRecOCClDHWhPHZIdkxGZ9%2FhiR64P03GXoolSkWEjkAiBVddPkN8Pwd4ygsbsb7HFjIktSdE5KixOkXnqk1oGnliqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjTTHLrpdvVox27joKtwD6JKag569tM7ZYDLJvRcaHUobBRzIHAr031Wfl7Jupf1YyVT04q57n%2Fes9xnR1hUZiLrM5XkqkB9Dn7qjKgKbJt4cpewhJG9HspABHovwfcVFh8Zc2A4qKsdWylCMjjGYzbsbCZMz1T4BdjpMtzgE3igCsg4imMjtcY2UvfEYbbirVc1xPdztBWpk8ELu45pystlk%2FMMJvRG9JCkYqnm4hYBRqffvlDJAoDwSmfYm4TDTcrJeY3uymIxiWAJ1aXyY2Eo8rHY6hyl1Hj6%2BQfns16mAKXW4Q8RcQykHx1Z1BqqyFdyOFQgwhuXVw9GcEZYVy4heTd1tPZU57RGG4eOaYYeppLADdxW1MjBR8s9jpiCtJu%2FHfN0rsHerZX6pRAXHmgrQms75YMqB0Tqpk%2FJcX3Z%2BKvto1hzPUOZtrJWDEubI6Zh6r7dQwB1ZLeriRrL24iNy%2BQ7LgV%2FzmjVHv0w7AMF7UtgiLCC%2F6aWDkYjXNd37j2ORxvqbPl3rfMd1nC3LdIuz1W69AIh26soBwEVE0xxP8oiuUr3dlPoUwGnyZ9bQJ7Krc%2B0MKNHpKWuwf6RVAq5UkfsJ6YwGjBeFM4Mzi96qobM24sVKplj%2BP%2Fn9i1CRMA%2Br9jHlRvS%2FPDsw0sHUwgY6pgG1H8hj%2BUg9JIzxQoGd2pQ72jwOi6zb0XAbYf6fwNGgl69JEUXBLbRumUO7EhE3L%2B1pzEC3PScpNQCr89Az8CuMT69u4OVB0F60o%2Fk5d%2FmycNV6XMzJBpBBJgBvcD4RtNvpPkhNCnfPkfhfOYUX%2Fpb%2BXNPURbPFrz959E%2F%2BqQpzZyoWLO25rRQAe1IxjesFHZHAv6f39TMz8%2BsOBCSAOOzMWwnZ2BwM&X-Amz-Signature=59a328ebc080a786a8b0221b5ab62eff52548591de2b84d9074951edfbfd19c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
