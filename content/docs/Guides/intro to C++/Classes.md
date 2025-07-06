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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFPECPS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDFii8Fhbo5eyy9rqTV3%2BiqdgOvrDv6LEvsvhZ%2BszA6BgIhAP5TxlApnqoHSAApd9fVsRApLQcgWW3eovK9L6PO9Ij1Kv8DCFgQABoMNjM3NDIzMTgzODA1Igy7OfDDgfz8Qk%2Ft%2FYwq3AMrC%2FuIlA9d0YLMWk%2BIxYUreg0K0xKVNTfH1M85NWgNc%2B0rYVihpJPZqt6l1zX%2BqA81pVvSeEx1yyGDYo%2Fo85uWrcsqyIoTICeCR30kSDUVu%2B303i2tYxBx%2Bb5lExDJtZo1FKG2qFrkBTGsbfnjs2XB00cW8bisYR5aF%2F5zQeACI%2BCNJavxoSWq8TPe1NPAfPCvcz9xK5JSvzMd%2B41WnmBjI9843OMYlKjMsh6qH9l8kusLfvBtP41Cu%2Bwhf1DnxMgR8wLEOqeYoUO4UzJIyFAmBzfj9FE9JizR%2BydPZCtnA74v%2F619hXep1ArHjscpoIYND7%2BeGSdzn8Y%2FugDDnT05drjFK3tOBDX%2BiM8MURp46fhZ%2BykZ7bGnds5YLmc%2ByQEY0OMjK7y%2FtXWBrLGwnvIQDkR9%2FlshQc2eU6mnyEL5Sywv%2FLJDA4gP7fgXCSQZ1FyreWVdQQZBk044uagyQDcsFaTGUIcwoZxFQbdBQhkpzTggmiYl4naV7LQg0zak2djQR7pnMNF36hBOh5U6XcbfXnk05VD5xCFfpJjKZTOTk8EcF8JHpPWRTFjhsP2isTocASJJk963K57LM%2BE2vpJPMMTYvZvgMwzkloQm4scZffUUKTn%2B6oACU8g9ljDAs6jDBjqkAY3Idm16e2ehpYBp0jTGzEDzaa6Kg92DHw8nNKv0zbr5R2Hc4Mq%2FMFjGRyGFnCRqHHwTSvY%2FSDKw0XQNLa9Tym4tStITTNk%2BwJ0Ad7j12oQ%2BWq%2FSUY0M9FlJdvj%2FmibP0saqV8txJc8vlcNWa%2FO2ALJh3fOFb9a179Fj4pAM%2FuavSk1jgSG2ATZt1B8KsQEE4WVDcUR3egEax6mahrzuWfZBXPw3&X-Amz-Signature=60383e4a5d8e6604426fb13dc6497ea24e202c61ea3e4867448b032917ffea42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
