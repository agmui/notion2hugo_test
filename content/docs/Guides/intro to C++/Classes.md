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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625WVZV2F%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIANr8rnbWQPaLWfslWoCG1R2mkefDw%2FS5S4IPzXvjat%2BAiEAu6F4tTn7caFaKB%2F6XuTrP2%2Bb4iWnT21ZJIfqEck9UbIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOv%2F6%2BnyNnDSpbSa5SrcA8%2ByyfIfcJzC%2F4Oi5%2FzOFcg0pabICzdnK3OCaqfh9JSnB3B4qJMktOilFqWwHXP5U%2FJOtqAqbiXYgao%2BTg4G6SvRcrp7asak9K%2Fc%2BbpEn7oGOI3yW4sWZYwI9k2GER0qKQOLOFvydGYsYqey69epvIxplB5GFtBbd1uVvEql%2Bfr1erkJA1U0bnM1vPjxt8DXdxOklyvYO5RwtAIbTd%2FOksAXsK7AHk2NbXBzZhF6ITaf0SXpV2lxynNlM2iB%2BtKlYt4Flc69pYAUB00pcWgkH%2BLVZM2flURTPYfluS%2B4%2BaSZsoJ9KZpNVctKf4EJyz6ddvRhZKPNHKrv%2FH2MQuFyvLTB6GiMBmxVZtD4ZUZFAQjIkv4mUm0FvMwJ52cNs%2FiYOh6XSZUgMmzr%2FTRyhvirXUyRl6uuT58E9KZ8G6auYw0FNB9ea0x2FCBz9yu%2B4DgF8ZFtO9nctIrUDVf0oKxDwzuxFqhs1sgrjEt%2BHbTW6jc%2BF2loXDXyynV5XEKeVMJb%2BtswpBw15099NQq4mSHGSQRgTUx2IBa%2BPJVBQk9tuOoU6q6vbPA0UgLKzIWesAuGLLSTPvd5tt9e%2Fwp1XxTF7wGAOYmSafqYEXdsRa17yfj87srWw9pFQKPRudnHMIS%2Frb4GOqUB71OEfMVp9wmTlGgIcAu67sLMRu2KADgYdk0GuRLqeEE4rIl0R09qOKMXRrWqyFI22hdVTaapvf6JTiyMR03GaTU2exumcVEUw3VwRX4TPUGHaLehzw%2BtMJKJlSIU9l4vi3PAvoqMt8ZjJN0ZIrbKt7BztvEXuWFsX8jfKIkqP7gL1WqrS2LokxHFd34KeAY7h8%2BZTNjmIpQ%2BxhbtDvzJtdnBZNC7&X-Amz-Signature=38a460a18ee0662d284ec20daedc06768b8d9ef1eee275dbda54776e038d7d87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
