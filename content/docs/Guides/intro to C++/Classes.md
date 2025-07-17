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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJH25GZM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDi75balrv0Dnwpuw0reajzZMgP1XoX41GPwa6qAqAMHQIhALx8a2NMEQ0DxdACoRgADDEYUkkKBUYcnU3orzadmNXwKv8DCHMQABoMNjM3NDIzMTgzODA1IgyCsjECfSP9V22YFUoq3AOptAloJfzkbHiSZ%2FX89K8o%2BEkiVEk0kNIvEe%2FJygQnYned4iaPOlz2fmnbMttQBpiHN00uwTP37fhJ25EW1JvEp4pl9yOajd4VqkmHNsgiVjjYtHF9%2BBJLItNGHeZIAoTBL9%2BYV88s7T5oj7gGgfCGWg68V2IdiAhGh5bdUo4nfePf6UzOOpzQp8FyyrpqoH2cLjognSaPEl8JfO1vQXL%2F3ySFvYFbjml%2BGTPBf0K17yt%2FkHWYFsvU1phZEK%2BRulzroNN2JW4aw0%2FubV%2B%2FSYgURcvfIVvvePR2u7etkoXd8PnITUcL8oWSXDu%2Frz4Ww2bppsTjJO7qKVc%2FlH72h%2FcYYIFr4fBilUduh0vj96FjXUifOkFpIbXLPeRU8EsPjgYQMaYTyQBWpt5yb9wK2SEKSIqRKlVXtXvqfe%2Bnf0T8J8BKS5hmb%2BMS3uqQJl4rLcWG8uW%2FIeNMp3%2Fidsj%2BU6%2BvCPx8ud%2BkFAw4V56rVMu8fA%2BtztMhZ6bTT80MiyCWx8iuUsLmYO%2BY2oPKitWUH7f7Y3nIP8aY5IzBNxocN5ogXhR7Fk4%2BZyfz%2Fis5w0JBEXGBW0z%2FOiUX72%2FQ37%2BIs4j2%2FpLFOXqthhqLCeW3240Fqx69yTR5fCSVB%2B6trDDikePDBjqkAcRSYrh1z%2FLYZBXsbkD66OvJdzbDpfavk7MHMUc7uHBYiD1vNHTM5I5PhYRB%2BfIdY1Q0vFXPXMeZUBBRcfdtOrYVHyNeHyKj4fwceGKLME14xKUb6BD2hVRm1%2BU9RhP%2B%2Fi9m29exun8AqvZ8Xd93KnloFv9%2BOfN7GLNUBVhXxa1kNTxI%2F74wGjWLsJVJAK7RzhJalp9ugEqyvAQ1IuLLX6ruSTXg&X-Amz-Signature=77dc3fe696af117022e6628b3973a9e3dfe89b4676873ef71010ba3a3f3ecc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
