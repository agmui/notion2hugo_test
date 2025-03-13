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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTSTEAN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfIsV8spc85Po%2Fn4Fw%2FuDV9HC89NZaey9khB0mC7%2FCMAiAwj4bjowzXRrCLf6dkg5qn9l4bXwPbnmBdPGpQWk9qLyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIbYFuSycgQ1JWnK5KtwDdN6nmUk47lR%2Fb61b2XprTkZ6aa9z6Vy2akBNFS17wcuh00xf7I5UmsTcIoPuNty%2BxToRYKqtaul7qnPVvuIB1jaFverU6x6grsJ5j1V115S7x6KvFakNkIGnvzZIZflphWOOcB%2FRygvKpPlJCi3esJeoFZP3b%2F3iB5GvaFlmT2aRFrAvY6CM9KR4jiVMsa9HJJY8I8MZA8OYmjnMGdj2SL2fdEtt2DBFk%2F3Sy%2BNHSYeCHTD52RAx8Wua5%2BCGfDhipcdQGB7DjcnPRKHYA2rEUjhshSkqYlOgQbs16zYOwxzgRml9mo6Kl1xkmEtkhtb2LtXEhm5U6H9wopV97pbz6QdfSkgQjuCipk5Cq5BGd9mRYSPMP4AkNGxPRk8QYEZtGsHay5dB5dCQqakvzC4GBebNpcg3dspWONzKqJkD11OmDrw%2FJoJYGERTtyZu4w79rwrzmFzWCV4I4UZPbdBCs%2FjMUe5Tc91IRWBwLpO9nV7xuRRFrp5eBg%2BaAJb5zCyygkh75Izx8SIEccVNQloooTRyT8xMHJ7HUcWF2rufkLeOS%2FBwAKFmB7GWTJskf7fIjpuIMNxqV00Ea%2FJ1%2Bj6xgbx5MoJt2xknKhTpaRdVOe1HJY2fYBPCfv4Ypy4wrNrLvgY6pgFTWCdMnB2kRg6z9zhPvgrM39fbW2C7OhiKjQ9Szz%2Fzn%2BKUXsyYo12HzuS4TQDFSgn9nnnGbdlmmPe2EV7ixjTVWaGkvl5Z%2BiNzt9EgZxN02CnJqI%2BvThclCrjpUx8kvv%2FmdFEgJnBIbZN41cKJcIPNz919K8zI%2B4%2Bmayn%2FbhcXNz61qdToeIjTV054J9UMWsWRY7mJFnMPQOcphzz2OZYqt2Ua58Kj&X-Amz-Signature=b5715ffe0ac3f4c30f4daf157b0dba146b9714ab4bd8e8fba4832262109da934&X-Amz-SignedHeaders=host&x-id=GetObject)

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
