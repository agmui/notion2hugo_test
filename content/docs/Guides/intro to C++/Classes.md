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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662745VYV2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtbtE5XHjO8647KLvJ5MCdRKuHlMB5KQAHoxmsOZqbHAiBFH33cXalYiGmdNEIpEaYg2faGHybN2%2Bcx0EC01fU4NiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX8Hx%2B13jvfzNtwoSKtwD0wKOb0sWsYvmcKI890Lk24SZA7foqj1JOCjRhl5hKcMss%2B0GshWeYaLjE6zj6YRwq6KNW8ViQy9kPgZeozS%2BssotCi9%2Bg2JKnRVy9M2Q9RFvg6Wnid93a0cbTONiBuJldfTnqdEL7Q23XmlEcnCiLJOkbVaNWzObhv7kDzRInQl%2BaCsvNEYy6ZPi8xWDAasQqcWYM6kVN8IFRduaj%2FKnOphFGEJZm2eH7Q7Cwf4C51qBFfGZ3TaDd1ryQI1nBEAL%2FGxbsOD2H4EbuBqT7x5LrEMTx7xNsUJFsXwrcjr0l%2FHsjcTV09Xhw%2Ft%2FZ%2FABaJs5tEbg9m8E1OAybRmFOWrr2EjBf1k8f%2Bkk9fWLH81e%2BAMP0LQUF0owuBFp%2Bq5YKz1XQ9PUZJYfKxWCQDQO9plqkShS8g%2BHOcoVh%2BKyyJ5N4VArDjojwH8BAF6p83Rt24JJoVFrq%2BvO85qZBOF8nxbJ9uRvRdxt%2FS4mP9oD34r91p%2Bg9DeETiTvHac1zsIInZjELDlAIN6CqXF7z9OqS35WNCErRIR4%2BOXt2KSvyoTU12wiTQrelhM7TNLmMIhnDnk7YtYvh29X71Q7UYRyRfj9hmmcVf59TMnYwLq0cMSj6qrXGqMhL7lcGMHUN%2FMwhbmrwQY6pgEGvh9yZIv1j%2B4ZjR2N4PBi0bC6t3aM0JYtiYyW2htq4cONqHy4x6EBIuKdvzJuBClVyYtkrWMsfPCNhKC5eq%2FlL%2Bp412lYVFuKTzTWfBd7beRxLkq7qTgmOaf18ONlUSFvbHZjmWyoMLgEE1YAob1DcmqRxoZpCsrOcRFD7pPvHgPL%2BZJ5IouFFc%2FdAwn44xKGNNOyk%2FQ1QRrY6RA1HDHqpE5I%2BmjY&X-Amz-Signature=c370586d4ef00a693bfa448e1c7388014b7ddb9ab1bd0a30823601639a680003&X-Amz-SignedHeaders=host&x-id=GetObject)

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
