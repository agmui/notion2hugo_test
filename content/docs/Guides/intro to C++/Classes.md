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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y6AIONV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKXsek8L%2BMyoBD1Dd0IBN1hPwvS67tlTp%2BB98E16hsxAIhAIClx0yuWLkGO20OSosE8KOAlPFO3KIYGVvyE1JSMnFcKv8DCEEQABoMNjM3NDIzMTgzODA1IgwiVrT8Q5Glz9Ri8xgq3ANfmLZPd5vPeD4ojTT2LFNvdFBKPTFEhWHqE63l9UEVNA3TSwpQqX66dbdxIqJ2B9xenrzf5A3EcYUUeOf0DUIsvHBjyF5xKjiRC6IZ0arPd8E19PeWXWK4Riuo0LyZBRiXKb1quLstR3atBkvAL%2FwcZaQcgYafBlCyjZMlcu1UfWtop%2FQ%2BXZB3Owb8c8XbnNP6ul%2FCG0EqkjBMNvJwIuIiS4RIqg1kZgisNTJrD1CnPdxjpGnxrpPR2KjAZ%2FQkbAwsrXXIYEWxzP%2FrM5uiMjhuavyl16Ajc%2FGgzbN5i%2B7rC2wIN8Hp%2FYHQprlzqaexsndR8WmK%2FEalk%2FlAuSYT9dzDZMkJPwEB3YH3EBXCThgHmC5DqVQx09lcT%2Fuum%2BlRg329stdr6652Ib57EwaTJtoBb%2BrzauLPJ1GMhdMFTNhf%2BPhX0U2%2FzB3dwMf7lrCnDSPcDI60AUtfw0BK%2Bf0OZARF%2FJtyN95L1uW1Js6UO07b7oSMp13C0C6qGN9JD%2FN09%2FxFm6peL1hp2AhHb0UpEOKsan1b1L%2Bi0FcBrvbaBGtoMjF4UEZJ%2FhzWTHl9cOxTV5dlIPFZgvAVNADuxG2gcZ5qsIjGRLR7Ny1nomIP366fg9MltuPKT3CfFZz5yjDsr%2FbEBjqkAbbC3VuyI4b4ihv2RpNADHZw8DkQjtsaTJDrXEuBJaLCVj3XyAo9lkL%2BpYJm2wFuJVJRcf8PIpmYPUzLg3A5d4aqUtQcMT9klfnZulbmhca43TWf8d0pqZh9VfiVQQ3maBKwQixHshKVirrl4eLptOKpVOTqZ9is7sNja%2F4mpp5GQLpYx1zJlw%2BKXXMJUCoKQ8ZzXFk2JeAlk%2BxeQTJTqHWRmLxW&X-Amz-Signature=96849df01bde0d6e8df129f5e8078660293b5e2b1081f9dd4efb5fd005dbd411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
