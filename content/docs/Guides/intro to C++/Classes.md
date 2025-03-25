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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKP2T3MX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu7ssRz%2BjFReX8UMjCcdeQ2nvsp0iY9USaUsWjJXaAVQIhAP5W9Yl19lcbMHp9fNFW8Lhp4Y4CpuIkZjfy4RjVVx3UKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5yLgbuCIVUXOm4Rcq3ANVxujDT4ebwj1ljg9lC9e7bK%2FG6dyOPznw5KGO6jBqj%2Fu0LoF9%2FAoQOkPKNsukqemFAhE7%2BPVO3thom%2BxPVZLCx81uvs3n2aJviY4xoQL6b1FudMK4En%2F2RUnsYU8uI0upsav%2BGyuCjwrc7SHf4YfkbJl%2FhgGQ91hoyNwwjICfmjnLPXcF6fgI%2Bm3y9KoV39FUqgPy3HyikhpojwcvKZRNvYB2BzdLmZ%2FBT66MLwpPVOMw8bEagbmrSJj3reLBZVd%2BE7VhY4OoHV7cIIaWp2uOgTWoSOXpixqF%2BZgyC7eWkRpTdFLohkvHZVQ9FVfp7ruH4BNrztj6OEseHDhu9%2FdxCq65xJeIJ6NaG%2FvCM5YYCzVx15YVXJYxHabuNCfGddpQrZ78vZZ0WTvsEhU0xGm1ZYe5IeM7X4eOwqrJ912rWTYxLnRqLyQdXRInsAVYWJUVgrLfFDviDCeYU%2FV5tgUYR0pRcve2OmAy0VyjsFwJglRqM1Rt1%2FfkzcZxEi9NxpjC9H6BR9GSSx2XUMIzxcIari0EDbbn8sQAuzWgA3IPytHTM1BJhj3uktTF89axcYQWsY3jC78wEROaVhEZAzEDm7QTul6%2F6SSP9Qu%2FSb%2BTb96w8hoPHpoIvlR9dzDk8Yi%2FBjqkAYIvbom9ZcGmOf8ObO5E8uXNB03ywTxmEnhBQc703agvJw3ibsXkZe%2F2R9GL6Xy8RMkYhqUzyI%2B%2FVou8XPyVt685h6KSjlyLV1A3Wn9R6%2F7N%2B2rftgaIIqxwMPLx4M%2BkzQdDaf7zfvlyzp7CbOY5VDBJp15mPAQq3nl%2FJiTcConk%2FohdICsc5akasBQnGEYKvUJ4K7%2F4W2NnSyqHV6lFD5pLFtc%2F&X-Amz-Signature=1105243b9a359372b898bdf3222cd852314f04c8462ebcd3680506b0690acad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
