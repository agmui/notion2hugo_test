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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544AQDFM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIE%2Bd5mnNbNye1BL9Sq4l6mK0HVZ8J2BOTggWUKqW4mJOAiEA8cZodL9KO8RDdj6rVywPVdjbq7EoHQgfjYAy8BdobLEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDF24YPDdhccIlozO5CrcAw029XJDkJC4nQMGIIF7EM5ZzgnQpnYZ5tpa35awY%2FpYNmE7PZzXhob2aPpBz1IL6QD%2FPlq6ELiNpe%2FzCsExoRvulmjiDxvKjKT76m0PHyKzXlD6ZS0RiBPBowl%2BB%2FX29YPK6qGXj3BDt20nKEZXjTmokcdUBNTDt3KgvW%2Bl1Zt7ER9Fbi0x4SPSNoGPx%2FvfVupawRve0z4RZ38OwgGdqyIff0%2Bl1V328DGBq4jXXz58ZIKal%2FWkrl5QCtQErSKnUH%2BnvwjQ9JeeBoObXmTTh62K0070bO27vRj3jrB55h6%2F7JLoJegv2K9bogwghLPSs5LeVGl1gsuiEUnCIFjMBfFXb6G9q4bnumcSM361M9sBVf9UpRNcgkz%2BLlK62QnlDdd9AI0B43ZucqU7%2BK3UD7%2FUwpWoyUtZ7gSWxvDvo218zXG1qZkc5WB73kpDf%2Fsq8l6uYWqD67c%2F0JY%2Ba2JWagF6KsqpbOeVwd6fGBrHlZ2ets2DNvTmxQf6rZNeWd6saC9wuTaEg8ZmEMGvgWN9GDYDDY9n8qfvzCIfJ90M9L1e5Eo0taCvVI8FRL4g8qV9iJncIUARN3Kz2i%2FXSjAUz2CJcO4iTvm7UrbhDBDUmdnNMy89qNbC%2F9LJlLPvMPuq5sIGOqUBgY0ve3DchBzKaX6dfxpVWK5pSZkw%2B4lv0W3dfyiciGqRZ4nTtvZlkINagmTZXInBXYdIs8etfIKheqgQFKF9XouDw5uze41HtAf1LSPHwb%2Fx6hEnNeS%2BBACHGvQ1eI8bQf6qUNlDfn0nssvwtPUU7jPj48Umvmj5HMheSkOkdna%2BOGKcYrXJ1p1avFqfOu5FeKcjRkk2NYABAg9naWss3k7WydJc&X-Amz-Signature=3b58e74583d9bd0a165d121ae561c9309a8f930b739da2c0273256047d27a1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
