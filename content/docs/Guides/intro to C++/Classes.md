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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJPJ6KZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaDT4UOWCPkQBEriZZBngNh0QFqk%2FWHSqGNNYPwarK%2BgIhALHNVasM3jT7FaSSzhGXpJ1SQpLAdS7I1BdFDOwCqeCsKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxUry0HAlOmw7SwUQq3ANz0C1bP6Kp1cdaXFjmvp%2Bb3rNPY9o1HA93jB97POr2ejD205js2k5XHK6sYbH%2BhSVqdiJnix5YQ48orR%2F%2F%2Fq8PMj7jfr656%2FLjORzOcK78fhQrv6pcehwvu0tuwDmJQK%2B%2FUGsaSf%2FYez7IgrbT%2BohHhSG829zmXME03MUHKRAXLvrwZWIHyMfVg79hM1nefSOUUFVl0Q9lsB%2B7SWxxlUSdjH5OJ9WTPVT8VPxcNUMZXRzSAwehxrJEIh%2FQ4WJqlrNDTaX9tyXNNmlbI98rMnOHNErySi4gmfqrtE%2BWo%2BOnTRQ3jnYaXhv5XBwePgPdlG3ehmg1wiz8LOGus%2F76tFrdBU3HAwRKne2NYrawBPhuV4KdSmwmvcNt9CQ%2F4rYVmvsplXoQJGeauEwMwcg9H2yJStiFBdv4%2FIik%2FfRhABakhPZPgiwXvn17vYsysuA8Oqd%2B8l95pPpDR%2FXTJya0PI0NWMHu6uipZI6mijMba%2F0NOkXntC7OaLdCWX1vvmt%2Bdp0hV%2FoFCqWiUd3y2cLcUyTh%2BA6etAAOEoRtQzk7J%2BdKs5vVAwp90VqAmVvXEg6e54CyPaYQAIj45jnZx9Eu6QmVT2nDKbEyn6Tbu1Sed4cA8yqcDeDRpEFh3P8nCDCQvNu9BjqkAdFKhnws62qDDDzvoz7%2BvrJ6GL%2BYcUWSwLj1s0v0a3T6Dvh%2B0bBdW8NlOG6kWovqsZAG%2BZQQT4Yo8inwCcMxo0x0calBZNpR9s%2FMux%2F%2BythQKO6F6kI%2BqF9J95cBwMOJDBNMTJ1CWXLXDLmDb1midQPDRcGBX%2FtVr3rIlTil2J04dOZz%2BmwY%2FPtSOqJVuLvUxHUQfARyXt7JJsNlpUW5ebIQB8DY&X-Amz-Signature=f704bb5b5e8d619bab5fb7f5fadaee8ef4cd45340f2b7f80eab67ab3e5c574d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
