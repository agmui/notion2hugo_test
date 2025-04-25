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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXUYXZN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBECfeKl3o9cxGJgqMJDb5vMJL8adNS4GzwDLGr7ZHF6AiBsO4xm4MEIlVgo84zoVPrABxjAezc3Gr01mwruLbjugyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMQ9SrJsraNXGm7ePhKtwDjqhBQflbn9KBJ6XGXgeFHuAuahaBGXB8F8Wd6HIZQIVjsDjMHx2Oa1S5BpmVHiN%2Beote1eqSM3cLTt5Ra7cBVQEHt%2B5OUgrbhcgmdgDoeRJbxdv55QfCPlPcaVsPKDTgrhHtci4jeBAXG8w9pkl3dknwCd5YqV6kck2AHBNdRYMGXFBJ4zkNJr67pRA8SwdFuv5w2xowdXnmvpIGG2vEDD1VXtugm5CuQ6CN9Dnh0%2FzZBIKVn6sElxruSa%2FiQvnbxMCCG%2BftHkIMw5tmuLSSlaM9GcADOiLRWjpc9%2BfbL5BZ5p3yLf8I1cqlhGVGbUq%2Bl18tRQHsFQTHGx8afo93l7vHTd8zHF8zMKb%2BbaG2RfuRZ8KgrsUT4BFsFQCqMnvyA6HV2kV99ImDY982lmTZKU1G4UcCuYA5uTkVMLaM4atkjPrqwtsdMkC8%2FvxSC7tf5Snm7l6S85jRKpUwb9a31c9zNCVSaEwO%2BWZuHCmM9HGdup3unv2tKrfm4Nd%2BiixGdFGJkpOzKXQpXZ544Phoi%2BLueee1Me7zg3%2Fkkoj6wWgVfvSVskdBjDYXfennkXp8lCImcvg5lMyI7a3MpYv3tVcvA65igPF01ljQM%2B%2B1JYk%2F9vvqp0ZyByeBSZAwquWswAY6pgH%2BFdrxawCZPM7j9hi2FadGdHi29o%2F44HnLSSqtEDtFkWTqKtpMS2Am8M3c79w%2BuM1Bp4I3aMhJ5ZivVQAFb2T0haD%2Fe3HERmxa%2BZigH%2BYiPpI05819d8daQ%2F8xbsum2VbVqJHQZMwU%2F3WXNf5T0vNfZW1J%2Br%2FdbWs4y1gd2zHDMdC8PwIHNr52QDJE4wtEYYKZ0W%2FwqKWL7rWdtnsEjM4ePJJS0C0E&X-Amz-Signature=29279bed029239a6c1e4c0e6490f27470fb9ee7a0f8bcf7d127a59a25c40d1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
