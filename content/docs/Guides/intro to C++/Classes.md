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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677CWJZ3E%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDfB02YKyOAVRhh8FsM%2BZHOR6NZFf5yocSg67YcantwEAiBDKJk5Gidzw61jfQs6vuMbr69t0RLWTggBVuOyeuOsRir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMTkZiCVcCY34wKyzPKtwDaIImi%2BoOa6h8WsqnwrbTMcktCz%2F7N84L00PnVsW2tpcB98eEd4FKgXfqxpyBLciOXAteWNV1PQX9IHx1E6jtw01gcu94OwLpsqOQ%2F7oKfz8MTpEk3WWNdejgHAkcwp8UQpt9HRY2OQYtthwBT8g6LmJmO70aS8cKgOZB30P8ew6ozyic9jikXFlpiTdgfvK%2FsvZuNes3IUcyJG2JR371TTt9i1hC%2BgCvacZTuoQRi8XEgGH688a8x4jkNnviX1AUdMG6IgTkn5t5DcytjkT06VVObi8ph%2FlG4bNUw75Dij9EsAeuzzJDX4Tm8G1vhiwwwVALKgXfyOOZza4D3sVYpJXD3eynQBf%2FAQLXg9%2FWf4C0eniR%2BRpUvz3Zru%2Bj8gBBiHD7QUex6QTTLCASUkWHSX12f1%2FNAnXWWSu2t%2FYeZL%2FE6moTBKK%2FXrzxNMNxpA%2FIpN2SzRziu9xD5BtcscHRe3f9g9SlfD7sEgkmEJmFCUOBJHT3SSU7Ll7CLQxgJCT9NhVG2ifOg8lExquAI8Tb7P1FBN0%2BKt739hLZcIqyY62oJD1FKMjXNSMUiNx1jhzi%2FgIuCbCT85DPu6PvEGtr1oJL5IpntSi90fChX4ImWsXXL4RUO%2FiQlCiwuQcw86LqvgY6pgHp4rPxlG5HTng90K9q60ZkBAuJEJutWC%2Bay6%2FaNjwvJ6j0bzhWI8oQ7tLofTMvwV4a%2FGjBigZoL6XcPJ6VW1Q%2FUyIw18iTVz7s9%2FiI7GoGGv9ilMNdgkUoIlbDjz%2BSOtyrUKvBJ8VhlsgJLiA19ftLtyHdawAlY9Vu71TIKpeFU5APL6SefuGL0pMTOdvVSFekO4jecJzCK%2BV4hm4gyQexXEaJrfA%2F&X-Amz-Signature=70d848ab1b1cefb36e088fc6823bb41604500b45a2c31deb7064bfeacf294ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
