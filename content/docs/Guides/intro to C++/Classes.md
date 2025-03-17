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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4U2PRAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl0ChgBE1G7xIwDHPBuS6hgSuZKX1c0UO8%2B4gMTQ9t5gIgZhO4tn3%2BdHkIM8ovuHb%2Bc1LwZEJuxC%2FBGbLoJfTnuhsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMeNzllPz5ZPBJpBkircA0bBp3egLn2oWxJE0MQt4siFeHN9ZdHyNhWPbI8ztPCJ6knVTIml2eSZcweRj%2FybgZaKB7da8NI0X3OxX3Okh2uD%2FPmBCOiAZSqFZFaZHBBE07GJ7o9t2WsMD8uyyAMqf1dTrr%2BATzvBah%2BLV1ph%2FcwLAxfsnVT34oSHJUgzSDQx6BTtdjRjpnBocx1Z2uhRKF1%2Bl9xMuKQ9aAUFYtIaJPBtETTWWI%2Fgupaz%2BoKNOp7WUYba9vpQBv%2F1IiTtCnkhYKjxedrKNThokOo35W2zqFyPbsC0fEyAuT8KeEY9k32siPDJPjclv7kya0BH7w6JhTw49Bx8dC8FaS%2FqY66sQhrIz73omLTOTz%2FEYKlWER1bW78t%2BL%2F3atMZVBZ8Us5KFhmDAQYLcFXDmN2hmJlALzo6NZjmk%2FhORJSUlXXb8dcKb6ldtRrbtvq40Y6G%2Bc78%2BPtE5lRNfdUTcxNjqMiiSbDAOuTqCr0%2FHr7XluSHaiU1ywDWKcXhRzuh7QWROXTKEkptl%2B%2FAgCLZtUO5y18NPAoB2aXyLq%2BOFM54z3qs%2BJcZL51kHnwnUHN45pzdb4b3qYb9Jeq6L9J67y4w6Hi%2B%2FDuf3HMlJJyCL3Ml1BBdmtuQbX5K5VeUYc7XNc5SMMyb3r4GOqUBzox41kMPOm%2F0bOvA6Q9o%2FbdbhNCDyWjOYzRIpF%2FIMowoyw8mUmydKeW3hq6l44M1MVwSf7KIUs7qVc5uAy4KgYlbUYiDKxNeYSfjPvekeP91439As7f6d4Uxu71Ujqv4z4q%2BYTOxKyVb3L%2BHjOP4umhVCI7IHSXBIdMv6diJ6z9oBomXG8ZClrxfwdqtekYCIbjlWk6dArR%2FYe0PqNz0VAY%2FYide&X-Amz-Signature=ff540c8ad496a8c6482f803ab084d0094ce385fb396658761c3e24071c3712a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
