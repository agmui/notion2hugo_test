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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TPJNOFJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC8TQN%2FnOEL0v%2BRPAr9n7J9GO6a9501p4CDzsnA0mEMigIhAOmmaVb8su8bCvufzXiy9NtaO1eAig%2Bp%2B790UTZ70SzVKv8DCF0QABoMNjM3NDIzMTgzODA1IgxNtaD6cMFqA1Ir2CEq3ANDJg3xDEFQZtbmsFBHJUtkHb7Norr%2FbF2f4lBjnnvHes64Vj58K%2B28ZWKpgcZ24qCxu%2B%2Bun9CEFB6jnwPd7wI8gl2eYTrzxrvRNc9snw3Fq9hqxoQLkyCLpXGDUN2a2zBwp96UZNHYfRdEjlNjBvSUrQtGmR4uJGdit9EDPy1e5SdrbdSFd42pqfK%2BS5O3M%2FJUJ5QbZtBb7A6SMPxfARBWi17RfZLFq34ONcaSjUCfcU3eyuR3CmfhOTORcc3tqtbL062JO0batITjmtPoNgDROMGjxrrWdi634Yy%2F2vzJ0iO6vMWxPB2OQQizO4CCcHyhl7apFn1Ycg9yuhHMZ3SnihxaNKWr33eQgYYKKP%2Fq7YA5%2BsdDlCYZb%2Ft%2Btd%2BO%2FV060wjKyRwvFAtlhWzYTBVeNDJPOaAUQ28UFF%2BIHseWprxQBBZF1FIR8OUovEo9oLFdhBwDw3WVfW68lXKlHb%2BtPeZioPF7SGSWQKjuxBabWqqLxUR5XonUNUAhkuDR06IIHIjuG6TJjq3cOV4ZPevxnQgFvNdqXM2ereWOkxhlSugSqBAtU8GyGK%2B0r3DN8XdyU3mMXK3vD8%2FfGOtoSVMdOhj4mzxzHdxDuhkO9m43dB2PYIZtPEynbwbPpTD6mMe9BjqkARFTalBeSuUwkzHwyh3fNzvzQflxqyjUfaWx3q%2BVQFGhJHH5DC9pp2rxVanNZCa5ok%2F7VY8RnvsGPiJqtSNSZf7DCRG%2Bhhri3%2B1%2FdVbFxEkIcRRh68syu6XjvEBEAyC8D%2FunQ2FyuLh4Qb7GmsGfV5BdXhxYUrkXtdB9PjIfCy0i7xCuyd4n7hseizRQJZSde5x2NQTGwKyLACrCK1g%2BSYP3uVj9&X-Amz-Signature=3bb8e1fb22e5701f599fec5d51eaea4e805cade13c5b88f60673ccb43dea17e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
