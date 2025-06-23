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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBLN6AD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHrusFioz7Zd0yaosWgJ6VZix9Fac5dPZ7vhq%2F2yQXEvAiBIrpK1ujFdxFQbHI1eOU4xeOpsUWaPWAiSH9nzE097iir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMtaHz0lwMn1k%2BnVOFKtwDnrQONYS158v%2BhY8fwgfoluagTw20nhN65RnENY311PJBKZGuQQLCSzpg3Zno7rnGi4JR7WYmqf%2BCyEmtX%2BNw%2BS2%2FbxTtJvBKb35wS9wnTZe%2FLzBmwXZoMF%2FgThfqCZBc7bMis52v8SCcpOy5ZUcAtffBNxZHV6q9tCLQB694mUYqpWCAemmnwvLnkXV5%2BWuDKMD%2Fqwo2k4QSJJMqo15zzCA353huIVLpYblId5Hp5kNsA4XXcIq0%2F6ZnPbMiDyy9z%2BTeFiz20N3k1BkfshQCywkPH6bQZJBHG5lVHab9b7rAcM%2FDgCHgWmdClNP0sGr%2BiWTcqKvapgTi6z4AnLPSR3%2B171pYvazumEXG%2FjcrZ2FSZ%2Fv4KGakxf78tTHUWKI6fvfMKWnohbsnJS432uq%2FJ2Cp6shxhynM9XAF3FeHpn76VyLry1%2BXLZ%2F2DZbZz1vnE%2FEy9CoI4LgFiUmZBAiBwFP71UJ6acvORG12vl2AyeFzawGTpfcHhy5hRJRe08JVnvTnDvNqsez%2FZTma8SlzAnx0SVcEBoVCsizUF7A9SCKip22Jt9Ve%2BMWC0P70XEi7CG9uHW2PmY1fN5iiapoO1R5OxGFtnCd%2FPzCAzc2LN%2Brt3hJPBOwguxpyf80w1YnlwgY6pgEOm31EPLTaYziBfSsRYn%2FoCEfH6lBtTMz0ry3G78QoaoQdedBiTWMH1o0LV1YzWm4XGEi57R%2Fi%2FaFY9fhqxzSXPq82za0r5Lm0Vg9qagKiJJodcmW2E6gTz%2BNTJb2EqTepRPnODPtyitJ7wAfmUn6mp2vkc6ldNnu7zgWUB5OgJfi%2BqLZzlzfRX7tYhxnVqBqSFEs5Fs47Kb3Wm%2Bf1zwU%2F%2BqJWxQbK&X-Amz-Signature=c060da06532c6e690496d27dcd3e1ca3bc0321666e512851eb2654d1e81b6138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
